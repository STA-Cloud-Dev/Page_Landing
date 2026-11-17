import { SiteShell } from "@/components/shared/site-shell";
import { ContactLinks } from "@/components/shared/contact-links";
import type { LegalSection } from "./legal-content";
import { localizedPath, type Locale, dictionaries } from "@/lib/i18n/config";
type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  locale?: Locale;
};
export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
  locale = "vi",
}: Props) {
  const en = locale === "en";
  const t = dictionaries[locale];
  return (
    <SiteShell>
      <div className="page-container">
        <header className="page-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p className="text-xs">
            {en ? "Updated" : "Cập nhật"}: {lastUpdated}
          </p>
          <ContactLinks />
        </header>
        <div className="legal-layout">
          <aside className="legal-toc">
            <details open>
              <summary className="flex min-h-12 cursor-pointer items-center font-semibold text-cyan-200">
                {en ? "On this page" : "Mục lục văn bản"}
              </summary>
              <nav className="flex flex-col">
                {sections.map((s, i) => (
                  <a
                    key={s.title}
                    href={`#muc-${i + 1}`}
                    className="flex min-h-11 items-center py-2 text-sm"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </details>
            <a
              className="action-link mt-3"
              href={localizedPath("/terms/", locale)}
            >
              {t.terms}
            </a>
          </aside>
          <div className="min-w-0">
            {sections.map((s, i) => (
              <article
                className="legal-article"
                id={`muc-${i + 1}`}
                key={s.title}
              >
                <h2>{s.title}</h2>
                {s.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.subsections?.map((sub) => (
                  <section key={sub.title}>
                    <h3>{sub.title}</h3>
                    {sub.paragraphs?.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {sub.bullets && (
                      <ul>
                        {sub.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
