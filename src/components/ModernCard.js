import { useEffect, useRef } from "react";
export default function ModernCard({
  tag,
  title,
  description,
  actions = [],
  video,
  layout,
}) {
  const videoRef = useRef(null);
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!videoRef.current) return;
      if (query?.matches) videoRef.current.pause();
      else videoRef.current.play()?.catch(() => {});
    };
    sync();
    query?.addEventListener?.("change", sync);
    return () => query?.removeEventListener?.("change", sync);
  }, []);
  return (
    <article
      className={`project ${video ? "project-with-media" : "project-text"} ${layout === "side" ? "project-portrait" : ""}`}
    >
      {video && (
        <div className="project-media">
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            controls
            preload="metadata"
            aria-label={`${title} demo`}
          />
        </div>
      )}
      <div className="project-copy">
        <p className="eyebrow">{tag}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-actions">
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label={`${title}: ${action.label}`}
            >
              {action.icon && <img src={action.icon} alt="" />}
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
