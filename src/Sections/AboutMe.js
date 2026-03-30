import React, { useEffect, useRef, useState, useCallback } from "react";

const EMOJI_OBJECTS = [
  { id: "soccer",     emoji: "⚽",           springK: 0.10, damping: 0.87, animClass: "float-a" },
  { id: "camera",     emoji: "📷",           springK: 0.07, damping: 0.84, animClass: "float-b" },
  { id: "airplane",   emoji: "✈️",           springK: 0.12, damping: 0.89, animClass: "float-c" },
  { id: "f1",         emoji: "🏎️",          springK: 0.09, damping: 0.86, animClass: "float-a" },
  { id: "coding",     emoji: "💻",           springK: 0.08, damping: 0.85, animClass: "float-b" },
  { id: "gaming",     emoji: "🎮",           springK: 0.11, damping: 0.88, animClass: "float-c" },
  { id: "headphones", emoji: "🎧",           springK: 0.09, damping: 0.86, animClass: "float-a" },
  { id: "running",    emoji: "🏃🏽‍♂️‍➡️", springK: 0.10, damping: 0.87, animClass: "float-b" },
];

// All clustered together at spawn; repulsion will spread them naturally
const INITIAL_POS = [
  { xPct: 0.789, yPct: 0.491 },
  { xPct: 0.794, yPct: 0.491 },
  { xPct: 0.799, yPct: 0.491 },
  { xPct: 0.787, yPct: 0.497 },
  { xPct: 0.792, yPct: 0.497 },
  { xPct: 0.797, yPct: 0.497 },
  { xPct: 0.789, yPct: 0.503 },
  { xPct: 0.796, yPct: 0.503 },
];

// Box is centered on the spawn cluster
const BOX_W = 360;
const BOX_H = 320;
const BOX_X_PCT = 0.810;
const BOX_Y_PCT = 0.497;

const EMOJI_SIZE  = 40;
const PULL_RADIUS = 160;
const REPULSE_R   = 105;
const REPULSE_STR = 180;

function attractForce(dx, dy, dist, springK, activation) {
  const gravPull   = Math.min(REPULSE_STR * 0.025 / dist, 8);
  const springPull = dist * springK;
  const t   = Math.min(dist / 300, 1);
  const mag = (gravPull * (1 - t) + springPull * t) * activation;
  return { ax: (dx / dist) * mag, ay: (dy / dist) * mag };
}

