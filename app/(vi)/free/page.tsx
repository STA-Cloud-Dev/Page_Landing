import { vietnameseOpenGraph } from '@/lib/site-seo';
import { FreeHosting } from "@/components/shared/free-hosting";
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { SiteShell } from "@/components/shared/site-shell";
import { siteUrl } from "@/lib/site-seo";
export const metadata: Metadata = {
  title: "Hosting Free Forever: Free DEV & Gamming AI | STA Cloud",
  description:
    "Hosting Free Forever STA Cloud: Free DEV và Free Gamming + AI 0 Credit / 5 ngày, gia hạn 0đ. Cấu hình, điều kiện, sao lưu và cách đăng ký.",
  alternates: { canonical: `${siteUrl}/free/` },
};
metadata.alternates = localizedAlternates("/free/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/free/');

export default function FreePage() {
  return (
    <SiteShell>
      <FreeHosting />
    </SiteShell>
  );
}
