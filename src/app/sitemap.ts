import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, { href: "/politika-konfidentsialnosti", label: "Политика обработки персональных данных" }, { href: "/cookies", label: "Cookie" }].map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
