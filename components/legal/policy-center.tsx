import { SiteShell } from "@/components/shared/site-shell";
import { ContactLinks } from "@/components/shared/contact-links";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site-seo";
const documents = [
  {
    path: "terms",
    vi: "Điều khoản dịch vụ",
    en: "Terms of service",
    viDescription:
      "Quyền và trách nhiệm khi sử dụng hosting; giới hạn tài nguyên, mạng, lạm dụng và xử lý vi phạm.",
    enDescription:
      "Service responsibilities, resource and network limits, abuse response and review of restrictions.",
    topics: [
      ["fair-use", "Fair Use · CPU / RAM / I/O / Network"],
      ["abuse", "Abuse Policy"],
      ["suspension-appeal", "Suspension & Appeal"],
      ["network-policy", "Network Policy"],
      ["renewal-expiration", "Renewal & Expiration"],
    ],
  },
  {
    path: "privacy",
    vi: "Quyền riêng tư",
    en: "Privacy policy",
    viDescription:
      "Thu thập và sử dụng thông tin; quyền yêu cầu truy cập, chỉnh sửa, xóa và thời hạn lưu dữ liệu.",
    enDescription:
      "Collection and use of information, access/correction/deletion requests and retention of personal and operational records.",
    topics: [["data-retention", "Data Retention Policy"]],
  },
  {
    path: "sla",
    vi: "Cam kết SLA",
    en: "Service level agreement",
    viDescription:
      "Mục tiêu uptime 99% cho dịch vụ trả phí đủ điều kiện, bồi hoàn và phạm vi hỗ trợ.",
    enDescription:
      "99% monthly uptime target for eligible paid services, service credits and support scope.",
    topics: [["support", "Support Policy"]],
  },
  {
    path: "refund",
    vi: "Hoàn Credit",
    en: "Credit refunds",
    viDescription:
      "Thanh toán và quy đổi Credit; refund trong 3 giờ đầu sau khi mua nếu chọn sai gói hoặc không phù hợp nhu cầu.",
    enDescription:
      "Payments and Credit conversion; 3-hour requests for mistaken or unsuitable server-plan purchases.",
    topics: [["billing", "Billing Policy"]],
  },
  {
    path: "security",
    vi: "Bảo mật máy chủ",
    en: "Server security",
    viDescription:
      "Cách ly, truy cập hỗ trợ, trách nhiệm bảo mật và điều kiện nhận backup hoặc khôi phục.",
    enDescription:
      "Isolation, support access, customer security and conditions for obtaining backups or restoration.",
    topics: [["backup-restore", "Backup & Restore Policy"]],
  },
  {
    path: "cookies",
    vi: "Chính sách Cookie",
    en: "Cookie policy",
    viDescription:
      "Cookie phiên đăng nhập, xác minh an ninh, bộ nhớ giao diện và cách kiểm soát dữ liệu trình duyệt.",
    enDescription:
      "Session cookies, security verification, interface preferences and browser storage controls.",
    topics: [],
  },
  {
    path: "partner",
    vi: "Chính sách Partner",
    en: "Partner Program",
    viDescription:
      "Điều kiện hợp tác, giảm 20% cho dịch vụ đủ điều kiện và mục tiêu phản hồi ban đầu.",
    enDescription:
      "Cooperation conditions, 20% off eligible services and initial response targets.",
    topics: [],
  },
];
export function PolicyCenter({ locale = "vi" }: { locale?: Locale }) {
  const en = locale === "en";
  const title = en ? "Policy center" : "Trung tâm chính sách";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: `${siteUrl}${en ? "/en" : ""}/policies/`,
    inLanguage: locale,
    dateModified: "2026-11-24",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: documents.length,
      itemListElement: documents.map((doc, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: en ? doc.en : doc.vi,
        url: `${siteUrl}${en ? "/en" : ""}/${doc.path}/`,
      })),
    },
  };
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\u003c"),
        }}
      />
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">
            STA Cloud · {en ? "Terms & policies" : "Điều khoản & chính sách"}
          </p>
          <h1>{title}</h1>
          <p>
            {en
              ? "Seven documents. One place to understand your service, payments, data and support. Choose a document or go directly to a topic below."
              : "7 văn bản tại một nơi để hiểu rõ dịch vụ, thanh toán, dữ liệu và hỗ trợ. Chọn chính sách hoặc đi thẳng đến nội dung bạn cần bên dưới."}
          </p>
          <p className="text-sm">
            {en ? "Reviewed: 24 November 2026" : "Rà soát nội dung: 24/11/2026"}
          </p>
          <ContactLinks />
        </header>
        <aside className="my-8 rounded-xl border border-cyan-300/25 p-5 text-sm leading-7">
          <strong className="text-white">
            {en ? "Service scope" : "Phạm vi áp dụng"}
          </strong>
          <p className="mt-2">
            {en
              ? "These policies apply to STA Cloud services. Oracle Cloud VPS/GPU products introduced by STA Cloud are supplied by ICS and follow the provider’s confirmed conditions. Plan-specific FREE rules and confirmed separate agreements take precedence within their stated scope."
              : "Các chính sách áp dụng cho dịch vụ STA Cloud. VPS/GPU Oracle Cloud được STA Cloud giới thiệu do ICS cung cấp và theo điều kiện được ICS xác nhận. Quy định riêng của nhóm FREE và thỏa thuận riêng đã xác nhận được ưu tiên trong đúng phạm vi áp dụng."}
          </p>
        </aside>
        <nav
          aria-label={en ? "Seven policy documents" : "7 văn bản chính sách"}
          className="policy-directory grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {documents.map((doc, index) => (
            <article key={doc.path} className="service-card p-5 sm:p-6">
              <p className="eyebrow">0{index + 1} / STA CLOUD</p>
              <h2 className="mt-3 text-xl font-bold text-white">
                <a
                  className="inline-flex min-h-12 items-center"
                  href={localizedPath(doc.path, locale)}
                >
                  {en ? doc.en : doc.vi} ↗
                </a>
              </h2>
              <p className="my-3 text-sm leading-7">
                {en ? doc.enDescription : doc.viDescription}
              </p>
              {doc.topics.length > 0 && (
                <ul className="mt-auto border-t border-cyan-300/20 pt-3">
                  {doc.topics.map(([id, label]) => (
                    <li key={id}>
                      <a
                        href={`${localizedPath(doc.path, locale)}#${id}`}
                        className="inline-flex min-h-11 items-center text-xs font-semibold leading-6 text-cyan-200"
                      >
                        {label} →
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </nav>
        <section className="mt-10 max-w-3xl border-t border-cyan-300/20 pt-6">
          <h2 className="section-heading">
            {en ? "Need clarification?" : "Cần làm rõ điều kiện của gói?"}
          </h2>
          <p className="mt-3 text-sm leading-7">
            {en
              ? "Ask before purchasing if you need sustained CPU, high disk I/O, particular ports, backup retention or a specific region. Public map locations and simulated pings do not confirm available inventory or latency."
              : "Hãy hỏi trước khi mua nếu cần CPU tải liên tục, I/O cao, port cụ thể, thời gian giữ backup hoặc region nhất định. Địa điểm và ping mô phỏng trên bản đồ không xác nhận tồn kho hay cam kết độ trễ."}
          </p>
          <a
            href={localizedPath("/pricing/", locale)}
            className="action-link mt-3"
          >
            {en ? "Check hosting plans →" : "Kiểm tra bảng giá hosting →"}
          </a>
        </section>
      </div>
    </SiteShell>
  );
}
