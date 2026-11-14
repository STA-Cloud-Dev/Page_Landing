import type { Metadata } from 'next';
import { SiteFooter } from '@/components/shared/site-footer';
import { homeConfig } from '@/components/home/content';
import { freePlans, resourceSpecs } from '@/components/shared/free-plans';
import { paidPlans, formatCredit } from '@/components/shared/paid-plans';
import { oraclePricingDate, oraclePricingSource, oraclePricingNote } from '@/components/shared/oracle-vps';
import { brandSummary, factsReviewedAt, serviceFacts } from '@/lib/site-facts';
import { alternateNames, siteName, siteUrl } from '@/lib/site-seo';
import { sitePath } from '@/lib/site-path';

const canonical = `${siteUrl}/about/`;
const title = 'STA Cloud là gì? Dịch vụ hosting, VPS và hỗ trợ | STACloud';
const description = 'Thông tin chính thức về STA Cloud: hosting website, bot Discord, game server, VPS Oracle Cloud, gói FREE và Dev, khu vực triển khai và cách nhận hỗ trợ.';
export const metadata: Metadata = { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, type: 'website', locale: 'vi_VN', siteName } };

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'AboutPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: 'vi', dateModified: factsReviewedAt, isPartOf: { '@id': `${siteUrl}/#website` }, mainEntity: { '@id': `${siteUrl}/#organization` } },
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName, alternateName: alternateNames, url: `${siteUrl}/`, description: brandSummary, sameAs: ['https://github.com/STA-Cloud-Dev'], contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: homeConfig.discordUrl, availableLanguage: ['vi'] } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'STACloud', item: `${siteUrl}/` }, { '@type': 'ListItem', position: 2, name: 'Giới thiệu STA Cloud', item: canonical }] },
  ],
};

