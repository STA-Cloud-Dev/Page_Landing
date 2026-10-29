'use client';

import React, { useEffect, useRef } from 'react';
import { PolicyLinks } from '@/components/legal/policy-links';
import { sitePath } from '@/lib/site-path';

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
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const focusables = () => Array.from(dialog.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    focusables()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const controls = focusables();
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
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
      <div ref={dialog} role="dialog" aria-modal="true" aria-label="Menu điều hướng" className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto border-l border-cyan-300/30 bg-[#06335a] p-5 shadow-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-cyan-300/20 pb-5">
          <div className="flex items-center gap-3">
            <img
              src={sitePath('/picture/logoSTACloud-204.webp')}
              srcSet={`${sitePath('/picture/logoSTACloud-204.webp')} 204w, ${sitePath('/picture/logoSTACloud-408.webp')} 408w`}
              sizes="(min-width: 640px) 140px, 116px"
              width={204}
              height={70}
              decoding="async"
              alt="STACloud"
              className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
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
          <a href={messengerUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="mb-5 flex min-h-12 items-center justify-center rounded-xl border border-indigo-300/50 bg-indigo-400/20 px-4 text-sm font-bold text-white">Chat nhanh qua Messenger ↗</a>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
            Điều Hướng
          </p>

          <a
            href={sitePath('/#free-hosting')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg bg-emerald-400/10 px-3 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-400/20 text-emerald-100">0đ</span>
            Node Test 100% Free
          </a>

          <a
            href={sitePath('/#plans')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">⚡</span>
            Bảng Giá Dịch Vụ
          </a>

          <a
            href={sitePath('/#benefits')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🛡️</span>
            Ưu Điểm Hạ Tầng
          </a>

          <a
            href={sitePath('/egg')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🥚</span>
            Kho Game Eggs & Softwares
          </a>

          <a
            href={sitePath('/#openclaw')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🦞</span>
            OpenClaw Beta Free
          </a>

          <a
            href={sitePath('/#network')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">🌐</span>
            Hạ Tầng & Radar Ping
          </a>

          <a
            href={sitePath('/#faq')}
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/20 text-cyan-200">❓</span>
            Hỏi Đáp (FAQ)
          </a>

          <div className="pt-4 border-t border-cyan-300/20">
            <a href={sitePath('/#policies')} onClick={onClose} className="mb-3 flex min-h-11 items-center rounded-lg bg-cyan-400/10 px-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/20">
              Chính sách &amp; điều khoản dịch vụ
            </a>
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              Pháp Lý & Hợp Tác
            </p>
            <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-sky-200">
              <div className="col-span-2" onClick={onClose}><PolicyLinks /></div>
              <a href={sitePath('/partner')} onClick={onClose} className="rounded px-3 py-1.5 hover:text-white">
                Partner 20%
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
