import { education } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-b border-ink/100 py-[clamp(56px,8vh,96px)]"
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        <SectionLabel label="Education & Learning" />

        <div
          className="reveal border-t border-ink/100"
          style={{ borderTopWidth: "1px" }}
        >
          {education.map((entry, i) => (
            <div
              key={i}
              className="grid grid-cols-[40px_1fr] gap-4 border-b border-ink/100 py-4 md:grid-cols-[40px_1fr_auto] md:gap-8 md:py-5"
              style={{ borderBottomWidth: "1px" }}
            >
              <div className="text-[13px] text-ink-soft">{entry.index}</div>
              <div>
                <h4 className="font-bold text-[15px] leading-[1.3] text-ink">
                  {entry.course}
                </h4>
                {entry.school && (
                  <div className="mt-0.5 text-[13px] text-ink-soft">
                    {entry.school}
                  </div>
                )}
                {entry.desc && (
                  <p className="mt-2 max-w-[640px] text-[13px] leading-[1.55] text-ink-soft">
                    {entry.desc}
                  </p>
                )}
                <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-soft md:hidden">
                  {entry.when}
                </div>
              </div>
              <div className="hidden self-start whitespace-nowrap text-[11px] uppercase tracking-wider text-ink-soft md:block">
                {entry.when}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
