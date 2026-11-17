"use client";
import {
  Home,
  Tags,
  LayoutDashboard,
  Menu,
  MessagesSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
interface MobileDockProps {
  panelUrl: string;
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
  onMenu?: () => void;
  onSupport?: () => void;
}
export function MobileDock({
  panelUrl,
  discordUrl,
  onMenu,
  onSupport,
}: MobileDockProps) {
  const { locale, t } = useLocale();
  const path = usePathname();
  const linkClass = "dock-item";
  return (
    <nav
      className="mobile-dock fixed inset-x-3 z-40 lg:hidden"
      aria-label={t.navigation}
    >
      <div className="mx-auto grid max-w-lg grid-cols-5 gap-1 rounded-2xl border border-cyan-300/30 bg-[#06243d] p-2 shadow-lg">
        <a
          className={linkClass}
          href={localizedPath("/", locale)}
          aria-current={
            path.replace(/\/$/, "") ===
            localizedPath("/", locale).replace(/\/$/, "")
              ? "page"
              : undefined
          }
        >
          <Home size={20} />
          {t.home}
        </a>
        <a
          className={linkClass}
          href={localizedPath("/pricing/", locale)}
          aria-current={path.includes("/pricing") ? "page" : undefined}
        >
          <Tags size={20} />
          {t.pricing}
        </a>
        <a
          className={`${linkClass} dock-portal`}
          href={panelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LayoutDashboard size={20} />
          Portal
        </a>
        {onSupport ? (
          <button
            className={linkClass}
            type="button"
            onClick={onSupport}
            aria-haspopup="dialog"
          >
            <MessagesSquare size={20} />
            {t.support}
          </button>
        ) : (
          <a className={linkClass} href={discordUrl}>
            <MessagesSquare size={20} />
            {t.support}
          </a>
        )}
        {onMenu ? (
          <button
            className={linkClass}
            type="button"
            onClick={onMenu}
            aria-haspopup="dialog"
          >
            <Menu size={20} />
            {t.menu}
          </button>
        ) : (
          <a className={linkClass} href={localizedPath("/egg/", locale)}>
            <Menu size={20} />
            {t.egg}
          </a>
        )}
      </div>
    </nav>
  );
}
