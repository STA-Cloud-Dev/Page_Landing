'use client';

import React, { useState, useEffect } from 'react';
import { sitePath } from '@/lib/site-path';

interface LocationNode {
  id: string;
  name: string;
  country: string;
  flag: string;
  badge: string;
  basePing: number;
  bandwidth: string;
  uptime: string;
  status: 'active' | 'paused' | 'fast';
  statusText: string;
  highlight: string;
}

const NODES: LocationNode[] = [
  {
    id: 'sg',
    name: 'Singapore OVH Datacenter',
    country: 'Singapore',
    flag: sitePath('/flags/singapore.svg'),
    badge: 'Tối Ưu Cho Việt Nam',
    basePing: 26,
    bandwidth: '10 Gbps Anti-DDoS',
    uptime: '99.99%',
    status: 'fast',
    statusText: 'Cực Nhanh & Mở Rộng',
    highlight: 'Hạ tầng chính cho VPS OVH Xeon/EPYC, DEV SG, MC SG & OpenClaw',
  },
  {
    id: 'vn',
    name: 'Việt Nam Local Hub',
    country: 'Việt Nam',
    flag: sitePath('/flags/vietnam.svg'),
    badge: 'Direct VN Routing',
    basePing: 8,
    bandwidth: '1 Gbps Dedicated',
    uptime: '99.95%',
    status: 'active',
    statusText: 'Độ Trễ Thấp Nhất',
    highlight: 'Tối ưu cho bot nội địa và game server kết nối trong nước',
  },
  {
    id: 'hk',
    name: 'Hong Kong Shield Proxy',
    country: 'Hong Kong',
    flag: sitePath('/flags/hong-kong.svg'),
    badge: 'Proxy Tunnel',
    basePing: 42,
    bandwidth: '30 Gbps Shield',
    uptime: 'Slot Tạm Đầy',
    status: 'paused',
    statusText: 'Tạm Dừng Nhận Slot Mới',
    highlight: 'Shield AntiDDoS lưu lượng riêng, liên hệ admin khi cần',
  },
  {
    id: 'th',
    name: 'Thailand Edge Relay',
    country: 'Thái Lan',
    flag: sitePath('/flags/thailand.svg'),
    badge: 'Edge Relay',
    basePing: 34,
    bandwidth: '30 Gbps Backbone',
    uptime: '99.99%',
    status: 'active',
    statusText: 'Đang Hoạt Động',
    highlight: 'Đường truyền dự phòng và relay mở rộng khu vực Đông Nam Á',
  },
];

export function NetworkRadar3D() {
  const [selectedNode, setSelectedNode] = useState<LocationNode>(NODES[0]);
  const [livePings, setLivePings] = useState<Record<string, number>>({
    sg: 26,
    vn: 8,
    hk: 42,
    th: 34,
  });

  // Simulated live ping oscillation
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePings({
        sg: Math.floor(24 + Math.random() * 5),
        vn: Math.floor(7 + Math.random() * 3),
        hk: Math.floor(40 + Math.random() * 6),
        th: Math.floor(32 + Math.random() * 5),
      });
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#020b16]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-8">
      {/* Title */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Global Infrastructure Radar
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Mạng Lưới Hạ Tầng & Băng Thông Toàn Cầu
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Đường truyền trực tiếp tới các cụm máy chủ Đông Nam Á với công nghệ chống DDoS đa lớp.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <span>Hệ thống mạng: 100% Online</span>
        </div>
      </div>

      {/* Grid of Nodes */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {NODES.map((node) => {
          const isSelected = selectedNode.id === node.id;
          const ping = livePings[node.id] || node.basePing;

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                  : 'border-cyan-400/15 bg-[#031526]/80 hover:border-cyan-400/40 hover:bg-[#051c33]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-8 overflow-hidden rounded shadow">
                    <img src={node.flag} alt={node.country} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{node.country}</p>
                    <p className="text-[11px] text-cyan-300">{node.badge}</p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    node.status === 'paused'
                      ? 'border border-amber-400/30 bg-amber-400/10 text-amber-300'
                      : 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                  }`}
                >
                  {node.status === 'paused' ? 'Hết Slot' : 'Hoạt Động'}
                </span>
              </div>

              {/* Ping and Specs */}
              <div className="mt-4 flex items-center justify-between border-t border-cyan-400/10 pt-3">
                <div>
                  <p className="text-[10px] font-medium text-slate-400">Độ trễ (Ping)</p>
                  <p className="font-mono text-base font-bold text-cyan-300">~{ping} ms</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium text-slate-400">Băng thông</p>
                  <p className="text-xs font-semibold text-slate-200">{node.bandwidth.split(' ')[0]} Gbps</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Showcase */}
      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-[#03172e] to-[#041d38] p-5 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <h4 className="text-base font-bold text-white sm:text-lg">{selectedNode.name}</h4>
            </div>
            <p className="text-xs text-slate-300 sm:text-sm">{selectedNode.highlight}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-cyan-400/20 bg-black/40 px-3.5 py-2 text-center">
              <p className="text-[10px] text-slate-400 uppercase">Uptime Cam Kết</p>
              <p className="font-mono text-sm font-bold text-emerald-300">{selectedNode.uptime}</p>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-black/40 px-3.5 py-2 text-center">
              <p className="text-[10px] text-slate-400 uppercase">Bảo Vệ Anti-DDoS</p>
              <p className="font-mono text-sm font-bold text-cyan-300">{selectedNode.bandwidth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
