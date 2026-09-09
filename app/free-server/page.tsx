import type { Metadata } from 'next';
import { FreeServerPage } from '@/components/free-server/page';
import { sitePath } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Node Test Free Hosting & Bảng Giá | STACloud',
  description:
    'Đăng ký Node Test 100% free cho bot Discord, web nhỏ và project sinh viên; xem cấu hình, Credit, điều khoản và toàn bộ bảng giá STACloud.',
  alternates: { canonical: sitePath('/free-server') },
};

export default function FreeServerRoute() {
  return <FreeServerPage />;
}
