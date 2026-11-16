import type { Metadata } from 'next';
import { SiteShell } from '@/components/shared/site-shell';
import { PricingCatalog } from '@/components/pricing/catalog';
import { siteUrl } from '@/lib/site-seo';

export const metadata: Metadata = { title: 'Bảng giá hosting FREE, Dev, Linux Egg & Game Server | STA Cloud', description: 'Bảng giá dịch vụ STA Cloud: Free DEV, Free Gamming + AI Free Forever, Dev 1–5, Linux Egg và Game Servers. Lọc gói, so sánh CPU, RAM, ổ đĩa và chu kỳ.', alternates: { canonical: `${siteUrl}/pricing/` } };
export default function PricingPage() {
  return <SiteShell><div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12"><h1 className="text-3xl font-bold text-white sm:text-5xl">Bảng giá hosting STA Cloud</h1><p className="mt-5 max-w-3xl text-sm leading-7">Hosting FREE và Dev là dịch vụ riêng của STA Cloud. Giá Credit, tài nguyên, giới hạn và chu kỳ lấy cùng dữ liệu với Portal công bố; kiểm tra slot và điều kiện trước khi đăng ký.</p><PricingCatalog /></div></SiteShell>;
}
