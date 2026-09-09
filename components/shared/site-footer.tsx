import { homeConfig } from '@/components/home/content';

export function SiteFooter() {
  return (
    <footer className="px-4 pb-20 pt-10 sm:px-6 sm:pb-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/30 bg-[#06335a]/90 px-6 py-8 shadow-2xl backdrop-blur-2xl sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/40 bg-black/60 p-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition group-hover:border-cyan-200">
                <img
                  src="/picture/logoSTACloud.png"
                  alt={homeConfig.logoAlt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition">
                  {homeConfig.name}
                </span>
                <p className="text-xs text-cyan-200">Ocean Cloud & Community Hosting</p>
              </div>
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-sky-100 sm:text-sm">
              Hệ sinh thái máy chủ game, VPS OVH Singapore, OpenClaw Beta và các gói hosting cộng đồng minh bạch chi phí.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (100% Uptime)</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              ⚡ Dịch Vụ
            </p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-sky-100">
              <a href="/#plans" className="block transition hover:text-cyan-200">
                Bảng giá & Gói dịch vụ
              </a>
              <a href="/#calculator" className="block transition hover:text-cyan-200">
                Tùy biến cấu hình (Max 64C / 128G)
              </a>
              <a href="/egg" className="block transition hover:text-cyan-200">
                Kho Game & Softwares Eggs
              </a>
              <a href="/free-server" className="block transition hover:text-cyan-200">
                Free Server Community
              </a>
              <a
                href={homeConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-cyan-200"
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
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-sky-100">
              <a
                href={homeConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-cyan-200"
              >
                <span>Discord Support Ticket</span>
              </a>
              <a
                href={homeConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-cyan-200"
              >
                <span>Zalo Community Group</span>
              </a>
              <a
                href={homeConfig.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-cyan-200"
              >
                <span>Messenger Group</span>
              </a>
              <a href="/#faq" className="block transition hover:text-cyan-200">
                Câu hỏi thường gặp (FAQ)
              </a>
            </div>
          </div>

          {/* Column 3: Legal & Policies */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
              🛡️ Chính Sách & SLA
            </p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-sky-100">
              <a href="/partner" className="block transition hover:text-cyan-200">
                Chương trình Partner (Giảm 20%)
              </a>
              <a href="/sla" className="block transition hover:text-cyan-200">
                Cam kết chất lượng SLA
              </a>
              <a href="/terms" className="block transition hover:text-cyan-200">
                Điều khoản sử dụng
              </a>
              <a href="/privacy" className="block transition hover:text-cyan-200">
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-cyan-300/20 pt-6 text-center text-xs text-sky-200/80 sm:flex-row sm:text-left">
          <p>© 2018 - 2026 STACloud. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-[11px] text-cyan-300/80">
            Powered by Next.js, Three.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
