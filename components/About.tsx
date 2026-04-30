import { about, aboutHeadline } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-b border-ink/100 pt-[clamp(20px,3vh,36px)] pb-[clamp(56px,8vh,96px)]"
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-[clamp(40px,6vw,100px)]">
          <div>
            <SectionLabel label="About" />
            <h2 className="reveal font-serif font-semibold italic leading-[1.05] tracking-[-0.02em] text-[clamp(32px,4.5vw,56px)]">
              {aboutHeadline.before}{" "}
              <span className="font-serif italic font-medium">
                {aboutHeadline.accent}
              </span>
            </h2>
          </div>

          <div className="reveal space-y-[22px]">
            {about.map((para, i) => (
              <p
                key={i}
                className="text-[16px] leading-[1.8] text-ink last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
