import { oraclePricingSource, oraclePricingDate, oracleVpsPackages } from '@/components/shared/oracle-vps';
import type { Metadata } from 'next';
import { allServicePlans, homeConfig } from '@/components/home/content';
import { SiteFooter } from '@/components/shared/site-footer';
import { sitePath } from '@/lib/site-path';
import { siteImage, siteName, siteUrl } from '@/lib/site-seo';

const title = 'VPS & Hosting Việt Nam, Singapore | STA Cloud';
const description = 'Chọn VPS, hosting website, bot Discord và game server tại STA Cloud. So sánh khu vực Việt Nam, Singapore; xem bảng giá VPS Oracle Cloud và cách đăng ký.';
const canonical = `${siteUrl}/vps-hosting/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName, locale: 'vi_VN', type: 'website', images: [siteImage] },
  twitter: { card: 'summary', title, description, images: [siteImage.url] },
};

const vpsPlans = allServicePlans.filter((plan) => plan.category === 'vps');
const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'STACloud', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'VPS & Hosting', item: canonical },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${canonical}#oracle-vps`,
  name: 'VPS Oracle Cloud tại STA Cloud',
  serviceType: 'Cloud VPS',
  url: canonical,
  provider: { '@id': `${siteUrl}/#organization` },
  description: 'VPS Oracle Cloud với CPU Burstable 50%. Giá tham khảo theo tháng chưa gồm VAT 10%, bản quyền Windows và dịch vụ bổ sung; xác nhận khu vực, slot và tổng chi phí qua ticket.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Cấu hình VPS Oracle Cloud',
    itemListElement: oracleVpsPackages.map(plan => ({
      '@type': 'Offer', name: `STA Oracle ${plan.name}`, url: canonical,
      priceSpecification: { '@type': 'UnitPriceSpecification', price: Math.round(plan.monthlyVnd), priceCurrency: 'VND', unitCode: 'MON', valueAddedTaxIncluded: false },
      itemOffered: { '@type': 'Service', name: `STA Oracle ${plan.name}`, description: `${plan.cpu}, ${plan.ram}, ${plan.storage}, CPU Burstable 50%, băng thông 300 Mbps.`, provider: { '@id': `${siteUrl}/#organization` } },
    })),
  },
};

