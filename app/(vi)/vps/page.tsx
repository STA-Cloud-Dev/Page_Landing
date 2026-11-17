import { vietnameseOpenGraph } from '@/lib/site-seo';
import { OracleCatalog } from "@/components/shared/oracle-catalog";
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { SiteShell } from "@/components/shared/site-shell";
import { siteUrl } from "@/lib/site-seo";

const canonical = `${siteUrl}/vps/`;
const title =
  "VPS & GPU Oracle Cloud ICS: Tiêu chuẩn, Cao cấp, Doanh nghiệp | STA Cloud";
const description =
  "STA Cloud giới thiệu sản phẩm Oracle Cloud ICS: VPS Starter, Professional, Enterprise và GPU AI. So sánh cấu hình, giá tham khảo; mua tại ICS hoặc liên hệ STA Cloud.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    locale: "vi_VN",
    type: "website",
  },
};
metadata.alternates = localizedAlternates("/vps/");
metadata.openGraph = vietnameseOpenGraph(metadata, '/vps/');

export default function VpsPage() {
  return (
    <SiteShell>
      <OracleCatalog />
    </SiteShell>
  );
}
