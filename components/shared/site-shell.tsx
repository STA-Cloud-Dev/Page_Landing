'use client';

import { useState, type ReactNode } from 'react';
import { homeConfig } from '@/components/home/content';
import { MobileDock } from '@/components/ui/mobile-dock';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { SiteFooter } from './site-footer';
import { ContactLinks } from './contact-links';
import { sitePath } from '@/lib/site-path';
import { CyberBackgroundDecor } from '@/components/visual/cyber-background-decor';
import { LandingDepthEffects } from '@/components/visual/landing-depth-effects';
import { AmbientParticles } from '@/components/visual/ambient-particles';

const navigation = [ ['/', 'Trang chủ'], ['/pricing/', 'Bảng giá'], ['/free-server/', 'Hosting miễn phí'], ['/vps/', 'Oracle ICS'], ['/network/', 'Khu vực'], ['/egg/', 'Kho Egg'] ];

export function SiteShell({ children, home = false }: { children: ReactNode; home?: boolean }) {
  const [open, setOpen] = useState(false);
  return <div className={`${home ? 'cosmic-home' : 'cosmic-subpage'} site-motion relative min-h-screen pt-20 text-sky-100`}>
    <CyberBackgroundDecor />
    <AmbientParticles />
    <header className="landing-header fixed inset-x-0 top-0 z-40 h-20 border-b border-cyan-300/20 bg-[#06243d] px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href={sitePath('/')} aria-label="STA Cloud — Trang chủ"><img src={sitePath('/picture/logoSTACloud-204.webp')} width={204} height={70} alt="STACloud" className="h-10 w-auto sm:h-12" decoding="async" /></a>
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">{navigation.map(([path, label]) => <a key={path} href={sitePath(path)} className="flex min-h-12 items-center rounded-lg px-3 text-sm font-semibold hover:bg-white/10">{label}</a>)}</nav>
        <a href={homeConfig.panelUrl} target="_blank" rel="noopener noreferrer" className="hidden min-h-12 items-center rounded-xl bg-cyan-300 px-4 font-bold text-[#031c34] sm:flex">Mở Portal</a>
        <button type="button" onClick={() => setOpen(true)} aria-label="Mở menu" className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/40 text-xl lg:hidden">☰</button>
      </div>
    </header>
    <div className="landing-depth-content relative z-10">
      <LandingDepthEffects />
      {children}
    </div>
    <SiteFooter />
    <ContactLinks floating />
    <MobileDrawer isOpen={open} onClose={() => setOpen(false)} panelUrl={homeConfig.panelUrl} discordUrl={homeConfig.discordUrl} zaloUrl={homeConfig.zaloUrl} messengerUrl={homeConfig.messengerUrl} />
    <MobileDock panelUrl={homeConfig.panelUrl} discordUrl={homeConfig.discordUrl} zaloUrl={homeConfig.zaloUrl} messengerUrl={homeConfig.messengerUrl} />
  </div>;
}
