import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { refundSections, policyUpdated } from '@/components/legal/additional-policies';

export const metadata: Metadata = {
  title: 'Chính sách hoàn Credit | STACloud',
  description: 'Điều kiện, cách tính và quy trình hoàn trả vào số dư Credit Portal.',
  alternates: { canonical: 'https://stacloud.eu.cc/refund' },
};

export default function PolicyPage() {
  return <LegalPage eyebrow="Chính sách dịch vụ" title="Chính sách hoàn Credit" intro="Điều kiện, cách tính và quy trình hoàn trả vào số dư Credit Portal." lastUpdated={policyUpdated} sections={refundSections} />;
}
