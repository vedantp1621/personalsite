import { useEffect, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function ScrollPathBackground() {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
  const [arrow, setArrow] = useState({ x: 80, y: 120, angle: 0 });

  useEffect(() => {
    const path = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !wrapper) return;
    if (typeof path.getTotalLength !== "function") return;

    const length = path.getTotalLength();

    const updateArrow = () => {
      const rect = wrapper.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Distance from page top to wrapper top — constant regardless of scroll
      const wrapperTop = rect.top + window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - winHeight;

      // Arrow begins tracking when the wrapper's top is at startPoint from the viewport top
      const startPoint = winHeight * 0.1;

      // travelDistance is set so progress === 1 exactly when scrollY === maxScroll
      const travelDistance = maxScroll - wrapperTop + startPoint;

      const progress = clamp((startPoint - rect.top) / travelDistance, 0, 1);

      const point = path.getPointAtLength(progress * length);
      const next = path.getPointAtLength(
        Math.min(progress * length + 1, length),
      );
      const angle =
        Math.atan2(next.y - point.y, next.x - point.x) * (180 / Math.PI);

      setArrow({ x: point.x, y: point.y, angle });
    };

    updateArrow();
    window.addEventListener("scroll", updateArrow, { passive: true });
    window.addEventListener("resize", updateArrow);

    return () => {
      window.removeEventListener("scroll", updateArrow);
      window.removeEventListener("resize", updateArrow);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-visible"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 3400"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="scrollPathGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(248,146,176,0.28)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.28)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          d="M100 60 C 300 100 320 260 480 300 S 800 320 900 440 S 1000 660 880 860 S 700 980 540 1060 S 320 1140 220 1300 S 200 1460 380 1560 S 820 1620 1000 1600 S 1140 1560 1120 1720 S 980 1860 840 1960 S 700 2060 620 2180 S 540 2300 560 2440 S 680 2560 800 2660 S 900 2780 940 2920 S 960 3080 860 3220 S 720 3340 560 3360"
          fill="none"
          stroke="url(#scrollPathGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
          filter="url(#glow)"
        />

        <g
          transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.angle}) scale(0.85)`}
        >
          <path d="M0 -3 L 9 0 L 0 3 Z" fill="rgba(248,146,176,0.85)" />
        </g>
      </svg>
    </div>
  );
}

export default ScrollPathBackground;
