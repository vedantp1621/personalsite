import React, { useEffect, useRef, useState, useCallback } from "react";

const EMOJI_OBJECTS = [
  {
    id: "soccer",
    emoji: "⚽",
    springK: 0.1,
    damping: 0.87,
    animClass: "float-a",
  },
  {
    id: "camera",
    emoji: "📷",
    springK: 0.07,
    damping: 0.84,
    animClass: "float-b",
  },
  {
    id: "airplane",
    emoji: "✈️",
    springK: 0.12,
    damping: 0.89,
    animClass: "float-c",
  },
  { id: "f1", emoji: "🏎️", springK: 0.09, damping: 0.86, animClass: "float-a" },
  {
    id: "coding",
    emoji: "💻",
    springK: 0.08,
    damping: 0.85,
    animClass: "float-b",
  },
  {
    id: "gaming",
    emoji: "🎮",
    springK: 0.11,
    damping: 0.88,
    animClass: "float-c",
  },
  {
    id: "headphones",
    emoji: "🎧",
    springK: 0.09,
    damping: 0.86,
    animClass: "float-a",
  },
  {
    id: "running",
    emoji: "🏃🏽‍♂️‍➡️",
    springK: 0.1,
    damping: 0.87,
    animClass: "float-b",
  },
];

// All clustered together at spawn; repulsion will spread them naturally
const INITIAL_POS = [
  { xPct: 0.2, yPct: 0.28 },
  { xPct: 0.4, yPct: 0.28 },
  { xPct: 0.6, yPct: 0.28 },
  { xPct: 0.8, yPct: 0.28 },
  { xPct: 0.2, yPct: 0.64 },
  { xPct: 0.4, yPct: 0.64 },
  { xPct: 0.6, yPct: 0.64 },
  { xPct: 0.8, yPct: 0.64 },
];

// Box is centered on the spawn cluster
const BOX_W = 360;
const BOX_H = 320;
const BOX_X_PCT = 0.5;
const BOX_Y_PCT = 0.5;

const EMOJI_SIZE = 40;
const PULL_RADIUS = 160;
const REPULSE_R = 105;
const REPULSE_STR = 180;

function attractForce(dx, dy, dist, springK, activation) {
  const gravPull = Math.min((REPULSE_STR * 0.025) / dist, 8);
  const springPull = dist * springK;
  const t = Math.min(dist / 300, 1);
  const mag = (gravPull * (1 - t) + springPull * t) * activation;
  return { ax: (dx / dist) * mag, ay: (dy / dist) * mag };
}

