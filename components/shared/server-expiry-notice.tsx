import policy from '@/lib/i18n/dictionaries/server-expiry.json';
import type { Locale } from '@/lib/i18n/config';
export function ServerExpiryNotice({ locale }: { locale: Locale }) {
  const content = policy[locale];
  return <aside className="my-6 rounded-xl border border-amber-200/30 bg-amber-200/5 p-4 text-sm leading-7" aria-label={content.title}>
    <h2 className="font-bold text-white">{content.title}</h2>
    <p className="mt-2">{content.text}</p>
    <p className="mt-2">{content.backup}</p>
  </aside>;
}
