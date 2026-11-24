import { vietnameseOpenGraph } from '@/lib/site-seo';
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import {
  refundSections,
  refundUpdated,
} from "@/components/legal/additional-policies";

export const metadata: Metadata = {
  title: "Chính sách hoàn Credit | STACloud",
  description:
    "Hoàn Credit trong 3 giờ đầu sau khi mua gói server nếu chọn sai gói hoặc không phù hợp nhu cầu. Điều kiện, cách tính và quy trình hoàn vào số dư Portal.",
  alternates: { canonical: "https://stacloud.eu.cc/refund" },
};

metadata.alternates = localizedAlternates("/refund/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/refund/');

export default function PolicyPage() {
  return (
    <LegalPage
      eyebrow="Chính sách dịch vụ"
      title="Chính sách hoàn Credit"
      intro="Hoàn Credit trong 3 giờ đầu sau khi mua gói server nếu chọn sai gói hoặc không phù hợp nhu cầu. Điều kiện, cách tính và quy trình hoàn vào số dư Portal."
      lastUpdated={refundUpdated}
      sections={refundSections}
    />
  );
}
