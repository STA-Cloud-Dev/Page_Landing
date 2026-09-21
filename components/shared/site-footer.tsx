import { homeConfig } from '@/components/home/content';
import { sitePath } from '@/lib/site-path';

export function SiteFooter() {
  return (
    <footer className="px-4 pb-20 pt-10 sm:px-6 sm:pb-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/30 bg-[#06335a]/90 px-6 py-8 shadow-2xl backdrop-blur-2xl sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href={sitePath('/')} className="group inline-flex flex-col gap-2">
              <img
                src={sitePath('/picture/logoSTACloud.png')}
                alt={homeConfig.logoAlt}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.35)] transition group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
              />
              <p className="text-xs text-cyan-200 font-semibold">Ocean Cloud & Community Hosting</p>
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-sky-100 sm:text-sm">
              Hệ sinh thái máy chủ game, VPS OVH Singapore, OpenClaw Beta và các gói hosting cộng đồng minh bạch chi phí.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • SLA mục tiêu 99%+</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              ⚡ Dịch Vụ
            </p>
            <div className="mt-3 text-sm text-sky-100 sm:mt-4 sm:space-y-2.5">
              <a href={sitePath('/#plans')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Bảng giá & Gói dịch vụ
              </a>
              <a href={sitePath('/#benefits')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Ưu điểm & Hạ tầng Anti-DDoS
              </a>
              <a href={sitePath('/egg')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Kho Game & Softwares Eggs
              </a>
              <a href={sitePath('/free-server')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Free Server Community
              </a>
              <a
                href={homeConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0"
              >
                STACloud Portal Panel
              </a>
            </div>
          </div>

          {/* Column 2: Community & Support */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              💬 Hỗ Trợ & Chat
            </p>
            <div className="mt-3 text-sm text-sky-100 sm:mt-4 sm:space-y-2.5">
              <a
                href={homeConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-1.5 transition hover:text-cyan-200 sm:min-h-0"
              >
                <span>Discord Support Ticket</span>
              </a>
              <a
                href={homeConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-1.5 transition hover:text-cyan-200 sm:min-h-0"
              >
                <span>Zalo Community Group</span>
              </a>
              <a
                href={homeConfig.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-1.5 transition hover:text-cyan-200 sm:min-h-0"
              >
                <span>Messenger Group</span>
              </a>
              <a href={sitePath('/#faq')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Câu hỏi thường gặp (FAQ)
              </a>
            </div>
          </div>

          {/* Column 3: Legal & Policies */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              🛡️ Chính Sách & SLA
            </p>
            <div className="mt-3 text-sm text-sky-100 sm:mt-4 sm:space-y-2.5">
              <a href={sitePath('/partner')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Chương trình Partner (Giảm 20%)
              </a>
              <a href={sitePath('/sla')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Cam kết chất lượng SLA
              </a>
              <a href={sitePath('/terms')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Điều khoản sử dụng
              </a>
              <a href={sitePath('/privacy')} className="flex min-h-11 items-center transition hover:text-cyan-200 sm:min-h-0">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-cyan-300/20 pt-6 text-center text-xs text-sky-200/80 sm:flex-row sm:text-left">
          <p>© 2018 - 2026 STACloud. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-[11px] font-mono text-cyan-300">
            STACloud Infrastructure &bull; High Performance Cloud & Game Hosting
          </p>
        </div>
      </div>
    </footer>
  );
}
