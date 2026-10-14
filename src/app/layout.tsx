import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./hero.css";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/sections/SiteFooter";

const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  weight: "200 800",
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ВТН ТРАНС — таможенные грузоперевозки", template: "%s | ВТН ТРАНС" },
  description: site.description,
  alternates: { canonical: "/" },
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/brand/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/brand/icon-180.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/brand/safari-pinned-tab.svg", color: "#0875df" }],
  },
  appleWebApp: { capable: true, title: site.name, statusBarStyle: "black-translucent" },
  other: { "msapplication-TileColor": "#06182f", "msapplication-config": "/browserconfig.xml" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: "ВТН ТРАНС — таможенные грузоперевозки",
    description: site.description,
    images: [{ url: "/brand/social-card.png", width: 1200, height: 630, alt: "ВТН ТРАНС — таможенные грузоперевозки" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ВТН ТРАНС — таможенные грузоперевозки",
    description: site.description,
    images: [{ url: "/brand/social-card.png", alt: "ВТН ТРАНС — под контролем на всём маршруте" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#06182f", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={manrope.variable}><body>{children}<SiteFooter /></body></html>;
}
