import type { Metadata } from 'next';
import { SiteFooter } from '@/components/shared/site-footer';
import { SubpageEffects } from '@/components/visual/subpage-effects';
import { sitePath } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Lịch sử hình thành | STACloud',
  description: 'Hành trình thương hiệu từ TACPVN (2018–2019), VietNodes (2019–2023) đến STA Cloud (2023–nay).',
  alternates: { canonical: sitePath('/history/') },
};

const milestones = [
  { period: '2018 — 2019', name: 'TACPVN', label: 'Khởi đầu', number: '01' },
  { period: '2019 — 2023', name: 'VietNodes', label: 'Chặng đường tiếp nối', number: '02' },
  { period: '2023 — Nay', name: 'STA Cloud', label: 'Thương hiệu hiện tại', number: '03' },
] as const;

export default function HistoryPage() {
  return (
    <div className="cosmic-subpage relative min-h-screen text-slate-100">
      <SubpageEffects />
      <header className="relative z-10 px-4 pt-5 sm:px-6">
        <nav aria-label="Điều hướng lịch sử" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-300/25 bg-[#06335a]/80 px-5 py-3">
          <a href={sitePath('/')} className="inline-flex min-h-11 items-center text-lg font-bold text-white">STACloud<span className="ml-2 text-cyan-300" aria-hidden="true">↗</span></a>
          <a href={sitePath('/free-server/#plans')} className="inline-flex min-h-11 items-center text-sm font-semibold text-sky-100 transition hover:text-cyan-200">Khám phá dịch vụ →</a>
        </nav>
      </header>

      <main className="relative z-10 px-4 py-16 sm:px-6 sm:py-24">
        <section className="mx-auto max-w-6xl" aria-labelledby="history-title">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Hành trình từ 2018</p>
            <h1 id="history-title" className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">Ba dấu mốc.<br /><span className="text-sky-300">Một hành trình.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-sky-100/90">Từ TACPVN, qua VietNodes đến STA Cloud hôm nay. Cùng nhìn lại các tên gọi đã đánh dấu hành trình thương hiệu kể từ năm 2018.</p>
          </div>

          <ol className="relative mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <li key={milestone.name} className="min-w-0">
                <article className="relative h-full overflow-hidden rounded-3xl border border-sky-200/25 bg-gradient-to-br from-[#0b426a]/90 to-[#041d36]/95 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 motion-reduce:transform-none sm:p-9">
                  <span className="absolute -right-2 -top-5 select-none text-9xl font-black text-cyan-200/[0.06]" aria-hidden="true">{milestone.number}</span>
                  <div className="relative">
                    <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-mono text-sm font-semibold text-cyan-100">{milestone.period}</p>
                    <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-sky-200">{milestone.label}</p>
                    <h2 className="mt-3 break-words text-3xl font-black text-white sm:text-4xl">{milestone.name}</h2>
                    <div className="mt-8 h-px bg-gradient-to-r from-cyan-300/60 to-transparent" aria-hidden="true" />
                  </div>
                </article>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-sky-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
            <p>STA Cloud · 2023 đến nay</p>
            <a href={sitePath('/')} className="inline-flex min-h-11 items-center font-semibold text-cyan-200 underline underline-offset-4 transition hover:text-white">Về trang chủ</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
