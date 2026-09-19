'use client';

import { useMemo, useState } from 'react';
import { servicePlans } from './content';
import { Section3DAccent } from '@/components/visual/section-3d-accent';

type ServicePlan = (typeof servicePlans)[number];
type PlanFilter = 'all' | 'free' | 'minecraft' | 'vps' | 'proxy' | 'openclaw' | 'available' | 'paused';

const planFilters: Array<{ id: PlanFilter; label: string }> = [
  { id: 'all', label: 'Tất cả' },
  { id: 'free', label: 'Free' },
  { id: 'minecraft', label: 'Minecraft' },
  { id: 'vps', label: 'VPS' },
  { id: 'proxy', label: 'Proxy' },
  { id: 'openclaw', label: 'OpenClaw' },
  { id: 'available', label: 'Đang mở' },
  { id: 'paused', label: 'Hết slot' },
];

function getPlanBadgeClasses(status: string) {
  if (status === 'paused') {
    return 'border border-blue-300/20 bg-blue-300/10 text-blue-100';
  }

  if (status === 'warning') {
    return 'border border-cyan-300/20 bg-cyan-300/10 text-cyan-100';
  }

  if (status === 'beta') {
    return 'border border-blue-300/20 bg-blue-300/10 text-blue-100';
  }

  if (status === 'preorder') {
    return 'border border-sky-300/20 bg-sky-300/10 text-sky-100';
  }

  return 'border border-cyan-300/20 bg-cyan-300/10 text-cyan-100';
}

function getPlanCardClasses(status: string) {
  const surface =
    status === 'paused'
      ? 'border-blue-300/20 bg-blue-300/[0.05]'
      : status === 'beta'
        ? 'border-cyan-300/20 bg-cyan-300/[0.05]'
        : 'border-white/10 bg-slate-950/70';

  return `${surface} xl:col-span-3`;
}

function matchesFilter(plan: ServicePlan, filter: PlanFilter) {
  if (filter === 'all') {
    return true;
  }

  if (filter === 'free') {
    return plan.name === 'NODE TEST' || plan.name === 'OPENCLAW';
  }

  if (filter === 'minecraft') {
    return plan.name === 'MC SG' || plan.description.toLowerCase().includes('minecraft');
  }

  if (filter === 'vps') {
    return plan.name.includes('XEON') || plan.name.includes('EPYC') || plan.name === 'DEV SG';
  }

  if (filter === 'proxy') {
    return plan.name.includes('PROXY');
  }

  if (filter === 'openclaw') {
    return plan.name === 'OPENCLAW';
  }

  if (filter === 'available') {
    return plan.status !== 'paused';
  }

  return plan.status === 'paused';
}

function formatSpecs(plan: ServicePlan) {
  return plan.specs.slice(0, 4).join(' • ');
}

