import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Phuket EV Drive — EV Rental for Phuket",
  description:
    "EV rental in Phuket for tourists and long-term residents. Daily, weekly, and monthly packages with free DC fast-charging at all 9 EvEra stations across the island. เช่ารถยนต์ไฟฟ้า ภูเก็ต.",
  keywords: [
    "EV rental Phuket",
    "เช่ารถยนต์ไฟฟ้า ภูเก็ต",
    "เช่ารถ EV ภูเก็ต",
    "Phuket EV Drive",
    "monthly EV rental Phuket",
    "tourist EV rental Thailand",
  ],
  openGraph: {
    title: "Phuket EV Drive — EV Rental Phuket",
    description:
      "EV rental in Phuket — daily, weekly, monthly. Free charging on the EvEra network.",
    images: ["/assets/fleet/PEVD-EV1.jpg"],
  },
};

const packages = [
  {
    title: "Daily",
    body: "Drop-in EV rental for visitors. Pick-up across Phuket.",
    icon: "spark" as const,
  },
  {
    title: "Weekly",
    body: "Vacation-length plans with discounted weekly rates and unlimited charging.",
    icon: "bolt" as const,
  },
  {
    title: "Monthly",
    body: "Long-term residents and digital nomads — flat monthly fee, full insurance, free charging.",
    icon: "shield" as const,
  },
];

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/fleet/PEVD-EV1.jpg"
            alt="Phuket EV Drive — EV rental for tourists and residents in Phuket"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/35 to-navy/5" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> Phuket EV Drive
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Drive Phuket. Electric.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            EV rental for tourists and long-term residents — daily, weekly, or
            monthly. Free charging at every EvEra station across the island.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              LINE {site.line}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <Link href="/contact" className="btn-ghost-light">
              Enquire by email
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Rental packages</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Three tiers. One network. No fuel stops.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                  <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 md:grid-cols-2 max-w-3xl text-sm text-ink-mid">
            {[
              "Free charging at all 9 EvEra stations",
              "Insurance and maintenance included",
              "New vehicles, latest models",
              "Pick-up across Phuket",
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

      <section className="bg-canvas">
        <div className="container-x py-16 md:py-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p className="eyebrow">Fleet vehicle</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Modern EVs. Tourist-ready.</h2>
            <p className="mt-4 text-ink-mid leading-relaxed">
              Our rental fleet covers everyday hatchbacks for solo travellers and
              SUVs for families and small groups — all with full DC fast-charging
              support on the EvEra network.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/assets/fleet/PEVD-EV1.jpg"
              alt="Phuket EV Drive rental vehicle"
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
