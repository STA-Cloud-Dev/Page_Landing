'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { getVisualQuality } from '@/lib/visual-quality';

function MapPlaceholder() {
  return (
    <div className="rounded-3xl border border-cyan-300/30 bg-[#153e5c] p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-white">Mạng lưới hạ tầng toàn cầu</h3>
      <p className="mt-3 text-sky-100">Canada, Châu Âu, Singapore, Việt Nam, Thailand và Hong Kong.</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {['Singapore', 'Việt Nam', 'Hong Kong', 'Thailand', 'Châu Âu', 'Canada'].map(name => <li key={name} className="rounded-2xl border border-cyan-200/20 bg-white/5 px-5 py-4 text-sky-100">{name}</li>)}
      </ul>
      <p className="mt-5 text-sm text-sky-100/80">Liên hệ hỗ trợ để xác nhận khu vực và tình trạng slot cho gói bạn chọn.</p>
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
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const update = () => setLite(getVisualQuality() === 'lite');
    update();
    window.addEventListener('visual-quality-change', update);
    return () => window.removeEventListener('visual-quality-change', update);
  }, []);

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

  return <div ref={container}>{ready && !lite ? <NetworkMap /> : <MapPlaceholder />}</div>;
}
