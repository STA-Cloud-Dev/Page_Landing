"use client";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
import { basePath } from "@/lib/site-path";
export function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const pathname = usePathname()
    .replace(basePath, "")
    .replace(/^\/en(?:\/|$)/, "/");
  return (
    <nav className="language-switcher" aria-label={t.language}>
      {(["vi", "en"] as const).map((lang) => (
        <a
          key={lang}
          href={localizedPath(pathname, lang)}
          hrefLang={lang}
          lang={lang}
          aria-current={locale === lang ? "page" : undefined}
          onClick={(event) => {
            if (window.location.hash)
              event.currentTarget.href += window.location.hash;
          }}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
