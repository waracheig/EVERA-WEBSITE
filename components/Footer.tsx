"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { t, locale } = useI18n();
  const pathname = usePathname();

  // Hide global footer on standalone one-page demos
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
    <footer className="bg-navy text-white">
      {locale === "th" && t.language.note && (
        <div className="border-b border-white/10 bg-white/5">
          <div className="container-x py-2.5 text-center text-xs text-white/70">
            {t.language.note}
          </div>
        </div>
      )}
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-brand-green">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" />
              </svg>
            </span>
            <span className="text-xl font-extrabold tracking-tight">EvEra</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            {t.footer.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/contact" className="btn-primary text-sm">
              {t.cta.getInTouch}
            </Link>
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light text-sm"
            >
              LINE: {site.line}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {t.footer.explore}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/80 hover:text-brand-green">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{site.location}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-brand-green">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green"
              >
                LINE {site.line}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-green">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} EvEra. {t.footer.rights}</span>
          <span>Phuket, Thailand · {site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
