'use client';

import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

interface CloudConsoleDisplayProps {
  stats?: readonly StatItem[];
}

export function CloudConsoleDisplay({ stats }: CloudConsoleDisplayProps) {
  const displayStats: StatItem[] = stats
    ? [...stats]
    : [
        { value: '17', label: 'Gói dịch vụ đang công bố' },
        { value: '8', label: 'Gói Linux Egg & Dev' },
        { value: 'L3/L4', label: 'Bảo vệ mạng OVH' },
        { value: '0đ', label: 'Node Test Free Forever' },
      ];

  return (
    <div className="cloud-console-display relative w-full overflow-hidden rounded-3xl border border-cyan-300/45 bg-gradient-to-b from-[#083664]/85 via-[#05264c]/85 to-[#031932]/90 p-4 shadow-[0_24px_75px_rgba(0,180,216,0.35)] backdrop-blur-2xl sm:p-6 xl:p-7 cyber-cut-lg cyber-corner-accent glass-shine">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-cyan-300/25 pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
          <span className="font-mono text-xs font-semibold text-cyan-200/90 tracking-wider xl:text-sm">
            STACloud Console // Danh mục hạ tầng
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-200 xl:text-xs">
          <span>THÔNG TIN MINH HỌA</span>
        </div>
      </div>

      {/* Telemetry Strip */}
      <div className="mt-3.5 grid grid-cols-2 gap-2 border-b border-cyan-300/15 pb-3.5 sm:grid-cols-4 font-mono text-[11px] xl:text-xs">
        <div className="rounded-lg border border-cyan-300/15 bg-white/[0.03] p-2 text-center">
          <p className="text-[10px] text-sky-300/70 uppercase">REGION</p>
          <p className="mt-0.5 font-bold text-white">VN-SGN &bull; SG-SIN</p>
        </div>
        <div className="rounded-lg border border-cyan-300/15 bg-white/[0.03] p-2 text-center">
          <p className="text-[10px] text-sky-300/70 uppercase">BẢO VỆ MẠNG</p>
          <p className="mt-0.5 font-bold text-emerald-300">OVH LAYER 3/4</p>
        </div>
        <div className="rounded-lg border border-cyan-300/15 bg-white/[0.03] p-2 text-center">
          <p className="text-[10px] text-sky-300/70 uppercase">STORAGE</p>
          <p className="mt-0.5 font-bold text-cyan-300">NVMe / SSD tùy gói</p>
        </div>
        <div className="rounded-lg border border-cyan-300/15 bg-white/[0.03] p-2 text-center">
          <p className="text-[10px] text-sky-300/70 uppercase">UPTIME SLA</p>
          <p className="mt-0.5 font-bold text-white">MỤC TIÊU 99%</p>
        </div>
      </div>

      {/* Interactive Server Rack Blades (Pure CSS, 0MB 3D memory) */}
      <div className="mt-4 space-y-2.5">
        {/* Blade 1: Game Server Node */}
        <div className="server-rack-row group">
          <div className="flex items-center gap-3">
            <span className="server-rack-led" />
            <div>
              <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition xl:text-sm">
                BLADE-01 // GAME SERVER CLUSTER
              </p>
              <p className="text-[10px] text-sky-200/70 xl:text-xs">
                Minecraft Purpur / Forge / Fabric &bull; AMD Milan High-Frequency
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[11px] font-semibold text-emerald-300">
              Cấu hình game
            </span>
            <span className="rounded border border-cyan-300/30 bg-cyan-400/15 px-2 py-0.5 text-[10px] font-bold text-cyan-200">
              XEM GÓI
            </span>
          </div>
        </div>

        {/* Blade 2: Cloud VPS Xeon & AMD EPYC */}
        <div className="server-rack-row group">
          <div className="flex items-center gap-3">
            <span className="server-rack-led-cyan" />
            <div>
              <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition xl:text-sm">
                BLADE-02 // CLOUD VPS & DEDICATED
              </p>
              <p className="text-[10px] text-sky-200/70 xl:text-xs">
                OVH Singapore &bull; Xeon E5 & AMD EPYC &bull; Full Port Allocated
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[11px] font-semibold text-cyan-300">
              Cấp phát theo gói
            </span>
            <span className="rounded border border-cyan-300/30 bg-cyan-400/15 px-2 py-0.5 text-[10px] font-bold text-cyan-200">
              HỎI SLOT
            </span>
          </div>
        </div>

        {/* Blade 3: Community & Node Test Free */}
        <div className="server-rack-row group">
          <div className="flex items-center gap-3">
            <span className="server-rack-led" />
            <div>
              <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition xl:text-sm">
                BLADE-03 // NODE TEST & COMMUNITY
              </p>
              <p className="text-[10px] text-sky-200/70 xl:text-xs">
                Free Forever &bull; 75% CPU &bull; 2 GB RAM &bull; Discord Bot & Web
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[11px] font-semibold text-emerald-300">
              0 Credit / Free
            </span>
            <span className="rounded border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-200">
              GÓI FREE
            </span>
          </div>
        </div>

        {/* Blade 4: OpenClaw AI Beta Gateway */}
        <div className="server-rack-row group">
          <div className="flex items-center gap-3">
            <span className="server-rack-led-amber" />
            <div>
              <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition xl:text-sm">
                BLADE-04 // OPENCLAW AI BETA ENGINE
              </p>
              <p className="text-[10px] text-sky-200/70 xl:text-xs">
                Auto SSL Tunneling &bull; Zero Domain Required &bull; Fast AI Inference
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-[11px] font-semibold text-amber-300">
              Public Beta
            </span>
            <span className="rounded border border-amber-400/30 bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-200">
              FREE TIER
            </span>
          </div>
        </div>
      </div>

      {/* Floating 4 Stat Counters */}
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {displayStats.map((st) => (
          <div
            key={st.label}
            className="rounded-xl border border-cyan-300/30 bg-[#062444]/80 p-2.5 text-center shadow-md backdrop-blur transition hover:border-cyan-300/50 hover:bg-[#082e56]/90"
          >
            <p className="font-mono text-xl font-black text-white text-gradient-cyan sm:text-2xl">
              {st.value}
            </p>
            <p className="mt-0.5 text-[10px] font-semibold text-sky-200 leading-tight xl:text-xs">
              {st.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
