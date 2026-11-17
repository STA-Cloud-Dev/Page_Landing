"use client";
import { CreditRateNotice } from './credit-rate-notice';
import { homeConfig } from "@/components/home/content";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./language-switcher";
export function SiteFooter() {
  const { locale, t } = useLocale();
  const groups = [
    {
      title: t.services,
      links: [
        ["pricing", t.pricing],
        ["free", t.free],
        ["vps", t.vps],
        ["egg", t.egg],
        ["network", t.network],
      ],
    },
    {
      title: t.policies,
      links: [
        ["terms", t.terms],
        ["privacy", t.privacy],
        ["sla", t.sla],
        ["refund", t.refund],
        ["security", t.security],
        ["cookies", t.cookies],
      ],
    },
    {
      title: "STA Cloud",
      links: [
        ["about", t.about],
        ["history", t.history],
        ["partner", t.partner],
      ],
    },
  ];
  return (
    <footer className="site-footer px-4 pb-28 pt-12 sm:px-6 xl:pb-12">
      <div className="mx-auto max-w-7xl border-t border-cyan-300/25 pt-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1.2fr_1fr]">
          <div>
            <a
              className="text-xl font-bold text-white"
              href={localizedPath("/", locale)}
            >
              STA<span className="text-cyan-200"> CLOUD</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7">{t.footerSummary}</p>
            <CreditRateNotice locale={locale} compact />
            <a
              href={localizedPath("/sla/", locale)}
              className="mt-3 block text-xs leading-6 text-cyan-200"
            >
              {t.footerSla}
            </a>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="eyebrow">{group.title}</h2>
              <nav className="mt-3 flex flex-col">
                {group.links.map(([path, label]) => (
                  <a
                    key={path}
                    href={localizedPath(path, locale)}
                    className="flex min-h-11 items-center text-sm hover:text-cyan-200"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-cyan-300/20 py-5 text-sm">
          {[
            ["Discord / Ticket", homeConfig.discordUrl],
            ["Zalo", homeConfig.zaloUrl],
            ["Messenger", homeConfig.messengerUrl],
            ["Portal", homeConfig.panelUrl],
          ].map(([label, href]) => (
            <a
              key={href}
              className="inline-flex min-h-11 items-center text-cyan-200"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ↗
            </a>
          ))}
          <p className="w-full text-xs text-sky-200">
            © 2018–2026 STACloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
