import { ServerExpiryNotice } from '@/components/shared/server-expiry-notice';
import { CreditRateNotice } from './credit-rate-notice';
import { freePlans, freePolicy } from "./free-plans";
import { homeConfig } from "@/components/home/content";
import { ContactLinks } from "./contact-links";
import { OpenClawSpotlight } from "./openclaw-spotlight";
import { localizedPath, type Locale } from "@/lib/i18n/config";
export function FreeHosting({ locale = "vi" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">STA Cloud · Free Forever</p>
        <h1>
          {en
            ? "A free start. Room to build."
            : "Khởi đầu miễn phí. Tự do sáng tạo."}
        </h1>
        <p>
          {en
            ? "Free DEV and Free Gamming + AI are Free Forever: no charges, 0 Credit and free renewals. The 5-day management cycle is not a paid trial. Resources may change in the future. Verified accounts and available capacity are required."
            : "Free DEV và Free Gamming + AI đều Free Forever: không thu phí, 0 Credit và gia hạn 0đ. Chu kỳ quản lý 5 ngày không phải dùng thử có phí. Cấu hình có thể điều chỉnh trong tương lai; dành cho tài khoản đã xác minh và tùy slot."}
        </p>
        <CreditRateNotice locale={locale} compact />
        <ContactLinks />
      </header>
      <section id="free-hosting" className="scroll-mt-28 py-8">
        <h2 className="section-heading">
          {en ? "Two Free Forever plans" : "Hai gói hosting Free Forever"}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {freePlans
            .filter((p) => p.credit === 0)
            .map((p) => (
              <article className="service-card" key={p.id}>
                <div className="service-card-band">
                  <p className="eyebrow">
                    Free Forever · {en ? "Free renewals" : "Gia hạn 0đ"}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {p.name}
                  </h3>
                </div>
                <div className="service-card-body">
                  <p className="plan-price">0 Credit</p>
                  <p className="mt-1 text-sm">
                    {en
                      ? `Management cycle: ${p.days} days`
                      : `Chu kỳ quản lý: ${p.days} ngày`}
                  </p>
                  <dl className="my-5 grid grid-cols-3 gap-2">
                    {[
                      ["CPU", `${p.cpu}% CPU`],
                      ["RAM", `${p.ram} MB RAM`],
                      [en ? "Storage" : "Ổ đĩa", `${p.disk} MB`],
                    ].map(([label, value]) => (
                      <div className="spec-tile" key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mb-5 space-y-2 text-sm leading-7">
                    <li>
                      {p.ports}{" "}
                      {en
                        ? "port · 0 backups · 0 databases"
                        : "cổng · 0 bản sao lưu · 0 cơ sở dữ liệu"}
                    </li>
                    <li>
                      {en
                        ? `Renewal limit: ${p.renewalDays} days according to the plan configuration.`
                        : `Gia hạn tối đa ${p.renewalDays} ngày theo cấu hình gói.`}
                    </li>
                    <li>
                      {en
                        ? "Keep independent backups; data recovery is not included."
                        : "Tự lưu bản sao dữ liệu; không hỗ trợ khôi phục."}
                    </li>
                    <li>
                      {en
                        ? "Resources may change in the future."
                        : "Cấu hình có thể điều chỉnh trong tương lai."}
                    </li>
                  </ul>
                  <a
                    className="button-primary mt-auto"
                    href={`${homeConfig.panelUrl}store/create`}
                  >
                    {en
                      ? "Check availability on Portal"
                      : "Kiểm tra slot trên Portal"}
                  </a>
                </div>
              </article>
            ))}
        </div>
      </section>
      <section id="plans" className="service-card scroll-mt-28 p-5">
        <h2 className="section-heading">
          {en ? "Need more resources?" : "Cần thêm tài nguyên?"}
        </h2>
        <p className="mt-3 text-sm leading-7">
          {en
            ? "Dev, Linux Egg, Game Servers and other community plans have separate prices and conditions."
            : "Dev, Linux Egg, Game Servers và các gói cộng đồng khác có giá và điều kiện riêng."}
        </p>
        <a
          className="action-link mt-2"
          href={localizedPath("/pricing/", locale)}
        >
          {en ? "View all hosting plans →" : "Xem đầy đủ bảng giá →"}
        </a>
      </section>
      <section id="openclaw" className="scroll-mt-28 py-8">
        {en ? (
          <>
            <h2 className="section-heading">OpenClaw · Free Beta</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7">
              Try AI and web applications without a personal domain. This beta
              may change or be interrupted; it has no uptime or data-recovery
              guarantee. Vietnam and Singapore are recommended for AI workloads;
              third-party API restrictions may affect Hong Kong. Ask through
              Discord, Zalo or Messenger.
            </p>
            <ContactLinks />
          </>
        ) : (
          <OpenClawSpotlight
            discordUrl={homeConfig.discordUrl}
            zaloUrl={homeConfig.zaloUrl}
            messengerUrl={homeConfig.messengerUrl}
          />
        )}
      </section>
      <section
        id="service-rules"
        className="scroll-mt-28 border-t border-cyan-300/20 py-8"
      >
        <h2 className="section-heading">
          {en
            ? "Use responsibly. Keep a copy."
            : "Sử dụng đúng quy định. Chủ động sao lưu."}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7">
          {en
            ? "Do not use free services for DDoS, mining, botnets, unauthorized scanning, selfbots, abusive proxies, malware or illegal content. Free Fire Bot, Minecraft Bot and obfuscated code are not allowed on the free tier. Check renewal limits and keep independent copies of important data."
            : freePolicy}
        </p>
        <ServerExpiryNotice locale={locale} />
        <div className="mt-3 flex flex-wrap gap-5">
          {[
            ["terms", en ? "Terms of service" : "Điều khoản"],
            ["security", en ? "Security & backups" : "Bảo mật & sao lưu"],
          ].map(([path, label]) => (
            <a
              className="action-link"
              key={path}
              href={localizedPath(path, locale)}
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
