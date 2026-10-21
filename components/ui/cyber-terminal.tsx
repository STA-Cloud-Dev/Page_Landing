'use client';

import React, { useState, useEffect } from 'react';

const terminalLines = [
  { text: '$ stacloud init --env=production --region=sg-ovh-01', color: 'text-cyan-400' },
  { text: '[OK] Connected to OVH Singapore Datacenter (10 Gbps AntiDDoS)', color: 'text-emerald-400' },
  { text: '[INFO] Allocating AMD EPYC Milan Core & High-Speed DDR4 RAM...', color: 'text-slate-300' },
  { text: '$ curl -sSL https://portal.stacloud.eu.cc/openclaw/deploy.sh | bash', color: 'text-cyan-400' },
  { text: '[CLAW] OpenClaw Beta Engine v2.4 initialized successfully!', color: 'text-sky-300' },
  { text: '[CLAW] Zero Domain Requirement: Active on fast SSL tunneling proxy', color: 'text-indigo-300' },
  { text: '[STATUS] Node Health: 100% | Latency to VN: 28ms | Ready for Traffic', color: 'text-emerald-400' },
];

export function CyberTerminal() {
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (displayedIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [displayedIndex]);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('curl -sSL https://portal.stacloud.eu.cc/openclaw/deploy.sh | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#020b14]/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-cyan-400/10 bg-[#031526] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400">stacloud-terminal@openclaw-node</span>
        </div>
        <button
          onClick={handleCopyCommand}
          className="flex items-center gap-1.5 rounded border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-[11px] font-medium text-cyan-300 transition hover:bg-cyan-400/20"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Đã sao chép!</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Demo</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm">
        {terminalLines.slice(0, displayedIndex).map((line, idx) => (
          <div key={idx} className={`animate-fadeIn ${line.color} flex items-start gap-2`}>
            <span>{line.text}</span>
          </div>
        ))}
        {displayedIndex < terminalLines.length ? (
          <div className="flex items-center gap-1 text-cyan-400">
            <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400" />
          </div>
        ) : (
          <div className="mt-2 flex items-center gap-2 text-cyan-300/60">
            <span>$ ready for next command...</span>
            <span className="inline-block h-3.5 w-1.5 animate-pulse bg-cyan-400" />
          </div>
        )}
      </div>
    </div>
  );
}
