'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { sitePath } from '@/lib/site-path';
import { WORLD_COUNTRIES_PATHS, CountryPathData } from '@/components/visual/world-paths-data';

export interface DatacenterLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  flagSrc: string;
  basePing: number;
  speed: string;
  shield: string;
  availability: string;
  status: 'optimal' | 'stable' | 'paused';
  description: string;
  lat: number;
  lng: number;
  svgX: number;
  svgY: number;
  zoomLevel: number;
  color: string;
  countryCode: string;
  labelOffsetX: number;
  labelOffsetY: number;
}

export const allDatacenterLocations: DatacenterLocation[] = [
  {
    id: 'ca-bhs',
    name: 'CA-BHS-01 (Canada Edge Hub)',
    city: 'Beauharnois / Montreal',
    country: 'Canada',
    flagSrc: sitePath('/flags/canada.svg?v=20261024-2'),
    basePing: 255,
    speed: '10 Gbps Backbone',
    shield: 'OVH VAC Anti-DDoS North America',
    availability: 'North America Edge',
    status: 'optimal',
    description:
      'Cụm máy chủ hạ tầng tại Canada (Bắc Mỹ) với đường truyền backbone OVH 10 Gbps riêng biệt, phục vụ người dùng kết nối xuyên lục địa với khả năng chống DDoS không giới hạn.',
    lat: 45.31,
    lng: -73.87,
    svgX: 294.8,
    svgY: 124.1,
    zoomLevel: 2.2,
    color: '#38bdf8',
    countryCode: 'CAN',
    labelOffsetX: 8,
    labelOffsetY: -14,
  },
  {
    id: 'eu-fra',
    name: 'EU-FRA-01 (European Hub)',
    city: 'Frankfurt & Paris',
    country: 'Châu Âu (EU)',
    flagSrc: sitePath('/flags/europe.svg?v=20261024-2'),
    basePing: 205,
    speed: '10 Gbps Backbone',
    shield: 'European Multi-Tier Shield 10Gbps',
    availability: 'Global Edge Relay',
    status: 'optimal',
    description:
      'Hạ tầng Gateway tại châu Âu với kết nối peering trực tiếp các sàn giao dịch lưu lượng lớn (DE-CIX), bảo vệ DDoS toàn diện cho traffic quốc tế.',
    lat: 50.11,
    lng: 8.68,
    svgX: 524.1,
    svgY: 110.8,
    zoomLevel: 2.5,
    color: '#a855f7',
    countryCode: 'DEU',
    labelOffsetX: 8,
    labelOffsetY: -14,
  },
  {
    id: 'sg-sin',
    name: 'SG-SIN-01 (OVH Singapore)',
    city: 'Singapore',
    country: 'Singapore',
    flagSrc: sitePath('/flags/singapore.svg?v=20261024-2'),
    basePing: 27,
    speed: '10 Gbps Anti-DDoS',
    shield: 'OVH Anti-DDoS Multi-Layer 10Gbps+',
    availability: 'Free & Paid (Trọng Tâm)',
    status: 'optimal',
    description:
      'Cụm máy chủ trung tâm chính của STACloud: Dành cho toàn bộ gói Game Servers 1–2, Dev 1–3, Cloud VPS Xeon E5 và AMD EPYC Milan. Tối ưu độ trễ thấp về Việt Nam.',
    lat: 1.35,
    lng: 103.82,
    svgX: 788.4,
    svgY: 246.3,
    zoomLevel: 2.8,
    color: '#10b981',
    countryCode: 'SGP',
    labelOffsetX: 8,
    labelOffsetY: 10,
  },
  {
    id: 'vn-sgn',
    name: 'VN-SGN-01 (Việt Nam Local Hub)',
    city: 'Hồ Chí Minh & Hà Nội',
    country: 'Việt Nam',
    flagSrc: sitePath('/flags/vietnam.svg?v=20261024-2'),
    basePing: 4,
    speed: '1 Gbps Dedicated Uplink',
    shield: 'Domestic Firewall & VNIX Filter',
    availability: 'Only Paid (Nội Địa)',
    status: 'optimal',
    description:
      'Location đặt máy chủ tại Việt Nam với đường truyền peering trực tiếp các nhà mạng lớn (FPT, Viettel, VNPT) cho độ trễ nội địa siêu thấp 3-5ms.',
    lat: 14.05,
    lng: 108.27,
    svgX: 800.8,
    svgY: 211.0,
    zoomLevel: 2.8,
    color: '#00f0ff',
    countryCode: 'VNM',
    labelOffsetX: 8,
    labelOffsetY: -5,
  },
  {
    id: 'th-bkk',
    name: 'TH-BKK-01 (Thailand Gateway)',
    city: 'Bangkok',
    country: 'Thailand',
    flagSrc: sitePath('/flags/thailand.svg?v=20261024-2'),
    basePing: 23,
    speed: '30 Gbps Bandwidth',
    shield: 'Southeast Asia AntiDDoS Gateway',
    availability: 'Free & Paid',
    status: 'optimal',
    description:
      'Proxy Thailand hỗ trợ cả gói miễn phí và trả phí, tối ưu lưu lượng kết nối chuyển tiếp trong khu vực Đông Nam Á với băng thông backbone 30 Gbps.',
    lat: 13.75,
    lng: 100.5,
    svgX: 779.2,
    svgY: 211.8,
    zoomLevel: 2.8,
    color: '#06b6d4',
    countryCode: 'THA',
    labelOffsetX: -76,
    labelOffsetY: -5,
  },
  {
    id: 'hk-01',
    name: 'HKG-01 (Hong Kong Route)',
    city: 'Hong Kong',
    country: 'Hong Kong',
    flagSrc: sitePath('/flags/hong-kong.svg?v=20261024-2'),
    basePing: 36,
    speed: '30 Gbps Shield',
    shield: 'Dedicated Shield AntiDDoS',
    availability: 'Proxy Paused (Hết slot)',
    status: 'paused',
    description:
      'Proxy Hong Kong dành cho kết nối quốc tế với lưu lượng Shield AntiDDoS riêng biệt. Hiện đã kín slot đăng ký mới.',
    lat: 22.32,
    lng: 114.17,
    svgX: 817.1,
    svgY: 188.0,
    zoomLevel: 2.8,
    color: '#fbbf24',
    countryCode: 'HKG',
    labelOffsetX: 8,
    labelOffsetY: -28,
  },
];

