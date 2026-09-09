import { OpenClawSpotlight } from '@/components/shared/openclaw-spotlight';
import { Reveal } from '@/components/ui/reveal';
import { sitePath } from '@/lib/site-path';

import { BenefitsSection } from '@/components/landing/benefits-section';
import { FooterSection } from '@/components/landing/footer-section';
import { GuideSection } from '@/components/landing/guide-section';
import { HeroSection } from '@/components/landing/hero-section';
import { LocationsSection } from '@/components/landing/locations-section';
import { PlansSection } from '@/components/landing/plans-section';
import { PolicySection } from '@/components/landing/policy-section';
import { siteConfig } from '@/components/landing/content';

export function FreeServerPage() {
  return (
    <main className="min-h-screen pb-10">
      <section className="px-4 pt-6 sm:px-6 sm:pt-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 rounded-lg border border-cyan-300/15 bg-black/70 px-4 py-4 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5 lg:flex-row lg:items-center lg:justify-between">
          <a
            href={sitePath('/')}
            className="interactive-card group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] sm:gap-4 sm:px-4"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-black/60 p-2 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:h-16 sm:w-16">
              <img
                src={sitePath('/picture/logoSTACloud.png')}
                alt="STACloud"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xl font-semibold text-white sm:text-2xl">STACloud</p>
              <p className="max-w-[16rem] text-xs leading-5 text-slate-400 sm:max-w-none sm:text-sm">
                Bảng giá và thông tin dịch vụ cộng đồng
              </p>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <a
              href={sitePath('/egg')}
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] sm:w-auto"
            >
              Eggs
            </a>
            <a
              href="https://portal.stacloud.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto"
            >
              Mở Portal
            </a>
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300/25 bg-blue-300/10 px-4 py-2.5 text-sm font-semibold text-blue-50 transition hover:border-blue-300/45 hover:bg-blue-300/15 sm:w-auto"
            >
              Discord
            </a>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:w-auto"
            >
              Zalo
            </a>
            <a
              href={siteConfig.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card col-span-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] sm:col-span-1 sm:w-auto"
            >
              Messenger
            </a>
          </div>
        </Reveal>
      </section>

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
    </main>
  );
}