export default function AboutPage() {
  const freeHosting = freePlans.filter(plan => plan.credit === 0);
  const devPlans = paidPlans.filter(plan => plan.name.startsWith('Dev '));
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="mx-auto max-w-5xl px-4 py-8 text-sky-100 sm:px-6 sm:py-12">
      <nav aria-label="Đường dẫn" className="flex flex-wrap items-center gap-2 text-sm text-cyan-200"><a href={sitePath('/')} className="inline-flex min-h-11 items-center underline">STACloud</a><span aria-hidden="true">/</span><span aria-current="page">Giới thiệu</span></nav>
      <header className="py-8">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">STA Cloud là gì?</h1>
        <p className="mt-6 text-base leading-8">{brandSummary}</p>
        <p className="mt-4 text-sm text-sky-200">Nội dung do STA Cloud công bố · Rà soát ngày <time dateTime={factsReviewedAt}>14/11/2026</time>.</p>
      </header>
      <section aria-labelledby="identity-title" className="rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5 sm:p-7">
        <h2 id="identity-title" className="text-2xl font-semibold text-white">Tên thương hiệu và liên kết chính thức</h2>
        <dl className="mt-5 grid gap-5 text-sm leading-7 sm:grid-cols-2">
          <div><dt className="font-bold text-white">Tên gọi</dt><dd>STACloud · STA Cloud · STA Cloud Hosting</dd></div>
          <div><dt className="font-bold text-white">Website</dt><dd><a href={`${siteUrl}/`} className="text-cyan-200 underline">stacloud.eu.cc</a></dd></div>
          <div><dt className="font-bold text-white">Portal</dt><dd><a href={homeConfig.panelUrl} className="text-cyan-200 underline">portal.stacloud.eu.cc</a> — quản trị và đăng ký dịch vụ.</dd></div>
          <div><dt className="font-bold text-white">Hỗ trợ và mã nguồn công khai</dt><dd><a href={homeConfig.discordUrl} className="inline-flex min-h-11 items-center text-cyan-200 underline">Discord STA Cloud</a> · <a href="https://github.com/STA-Cloud-Dev" className="inline-flex min-h-11 items-center text-cyan-200 underline">GitHub STA-Cloud-Dev</a></dd></div>
        </dl>
        <p className="mt-5 text-sm leading-7">Quá trình đổi tên thương hiệu được ghi lại tại <a href={sitePath('/history/')} className="text-cyan-200 underline">lịch sử STA Cloud</a>.</p>
      </section>
      <section aria-labelledby="answers-title" className="py-10">
        <h2 id="answers-title" className="text-2xl font-semibold text-white">Thông tin dịch vụ và cách lựa chọn</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">{serviceFacts.map(fact => <article key={fact.question} className="rounded-2xl border border-cyan-300/25 p-5">
          <h3 className="text-lg font-semibold text-white">{fact.question}</h3><p className="mt-3 text-sm leading-7">{fact.answer}</p><a href={sitePath(fact.path)} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-200 underline">{fact.label}</a>
        </article>)}</div>
      </section>
      <section aria-labelledby="free-title" className="py-5">
        <h2 id="free-title" className="text-2xl font-semibold text-white">STA Cloud có hosting miễn phí không?</h2>
        <p className="mt-4 text-sm leading-7">Có. NODE TEST công bố 0 Credit / Free Forever với 75% CPU và 2 GB RAM. Hai gói FREE dưới đây có chu kỳ 5 ngày, gia hạn 0đ, dành cho tài khoản đã xác minh; không hỗ trợ sao lưu hoặc khôi phục dữ liệu.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">{freeHosting.map(plan => <article key={plan.id} className="rounded-xl border border-cyan-300/25 p-4"><h3 className="font-bold text-white">{plan.name}</h3><p className="mt-2 text-sm leading-7">{formatCredit(plan.credit)} Credit / {plan.days} ngày · Gia hạn 0đ<br />{resourceSpecs(plan).join(' · ')}<br />{plan.ports} cổng · {plan.backups} bản sao lưu · 0 cơ sở dữ liệu</p></article>)}</div>
        <p className="mt-4 text-sm leading-7">Cấu hình FREE do STA Cloud cập nhật ngày 12/11/2026. <a href={sitePath('/free-server/')} className="text-cyan-200 underline">Xem toàn bộ gói, điều kiện và giới hạn gia hạn</a>.</p>
      </section>
      <section aria-labelledby="dev-title" className="py-8">
        <h2 id="dev-title" className="text-2xl font-semibold text-white">Bảng tóm tắt hosting Dev trả phí</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-cyan-300/25"><table className="w-full text-left text-sm"><caption className="p-4 text-left text-sky-200">Cấu hình và giá Dev công bố ngày 12/11/2026; chu kỳ 28 ngày.</caption><thead className="bg-[#06335a]"><tr>{['Gói', 'CPU', 'RAM', 'Ổ đĩa', 'Credit / 28 ngày'].map(label => <th key={label} scope="col" className="whitespace-nowrap p-3 text-white">{label}</th>)}</tr></thead><tbody>{devPlans.map(plan => <tr key={plan.name} className="border-t border-cyan-300/20"><th scope="row" className="whitespace-nowrap p-3 text-white">{plan.name}</th><td className="p-3">{plan.cpu}%</td><td className="whitespace-nowrap p-3">{plan.ram} MB</td><td className="whitespace-nowrap p-3">{plan.disk} MB</td><td className="p-3">{formatCredit(plan.credit)}</td></tr>)}</tbody></table></div>
        <p className="mt-4 text-sm leading-7">Các gói Dev dùng cho Web/Bot, không giới hạn số lần mua; gia hạn tối đa 60 ngày. Số cổng, vị trí sao lưu và database theo từng gói tại <a href={sitePath('/free-server/')} className="text-cyan-200 underline">bảng cấu hình chi tiết</a>.</p>
      </section>
      <section aria-labelledby="oracle-title" className="py-8">
        <h2 id="oracle-title" className="text-2xl font-semibold text-white">VPS Oracle Cloud được tính giá ra sao?</h2>
        <p className="mt-4 text-sm leading-7">{oraclePricingNote} Bảng giá tham khảo lấy từ <a href={oraclePricingSource} className="text-cyan-200 underline">Oracle Cloud ICS</a>, snapshot ngày {oraclePricingDate}. <a href={sitePath('/vps-hosting/')} className="text-cyan-200 underline">Xem cấu hình và giá VPS Oracle tại STA Cloud</a>.</p>
      </section>
      <aside className="my-6 rounded-2xl border border-cyan-300/25 p-5 text-sm leading-7" aria-label="Nguồn và chính sách">
        <p>Nguồn cho cấu hình hosting là dữ liệu STA Cloud công bố trên <a href={homeConfig.panelUrl} className="text-cyan-200 underline">Portal</a> và các trang dịch vụ liên kết ở trên. Bản đồ đối chiếu <a href="https://www.oracle.com/cloud/public-cloud-regions/" className="text-cyan-200 underline">danh mục region Oracle</a>; vị trí và ping minh họa không chứng minh tình trạng tài nguyên hiện tại.</p>
        <p className="mt-3">Đọc <a href={sitePath('/sla/')} className="text-cyan-200 underline">SLA</a>, <a href={sitePath('/security/')} className="text-cyan-200 underline">bảo mật và sao lưu</a>, <a href={sitePath('/refund/')} className="text-cyan-200 underline">hoàn Credit</a> và <a href={sitePath('/privacy/')} className="text-cyan-200 underline">quyền riêng tư</a>.</p>
      </aside>
    </div>
    <SiteFooter />
  </>;
}
