"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  // Hide global header on standalone one-page demos
  if (pathname?.startsWith("/onepage")) return null;

  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.ecosystem, href: "/ecosystem" },
    { label: t.nav.fleet, href: "/corporate-fleet" },
    { label: t.nav.esg, href: "/esg" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-brand-green transition-colors group-hover:bg-navy-alt">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-navy">EvEra</span>
            <span className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-light">
              Complete EV Ecosystem
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-navy" : "text-ink-mid hover:text-navy"
                }`}
              >
                {item.label}
                {active && (
                  <span className="block h-0.5 w-6 mt-1 rounded-full bg-brand-green" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/contact" className="btn-primary text-sm">
            {t.cta.getInTouch}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-line text-navy"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container-x py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-mid hover:bg-canvas hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 text-sm"
            >
              {t.cta.getInTouch}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
