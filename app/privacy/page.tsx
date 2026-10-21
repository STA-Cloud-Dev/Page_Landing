import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { legalLastUpdated, privacySections } from '@/components/legal/legal-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stacloud.eu.cc/privacy' },
  title: 'Chính Sách Quyền Riêng Tư | STACloud',
  description: 'Đọc Chính sách quyền riêng tư của STACloud.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Pháp Lý"
      title="Chính Sách Quyền Riêng Tư"
      intro="Chính sách này giải thích cách STACloud thu thập, sử dụng, lưu trữ và bảo vệ thông tin khi bạn sử dụng website, portal và các dịch vụ của chúng tôi."
      lastUpdated={legalLastUpdated}
      sections={privacySections}
    />
  );
}
