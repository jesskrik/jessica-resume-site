import { roles } from "@/lib/content";
import SectionLabel from "./SectionLabel";
import Role from "./Role";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-b border-ink/100 py-[clamp(56px,8vh,96px)]"
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        <div>
          {roles.map((role, i) => (
            <Role
              key={i}
              role={role}
              isFirst={i === 0}
              sectionLabel={i === 0 ? "Professional Experience" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
