import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Our Legacy — 60+ Years Manufacturing, 18 Years Distribution",
  description:
    "EvEra didn't start from zero. Built on 60+ years of Thai manufacturing heritage and 18 years of island-wide distribution — now powering Phuket's EV future.",
  keywords: [
    "EvEra heritage",
    "Thai EV company history",
    "Phuket EV operator background",
    "EV business Thailand",
  ],
  openGraph: {
    title: "Our Legacy — 60+ Years Manufacturing, 18 Years Distribution",
    description:
      "EvEra is built on 60+ years of manufacturing and 18 years of distribution heritage.",
  },
};

const eras = [
  {
    period: "1965 →",
    title: "60+ Years of Manufacturing",
    body: "Industrial production and supply-chain expertise built across Thailand — the operational discipline that still underpins every EvEra deployment.",
    icon: "shield" as const,
  },
  {
    period: "2009 →",
    title: "18 Years of Distribution",
    body: "Two decades building island-wide logistics and technology distribution networks — the same delivery muscle now energising Phuket's EV transition.",
    icon: "hub" as const,
  },
  {
    period: "2024 →",
    title: "Now: The EV Era",
    body: "EvEra brings that experience to power Phuket's clean mobility future — fleet, taxi, rental, and the island's fastest-growing charging network.",
    icon: "bolt" as const,
  },
];

export default function LegacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(45,184,75,0.18),transparent)]"
        />
        <div className="relative container-x py-24 md:py-28">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> Our Legacy
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            EvEra didn't start from zero.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            It was built on decades of proven business heritage — manufacturing
            discipline, distribution reach, and the conviction to invest before
            the market caught up.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-5 top-2 bottom-2 w-px bg-line"
            />
            <ol className="space-y-12">
              {eras.map((era, i) => (
                <li key={era.title} className="relative pl-16">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-brand-green text-white shadow-card"
                  >
                    <Icon name={era.icon} className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-green-dark">
                    {era.period}
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl">{era.title}</h2>
                  <p className="mt-3 max-w-2xl text-ink-mid leading-relaxed">
                    {era.body}
                  </p>
                  <div className="mt-5 max-w-2xl rounded-xl border border-line bg-canvas p-5">
                    <p className="text-sm text-ink-mid leading-relaxed">
                      {i === 0 &&
                        "Operating discipline learned from manufacturing — preventive maintenance, supplier QA, and uptime accountability — applied to every charging station and fleet vehicle."}
                      {i === 1 &&
                        "Distribution-network thinking — coverage planning, route optimisation, and last-mile reliability — applied to where we site stations and how we service customers."}
                      {i === 2 &&
                        "A complete EV ecosystem assembled in a single Thai province — fleet, taxi, rental, charging, ESG reporting — under one operator and one contract."}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CONNECTING STATEMENT */}
      <section className="bg-brand-green-bg">
        <div className="container-x py-16 md:py-20 max-w-4xl text-center mx-auto">
          <div className="flex justify-center">
            <p className="eyebrow text-brand-green-dark">Heritage in practice</p>
          </div>
          <p className="mt-6 text-2xl md:text-3xl font-extrabold text-navy leading-snug">
            "This heritage means EvEra operates with the discipline of a
            manufacturer, the reach of a distributor, and the vision of a clean
            energy pioneer."
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/ecosystem" className="btn-primary">
              See the ecosystem
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost-dark">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
