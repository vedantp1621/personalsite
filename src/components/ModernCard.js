import React from "react";

function ModernCard({
  tag,
  tagColor = "bg-sky-100 text-sky-800",
  title,
  description,
  actions = [],
  video,
  layout = "default",
  columnBreak = false,
}) {
  const isside = layout === "side";

  return (
    <article
      className="group break-inside-avoid mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
      style={columnBreak ? { breakBefore: "column" } : undefined}
    >
      {isside ? (
        <div className="flex gap-6 items-center">
          <div className="flex-1 min-w-0">
            {tag && (
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tagColor}`}>
                {tag}
              </span>
            )}
            <h3 className="mt-5 text-3xl font-semibold text-white">{title}</h3>
            <p className="mt-5 text-base leading-7 text-slate-300">{description}</p>
            {actions.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {actions.map((action, index) => (
                  <a key={index} href={action.href} target="_blank" rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20">
                    {action.icon ? (
                      <img src={action.icon} alt={action.label} className="h-5 w-auto" />
                    ) : action.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {video && (
            <video src={video} autoPlay loop muted playsInline
              className="rounded-2xl object-cover shrink-0"
              style={{ width: "38%", maxHeight: "420px" }}
            />
          )}
        </div>
      ) : (
        <>
          {video && (
            <video src={video} autoPlay loop muted playsInline
              className="mb-6 w-full rounded-2xl object-cover"
              style={{ maxHeight: "300px" }}
            />
          )}
          {tag && (
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tagColor}`}>
              {tag}
            </span>
          )}
          <h3 className="mt-5 text-3xl font-semibold text-white">{title}</h3>
          <p className="mt-5 text-base leading-7 text-slate-300">{description}</p>
          {actions.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <a key={index} href={action.href} target="_blank" rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20">
                  {action.icon === "appstore" ? (
                    <svg viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto fill-white">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 405.8 15.6 273 15.6 144.3c0-77.7 27.1-149.2 76.4-200.5 49.2-51.1 114.4-83.4 192.8-83.4 169.9 0 280.6 113.4 351.1 113.4 82 0 207.5-120.1 350.5-120.1z"/>
                    </svg>
                  ) : action.label}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </article>
  );
}

export default ModernCard;