function AboutMe() {
  const sectionRef = useRef(null);

  const cursorRef = useRef(null);
  const posRef    = useRef(INITIAL_POS.map(() => ({ x: 0, y: 0 })));
  const velRef    = useRef(EMOJI_OBJECTS.map(() => ({ x: 0, y: 0 })));
  const [positions, setPositions] = useState(null);
  const [boxRect,   setBoxRect]   = useState(null);
  // "visible" | "hiding" | "hidden"
  const [boxState,  setBoxState]  = useState("visible");
  const boxDismissed = useRef(false);
  const rafRef = useRef(null);

  // Init positions + box rect
  useEffect(() => {
    const init = () => {
      if (!sectionRef.current) return;
      const { width, height } = sectionRef.current.getBoundingClientRect();
      posRef.current = INITIAL_POS.map((p) => ({
        x: width  * p.xPct,
        y: height * p.yPct,
      }));
      velRef.current = EMOJI_OBJECTS.map(() => ({ x: 0, y: 0 }));
      setPositions([...posRef.current]);
      setBoxRect({
        x: width  * BOX_X_PCT - BOX_W / 2,
        y: height * BOX_Y_PCT - BOX_H / 2,
        w: BOX_W,
        h: BOX_H,
      });
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  // Physics loop
  useEffect(() => {
    const tick = () => {
      if (sectionRef.current) {
        const { width, height } = sectionRef.current.getBoundingClientRect();
        const cursor = cursorRef.current;
        const pos = posRef.current;
        const vel = velRef.current;
        const newPos = pos.map((p) => ({ ...p }));
        const newVel = vel.map((v) => ({ ...v }));

        EMOJI_OBJECTS.forEach((obj, i) => {
          let ax = 0, ay = 0;

          if (cursor) {
            const dx   = cursor.cx - pos[i].x;
            const dy   = cursor.cy - pos[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < PULL_RADIUS) {
              const activation = 1 - dist / PULL_RADIUS;
              const f = attractForce(dx, dy, dist, obj.springK, activation);
              ax += f.ax;
              ay += f.ay;

              // Dismiss the box the first time any emoji gets pulled
              if (!boxDismissed.current) {
                boxDismissed.current = true;
                setBoxState("hiding");
                setTimeout(() => setBoxState("hidden"), 450);
              }
            }
          }

          EMOJI_OBJECTS.forEach((_, j) => {
            if (i === j) return;
            const dx = pos[i].x - pos[j].x;
            const dy = pos[i].y - pos[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < REPULSE_R) {
              const force = REPULSE_STR / (dist * dist);
              ax += (dx / dist) * force;
              ay += (dy / dist) * force;
            }
          });

          newVel[i] = {
            x: (vel[i].x + ax) * obj.damping,
            y: (vel[i].y + ay) * obj.damping,
          };
          newPos[i] = {
            x: Math.min(Math.max(pos[i].x + newVel[i].x, 0), width  - EMOJI_SIZE),
            y: Math.min(Math.max(pos[i].y + newVel[i].y, 0), height - EMOJI_SIZE),
          };
        });

        posRef.current = newPos;
        velRef.current = newVel;
        setPositions([...newPos]);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    cursorRef.current = { cx: e.clientX - left, cy: e.clientY - top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    cursorRef.current = null;
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hobbies box */}
      {boxRect && boxState !== "hidden" && (
        <div
          style={{
            position: "absolute",
            left: boxRect.x,
            top: boxRect.y,
            width: boxRect.w,
            height: boxRect.h,
            opacity: boxState === "hiding" ? 0 : 1,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
            zIndex: 5,
            borderRadius: "20px",
            border: "1px dashed rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "14px",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            my hobbies
          </span>
        </div>
      )}

      {/* Emojis */}
      {positions &&
        EMOJI_OBJECTS.map((obj, i) => (
          <span
            key={obj.id}
            className={`about-me-emoji ${obj.animClass}`}
            style={{ left: positions[i].x, top: positions[i].y }}
          >
            {obj.emoji}
          </span>
        ))}

      <div className="relative mx-auto max-w-screen-xl px-6 py-20 lg:px-8">
        <div className="flex items-start gap-12">
          {/* Left: 2/3 text content */}
          <div className="flex-[2] min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              About the things I love and build
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
              I build software that moves with purpose. As a current sophomore
              at UW-Madison, I'm always looking to build my skills. I love the
              challenge of building a project from the ground up, and always try
              to apply myself to real-world situations. Outside of CS, I obsess
              myself in some of my hobbies shown here :)
            </p>
            <div className="mt-10 rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-bold tracking-tight text-white">
                The motive behind my work.
              </h3>
              <div className="mt-8 space-y-6 text-base leading-7 text-slate-200 sm:text-lg">
                <p>
                  I knew I loved technology the day I stepped into my first high
                  school computer science class. Immediately hooked by the
                  endless possibilities, I knew that I wanted to become a
                  Software Engineer.
                </p>
                <p>
                  Today, I combine my curiosity for sports, photography, and
                  travel into software that feels dynamic, thoughtful, and fun.
                </p>
                <p className="text-slate-100 font-semibold">
                  I love shipping code that solves real problems. I move
                  fast while staying thorough, and welcome challenges that push me
                  to learn quickly.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 1/3 emoji zone */}
          <div className="flex-1 self-stretch min-h-[420px] hidden md:block" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
