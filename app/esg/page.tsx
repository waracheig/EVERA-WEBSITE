import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    q: "How do you calculate CO₂ savings per vehicle?",
    a: "We log every kWh delivered to your fleet at the charger, then calculate the equivalent gasoline mileage and emissions using IEA 2023 emission factors. The difference — gasoline emissions minus EV emissions (factoring Thai grid mix) — is your CO₂ avoided.",
  },
  {
    q: "What is TGO T-VER methodology?",
    a: "T-VER (Thailand Voluntary Emission Reduction) is the carbon-credit methodology administered by Thailand Greenhouse Gas Management Organization (TGO). It is the standard recognised by Thai regulators and most Thai sustainability auditors. EvEra's reporting is structured to be T-VER-compatible.",
  },
  {
    q: "Can our auditor verify the data?",
    a: "Yes. The monthly Carbon Report and Excel ESG package are designed to be audit-ready, with raw kWh data, methodology references, and per-vehicle traceability. Auditors familiar with TGO methodology and IEA emission factors can verify the calculations directly.",
  },
  {
    q: "Do you provide certificates we can display?",
    a: "Yes. Every fleet customer receives an annual CO₂-avoided certificate — branded, signed, and ready to display at your reception, AGM materials, or sustainability report. Mid-year and milestone certificates are available on request.",
  },
  {
    q: "Does switching to EV really cut Scope 1 by 60–70%?",
    a: "Yes — Scope 1 (direct emissions from vehicles owned or operated) drops sharply when combustion engines are replaced with EVs. The exact figure depends on operating mileage and grid mix; 60–70% is typical for Phuket fleet operators. Scope 2 (purchased electricity) increases slightly, but net emissions still drop dramatically.",
  },
  {
    q: "Can we generate tradable carbon credits?",
    a: "Potentially. Fleet emissions reductions calculated under T-VER methodology are eligible to be registered as carbon credits with TGO, which can then be traded on Thailand's voluntary carbon market. EvEra can connect customers with TGO-registered project developers to formalise this.",
  },
];

export const metadata: Metadata = {
  title: "ESG & Sustainability — Carbon Report for Corporate EV Fleet",
  description:
    "Switch to EV with EvEra. Cut Scope 1 emissions 60–70%. Every corporate EV fleet contract includes monthly Carbon Reports, ESG data packages, and annual certificates per TGO T-VER methodology. Audit-ready ESG for Thai businesses.",
  keywords: [
    "ESG carbon report Thailand",
    "Scope 1 reduction EV",
    "TGO T-VER methodology",
    "carbon credit Thailand EV",
    "ESG data Thai corporate",
    "รายงานคาร์บอน องค์กร",
    "ESG รถยนต์ไฟฟ้า",
  ],
  openGraph: {
    title: "ESG — Audit-Ready Carbon Reporting for Corporate EV Fleet",
    description:
      "Monthly Carbon Report, ESG data package, and annual certificate per TGO T-VER methodology.",
    images: ["/assets/stations/880kW coming soon 1.jpg"],
  },
};

const headlineStats = [
  { v: "2.6–3.8 t", l: "CO₂ saved per vehicle / year (vs gasoline)" },
  { v: "60–70%", l: "Fuel cost savings" },
  { v: "T-VER", l: "Carbon credit methodology (TGO)" },
];

const deliverables = [
  {
    title: "Monthly Carbon Report",
    body: "Auto-generated, per-vehicle CO₂ saved, energy consumed, and emissions baseline. Delivered as PDF every month.",
    icon: "leaf" as const,
  },
  {
    title: "ESG Data Package",
    body: "Excel data export ready for sustainability auditors and Scope 1/2 reporting frameworks.",
    icon: "shield" as const,
  },
  {
    title: "Annual Certificate",
    body: "Branded annual certificate of carbon avoided — display-ready for reception, AGM, or sustainability report.",
    icon: "spark" as const,
  },
  {
    title: "TGO-aligned methodology",
    body: "All calculations follow Thailand Greenhouse Gas Management Organization (TGO) T-VER methodology and IEA 2023 emission factors.",
    icon: "check" as const,
  },
];

export default function EsgPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_30%_30%,rgba(45,184,75,0.22),transparent)]"
        />
        <div className="relative container-x py-24 md:py-32 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Breadcrumbs
              tone="dark"
              items={[
                { label: "Home", href: "/" },
                { label: "ESG & Sustainability" },
              ]}
            />
            <p className="eyebrow text-brand-green mt-6">
              <span className="h-px w-6 bg-brand-green" /> ESG & Sustainability
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Switch to EV. Reduce Scope 1 emissions by 60–70%.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
              Every EvEra Corporate Fleet contract includes a monthly Carbon
              Report, an audit-ready ESG data package, and an annual certificate
              — calculated per Thailand's TGO T-VER methodology.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a 30-min consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/corporate-fleet" className="btn-ghost-light">
                See Corporate Fleet
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {headlineStats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="text-3xl font-extrabold text-brand-green">{s.v}</div>
                <div className="mt-1 text-sm text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">What clients receive</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              ESG you can hand to your auditor — and your CEO.
            </h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              Sustainability reporting bundled into your fleet contract, not sold
              as an add-on. Every EvEra customer receives the same package — from
              5-vehicle resorts to 100-vehicle corporate fleets.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {deliverables.map((d) => (
              <div key={d.title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                  <Icon name={d.icon} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">How the carbon math works</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Energy in → Emissions avoided → Audit trail.
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Energy delivered",
                body: "Every kWh dispensed at EvEra stations to your fleet is logged at the charger and reconciled monthly.",
              },
              {
                n: "02",
                title: "Baseline counter-factual",
                body: "Equivalent gasoline mileage and emissions calculated against IEA 2023 emission factors.",
              },
              {
                n: "03",
                title: "TGO methodology",
                body: "Net CO₂ avoided computed under TGO T-VER methodology — the same standard used for Thai carbon credits.",
              },
            ].map((s) => (
              <li key={s.n} className="card p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-green-dark">
                  STEP {s.n}
                </p>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-3xl text-xs text-ink-light leading-relaxed">
            * CO₂ figures reference IEA 2023 emission factors and TGO T-VER
            methodology. Actual savings depend on vehicle utilisation, route
            profile, and grid mix at point of charge.
          </p>
        </div>
      </section>

      <FaqSection
        title="ESG & carbon reporting — FAQs"
        intro="Common questions from sustainability teams, CFOs, and auditors."
        items={faqs}
        background="white"
      />

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-x py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white">
              Ready to put numbers behind your ESG story?
            </h2>
            <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
              Book a free 30-minute consultation with our sustainability team —
              we'll model your potential CO₂ avoided based on current fleet size
              and route profile.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Book consultation
            </Link>
            <Link href="/corporate-fleet" className="btn-ghost-light">
              Corporate Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