export default function VpsHostingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <nav aria-label="Đường dẫn" className="flex flex-wrap gap-2 text-sm text-cyan-200">
          <a href={sitePath('/')} className="min-h-11 content-center hover:text-white">STACloud</a>
          <span aria-hidden="true" className="content-center">/</span>
          <span aria-current="page" className="content-center">VPS & Hosting</span>
        </nav>
        <header className="py-8 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">STA Cloud Hosting</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl">VPS & Hosting Việt Nam, Singapore</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-sky-100">
            STA Cloud (STACloud) cung cấp VPS, hosting website, bot Discord và game hosting cho cá nhân, cộng đồng và dự án phát triển ứng dụng. Chọn khu vực Việt Nam hoặc Singapore theo nhu cầu sử dụng; cấu hình, giá và slot được xác nhận theo từng gói.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#vps-plans" className="btn-cyber-primary inline-flex min-h-12 items-center rounded-xl px-5 py-3 font-semibold">Xem cấu hình VPS</a>
            <a href={homeConfig.discordUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber-outline inline-flex min-h-12 items-center rounded-xl px-5 py-3">Tư vấn gói & khu vực</a>
          </div>
        </header>

        <section aria-labelledby="choose-service" className="py-8">
          <h2 id="choose-service" className="text-2xl font-bold text-white">Nên thuê VPS, hosting hay game server?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { name: 'Hosting website & bot', text: 'Phù hợp website, bot Discord, ứng dụng Node.js hoặc Python có nhu cầu tài nguyên rõ ràng. Xem gói Dev và Linux Egg, runtime được hỗ trợ và giới hạn của từng gói.', href: '/free-server/', action: 'Xem bảng giá hosting' },
              { name: 'Cloud VPS', text: 'Phù hợp nhu cầu triển khai ứng dụng và dịch vụ trên máy chủ ảo. Gửi yêu cầu hệ điều hành, CPU, RAM, dung lượng và port để chọn VPS Oracle Cloud.', href: '/#plans', action: 'Xem toàn bộ gói dịch vụ' },
              { name: 'Game hosting / server hosting', text: 'Dành cho máy chủ game như Minecraft. Chọn môi trường trong kho Egg, sau đó xác nhận tài nguyên theo phiên bản game, plugin, mod và số người chơi dự kiến.', href: '/egg/', action: 'Xem game & runtime hỗ trợ' },
            ].map((service) => (
              <article key={service.name} className="flex flex-col rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-sky-100">{service.text}</p>
                <a href={sitePath(service.href)} className="mt-4 inline-flex min-h-11 items-center font-semibold text-cyan-200 hover:text-white">{service.action} →</a>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="choose-region" className="py-8">
          <h2 id="choose-region" className="text-2xl font-bold text-white">Chọn hosting Việt Nam hay Singapore?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-cyan-300/25 p-5">
              <h3 className="text-xl font-semibold text-white">Việt Nam (Vietnam)</h3>
              <p className="mt-3 text-sm leading-7 text-sky-100">Cân nhắc location Việt Nam khi phần lớn người dùng hoặc người chơi ở trong nước. Đây là khu vực dành cho dịch vụ trả phí; hãy xác nhận loại dịch vụ, cấu hình và slot qua ticket trước khi đăng ký.</p>
            </article>
            <article className="rounded-2xl border border-cyan-300/25 p-5">
              <h3 className="text-xl font-semibold text-white">Singapore</h3>
              <p className="mt-3 text-sm leading-7 text-sky-100">Hosting và game server Singapore được xác nhận theo từng gói. VPS Oracle Cloud cần xác nhận khu vực triển khai qua ticket; không mặc định mọi cấu hình đều có tại Singapore.</p>
            </article>
          </div>
          <p className="mt-4 text-sm leading-7 text-sky-200">Không phải mọi gói đều có ở cả hai khu vực. Khi mở ticket, hãy nêu khu vực mong muốn, loại ứng dụng, số người dùng và nhu cầu backup để được đối chiếu hạ tầng hiện có.</p>
        </section>

        <section id="vps-plans" aria-labelledby="vps-title" className="scroll-mt-8 py-8">
          <h2 id="vps-title" className="text-2xl font-bold text-white">Bảng giá VPS Oracle Cloud</h2>
          <p className="mt-3 text-sm leading-7 text-sky-100">So sánh vCPU, RAM và SSD để chọn cấu hình phù hợp. CPU Burstable 50%; khu vực, slot và lịch bàn giao được xác nhận qua ticket. Giá theo tháng chưa gồm VAT 10%, bản quyền Windows và dịch vụ bổ sung.</p>
          <p className="mt-3 text-sm text-sky-200">Giá cập nhật {oraclePricingDate}, tham khảo <a href={oraclePricingSource} target="_blank" rel="noopener noreferrer" className="underline">bảng giá Oracle Cloud ICS</a>. STA Cloud tiếp nhận tư vấn và đăng ký qua ticket.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {vpsPlans.map((plan) => (
              <article key={plan.id} className="rounded-2xl border border-cyan-300/25 bg-[#06335a]/60 p-5">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-xl font-bold text-cyan-200">{plan.price} / {plan.period}</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-sky-100">
                  {plan.specs.map((spec) => <li key={spec}>{spec}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="register-title" className="py-8">
          <h2 id="register-title" className="text-2xl font-bold text-white">Đăng ký VPS hoặc hosting tại STA Cloud</h2>
          <ol className="mt-5 list-inside list-decimal space-y-3 text-sm leading-7 text-sky-100">
            <li>Chọn hosting, VPS hoặc game server; ghi lại khu vực Việt Nam / Singapore và ngân sách dự kiến.</li>
            <li>Mở ticket Discord với nhu cầu CPU, RAM, lưu trữ, runtime hoặc game và yêu cầu backup.</li>
            <li>Xác nhận cấu hình, giá, slot và chính sách trước khi thanh toán; nhận hướng dẫn quản trị dịch vụ sau khi được cấp phát.</li>
          </ol>
          <p className="mt-5 text-sm leading-7 text-sky-200">Muốn thử trước? <a href={sitePath('/free-server/')} className="text-cyan-200 underline">Xem điều kiện Node Test miễn phí</a>. Với dịch vụ trả phí, đọc <a href={sitePath('/sla/')} className="text-cyan-200 underline">SLA</a> và <a href={sitePath('/terms/')} className="text-cyan-200 underline">điều khoản sử dụng</a>.</p>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
