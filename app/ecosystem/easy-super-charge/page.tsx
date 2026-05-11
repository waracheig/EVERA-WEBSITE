import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { stations } from "@/lib/site";

const faqs = [
  {
    q: "Where are the EvEra charging stations in Phuket?",
    a: "Five stations are live across Phuket today: Katu Hub, Bangchak Katu, Old Town Hub, Thalang, and Bus Terminal. Four more — Flagship 880kW Hub, North Phuket, Patong Beach, and North Shore — are opening through 2026 and 2027.",
  },
  {
    q: "What plug types do EvEra stations support?",
    a: "All EvEra DC fast-charging stations support CCS2 — the standard adopted by every modern EV sold in Thailand (MG, BYD, Tesla, Riddara, Volvo, etc.). Selected sites also support CHAdeMO for older Japanese EVs.",
  },
  {
    q: "How fast can I charge at an EvEra station?",
    a: "Charging speed depends on the site and your vehicle. Our 480kW OneCharge sites (Katu Hub, Old Town Hub) can deliver up to 480kW peak, and the upcoming Flagship 880kW Hub will be Phuket's most powerful public site. Most 80kW-capable EVs charge from 20% to 80% in under 30 minutes.",
  },
  {
    q: "How do I pay for charging?",
    a: "Pay via the Easy Super Charge app or QR-code at the charger — debit card, credit card, and Thai mobile banking are supported. EvEra Corporate Fleet and Easy Volt taxi customers are pre-authorised on a corporate account.",
  },
  {
    q: "Are EvEra charging stations open 24/7?",
    a: "Yes. All public EvEra DC fast-charging stations operate 24/7. Customer support is available by phone and LINE during extended business hours, with on-call operations for technical issues outside hours.",
  },
  {
    q: "Can my hotel, mall, or condo host an EvEra station?",
    a: "Yes — we partner with property owners across Phuket to host charging sites. EvEra handles equipment, installation, operations, and customer payment processing; the host receives revenue share and the visible green-tech amenity. Contact us to discuss a site.",
  },
];

export const metadata: Metadata = {
  title: "Easy Super Charge — Phuket EV Charging Network",
  description:
    "9 EV charging stations and 5,120kW planned across Phuket. Easy Super Charge — Phuket's fastest-growing public DC fast-charging network, operated by EvEra with OneCharge 480kW and 880kW ultrafast hardware. สถานีชาร์จรถยนต์ไฟฟ้า ภูเก็ต.",
  keywords: [
    "EV charging station Phuket",
    "สถานีชาร์จรถยนต์ไฟฟ้า ภูเก็ต",
    "DC fast charging Phuket",
    "ชาร์จรถไฟฟ้า ภูเก็ต",
    "Easy Super Charge",
    "OneCharge 480kW",
    "880kW charging hub",
  ],
  openGraph: {
    title: "Easy Super Charge — Phuket EV Charging Network",
    description:
      "9 stations · 5,120kW planned. Phuket's fastest-growing public charging network.",
    images: ["/assets/stations/480kW OneCharge Katu2.jpg"],
  },
};

const photos = [
  { src: "/assets/stations/480kW OneCharge Old Town.jpg", caption: "Old Town Hub · 480kW OneCharge" },
  { src: "/assets/stations/240kWx2 Galvanic Katu1.jpg", caption: "Bangchak Katu · 240kW × 2 Galvanic" },
  { src: "/assets/stations/480kW OneCharge Katu2.jpg", caption: "Katu Hub · 480kW OneCharge" },
  { src: "/assets/stations/240kWx2 Galvanic Talang.jpg", caption: "Thalang · 240kW × 2 Galvanic" },
  { src: "/assets/stations/240kWx2 Galvanic BusTerminal1.jpg", caption: "Bus Terminal · 240kW × 2 Galvanic" },
  { src: "/assets/stations/880kW coming soon 1.jpg", caption: "Flagship 880kW · Q2 2026" },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/stations/480kW OneCharge Katu2.jpg"
            alt="EvEra Katu Hub 480kW DC fast charging station — Phuket"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-navy/10" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Ecosystem", href: "/ecosystem" },
              { label: "Easy Super Charge" },
            ]}
          />
          <p className="eyebrow text-brand-green mt-6">
            <span className="h-px w-6 bg-brand-green" /> Easy Super Charge · Phuket
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            9 EV charging stations.<br />5,120kW network capacity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            We design, install, operate, and service every station ourselves —
            with OneCharge 480kW and 880kW ultrafast hardware as the backbone.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Charging partnership enquiry
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/corporate-fleet" className="btn-ghost-light">
              Free for fleet customers
            </Link>
          </div>
        </div>
      </section>

      {/* CAPACITY STATS */}
      <section className="bg-white">
        <div className="container-x py-16 md:py-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "9", l: "Total stations" },
            { v: "2,400kW", l: "Live today (5 stations)" },
            { v: "2,720kW", l: "Coming 2026" },
            { v: "5,120kW", l: "Planned capacity" },
          ].map((s) => (
            <div key={s.l} className="card p-6">
              <div className="text-3xl font-extrabold text-navy">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-mid">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATION TABLE */}
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Network roll-out</p>
            <h2 className="mt-3 text-3xl md:text-4xl">All 9 stations.</h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              Five sites are operational across Phuket today. Four more — including
              the flagship 880kW hub — are scheduled through 2027.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white text-left">
                <tr>
                  <th className="px-6 py-4 font-semibold">Station</th>
                  <th className="px-6 py-4 font-semibold">Power</th>
                  <th className="px-6 py-4 font-semibold hidden md:table-cell">Vendor</th>
                  <th className="px-6 py-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {stations.map((s, i) => {
                  const live = s.status === "Live";
                  return (
                    <tr
                      key={s.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-canvas/60"}
                    >
                      <td className="px-6 py-4 font-semibold text-navy">{s.name}</td>
                      <td className="px-6 py-4 text-ink-mid">{s.power}</td>
                      <td className="px-6 py-4 text-ink-mid hidden md:table-cell">{s.vendor}</td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            live
                              ? "bg-brand-green-bg text-brand-green-dark"
                              : "bg-canvas text-ink-mid"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              live ? "bg-brand-green" : "bg-ink-light"
                            }`}
                          />
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Real stations</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Built. Installed. Operating.</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.src} className="group relative overflow-hidden rounded-xl border border-line">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 text-sm font-medium text-white">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="EV charging in Phuket — FAQs"
        intro="The questions drivers and partners ask most. If yours isn't here, talk to us."
        items={faqs}
        background="canvas"
      />

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-x py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white">
              Interested in a charging partnership?
            </h2>
            <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
              Hotels, malls, condominiums, and industrial estates — host an EvEra
              charging site at your property and benefit from full revenue share,
              hardware, and operations handled by us.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Discuss a site
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
