import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import FleetInquiryForm from "@/components/FleetInquiryForm";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { passengerFleet, utilityFleet, site } from "@/lib/site";

const faqs = [
  {
    q: "How does EvEra's all-inclusive monthly fleet work?",
    a: "You pay a single monthly fee per vehicle that bundles the EV itself, Class 1 insurance, scheduled maintenance, tyres, 24/7 roadside support, and unlimited charging at every EvEra station across Phuket. Your team operates the cars; we handle everything else.",
  },
  {
    q: "Is there a down payment or vehicle purchase required?",
    a: "No. EV Fleet Solutions is structured as monthly OPEX — no capex, no vehicle purchase, no balloon payment. Approved as operating expense by procurement teams across Thai hotels and SET-listed corporates.",
  },
  {
    q: "What insurance is included?",
    a: "Full Class 1 (first-class) insurance is bundled into every contract, covering the vehicle for collision, third-party liability, theft and natural disasters under standard Thai motor policy terms.",
  },
  {
    q: "Can we mix vehicle types within one contract?",
    a: "Yes. A single contract can combine MG4 hatchbacks, MG S5 EV SUVs, and Riddara Econ pickups in any ratio — common for hotels (S5 + MG4) and industrial operators (MG4 + Riddara).",
  },
  {
    q: "Where can fleet vehicles charge?",
    a: "Free unlimited charging at all 9 EvEra stations across Phuket — Katu Hub, Bangchak Katu, Old Town Hub, Thalang, Bus Terminal today, with Flagship 880kW, North Phuket, Patong Beach, and North Shore opening through 2026–2027.",
  },
  {
    q: "What is the minimum contract length?",
    a: "Standard contracts run 12, 24, or 36 months. Pilot contracts (3–6 months) are available for first-time fleet adopters who want to validate the operating model before committing long-term.",
  },
  {
    q: "Do you provide ESG and carbon reporting?",
    a: "Yes. Every contract includes a monthly Carbon Report (PDF), an audit-ready ESG data package (Excel), and an annual certificate — all calculated per Thailand's TGO T-VER methodology and IEA 2023 emission factors.",
  },
  {
    q: "How long does deployment take after we sign?",
    a: "Typical fleet deployment is 4–8 weeks from signed agreement to vehicles on the road, depending on size and customisation (livery, in-vehicle hardware, depot integration).",
  },
  {
    q: "Do you offer EV utility trucks for เทศบาล / อบจ.?",
    a: "Yes — EvEra supplies electric road sweepers, garbage compactors, and dust-suppression trucks for municipalities, อบจ., construction operators, and private waste-management companies. Procurement is structured to meet Thai government compliance (EV30@30, TGO methodology). Contact us for spec sheets and a tailored proposal.",
  },
  {
    q: "Are utility trucks available under the all-inclusive monthly model?",
    a: "Yes — both options are available. The all-inclusive monthly model covers vehicle, insurance, and maintenance; you can optionally add an Energy Package that bundles unlimited charging at EvEra stations and/or on-site depot charging. Many municipalities procure utility trucks as capex (one-time purchase with service contract); private operators often prefer monthly OPEX with the Energy Package added. We tailor to your accounting framework.",
  },
  {
    q: "What is the Energy Package?",
    a: "An optional add-on to any monthly fleet contract — unlimited charging at all 9 EvEra public stations and/or installation + operation of dedicated depot chargers at your site. Effectively replaces your fuel budget with a flat predictable monthly figure, with audit-ready energy reporting included.",
  },
];

export const metadata: Metadata = {
  title: "EV Fleet Solutions — Corporate + Municipal EV Fleet Phuket",
  description:
    "EV Fleet Solutions by EvEra — all-inclusive monthly corporate EV fleet + electric utility trucks (sweeper, garbage compactor, dust suppression) for เทศบาล / อบจ. and private operators in Phuket. No down payment, Class 1 insurance, free charging, full maintenance, ESG carbon report.",
  keywords: [
    "EV fleet Thailand",
    "corporate EV fleet Phuket",
    "เช่ารถยนต์ไฟฟ้า องค์กร",
    "EV fleet solutions",
    "EV fleet rental Phuket",
    "MG4 EV Thailand",
    "MG S5 EV",
    "Riddara pickup EV",
    "EV utility truck Thailand",
    "รถกวาดถนนไฟฟ้า",
    "รถขยะไฟฟ้า",
    "รถฉีดน้ำลดฝุ่นไฟฟ้า",
    "EV municipal fleet Phuket",
    "EV30@30 procurement",
    "เทศบาล EV",
    "อบจ. รถยนต์ไฟฟ้า",
  ],
  openGraph: {
    title: "EV Fleet Solutions — Corporate + Municipal EV Fleet Phuket",
    description:
      "All-inclusive monthly EV fleet + electric utility trucks for hotels, corporate, government, อบจ., เทศบาล, and industrial operators.",
    images: ["/assets/fleet/EasyVolt-Fleet.jpg"],
  },
};

