"use client";
import { CreditRateNotice } from '@/components/shared/credit-rate-notice';
import { useMemo, useState } from "react";
import { homeConfig } from "@/components/home/content";
import { hostingPlans } from "@/lib/i18n/plans";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
function planGroup(plan: ReturnType<typeof hostingPlans>[number]) {
  return ["free-dev", "free-gaming-ai"].includes(plan.id)
    ? "free"
    : plan.name.startsWith("Dev ")
      ? "dev"
      : plan.category === "linux"
        ? "linux"
        : plan.category === "game"
          ? "game"
          : "other";
}
export function PricingCatalog() {
  const { locale, t } = useLocale();
  const en = locale === "en";
  const plans = useMemo(() => hostingPlans(locale), [locale]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const filters = [
    ["all", t.all],
    ["free", en ? "Free Forever" : "Miễn phí"],
    ["dev", "Dev"],
    ["linux", "Linux Egg"],
    ["game", en ? "Game servers" : "Game server"],
    ["other", en ? "Community & beta" : "Cộng đồng & Beta"],
  ];
  const visible = plans.filter(
    (plan) =>
      (filter === "all" || planGroup(plan) === filter) &&
      `${plan.name} ${plan.specs.join(" ")}`
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase()),
  );
  const compared = plans.filter((plan) => selected.includes(plan.id));
  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev,
    );
  const table = (items: typeof plans) => (
    <div className="table-scroll">
      <table className="comparison-table">
        <caption className="p-4 text-left">
          {en
            ? "Published price and resources per plan cycle."
            : "Giá và tài nguyên theo chu kỳ công bố của từng gói."}
        </caption>
        <thead>
          <tr>
            {[
              en ? "Plan" : "Gói",
              en ? "Price / cycle" : "Giá / chu kỳ",
              "CPU",
              "RAM",
              t.storage,
            ].map((label) => (
              <th key={label} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((plan) => (
            <tr key={plan.id}>
              <th scope="row">{plan.name}</th>
              <td>
                {plan.price} / {plan.period}
              </td>
              {[0, 1, 2].map((i) => (
                <td key={i}>
                  {plan.id === "openclaw" ? "—" : plan.specs[i] || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <section className="py-8" aria-label={t.pricing}>
      <CreditRateNotice locale={locale} />
      {selected.length > 0 && (
        <div className="comparison-tray">
          <span className="text-sm">
            {selected.length}/3 {en ? "plans selected" : "gói đã chọn"}
          </span>
          <a href="#selected-comparison" className="button-primary">
            {t.compare}
          </a>
          <button
            className="button-secondary"
            type="button"
            onClick={() => setSelected([])}
          >
            {en ? "Clear selection" : "Bỏ chọn"}
          </button>
        </div>
      )}
      <div className="catalog-layout mt-4">
        <aside className="catalog-filters">
          <label className="eyebrow" htmlFor="hosting-search">
            {t.search}
          </label>
          <input
            id="hosting-search"
            type="search"
            className="catalog-search mt-3"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={en ? "Plan, RAM, CPU…" : "Tên gói, RAM, CPU…"}
          />
          <div className="filter-chips mt-4" aria-label={t.filter}>
            {filters.map(([id, label]) => (
              <button
                key={id}
                className="filter-chip"
                type="button"
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
                <span className="text-xs">
                  {
                    plans.filter((p) => id === "all" || planGroup(p) === id)
                      .length
                  }
                </span>
              </button>
            ))}
          </div>
        </aside>
        <div className="min-w-0">
          <p className="catalog-count" role="status">
            {visible.length}{" "}
            {en
              ? "matching plans. Confirm availability on the Portal."
              : "gói phù hợp. Kiểm tra slot trên Portal."}
          </p>
          <div className="catalog-grid">
            {visible.map((plan) => (
              <article
                key={plan.id}
                id={plan.id}
                className="service-card scroll-mt-28"
              >
                <div className="service-card-band">
                  <p className="eyebrow">{plan.badge}</p>
                  <h2 className="mt-3 text-xl font-bold text-white">
                    {plan.name}
                  </h2>
                </div>
                <div className="service-card-body">
                  <p className="plan-price">{plan.price}</p>
                  <p className="mt-1 text-xs text-sky-200">/ {plan.period}</p>
                  <dl className="my-5 grid grid-cols-2 gap-3">
                    {plan.specs.slice(0, 3).map((spec, i) => (
                      <div
                        key={spec}
                        className={`spec-tile ${i === 2 ? "col-span-2" : ""}`}
                      >
                        <dt>
                          {
                            (plan.id === "openclaw"
                              ? [
                                  en ? "Feature" : "Tính năng",
                                  en ? "Regions" : "Khu vực",
                                  en ? "Workload" : "Môi trường",
                                ]
                              : ["CPU", "RAM", t.storage])[i]
                          }
                        </dt>
                        <dd>{spec}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mb-4 text-sm leading-7">{plan.description}</p>
                  <details className="mb-5 border-t border-cyan-300/20 pt-2">
                    <summary className="flex min-h-12 cursor-pointer items-center text-sm font-semibold text-cyan-200">
                      {t.details}
                    </summary>
                    <ul className="my-3 space-y-2 text-xs leading-6">
                      {plan.specs.slice(3).map((spec) => (
                        <li key={spec}>• {spec}</li>
                      ))}
                    </ul>
                    <p className="text-xs leading-6">
                      {plan.warning || plan.upsizeNotes}
                    </p>
                  </details>
                  <label className="mb-4 flex min-h-12 cursor-pointer items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={selected.includes(plan.id)}
                      disabled={
                        selected.length >= 3 && !selected.includes(plan.id)
                      }
                      onChange={() => toggle(plan.id)}
                      className="h-5 w-5 accent-cyan-300"
                    />
                    {t.compare}
                    <span className="sr-only"> {plan.name}</span>
                  </label>
                  <a
                    href={
                      ["openclaw", "proxy-hk"].includes(plan.id)
                        ? homeConfig.discordUrl
                        : `${homeConfig.panelUrl}store/create`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary mt-auto"
                  >
                    {plan.status === "paused"
                      ? en
                        ? "Ask about availability"
                        : "Hỏi tình trạng qua ticket"
                      : plan.ctaText}
                  </a>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && <p className="py-10">{t.empty}</p>}
          <details className="mt-6 rounded-xl border border-cyan-300/25 p-4">
            <summary className="flex min-h-12 cursor-pointer items-center text-sm font-semibold text-cyan-200">
              {en ? "Compare all matching plans" : "Mở bảng so sánh nhanh"}
            </summary>
            {table(visible)}
          </details>
          {compared.length > 0 && (
            <section id="selected-comparison" className="scroll-mt-44 py-8">
              <h2 className="section-heading mb-4">
                {en ? "Your selected plans" : "So sánh gói đã chọn"}
              </h2>
              <p className="mb-3 text-sm">
                {en
                  ? "On small screens, swipe the table to see all specifications."
                  : "Trên màn hình nhỏ, vuốt bảng để xem đầy đủ thông số."}
              </p>
              {table(compared)}
            </section>
          )}
        </div>
      </div>
      <p className="mt-8 rounded-xl border border-cyan-300/25 p-5 text-sm leading-7">
        {en
          ? "Oracle Cloud VPS/GPU products are supplied by ICS and have separate prices and policies."
          : "VPS và GPU Oracle Cloud do ICS cung cấp, có bảng giá và chính sách riêng."}{" "}
        <a className="action-link" href={localizedPath("/vps/", locale)}>
          {en ? "View Oracle VPS/GPU →" : "Xem Oracle VPS/GPU →"}
        </a>
      </p>
    </section>
  );
}