function AboutMe() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const query = window.matchMedia?.(
      "(max-width: 767px), (prefers-reduced-motion: reduce)",
    );
    const sync = () => setIsMobile(query?.matches ?? true);
    sync();
    query?.addEventListener?.("change", sync);
    return () => query?.removeEventListener?.("change", sync);
  }, []);

  const cursorRef = useRef(null);
  const posRef = useRef(INITIAL_POS.map(() => ({ x: 0, y: 0 })));
  const velRef = useRef(EMOJI_OBJECTS.map(() => ({ x: 0, y: 0 })));
  const emojiElsRef = useRef([]); // direct refs to emoji DOM nodes
  const boxElRef = useRef(null);
  const boxDismissed = useRef(false);
  const rafRef = useRef(null);
  const [boxRect, setBoxRect] = useState(null);

  // Init positions + box rect — desktop only
  useEffect(() => {
    if (isMobile) return;
    const init = () => {
      if (!sectionRef.current) return;
      const { width, height } = sectionRef.current.getBoundingClientRect();
      posRef.current = INITIAL_POS.map((p) => ({
        x: width * p.xPct,
        y: height * p.yPct,
      }));
      velRef.current = EMOJI_OBJECTS.map(() => ({ x: 0, y: 0 }));
      // Apply initial positions directly to DOM
      emojiElsRef.current.forEach((el, i) => {
        if (el) {
          el.style.left = posRef.current[i].x + "px";
          el.style.top = posRef.current[i].y + "px";
        }
      });
      setBoxRect({
        x: width * BOX_X_PCT - BOX_W / 2,
        y: height * BOX_Y_PCT - BOX_H / 2,
        w: BOX_W,
        h: BOX_H,
      });
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [isMobile]);

  // Physics loop — desktop only, writes directly to DOM
  useEffect(() => {
    if (isMobile) return;
    const tick = () => {
      if (sectionRef.current) {
        const { width, height } = sectionRef.current.getBoundingClientRect();
        const cursor = cursorRef.current;
        const pos = posRef.current;
        const vel = velRef.current;
        const newPos = pos.map((p) => ({ ...p }));
        const newVel = vel.map((v) => ({ ...v }));

        EMOJI_OBJECTS.forEach((obj, i) => {
          let ax = 0,
            ay = 0;

          if (cursor) {
            const dx = cursor.cx - pos[i].x;
            const dy = cursor.cy - pos[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < PULL_RADIUS) {
              const activation = 1 - dist / PULL_RADIUS;
              const f = attractForce(dx, dy, dist, obj.springK, activation);
              ax += f.ax;
              ay += f.ay;

              if (!boxDismissed.current && boxElRef.current) {
                boxDismissed.current = true;
                boxElRef.current.style.opacity = "0";
                setTimeout(() => {
                  if (boxElRef.current) boxElRef.current.style.display = "none";
                }, 450);
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
            x: Math.min(
              Math.max(pos[i].x + newVel[i].x, 0),
              width - EMOJI_SIZE,
            ),
            y: Math.min(
              Math.max(pos[i].y + newVel[i].y, 0),
              height - EMOJI_SIZE,
            ),
          };

          // Write directly to DOM — no React state update
          const el = emojiElsRef.current[i];
          if (el) {
            el.style.left = newPos[i].x + "px";
            el.style.top = newPos[i].y + "px";
          }
        });

        posRef.current = newPos;
        velRef.current = newVel;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile]);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    cursorRef.current = { cx: e.clientX - left, cy: e.clientY - top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    cursorRef.current = null;
  }, []);

  return (
    <section id="about" className="about section-pad">
      <p className="eyebrow">About me / Beyond the screen</p>
      <h2 className="about-lead">
        About the things
        <br />I love and build<span className="accent">.</span>
      </h2>
      <div className="about-grid">
        <div className="about-biography">
          <p>
            I'm a Junior Computer Science and Data Science undergraduate student aiming to graduate
            in Winter 2027. I've always loved the challenge of building a project from the ground up, 
            and always try to apply myself to real-world situations. Outside of CS, I obsess
            myself in some of my hobbies shown here. 
          </p>
          <div
            className="hobby-field"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <p className="eyebrow">My hobbies</p>
            {!isMobile && boxRect && (
              <div
                ref={boxElRef}
                className="hobby-boundary"
                aria-hidden="true"
                style={{
                  left: boxRect.x,
                  top: boxRect.y,
                  width: boxRect.w,
                  height: boxRect.h,
                }}
              />
            )}
            <div className={isMobile ? "hobby-static" : "hobby-animated"}>
              {EMOJI_OBJECTS.map((obj, i) => (
                <span
                  key={obj.id}
                  ref={(el) => (emojiElsRef.current[i] = el)}
                  role="img"
                  aria-label={
                    [
                      "Soccer",
                      "Photography",
                      "Travel",
                      "Formula 1",
                      "Coding",
                      "Gaming",
                      "Music",
                      "Running",
                    ][i]
                  }
                  className={
                    isMobile ? "hobby-tile" : `about-me-emoji ${obj.animClass}`
                  }
                >
                  {obj.emoji}
                </span>
              ))}
            </div>
            {!isMobile && (
              <button
                className="hobby-scatter text-link"
                onClick={() => {
                  velRef.current = EMOJI_OBJECTS.map((_, i) => ({
                    x: Math.cos(i) * 12,
                    y: Math.sin(i) * 12,
                  }));
                  boxDismissed.current = true;
                  if (boxElRef.current) boxElRef.current.style.opacity = "0";
                }}
              >
                Mix things up
              </button>
            )}
          </div>
        </div>
        <div className="about-motive">
          <h3>
            The motive{" "}
            <br />
            behind my work.
          </h3>
          <p>
            I knew I loved technology the day I stepped into my first high
            school computer science class. Immediately hooked by the endless
            possibilities, I knew that I wanted to become a Software Engineer.
          </p>
          <p>
            Today, I combine my curiosity for sports, photography, and travel
            into software that feels dynamic, thoughtful, and fun.
          </p>
          <p className="motive-closing">
            I love shipping code that solves real problems. I move fast while
            staying thorough, and welcome challenges that push me to learn
            quickly.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