function LocationFlag({
  location,
  className = 'h-4 w-6',
}: {
  location: DatacenterLocation;
  className?: string;
}) {
  return (
    <span className={`relative block aspect-[3/2] shrink-0 overflow-hidden ${className}`}>
      <Image
        src={location.flagSrc}
        alt={`${location.country} flag`}
        fill
        sizes="72px"
        loading="eager"
        className="block object-fill"
      />
    </span>
  );
}

// Highlighted country ISO codes matching user reference cartographic style
const HIGHLIGHTED_COUNTRIES = new Set([
  'USA',
  'BRA',
  'AUS',
  'RUS',
  'IND',
  'DEU',
  'FRA',
  'GBR',
  'THA',
]);

// Laser interconnect lines between global datacenter nodes
const LASER_CONDUITS = [
  { id: 'ca-eu', d: 'M 294.8 124.1 Q 409 75 524.1 110.8' },
  { id: 'eu-sg', d: 'M 524.1 110.8 Q 656 160 788.4 246.3' },
  { id: 'sg-vn', d: 'M 788.4 246.3 L 800.8 211.0' },
  { id: 'sg-th', d: 'M 788.4 246.3 L 779.2 211.8' },
  { id: 'vn-hk', d: 'M 800.8 211.0 L 817.1 188.0' },
  { id: 'ca-sg', d: 'M 294.8 124.1 Q 540 290 788.4 246.3' },
];

