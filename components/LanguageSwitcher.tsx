"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export default function LanguageSwitcher({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const { locale, setLocale, t } = useI18n();

  const baseTrack =
    tone === "dark"
      ? "border-white/20 bg-white/5"
      : "border-line bg-canvas";
  const inactive =
    tone === "dark"
      ? "text-white/70 hover:text-white"
      : "text-ink-mid hover:text-navy";
  const active =
    tone === "dark"
      ? "bg-white text-navy shadow-card"
      : "bg-white text-navy shadow-card";

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border ${baseTrack} p-0.5`}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-colors ${
          locale === "en" ? active : inactive
        }`}
      >
        {t.language.en}
      </button>
      <button
        type="button"
        onClick={() => setLocale("th")}
        aria-pressed={locale === "th"}
        className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-colors ${
          locale === "th" ? active : inactive
        }`}
      >
        {t.language.th}
      </button>
    </div>
  );
}
