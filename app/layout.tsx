import type { Metadata } from 'next';
import './globals.css';
import { RouteScrollReset } from '@/components/ui/route-scroll-reset';
import { sitePath } from '@/lib/site-path';

const SITE_URL = 'https://stacloud.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STACloud | Cyber Cloud, VPS & Game Hosting Platform',
  description:
    'Hệ sinh thái hạ tầng đám mây STACloud: Cung cấp Portal quản trị game server, VPS OVH Singapore chống DDoS, OpenClaw Beta miễn phí và các gói dịch vụ cộng đồng minh bạch.',
  keywords: [
    'STACloud',
    'community hosting',
    'vps plans',
    'minecraft hosting',
    'free server hosting',
    'pterodactyl panel',
    'openclaw beta',
    'ovh singapore vps',
  ],
  openGraph: {
    title: 'STACloud | Cyber Cloud & VPS Hosting Platform',
    description:
      'Xem giá, cấu hình, slot, OpenClaw Beta, upsize và lưu ý sử dụng của các gói NODE TEST, DEV SG, MC SG, PROXY HK, STA-XEON và STA-AMD-EPYC tại STACloud.',
    url: SITE_URL,
    siteName: 'STACloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STACloud | Cyber Cloud & VPS Hosting Platform',
    description:
      'Khám phá OpenClaw Beta, VPS OVH Singapore, game server và các gói dịch vụ cộng đồng giá tốt nhất.',
  },
  icons: {
    icon: [
      { url: sitePath('/picture/iconSTACloud.ico'), type: 'image/x-icon', sizes: 'any' },
      { url: sitePath('/picture/iconSTACloud.png'), type: 'image/png' },
    ],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body
        className="relative min-h-screen overflow-x-hidden bg-[#031c34] text-slate-100 antialiased"
        suppressHydrationWarning
      >
        <RouteScrollReset />
        <div className="cyber-grid-bg" aria-hidden />
        <div className="cyber-lines-bg" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
