import type { Metadata } from "next";
import { PolicyCenter } from "@/components/legal/policy-center";
import { localizedAlternates, vietnameseOpenGraph } from "@/lib/site-seo";
export const metadata: Metadata = {
  title:
    "Trung tâm chính sách STA Cloud | Điều khoản, Credit, dữ liệu & hỗ trợ",
  description:
    "7 văn bản chính sách STA Cloud: điều khoản, quyền riêng tư, SLA, hoàn Credit, bảo mật, Cookie và Partner. Fair Use, lạm dụng, khiếu nại, hết hạn và backup.",
  alternates: localizedAlternates("/policies/"),
};
metadata.openGraph = vietnameseOpenGraph(metadata, "/policies/");
export default function Page() {
  return <PolicyCenter />;
}
