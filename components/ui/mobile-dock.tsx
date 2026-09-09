'use client';

import React from 'react';

interface MobileDockProps {
  panelUrl: string;
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
}

export function MobileDock({ panelUrl, discordUrl, zaloUrl, messengerUrl }: MobileDockProps) {
  return (
    <aside aria-label="Lối tắt di động" className="fixed bottom-3 inset-x-3 z-40 block lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-1.5 rounded-2xl border border-cyan-300/35 bg-[#06335a]/92 px-3 py-2 shadow-[0_10px_35px_rgba(0,119,182,0.5)] backdrop-blur-xl">
        {/* Quick Free Hosting */}
        <a
          href="#free-hosting"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-emerald-100 transition hover:text-white active:scale-95"
        >
          <span className="text-base font-black">0đ</span>
          <span className="text-[10px] font-bold">Node Test</span>
        </a>

        {/* Quick Configurator */}
        <a
          href="#calculator"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-sky-100 transition hover:text-cyan-200 active:scale-95"
        >
          <span className="text-base">🧮</span>
          <span className="text-[10px] font-bold">Tùy Biến</span>
        </a>

        {/* Center Main CTA: Open Portal */}
        <a
          href={panelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 py-1.5 px-2 text-slate-950 shadow-[0_0_18px_rgba(0,240,255,0.6)] transition active:scale-95"
        >
          <span className="text-base font-extrabold">🚀</span>
          <span className="text-[10px] font-black tracking-tight">Portal</span>
        </a>

        {/* Quick Chat Zalo */}
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-sky-100 transition hover:text-cyan-200 active:scale-95"
        >
          <span className="text-base">💬</span>
          <span className="text-[10px] font-bold">Zalo</span>
        </a>

        {/* Quick Ticket Discord */}
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-sky-100 transition hover:text-cyan-200 active:scale-95"
        >
          <span className="text-base">🎫</span>
          <span className="text-[10px] font-bold">Ticket</span>
        </a>
      </div>
    </aside>
  );
}
