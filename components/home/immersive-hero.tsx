import { localizedPath, type Locale } from "@/lib/i18n/config";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LazyParticleCloud } from "@/components/visual/lazy-particle-cloud";
import { homeConfig } from "./content";
import { ContactLinks } from "@/components/shared/contact-links";

export function ImmersiveHero({ locale = "vi" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <section className="immersive-hero" aria-labelledby="hero-title">
      <div className="hero-fine-grid" aria-hidden="true" />
      <div className="immersive-hero-inner">
        <div className="hero-editorial-copy">
          <p className="cosmic-eyebrow">
            <span />{" "}
            {en
              ? "VPS & HOSTING • VIETNAM / SINGAPORE"
              : "VPS & HOSTING • VIỆT NAM / SINGAPORE"}
          </p>
          <h1 id="hero-title">
            STA Cloud.
            <br />
            <em>Hosting & VPS.</em>
          </h1>
          <p className="hero-description">
            {en
              ? "STA Cloud provides Vietnam and Singapore hosting for websites, Discord bots and game servers, and introduces Oracle Cloud VPS/GPU products supplied by ICS. Choose resources that fit your workload."
              : "STA Cloud (STACloud) cung cấp hosting tại Việt Nam, Singapore cho website, bot Discord và game server; đồng thời giới thiệu VPS/GPU Oracle Cloud do ICS cung cấp. Chọn tài nguyên phù hợp với nhu cầu của bạn."}
          </p>
          <div className="cosmic-actions">
            <a
              className="cosmic-button cosmic-button-primary"
              href={localizedPath("/pricing/", locale)}
            >
              {en ? "Explore hosting plans" : "Khám phá hạ tầng"}{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="cosmic-text-link"
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {en ? "Open Control Portal" : "Mở Control Portal"}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a
            className="hero-community-link"
            href={localizedPath("/free/", locale)}
          >
            <span>{en ? "FOR THE COMMUNITY" : "CHO CỘNG ĐỒNG"}</span>{" "}
            {en
              ? "Start with Free Forever hosting"
              : "Khởi đầu miễn phí với hosting FREE"}{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ContactLinks />
        </div>
        <div className="hero-sculpture-wrap">
          <div
            className="hero-core-ring hero-core-ring-one"
            aria-hidden="true"
          />
          <div
            className="hero-core-ring hero-core-ring-two"
            aria-hidden="true"
          />
          <LazyParticleCloud />
          <span className="core-label core-label-top" aria-hidden="true">
            01 / COMPUTE
          </span>
          <span className="core-label core-label-bottom" aria-hidden="true">
            02 / CONNECT
          </span>
        </div>
        <div className="hero-bottom-rail">
          <a href={localizedPath("/free/", locale)} className="hero-scroll-cue">
            <ArrowDown size={17} aria-hidden="true" />{" "}
            {en ? "Scroll to explore" : "Cuộn để khám phá"}
          </a>
          <div className="hero-rail-detail">
            <span>01 — INFRASTRUCTURE, REIMAGINED</span>
            <span>{en ? "VIETNAM ↗ SINGAPORE" : "VIỆT NAM ↗ SINGAPORE"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
