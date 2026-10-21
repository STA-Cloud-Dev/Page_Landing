import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { partnerLastUpdated, partnerSections } from '@/components/legal/legal-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stacloud.eu.cc/partner' },
  title: 'Partner Program | STACloud',
  description:
    'Đọc quy định Partner Discord, ưu đãi 20%, SLA hỗ trợ Partner và điều khoản hợp tác của STACloud.',
};

export default function PartnerPage() {
  return (
    <LegalPage
      eyebrow="Partner"
      title="STACloud Partner Program"
      intro="Tài liệu này mô tả quyền lợi Partner, phạm vi giảm giá 20%, SLA hỗ trợ ưu tiên, quy tắc hợp tác, trách nhiệm dữ liệu và các trường hợp tạm dừng hoặc chấm dứt hợp tác."
      lastUpdated={partnerLastUpdated}
      sections={partnerSections}
    />
  );
}
