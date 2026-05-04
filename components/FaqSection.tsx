import Icon from "./Icon";

export type FaqItem = { q: string; a: string };

export default function FaqSection({
  eyebrow = "FAQ",
  title,
  intro,
  items,
  background = "white",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FaqItem[];
  background?: "white" | "canvas" | "green";
}) {
  const bg =
    background === "canvas"
      ? "bg-canvas"
      : background === "green"
      ? "bg-brand-green-bg"
      : "bg-white";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <section className={bg}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
          {intro && (
            <p className="mt-4 text-ink-mid leading-relaxed">{intro}</p>
          )}
        </div>

        <ul className="mt-10 grid gap-3 max-w-3xl">
          {items.map((it, i) => (
            <li key={i} className="card overflow-hidden">
              <details className="group">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none px-6 py-5">
                  <span className="text-base font-semibold text-navy">
                    {it.q}
                  </span>
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-mid transition-transform group-open:rotate-45 group-open:bg-brand-green group-open:border-brand-green group-open:text-white">
                    <Icon name="spark" className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-sm text-ink-mid leading-relaxed">
                  {it.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
