'use client';

import React, { useState } from 'react';
import {
  allServicePlans,
  comprehensiveFaqs,
  heroSignals,
  heroStats,
  heroStatusStrip,
  homeConfig,
  homeBenefits,
  homeQuickSteps,
} from './content';
import { CyberBackgroundDecor } from '@/components/visual/cyber-background-decor';
import { CloudConsoleDisplay } from '@/components/visual/cloud-console-display';
import { LazyNetworkMap } from '@/components/visual/lazy-network-map';
import { TiltCard } from '@/components/ui/tilt-card';
import { CyberTerminal } from '@/components/ui/cyber-terminal';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileDock } from '@/components/ui/mobile-dock';
import { SiteFooter } from '@/components/shared/site-footer';
import { Reveal } from '@/components/ui/reveal';
import { sitePath } from '@/lib/site-path';

function getStatusBadge(status: string) {
  switch (status) {
    case 'active':
      return {
        dot: 'bg-emerald-400',
        pill: 'border-emerald-400/40 bg-emerald-500/20 text-emerald-300',
        label: 'Đang Mở Slot',
      };
    case 'beta':
      return {
        dot: 'bg-sky-400',
        pill: 'border-sky-400/40 bg-sky-500/20 text-sky-200',
        label: 'Beta Miễn Phí',
      };
    case 'warning':
      return {
        dot: 'bg-rose-400',
        pill: 'border-rose-400/40 bg-rose-500/20 text-rose-200',
        label: 'Node Tài Trợ',
      };
    case 'paused':
      return {
        dot: 'bg-amber-400',
        pill: 'border-amber-400/40 bg-amber-500/20 text-amber-200',
        label: 'Tạm Hết Slot',
      };
    case 'preorder':
      return {
        dot: 'bg-cyan-300',
        pill: 'border-cyan-300/40 bg-cyan-400/20 text-cyan-100',
        label: 'Đặt Trước 3 Ngày',
      };
    default:
      return {
        dot: 'bg-cyan-300',
        pill: 'border-cyan-300/40 bg-cyan-400/20 text-cyan-100',
        label: 'Sẵn Sàng',
      };
  }
}

