import { sitePath } from '@/lib/site-path';

export const policyLinks = [
  { path: '/terms', label: 'Điều khoản dịch vụ' },
  { path: '/privacy', label: 'Quyền riêng tư' },
  { path: '/sla', label: 'Cam kết SLA' },
  { path: '/refund', label: 'Hoàn Credit' },
  { path: '/security', label: 'Bảo mật máy chủ' },
  { path: '/cookies', label: 'Chính sách Cookie' },
] as const;

export function PolicyLinks({ stacked = false }: { stacked?: boolean }) {
  return <nav aria-label="Chính sách dịch vụ" className={stacked ? 'flex flex-col gap-y-1' : 'flex flex-wrap gap-x-5 gap-y-1'}>
    {policyLinks.map((link) => <a key={link.path} href={sitePath(link.path)} className="inline-flex min-h-11 items-center text-sm text-sky-100 underline-offset-4 hover:text-cyan-200 hover:underline sm:min-h-0">{link.label}</a>)}
  </nav>;
}