function PlanFilters({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: PlanFilter;
  onFilterChange: (filter: PlanFilter) => void;
}) {
  return (
    <div className="mt-6 rounded-lg border border-cyan-300/15 bg-slate-950/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Lọc nhanh</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {planFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
              activeFilter === filter.id
                ? 'border-cyan-300/35 bg-cyan-300/15 text-cyan-50'
                : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-cyan-300/25 hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ComparisonTable({ plans }: { plans: ServicePlan[] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-cyan-300/15 bg-slate-950/75">
      <div className="border-b border-cyan-300/10 px-4 py-4 sm:px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
          Bảng so sánh nhanh
        </p>
        <p className="mt-1 text-sm text-slate-400">Dùng bảng này để scan giá, cấu hình và trạng thái trước khi xem card chi tiết.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.035] text-xs uppercase tracking-[0.16em] text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">Gói</th>
              <th className="px-4 py-3 font-semibold">Giá</th>
              <th className="px-4 py-3 font-semibold">Cấu hình</th>
              <th className="px-4 py-3 font-semibold">Trạng thái</th>
              <th className="px-4 py-3 font-semibold">Đăng ký</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-300/10">
            {plans.map((plan) => (
              <tr key={plan.name} className="text-slate-300 transition hover:bg-cyan-300/[0.035]">
                <td className="px-4 py-4">
                  <p className="font-semibold text-white">{plan.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{plan.highlight}</p>
                </td>
                <td className="px-4 py-4 font-semibold text-cyan-100">{plan.price}</td>
                <td className="px-4 py-4 leading-6">{formatSpecs(plan)}</td>
                <td className="px-4 py-4">
                  <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${getPlanBadgeClasses(plan.status)}`}>
                    {plan.statusLabel}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <a
                    href="https://discord.gg/nq8B4JXmnm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:text-white"
                  >
                    Tạo ticket
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PlansSection() {
  const [activeFilter, setActiveFilter] = useState<PlanFilter>('all');
  const filteredPlans = useMemo(
    () => servicePlans.filter((plan) => matchesFilter(plan, activeFilter)),
    [activeFilter]
  );
  return (
    <section id="plans" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Plans</p>
            <h2 className="section-title">
              So sánh gói nhanh hơn bằng bộ lọc, bảng scan và card chi tiết
            </h2>
            <p className="section-copy">
              Người dùng có thể lọc theo Free, Minecraft, VPS, Proxy, OpenClaw hoặc trạng thái slot
              trước khi tạo ticket đăng ký.
            </p>
          </div>
          <Section3DAccent variant="pricing" size="compact" />
        </div>

        <PlanFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {filteredPlans.map((plan) => (
            <div
              key={`scan-${plan.name}`}
              className="status-tile rounded-lg border border-white/10 bg-white/[0.04] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {plan.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{plan.highlight}</p>
                </div>
                <span className={`rounded-lg px-3 py-1 text-[11px] font-semibold ${getPlanBadgeClasses(plan.status)}`}>
                  {plan.statusLabel}
                </span>
              </div>
              <p className="mt-4 text-base font-semibold text-cyan-100">{plan.price}</p>
            </div>
          ))}
        </div>

        {filteredPlans.length ? (
          <ComparisonTable plans={filteredPlans} />
        ) : (
          <div className="mt-8 rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 text-sm text-slate-300">
            Không có gói nào khớp bộ lọc hiện tại.
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {filteredPlans.map((plan) => (
            <article
              key={plan.name}
              className={`status-panel group relative overflow-hidden rounded-lg border p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] transition hover:-translate-y-1 hover:border-cyan-300/25 ${getPlanCardClasses(plan.status)}`}
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${plan.accent} opacity-45 transition group-hover:opacity-70`} />
              <span className="card-3d-badge card-3d-badge--plan" aria-hidden="true">
                <span />
              </span>
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {plan.highlight}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{plan.description}</p>
                  </div>
                  <span className={`rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${getPlanBadgeClasses(plan.status)}`}>
                    {plan.statusLabel}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="status-tile rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Giá</p>
                    <p className="mt-2 text-2xl font-semibold text-cyan-100">{plan.price}</p>
                  </div>
                  <div className="status-tile rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Slot / ghi chú
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{plan.highlight}</p>
                  </div>
                </div>

                {plan.specs.length > 0 ? (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {plan.specs.map((spec) => (
                      <div
                        key={spec}
                        className="status-tile rounded-lg border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-slate-200"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                ) : null}

                {plan.addOns.length > 0 ? (
                  <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                      Tùy chọn nâng cấp
                    </p>
                    <ul className="mt-3 space-y-3">
                      {plan.addOns.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {plan.warnings.length > 0 ? (
                  <div className="rounded-lg border border-blue-300/15 bg-blue-300/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                      Lưu ý quan trọng
                    </p>
                    <ul className="mt-3 space-y-3">
                      {plan.warnings.map((warning) => (
                        <li key={warning} className="flex gap-3 text-sm leading-6 text-slate-200">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-200" />
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <a
                  href="https://discord.gg/nq8B4JXmnm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/35 hover:text-white"
                >
                  Tạo ticket Discord
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
