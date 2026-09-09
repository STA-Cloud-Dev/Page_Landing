'use client';

import React, { useState } from 'react';
import {
  allServicePlans,
  comprehensiveFaqs,
  heroSignals,
  heroStats,
  heroStatusStrip,
  homeConfig,
} from './content';
import { HeroCyberScene } from '@/components/visual/hero-cyber-scene';
import { SpecCalculator3D } from '@/components/visual/spec-calculator-3d';
import { NetworkRadar3D } from '@/components/visual/network-radar-3d';
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
        pill: 'border-emerald-400/30 bg-emerald-500/15 text-emerald-300',
        label: 'Đang Mở Slot',
      };
    case 'beta':
      return {
        dot: 'bg-sky-400',
        pill: 'border-sky-400/30 bg-sky-500/15 text-sky-200',
        label: 'Beta Miễn Phí',
      };
    case 'warning':
      return {
        dot: 'bg-rose-400',
        pill: 'border-rose-400/30 bg-rose-500/15 text-rose-200',
        label: 'Node Tài Trợ',
      };
    case 'paused':
      return {
        dot: 'bg-amber-400',
        pill: 'border-amber-400/30 bg-amber-500/15 text-amber-200',
        label: 'Tạm Hết Slot',
      };
    case 'preorder':
      return {
        dot: 'bg-cyan-300',
        pill: 'border-cyan-300/30 bg-cyan-400/15 text-cyan-100',
        label: 'Đặt Trước 3 Ngày',
      };
    default:
      return {
        dot: 'bg-cyan-300',
        pill: 'border-cyan-300/30 bg-cyan-400/15 text-cyan-100',
        label: 'Sẵn Sàng',
      };
  }
}

const nodeTestVerificationOptions = [
  'Mời tối thiểu 10 bạn bè tham gia Discord.',
  'Đăng một bài giới thiệu dịch vụ free hosting lên mạng xã hội hoặc diễn đàn.',
  'Nạp tối thiểu 10.000 Credit để vào trải nghiệm ngay.',
] as const;

