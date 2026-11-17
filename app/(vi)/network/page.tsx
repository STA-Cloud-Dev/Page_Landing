import { vietnameseOpenGraph } from '@/lib/site-seo';
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { SiteShell } from "@/components/shared/site-shell";
import { LazyNetworkMap } from "@/components/visual/lazy-network-map";
import { siteUrl } from "@/lib/site-seo";
export const metadata: Metadata = {
  title: "Khu vực hosting và bản đồ region Oracle | STA Cloud",
  description:
    "Hà Nội, TP.HCM, Hong Kong và danh mục region Oracle Cloud. Bản đồ tương tác, tìm quốc gia và thành phố; ping mô phỏng, xác nhận slot theo từng dịch vụ.",
  alternates: { canonical: `${siteUrl}/network/` },
};
metadata.alternates = localizedAlternates("/network/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/network/');

export default function NetworkPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">
          Khu vực hosting và kết nối
        </h1>
        <p className="my-6 max-w-3xl text-sm leading-7">
          Chọn theo vị trí người dùng và loại dịch vụ. Các region Oracle là danh
          mục do Oracle công bố; sản phẩm VPS/GPU được ICS cung cấp. Ping dưới
          đây là mô phỏng, không phải kết quả đo hay cam kết độ trễ.
        </p>
        <LazyNetworkMap />
      </div>
    </SiteShell>
  );
}
