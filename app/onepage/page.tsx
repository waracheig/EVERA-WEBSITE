import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import FleetInquiryForm from "@/components/FleetInquiryForm";
import OnePageNav from "@/components/OnePageNav";
import {
  ecosystem,
  fleetModels,
  site,
  stations,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "EvEra — One Page Preview",
  description:
    "Single-page preview of the EvEra ecosystem — Phuket's complete EV operator.",
  robots: { index: false, follow: false },
};

export default function OnePage() {
  return (
    <div className="bg-white">
      <OnePageNav />

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden bg-navy text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/videos/EVERA_hero_loop_no_logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/stations/480kW OneCharge Old Town.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/20 to-navy/85" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_25%_45%,rgba(26,46,74,0.45),transparent_70%)]" />

        <div className="relative container-x flex min-h-[92vh] flex-col justify-center py-24">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> EvEra · Phuket
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight">
            Phuket's Complete<br />EV Ecosystem
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Corporate EV fleet, EV taxi, EV rental, and the island's fastest-growing
            charging network — all under one operator. One contract, one carbon report.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#ecosystem" className="btn-primary">
              Explore the Ecosystem
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost-light">
              Talk to us
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-navy-alt/70 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { v: "250+", l: "EV Fleet" },
              { v: "9", l: "Charging Stations" },
              { v: "5,120kW", l: "Network Capacity" },
              { v: "1965", l: "Heritage Since" },
            ].map((s) => (
              <div key={s.l} className="px-4 py-6 text-center md:text-left">
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white scroll-mt-20">
        <div className="container-x py-20 md:py-28 grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About EvEra</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Operator-led. Phuket-deep. Enterprise-ready.
            </h2>
            <p className="mt-5 text-ink-mid leading-relaxed">
              We don't resell. We operate every vehicle, every station, and every
              service touchpoint ourselves — built on six decades of manufacturing
              heritage and 18 years of distribution. That discipline is now powering
              Phuket's transition to electric.
            </p>
            <ul className="mt-8 grid gap-3">
              {[
                "Phuket-headquartered. Phuket-deep.",
                "One operator across the entire EV value chain.",
                "Audit-ready ESG carbon reporting in every contract.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-mid">
                  <Icon name="check" className="h-4 w-4 mt-1 shrink-0 text-brand-green-dark" strokeWidth={2.6} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/assets/stations/880kW coming soon 3.jpg"
              alt="EvEra 880kW flagship hub under construction"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/65 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-green">
                Coming 2026
              </p>
              <p className="mt-1 text-lg font-semibold">Flagship 880kW Hub — Phuket</p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="bg-canvas scroll-mt-20">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Ecosystem</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Six businesses. One mission.</h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              From the vehicles your team drives to the stations they charge at,
              EvEra runs every layer of the value chain in Phuket.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((node) => (
              <div
                key={node.slug}
                className="card group p-6 hover:-translate-y-0.5 hover:border-brand-green/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                    <Icon name={node.icon as any} className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>
                <h3 className="mt-5 text-lg">{node.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">{node.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARGING NETWORK */}
      <section id="charging" className="bg-white scroll-mt-20">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Easy Super Charge</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                9 stations.<br />5,120kW network.
              </h2>
              <p className="mt-4 text-ink-mid leading-relaxed">
                Phuket's fastest-growing DC fast-charging network — OneCharge 480kW
                and 880kW ultrafast equipment, designed and operated in-house.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-line p-3">
                  <div className="text-xl font-extrabold text-navy">5</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mid">Live</div>
                </div>
                <div className="rounded-xl border border-line p-3">
                  <div className="text-xl font-extrabold text-navy">4</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mid">Coming</div>
                </div>
                <div className="rounded-xl border border-line p-3">
                  <div className="text-xl font-extrabold text-navy">880kW</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-ink-mid">Flagship</div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <table className="w-full text-sm">
                <thead className="bg-navy text-white text-left">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Station</th>
                    <th className="px-5 py-3 font-semibold">Power</th>
                    <th className="px-5 py-3 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stations.map((s, i) => {
                    const live = s.status === "Live";
                    return (
                      <tr key={s.name} className={i % 2 === 0 ? "bg-white" : "bg-canvas/60"}>
                        <td className="px-5 py-3 font-semibold text-navy">{s.name}</td>
                        <td className="px-5 py-3 text-ink-mid">{s.power}</td>
                        <td className="px-5 py-3 text-right">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${live ? "bg-brand-green-bg text-brand-green-dark" : "bg-canvas text-ink-mid"}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-brand-green" : "bg-ink-light"}`} />
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
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="bg-canvas scroll-mt-20">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">EV Fleet Solutions</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              All-inclusive monthly EV fleet for Phuket business.
            </h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              One contract bundles vehicle, Class 1 insurance, full maintenance,
              and unlimited charging on our network. No down payment. No capex.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3 text-sm text-ink-mid max-w-4xl">
            {[
              "No down payment — pure monthly OPEX",
              "Class 1 insurance included",
              "Free charging at all 9 EvEra stations",
              "Full maintenance + 24/7 roadside",
              "New vehicles, latest models",
              "Monthly Carbon Report + ESG package",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Icon name="check" className="h-4 w-4 mt-1 shrink-0 text-brand-green-dark" strokeWidth={2.6} />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fleetModels.map((m) => (
              <article key={m.name} className="card overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-canvas">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 380px"
                    className="object-contain p-6"
                  />
                </div>
                <div className="border-t border-line p-5 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-green-dark">
                    {m.type}
                  </p>
                  <h3 className="mt-2 text-base">{m.name}</h3>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-ink-light">Range</dt>
                      <dd className="mt-0.5 font-semibold text-navy">{m.range}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-ink-light">DC Charge</dt>
                      <dd className="mt-0.5 font-semibold text-navy">{m.charge}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="bg-brand-green-bg scroll-mt-20">
        <div className="container-x py-20 md:py-24 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-brand-green-dark">ESG & Sustainability</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Switch to EV.<br />Cut Scope 1 emissions 60–70%.
            </h2>
            <p className="mt-4 text-ink-mid max-w-xl leading-relaxed">
              Every fleet contract includes a monthly Carbon Report, ESG data
              package, and annual certificate — calculated per Thailand's TGO
              T-VER methodology and IEA 2023 emission factors.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { v: "2.6–3.8 t", l: "CO₂ saved / vehicle / year" },
              { v: "60–70%", l: "Fuel cost savings" },
              { v: "T-VER", l: "TGO methodology" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white px-5 py-5 shadow-card">
                <div className="text-2xl font-extrabold text-brand-green-dark">{s.v}</div>
                <div className="mt-1 text-sm text-ink-mid">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navy text-white scroll-mt-20">
        <div className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow text-brand-green">Get in touch</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-white">
              Ready to partner?
            </h2>
            <p className="mt-4 max-w-md text-white/75 leading-relaxed">
              Corporate fleet, charging partnership, EV rental, government
              procurement — start the conversation here.
            </p>

            <div className="mt-8 grid gap-3">
              <a href={`tel:${site.phone}`} className="card bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">Phone</p>
                <p className="mt-1 font-semibold text-white">{site.phone}</p>
              </a>
              <a href={site.lineUrl} target="_blank" rel="noreferrer" className="card bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">LINE OA</p>
                <p className="mt-1 font-semibold text-white">{site.line}</p>
              </a>
              <a href={`mailto:${site.email}`} className="card bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-colors">
                <p className="text-xs uppercase tracking-[0.14em] text-white/50">Email</p>
                <p className="mt-1 font-semibold text-white">{site.email}</p>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8 text-ink shadow-card">
            <FleetInquiryForm source="onepage-demo" />
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <section className="bg-navy text-white border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} EvEra. All rights reserved.</span>
          <span>Phuket, Thailand · {site.domain} · One Page preview</span>
        </div>
      </section>
    </div>
  );
}
