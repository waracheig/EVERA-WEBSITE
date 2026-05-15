import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://evera.asia";

export const metadata: Metadata = {
  title: {
    default:
      "EvEra — Phuket's Complete EV Ecosystem · EV Fleet, Taxi, Rental & Charging",
    template: "%s — EvEra",
  },
  description:
    "EvEra is Phuket's complete EV ecosystem — corporate EV fleet, EV taxi, EV rental, and the island's fastest-growing DC fast-charging network. 250+ EV fleet · 9 charging stations · 5,120kW capacity. ระบบนิเวศรถยนต์ไฟฟ้าครบวงจรในภูเก็ต.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "EV Phuket",
    "EV ecosystem Thailand",
    "EV charging Phuket",
    "EV fleet Phuket",
    "corporate EV fleet Thailand",
    "EV taxi Phuket",
    "EV rental Phuket",
    "DC fast charging Phuket",
    "สถานีชาร์จรถยนต์ไฟฟ้า ภูเก็ต",
    "เช่ารถยนต์ไฟฟ้า ภูเก็ต",
    "รถยนต์ไฟฟ้า องค์กร",
    "EvEra",
    "Easy Super Charge",
    "Phuket EV Drive",
    "Easy Volt",
  ],
  authors: [{ name: "EvEra" }],
  creator: "EvEra",
  publisher: "EvEra",
  openGraph: {
    title: "EvEra — Phuket's Complete EV Ecosystem",
    description:
      "Corporate EV fleet, EV taxi, EV rental, and Phuket's fastest-growing charging network. 250+ fleet · 9 stations · 5,120kW.",
    url: SITE_URL,
    siteName: "EvEra",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EvEra — Phuket's Complete EV Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvEra — Phuket's Complete EV Ecosystem",
    description:
      "Corporate EV fleet, EV taxi, EV rental, and Phuket's fastest-growing charging network.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  category: "Business",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EvEra",
  alternateName: "EvEra — Phuket EV Ecosystem",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logos/Logo.png`,
  description:
    "Phuket's complete EV ecosystem — corporate EV fleet, EV taxi, EV rental, and the island's fastest-growing charging network.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+66-92-279-6111",
      contactType: "Sales",
      email: "ev@easynetwork.co.th",
      areaServed: "TH",
      availableLanguage: ["en", "th"],
    },
  ],
  sameAs: ["https://facebook.com/easysupercharge"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sarabun.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