const benefits = [
  { title: "No down payment", body: "Operate as monthly OPEX — no vehicle purchase, no capex." },
  { title: "Class 1 insurance included", body: "Full first-class coverage for every vehicle in the contract." },
  { title: "Optional Energy Package", body: "Unlimited charging at all EvEra stations + dedicated depot chargers — flat predictable monthly figure." },
  { title: "Full maintenance included", body: "Scheduled service, tyres, and 24/7 roadside support." },
  { title: "Passenger + utility under one contract", body: "Mix MG4 / S5 with Riddara pickups and municipal trucks — one invoice." },
  { title: "Audit-ready ESG report", body: "Monthly Carbon Report + annual certificate per TGO T-VER methodology." },
];

const segments = [
  {
    title: "Hotels & Resorts",
    body: "MG S5 SUVs for airport transfer, MG4 for guest shuttles, plus Riddara pickups for back-of-house — green-hotel certification support included.",
    icon: "building",
  },
  {
    title: "Corporate / SET-listed",
    body: "Pool fleets, executive transport, and Scope 1 reduction at scale. Bundled ESG reporting per TGO methodology.",
    icon: "shield",
  },
  {
    title: "Government / อบจ. / เทศบาล",
    body: "Passenger fleet + EV utility trucks (sweeper, compactor, dust suppression) — EV30@30-aligned procurement with full vendor compliance docs.",
    icon: "spark",
  },
  {
    title: "Construction · Waste · Industrial",
    body: "Dust-suppression trucks for sites, compactors for private waste operators, Riddara pickups and utility EVs for airports / industrial estates.",
    icon: "hub",
  },
];

