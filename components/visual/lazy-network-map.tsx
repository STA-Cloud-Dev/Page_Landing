'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { getVisualQuality } from '@/lib/visual-quality';
import { allDatacenterLocations } from './network-regions';

function MapPlaceholder() {
  return (
    <div className="rounded-3xl border border-cyan-300/30 bg-[#153e5c] p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-white">Mạng lưới hạ tầng toàn cầu</h3>
      <p className="mt-3 text-sky-100">Danh mục các khu vực trên sơ đồ minh họa: các region thương mại Oracle Cloud, Hà Nội, TP. Hồ Chí Minh và Hong Kong. Ping trên bản đồ là mô phỏng ngẫu nhiên theo khu vực.</p>
      <details className="group/regions mt-5">
        <summary className="cursor-pointer rounded-xl border border-cyan-300/30 px-4 py-3 font-semibold text-cyan-100">
          Danh mục các khu vực trên sơ đồ minh họa
          <span className="ml-2 text-xs group-open/regions:hidden">Bấm để mở {allDatacenterLocations.length} khu vực</span>
          <span className="ml-2 hidden text-xs group-open/regions:inline">Bấm để thu gọn</span>
        </summary>
      <ul className="mt-4 grid max-h-80 overflow-y-auto gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allDatacenterLocations.map(location => <li key={location.id} className="rounded-2xl border border-cyan-200/20 bg-white/5 px-5 py-4 text-sky-100">{location.name}{location.status === 'planned' ? ' • Sắp mở' : ''}</li>)}
      </ul>
      </details>
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
  const [requestedMap, setRequestedMap] = useState(false);

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

  return <div ref={container}>{(ready && !lite) || requestedMap ? <NetworkMap /> : <><MapPlaceholder /><button type="button" onClick={() => setRequestedMap(true)} className="mt-4 rounded-xl border border-cyan-300/40 bg-cyan-400/15 px-5 py-3 text-sm font-bold text-cyan-100">Mở bản đồ tương tác & ping mô phỏng</button></>}</div>;
}
