import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Prime EV Mobility — EV Vans & Buses for Phuket",
  description:
    "Prime EV Mobility — EvEra's mass-transit electrification programme for Phuket. EV vans and buses, launching 2027. Built on the operations platform that runs Phuket's largest EV taxi fleet and charging network.",
  keywords: [
    "EV bus Phuket",
    "EV van Phuket",
    "mass transit Thailand",
    "รถบัสไฟฟ้า ภูเก็ต",
    "Prime EV Mobility",
    "electric public transport Thailand",
    "EV30@30",
  ],
  openGraph: {
    title: "Prime EV Mobility — EV Vans & Buses for Phuket",
    description:
      "Mass-transit electrification for Phuket — EV vans and buses, launching 2027.",
    images: ["/assets/stations/Katu station service to buses.jpg"],
  },
};

const formats = [
  {
    title: "EV Van",
    body: "Hotel transfer vans, tour shuttles, and short-route public transport — quiet, premium, charged on-network.",
    icon: "car" as const,
  },
  {
    title: "EV Bus",
    body: "Full-size electric buses for inter-district routes, airport transfer, and tourism mass transit.",
    icon: "bus" as const,
  },
];

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/stations/Katu station service to buses.jpg"
            alt="EvEra Katu station servicing larger vehicles — Prime EV Mobility"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-navy/10" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> Prime EV Mobility · Phuket
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            EV Vans & Buses.<br />Mass-transit electrification.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Phuket's tourist economy and growing population need clean, reliable
            mass transit. Prime EV Mobility brings electric vans and buses to
            the island — built on the operations platform that already runs
            Phuket's largest EV taxi fleet and charging network. Launching 2027.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Government & operator enquiries
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Two formats</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Vans for premium routes. Buses for mass transit.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {formats.map((f) => (
              <div key={f.title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                  <Icon name={f.icon} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24 max-w-3xl">
          <p className="eyebrow">Programme overview</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Why EvEra is building Prime EV Mobility.
          </h2>
          <p className="mt-5 text-ink-mid leading-relaxed">
            We are uniquely positioned to deliver mass-transit electrification in
            Phuket: we already operate the island's largest EV taxi fleet, the
            most charging capacity, and the only end-to-end ESG reporting
            infrastructure for mobility operators in the province.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-ink-mid">
            {[
              "Service depots co-located with EvEra charging hubs",
              "Operations team experienced with 250+ vehicle fleets",
              "ESG and carbon reporting bundled — eligible for EV30@30 incentives",
              "Both van (premium / hotel) and bus (mass transit) formats",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
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
      </section>

      <section className="bg-navy text-white">
        <div className="container-x py-16 md:py-20 max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl text-white">Want to be part of it?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Government bodies, transit operators, route concession partners, and
            tourism authorities — get in touch as the programme takes shape.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to us
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
