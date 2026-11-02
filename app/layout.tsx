import type { Metadata } from 'next';
import './globals.css';
import './cosmic.css';
import localFont from 'next/font/local';
import { RouteScrollReset } from '@/components/ui/route-scroll-reset';
import { VisualPerformance } from '@/components/visual/visual-performance';
import { sitePath } from '@/lib/site-path';
import { siteUrl, siteName, siteTitle, siteDescription, siteImage } from '@/lib/site-seo';

const cosmicFont = localFont({
  src: [
    { path: '../public/fonts/be-vietnam-pro-regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/be-vietnam-pro-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-cosmic',
  // On slow connections keep the metrics-adjusted fallback for this visit,
  // rather than repainting the LCP heading when the brand font arrives late.
  display: 'optional',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'vi_VN',
    images: [siteImage],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: [siteImage.url],
  },
  icons: {
    apple: [{ url: sitePath('/picture/iconSTACloud.png') }],
    icon: [
      { url: sitePath('/picture/iconSTACloud.png'), type: 'image/png', sizes: '500x500' },
      { url: sitePath('/favicon.ico'), type: 'image/x-icon', sizes: 'any' },
    ],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
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
