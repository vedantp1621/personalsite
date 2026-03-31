import React from "react";

function ModernCard({
  tag,
  tagColor = "bg-sky-100 text-sky-800",
  title,
  description,
  actions = [],
  video,
}) {
  return (
    <article className="group break-inside-avoid mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="mb-6 w-full rounded-2xl object-cover"
          style={{ maxHeight: "300px" }}
        />
      )}

      {tag && (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tagColor}`}
        >
          {tag}
        </span>
      )}

      <h3 className="mt-5 text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-5 text-base leading-7 text-slate-300">{description}</p>

      {actions.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20"
            >
              {action.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default ModernCard;
