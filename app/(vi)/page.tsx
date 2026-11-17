import { vietnameseOpenGraph } from '@/lib/site-seo';
import { localizedAlternates } from "@/lib/site-seo";
import { freePlans, resourceSpecs } from "@/components/shared/free-plans";
import type { Metadata } from "next";
import { HomePage } from "@/components/home/homepage";
import { sitePath } from "@/lib/site-path";
import {
  alternateNames,
  siteDescription,
  siteImage,
  siteName,
  siteServices,
  siteTitle,
  siteUrl,
} from "@/lib/site-seo";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: sitePath("/") },
  keywords: [
    "free hosting bot discord",
    "free web hosting sinh viên",
    "free hosting project nhỏ",
    "hosting miễn phí",
    "hosting miễn phí Việt Nam",
    "VPS Singapore",
    "game server hosting",
    "Cloud VPS STACloud",
    "STACloud",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: sitePath("/"),
    siteName,
    locale: "vi_VN",
    images: [siteImage],
    type: "website",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: alternateNames,
      url: `${siteUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: siteImage.url,
        width: 500,
        height: 500,
      },
      description: siteDescription,
      mainEntityOfPage: `${siteUrl}/about/`,
      sameAs: ["https://github.com/STA-Cloud-Dev"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "VPS, hosting Việt Nam và Singapore tại STA Cloud",
        itemListElement: siteServices.map((service) => ({
          "@type": "OfferCatalog",
          name: service.name,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                description: service.description,
                url: `${siteUrl}${service.path}`,
                provider:
                  service.path === "/vps/"
                    ? {
                        "@type": "Organization",
                        name: "ICS",
                        url: "https://oci.ics.vn/",
                      }
                    : { "@id": `${siteUrl}/#organization` },
              },
            },
          ],
        })),
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://discord.gg/nq8B4JXmnm",
        availableLanguage: ["vi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: alternateNames,
      url: `${siteUrl}/`,
      inLanguage: "vi",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "vi",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
    ...freePlans
      .filter((plan) => plan.credit === 0)
      .map((plan) => ({
        "@type": "Service",
        "@id": `${siteUrl}/#${plan.id}`,
        name: plan.name,
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Hosting miễn phí Free Forever",
        description: `${resourceSpecs(plan).join(", ")}. Free Forever, không thu phí, chu kỳ quản lý 5 ngày, gia hạn 0đ. Cấu hình có thể điều chỉnh trong tương lai.`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "VND",
          url: `${siteUrl}/free/`,
        },
      })),
  ],
};

metadata.alternates = localizedAlternates("/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/');

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
