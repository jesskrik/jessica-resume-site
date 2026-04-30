import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black py-[clamp(60px,10vh,120px)] pb-[60px] text-paper"
    >
      <div className="mx-auto max-w-page px-5 sm:px-8 md:px-12 lg:px-16">
        <h2 className="reveal mb-12 font-serif font-semibold leading-[1] tracking-[-0.025em] text-[clamp(40px,7vw,96px)]">
          Say <em className="font-medium italic text-paper-warm">hello</em>.
          <br />
          <a
            href={`mailto:${profile.email}`}
            className="border-b-2 border-paper transition-colors duration-200 hover:border-paper-warm hover:text-paper-warm"
          >
            {profile.email}
          </a>
        </h2>

        <div
          className="flex flex-wrap justify-between gap-5 border-t border-paper/25 pt-7 text-[11px] uppercase tracking-widest2 text-paper/65"
          style={{ borderTopWidth: "1px" }}
        >
          <div>© 2026 · {profile.firstName} {profile.lastName}</div>
          <div>
            <a
              href={profile.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper"
            >
              {profile.website}
            </a>{" "}
            ·{" "}
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-paper"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
