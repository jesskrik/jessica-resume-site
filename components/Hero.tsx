import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative pt-[58px] pb-6">
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Meta strip above the name */}
        <div
          className="mb-10 flex justify-between border-b border-ink/100 py-[14px] text-[11px] uppercase tracking-widest2 text-ink-soft"
          style={{ borderBottomWidth: "1px" }}
        >
          <span>Curriculum Vitae</span>
          <span className="font-medium text-ink">
            {profile.locationDetail}
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-6 font-serif font-extrabold leading-[0.82] tracking-[-0.035em] text-ink text-[clamp(56px,11vw,156px)]">
          <span className="reveal-word">
            <span>{profile.firstName}</span>
          </span>{" "}
          <span className="reveal-word delay">
            <span>{profile.lastName}</span>
          </span>
        </h1>

        {/* Role */}
        <p className="fade-up delay-1 mb-3 font-serif italic font-medium text-ink text-[clamp(20px,2.6vw,30px)]">
          {profile.title}
        </p>

        {/* Tagline */}
        <p className="fade-up delay-2 max-w-[580px] text-[clamp(14px,1.4vw,17px)] leading-[1.6] text-ink-soft">
          {profile.tagline}
        </p>

        {/* Contact grid */}
        <div
          className="fade-up delay-3 mt-12 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 border-y border-ink/100 py-5"
          style={{ borderTopWidth: "1px", borderBottomWidth: "1px" }}
        >
          <div>
            <span className="mb-1.5 block text-[10px] uppercase tracking-widest3 text-ink-faint">
              Email
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="text-[14px] font-medium text-ink border-b border-transparent pb-px transition-colors duration-200 hover:border-ink"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <span className="mb-1.5 block text-[10px] uppercase tracking-widest3 text-ink-faint">
              Location
            </span>
            <span className="text-[14px] font-medium text-ink">
              {profile.location}
            </span>
          </div>
          <div>
            <span className="mb-1.5 block text-[10px] uppercase tracking-widest3 text-ink-faint">
              Website
            </span>
            <a
              href={profile.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-ink border-b border-transparent pb-px transition-colors duration-200 hover:border-ink"
            >
              {profile.website}
            </a>
          </div>
          <div>
            <span className="mb-1.5 block text-[10px] uppercase tracking-widest3 text-ink-faint">
              Portfolio
            </span>
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-ink border-b border-transparent pb-px transition-colors duration-200 hover:border-ink"
            >
              View work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
