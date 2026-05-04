"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  Locale,
  dictionaries,
  locales,
} from "./dictionary";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof dictionaries)[Locale];
};

const I18nContext = createContext<Ctx | null>(null);

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${oneYear}; SameSite=Lax`;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readCookie(LOCALE_COOKIE);
    if (stored && (locales as readonly string[]).includes(stored)) {
      setLocaleState(stored as Locale);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    writeCookie(LOCALE_COOKIE, l);
    setLocaleState(l);
  }, []);

  const value: Ctx = {
    locale,
    setLocale,
    t: dictionaries[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
