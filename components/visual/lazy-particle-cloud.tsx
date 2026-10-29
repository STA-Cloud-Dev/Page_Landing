'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

function SculptureShell() {
  return <div className="particle-sculpture" aria-hidden="true"><div className="sculpture-halo" /><div className="sculpture-orbit" /></div>;
}

const Sculpture = dynamic(() => import('./particle-cloud').then(module => module.ParticleCloud), {
  ssr: false,
  loading: SculptureShell,
});

/** Let the text paint first; don't fetch decorative canvas code below the viewport. */
export function LazyParticleCloud({ lost = false }: { lost?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let secondFrame = 0;
    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let disposed = false;
    const activate = () => {
      frame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          const load = () => { if (!disposed) setReady(true); };
          if ('requestIdleCallback' in window) idle = window.requestIdleCallback(load, { timeout: 1200 });
          else timer = setTimeout(load, 100);
        });
      });
    };
    if ('IntersectionObserver' in window && container.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { observer?.disconnect(); activate(); }
      });
      observer.observe(container.current);
    } else activate();
    return () => {
      disposed = true;
      observer?.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(secondFrame);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      clearTimeout(timer);
    };
  }, []);
  return <div ref={container} className="particle-mount">{ready ? <Sculpture lost={lost} /> : <SculptureShell />}</div>;
}
