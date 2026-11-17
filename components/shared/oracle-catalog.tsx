import { homeConfig } from "@/components/home/content";
import {
  oracleVpsPackages,
  oracleGpuPackages,
  oracleServicePlans,
  oraclePricingDate,
  oraclePricingSource,
  formatOraclePrice,
} from "./oracle-vps";
import { siteUrl } from "@/lib/site-seo";
import { localizedPath, type Locale } from "@/lib/i18n/config";
export function OracleCatalog({ locale = "vi" }: { locale?: Locale }) {
  const en = locale === "en";
  const canonical = `${siteUrl}${en ? "/en" : ""}/vps/`;
  const groups = [
    {
      id: "standard",
      name: en ? "Standard" : "Tiêu chuẩn",
      source: "Starter",
      description: en
        ? "For small websites, development and lightweight services."
        : "VPS cho website nhỏ, môi trường phát triển và dịch vụ nhẹ.",
      packages: oracleVpsPackages.filter((p) => p.name.startsWith("Starter")),
    },
    {
      id: "premium",
      name: en ? "Premium" : "Cao cấp",
      source: "Professional",
      description: en
        ? "More CPU, RAM and storage for growing applications."
        : "Thêm CPU, RAM và lưu trữ cho ứng dụng có nhu cầu tài nguyên lớn hơn.",
      packages: oracleVpsPackages.filter((p) =>
        p.name.startsWith("Professional"),
      ),
    },
    {
      id: "enterprise",
      name: en ? "Enterprise" : "Doanh nghiệp",
      source: "Enterprise",
      description: en
        ? "Large compute and memory configurations. Confirm operational needs with ICS."
        : "Các cấu hình CPU và bộ nhớ lớn; trao đổi yêu cầu vận hành với ICS.",
      packages: oracleVpsPackages.filter((p) =>
        p.name.startsWith("Enterprise"),
      ),
    },
    {
      id: "gpu",
      name: "AI / GPU",
      source: "GPU Compute",
      description: en
        ? "GPU compute. Compare accelerator models, counts and per-GPU memory."
        : "Máy chủ tăng tốc GPU; so sánh loại GPU, số lượng và bộ nhớ mỗi GPU.",
      packages: oracleGpuPackages,
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: en
      ? "Oracle Cloud VPS and GPU supplied by ICS"
      : "Sản phẩm VPS và GPU Oracle Cloud do ICS cung cấp",
    url: canonical,
    itemListElement: oracleServicePlans.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: p.name,
        url: oraclePricingSource,
        provider: {
          "@type": "Organization",
          name: "ICS",
          url: "https://oci.ics.vn/",
        },
      },
    })),
  };
  const buy = en ? "View & buy at ICS ↗" : "Xem & mua tại ICS ↗";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\u003c"),
        }}
      />
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">
            {en
              ? "ICS products · Introduced by STA Cloud"
              : "Sản phẩm ICS · STA Cloud giới thiệu"}
          </p>
          <h1>
            Oracle Cloud.
            <br />
            {en
              ? "VPS & GPU for your workload."
              : "VPS & GPU cho từng nhu cầu."}
          </h1>
          <p>
            {en
              ? "Choose a product group below. ICS supplies these products and handles purchases. Buy directly from ICS or contact STA Cloud for advice."
              : "Chọn cấu hình theo nhóm bên dưới. ICS là bên cung cấp sản phẩm và tiếp nhận mua hàng; bạn có thể mua trực tiếp tại ICS hoặc liên hệ STA Cloud để được tư vấn."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="button-primary" href={oraclePricingSource}>
              {en ? "ICS pricing ↗" : "Đến bảng giá ICS ↗"}
            </a>
            <a className="button-secondary" href={homeConfig.discordUrl}>
              {en ? "Ask STA Cloud" : "Liên hệ STA Cloud"}
            </a>
          </div>
        </header>
        <nav
          className="oracle-tabs"
          aria-label={en ? "Oracle product groups" : "Nhóm sản phẩm Oracle ICS"}
        >
          {groups.map((g) => (
            <a className="filter-chip border-0" key={g.id} href={`#${g.id}`}>
              {g.name}
              <span className="text-xs">{g.packages.length}</span>
            </a>
          ))}
        </nav>
        <p className="mt-4 text-xs leading-6">
          {en
            ? `Reference monthly prices exclude 10% VAT, Windows licensing and additional services. ICS snapshot: ${oraclePricingDate}. Confirm specifications, region, availability and total cost with ICS. Burstable 50% applies to standard VPS, not automatically to GPU products.`
            : `Giá tham khảo theo tháng, chưa gồm VAT 10%, bản quyền Windows và dịch vụ bổ sung. Nguồn ICS cập nhật ${oraclePricingDate}; cấu hình, khu vực và tổng chi phí phải được ICS xác nhận. CPU Burstable 50% áp dụng VPS tiêu chuẩn, không áp mặc định cho GPU.`}
        </p>
        {groups.map((g) => (
          <section
            className="oracle-section"
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-title`}
          >
            <p className="eyebrow">{g.source}</p>
            <h2 id={`${g.id}-title`} className="section-heading mt-2">
              {g.name}
            </h2>
            <p className="my-4 text-sm leading-7">{g.description}</p>
            <div className="oracle-table table-scroll">
              <table className="comparison-table">
                <caption className="sr-only">ICS · {g.name}</caption>
                <thead>
                  <tr>
                    {[
                      en ? "Configuration" : "Cấu hình",
                      "CPU",
                      "RAM",
                      en ? "Storage / GPU" : "Ổ đĩa / GPU",
                      en ? "Monthly price" : "Giá / tháng",
                      en ? "Purchase" : "Mua hàng",
                    ].map((x) => (
                      <th key={x} scope="col">
                        {x}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {g.packages.map((p) => (
                    <tr key={p.name}>
                      <th scope="row" className="text-white">
                        <span className="sr-only">ICS Oracle </span>
                        {p.name}
                      </th>
                      <td>{p.cpu}</td>
                      <td>{p.ram}</td>
                      <td>
                        {p.storage}
                        {"gpu" in p && (
                          <p className="mt-2 font-semibold text-cyan-200">
                            {String(p.gpu)}
                          </p>
                        )}
                      </td>
                      <td className="font-semibold text-white">
                        {formatOraclePrice(p.monthlyVnd)}
                        <span className="mt-1 block text-xs font-normal text-sky-200">
                          {en ? "excl. 10% VAT" : "chưa VAT 10%"}
                        </span>
                      </td>
                      <td>
                        <a
                          className="action-link whitespace-nowrap"
                          href={oraclePricingSource}
                        >
                          {buy}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="oracle-grid">
              {g.packages.map((p) => (
                <article className="service-card" key={p.name}>
                  <div className="service-card-band">
                    <p className="eyebrow">ICS · {g.source}</p>
                    <h3 className="mt-2 break-words text-xl font-bold text-white">
                      {p.name}
                    </h3>
                  </div>
                  <div className="service-card-body">
                    <p className="plan-price text-2xl">
                      {formatOraclePrice(p.monthlyVnd)}
                    </p>
                    <p className="mt-1 text-xs">
                      {en
                        ? "/ month · excl. 10% VAT"
                        : "/ tháng · chưa VAT 10%"}
                    </p>
                    {"gpu" in p && (
                      <p className="mt-4 text-sm font-semibold text-cyan-200">
                        {String(p.gpu)}
                      </p>
                    )}
                    <details className="oracle-mobile-details mt-4">
                      <summary>
                        {en ? "Specifications & limits" : "Cấu hình & giới hạn"}
                        <span aria-hidden="true">+</span>
                      </summary>
                      <dl className="oracle-specs my-3 grid grid-cols-2 gap-2">
                        {[
                          ["CPU", p.cpu],
                          ["RAM", p.ram],
                          [en ? "Storage" : "Lưu trữ", p.storage],
                          [
                            en ? "Resource type" : "Loại tài nguyên",
                            g.id === "gpu" ? "GPU Compute" : "Burstable 50%",
                          ],
                        ].map(([label, value]) => (
                          <div className="spec-tile" key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="my-3 text-xs leading-6">
                        {g.id === "gpu"
                          ? en
                            ? "Dedicated AI infrastructure. Confirm usage with ICS."
                            : "Hạ tầng AI chuyên dụng; xác nhận mức sử dụng với ICS."
                          : en
                            ? "Published bandwidth: 300 Mbps. Regions and availability depend on ICS."
                            : "Băng thông công bố 300 Mbps; khu vực và slot theo ICS."}
                      </p>
                    </details>
                    <a
                      className="button-primary mt-4"
                      href={oraclePricingSource}
                    >
                      {buy}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
        <aside className="service-card p-5 text-sm leading-7">
          {en
            ? "FREE, Dev and Game Servers hosting are STA Cloud services."
            : "Hosting FREE, Dev và Game Servers là dịch vụ riêng của STA Cloud."}
          <a className="action-link" href={localizedPath("/pricing/", locale)}>
            {en
              ? "STA Cloud hosting plans →"
              : "Xem bảng giá hosting STA Cloud →"}
          </a>
        </aside>
      </div>
    </>
  );
}
