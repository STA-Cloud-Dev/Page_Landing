"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteShell } from "@/components/shared/site-shell";
import { ContactLinks } from "@/components/shared/contact-links";
import { useLocale } from "@/lib/i18n/use-locale";
import { eggGroups, eggTotals } from "./content";
import { EggIcon } from "./egg-icon";
const englishSubtitles: Record<string, string> = {
  "Website Egg":
    "PHP websites, web applications and MySQL/MariaDB administration",
  AI: "AI workloads and beta applications",
  "Code Languages": "Application and development runtimes",
  Linux: "Linux distributions for paid services",
  Windows: "Windows desktop and Windows Server environments",
  Minecraft: "Minecraft Java, Bedrock and proxies",
  Proxy: "Minecraft proxy and protection runtimes",
  "Voice Servers": "Voice and music server runtimes",
};
export function EggPage() {
  const { locale, t } = useLocale();
  const en = locale === "en";
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const search = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      const el = event.target as HTMLElement;
      if (
        event.key === "/" &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !el.closest('input,textarea,[contenteditable="true"]')
      ) {
        event.preventDefault();
        search.current?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);
  const groups = useMemo(
    () =>
      eggGroups
        .filter((g) => filter === "all" || g.title === filter)
        .map((g) => ({
          ...g,
          items: g.items
            .map((item) => {
              const q = query.trim().toLowerCase();
              if (!q || item.name.toLowerCase().includes(q)) return item;
              const variants = item.variants?.filter((v) =>
                v.toLowerCase().includes(q),
              );
              return variants?.length ? { ...item, variants } : null;
            })
            .filter((x): x is NonNullable<typeof x> => x !== null),
        }))
        .filter((g) => g.items.length),
    [filter, query],
  );
  const count = groups.reduce(
    (sum, g) =>
      sum + g.items.reduce((n, item) => n + (item.variants?.length || 1), 0),
    0,
  );
  return (
    <SiteShell>
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">STA Cloud · {t.catalog}</p>
          <h1>
            {en
              ? "Your runtime. Ready to deploy."
              : "Chọn môi trường. Sẵn sàng triển khai."}
          </h1>
          <p>
            {en
              ? "Find website, bot and game server environments supported by STA Cloud. Availability depends on the chosen plan. Windows environments marked Coming Soon are not yet available."
              : "Tìm môi trường website, bot và game server được STA Cloud hỗ trợ. Khả năng sử dụng tùy gói và slot; các môi trường Windows ghi Coming Soon chưa được mở bán."}
          </p>
          <p className="text-sm">
            {eggTotals.groups} {en ? "groups" : "nhóm"} · {eggTotals.items}{" "}
            {en ? "environments and variants" : "môi trường và phiên bản"}
          </p>
          <ContactLinks />
        </header>
        <section className="catalog-layout mt-8" aria-label={t.egg}>
          <aside className="catalog-filters">
            <label className="eyebrow" htmlFor="egg-search">
              {t.search} <span className="hidden lg:inline">/</span>
            </label>
            <input
              id="egg-search"
              ref={search}
              className="catalog-search mt-3"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={
                en
                  ? "WordPress, Python, Minecraft…"
                  : "WordPress, Python, Minecraft…"
              }
              type="search"
            />
            <nav className="filter-chips mt-4" aria-label={t.filter}>
              {[
                { title: "all", label: t.all },
                ...eggGroups.map((g) => ({ title: g.title, label: g.title })),
              ].map((g) => (
                <button
                  className="filter-chip"
                  type="button"
                  key={g.title}
                  aria-pressed={filter === g.title}
                  onClick={() => setFilter(g.title)}
                >
                  {g.label}
                </button>
              ))}
            </nav>
          </aside>
          <div className="min-w-0">
            <p className="catalog-count" role="status">
              {count} {t.results}
            </p>
            <div className="grid gap-8">
              {groups.map((g) => (
                <section
                  key={g.title}
                  aria-labelledby={`egg-${g.title.replaceAll(" ", "-")}`}
                >
                  <div className="mb-4 border-b border-cyan-300/20 pb-4">
                    <h2
                      className="section-heading"
                      id={`egg-${g.title.replaceAll(" ", "-")}`}
                    >
                      {g.title}{" "}
                      {g.status && (
                        <span className="ml-2 text-sm text-cyan-200">
                          {g.status}
                        </span>
                      )}
                    </h2>
                    <p className="mt-2 text-sm leading-7">
                      {en ? englishSubtitles[g.title] : g.subtitle}
                    </p>
                  </div>
                  <div className="catalog-grid">
                    {g.items.map((item) => (
                      <article className="service-card p-4" key={item.name}>
                        <div className="flex items-center gap-3">
                          <EggIcon name={item.name} group={g.title} />
                          <h3 className="font-bold text-white">{item.name}</h3>
                        </div>
                        {item.variants && (
                          <details className="mt-3">
                            <summary className="flex min-h-12 cursor-pointer items-center text-sm font-semibold text-cyan-200">
                              {item.variants.length}{" "}
                              {en ? "versions" : "phiên bản"} · {t.more}
                            </summary>
                            <ul className="space-y-2 border-t border-cyan-300/15 pt-3 text-sm">
                              {item.variants.map((v) => (
                                <li key={v} className="flex items-center gap-2">
                                  <EggIcon name={v} group={g.title} small />
                                  {v}
                                </li>
                              ))}
                            </ul>
                          </details>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            {!groups.length && (
              <div className="py-12">
                <p>{t.empty}</p>
                <button
                  className="button-secondary mt-4"
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setFilter("all");
                  }}
                >
                  {t.clear}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
