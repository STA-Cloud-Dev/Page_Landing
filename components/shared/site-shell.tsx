"use client";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { homeConfig } from "@/components/home/content";
import { MobileDock } from "@/components/ui/mobile-dock";
import { MobileDrawer } from "@/components/ui/mobile-drawer";
import { SiteFooter } from "./site-footer";
import { ContactLinks } from "./contact-links";
import { LanguageSwitcher } from "./language-switcher";
import { sitePath } from "@/lib/site-path";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
import { LandingDepthEffects } from "@/components/visual/landing-depth-effects";
import { AmbientParticles } from "@/components/visual/ambient-particles";
export function SiteShell({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const [sheet, setSheet] = useState<"menu" | "support" | null>(null);
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const navigation = [
    ["/", t.home],
    ["/pricing/", t.pricing],
    ["/free/", t.free],
    ["/vps/", t.vps],
    ["/network/", t.network],
    ["/egg/", t.egg],
  ];
  return (
    <div
      className={`${home ? "cosmic-home" : "cosmic-subpage"} site-motion relative min-h-screen pt-20 text-sky-100`}
    >
      <div className="site-atmosphere" aria-hidden="true" />
      <AmbientParticles />
      <header className="global-header landing-header fixed inset-x-0 top-0 z-40 h-20">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
          <a
            href={localizedPath("/", locale)}
            aria-label={`STA Cloud — ${t.home}`}
            className="shrink-0"
          >
            <img
              src={sitePath("/picture/logoSTACloud-204.webp")}
              width={204}
              height={70}
              alt="STACloud"
              className="h-9 w-auto sm:h-11"
              decoding="async"
            />
          </a>
          <nav
            aria-label={t.navigation}
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map(([path, label]) => (
              <a
                key={path}
                href={localizedPath(path, locale)}
                aria-current={
                  pathname.replace(/\/$/, "") ===
                  localizedPath(path, locale).replace(/\/$/, "")
                    ? "page"
                    : undefined
                }
                className="nav-link"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href={homeConfig.panelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary header-portal"
            >
              {t.portal} ↗
            </a>
            <button
              type="button"
              onClick={() => setSheet("menu")}
              aria-label={t.menu}
              aria-haspopup="dialog"
              className="icon-button lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      <div className="landing-depth-content relative z-10">
        <LandingDepthEffects />
        {children}
      </div>
      <SiteFooter />
      <ContactLinks floating />
      <MobileDrawer
        isOpen={sheet !== null}
        mode={sheet || "menu"}
        onClose={() => setSheet(null)}
        panelUrl={homeConfig.panelUrl}
        discordUrl={homeConfig.discordUrl}
        zaloUrl={homeConfig.zaloUrl}
        messengerUrl={homeConfig.messengerUrl}
      />
      <MobileDock
        panelUrl={homeConfig.panelUrl}
        discordUrl={homeConfig.discordUrl}
        zaloUrl={homeConfig.zaloUrl}
        messengerUrl={homeConfig.messengerUrl}
        onMenu={() => setSheet("menu")}
        onSupport={() => setSheet("support")}
      />
    </div>
  );
}
