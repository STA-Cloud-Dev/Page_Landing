import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { legalLastUpdated, termsSections } from '@/components/legal/legal-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stacloud.eu.cc/terms' },
  title: 'Điều Khoản Dịch Vụ | STACloud',
  description: 'Đọc Điều khoản dịch vụ của STACloud.',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Pháp Lý"
      title="Điều Khoản Dịch Vụ"
      intro="Khi sử dụng dịch vụ của STACloud, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi tiếp tục."
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
