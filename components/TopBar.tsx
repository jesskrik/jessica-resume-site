"use client";

import { useEffect, useRef, useState } from "react";
import { profile, nav } from "@/lib/content";

export default function TopBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 200 && y > lastY.current) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastY.current = y;
        ticking.current = false;
      });
      ticking.current = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-ink/100 bg-paper/85 backdrop-blur-md backdrop-saturate-150 transition-transform duration-[400ms] ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-[18px] sm:px-8 md:px-12 lg:px-16">
        <div className="font-serif text-[14px] font-extrabold tracking-tight">
          {profile.initials}
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[11px] uppercase tracking-widest2 text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="text-[11px] uppercase tracking-widest2 text-ink-soft">
          2026
        </div>
      </div>
    </header>
  );
}
