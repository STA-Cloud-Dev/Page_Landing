import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ParticleCloud } from '@/components/visual/particle-cloud';
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
      <header className="lost-header">
        <a href={sitePath('/')} aria-label="STACloud — Trang chủ"><img src={sitePath('/picture/logoSTACloud-204.webp')} width={204} height={70} alt="STACloud" /></a>
        <span>EXPLORING THE CLOUD / 404</span>
      </header>
      <section className="lost-content" aria-labelledby="lost-title">
        <div className="lost-artwork"><span className="lost-numeral" aria-hidden="true">404</span><ParticleCloud lost /></div>
        <div className="lost-copy">
          <p className="cosmic-eyebrow"><span /> NGOÀI VÙNG KẾT NỐI</p>
          <h1 id="lost-title">Lạc một chút.<br /><em>Chưa mất kết nối.</em></h1>
          <p>Trang bạn tìm có thể đã chuyển đến một tọa độ khác hoặc không còn tồn tại. Hãy trở về để tiếp tục hành trình.</p>
          <div className="cosmic-actions">
            <a className="cosmic-button cosmic-button-primary" href={sitePath('/')}><ArrowLeft size={17} aria-hidden="true" /> Về trang chủ</a>
            <a className="cosmic-text-link" href={homeConfig.discordUrl} target="_blank" rel="noopener noreferrer">Liên hệ hỗ trợ <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <footer className="lost-footer"><span>STACloud / Không gian cho những điều bạn xây dựng.</span><a href={sitePath('/#plans')}>Khám phá dịch vụ ↗</a></footer>
    </div>
  );
}
