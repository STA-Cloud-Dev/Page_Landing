'use client';

import { useMemo, useState } from 'react';
import { allServicePlans, homeConfig } from '@/components/home/content';
import { sitePath } from '@/lib/site-path';

const plans = allServicePlans.filter(plan => plan.category !== 'vps').map(plan => plan.id === 'node-test' ? { ...plan, specs: ['75% CPU', '2 GB RAM', 'Ổ đĩa: xác nhận qua ticket', 'Không hỗ trợ backup'] } : plan);
const filters = [['all','Tất cả'], ['free','Miễn phí'], ['dev','Dev'], ['linux','Linux Egg'], ['game','Game server'], ['other','Cộng đồng & Beta']] as const;
export function PricingCatalog() {
  const [filter, setFilter] = useState<string>('all');
  const visible = useMemo(() => plans.filter(plan => filter === 'all' || (filter === 'free' ? ['node-test','free-dev','free-gaming-ai'].includes(plan.id) : filter === 'dev' ? plan.name.startsWith('Dev ') : filter === 'linux' ? plan.category === 'linux' : filter === 'game' ? plan.category === 'game' : !plan.name.startsWith('Dev ') && !['linux','game'].includes(plan.category) && !['node-test','free-dev','free-gaming-ai'].includes(plan.id))), [filter]);
  return <section aria-label="Bảng giá hosting STA Cloud" className="py-6">
    <div className="flex flex-wrap gap-2" aria-label="Lọc gói hosting">{filters.map(([id,label]) => <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)} className={`min-h-12 rounded-xl border px-4 text-sm font-semibold ${filter === id ? 'border-cyan-200 bg-cyan-300 text-[#031c34]' : 'border-cyan-300/30 bg-[#06243d] text-white'}`}>{label}</button>)}</div>
    <p className="mt-4 text-sm text-sky-200" role="status">{visible.length} gói phù hợp. Slot được xác nhận trên Portal hoặc qua ticket.</p>
    <details className="mt-5 rounded-xl border border-cyan-300/30 p-4"><summary className="min-h-11 cursor-pointer font-semibold text-cyan-200">Mở bảng so sánh nhanh</summary><div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><caption className="p-3 text-left">Giá và tài nguyên theo chu kỳ công bố của từng gói.</caption><thead><tr>{['Gói','Giá / chu kỳ','CPU','RAM','Ổ đĩa'].map(x => <th key={x} scope="col" className="whitespace-nowrap p-3 text-white">{x}</th>)}</tr></thead><tbody>{visible.map(plan => <tr key={plan.id} className="border-t border-cyan-300/20"><th scope="row" className="p-3 text-white">{plan.name}</th><td className="p-3">{plan.price} / {plan.period}</td>{[0,1,2].map(i => <td key={i} className="whitespace-nowrap p-3">{plan.specs[i] ?? 'Xem chi tiết'}</td>)}</tr>)}</tbody></table></div></details>
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map(plan => <article key={plan.id} id={plan.id} className="flex min-w-0 flex-col rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5">
      <p className="text-xs font-semibold text-cyan-200">{plan.badge} · {plan.status === 'paused' ? 'Tạm ngưng' : 'Kiểm tra slot'}</p><h2 className="mt-3 text-xl font-bold text-white">{plan.name}</h2><p className="mt-4 text-2xl font-bold text-cyan-200">{plan.price}</p><p className="text-sm text-sky-200">/ {plan.period}</p><p className="mt-4 text-sm leading-7">{plan.description}</p>
      <ul className="my-4 space-y-2 text-sm">{plan.specs.map(spec => <li key={spec}>• {spec}</li>)}</ul><p className="mt-auto text-xs leading-6 text-sky-200">{plan.warning || plan.upsizeNotes}</p>
      <a href={['node-test','openclaw','proxy-hk'].includes(plan.id) ? homeConfig.discordUrl : `${homeConfig.panelUrl}store/create`} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-cyan-300 px-4 text-sm font-bold text-[#031c34]">{plan.status === 'paused' ? 'Hỏi tình trạng qua ticket' : plan.ctaText}</a>
    </article>)}</div>
    <p className="mt-8 rounded-xl border border-cyan-300/25 p-5 text-sm leading-7">VPS và GPU Oracle Cloud là sản phẩm ICS được STA Cloud giới thiệu, có bảng giá và chính sách riêng. <a href={sitePath('/vps-hosting/')} className="inline-flex min-h-11 items-center text-cyan-200 underline">Xem Oracle VPS/GPU của ICS →</a></p>
  </section>;
}
