'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/ui/reveal';
import { SiteFooter } from '@/components/shared/site-footer';
import { homeConfig } from '@/components/home/content';
import { sitePath } from '@/lib/site-path';
import { CyberBackgroundDecor } from '@/components/visual/cyber-background-decor';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileDock } from '@/components/ui/mobile-dock';
import type { LegalSection } from './legal-content';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

function getSectionId(index: number) {
  return `muc-${index + 1}`;
}

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      <CyberBackgroundDecor />

      {/* Top Sticky Cyber Navbar */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-300/30 bg-[#05182e]/90 px-4 py-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-6 cyber-cut-sm">
          <a href={sitePath('/')} className="group flex items-center gap-3">
            <img
              src={sitePath('/picture/logoSTACloud.png')}
              alt="STACloud"
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] transition group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
            />
            <span className="hidden text-[11px] font-semibold text-cyan-300/90 sm:block border-l border-cyan-300/30 pl-3">
              Trung tâm chính sách & Pháp lý
            </span>
          </a>

          <nav className="hidden items-center gap-1.5 text-xs font-bold text-sky-100 lg:flex lg:text-sm">
            <a
              href={sitePath('/')}
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Trang Chủ
            </a>
            <a
              href={sitePath('/#plans')}
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Bảng Giá
            </a>
            <a
              href={sitePath('/free-server')}
              className="rounded-lg bg-emerald-400/15 px-3 py-1.5 text-emerald-200 transition hover:bg-emerald-400/25 hover:text-white"
            >
              Node Test Free
            </a>
            <a
              href={sitePath('/egg')}
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Templates
            </a>
            <a
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary rounded-xl px-4 py-2 text-xs font-bold sm:inline-flex"
            >
              Mở Portal
            </a>
            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-sky-300/40 bg-sky-500/15 px-3.5 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/30"
            >
              Discord
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
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
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto mt-6 max-w-7xl px-4 sm:px-6 sm:mt-10">
        <div className="overflow-hidden rounded-3xl border border-cyan-300/35 bg-gradient-to-b from-[#051c36]/95 via-[#031528]/95 to-[#020b17]/98 p-6 shadow-[0_25px_80px_rgba(0,180,216,0.25)] backdrop-blur-2xl sm:p-10 cyber-cut-lg cyber-corner-accent">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
            <Reveal className="min-w-0 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                {eyebrow}
              </div>
              <h1 className="max-w-4xl break-words text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-xs sm:text-base leading-relaxed text-sky-100">
                {intro}
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="rounded-xl border border-cyan-300/20 bg-black/40 px-3.5 py-1.5 font-mono text-xs text-cyan-200">
                  Cập nhật: <strong className="text-white">{lastUpdated}</strong>
                </span>
                <span className="rounded-xl border border-cyan-300/20 bg-black/40 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
                  {sections.length} mục điều khoản
                </span>
              </div>
            </Reveal>

            {/* Compliance Badge Container (Replaced 3D) */}
            <Reveal delayMs={100}>
              <div className="rounded-2xl border border-cyan-300/30 bg-[#062444]/80 p-5 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 border-b border-cyan-300/15 pb-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs font-bold text-cyan-200 uppercase">
                    STACloud Policy Center
                  </span>
                </div>
                <div className="mt-4 space-y-3 font-mono text-xs text-sky-100">
                  <div className="flex items-center justify-between border-b border-cyan-300/10 py-1">
                    <span className="text-sky-200/70">Hiệu lực:</span>
                    <strong className="text-emerald-300">Áp dụng toàn hệ thống</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-cyan-300/10 py-1">
                    <span className="text-sky-200/70">Bảo mật:</span>
                    <strong className="text-white">Bảo toàn dữ liệu</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sky-200/70">Hỗ trợ 24/7:</span>
                    <strong className="text-cyan-300">Discord Ticket</strong>
                  </div>
                </div>
                <a
                  href={homeConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-primary mt-4 block w-full rounded-xl py-2 text-center text-xs font-bold"
                >
                  Tạo Ticket Hỏi Đáp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar */}
      <div className="mx-auto mt-8 grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 sm:mt-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
        {/* Table of Contents Sticky Sidebar */}
        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-cyan-300/25 bg-[#051c36]/90 p-4 shadow-xl backdrop-blur-xl cyber-cut-sm">
            <p className="px-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
              Mục lục văn bản
            </p>
            <nav className="mt-3 max-h-[65vh] space-y-1 overflow-y-auto pr-1">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#${getSectionId(index)}`}
                  className="flex gap-2.5 rounded-xl px-2.5 py-2 text-xs leading-5 text-sky-100/80 transition hover:bg-cyan-400/15 hover:text-white"
                >
                  <span className="font-mono font-bold text-cyan-300 shrink-0">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="truncate">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Legal Articles Section */}
        <section className="grid min-w-0 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delayMs={(index % 5) * 45}>
              <article
                id={getSectionId(index)}
                className="scroll-mt-28 rounded-2xl border border-cyan-300/25 bg-[#051c36]/90 p-5 shadow-xl backdrop-blur-xl sm:p-7 cyber-cut-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-400/15 font-mono text-sm font-black text-cyan-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-black leading-snug text-white sm:text-xl">
                      {section.title}
                    </h2>
                    {section.paragraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="mt-3 text-xs leading-relaxed text-sky-100/85 sm:text-sm">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="mt-4 grid gap-2.5">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 text-xs leading-relaxed text-sky-100/85 sm:text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="mt-5 border-l-2 border-cyan-300/30 pl-4">
                        <h3 className="text-sm font-bold text-cyan-200 sm:text-base">
                          {subsection.title}
                        </h3>
                        {subsection.paragraphs?.map((paragraph, subPIdx) => (
                          <p key={subPIdx} className="mt-2 text-xs leading-relaxed text-sky-100/80 sm:text-sm">
                            {paragraph}
                          </p>
                        ))}
                        {subsection.bullets ? (
                          <ul className="mt-3 grid gap-2">
                            {subsection.bullets.map((bullet, subBIdx) => (
                              <li key={subBIdx} className="flex gap-2.5 text-xs leading-relaxed text-sky-100/80 sm:text-sm">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </section>
      </div>

      <SiteFooter />

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
