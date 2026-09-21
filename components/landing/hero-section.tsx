import { heroStats, servicePlans, siteConfig } from './content';
import { Reveal } from '@/components/ui/reveal';
import { CloudConsoleDisplay } from '@/components/visual/cloud-console-display';

function getPlanBadgeClasses(status: string) {
  if (status === 'paused') {
    return 'border border-blue-300/20 bg-blue-300/10 text-blue-100';
  }

  if (status === 'warning') {
    return 'border border-white/15 bg-white/[0.07] text-white';
  }

  if (status === 'beta') {
    return 'border border-blue-300/20 bg-blue-300/10 text-blue-100';
  }

  if (status === 'preorder') {
    return 'border border-sky-300/20 bg-sky-300/10 text-sky-100';
  }

  return 'border border-cyan-300/20 bg-cyan-300/10 text-cyan-100';
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="hero-copy-block space-y-8 sm:w-auto" delayMs={40}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur sm:text-xs sm:tracking-[0.28em]">
              Bảng Giá Dịch Vụ
            </div>

            <div className="max-w-[20rem] space-y-5 sm:max-w-none">
              <h1 className="max-w-[calc(100vw-2rem)] break-words text-2xl font-semibold leading-tight text-white sm:max-w-3xl sm:text-5xl lg:text-6xl">
                Xem giá, slot, upsize và cảnh báo của từng gói trong một màn hình.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-sky-100/80 sm:text-lg sm:leading-8">
                Trang này tổng hợp đầy đủ thông tin bạn cần trước khi đăng ký: gói nào đang mở,
                gói nào tạm ngưng, mức giá hiện tại, tùy chọn nâng cấp và lưu ý quan trọng về dữ
                liệu.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={siteConfig.panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(2,132,199,0.26)] transition hover:bg-sky-500 sm:w-auto"
              >
                Mở Portal
              </a>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-sky-300/25 bg-sky-300/10 px-6 py-3.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300/45 hover:bg-sky-300/15 sm:w-auto"
              >
                Tạo ticket Discord
              </a>
            </div>

            <div className="support-spotlight rounded-lg px-4 py-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                    Group Chat Cộng Đồng
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    Hỏi nhanh qua Messenger/Zalo trước khi tạo ticket hoặc đăng ký gói.
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href={siteConfig.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-sky-950 transition hover:bg-sky-100"
                  >
                    Messenger
                  </a>
                  <a
                    href={siteConfig.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.14]"
                  >
                    Zalo
                  </a>
                </div>
              </div>
              <a href="#plans" className="mt-3 inline-flex text-sm font-semibold text-cyan-100 transition hover:text-white">
                Xem bảng giá
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {servicePlans.map((plan, index) => (
                <Reveal key={plan.name} delayMs={120 + index * 60}>
                  <div className="status-tile interactive-card rounded-lg border border-cyan-300/10 bg-white/[0.04] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                          {plan.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">{plan.highlight}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${getPlanBadgeClasses(plan.status)}`}
                      >
                        {plan.statusLabel}
                      </span>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-cyan-100">{plan.price}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative flex flex-col items-center justify-center" delayMs={120}>
            <CloudConsoleDisplay stats={heroStats} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
