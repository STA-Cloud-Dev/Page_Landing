import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { LazyParticleCloud } from '@/components/visual/lazy-particle-cloud';
import { homeConfig } from './content';
import { ContactLinks } from '@/components/shared/contact-links';

export function ImmersiveHero() {
  return (
    <section className="immersive-hero" aria-labelledby="hero-title">
      <div className="hero-fine-grid" aria-hidden="true" />
      <div className="immersive-hero-inner">
        <div className="hero-editorial-copy">
          <p className="cosmic-eyebrow"><span /> HẠ TẦNG CHO NHỮNG Ý TƯỞNG LỚN</p>
          <h1 id="hero-title">Từ ý tưởng.<br />Đến <em>không giới hạn.</em></h1>
          <p className="hero-description">Một không gian cho mọi điều bạn xây dựng. Cloud VPS, game server và hosting cộng đồng — kết nối từ Việt Nam đến thế giới.</p>
          <div className="cosmic-actions">
            <a className="cosmic-button cosmic-button-primary" href="#plans">Khám phá hạ tầng <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="cosmic-text-link" href={homeConfig.panelUrl} target="_blank" rel="noopener noreferrer">Mở Control Portal <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <a className="hero-community-link" href="#free-hosting"><span>CHO CỘNG ĐỒNG</span> Khởi đầu miễn phí với Node Test <ArrowUpRight size={14} aria-hidden="true" /></a>
          <ContactLinks />
        </div>
        <div className="hero-sculpture-wrap">
          <div className="hero-core-ring hero-core-ring-one" aria-hidden="true" />
          <div className="hero-core-ring hero-core-ring-two" aria-hidden="true" />
          <LazyParticleCloud />
          <span className="core-label core-label-top" aria-hidden="true">01 / COMPUTE</span>
          <span className="core-label core-label-bottom" aria-hidden="true">02 / CONNECT</span>
        </div>
        <div className="hero-bottom-rail">
          <a href="#free-hosting" className="hero-scroll-cue"><ArrowDown size={17} aria-hidden="true" /> Cuộn để khám phá</a>
          <div className="hero-rail-detail"><span>01 — INFRASTRUCTURE, REIMAGINED</span><span>VIỆT NAM ↗ SINGAPORE</span></div>
        </div>
      </div>
    </section>
  );
}
