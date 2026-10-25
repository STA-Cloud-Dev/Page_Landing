'use client';

import { Home, Tags, LayoutDashboard, Blocks, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { sitePath } from '@/lib/site-path';

interface MobileDockProps {
  panelUrl: string;
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
}

export function MobileDock({ panelUrl, discordUrl }: MobileDockProps) {
  const pathname = usePathname();
  const items = [
    { label: 'Trang chủ', href: sitePath('/'), icon: Home, active: pathname === '/' },
    { label: 'Bảng giá', href: sitePath('/#plans'), icon: Tags },
    { label: 'Portal', href: panelUrl, icon: LayoutDashboard, external: true, primary: true },
    { label: 'Templates', href: sitePath('/egg'), icon: Blocks, active: pathname === '/egg' },
    { label: 'Hỗ trợ', href: discordUrl, icon: MessageCircle, external: true },
  ];

  return <nav aria-label="Lối tắt di động" className="mobile-dock fixed inset-x-3 z-40 lg:hidden">
    <div className="mx-auto grid max-w-lg grid-cols-5 gap-1 rounded-xl border border-cyan-300/30 bg-[#06243d] p-2 shadow-lg">
      {items.map(({ label, href, icon: Icon, active, primary, external }) => (
        <a key={label} href={href} aria-current={active ? 'page' : undefined}
          target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          className={`flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[11px] font-semibold md:min-h-11 ${primary ? 'bg-cyan-300 text-[#031c34]' : active ? 'bg-white/10 text-cyan-200' : 'text-sky-100 hover:bg-white/10'}`}>
          <Icon size={20} aria-hidden="true" />{label}
        </a>
      ))}
    </div>
  </nav>;
}
