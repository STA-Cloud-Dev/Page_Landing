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

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={sitePath('/terms')} className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0">
            Điều khoản
          </a>
          <a href={sitePath('/privacy')} className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0">
            Quyền riêng tư
          </a>
          <a href={sitePath('/sla')} className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0">
            SLA
          </a>
          <a href={sitePath('/partner')} className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0">
            Partner
          </a>
          <a href={sitePath('/egg')} className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0">
            Eggs
          </a>
          <a
            href={siteConfig.siteUrl}
            className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            href={siteConfig.panelUrl}
            className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal
          </a>
          <a
            href={siteConfig.discordUrl}
            className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord Ticket
          </a>
          <span className="inline-flex min-h-11 items-center text-cyan-100/70 sm:min-h-0">Group Chat:</span>
          <a
            href={siteConfig.zaloUrl}
            className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zalo
          </a>
          <a
            href={siteConfig.messengerUrl}
            className="inline-flex min-h-11 items-center transition hover:text-white sm:min-h-0"
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
