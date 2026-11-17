import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-seo";
import { publicPages, pagePath } from "@/lib/i18n/config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.flatMap((page) =>
    (["vi", "en"] as const).map((locale) => ({
      url: `${siteUrl}${pagePath(page, locale)}`,
      changeFrequency: (["", "pricing", "free", "vps"].includes(page)
        ? "weekly"
        : page === "history"
          ? "yearly"
          : "monthly") as "weekly" | "yearly" | "monthly",
      priority:
        page === "" ? 1 : ["pricing", "free", "vps"].includes(page) ? 0.9 : 0.5,
      alternates: {
        languages: {
          vi: `${siteUrl}${pagePath(page, "vi")}`,
          en: `${siteUrl}${pagePath(page, "en")}`,
          "x-default": `${siteUrl}${pagePath(page, "vi")}`,
        },
      },
    })),
  );
}