export default function CorporateFleetPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/fleet/EasyVolt-Fleet.jpg"
            alt="EvEra corporate EV fleet — Phuket"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/15" />
        </div>

        <div className="relative container-x py-24 md:py-32">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Ecosystem", href: "/ecosystem" },
              { label: "EV Fleet Solutions" },
            ]}
          />
          <p className="eyebrow text-brand-green mt-6">
            <span className="h-px w-6 bg-brand-green" /> EV Fleet Solutions · Corporate Fleet
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            EV Fleet Solutions — all-inclusive monthly EV fleet for Phuket business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            EvEra's corporate fleet programme. One contract covers vehicles,
            Class 1 insurance, maintenance, and unlimited charging across our
            Phuket network — so your team focuses on operations, not logistics.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#inquiry" className="btn-primary">
              Request a Fleet Proposal
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phone}`} className="btn-ghost-light">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">What's included</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Everything your finance team wanted — and your ESG team asked for.
            </h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              EvEra Corporate Fleet bundles the vehicle, the energy, the upkeep,
              and the carbon reporting into a single monthly figure. Approved as
              OPEX by procurement teams across Thai hotels and SET-listed
              operators.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="card p-6">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <h3 className="mt-4 text-base">{b.title}</h3>
                <p className="mt-1.5 text-sm text-ink-mid leading-relaxed">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PASSENGER FLEET — Executive & Pool */}
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Passenger Fleet</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Executive transport, airport transfer, pool fleets.
              </h2>
              <p className="mt-4 text-ink-mid leading-relaxed">
                Two passenger platforms — hatchback and SUV — for hotels,
                corporate offices, and executive shuttles.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-light">
              Pricing on request
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {passengerFleet.map((m) => (
              <article
                key={m.name}
                className="card overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-canvas">
                  <Image
                    src={m.image}
                    alt={`${m.name} — EvEra EV Fleet Solutions passenger vehicle`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain p-6"
                  />
                </div>
                <div className="border-t border-line p-6 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-green-dark">
                    {m.type}
                  </p>
                  <h3 className="mt-2 text-lg">{m.name}</h3>
                  <p className="mt-2 text-sm text-ink-mid leading-relaxed">
                    {m.description}
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-ink-light">
                        Range
                      </dt>
                      <dd className="mt-1 font-semibold text-navy">{m.range}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-ink-light">
                        DC Charge
                      </dt>
                      <dd className="mt-1 font-semibold text-navy">{m.charge}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UTILITY FLEET — Pickup + Municipal Trucks */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Utility Fleet</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Pickup + Municipal EVs — work-ready, clean operations.
              </h2>
              <p className="mt-4 text-ink-mid leading-relaxed">
                One electric pickup plus three purpose-built municipal trucks
                — for เทศบาล, อบจ., construction operators, private waste
                operators, and airport / industrial estates. Eligible for
                Thailand's EV30@30 procurement framework, and quiet enough for
                early-morning routes near hotels and residential zones.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-light">
              Pricing on request
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {utilityFleet.map((u) => (
              <article
                key={u.name}
                className="card overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-canvas">
                  <Image
                    src={u.image}
                    alt={`${u.name} — EvEra EV Fleet Solutions for Phuket municipal operations`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-contain p-5"
                  />
                </div>
                <div className="border-t border-line p-6 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-green-dark">
                    {u.type}
                  </p>
                  <h3 className="mt-2 text-lg">{u.name}</h3>
                  <p className="mt-2 text-sm text-ink-mid leading-relaxed">
                    {u.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm">
                    {u.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-ink-mid">
                        <Icon
                          name="check"
                          className="h-4 w-4 mt-0.5 shrink-0 text-brand-green-dark"
                          strokeWidth={2.6}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 pt-4 border-t border-line text-xs uppercase tracking-[0.14em] text-ink-light">
                    Use case · {u.useCase}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs text-ink-light leading-relaxed">
            * Specifications, payload, and configuration available on request.
            EvEra handles import, registration, depot charging integration, and
            after-sales service for every municipal-fleet customer.
          </p>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Built for</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Programmes tailored to four B2B segments.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {segments.map((s) => (
              <div
                key={s.title}
                className="card p-6 hover:border-brand-green/40 transition-colors"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                  <Icon name={s.icon as any} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-base">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-mid leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG TEASER */}
      <section className="bg-brand-green-bg">
        <div className="container-x py-16 md:py-20 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-brand-green-dark">ESG ready</p>
            <h2 className="mt-3 text-3xl text-navy">
              Carbon Report. Audit-ready. Every month.
            </h2>
            <p className="mt-4 text-ink-mid max-w-xl leading-relaxed">
              Every Corporate Fleet contract includes a monthly Carbon Report, an
              ESG Excel data package, and an annual certificate — calculated per
              TGO T-VER methodology.
            </p>
            <Link href="/esg" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark hover:text-navy">
              Read the ESG package <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { v: "60–70%", l: "Scope 1 emissions reduction" },
              { v: "Monthly", l: "Carbon Report cadence" },
              { v: "TGO", l: "T-VER methodology" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white px-5 py-5 shadow-card">
                <div className="text-2xl font-extrabold text-brand-green-dark">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-ink-mid">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="Common questions about EV Fleet Solutions"
        intro="The questions hotel GMs, CFOs, and procurement officers ask before signing — answered upfront."
        items={faqs}
        background="white"
      />

      {/* INQUIRY FORM */}
      <section id="inquiry" className="bg-navy text-white scroll-mt-20">
        <div className="container-x py-20 md:py-24 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow text-brand-green">Request a proposal</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-white">
              Tell us about your fleet.
            </h2>
            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Share a few details and the EvEra team will return a tailored
              proposal — typically within two business days.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Icon name="check" className="h-4 w-4 text-brand-green" strokeWidth={2.6} />
                No pricing online — every quote is custom-scoped
              </li>
              <li className="flex items-center gap-3">
                <Icon name="check" className="h-4 w-4 text-brand-green" strokeWidth={2.6} />
                Class 1 insurance, charging, and maintenance bundled
              </li>
              <li className="flex items-center gap-3">
                <Icon name="check" className="h-4 w-4 text-brand-green" strokeWidth={2.6} />
                Carbon Report and ESG package included
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${site.phone}`} className="btn-ghost-light">
                {site.phone}
              </a>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light"
              >
                LINE {site.line}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8 text-ink shadow-card">
            <FleetInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
