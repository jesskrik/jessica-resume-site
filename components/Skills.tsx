import { skills } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b border-ink/100 py-[clamp(56px,8vh,96px)]"
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        <SectionLabel label="Skills" />

        <div className="reveal grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="mb-2 font-bold text-[14px] uppercase tracking-wider text-ink">
                {skill.name}
              </h4>
              <ul className="dash-list">
                {skill.details.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
