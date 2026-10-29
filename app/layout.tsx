import type { Metadata } from 'next';
import './globals.css';
import './cosmic.css';
import localFont from 'next/font/local';
import { RouteScrollReset } from '@/components/ui/route-scroll-reset';
import { VisualPerformance } from '@/components/visual/visual-performance';
import { sitePath } from '@/lib/site-path';

const SITE_URL = 'https://stacloud.eu.cc';

const cosmicFont = localFont({
  src: [
    { path: '../public/fonts/be-vietnam-pro-regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/be-vietnam-pro-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-cosmic',
  display: 'swap',
});

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
    'stacloud game panel',
    'stacloud cloud hosting',
    'openclaw beta',
    'ovh singapore vps',
  ],
  openGraph: {
    title: 'STACloud | Cyber Cloud & VPS Hosting Platform',
    description:
      'Xem giá, cấu hình, slot, OpenClaw Beta, upsize và lưu ý sử dụng của các gói NODE TEST, Dev 1–3, Game Servers 1–2, PROXY HK, STA-XEON và STA-AMD-EPYC tại STACloud.',
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
    apple: [{ url: sitePath('/picture/iconSTACloud.png') }],
    icon: [
      { url: sitePath('/picture/iconSTACloud.png'), type: 'image/png', sizes: '500x500' },
      { url: sitePath('/favicon.ico'), type: 'image/x-icon', sizes: 'any' },
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
    <html lang="vi" className={`dark scroll-smooth ${cosmicFont.variable}`}>
      <body
        className="relative min-h-screen overflow-x-hidden bg-[#031c34] text-slate-100 antialiased"
        suppressHydrationWarning
      >
        <RouteScrollReset />
        <VisualPerformance />
        <div className="cyber-grid-bg" aria-hidden />
        <div className="cyber-lines-bg" aria-hidden />
        <main id="main-content" className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
