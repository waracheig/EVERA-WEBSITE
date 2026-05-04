"use client";

import Link from "next/link";
import Icon from "./Icon";
import { stats } from "@/lib/site";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/videos/EVERA_hero_loop_no_logo.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/stations/480kW OneCharge Old Town.jpg"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/20 to-navy/80"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_55%_at_25%_45%,rgba(26,46,74,0.45),transparent_70%)]"
      />

      <div className="relative container-x py-28 md:py-40 lg:py-48">
        <p className="eyebrow text-brand-green">
          <span className="h-px w-6 bg-brand-green" /> {t.hero.home.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          {t.hero.home.h1Line1}
          <br />
          {t.hero.home.h1Line2}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
          {t.hero.home.sub}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/ecosystem" className="btn-primary">
            {t.cta.exploreSolutions}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/corporate-fleet" className="btn-ghost-light">
            {t.cta.fleet}
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-navy-alt/70 backdrop-blur">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center md:text-left">
              <div className="text-2xl md:text-3xl font-extrabold text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
