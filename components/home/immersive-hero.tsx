import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ParticleCloud } from '@/components/visual/particle-cloud';
import { homeConfig } from './content';

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
        </div>
        <div className="hero-sculpture-wrap"><ParticleCloud /></div>
        <div className="hero-bottom-rail">
          <a href="#free-hosting" className="hero-scroll-cue"><ArrowDown size={17} aria-hidden="true" /> Cuộn để khám phá</a>
          <div className="hero-rail-detail"><span>01 — INFRASTRUCTURE, REIMAGINED</span><span>VIỆT NAM ↗ SINGAPORE</span></div>
        </div>
      </div>
      <div className="hero-service-rail" aria-label="Dịch vụ STACloud">
        <span>CLOUD VPS</span><span aria-hidden="true">✳</span><span>GAME SERVERS</span><span aria-hidden="true">✳</span><span>COMMUNITY HOSTING</span><span aria-hidden="true">✳</span><span>BUILD. DEPLOY. GROW.</span>
      </div>
    </section>
  );
}
