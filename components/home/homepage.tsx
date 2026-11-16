import { ImmersiveHero } from './immersive-hero';
import { allServicePlans, comprehensiveFaqs, homeBenefits } from './content';
import { SiteShell } from '@/components/shared/site-shell';
import { sitePath } from '@/lib/site-path';
import { siteServices } from '@/lib/site-seo';

const featured = [
  { id: 'free-dev', title: 'Học tập & thử nghiệm' },
  { id: 'dev-3', title: 'Hosting Web & Bot' },
  { id: 'game-servers-1', title: 'Máy chủ game' },
];
export function HomePage() {
  return <SiteShell home>
    <ImmersiveHero />
    <div className="landing-depth-content">
      <section id="free-hosting" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl">
          <h2 id="services-title" className="text-2xl font-bold text-white sm:text-3xl">Chọn dịch vụ theo nhu cầu</h2>
          <p className="mt-3 text-sm leading-7">Hosting FREE, Dev và game server là dịch vụ STA Cloud. VPS/GPU Oracle Cloud do ICS cung cấp, được STA Cloud giới thiệu.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">{siteServices.map(service => <article key={service.path} className="rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5"><h3 className="text-lg font-bold text-white">{service.name}</h3><p className="mt-3 hidden text-sm leading-7 sm:block">{service.description}</p><a href={sitePath(service.path)} className="mt-3 inline-flex min-h-12 items-center font-semibold text-cyan-200 underline">{service.action} →</a></article>)}</div>
          <a href={sitePath('/about/')} className="mt-3 inline-flex min-h-12 items-center text-sm text-cyan-200 underline">STA Cloud là gì? Thông tin và nguồn chính thức</a>
        </div>
      </section>
      <section id="plans" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12" aria-labelledby="featured-title">
        <div className="mx-auto max-w-7xl"><h2 id="featured-title" className="text-2xl font-bold text-white sm:text-3xl">Ba lựa chọn tiêu biểu của STA Cloud</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{featured.map(item => { const plan = allServicePlans.find(plan => plan.id === item.id)!; return <article key={item.id} className={`${item.id === 'dev-3' ? 'flex' : 'hidden md:flex'} min-w-0 flex-col rounded-2xl border border-cyan-300/30 bg-[#06335a]/60 p-5 sm:p-6`}><p className="text-xs font-semibold text-cyan-200">{item.title}</p><h3 className="mt-3 text-xl font-bold text-white">{plan.name}</h3><p className="mt-4 text-2xl font-bold text-white">{plan.price}</p><p className="text-sm text-sky-200">/ {plan.period}</p><ul className="my-4 space-y-2 text-sm">{plan.specs.slice(0,3).map(spec => <li key={spec}>• {spec}</li>)}</ul><a href={sitePath(`/pricing/#${plan.id}`)} className="mt-auto flex min-h-12 items-center justify-center rounded-xl bg-cyan-300 px-4 font-bold text-[#031c34]">Xem gói & điều kiện</a></article>; })}</div>
          <a href={sitePath('/pricing/')} className="mt-5 inline-flex min-h-12 items-center rounded-xl border border-cyan-300/40 px-5 font-semibold text-cyan-200">Xem đầy đủ bảng giá STA Cloud →</a>
        </div>
      </section>
      <section id="benefits" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12" aria-labelledby="benefits-title"><div className="mx-auto max-w-7xl"><h2 id="benefits-title" className="text-2xl font-bold text-white sm:text-3xl">Thông tin rõ ràng trước khi đăng ký</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{homeBenefits.filter((_, index) => index !== 2).map(benefit => <article key={benefit.title} className="rounded-2xl border border-cyan-300/20 p-5"><h3 className="font-bold text-white">{benefit.title}</h3><p className="mt-3 hidden text-sm leading-7 sm:block">{benefit.description}</p></article>)}</div></div></section>
      <section id="network" className="scroll-mt-24 px-4 py-8 sm:px-6" aria-labelledby="network-title"><div className="mx-auto grid max-w-7xl gap-5 rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5 sm:p-7 md:grid-cols-2"><div><h2 id="network-title" className="text-2xl font-bold text-white">Khu vực và kết nối</h2><p className="mt-3 text-sm leading-7">Hà Nội và TP.HCM được tách riêng. Xem Hong Kong và danh mục region Oracle theo quốc gia, thành phố; ping trên sơ đồ là mô phỏng, slot cần xác nhận.</p><a href={sitePath('/network/')} className="mt-3 inline-flex min-h-12 items-center font-semibold text-cyan-200 underline">Mở bản đồ tương tác →</a></div><div id="openclaw" className="scroll-mt-24"><h3 className="text-xl font-bold text-white">Hosting miễn phí & OpenClaw Beta</h3><p className="mt-3 text-sm leading-7">Xem Node Test, Free DEV, Free Gamming + AI và OpenClaw tại trang miễn phí. Chủ động sao lưu dữ liệu; cấu hình và điều kiện áp dụng theo từng gói.</p><a href={sitePath('/free-server/')} className="mt-3 inline-flex min-h-12 items-center font-semibold text-cyan-200 underline">Gói miễn phí và cách đăng ký →</a></div></div></section>
      <section id="faq" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12" aria-labelledby="faq-title"><div className="mx-auto max-w-4xl"><h2 id="faq-title" className="text-2xl font-bold text-white">Câu hỏi trước khi chọn gói</h2><div className="mt-5 space-y-3">{comprehensiveFaqs.slice(0,5).map(faq => <details key={faq.q} className="rounded-xl border border-cyan-300/25 p-4"><summary className="min-h-12 cursor-pointer font-semibold text-white">{faq.q}</summary><p className="mt-3 text-sm leading-7">{faq.a}</p></details>)}</div><div id="policies" className="mt-5 scroll-mt-24 text-sm leading-7">Đọc <a href={sitePath('/terms/')} className="inline-flex min-h-12 items-center text-cyan-200 underline">điều khoản</a>, <a href={sitePath('/sla/')} className="inline-flex min-h-12 items-center text-cyan-200 underline">SLA</a> và <a href={sitePath('/security/')} className="inline-flex min-h-12 items-center text-cyan-200 underline">sao lưu & bảo mật</a> trước khi đăng ký.</div></div></section>
    </div>
  </SiteShell>;
}
