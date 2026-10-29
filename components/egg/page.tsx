'use client';

import { EggIcon } from './egg-icon';

import React, { useMemo, useState } from 'react';
import { SiteFooter } from '@/components/shared/site-footer';
import { Reveal } from '@/components/ui/reveal';
import { sitePath } from '@/lib/site-path';
import { homeConfig } from '@/components/home/content';
import { SubpageEffects } from '@/components/visual/subpage-effects';
import { CyberBackgroundDecor } from '@/components/visual/cyber-background-decor';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileDock } from '@/components/ui/mobile-dock';
import { eggGroups, eggTotals, type EggGroup, type EggItem } from './content';

type EggFilter = 'all' | EggGroup['title'];

const filterOptions: Array<{ id: EggFilter; label: string }> = [
  { id: 'all', label: 'Tất cả' },
  ...eggGroups.map((group) => ({ id: group.title, label: group.title })),
];

const accentClasses: Record<
  EggGroup['accent'],
  {
    border: string;
    band: string;
    dot: string;
    pill: string;
  }
> = {
  blue: {
    border: 'border-blue-300/30',
    band: 'from-blue-400/20 via-cyan-400/10',
    dot: 'bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]',
    pill: 'border-blue-300/30 bg-blue-400/15 text-blue-100',
  },
  cyan: {
    border: 'border-cyan-300/35',
    band: 'from-cyan-400/20 via-sky-400/10',
    dot: 'bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]',
    pill: 'border-cyan-300/30 bg-cyan-400/15 text-cyan-100',
  },
  slate: {
    border: 'border-slate-300/25',
    band: 'from-white/15 via-cyan-300/10',
    dot: 'bg-slate-300 shadow-[0_0_14px_rgba(203,213,225,0.6)]',
    pill: 'border-slate-300/25 bg-slate-300/15 text-slate-100',
  },
  teal: {
    border: 'border-sky-300/30',
    band: 'from-sky-400/20 via-blue-400/10',
    dot: 'bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]',
    pill: 'border-sky-300/30 bg-sky-400/15 text-sky-100',
  },
};

function countItem(item: EggItem) {
  return item.variants?.length ?? 1;
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase();
}

function filterItem(item: EggItem, query: string): EggItem | null {
  if (!query) return item;
  const nameMatches = item.name.toLowerCase().includes(query);
  if (!item.variants?.length) return nameMatches ? item : null;
  if (nameMatches) return item;
  const variants = item.variants.filter((variant) => variant.toLowerCase().includes(query));
  return variants.length ? { ...item, variants } : null;
}

