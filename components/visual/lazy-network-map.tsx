'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

function MapPlaceholder() {
  return (
    <div className="min-h-[900px] rounded-2xl border border-cyan-300/30 bg-[#052242] p-6">
      <h3 className="text-2xl font-bold text-white">Mạng lưới hạ tầng toàn cầu</h3>
      <p className="mt-3 text-sky-100">Canada, Châu Âu, Singapore, Việt Nam, Thailand và Hong Kong.</p>
    </div>
  );
}

const NetworkMap = dynamic(
  () => import('./network-map-vector').then((module) => module.NetworkMapVector),
  { ssr: false, loading: MapPlaceholder }
);

export function LazyNetworkMap() {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!container.current || !('IntersectionObserver' in window)) {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '600px' });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={container}>{ready ? <NetworkMap /> : <MapPlaceholder />}</div>;
}
