'use client';

import React from 'react';

type OpenClawSpotlightProps = {
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
};

const openClawHighlights = [
  '100% Free Beta',
  'Không cần domain riêng',
  'Proxy SSL Tự Động',
  'Khuyến nghị Singapore / Việt Nam',
] as const;

export function OpenClawSpotlight({ discordUrl, zaloUrl, messengerUrl }: OpenClawSpotlightProps) {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/35 bg-gradient-to-b from-[#051c36]/95 via-[#031528]/95 to-[#020b17]/98 p-6 shadow-[0_25px_80px_rgba(0,180,216,0.25)] backdrop-blur-2xl sm:p-10 cyber-cut-lg cyber-corner-accent">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-400/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
              🦞 OpenClaw AI Beta Ecosystem
            </div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl">
              Trải Nghiệm OpenClaw AI & Web Miễn Phí
            </h2>
            <p className="max-w-2xl text-xs leading-relaxed text-sky-100 sm:text-base">
              OpenClaw được mở miễn phí cho cộng đồng trải nghiệm AI & Web. Chạy mượt mà với độ trễ thấp qua hạ tầng Singapore / Việt Nam mà không cần sở hữu tên miền riêng.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {openClawHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/25 bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/25 bg-[#062444]/80 p-5 shadow-lg backdrop-blur space-y-4">
            <div className="flex items-center justify-between border-b border-cyan-300/15 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
                Thông Tin Trải Nghiệm
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                SLOT SẴN SÀNG
              </span>
            </div>

            <div className="rounded-xl border border-cyan-300/20 bg-black/30 p-3.5 text-xs leading-relaxed text-sky-100">
              <p className="font-bold text-white mb-1">🔗 Không Cần Tên Miền Riêng:</p>
              Hệ thống tự động cấp phát domain proxy tunneling kèm chứng chỉ SSL Cloudflare miễn phí.
            </div>

            <div className="rounded-xl border border-cyan-300/20 bg-black/30 p-3.5 text-xs leading-relaxed text-sky-100">
              <p className="font-bold text-white mb-1">⚡ Tối Ưu Tác Vụ AI:</p>
              Khuyến nghị chọn node Singapore hoặc Việt Nam để kết nối các API AI ổn định và nhanh nhất.
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary w-full rounded-xl py-2.5 text-center text-xs font-bold block"
              >
                Nhận Key & Slot OpenClaw Tại Discord
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline rounded-xl py-2 text-center text-xs font-bold"
                >
                  Zalo Group
                </a>
                <a
                  href={messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline rounded-xl py-2 text-center text-xs font-bold"
                >
                  Messenger Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
