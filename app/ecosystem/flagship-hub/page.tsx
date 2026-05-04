import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Flagship 880kW Hub — Phuket's Largest Charging Hub, Coming 2026",
  description:
    "EvEra's flagship 880kW ultrafast EV charging hub in Phuket — under construction, opening Q2 2026. The most powerful public DC fast-charging site in southern Thailand.",
  keywords: [
    "880kW charging hub",
    "ultrafast charging Phuket",
    "DC fast charging Thailand",
    "Phuket EV charging hub",
    "EvEra Flagship Hub",
  ],
  openGraph: {
    title: "Flagship 880kW Hub — Phuket, Q2 2026",
    description:
      "Phuket's largest ultrafast EV charging hub. 880kW. Opening Q2 2026.",
    images: ["/assets/stations/880kW coming soon 1.jpg"],
  },
};

const milestones = [
  { period: "Q4 2025", title: "Equipment commissioning", body: "OneCharge 880kW units arrive on site for installation." },
  { period: "Q1 2026", title: "Civil works complete", body: "Site preparation, grid connection, and canopy erection finalised." },
  { period: "Q2 2026", title: "Public opening", body: "First 880kW ultrafast public charging hub in Phuket goes live." },
];

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/stations/880kW coming soon 1.jpg"
            alt="EvEra Flagship 880kW ultrafast charging hub under construction — Phuket"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-navy/10" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> Flagship Hub · Phuket
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            880kW.<br />Phuket's most powerful charging hub.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Under construction in 2025. Public opening Q2 2026. Designed for
            corporate fleets, tour operators, and the next generation of
            ultrafast EVs.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Anchor-tenant enquiries
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "880kW", l: "Site capacity" },
            { v: "Q2 2026", l: "Opening" },
            { v: "Multi-bay", l: "Simultaneous charging" },
            { v: "Phuket", l: "Location" },
          ].map((s) => (
            <div key={s.l} className="card p-6">
              <div className="text-3xl font-extrabold text-navy">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-mid">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/assets/stations/880kW coming soon 2.jpg"
              alt="Flagship 880kW hub equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Roadmap</p>
            <h2 className="mt-3 text-3xl md:text-4xl">From site prep to public opening.</h2>
            <ol className="mt-8 space-y-5">
              {milestones.map((m) => (
                <li key={m.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark text-xs font-bold">
                    {m.period.split(" ")[0]}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-brand-green-dark">
                      {m.period}
                    </p>
                    <h3 className="mt-0.5 text-base">{m.title}</h3>
                    <p className="mt-1 text-sm text-ink-mid leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-x py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white">
              Anchor-tenant and partnership enquiries.
            </h2>
            <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
              Reserve fleet capacity at the flagship hub before it opens — limited
              anchor-tenant slots available for corporate, hotel, and tour fleet
              operators.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Discuss capacity
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
