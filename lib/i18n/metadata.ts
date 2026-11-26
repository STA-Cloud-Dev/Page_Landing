import type { Metadata } from "next";
import pages from "./dictionaries/pages-en.json";
import { siteUrl, siteImage, localizedAlternates } from "@/lib/site-seo";
import type { PublicPage } from "./config";
export function englishMetadata(page: PublicPage): Metadata {
  const data = pages[page];
  const viPath = page ? `/${page}/` : "/";
  const alternates = localizedAlternates(viPath);
  const canonical = `${siteUrl}/en${viPath}`;
  return {
    ...data,
    alternates: { ...alternates, canonical },
    openGraph: {
      ...data,
      url: canonical,
      type: "website",
      locale: "en_US",
      alternateLocale: ["vi_VN"],
      siteName: "STACloud",
      images: [siteImage],
    },
    twitter: { card: "summary", ...data, images: [siteImage.url] },
  };
}
