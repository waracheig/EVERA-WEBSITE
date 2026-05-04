import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About EvEra — Phuket EV Ecosystem Operator",
  description:
    "EvEra is Phuket's complete EV ecosystem operator — corporate EV fleet, EV taxi, EV rental, and DC fast-charging — backed by 60+ years of manufacturing and 18 years of distribution heritage in Thailand.",
  keywords: [
    "EvEra Phuket",
    "EV ecosystem operator Thailand",
    "ผู้ให้บริการ EV ภูเก็ต",
    "EV company Phuket",
    "Phuket EV operator",
  ],
  openGraph: {
    title: "About EvEra — Phuket EV Ecosystem Operator",
    description:
      "Phuket's complete EV ecosystem operator — fleet, taxi, rental, and charging.",
    images: ["/assets/stations/880kW coming soon 3.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/stations/880kW coming soon 3.jpg"
            alt="EvEra flagship 880kW charging hub equipment — Phuket"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/15" />
        </div>

        <div className="relative container-x py-24 md:py-32">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> About EvEra
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Driving Phuket into the electric era.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            We don't resell. We operate every vehicle, every station, and every
            service touchpoint ourselves — so corporate, hotel, and government
            partners get one accountable contract for the entire EV programme.
          </p>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Make EV the default in Phuket — credibly, completely, profitably.
            </h2>
            <p className="mt-5 text-ink-mid leading-relaxed">
              EvEra is a Phuket-headquartered operator delivering corporate fleet,
              EV taxi, EV rental and ultrafast charging under a single brand. Our
              role is to remove every operational reason a business in Phuket
              would still buy combustion vehicles in 2026.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Phuket-headquartered. Phuket-deep.",
                "One operator across the EV value chain.",
                "Audit-ready ESG reporting bundled with every contract.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-mid">
                  <Icon
                    name="check"
                    className="h-4 w-4 mt-1 shrink-0 text-brand-green-dark"
                    strokeWidth={2.6}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card p-6"
                >
                  <div className="text-3xl font-extrabold text-navy">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-mid">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about/legacy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-green-dark"
            >
              Read Our Legacy <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-canvas">
        <div className="container-x py-16 md:py-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="eyebrow">Where we operate</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Phuket, Thailand.</h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              Headquarters and primary service area: Phuket. Charging network
              expanding island-wide, with a flagship 880kW hub opening 2026.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/assets/stations/Katu station service to buses.jpg"
              alt="Katu station service operations"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
