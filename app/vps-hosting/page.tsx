import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site-seo';
export const metadata: Metadata = { title: 'Trang VPS đã chuyển địa chỉ | STA Cloud', alternates: { canonical: `${siteUrl}/vps/` }, robots: { index: false, follow: true } };
// Static-host fallback. A permanent edge redirect is preferred when available.
export default function LegacyVpsPage() { return <><meta httpEquiv="refresh" content={`0;url=${siteUrl}/vps/`} /><div className="mx-auto max-w-3xl px-4 py-12"><h1 className="text-3xl font-bold text-white">Trang VPS đã chuyển sang /vps/</h1><a className="mt-5 inline-flex min-h-12 items-center text-cyan-200 underline" href={`${siteUrl}/vps/`}>Mở VPS & GPU Oracle ICS</a></div></>; }
