'use client';

import React, { useState } from 'react';
import { OpenClawSpotlight } from '@/components/shared/openclaw-spotlight';
import { Reveal } from '@/components/ui/reveal';
import { sitePath } from '@/lib/site-path';
import { CyberBackgroundDecor } from '@/components/visual/cyber-background-decor';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileDock } from '@/components/ui/mobile-dock';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { FooterSection } from '@/components/landing/footer-section';
import { GuideSection } from '@/components/landing/guide-section';
import { HeroSection } from '@/components/landing/hero-section';
import { LocationsSection } from '@/components/landing/locations-section';
import { PlansSection } from '@/components/landing/plans-section';
import { PolicySection } from '@/components/landing/policy-section';
import { siteConfig } from '@/components/landing/content';
import { homeConfig } from '@/components/home/content';

export function FreeServerPage() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      <CyberBackgroundDecor />

      {/* Top Cyber Navbar */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-300/30 bg-[#05182e]/90 px-4 py-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-6 cyber-cut-sm">
          <a href={sitePath('/')} className="group flex items-center gap-3">
            <img
              src={sitePath('/picture/logoSTACloud.png')}
              alt="STACloud"
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] transition group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
            />
            <span className="hidden text-[11px] font-semibold text-cyan-300/90 sm:block border-l border-cyan-300/30 pl-3">
              Free Server & Community Hosting Board
            </span>
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1.5 text-xs font-bold text-sky-100 lg:flex lg:text-sm">
              <a
                href={sitePath('/')}
                className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
              >
                Trang Chủ
              </a>
              <a
                href={sitePath('/egg')}
                className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
              >
                Templates
              </a>
              <a
                href={siteConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary rounded-xl px-4 py-2 text-xs font-bold"
              >
                Mở Portal
              </a>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-sky-300/40 bg-sky-500/15 px-3.5 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/30"
              >
                Discord
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Mở menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/15 text-cyan-200 transition hover:bg-cyan-400/25 lg:hidden"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Landing Sections */}
      <HeroSection />
      <OpenClawSpotlight
        discordUrl={siteConfig.discordUrl}
        zaloUrl={siteConfig.zaloUrl}
        messengerUrl={siteConfig.messengerUrl}
      />
      <PlansSection />
      <LocationsSection />
      <BenefitsSection />
      <GuideSection />
      <PolicySection />
      <FooterSection />

      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        panelUrl={homeConfig.panelUrl}
        discordUrl={homeConfig.discordUrl}
        zaloUrl={homeConfig.zaloUrl}
        messengerUrl={homeConfig.messengerUrl}
      />

      <MobileDock
        panelUrl={homeConfig.panelUrl}
        discordUrl={homeConfig.discordUrl}
        zaloUrl={homeConfig.zaloUrl}
        messengerUrl={homeConfig.messengerUrl}
      />
    </div>
  );
}
