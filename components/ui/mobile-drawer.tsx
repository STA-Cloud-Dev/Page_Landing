"use client";
import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/use-locale";
import { localizedPath } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  panelUrl: string;
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
  mode?: "menu" | "support";
}
export function MobileDrawer({
  isOpen,
  onClose,
  panelUrl,
  discordUrl,
  zaloUrl,
  messengerUrl,
  mode = "menu",
}: MobileDrawerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const { locale, t } = useLocale();
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (isOpen) {
      el.showModal();
      const overflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        el.close();
        document.body.style.overflow = overflow;
      };
    }
  }, [isOpen]);
  const pages = [
    ["/", t.home],
    ["/pricing/", t.pricing],
    ["/free/", t.free],
    ["/vps/", t.vps],
    ["/network/", t.network],
    ["/egg/", t.egg],
    ["/about/", t.about],
    ["/history/", t.history],
  ];
  const policies = [
    ["terms", t.terms],
    ["privacy", t.privacy],
    ["sla", t.sla],
    ["refund", t.refund],
    ["security", t.security],
    ["cookies", t.cookies],
    ["partner", t.partner],
  ];
  return (
    <dialog
      ref={dialog}
      className="mobile-sheet"
      aria-labelledby="sheet-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sheet-panel">
        <div
          className="sheet-handle"
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientY;
          }}
          onTouchEnd={(event) => {
            if (
              touchStart.current !== null &&
              event.changedTouches[0].clientY - touchStart.current > 60
            )
              onClose();
            touchStart.current = null;
          }}
          aria-hidden="true"
        >
          <span />
        </div>
        <div className="flex items-center justify-between gap-3 border-b border-cyan-300/20 pb-4">
          <h2 id="sheet-title" className="text-xl font-bold text-white">
            {mode === "support" ? t.support : t.menu}
          </h2>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label={t.close}
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="sheet-scroll">
          {mode === "menu" && (
            <nav
              className="my-4 grid grid-cols-2 gap-2"
              aria-label={t.navigation}
            >
              {pages.map(([path, label]) => (
                <a
                  key={path}
                  className="sheet-link"
                  href={localizedPath(path, locale)}
                  onClick={onClose}
                >
                  {label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </nav>
          )}
          <p className="eyebrow mt-5">{t.contact}</p>
          <div className="my-3 grid gap-2 sm:grid-cols-3">
            {[
              ["Discord / Ticket", discordUrl],
              ["Zalo", zaloUrl],
              ["Messenger", messengerUrl],
            ].map(([label, href]) => (
              <a
                className="sheet-link"
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
          {mode === "menu" && (
            <>
              <p className="eyebrow mt-5">{t.policies}</p>
              <nav className="my-3 grid grid-cols-2 gap-2">
                {policies.map(([path, label]) => (
                  <a
                    className="flex min-h-12 items-center text-sm text-sky-100"
                    key={path}
                    href={localizedPath(path, locale)}
                    onClick={onClose}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </>
          )}
        </div>
        <a
          className="button-primary mt-4 w-full"
          href={panelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.portal} ↗
        </a>
      </div>
    </dialog>
  );
}
