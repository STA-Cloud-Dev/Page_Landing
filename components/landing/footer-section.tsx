import { siteConfig } from './content';
import { sitePath } from '@/lib/site-path';

export function FooterSection() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 overflow-hidden rounded-lg border border-cyan-300/15 bg-black/65 px-6 py-6 text-sm text-slate-400 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <span className="card-3d-badge card-3d-badge--footer" aria-hidden="true">
          <span />
        </span>
        <div className="relative">
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1">{siteConfig.copyrightText}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={sitePath('/terms')} className="transition hover:text-white">
            Điều khoản
          </a>
          <a href={sitePath('/privacy')} className="transition hover:text-white">
            Quyền riêng tư
          </a>
          <a href={sitePath('/sla')} className="transition hover:text-white">
            SLA
          </a>
          <a href={sitePath('/partner')} className="transition hover:text-white">
            Partner
          </a>
          <a href={sitePath('/egg')} className="transition hover:text-white">
            Eggs
          </a>
          <a
            href={siteConfig.siteUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            href={siteConfig.panelUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal
          </a>
          <a
            href={siteConfig.discordUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Ticket
          </a>
          <span className="text-cyan-100/70">Group Chat:</span>
          <a
            href={siteConfig.zaloUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zalo
          </a>
          <a
            href={siteConfig.messengerUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Messenger
          </a>
        </div>
      </div>
    </footer>
  );
}
