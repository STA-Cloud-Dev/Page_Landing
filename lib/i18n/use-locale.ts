"use client";
import { usePathname } from "next/navigation";
import { dictionaries, type Locale } from "./config";
export function useLocale() {
  const path = usePathname();
  const locale: Locale = /(?:^|\/)en(?:\/|$)/.test(path) ? "en" : "vi";
  return { locale, t: dictionaries[locale] };
}
