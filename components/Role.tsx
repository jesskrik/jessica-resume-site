import type { Role as RoleType } from "@/lib/content";
import Project from "./Project";

type Props = {
  role: RoleType;
  isFirst?: boolean;
  sectionLabel?: string;
};

export default function Role({ role, isFirst = false, sectionLabel }: Props) {
  return (
    <article
      className={[
        "reveal grid items-start py-[clamp(28px,4.5vh,52px)] md:grid-cols-[1fr_2fr] md:gap-[clamp(40px,6vw,100px)]",
        "grid-cols-1 gap-4",
        isFirst ? "border-t-0 pt-0" : "border-t border-ink/100",
      ].join(" ")}
      style={!isFirst ? { borderTopWidth: "1px" } : undefined}
    >
      {/* Meta column (sticky on desktop) */}
      <div className="md:sticky md:top-20">
        {sectionLabel && (
          <div className="section-counter mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-widest3 text-ink-soft">
            {sectionLabel}
          </div>
        )}
        <div className="mb-2.5 text-[11px] uppercase tracking-widest2 text-ink-soft">
          {role.period}
        </div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          {role.place}
        </div>
      </div>

      {/* Content column */}
      <div>
        <h3 className="mb-1.5 font-serif font-semibold leading-[1.1] tracking-[-0.018em] text-[clamp(28px,3.6vw,44px)]">
          {role.title}
        </h3>
        <div className="mb-4 text-[14px] text-ink-soft">
          {role.company}
        </div>

        {role.summary && (
          <p className="mb-3 max-w-[700px] text-[15px] leading-[1.55] text-ink">
            {role.summary}
          </p>
        )}

        {role.bullets && role.bullets.length > 0 && (
          <ul className="dash-list mb-5">
            {role.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {role.projects && role.projects.length > 0 && (
          <>
            <div
              className="mb-6 mt-10 border-b border-ink/100 pb-2 text-[15px] font-bold uppercase tracking-wider text-ink"
              style={{ borderBottomWidth: "1px" }}
            >
              {role.projectsLabel || "Stand out projects"}
            </div>
            {role.projects.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </>
        )}

        {role.achievements && (
          <div className="mt-8 border-l-2 border-ink bg-paper-warm px-7 py-6">
            <div className="mb-3 text-[11px] uppercase tracking-widest2 text-ink-soft">
              {role.achievements.label}
            </div>
            <ul className="dash-list">
              {role.achievements.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        )}

        {role.otherClients && (
          <div className="mt-6 border-t border-dashed border-ink-faint pt-4 text-[14px] leading-[1.7] text-ink">
            <span className="mr-2 font-serif italic font-medium">
              {role.otherClients.label}
            </span>
            {role.otherClients.text}
          </div>
        )}

        {role.notableClients && (
          <div
            className="mt-6 border-t border-ink/100 pt-5 text-[14px] leading-[1.7] text-ink"
            style={{ borderTopWidth: "1px" }}
          >
            <span className="mr-2 font-serif italic font-medium">
              {role.notableClients.label}
            </span>
            {role.notableClients.text}
          </div>
        )}
      </div>
    </article>
  );
}