export function NetworkMapVector() {
  const [activeLocation, setActiveLocation] = useState<DatacenterLocation>(allDatacenterLocations[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [simulatedPings, setSimulatedPings] = useState<Record<string, number>>(() =>
    Object.fromEntries(allDatacenterLocations.map((location) => [location.id, location.basePing]))
  );

  // Animated reference values only: these are not measurements from a live server.
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) return;

      setSimulatedPings((previous) => {
        const updated = { ...previous };
        for (const location of allDatacenterLocations) {
          const jitter = Math.max(2, Math.round(location.basePing * 0.04));
          const variation = Math.floor(Math.random() * (jitter * 2 + 1)) - jitter;
          updated[location.id] = Math.max(1, location.basePing + variation);
        }
        return updated;
      });
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  // Native SVG ViewBox Zoom and Pan coordinates (1000 x 500 world extent)
  const [zoom, setZoom] = useState<number>(1.0);
  const [center, setCenter] = useState<{ x: number; y: number }>({ x: 500, y: 250 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ clientX: number; clientY: number; startCenterX: number; startCenterY: number }>({
    clientX: 0,
    clientY: 0,
    startCenterX: 500,
    startCenterY: 250,
  });
  const hasMovedRef = useRef<boolean>(false);

  // Smooth mathematical camera transition to target coordinates
  const smoothFlyTo = useCallback(
    (targetX: number, targetY: number, targetZoom: number) => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCenter({ x: targetX, y: targetY });
        setZoom(targetZoom);
        return;
      }

      const startX = center.x;
      const startY = center.y;
      const startZoom = zoom;
      const startTime = performance.now();
      const duration = 420; // 420ms smooth fly transition

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Cubic easing out
        const ease = 1 - Math.pow(1 - progress, 3);

        setCenter({
          x: startX + (targetX - startX) * ease,
          y: startY + (targetY - startY) * ease,
        });
        setZoom(+(startZoom + (targetZoom - startZoom) * ease).toFixed(3));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step);
        } else {
          animationFrameRef.current = null;
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);
    },
    [center, zoom]
  );

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    []
  );

  // Focus and select node
  const focusOnNode = useCallback(
    (node: DatacenterLocation) => {
      setActiveLocation(node);
      smoothFlyTo(node.svgX, node.svgY, node.zoomLevel);
    },
    [smoothFlyTo]
  );

  // Reset to full world view (1.0x)
  const handleResetWorld = useCallback(() => {
    smoothFlyTo(500, 250, 1.0);
  }, [smoothFlyTo]);

  // Zoom In button handler
  const handleZoomIn = useCallback(() => {
    setZoom((prev) => {
      const next = Math.min(4.5, +(prev * 1.35).toFixed(2));
      return next;
    });
  }, []);

  // Zoom Out button handler
  const handleZoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(1.0, +(prev / 1.35).toFixed(2));
      if (next <= 1.05) {
        setCenter({ x: 500, y: 250 });
        return 1.0;
      }
      return next;
    });
  }, []);

  // Keep normal page scrolling available; Ctrl/Command + wheel controls map zoom.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((z) => Math.min(4.5, +(z * 1.2).toFixed(2)));
      } else {
        setZoom((z) => {
          const next = Math.max(1.0, +(z / 1.2).toFixed(2));
          if (next <= 1.05) {
            setCenter({ x: 500, y: 250 });
            return 1.0;
          }
          return next;
        });
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Compute precise SVG ViewBox based on current center and zoom
  const vbWidth = 1000 / zoom;
  const vbHeight = 500 / zoom;
  const vbX = Math.max(0, Math.min(1000 - vbWidth, center.x - vbWidth / 2));
  const vbY = Math.max(0, Math.min(500 - vbHeight, center.y - vbHeight / 2));
  const currentViewBox = `${vbX} ${vbY} ${vbWidth} ${vbHeight}`;

  // Mouse Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      startCenterX: center.x,
      startCenterY: center.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const dx = e.clientX - dragStartRef.current.clientX;
    const dy = e.clientY - dragStartRef.current.clientY;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasMovedRef.current = true;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const factorX = vbWidth / rect.width;
    const factorY = vbHeight / rect.height;

    const newCenterX = Math.max(vbWidth / 2, Math.min(1000 - vbWidth / 2, dragStartRef.current.startCenterX - dx * factorX));
    const newCenterY = Math.max(vbHeight / 2, Math.min(500 - vbHeight / 2, dragStartRef.current.startCenterY - dy * factorY));

    setCenter({ x: newCenterX, y: newCenterY });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      hasMovedRef.current = false;
      dragStartRef.current = {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY,
        startCenterX: center.x,
        startCenterY: center.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || e.touches.length !== 1 || !containerRef.current) return;
    const dx = e.touches[0].clientX - dragStartRef.current.clientX;
    const dy = e.touches[0].clientY - dragStartRef.current.clientY;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasMovedRef.current = true;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const factorX = vbWidth / rect.width;
    const factorY = vbHeight / rect.height;

    const newCenterX = Math.max(vbWidth / 2, Math.min(1000 - vbWidth / 2, dragStartRef.current.startCenterX - dx * factorX));
    const newCenterY = Math.max(vbHeight / 2, Math.min(500 - vbHeight / 2, dragStartRef.current.startCenterY - dy * factorY));

    setCenter({ x: newCenterX, y: newCenterY });
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Clicking a country path activates the corresponding datacenter if available
  const handleCountryClick = (country: CountryPathData) => {
    if (hasMovedRef.current) return; // Ignore clicks if dragging

    const matchingLoc = allDatacenterLocations.find(
      (l) => l.countryCode === country.id || (country.id === 'FRA' && l.id === 'eu-fra')
    );

    if (matchingLoc) {
      focusOnNode(matchingLoc);
    } else {
      setHoveredCountry(country.name);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-b from-[#072e56]/90 via-[#052242]/90 to-[#03162b]/95 p-4 shadow-[0_25px_80px_rgba(0,180,216,0.3)] backdrop-blur-2xl sm:p-6 lg:p-8 cyber-cut-lg cyber-corner-accent glass-shine">
      {/* Inline Keyframes for Laser Conduits */}
      <style>{`
        @keyframes laserPulseFlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .laser-conduit-stream {
          animation: laserPulseFlow 1.6s linear infinite;
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-cyan-300/25 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            🗺️ Sơ đồ khu vực hạ tầng & định tuyến
          </div>
          <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            Bản đồ hạ tầng và kết nối khu vực
          </h3>
          <p className="mt-1 text-xs text-sky-100/90 sm:text-sm">
            Sơ đồ minh họa 6 khu vực: Canada, châu Âu, Singapore, Việt Nam, Thái Lan và Hong Kong. Độ trễ hiển thị mang tính tham khảo; kết quả thực tế phụ thuộc đường truyền và vị trí kết nối.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="status-pill-cyber">
            <span className="font-bold text-xs">6 KHU VỰC THAM KHẢO</span>
          </span>
          <span className="hidden sm:inline-flex rounded-xl border border-cyan-300/30 bg-black/40 px-3 py-1 font-mono text-xs text-cyan-300">
            Sơ đồ tương tác
          </span>
        </div>
      </div>

      {/* Fast Jump Filter Bar */}
      <div className="mt-4 grid grid-cols-2 gap-2 border-b border-cyan-300/15 pb-4 sm:flex sm:flex-wrap sm:items-center">
        <span className="col-span-2 mr-1 text-xs font-bold uppercase tracking-wider text-cyan-200 sm:col-span-1">
          Khu vực:
        </span>
        <button
          type="button"
          onClick={handleResetWorld}
          className={`col-span-2 min-h-10 rounded-lg px-3 py-2 text-xs font-bold transition sm:col-span-1 sm:min-h-0 sm:py-1.5 ${
            zoom === 1.0 && center.x === 500 && center.y === 250
              ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'border border-cyan-300/20 bg-black/30 text-slate-200 hover:bg-cyan-400/25 hover:text-white'
          }`}
        >
          🌐 Toàn Cầu (All 6)
        </button>

        {allDatacenterLocations.map((loc) => {
          const isActive = activeLocation.id === loc.id;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => focusOnNode(loc)}
              className={`flex min-h-10 min-w-0 items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-bold transition sm:min-h-0 sm:px-3 sm:py-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-sky-400 to-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'border border-cyan-300/20 bg-black/30 text-slate-200 hover:text-white'
              }`}
            >
              <LocationFlag location={loc} className="h-4 w-6" />
              <span className="min-w-0 flex-1 truncate text-left">{loc.country}</span>
              <span className="shrink-0 font-mono text-[10px] opacity-80">~{simulatedPings[loc.id]}ms*</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive GIS Native SVG World Map + Simulated Ping Detail */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)] xl:items-start">
        {/* Left: Authentic GIS SVG Map Viewport */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[280px] overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#131720] shadow-[inset_0_0_60px_rgba(0,0,0,0.85)] sm:min-h-[420px] xl:min-h-[500px] select-none cursor-grab active:cursor-grabbing"
        >
          {/* Geographic Background Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#38bdf815_1px,transparent_1px),linear-gradient(to_bottom,#38bdf815_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* SVG Native Map */}
          <svg
            viewBox={currentViewBox}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="vietnamGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="canadaGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Latitude & Longitude Reference Grid Lines */}
            <g stroke="#26354a" strokeWidth="0.4" strokeDasharray="4,6" opacity="0.45">
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#00f0ff" strokeWidth="0.6" strokeDasharray="6,4" opacity="0.3" />
              <line x1="0" y1="185" x2="1000" y2="185" />
              <line x1="0" y1="315" x2="1000" y2="315" />
              <line x1="250" y1="0" x2="250" y2="500" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="#00f0ff" strokeWidth="0.6" strokeDasharray="6,4" opacity="0.3" />
              <line x1="750" y1="0" x2="750" y2="500" />
            </g>

            {/* Sovereign Nations Country Paths (177 Real GIS Boundaries) */}
            <g className="countries-layer">
              {WORLD_COUNTRIES_PATHS.map((country: CountryPathData) => {
                const isVietnam = country.id === 'VNM';
                const isCanada = country.id === 'CAN';
                const isHighlighted = HIGHLIGHTED_COUNTRIES.has(country.id);

                let fill = '#536275';
                let stroke = '#18202c';
                let strokeWidth = 0.5;
                let filter = undefined;

                if (isVietnam) {
                  fill = '#00f0ff';
                  stroke = '#e0faff';
                  strokeWidth = 1.2;
                  filter = 'url(#vietnamGlow)';
                } else if (isCanada) {
                  fill = '#5a7899';
                  stroke = '#38bdf8';
                  strokeWidth = 0.9;
                  filter = 'url(#canadaGlow)';
                } else if (isHighlighted) {
                  fill = '#687a8e';
                  stroke = '#242f3e';
                  strokeWidth = 0.6;
                }

                return (
                  <path
                    key={country.id}
                    d={country.d}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    filter={filter}
                    className="transition-colors duration-150 hover:fill-[#38bdf8] hover:opacity-95 cursor-pointer"
                    onClick={() => handleCountryClick(country)}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  />
                );
              })}

              {/* Singapore Island Dot */}
              <circle
                cx={788.4}
                cy={246.3}
                r={2.5}
                fill="#10b981"
                stroke="#ffffff"
                strokeWidth={0.6}
                className="cursor-pointer"
                onClick={() => focusOnNode(allDatacenterLocations[2])}
              />
              {/* Hong Kong Island Dot */}
              <circle
                cx={817.1}
                cy={188.0}
                r={2.2}
                fill="#fbbf24"
                stroke="#ffffff"
                strokeWidth={0.6}
                className="cursor-pointer"
                onClick={() => focusOnNode(allDatacenterLocations[5])}
              />
            </g>

            {/* Animated Laser Interconnect Conduits */}
            <g className="laser-conduits-layer pointer-events-none">
              {LASER_CONDUITS.map((conduit) => (
                <g key={conduit.id}>
                  <path
                    d={conduit.d}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth={1.8}
                    opacity={0.3}
                  />
                  <path
                    d={conduit.d}
                    fill="none"
                    stroke="url(#laserGrad)"
                    strokeWidth={1.6}
                    strokeDasharray="6, 12"
                    className="laser-conduit-stream"
                  />
                </g>
              ))}
            </g>

            {/* Datacenter Beacon Markers for the 6 Locations */}
            <g className="datacenter-beacons-layer">
              {allDatacenterLocations.map((loc) => {
                const isSelected = activeLocation.id === loc.id;

                return (
                  <g
                    key={loc.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      focusOnNode(loc);
                    }}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing outer waves */}
                    <circle
                      cx={loc.svgX}
                      cy={loc.svgY}
                      r={isSelected ? 16 : 11}
                      fill={loc.color}
                      opacity={0.3}
                      className="animate-ping"
                      style={{
                        transformOrigin: `${loc.svgX}px ${loc.svgY}px`,
                        animationDuration: isSelected ? '1.5s' : '2.5s',
                      }}
                    />

                    {/* Halo ring */}
                    <circle cx={loc.svgX} cy={loc.svgY} r={isSelected ? 16 : 11} fill="none" stroke={loc.color} strokeWidth={0.7} opacity={0.3} className="animate-ping" style={{ transformOrigin: `${loc.svgX}px ${loc.svgY}px`, animationDuration: '3s', animationDelay: '-1.5s' }} />
                    <circle
                      cx={loc.svgX}
                      cy={loc.svgY}
                      r={isSelected ? 10 : 7}
                      fill={loc.color}
                      opacity={0.4}
                    />

                    {/* Solid inner point */}
                    <circle
                      cx={loc.svgX}
                      cy={loc.svgY}
                      r={isSelected ? 4.8 : 3.8}
                      fill="#ffffff"
                      stroke={loc.color}
                      strokeWidth={2.4}
                      className="shadow-lg transition-transform group-hover:scale-125"
                      style={{ transformOrigin: `${loc.svgX}px ${loc.svgY}px` }}
                    />

                    {/* Badge Pill Label */}
                    <g
                      transform={`translate(${loc.svgX + loc.labelOffsetX}, ${loc.svgY + loc.labelOffsetY})`}
                      className="pointer-events-none"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={68}
                        height={18}
                        rx={5}
                        fill="#091322"
                        fillOpacity={0.9}
                        stroke={isSelected ? loc.color : 'rgba(56, 189, 248, 0.35)'}
                        strokeWidth={isSelected ? 1.2 : 0.8}
                      />
                      <image
                        href={loc.flagSrc}
                        x={4}
                        y={4}
                        width={15}
                        height={10}
                        preserveAspectRatio="none"
                      />
                      <text
                        x={22}
                        y={12}
                        fill="#ffffff"
                        fontSize={8.5}
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {loc.id.toUpperCase()}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Zoom & Pan Controls (Top-Right, matching user screenshot) */}
          <div
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 z-30 flex flex-col rounded-xl border border-cyan-300/40 bg-black/85 shadow-[0_8px_25px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              title="Phóng to (+)"
              className="flex h-9 w-9 items-center justify-center text-white transition hover:bg-cyan-400/30 active:bg-cyan-400/50 font-mono text-lg font-bold border-b border-cyan-300/20"
            >
              +
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              title="Thu nhỏ (-)"
              className="flex h-9 w-9 items-center justify-center text-white transition hover:bg-cyan-400/30 active:bg-cyan-400/50 font-mono text-lg font-bold border-b border-cyan-300/20"
            >
              −
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleResetWorld();
              }}
              title="Khôi phục toàn cảnh (1x)"
              className="flex h-9 w-9 items-center justify-center text-cyan-300 transition hover:bg-cyan-400/30 active:bg-cyan-400/50 font-mono text-xs font-bold"
            >
              ⟲
            </button>
          </div>

          {/* Floating Zoom Level Preset Buttons */}
          <div
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute top-3 right-16 z-30 hidden sm:flex items-center gap-1 rounded-xl border border-cyan-300/30 bg-black/75 p-1 backdrop-blur-md font-mono text-[10px]"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                smoothFlyTo(500, 250, 1.0);
              }}
              className={`px-2 py-0.5 rounded-lg font-bold transition ${
                zoom <= 1.1 ? 'bg-cyan-400 text-black' : 'text-slate-200 hover:text-white'
              }`}
            >
              1.0x
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setZoom(2.0);
              }}
              className={`px-2 py-0.5 rounded-lg font-bold transition ${
                zoom > 1.8 && zoom < 2.5 ? 'bg-cyan-400 text-black' : 'text-slate-200 hover:text-white'
              }`}
            >
              2.0x
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setZoom(3.2);
              }}
              className={`px-2 py-0.5 rounded-lg font-bold transition ${
                zoom >= 3.0 ? 'bg-cyan-400 text-black' : 'text-slate-200 hover:text-white'
              }`}
            >
              3.2x
            </button>
          </div>

          {/* Floating Tooltip When Hovering Over Any Other Country */}
          {hoveredCountry && (
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-lg border border-cyan-300/40 bg-[#07192e]/90 px-3 py-1 font-mono text-xs font-bold text-cyan-200 backdrop-blur-md shadow-lg pointer-events-none">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{hoveredCountry}</span>
            </div>
          )}

          {/* Bottom Hint */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-black/75 px-3 py-2 font-mono text-[10px] text-sky-200 backdrop-blur-md pointer-events-none sm:right-auto sm:text-[11px]">
            <span>Kéo bản đồ hoặc chọn khu vực; giữ Ctrl và cuộn để zoom</span>
            <span className="hidden sm:inline-block border-l border-cyan-300/30 pl-2 text-cyan-300">
              Zoom: {zoom.toFixed(1)}x
            </span>
          </div>
        </div>

        {/* Right: Selected Node Deep-Dive Telemetry Card (Frosted Glass) */}
        <div className="space-y-3">
          <div className="glass-card-bright rounded-2xl p-4 shadow-xl sm:p-5">
            <div className="flex flex-col gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-[66px] shrink-0 items-center justify-center overflow-hidden shadow">
                  <LocationFlag location={activeLocation} className="h-full w-full" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-black leading-snug text-white">
                    {activeLocation.country}
                  </h4>
                  <p className="mt-1 break-words text-xs leading-4 text-sky-100">{activeLocation.name}</p>
                  <p className="mt-1 text-xs text-cyan-200 font-semibold">{activeLocation.city}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-cyan-300/20 pt-2">
                <p className="shrink-0 font-mono text-xl font-black text-emerald-300">
                  ~{simulatedPings[activeLocation.id]}ms*
                </p>
                <span className="text-[10px] text-sky-200/80 font-mono">*Ước tính, không đo trực tiếp</span>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-sky-100 border-t border-cyan-300/20 pt-3">
              {activeLocation.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded-xl border border-cyan-300/20 bg-black/40 p-2.5">
                <span className="text-[10px] text-sky-200/70">BĂNG THÔNG / BACKBONE</span>
                <p className="font-bold text-white mt-0.5">{activeLocation.speed}</p>
              </div>
              <div className="rounded-xl border border-cyan-300/20 bg-black/40 p-2.5">
                <span className="text-[10px] text-sky-200/70">TRẠNG THÁI GÓI</span>
                <p className="font-bold text-cyan-300 mt-0.5">{activeLocation.availability}</p>
              </div>
            </div>

            <div className="mt-2.5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-2.5 text-xs font-mono text-emerald-200 flex items-center gap-1.5">
              <span>🛡️</span>
              <span>{activeLocation.shield}</span>
            </div>
          </div>

          {/* Quick Node Switcher Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {allDatacenterLocations.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => focusOnNode(loc)}
                className={`min-w-0 rounded-xl border p-2.5 text-center transition ${
                  activeLocation.id === loc.id
                    ? 'border-cyan-300 bg-cyan-400/25 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'border-cyan-300/20 bg-[#052140]/60 text-slate-300 hover:border-cyan-300/40 hover:bg-[#072a50]/80'
                }`}
              >
                <LocationFlag location={loc} className="mx-auto h-4 w-6" />
                <p className="mt-1.5 truncate text-xs font-bold">{loc.country}</p>
                <p className="text-[10px] font-mono text-emerald-300">
                  ~{simulatedPings[loc.id]}ms*
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Datacenter Locations Cards Grid (Including Canada & Europe!) */}
      <div className="mt-8 border-t border-cyan-300/20 pt-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
            Danh mục 6 khu vực trên sơ đồ minh họa
          </span>
          <span className="text-xs font-mono text-emerald-300">
            Tình trạng thực tế: xác nhận qua ticket
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allDatacenterLocations.map((loc) => {
            const isSelected = activeLocation.id === loc.id;
            const pingVal = simulatedPings[loc.id];

            return (
              <div
                key={loc.id}
                onClick={() => focusOnNode(loc)}
                className={`glass-card-bright min-h-40 cursor-pointer rounded-2xl p-4 transition duration-200 flex flex-col justify-between sm:p-5 ${
                  isSelected
                    ? 'border-cyan-300 bg-[#07335d]/90 shadow-[0_0_25px_rgba(0,240,255,0.3)] ring-1 ring-cyan-300'
                    : 'hover:border-cyan-300/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-12 items-center justify-center overflow-hidden shadow">
                      <LocationFlag location={loc} className="h-full w-full" />
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${
                        loc.status === 'paused'
                          ? 'border border-amber-300/30 bg-amber-400/15 text-amber-200'
                          : 'border border-emerald-300/30 bg-emerald-400/15 text-emerald-200'
                      }`}
                    >
                      {loc.status === 'paused' ? 'Kín Slot' : 'Tham khảo'}
                    </span>
                  </div>

                  <p className="mt-3 text-base font-extrabold text-white">{loc.country}</p>
                  <p className="mt-1 text-xs text-cyan-200">{loc.city}</p>
                </div>

                <div className="mt-3 border-t border-cyan-300/15 pt-2.5 flex items-baseline justify-between font-mono text-xs">
                  <span className="text-[10px] text-sky-200/70">Ping tham khảo:</span>
                  <span className="font-bold text-emerald-300">~{pingVal}ms*</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
