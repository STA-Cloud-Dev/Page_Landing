import vi from "./dictionaries/vi.json";
import en from "./dictionaries/en.json";
import { sitePath } from "@/lib/site-path";
export type Locale = "vi" | "en";
export const dictionaries = { vi, en };
export const publicPages = [
  "",
  "pricing",
  "free",
  "vps",
  "network",
  "egg",
  "about",
  "history",
  "partner",
  "terms",
  "privacy",
  "sla",
  "refund",
  "security",
  "cookies",
  "policies",
] as const;
export type PublicPage = (typeof publicPages)[number];
export function localizedPath(path: string, locale: Locale) {
  return sitePath(
    `${locale === "en" ? "/en" : ""}${path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`}`,
  );
}
export function pagePath(page: string, locale: Locale) {
  return `${locale === "en" ? "/en" : ""}/${page ? `${page}/` : ""}`;
}
