import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
};

export function pageMetadata({ path, title, description }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/brand/social-card.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/brand/social-card.png"],
    },
  };
}
