import { vietnameseOpenGraph } from '@/lib/site-seo';
import { localizedAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { slaLastUpdated, slaSections } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  alternates: { canonical: "https://stacloud.eu.cc/sla" },
  title: "SLA | STACloud",
  description: "Đọc cam kết mức độ dịch vụ (SLA) của STACloud.",
};

metadata.alternates = localizedAlternates("/sla/");

metadata.openGraph = vietnameseOpenGraph(metadata, '/sla/');

export default function SlaPage() {
  return (
    <LegalPage
      eyebrow="Pháp Lý"
      title="Service Level Agreement (SLA)"
      intro="Tài liệu này mô tả phạm vi áp dụng, mục tiêu uptime, các trường hợp loại trừ và cơ chế service credit cho các dịch vụ trả phí của STACloud."
      lastUpdated={slaLastUpdated}
      sections={slaSections}
    />
  );
}
