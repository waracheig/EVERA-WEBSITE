import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://evera.asia";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  const linkClass =
    tone === "dark"
      ? "text-white/70 hover:text-white"
      : "text-ink-mid hover:text-navy";
  const sepClass = tone === "dark" ? "text-white/40" : "text-ink-light";
  const currentClass = tone === "dark" ? "text-white" : "text-navy";

  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className={linkClass}>
                  {c.label}
                </Link>
              ) : (
                <span className={`font-semibold ${currentClass}`}>
                  {c.label}
                </span>
              )}
              {!last && <span className={sepClass}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
