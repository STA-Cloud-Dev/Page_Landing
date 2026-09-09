'use client';

import React, { useEffect } from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  panelUrl: string;
  discordUrl: string;
  zaloUrl: string;
  messengerUrl: string;
}

export function MobileDrawer({
  isOpen,
  onClose,
  panelUrl,
  discordUrl,
  zaloUrl,
  messengerUrl,
}: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop blur overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#02182e]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer Container (Ocean Blue Theme) */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col border-l border-cyan-300/30 bg-[#06335a]/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-cyan-300/20 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/40 bg-black/60 p-1.5 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <img
                src="/picture/logoSTACloud.png"
                alt="STACloud"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-wide">STACloud</span>
              <span className="block text-[11px] text-cyan-200">Ocean Cloud & Hosting</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-sky-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/20 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex-1 overflow-y-auto space-y-1.5">
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
            Điều Hướng
          </p>

          <a
            href="#free-hosting"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg bg-emerald-400/10 px-3 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-400/20 text-emerald-100">0đ</span>
            Node Test 100% Free
          </a>

          <a
            href="#plans"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">⚡</span>
            Bảng Giá Dịch Vụ
          </a>

          <a
            href="#calculator"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🧮</span>
            Tùy Biến (Max 64C / 128G)
          </a>

          <a
            href="/egg"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🥚</span>
            Kho Game Eggs & Softwares
          </a>

          <a
            href="#openclaw"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🦞</span>
            OpenClaw Beta Free
          </a>

          <a
            href="#network"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🌐</span>
            Hạ Tầng & Radar Ping
          </a>

          <a
            href="#faq"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">❓</span>
            Hỏi Đáp (FAQ)
          </a>

          <div className="pt-4 border-t border-cyan-300/20">
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              Pháp Lý & Hợp Tác
            </p>
            <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-sky-200">
              <a href="/partner" onClick={onClose} className="rounded px-3 py-1.5 hover:text-white">
                Partner 20%
              </a>
              <a href="/sla" onClick={onClose} className="rounded px-3 py-1.5 hover:text-white">
                Cam kết SLA
              </a>
              <a href="/terms" onClick={onClose} className="rounded px-3 py-1.5 hover:text-white">
                Điều khoản
              </a>
              <a href="/privacy" onClick={onClose} className="rounded px-3 py-1.5 hover:text-white">
                Bảo mật
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-2 border-t border-cyan-300/20 pt-4">
          <a
            href={panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary w-full rounded-lg py-2.5 text-sm"
          >
            <span>Mở Control Portal</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <div className="grid grid-cols-3 gap-2">
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-sky-300/40 bg-sky-500/20 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/30"
            >
              Discord
            </a>
            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-500/20 py-2 text-xs font-bold text-cyan-100 transition hover:bg-cyan-500/30"
            >
              Zalo
            </a>
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg border border-sky-300/40 bg-sky-500/20 py-2 text-xs font-bold text-sky-100 transition hover:bg-sky-500/30"
            >
              Messenger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
