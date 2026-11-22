import { useEffect, useRef, useState } from "react";
import { afterPaint } from "../lib/afterPaint";

export default function VaultCameraBackground({ sectionRef, onStateChange }) {
  const hostRef = useRef(null);
  const [state, setState] = useState("loading");

  useEffect(() => {
    onStateChange?.(state);
  }, [state, onStateChange]);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setState("error");
      return undefined;
    }
    let disposed = false,
      failed = false,
      engine,
      scheduled = 0,
      observer,
      resizeObserver,
      deadline;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const host = hostRef.current;
    const update = () => {
      scheduled = 0;
      if (disposed || !engine || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)),
      );
      engine.setProgress(progress, motion.matches);
    };
    const schedule = () => {
      if (!scheduled) scheduled = requestAnimationFrame(update);
    };
    const fail = () => {
      if (disposed || failed) return;
      failed = true;
      clearTimeout(deadline);
      engine?.dispose();
      setState("error");
    };

    deadline = setTimeout(fail, 45000);
    const cancelStart = afterPaint(() => import("../lib/createVaultCamera")
      .then(({ createVaultCamera }) => {
        if (disposed || failed) return;
        try {
          engine = createVaultCamera(host, {
            onReady() {
              if (disposed || failed) return;
              clearTimeout(deadline);
              setState("ready");
              schedule();
            },
            onError: fail,
          });
          observer = new IntersectionObserver(([entry]) => {
            engine.setVisible(entry.isIntersecting && !document.hidden);
            if (entry.isIntersecting) schedule();
          });
          observer.observe(host);
          if (window.ResizeObserver) {
            resizeObserver = new ResizeObserver(() => {
              engine.resize();
              schedule();
            });
            resizeObserver.observe(host);
          }
          update();
        } catch {
          fail();
        }
      })
      .catch(fail));

    const resize = () => {
      engine?.resize();
      schedule();
    };
    const visibility = () => {
      const bounds = host.getBoundingClientRect();
      engine?.setVisible(
        !document.hidden &&
          bounds.bottom > 0 &&
          bounds.top < window.innerHeight,
      );
      schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", schedule);
    return () => {
      disposed = true;
      cancelStart();
      clearTimeout(deadline);
      cancelAnimationFrame(scheduled);
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", schedule);
      engine?.dispose();
    };
  }, [sectionRef]);

  return (
    <div
      className="vault-camera-background"
      aria-hidden="true"
      data-state={state}
    >
      <div className="vault-camera-stage">
        <div className="vault-camera-canvas" ref={hostRef} />
        {state !== "ready" && (
          <svg
            className="vault-camera-fallback"
            viewBox="0 0 400 280"
            fill="none"
          >
            <path
              d="M44 88h73l21-26h88l20 26h110v144H44z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="226"
              cy="164"
              r="62"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle
              cx="226"
              cy="164"
              r="43"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M64 76h30v12H64zM160 77h40v20h-40z" fill="currentColor" />
          </svg>
        )}
      </div>
    </div>
  );
}