function Header({ onOpenDrawer }: { onOpenDrawer: () => void }) {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-300/30 bg-[#05182e]/90 px-4 py-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-6 cyber-cut-sm">
        <a href={sitePath('/')} className="group flex items-center gap-3">
          <img
            src={sitePath('/picture/logoSTACloud-204.webp')}
            srcSet={`${sitePath('/picture/logoSTACloud-204.webp')} 204w, ${sitePath('/picture/logoSTACloud-408.webp')} 408w`}
            sizes="(min-width: 640px) 140px, 116px"
            width={204}
            height={70}
            decoding="async"
            alt="STACloud"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] transition group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
          />
          <span className="hidden text-[11px] font-semibold text-cyan-300/90 sm:block border-l border-cyan-300/30 pl-3">
            Runtime & Template Engine Catalog
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
          onClick={onOpenDrawer}
          aria-label="Mở menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/15 text-cyan-200 transition hover:bg-cyan-400/25 lg:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Summary({
  activeFilter,
  query,
  visibleCount,
  onFilterChange,
  onQueryChange,
}: {
  activeFilter: EggFilter;
  query: string;
  visibleCount: number;
  onFilterChange: (filter: EggFilter) => void;
  onQueryChange: (query: string) => void;
}) {
  return (
    <section className="px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Card */}
        <div className="rounded-3xl border border-cyan-300/35 bg-gradient-to-b from-[#051c36]/95 via-[#031528]/95 to-[#020b17]/98 p-6 shadow-[0_25px_80px_rgba(0,180,216,0.25)] backdrop-blur-2xl sm:p-10 cyber-cut-lg cyber-corner-accent">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                STACloud Container & Template Engine
              </div>
              <h1 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Kho Môi Trường Chạy Ứng Dụng & Game Engine
              </h1>
              <p className="max-w-2xl text-xs leading-relaxed text-sky-100 sm:text-base">
                Hệ thống Template sẵn sàng triển khai cho Website Egg (WordPress, PHPweb, Laravel), AI (OpenClaw), ngôn ngữ lập trình, hệ điều hành Linux, Windows Server, Minecraft & Proxy.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="status-pill-cyber">
                  <span className="pulse-dot-green" />
                  <span>Sẵn sàng cài đặt 1-Click</span>
                </span>
                <span className="rounded-full border border-cyan-300/25 bg-black/40 px-3 py-1 font-mono text-xs text-cyan-200">
                  Tự động cấp Port & SSL
                </span>
              </div>
            </Reveal>

            {/* Stats Telemetry */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-cyan-300/25 bg-black/40 p-4 text-center sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-sky-200/70">
                  Mục Khả Dụng
                </p>
                <p className="mt-1 font-mono text-3xl font-black text-white text-gradient-cyan sm:text-4xl">
                  {visibleCount}
                </p>
                <p className="mt-1 text-[11px] text-emerald-300">Đang hoạt động</p>
              </div>

              <div className="rounded-2xl border border-cyan-300/25 bg-black/40 p-4 text-center sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-sky-200/70">
                  Nhóm Chuyên Biệt
                </p>
                <p className="mt-1 font-mono text-3xl font-black text-white text-gradient-cyan sm:text-4xl">
                  {eggTotals.groups}
                </p>
                <p className="mt-1 text-[11px] text-cyan-300">Nhóm môi trường</p>
              </div>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-8 border-t border-cyan-300/15 pt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                Tìm kiếm Môi trường / OS
              </span>
              <div className="relative mt-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => onQueryChange(e.target.value)}
                  placeholder="Nhập OpenClaw, Ubuntu, Paper, Node.js..."
                  className="w-full rounded-xl border border-cyan-300/25 bg-black/50 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => onQueryChange('')}
                    className="absolute right-3 top-3 text-xs text-sky-200 hover:text-white"
                  >
                    Xóa
                  </button>
                ) : null}
              </div>
            </label>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                Phân Loại Nhóm
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onFilterChange(option.id)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      activeFilter === option.id
                        ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'border border-cyan-300/20 bg-black/30 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EggItemRow({
  item,
  group,
  accent,
  comingSoon,
}: {
  item: EggItem;
  group: string;
  accent: (typeof accentClasses)[EggGroup['accent']];
  comingSoon?: boolean;
}) {
  if (item.variants?.length) {
    return (
      <div className="egg-item rounded-xl border border-cyan-300/15 bg-black/35 p-3.5 sm:p-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <EggIcon name={item.name} group={group} />
            <p className="text-sm font-bold text-white">{item.name}</p>
          </div>
          <span className={`w-fit rounded-lg border px-2.5 py-0.5 text-[10px] font-bold ${accent.pill}`}>
            {item.variants.length} Bản Phân Phối
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.variants.map((variant) => (
            <span
              key={variant}
              className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1 text-xs font-medium ${
                comingSoon
                  ? 'border-amber-300/25 bg-amber-300/10 text-amber-100'
                  : 'border-cyan-300/15 bg-white/[0.04] text-sky-100'
              }`}
            >
              <EggIcon name={variant} group={group} small />
              {variant}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="egg-item rounded-xl border border-cyan-300/15 bg-black/35 px-4 py-3 flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <EggIcon name={item.name} group={group} />
        <p className="text-sm font-bold text-white">{item.name}</p>
      </div>
      <span className={`w-fit shrink-0 rounded-lg border px-2.5 py-0.5 text-[10px] font-bold ${accent.pill}`}>
        {comingSoon ? 'Coming Soon' : 'Sẵn Sàng'}
      </span>
    </div>
  );
}

function EggCard({ group, index }: { group: EggGroup; index: number }) {
  const accent = accentClasses[group.accent];
  const spanClass = group.wide ? 'md:col-span-2 xl:col-span-3' : '';
  const totalItems = group.items.reduce((sum, item) => sum + countItem(item), 0);

  return (
    <Reveal className={spanClass} delayMs={(index % 4) * 60}>
      <article
        className={`h-full rounded-2xl border ${accent.border} bg-[#051c36]/90 p-5 shadow-xl backdrop-blur-xl sm:p-6 cyber-cut-sm flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-start justify-between gap-4 border-b border-cyan-300/15 pb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`} />
                <h2 className="text-lg font-black text-white sm:text-xl">{group.title}</h2>
              </div>
              <p className="mt-1 text-xs text-sky-200/80">{group.subtitle}</p>
            </div>
            <span className={`shrink-0 rounded-lg border px-2.5 py-1 text-xs font-bold ${accent.pill}`}>
              {group.status ?? `${totalItems} mục`}
            </span>
          </div>

          <div className={group.wide ? 'mt-4 grid gap-2.5 lg:grid-cols-2' : 'mt-4 grid gap-2.5'}>
            {group.items.map((item) => (
              <EggItemRow
                key={`${group.title}-${item.name}`}
                item={item}
                group={group.title}
                accent={accent}
                comingSoon={Boolean(group.status)}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-cyan-300/15 pt-3 flex items-center justify-between text-[11px] font-mono text-sky-200/70">
          <span>STACloud Engine Ready</span>
          <a
            href={homeConfig.panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white transition font-bold"
          >
            Triển Khai &rarr;
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function Catalog({ groups }: { groups: EggGroup[] }) {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-white sm:text-2xl">
              Danh Sách Môi Trường Chi Tiết
            </h2>
            <p className="text-xs text-sky-200/70">
              Mọi gói game server và VPS đều hỗ trợ chọn trực tiếp các môi trường này khi khởi tạo.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-300">{groups.length} Nhóm Khả Dụng</span>
        </div>

        {groups.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {groups.map((group, index) => (
              <EggCard key={group.title} group={group} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-cyan-300/20 bg-black/40 p-8 text-center text-sm text-slate-300">
            Không tìm thấy môi trường hoặc bản phân phối nào khớp với bộ lọc hiện tại.
          </div>
        )}
      </div>
    </section>
  );
}

export function EggPage() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<EggFilter>('all');
  const [query, setQuery] = useState('');

  const visibleGroups = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);

    return eggGroups
      .filter((group) => activeFilter === 'all' || group.title === activeFilter)
      .map((group) => ({
        ...group,
        items: group.items
          .map((item) => filterItem(item, normalizedQuery))
          .filter((item): item is EggItem => Boolean(item)),
      }))
      .filter((group) => group.items.length > 0);
  }, [activeFilter, query]);

  const visibleCount = visibleGroups.reduce(
    (total, group) => total + group.items.reduce((sum, item) => sum + countItem(item), 0),
    0
  );

  return (
    <div className="cosmic-subpage relative min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      <CyberBackgroundDecor />
      <SubpageEffects />

      <Header onOpenDrawer={() => setMobileDrawerOpen(true)} />

      <Summary
        activeFilter={activeFilter}
        query={query}
        visibleCount={visibleCount}
        onFilterChange={setActiveFilter}
        onQueryChange={setQuery}
      />

      <Catalog groups={visibleGroups} />

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
