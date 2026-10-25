import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { cookieSections, policyUpdated } from '@/components/legal/additional-policies';

export const metadata: Metadata = {
  title: 'Chính sách Cookie | STACloud',
  description: 'Cookie, dữ liệu trình duyệt và cách kiểm soát trên website và Portal.',
  alternates: { canonical: 'https://stacloud.eu.cc/cookies' },
};

export default function PolicyPage() {
  return <LegalPage eyebrow="Chính sách dịch vụ" title="Chính sách Cookie" intro="Cookie, dữ liệu trình duyệt và cách kiểm soát trên website và Portal." lastUpdated={policyUpdated} sections={cookieSections} />;
}