function NodeTestLaunch() {
  return (
    <section id="free-hosting" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-300/35 bg-gradient-to-br from-[#073b68]/95 via-[#063056]/95 to-[#04233f]/95 shadow-[0_28px_90px_rgba(0,180,216,0.22)]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative border-b border-cyan-200/15 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-400/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
              Node Test 100% Free
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
              Free Host Bot Discord, Web Nhỏ & Project Sinh Viên
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-100 sm:text-base">
              Gói Node Test dành cho thành viên trải nghiệm dịch vụ và triển khai các project nhỏ.
              Mỗi plan cần 9.000 Credit; tài khoản đủ điều kiện được nhận 10.000 Credit để bắt đầu.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-cyan-200/20 bg-black/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">CPU</p>
                <p className="mt-2 text-2xl font-black text-white">75%</p>
              </div>
              <div className="rounded-2xl border border-cyan-200/20 bg-black/25 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">RAM</p>
                <p className="mt-2 text-2xl font-black text-white">2 GB</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-emerald-200/25 bg-emerald-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Giá tạo plan</p>
                <p className="mt-2 text-2xl font-black text-white">9.000 Credit</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Nhận 10.000 Credit</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Xác minh tài khoản mới qua Discord</h3>
            <p className="mt-3 text-sm leading-7 text-sky-100">
              Tạo ticket và chọn <strong className="text-white">Verify Account</strong>. Nếu tài khoản
              ở trạng thái Approval Account, AI sẽ tự động xét duyệt; thời gian xử lý từ 5 phút đến 24 giờ.
            </p>

            <ol className="mt-5 grid gap-3">
              {nodeTestVerificationOptions.map((option, index) => (
                <li key={option} className="flex gap-3 rounded-2xl border border-cyan-200/15 bg-black/20 p-4 text-sm leading-6 text-sky-50">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-300 font-black text-[#03203c]">
                    {index + 1}
                  </span>
                  <span>{option}</span>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-400/10 p-4 text-xs leading-6 text-amber-100 sm:text-sm">
              Không hỗ trợ backup. Hãy tự tải dữ liệu quan trọng về máy. Nếu server sập do lỗi hệ
              thống, Credit của plan được hoàn trả 100%. Vi phạm DDoS, mining, scan port, botnet,
              mã độc hoặc pháp luật sẽ bị khóa vĩnh viễn.
            </div>

            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary mt-5 min-h-12 w-full rounded-xl px-5 py-3 text-sm font-bold sm:w-auto"
            >
              Tạo Ticket & Chọn Verify Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState<'all' | 'community' | 'vps' | 'game' | 'beta'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredPlans = allServicePlans.filter((plan) => {
    if (activePlanTab === 'all') return true;
    if (activePlanTab === 'community') return plan.category === 'community' || plan.category === 'proxy';
    if (activePlanTab === 'vps') return plan.category === 'vps';
    if (activePlanTab === 'game') return plan.category === 'game';
    if (activePlanTab === 'beta') return plan.category === 'beta';
    return true;
  });

  return (
    <div className="relative min-h-screen bg-[#031c34] text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* Ocean Cyber Background Decorators */}
      <div className="cyber-grid-bg" aria-hidden />
      <div className="cyber-lines-bg" aria-hidden />

      {/* --- 1. TOP STICKY OCEAN NAVBAR --- */}
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-300/30 bg-[#063056]/85 px-4 py-3 shadow-[0_10px_40px_rgba(0,119,182,0.35)] backdrop-blur-xl sm:px-6">
          {/* Brand Logo */}
          <a href={sitePath('/')} className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/40 bg-black/60 p-1.5 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition group-hover:border-cyan-200 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] sm:h-12 sm:w-12">
              <img
                src={sitePath('/picture/logoSTACloud.png')}
                alt={homeConfig.logoAlt}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white sm:text-xl group-hover:text-cyan-300 transition">
                STACloud
              </span>
              <span className="hidden text-[11px] font-semibold text-cyan-300/90 sm:block">
                Ocean Cloud & Community Hosting
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-xl border border-cyan-300/20 bg-white/[0.05] p-1 text-xs font-bold text-sky-100 lg:flex lg:gap-2 lg:text-sm">
            <a
              href="#free-hosting"
              className="rounded-lg bg-emerald-400/15 px-3.5 py-1.5 text-emerald-200 transition hover:bg-emerald-400/25 hover:text-white"
            >
              Node Test Free
            </a>
            <a
              href="#plans"
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Bảng Giá
            </a>
            <a
              href="#calculator"
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Tùy Biến (Max 64C / 128G)
            </a>
            <a
              href={sitePath('/egg')}
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Eggs
            </a>
            <a
              href="#openclaw"
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              OpenClaw AI
            </a>
            <a
              href="#network"
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Hạ Tầng Radar
            </a>
            <a
              href="#faq"
              className="rounded-lg px-3.5 py-1.5 transition hover:bg-cyan-400/20 hover:text-white"
            >
              Hỏi Đáp
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary hidden rounded-xl px-4 py-2 text-xs font-bold sm:inline-flex sm:text-sm"
            >
              <span>Mở Control Portal</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={homeConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-xl border border-sky-300/40 bg-sky-500/15 px-3.5 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/30 lg:inline-flex"
            >
              Discord
            </a>

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
        </div>
      </header>

      {/* --- 2. HERO SECTION WITH OCEAN BLUE 3D WEBGL SCENE --- */}
      <section className="relative px-4 pb-14 pt-8 sm:px-6 sm:pb-24 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Left Copy & Actions */}
            <Reveal className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-200 shadow-[0_0_20px_rgba(0,180,216,0.35)] sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                  {homeConfig.tagline}
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-100 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  OpenClaw Beta Free 100%
                </div>
              </div>

              {/* Title & Slogan */}
              <div className="space-y-4">
                <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl tracking-tight">
                  Nền Tảng <span className="text-gradient-cyan">Hạ Tầng Cloud, VPS</span> & Game Server Đỉnh Cao.
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-sky-100 sm:text-lg">
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
                  className="btn-cyber-primary rounded-xl px-6 py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(0,180,216,0.45)]"
                >
                  <span>Truy Cập Game & Cloud Portal</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href={homeConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline rounded-xl px-6 py-3.5 text-sm font-bold"
                >
                  <span>🎫 Tạo Ticket Discord</span>
                </a>
              </div>

              {/* Quick Group Chat Banner */}
              <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-[#073b68] to-[#04284d] p-4 sm:p-5 shadow-xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                      Cộng Đồng Hỗ Trợ 24/7
                    </p>
                    <p className="mt-0.5 text-xs text-sky-100 sm:text-sm">
                      Hỏi nhanh, tư vấn cấu hình trước khi tạo ticket trên Discord.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={homeConfig.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-cyan-400/30"
                    >
                      Nhóm Zalo
                    </a>
                    <a
                      href={homeConfig.messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-sky-300/40 bg-sky-400/20 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-sky-400/30"
                    >
                      Nhóm Messenger
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Signal Highlights */}
              <div className="grid gap-2.5 sm:grid-cols-3">
                {heroSignals.map((signal, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-cyan-300/20 bg-[#05294a]/85 p-3 text-xs text-sky-100 backdrop-blur shadow"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right 3D Visual Centerpiece */}
            <Reveal className="relative flex flex-col items-center justify-center">
              <div className="relative h-[380px] w-full rounded-3xl border border-cyan-300/35 bg-gradient-to-b from-[#063866]/90 to-[#03203c]/95 p-2 shadow-[0_25px_75px_rgba(0,119,182,0.45)] backdrop-blur-2xl sm:h-[480px] lg:h-[540px]">
                <HeroCyberScene />

                {/* Floating 3D Stat Counters */}
                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-30 grid grid-cols-2 gap-2 sm:inset-x-6 sm:bottom-6 sm:grid-cols-4">
                  {heroStats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-xl border border-cyan-300/45 bg-[#063056]/[0.97] p-2.5 text-center shadow-[0_12px_28px_rgba(0,12,28,0.46)] backdrop-blur-lg"
                    >
                      <p className="font-mono text-lg font-black text-white sm:text-xl text-gradient-cyan">
                        {st.value}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold text-sky-200 leading-tight">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <NodeTestLaunch />

      {/* --- 3. LIVE STATUS STRIP (3D TILT CARDS) --- */}
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
                  className="rounded-2xl border border-cyan-300/25 bg-[#06335a]/85 p-4 shadow-lg backdrop-blur"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-extrabold text-white">{item.label}</p>
                      <p className="mt-0.5 text-[11px] text-sky-200">{item.detail}</p>
                    </div>
                    <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-cyan-300/15 pt-2">
                    <span className="text-xs font-bold text-cyan-200">{item.value}</span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 4. NODE TEST ALERT MESSAGE --- */}
      <section className="px-4 py-3 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-amber-300/40 bg-amber-500/15 p-4 text-xs leading-relaxed text-amber-100 shadow-md backdrop-blur">
          {homeConfig.testerAlertMessage}
        </div>
      </section>

      {/* --- 5. 3D CLOUD HARDWARE CONFIGURATOR (MAX 64 CORE / 128GB RAM - GIÁ LIÊN HỆ) --- */}
      <section id="calculator" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SpecCalculator3D
            discordUrl={homeConfig.discordUrl}
            zaloUrl={homeConfig.zaloUrl}
            messengerUrl={homeConfig.messengerUrl}
          />
        </div>
      </section>

      {/* --- 6. SERVICE PLANS SHOWCASE WITH TABS --- */}
      <section id="plans" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
              ⚡ Toàn Bộ Bảng Giá & Gói Dịch Vụ
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Chọn Gói Dịch Vụ Phù Hợp Nhu Cầu
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-sky-100 sm:text-base">
              Từ các gói test cộng đồng giá siêu rẻ đến cụm máy chủ VPS OVH Singapore chuyên dụng cho tải nặng.
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActivePlanTab('all')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'all'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/25 bg-[#063056]/70 text-slate-200 hover:border-cyan-300/45'
                }`}
              >
                Tất Cả Gói ({allServicePlans.length})
              </button>
              <button
                onClick={() => setActivePlanTab('community')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'community'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/25 bg-[#063056]/70 text-slate-200 hover:border-cyan-300/45'
                }`}
              >
                Gói Cộng Đồng
              </button>
              <button
                onClick={() => setActivePlanTab('vps')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'vps'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/25 bg-[#063056]/70 text-slate-200 hover:border-cyan-300/45'
                }`}
              >
                VPS OVH Singapore
              </button>
              <button
                onClick={() => setActivePlanTab('game')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'game'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/25 bg-[#063056]/70 text-slate-200 hover:border-cyan-300/45'
                }`}
              >
                Game Server (Minecraft)
              </button>
              <button
                onClick={() => setActivePlanTab('beta')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  activePlanTab === 'beta'
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-cyan-300/25 bg-[#063056]/70 text-slate-200 hover:border-cyan-300/45'
                }`}
              >
                OpenClaw Beta AI
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan) => {
              const badge = getStatusBadge(plan.status);

              return (
                <TiltCard
                  key={plan.id}
                  className="flex flex-col justify-between rounded-3xl border border-cyan-300/30 bg-[#06335a]/90 p-6 shadow-xl backdrop-blur-xl"
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
                    <div className="mt-4 border-b border-cyan-300/15 pb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-white text-gradient-cyan sm:text-3xl">
                          {plan.price}
                        </span>
                        <span className="text-xs text-sky-200">/ {plan.period}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-sky-100">{plan.description}</p>
                    </div>

                    {/* Hardware Specs Checklist */}
                    <div className="mt-4 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                        Cấu Hình Chi Tiết:
                      </p>
                      {plan.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-sky-100">
                          <span className="text-cyan-300">✔</span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Warning / Upsize Info */}
                    {plan.warning ? (
                      <div className="mt-4 rounded-xl border border-rose-400/40 bg-rose-500/15 p-2.5 text-[11px] leading-relaxed text-rose-100">
                        ⚠️ {plan.warning}
                      </div>
                    ) : plan.upsizeNotes ? (
                      <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-2.5 text-[11px] leading-relaxed text-cyan-100">
                        ℹ️ {plan.upsizeNotes}
                      </div>
                    ) : null}
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 border-t border-cyan-300/15 pt-4">
                    <a
                      href={homeConfig.discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-primary w-full rounded-xl py-2.5 text-xs font-bold"
                    >
                      <span>{plan.ctaText}</span>
                    </a>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 7. OPENCLAW BETA SPOTLIGHT & LIVE CYBER TERMINAL --- */}
      <section id="openclaw" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Description */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-100">
                🦞 OpenClaw Free Beta Ecosystem
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Trải Nghiệm OpenClaw AI & Web Miễn Phí.
              </h2>
              <p className="text-sm leading-relaxed text-sky-100 sm:text-base">
                OpenClaw đã mở rộng cửa cho mọi thành viên cộng đồng STACloud! Bạn có thể triển khai
                bot AI, web app hay test workload với độ trễ thấp mà không cần phải tốn chi phí mua
                domain riêng.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-sky-100">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/25 text-cyan-200 font-bold">1</span>
                  <p><strong>Không cần Domain riêng:</strong> Tự động cấp phát URL proxy an toàn qua SSL Cloudflare.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/25 text-cyan-200 font-bold">2</span>
                  <p><strong>Tối ưu hóa AI:</strong> Khuyến nghị chọn cụm Singapore hoặc Việt Nam để kết nối AI ổn định nhất.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/25 text-cyan-200 font-bold">3</span>
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

      {/* --- 8. GLOBAL DATACENTER & LATENCY RADAR --- */}
      <section id="network" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <NetworkRadar3D />
        </div>
      </section>

      {/* --- 9. PTERODACTYL EGGS SHOWCASE PROMO --- */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-[#06345d] via-[#084577] to-[#06345d] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                🥚 Kho Game & App Eggs Tự Phát Triển
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Hỗ Trợ Đầy Đủ Mọi Trò Chơi & Môi Trường Code
              </h3>
              <p className="text-xs text-sky-100 sm:text-sm leading-relaxed">
                Hệ thống Egg tùy biến được STACloud tự phát triển và tối ưu dựa trên nền tảng Pterodactyl,
                hỗ trợ cài đặt 1-click cho Minecraft (Paper, Purpur, Forge, Fabric, Bedrock),
                Node.js, Python Bot, Rust, CS2, Palworld, và nhiều ứng dụng chuyên dụng khác.
              </p>
            </div>

            <a
              href={sitePath('/egg')}
              className="btn-cyber-primary inline-flex shrink-0 rounded-2xl px-6 py-3.5 text-sm font-bold shadow-[0_0_25px_rgba(0,180,216,0.45)]"
            >
              <span>Khám Phá Danh Mục Eggs</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- 10. FAQ ACCORDION --- */}
      <section id="faq" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
              ❓ Câu Hỏi Thường Gặp
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
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
                  className="overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#06335a]/85 backdrop-blur transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 text-left font-semibold text-white sm:p-5 hover:text-cyan-200 transition"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <span className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/15 text-cyan-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-cyan-300/15 px-4 pb-5 pt-3 text-xs leading-relaxed text-sky-100 sm:px-5 sm:text-sm">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 11. FOOTER --- */}
      <SiteFooter />

      {/* --- 12. MOBILE DRAWER & MOBILE BOTTOM DOCK --- */}
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
