'use client';

import { useMemo, useState } from 'react';
import { allServicePlans, homeConfig } from '@/components/home/content';
import { sitePath } from '@/lib/site-path';

const plans = allServicePlans.filter(plan => plan.category !== 'vps');
const filters = [['all','Tất cả'], ['free','Miễn phí'], ['dev','Dev'], ['linux','Linux Egg'], ['game','Game server'], ['other','Cộng đồng & Beta']] as const;
export function PricingCatalog() {
  const [filter, setFilter] = useState<string>('all');
  const visible = useMemo(() => plans.filter(plan => filter === 'all' || (filter === 'free' ? ['free-dev','free-gaming-ai'].includes(plan.id) : filter === 'dev' ? plan.name.startsWith('Dev ') : filter === 'linux' ? plan.category === 'linux' : filter === 'game' ? plan.category === 'game' : !plan.name.startsWith('Dev ') && !['linux','game'].includes(plan.category) && !['free-dev','free-gaming-ai'].includes(plan.id))), [filter]);
  return <section aria-label="Bảng giá hosting STA Cloud" className="py-6">
    <div className="flex flex-wrap gap-2" aria-label="Lọc gói hosting">{filters.map(([id,label]) => <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)} className={`min-h-12 rounded-xl border px-4 text-sm font-semibold ${filter === id ? 'border-cyan-200 bg-cyan-300 text-[#031c34]' : 'border-cyan-300/30 bg-[#06243d] text-white'}`}>{label}</button>)}</div>
    <p className="mt-4 text-sm text-sky-200" role="status">{visible.length} gói phù hợp. Slot được xác nhận trên Portal hoặc qua ticket.</p>
    <details className="mt-5 rounded-xl border border-cyan-300/30 p-4"><summary className="min-h-11 cursor-pointer font-semibold text-cyan-200">Mở bảng so sánh nhanh</summary><div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><caption className="p-3 text-left">Giá và tài nguyên theo chu kỳ công bố của từng gói.</caption><thead><tr>{['Gói','Giá / chu kỳ','CPU','RAM','Ổ đĩa'].map(x => <th key={x} scope="col" className="whitespace-nowrap p-3 text-white">{x}</th>)}</tr></thead><tbody>{visible.map(plan => <tr key={plan.id} className="border-t border-cyan-300/20"><th scope="row" className="p-3 text-white">{plan.name}</th><td className="p-3">{plan.price} / {plan.period}</td>{[0,1,2].map(i => <td key={i} className="whitespace-nowrap p-3">{plan.specs[i] ?? 'Xem chi tiết'}</td>)}</tr>)}</tbody></table></div></details>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(plan => <article key={plan.id} id={plan.id} className="flex min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-sky-200/25 bg-[#0b2b46]">
      <div className="border-b border-sky-200/15 bg-[#103650] p-5"><p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-200">{plan.badge}</p><h2 className="mt-2 text-xl font-bold text-white">{plan.name}</h2><p className="mt-2 text-xs text-sky-200">{plan.status === 'paused' ? 'Tạm ngưng đăng ký mới' : 'Kiểm tra slot trước khi đăng ký'}</p></div>
      <div className="flex flex-1 flex-col p-5"><p className="text-3xl font-bold tabular-nums tracking-tight text-white">{plan.price}</p><p className="mt-1 text-xs text-sky-200">/ {plan.period}</p>
      <dl className="my-5 grid grid-cols-2 gap-3">{plan.specs.slice(0,3).map((spec,index) => <div key={spec} className={`${index===2?'col-span-2':''} min-w-0 rounded-xl bg-black/15 p-3`}><dt className="text-[11px] text-sky-200">{['CPU','RAM','Lưu trữ'][index]}</dt><dd className="mt-1 text-sm font-semibold text-white">{spec}</dd></div>)}</dl>
      <p className="mb-4 text-sm leading-7">{plan.description}</p><details className="mb-5 border-t border-cyan-300/20 pt-3"><summary className="min-h-11 cursor-pointer text-sm font-semibold text-cyan-200">Giới hạn & điều kiện gói</summary><ul className="my-3 space-y-2 text-xs leading-6">{plan.specs.slice(3).map(spec => <li key={spec}>• {spec}</li>)}</ul><p className="text-xs leading-6 text-sky-200">{plan.warning || plan.upsizeNotes}</p></details>
      <a href={['openclaw','proxy-hk'].includes(plan.id) ? homeConfig.discordUrl : `${homeConfig.panelUrl}store/create`} target="_blank" rel="noopener noreferrer" className="mt-auto flex min-h-12 items-center justify-center rounded-xl bg-cyan-300 px-4 text-sm font-bold text-[#031c34]">{plan.status === 'paused' ? 'Hỏi tình trạng qua ticket' : plan.ctaText}</a></div>
    </article>)}</div>
    <p className="mt-8 rounded-xl border border-cyan-300/25 p-5 text-sm leading-7">VPS và GPU Oracle Cloud là sản phẩm ICS được STA Cloud giới thiệu, có bảng giá và chính sách riêng. <a href={sitePath('/vps/')} className="inline-flex min-h-11 items-center text-cyan-200 underline">Xem Oracle VPS/GPU của ICS →</a></p>
  </section>;
}
