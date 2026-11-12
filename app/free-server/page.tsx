import type { Metadata } from 'next';
import './illustrations.css';
import { FreeServerPage } from '@/components/free-server/page';
import { sitePath } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Node Test FREE Hosting & Bảng Giá | STACloud',
  description:
    'NODE TEST 0 Credit / Free Forever và Free DEV, Free Gamming + AI 0 Credit / 5 ngày, gia hạn 0đ; cấu hình và giá Linux Egg, Dev, Game Servers và VPS STACloud.',
  alternates: { canonical: sitePath('/free-server') },
};

export default function FreeServerRoute() {
  return <FreeServerPage />;
}