function NodeTestLaunch() {
  return (
    <section id="free-hosting" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-400/45 bg-gradient-to-br from-[#063b64]/90 via-[#042a4a]/90 to-[#02182c]/95 shadow-[0_25px_80px_rgba(16,185,129,0.22)] cyber-cut-lg cyber-corner-accent glass-shine">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative border-b border-cyan-200/20 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-400/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)] animate-pulse" />
              Node Test 100% Free Forever
            </div>
            <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-4xl">
              Free Host Bot Discord, Web Nhỏ & Project Sinh Viên
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-sky-100 sm:text-base">
              Gói tài trợ cộng đồng miễn phí trọn đời cho các bạn học sinh, sinh viên lập trình bot Discord, backend nhẹ và thử nghiệm web không tốn một đồng chi phí.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-cyan-300/30 bg-[#072a4e]/70 p-4 text-center sm:text-left backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">CPU Compute</p>
                <p className="mt-2 font-mono text-2xl font-black text-white text-gradient-cyan">75%</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/30 bg-[#072a4e]/70 p-4 text-center sm:text-left backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Bộ Nhớ RAM</p>
                <p className="mt-2 font-mono text-2xl font-black text-white text-gradient-cyan">2 GB</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-emerald-300/40 bg-emerald-400/15 p-4 text-center sm:col-span-1 sm:text-left backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">Thời hạn</p>
                <p className="mt-2 font-mono text-lg font-black text-white sm:text-2xl">Free Forever</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 bg-[#031b33]/60">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              0 Credit / Mỗi Lần Tạo Plan
            </p>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">NODE TEST đang mở slot</h3>
            <p className="mt-3 text-xs leading-relaxed text-sky-100 sm:text-sm">
              Tạo ticket tại kênh Discord chính thức để nhận slot ngay. Lưu ý: Gói miễn phí không hỗ trợ backup tự động; hãy chủ động tải bản sao dữ liệu quan trọng về thiết bị cá nhân.
            </p>

            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary mt-6 min-h-12 w-full rounded-xl px-5 py-3 text-center text-xs font-bold sm:text-sm"
            >
              <span>🎫 Tạo Ticket Đăng Ký NODE TEST Ngay</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState<'all' | 'community' | 'linux' | 'dev' | 'vps' | 'game' | 'beta'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredPlans = allServicePlans.filter((plan) => {
    if (activePlanTab === 'all') return true;
    if (activePlanTab === 'linux') return plan.category === 'linux';
    if (activePlanTab === 'dev') return plan.name.startsWith('Dev ');
    if (activePlanTab === 'community') return plan.category === 'community' || plan.category === 'proxy' || plan.category === 'linux';
    if (activePlanTab === 'vps') return plan.category === 'vps';
    if (activePlanTab === 'game') return plan.category === 'game';
    if (activePlanTab === 'beta') return plan.category === 'beta';
    return true;
  });

  return (
    <div className="desktop-readable relative min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* Luminous Cyber Background Layers & Ambient Glow Orbs */}
      <CyberBackgroundDecor />

      {/* --- 1. TOP STICKY FROSTED CYBER NAVBAR --- */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-300/40 bg-[#06294d]/85 px-4 py-2.5 shadow-[0_12px_45px_rgba(0,119,182,0.25)] backdrop-blur-xl sm:px-6 cyber-cut-sm">
          {/* Brand Logo */}
          <a href={sitePath('/')} className="flex items-center gap-3 group">
            <img
              src={sitePath('/picture/logoSTACloud-204.webp')}
              srcSet={`${sitePath('/picture/logoSTACloud-204.webp')} 204w, ${sitePath('/picture/logoSTACloud-408.webp')} 408w`}
              sizes="(min-width: 640px) 140px, 116px"
              width={204}
              height={70}
              decoding="async"
              alt={homeConfig.logoAlt}
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] transition group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.65)]"
            />
            <span className="hidden text-xs font-semibold text-cyan-300 2xl:block border-l border-cyan-300/30 pl-3">
              Cloud VPS & Game Hosting Platform
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-xl border border-cyan-300/25 bg-[#05213f]/60 p-1 text-xs font-bold text-sky-100 lg:flex lg:gap-1.5 lg:text-sm 2xl:text-[15px] whitespace-nowrap">
            <a
              href="#free-hosting"
              className="rounded-lg bg-emerald-400/20 px-3 py-1.5 text-emerald-200 transition hover:bg-emerald-400/30 hover:text-white"
            >
              Node Test Free
            </a>
            <a
              href="#plans"
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/25 hover:text-white"
            >
              Bảng Giá
            </a>
            <a
              href="#benefits"
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/25 hover:text-white"
            >
              Ưu Điểm
            </a>
            <a
              href={sitePath('/egg')}
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/25 hover:text-white"
            >
              Templates
            </a>
            <a
              href="#network"
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/25 hover:text-white"
            >
              Bản Đồ Hạ Tầng
            </a>
            <a
              href="#faq"
              className="rounded-lg px-3 py-1.5 transition hover:bg-cyan-400/25 hover:text-white"
            >
              Hỏi Đáp
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2">
            <div className="hidden 2xl:flex items-center mr-2">
              <span className="status-pill-cyber">
                <span className="pulse-dot-green" />
                <span className="text-[11px] font-bold">Hạ tầng Online</span>
              </span>
            </div>

            <a
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary hidden rounded-xl px-4 py-2 text-xs font-bold sm:inline-flex sm:text-sm"
            >
              <span>Mở Control Portal</span>
              <svg className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-xl border border-sky-300/40 bg-sky-500/20 px-3.5 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/35 lg:inline-flex"
            >
              Discord
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Mở menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/20 text-cyan-200 transition hover:bg-cyan-400/30 lg:hidden"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* --- 2. HERO SECTION: GAME SERVER & CLOUD PLATFORM --- */}
      <section className="relative px-4 pb-10 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-12">
            {/* Left Copy & Actions */}
            <Reveal className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/45 bg-cyan-400/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-200 shadow-[0_0_20px_rgba(0,180,216,0.3)] sm:text-xs xl:text-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                  {homeConfig.tagline}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/45 bg-sky-400/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-100 sm:text-xs xl:text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  OpenClaw Beta Free 100%
                </div>
              </div>

              {/* Title & Slogan */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                  Nền Tảng <span className="text-gradient-cyan">Hạ Tầng Cloud VPS</span> & Game Server Đỉnh Cao.
                </h1>
                <p className="max-w-2xl text-xs sm:text-base leading-relaxed text-sky-100 sm:leading-7 xl:max-w-3xl xl:text-lg xl:leading-8">
                  Hạ tầng điện toán đám mây thế hệ mới tại OVH Singapore với khả năng chống DDoS đa tầng.
                  Tùy chỉnh cấu hình linh hoạt lên tới 64 vCore & 128 GB RAM, bảng giá minh bạch và hỗ trợ 24/7.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={homeConfig.panelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-primary rounded-xl px-6 py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(0,180,216,0.4)] text-center"
                >
                  <span>Truy Cập Game & Cloud Portal</span>
                  <svg className="h-4 w-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href={homeConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline rounded-xl px-6 py-3.5 text-sm font-bold text-center"
                >
                  <span>🎫 Tạo Ticket Discord</span>
                </a>
              </div>

              {/* Quick Group Chat Banner */}
              <div className="glass-card-bright rounded-2xl p-4 sm:p-5 shadow-xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                      Cộng Đồng Hỗ Trợ 24/7
                    </p>
                    <p className="mt-0.5 text-xs text-sky-100 sm:text-sm xl:text-base">
                      Hỏi nhanh, tư vấn cấu hình trước khi tạo ticket trên Discord.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={homeConfig.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-cyan-300/40 bg-cyan-400/25 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    >
                      Nhóm Zalo
                    </a>
                    <a
                      href={homeConfig.messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-sky-300/40 bg-sky-400/25 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-sky-400/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    >
                      Nhóm Messenger
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Signal Highlights */}
              <div className="grid gap-2 sm:grid-cols-3">
                {heroSignals.map((signal, idx) => (
                  <div
                    key={idx}
                    className="glass-card-bright rounded-xl p-3 text-xs text-sky-100 shadow xl:p-4 xl:text-sm"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: Cloud Console Display */}
            <Reveal className="relative flex flex-col items-center justify-center">
              <CloudConsoleDisplay stats={heroStats} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- 3. NODE TEST FREE LAUNCHPAD --- */}
      <NodeTestLaunch />

      {/* --- 4. LIVE STATUS STRIP (6 CLUSTER NODES) --- */}
      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="status-indicator-ping">
                <span className="bg-emerald-400" />
                <span className="bg-emerald-500" />
              </span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                Trạng Thái Tài Nguyên & Node Real-Time
              </h2>
            </div>
            <span className="text-xs text-sky-200">Tự động đồng bộ</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {heroStatusStrip.map((item) => {
              const badge = getStatusBadge(item.status);
              return (
                <TiltCard
                  key={item.label}
                  className="glass-card-bright rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-extrabold text-white">{item.label}</p>
                      <p className="mt-0.5 text-[11px] text-sky-200">{item.detail}</p>
                    </div>
                    <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-cyan-300/20 pt-2">
                    <span className="text-xs font-bold text-cyan-200">{item.value}</span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 5. 4 CORE BENEFITS (ƯU ĐIỂM VƯỢT TRỘI) --- */}
      <section id="benefits" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              💎 Giá Trị Cốt Lõi
            </div>
            <h2 className="text-2xl font-black text-white sm:text-4xl">
              Vì Sao Nên Chọn Hạ Tầng STACloud?
            </h2>
            <p className="text-xs text-sky-100 sm:text-base max-w-2xl mx-auto">
              Hạ tầng điện toán đám mây tối ưu riêng cho game, bot, web app với độ ổn định cao nhất.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeBenefits.map((b, idx) => (
              <div
                key={idx}
                className="glass-card-bright rounded-2xl p-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-sky-100/80">{b.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-cyan-300/15 text-[11px] font-mono text-cyan-300">
                  STACloud Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. NODE TEST WARNING MESSAGE --- */}
      <section className="px-4 py-2 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-amber-300/40 bg-amber-500/20 p-4 text-xs leading-relaxed text-amber-100 shadow-md backdrop-blur">
          {homeConfig.testerAlertMessage}
        </div>
      </section>


      {/* --- 8. SERVICE PLANS SHOWCASE WITH TABS --- */}
      <section id="plans" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
              ⚡ Toàn Bộ Bảng Giá & Gói Dịch Vụ
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
              Chọn Gói Dịch Vụ Phù Hợp Nhu Cầu
            </h2>
            <p className="mx-auto max-w-2xl text-xs text-sky-100 sm:text-base">
              Từ các gói test cộng đồng giá siêu rẻ đến cụm máy chủ VPS OVH Singapore chuyên dụng cho tải nặng.
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setActivePlanTab('all')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'all'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                Tất Cả Gói ({allServicePlans.length})
              </button>
              <button
                type="button"
                onClick={() => setActivePlanTab('community')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'community'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                Gói Cộng Đồng
              </button>
              {(['linux', 'dev'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={activePlanTab === tab}
                  onClick={() => setActivePlanTab(tab)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${activePlanTab === tab
                    ? 'bg-cyan-300 text-black'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:text-white'}`}
                >
                  {tab === 'linux' ? 'Linux Egg • Trả phí' : 'Dev • 28 ngày'}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setActivePlanTab('vps')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'vps'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                VPS OVH Singapore
              </button>
              <button
                type="button"
                onClick={() => setActivePlanTab('game')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'game'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                Game Server (Minecraft)
              </button>
              <button
                type="button"
                onClick={() => setActivePlanTab('beta')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'beta'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/30 bg-[#072a4e]/70 text-slate-200 hover:border-cyan-300/50 hover:text-white'
                }`}
              >
                OpenClaw Beta AI
              </button>
            </div>
          </div>

          {/* Cards Grid with Frosted Glass Styling */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan) => {
              const badge = getStatusBadge(plan.status);

              return (
                <TiltCard
                  key={plan.id}
                  className="glass-card-bright flex flex-col justify-between rounded-3xl p-6 shadow-xl"
                >
                  <div>
                    {/* Header: Title & Status */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className={`inline-block rounded-lg px-2.5 py-0.5 text-[11px] font-bold ${badge.pill}`}>
                          {plan.badge}
                        </span>
                        <h3 className="mt-2 text-xl font-extrabold text-white">{plan.name}</h3>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${badge.pill}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Price Display */}
                    <div className="mt-4 border-b border-cyan-300/20 pb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-white text-gradient-cyan sm:text-3xl">
                          {plan.price}
                        </span>
                        <span className="text-xs text-sky-200">/ {plan.period}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-sky-100">{plan.description}</p>
                    </div>

                    {plan.specs.length > 0 ? (
                      <div className="mt-4 space-y-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                          Cấu Hình Chi Tiết:
                        </p>
                        {plan.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-sky-100">
                            <span className="text-cyan-300 font-bold">✔</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {/* Warning / Upsize Info */}
                    {plan.warning ? (
                      <div className="mt-4 rounded-xl border border-rose-400/45 bg-rose-500/20 p-2.5 text-[11px] leading-relaxed text-rose-100">
                        ⚠️ {plan.warning}
                      </div>
                    ) : plan.upsizeNotes ? (
                      <div className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-400/15 p-2.5 text-[11px] leading-relaxed text-cyan-100">
                        ℹ️ {plan.upsizeNotes}
                      </div>
                    ) : null}
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 border-t border-cyan-300/20 pt-4">
                    <a
                      href={homeConfig.discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-primary w-full rounded-xl py-2.5 text-xs font-bold text-center block"
                    >
                      <span>{plan.ctaText}</span>
                    </a>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Custom Dedicated & Upsize Support Banner */}
          <div className="mt-10 rounded-3xl border border-cyan-300/35 bg-gradient-to-r from-[#072d54]/85 via-[#052342]/90 to-[#041a33]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8 cyber-cut glass-shine">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                  ⚡ Quy Chuẩn Nâng Cấp & Cấu Hình Riêng
                </div>
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  Cần Upsize Tài Nguyên Hoặc Cấu Hình Dedicated Riêng?
                </h3>
                <p className="text-xs text-sky-100 sm:text-sm max-w-3xl leading-relaxed">
                  STACloud hỗ trợ nâng cấp thêm Core/RAM cho các gói tiêu chuẩn và nhận cấp phát cụm máy chủ Dedicated Private Node theo yêu cầu dự án.
                </p>
                <div className="grid gap-2 pt-2 sm:grid-cols-2 text-xs text-sky-100">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-300 font-bold">✔</span>
                    <span><strong>Dev 1–3:</strong> Cấu hình riêng, chu kỳ 28 ngày; nhu cầu nâng cấp liên hệ ticket.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-300 font-bold">✔</span>
                    <span><strong>Game Servers:</strong> Gói trả phí theo chu kỳ 28 ngày.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-300 font-bold">✔</span>
                    <span><strong>Dedicated Xeon / EPYC:</strong> Đặt trước 3 ngày để phân bổ slot tối ưu</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-300 font-bold">✔</span>
                    <span><strong>Private Cluster / IPv4:</strong> Hỗ trợ setup node riêng & IP riêng qua Ticket</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col shrink-0">
                <a
                  href={homeConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-primary rounded-xl px-5 py-3 text-center text-xs font-bold sm:text-sm"
                >
                  <span>🎫 Mở Ticket Tư Vấn Cấu Hình</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={homeConfig.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-outline rounded-xl py-2 text-center text-xs font-bold"
                  >
                    Nhóm Zalo
                  </a>
                  <a
                    href={homeConfig.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-outline rounded-xl py-2 text-center text-xs font-bold"
                  >
                    Messenger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. OPENCLAW BETA SPOTLIGHT & INTERACTIVE TERMINAL --- */}
      <section id="openclaw" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Description */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/45 bg-sky-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-100">
                🦞 OpenClaw Free Beta Ecosystem
              </div>
              <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
                Trải Nghiệm OpenClaw AI & Web Miễn Phí.
              </h2>
              <p className="text-xs sm:text-base leading-relaxed text-sky-100">
                OpenClaw đã mở rộng cửa cho mọi thành viên cộng đồng STACloud! Bạn có thể triển khai
                bot AI, web app hay test workload với độ trễ thấp mà không cần phải tốn chi phí mua
                domain riêng.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-sky-100">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/30 text-cyan-200 font-bold">1</span>
                  <p><strong>Không cần Domain riêng:</strong> Tự động cấp phát URL proxy an toàn qua SSL Cloudflare.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/30 text-cyan-200 font-bold">2</span>
                  <p><strong>Tối ưu hóa AI:</strong> Khuyến nghị chọn cụm Singapore hoặc Việt Nam để kết nối AI ổn định nhất.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/30 text-cyan-200 font-bold">3</span>
                  <p><strong>Cộng đồng hỗ trợ:</strong> Hướng dẫn cài đặt nhanh qua nhóm Zalo, Messenger và Discord Ticket.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={homeConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-primary rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
                >
                  <span>Nhận Key & Slot OpenClaw</span>
                </a>
                <a
                  href={homeConfig.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
                >
                  <span>Hỏi Đáp Tại Zalo</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Cyber Terminal */}
            <div>
              <CyberTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* --- 10. GLOBAL DATACENTER & 6-LOCATION NETWORK MAP (CANADA, EU, SG, VN, TH, HK) --- */}
      <section id="network" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <LazyNetworkMap />
        </div>
      </section>

      {/* --- 11. 3-STEP QUICK REGISTRATION GUIDE --- */}
      <section className="px-4 py-8 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              🚀 Quy Trình Khởi Tạo
            </div>
            <h2 className="text-2xl font-black text-white sm:text-4xl">
              3 Bước Để Bắt Đầu Với STACloud
            </h2>
            <p className="text-xs text-sky-100 sm:text-base max-w-2xl mx-auto">
              Thủ tục đơn giản, cấp phát tự động, nhận server nhanh chóng.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeQuickSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="glass-card-bright rounded-2xl p-6 shadow-xl relative"
              >
                <span className="font-mono text-3xl font-black text-cyan-300/40 absolute top-4 right-5">
                  {stepItem.step}
                </span>
                <span className="inline-block rounded-xl border border-cyan-300/30 bg-cyan-400/20 px-3 py-1 font-mono text-xs font-bold text-cyan-200 mb-3">
                  Bước {stepItem.step}
                </span>
                <h3 className="text-lg font-bold text-white">{stepItem.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sky-100/80">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 12. STACLOUD TEMPLATES SHOWCASE PROMO --- */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/40 bg-gradient-to-r from-[#073059]/90 via-[#0a4175]/90 to-[#073059]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl cyber-cut-lg cyber-corner-accent glass-shine">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                🥚 Kho Môi Trường Ứng Dụng & Game Engine STACloud
              </div>
              <h3 className="text-xl font-bold text-white sm:text-3xl">
                Hỗ Trợ Toàn Diện Mọi Trò Chơi & Môi Trường Runtime Code
              </h3>
              <p className="text-xs text-sky-100 sm:text-sm leading-relaxed">
                Hệ thống Template tùy biến được STACloud tự phát triển và tối ưu độc quyền trên nền tảng STACloud Container Engine,
                hỗ trợ triển khai 1-click cho Minecraft (Paper, Purpur, Forge, Fabric, Bedrock),
                Node.js, Python Bot, Rust, CS2, Palworld, Linux OS và nhiều môi trường chuyên biệt khác.
              </p>
            </div>

            <a
              href={sitePath('/egg')}
              className="btn-cyber-primary inline-flex shrink-0 rounded-2xl px-6 py-3.5 text-sm font-bold shadow-[0_0_25px_rgba(0,180,216,0.35)]"
            >
              <span>Khám Phá Danh Mục Templates</span>
              <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- 13. FAQ ACCORDION --- */}
      <section id="faq" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              ❓ Câu Hỏi Thường Gặp
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
              Giải Đáp Thắc Mắc Về Dịch Vụ
            </h2>
            <p className="text-xs text-sky-200 sm:text-sm">
              Những thông tin quan trọng bạn cần nắm rõ trước khi bắt đầu sử dụng.
            </p>
          </div>

          <div className="space-y-3">
            {comprehensiveFaqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="glass-card-bright overflow-hidden rounded-2xl transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 text-left font-semibold text-white sm:p-5 hover:text-cyan-200 transition"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <span className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/20 text-cyan-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-cyan-300/20 px-4 pb-5 pt-3 text-xs leading-relaxed text-sky-100 sm:px-5 sm:text-sm">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 14. FOOTER --- */}
      <SiteFooter />

      {/* --- 15. MOBILE DRAWER & MOBILE BOTTOM DOCK --- */}
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
