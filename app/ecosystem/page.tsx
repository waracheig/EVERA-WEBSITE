import Link from "next/link";
import Icon from "@/components/Icon";
import { ecosystem } from "@/lib/site";

export const metadata = {
  title: "Our EV Ecosystem — Six Businesses Powering Phuket's Transition",
  description:
    "EvEra's six businesses in Phuket: Easy Super Charge (charging network), Easy Volt Fleet (EV taxi), Phuket EV Drive (EV rental), EV Fleet Solutions (corporate fleet), Flagship 880kW Hub, and Prime EV Mobility (vans + buses).",
  keywords: [
    "EV ecosystem Phuket",
    "EvEra businesses",
    "Phuket EV companies",
    "ระบบนิเวศ EV ภูเก็ต",
  ],
};

export default function EcosystemPage() {
  return (
    <section className="bg-canvas">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Ecosystem</p>
          <h1 className="mt-3 text-4xl md:text-5xl">
            Six businesses powering Phuket's EV transition.
          </h1>
          <p className="mt-5 text-ink-mid leading-relaxed">
            From the vehicles your team drives to the stations they charge at,
            EvEra runs every layer of the value chain — under one operator, one
            contract, one carbon report.
          </p>
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
              <h2 className="mt-5 text-lg">{node.title}</h2>
              <p className="mt-2 text-sm text-ink-mid leading-relaxed">{node.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
