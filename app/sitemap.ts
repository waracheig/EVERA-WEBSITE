import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://evera.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/legacy",
    "/ecosystem",
    "/ecosystem/easy-super-charge",
    "/ecosystem/easyvolt-fleet",
    "/ecosystem/phuket-ev-drive",
    "/ecosystem/flagship-hub",
    "/ecosystem/prime-ev-mobility",
    "/corporate-fleet",
    "/esg",
    "/contact",
  ];
  const now = new Date();

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" || path === "/corporate-fleet" ? 1 : 0.7,
  }));
}
