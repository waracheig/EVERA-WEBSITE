"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "charging", label: "Charging" },
  { id: "fleet", label: "Fleet" },
  { id: "esg", label: "ESG" },
  { id: "contact", label: "Contact" },
];

export default function OnePageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-line/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span className={`grid h-9 w-9 place-items-center rounded-lg transition-colors ${
            scrolled ? "bg-navy text-brand-green" : "bg-white/10 text-brand-green backdrop-blur"
          }`}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-lg font-extrabold tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>
              EvEra
            </span>
            <span className={`mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] ${scrolled ? "text-ink-light" : "text-white/70"}`}>
              Complete EV Ecosystem
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-navy"
                      : "text-ink-mid hover:text-navy"
                    : isActive
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {s.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-green" />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="btn-primary text-sm"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
