import type { Locale } from '@/lib/i18n/config';
// Portal Credit conversion published by STA Cloud on 17 November 2026.
export const creditRates = { vndPerCredit: 1, creditsPerUsd: 25000 } as const;
export function creditRateLabel(locale: Locale) {
  return locale === 'en'
    ? `US$1 = ${creditRates.creditsPerUsd.toLocaleString('en-US')} Credit`
    : `1 Credit = ${creditRates.vndPerCredit} VNĐ`;
}
