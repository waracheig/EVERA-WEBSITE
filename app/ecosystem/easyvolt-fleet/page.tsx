import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "EasyVolt Fleet — 250+ EV Taxis in Phuket",
  description:
    "EasyVolt and Erawan Volt — 250+ electric taxis operating 24/7 in Phuket. The island's largest EV taxi fleet, running entirely on the EvEra charging network. แท็กซี่ไฟฟ้า ภูเก็ต.",
  keywords: [
    "EV taxi Phuket",
    "แท็กซี่ไฟฟ้า ภูเก็ต",
    "EasyVolt",
    "Erawan Volt",
    "Phuket airport transfer EV",
    "MG EP+ taxi",
    "electric taxi Thailand",
  ],
  openGraph: {
    title: "EasyVolt Fleet — Phuket's Largest EV Taxi Fleet",
    description:
      "250+ EV taxis operating 24/7 in Phuket under the EasyVolt and Erawan Volt brands.",
    images: ["/assets/fleet/EasyVolt-Fleet.jpg"],
  },
};

const stats = [
  { v: "250+", l: "EV vehicles in operation" },
  { v: "24/7", l: "Around-the-clock service" },
  { v: "100%", l: "Charged on EvEra network" },
  { v: "MG EP+", l: "Primary platform" },
];

const photos = [
  "/assets/fleet/MG-EasyVolt-TAXI.jpeg",
  "/assets/fleet/EasyVolt_Fleet-01.jpeg",
  "/assets/fleet/EasyVolt_Fleet-02.jpeg",
  "/assets/fleet/MG-EasyVolt-TAXI-2.jpeg",
  "/assets/fleet/EasyVolt-Fleet2.jpg",
  "/assets/fleet/EasyVolt_Fleet-03.jpeg",
];

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/assets/fleet/EasyVolt-Fleet.jpg"
            alt="EasyVolt EV taxi fleet operating in Phuket — 250+ electric taxis"
            fill
            sizes="100vw"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-navy/10" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <p className="eyebrow text-brand-green">
            <span className="h-px w-6 bg-brand-green" /> EasyVolt Fleet
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Phuket's largest EV taxi fleet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            EasyVolt and Erawan Volt — 250+ electric taxis covering Phuket
            island-wide, 24/7. Every vehicle charges exclusively on the EvEra
            network.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Fleet partnership enquiry
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="card p-6">
              <div className="text-3xl font-extrabold text-navy">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-mid">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Fleet at work</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Real cars. Real routes. Phuket.</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <div key={p} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
                <Image
                  src={p}
                  alt="EasyVolt EV taxi fleet operating in Phuket"
                  fill
                  sizes="(max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-x py-16 md:py-20 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white">
              Hotels, airlines, tour operators — partner on transport.
            </h2>
            <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
              Dedicated transfer fleets, airport-hotel routes, and tour mobility
              — built on the same operations platform that runs Phuket's largest
              EV taxi network.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
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
