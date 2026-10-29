'use client';

import { useEffect, useRef } from 'react';
import { getVisualQuality } from '@/lib/visual-quality';

/** One viewport-sized canvas avoids hundreds of DOM layers or a page-sized bitmap. */
export function AmbientParticles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const quality = getVisualQuality();
    if (quality === 'lite') return;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let width = 1, height = 1, frame = 0, last = 0, time = 0;
    let color = '103,232,249';
    const particles = Array.from({ length: quality === 'balanced' ? 40 : 160 }, (_, i) => ({
      x: ((i * 0.61803398875) % 1), y: ((i * 0.41421356237) % 1), size: .4 + (i % 5) * .22,
    }));
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = 1;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (now: number) => {
      frame = 0;
      if (document.hidden || document.documentElement.dataset.visualQuality === 'lite') { ctx.clearRect(0,0,width,height); return; }
      if (last && now - last < 1000 / 30 - 1) { frame = requestAnimationFrame(draw); return; }
      if (last) time += Math.min(now - last, 50);
      last = now;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${color},.36)`;
      const scrollY = window.scrollY;
      for (const p of particles) {
        const y = ((p.y * height - time * .004 - scrollY * .025) % height + height) % height;
        ctx.beginPath(); ctx.arc(p.x * width + Math.sin(time * .0001 + p.y * 6) * 8, y, p.size, 0, Math.PI * 2); ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };
    const resume = () => { last = 0; if (!frame && !document.hidden) frame = requestAnimationFrame(draw); };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) color = entry.target.id === 'free-hosting' ? '110,231,183' : entry.target.id === 'faq' ? '253,230,138' : '103,232,249';
    }, { rootMargin: '-35% 0px -35% 0px' });
    document.querySelectorAll('.cosmic-home section[id]').forEach(section => observer.observe(section));
    resize(); resume();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', resume);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', resume); };
  }, []);
  return <canvas ref={ref} className="ambient-particle-field" aria-hidden="true" />;
}
