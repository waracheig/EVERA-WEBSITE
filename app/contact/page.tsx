import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact EvEra — Phuket EV Ecosystem",
  description:
    "Contact EvEra for corporate EV fleet, charging partnership, EV rental, or government procurement enquiries. Phone, LINE, email, and on-site office in Phuket. ติดต่อ EvEra ภูเก็ต.",
  keywords: [
    "contact EvEra",
    "EV company Phuket contact",
    "ติดต่อ EvEra",
    "Phuket EV operator phone",
  ],
};

export default function ContactPage() {
  const cards = [
    { label: "Phone", value: site.phone, href: `tel:${site.phone}`, icon: "spark" as const },
    { label: "LINE OA", value: site.line, href: site.lineUrl, icon: "bolt" as const },
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "shield" as const },
    { label: "Location", value: site.location, href: null, icon: "hub" as const },
  ];

  return (
    <>
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl md:text-5xl">Talk to the EvEra team.</h1>
            <p className="mt-5 text-ink-mid leading-relaxed">
              Corporate fleet, charging partnership, EV rental, government
              procurement — start the conversation here. We respond to every
              enquiry within two business days.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {cards.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="card p-5 hover:border-brand-green/40 transition-colors"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                        <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ink-light">
                        {c.label}
                      </p>
                      <p className="mt-1 font-semibold text-navy">{c.value}</p>
                    </a>
                  ) : (
                    <div key={c.label} className="card p-5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green-bg text-brand-green-dark">
                        <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ink-light">
                        {c.label}
                      </p>
                      <p className="mt-1 font-semibold text-navy">{c.value}</p>
                    </div>
                  )
                )}
              </div>

              <div className="card mt-6 overflow-hidden aspect-square sm:aspect-[16/10]">
                <iframe
                  title="EvEra location — Phuket"
                  src="https://www.google.com/maps?q=Phuket%2C+Thailand&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <ContactInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
