import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import HomeHero from "@/components/HomeHero";
import { ecosystem, site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "EvEra — Phuket's Complete EV Ecosystem · EV Fleet, Taxi, Rental & Charging",
  description:
    "Phuket's complete EV ecosystem — 250+ corporate EV fleet, 9 DC fast-charging stations (5,120kW), EV taxi and EV rental. One operator, one contract, one ESG report. ระบบนิเวศ EV ครบวงจรในภูเก็ต.",
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EvEra — Phuket EV Ecosystem",
  description:
    "Operator of 9 EV charging stations, 250+ EV taxi fleet, EV rental, and corporate EV fleet solutions in Phuket, Thailand.",
  image: "/assets/stations/480kW OneCharge Old Town.jpg",
  telephone: "+66-92-279-6111",
  email: "ev@easynetwork.co.th",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },
  areaServed: "Phuket, Thailand",
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <HomeHero />

      {/* ECOSYSTEM */}
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Our Ecosystem</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Six businesses. One mission.
              </h2>
              <p className="mt-4 text-ink-mid leading-relaxed">
                From the vehicles your team drives to the stations they charge at,
                EvEra runs every layer of the EV value chain in Phuket — so every
                kilometre stays on-network, on-brand, and on the books.
              </p>
            </div>
            <Link
              href="/ecosystem"
              className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-green-dark"
            >
              View all <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((node) => (
              <Link
                key={node.slug}
                href={node.href}
                className="card group p-6 hover:-translate-y-0.5 hover:border-brand-green/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                    <Icon name={node.icon as any} className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 text-ink-light group-hover:text-brand-green transition-colors"
                  />
                </div>
                <h3 className="mt-5 text-lg">{node.title}</h3>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">
                  {node.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EVERA */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/assets/stations/880kW coming soon 1.jpg"
                alt="EvEra Flagship 880kW DC fast charging hub equipment in Phuket"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/65 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-green">
                  Coming 2026
                </p>
                <p className="mt-1 text-lg font-semibold">
                  Flagship 880kW Hub — Phuket
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Why EvEra</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Operator-led. Phuket-deep. Enterprise-ready.
              </h2>
              <p className="mt-4 text-ink-mid leading-relaxed">
                We don't resell. We operate every station, every fleet vehicle, and
                every service touchpoint ourselves — so corporate, hotel, and
                government partners get one accountable contract for the entire EV
                programme in Phuket.
              </p>

              <ul className="mt-10 grid gap-6">
                {[
                  {
                    icon: "spark",
                    title: "Technology Expertise",
                    body: "OneCharge 480kW and 880kW DC ultrafast charging equipment, deployed and serviced in-house.",
                  },
                  {
                    icon: "bolt",
                    title: "Fastest Charging Network in Phuket",
                    body: "9 EV charging stations and 5,120kW planned across the island — the most of any operator in Phuket.",
                  },
                  {
                    icon: "hub",
                    title: "Complete EV Ecosystem",
                    body: "Corporate fleet, EV taxi, EV rental, charging and service under one roof — with one ESG carbon report.",
                  },
                ].map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                      <Icon name={p.icon as any} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-base">{p.title}</h3>
                      <p className="mt-1 text-sm text-ink-mid leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESG TEASER */}
      <section className="bg-brand-green-bg">
        <div className="container-x py-20 md:py-24 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-brand-green-dark">ESG & Sustainability</p>
            <h2 className="mt-3 text-3xl md:text-4xl text-navy">
              Switch to EV. Cut Scope 1 emissions by 60–70%.
            </h2>
            <p className="mt-4 text-ink-mid max-w-xl leading-relaxed">
              Every fleet client receives a monthly Carbon Report, an audit-ready
              ESG data package, and an annual certificate — calculated against
              IEA 2023 and TGO T-VER methodology.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/esg" className="btn-primary">
                See the ESG package
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost-dark">
                Book a 30-min consultation
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { v: "2.6–3.8 t", l: "CO₂ saved per vehicle / year" },
              { v: "60–70%", l: "Fuel cost savings vs gasoline" },
              { v: "T-VER", l: "Carbon credit methodology" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white bg-white px-5 py-5 shadow-card"
              >
                <div className="text-2xl font-extrabold text-brand-green-dark">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-ink-mid">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-white">Ready to partner?</h2>
            <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
              Whether you operate a hotel, manage a corporate fleet, or run public
              transport — the EvEra team will scope a programme tailored to your
              operation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
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
            <Link href="/contact" className="btn-primary">
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
