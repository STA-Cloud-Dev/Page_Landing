import { ArrowUpRight, MessagesSquare, Send, MessageCircle } from 'lucide-react';
import { homeConfig } from '@/components/home/content';

export function ContactLinks({ floating = false }: { floating?: boolean }) {
  const links = [
    { name: 'Discord', href: homeConfig.discordUrl, Icon: MessagesSquare },
    { name: 'Zalo', href: homeConfig.zaloUrl, Icon: MessageCircle },
    { name: 'Messenger', href: homeConfig.messengerUrl, Icon: Send },
  ];
  const content = <nav className={floating ? 'contact-floating-links' : 'hero-contact-links'} aria-label={floating ? 'Liên hệ nhanh' : 'Kết nối với STACloud'}>
    {!floating && <span className="contact-caption"><span className="community-online" aria-hidden="true" /> CỘNG ĐỒNG & HỖ TRỢ TRỰC TUYẾN</span>}
    {links.map(({ name, href, Icon }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`contact-link contact-${name.toLowerCase()}`}>
      <Icon size={17} aria-hidden="true" /><span>{name}</span>{!floating && <ArrowUpRight size={13} aria-hidden="true" />}
    </a>)}
  </nav>;
  return floating ? <details className="contact-floating"><summary><MessagesSquare size={20} aria-hidden="true" /><span>Liên hệ</span></summary>{content}</details> : content;
}
