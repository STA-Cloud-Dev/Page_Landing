import type { Locale } from '@/lib/i18n/config';
import { creditRateLabel } from '@/lib/credit-rate';
export function CreditRateNotice({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return <p className={compact ? 'mt-3 text-sm leading-7 text-cyan-200' : 'mb-6 rounded-xl border border-cyan-300/25 bg-cyan-300/5 px-4 py-3 text-sm leading-7 text-sky-100'}>
    <span>{locale === 'en' ? 'STA Cloud Portal Credit conversion: ' : 'Giá trị quy đổi Credit trên Portal STA Cloud: '}</span>
    <strong className="font-bold text-cyan-200">{creditRateLabel(locale)}</strong>
  </p>;
}
