import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./hero.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ВТН ТРАНС — таможенные грузоперевозки", template: "%s | ВТН ТРАНС" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: "ВТН ТРАНС — таможенные грузоперевозки",
    description: site.description,
    images: [{ url: "/images/hero-customs-gate.webp", width: 1680, height: 945 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#06182f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
