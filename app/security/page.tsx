import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { securitySections, policyUpdated } from '@/components/legal/additional-policies';

export const metadata: Metadata = {
  title: 'Điều khoản bảo mật máy chủ | STACloud',
  description: 'Quyền truy cập hỗ trợ, trách nhiệm bảo mật và sao lưu dữ liệu.',
  alternates: { canonical: 'https://stacloud.eu.cc/security' },
};

export default function PolicyPage() {
  return <LegalPage eyebrow="Chính sách dịch vụ" title="Điều khoản bảo mật máy chủ" intro="Quyền truy cập hỗ trợ, trách nhiệm bảo mật và sao lưu dữ liệu." lastUpdated={policyUpdated} sections={securitySections} />;
}
