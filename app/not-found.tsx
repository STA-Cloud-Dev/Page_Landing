import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { LazyParticleCloud } from '@/components/visual/lazy-particle-cloud';
import { sitePath } from '@/lib/site-path';
import { homeConfig } from '@/components/home/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Lạc một chút, chưa mất kết nối | STACloud',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="cosmic-not-found">
      <section className="lost-content" aria-labelledby="lost-title">
        <div className="lost-artwork"><span className="lost-numeral" aria-hidden="true">404</span><LazyParticleCloud lost /></div>
        <div className="lost-copy">
          <h1 id="lost-title" className="sr-only">404 — Không tìm thấy trang</h1>
          <p>Cụm máy chủ hoặc trang bạn tìm kiếm đã bị ngắt kết nối khỏi mạng lưới STACloud.</p>
          <div className="cosmic-actions">
            <a className="cosmic-button cosmic-button-primary" href={sitePath('/')}><ArrowLeft size={17} aria-hidden="true" /> Về trang chủ</a>
            <a className="cosmic-text-link" href={homeConfig.discordUrl} target="_blank" rel="noopener noreferrer">Hỗ trợ Discord <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
