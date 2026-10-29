'use client';

import { useEffect, useRef, useState } from 'react';

/** A projected point sculpture: no WebGL runtime or downloaded 3D assets. */
export function ParticleCloud({ lost = false }: { lost?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(false);
  const redrawRef = useRef<(() => void) | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 640px)').matches;
    const count = small ? 1050 : 2300;
    // A torus knot gives the cloud a continuous, sculptural silhouette.
    let points = Array.from({ length: count }, (_, i) => {
      const u = (i / count) * Math.PI * 2;
      const v = i * 2.3999632297;
      const tube = 0.2 + 0.05 * Math.sin(u * 9);
      const radius = 0.84 + 0.3 * Math.cos(3 * u);
      return {
        x: (radius + tube * Math.cos(v)) * Math.cos(2 * u),
        y: (radius + tube * Math.cos(v)) * Math.sin(2 * u),
        z: 0.38 * Math.sin(3 * u) + tube * Math.sin(v),
        size: 0.6 + (i % 7) / 8,
      };
    });
    if (lost) {
      // Sample the digits into a shallow volume so the 404 itself becomes 3D.
      const mask = document.createElement('canvas');
      mask.width = 600; mask.height = 260;
      const maskContext = mask.getContext('2d');
      if (maskContext) {
        maskContext.font = '700 240px sans-serif';
        maskContext.textAlign = 'center';
        maskContext.textBaseline = 'middle';
        maskContext.fillText('404', 300, 140);
        const pixels = maskContext.getImageData(0, 0, 600, 260).data;
        const samples: { x: number; y: number }[] = [];
        for (let y = 0; y < 260; y += 3) {
          for (let x = 0; x < 600; x += 3) {
            if (pixels[(y * 600 + x) * 4 + 3] > 128) samples.push({ x, y });
          }
        }
        if (samples.length) points = points.map((point, i) => {
          const sample = samples[Math.floor(((i * 0.61803398875) % 1) * samples.length)];
          return { ...point, x: (sample.x - 300) / 165, y: (sample.y - 140) / 165, z: Math.sin(i * 17.31) * 0.16 };
        });
      }
    }
    let width = 1, height = 1, frame = 0, elapsed = 0, lastTime = 0;
    let visible = true, disposed = false;
    let pointerX = 0, pointerY = 0, tiltX = 0, tiltY = 0;
    let pointerActive = false;
    // Screen-space spring offsets stay attached to each particle as the cloud turns.
    const offsets = new Float32Array(count * 4);
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width; height = box.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (time: number) => {
      frame = 0;
      if (disposed) return;
      const moving = !motion.matches && !pausedRef.current;
      const delta = lastTime ? Math.min(time - lastTime, 50) : 16.667;
      if (moving && lastTime) elapsed += delta;
      lastTime = time;
      if (motion.matches) { tiltX = 0; tiltY = 0; offsets.fill(0); }
      if (moving) {
        const ease = 1 - Math.pow(0.955, delta / 16.667);
        tiltX += (pointerX - tiltX) * ease;
        tiltY += (pointerY - tiltY) * ease;
      }
      const t = elapsed * 0.000095;
      const ay = (lost ? Math.sin(t) * 0.18 : t + 0.5) + tiltX * 0.35;
      const ax = (lost ? Math.sin(t * 0.7) * 0.08 : -0.52 + Math.sin(t * 0.7) * 0.16) + tiltY * 0.25;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width * 0.37, height * 0.37);
      const radius = Math.min(145, Math.max(85, Math.min(width, height) * 0.23));
      const cursorX = (pointerX + 0.5) * width;
      const cursorY = (pointerY + 0.5) * height;
      const projected = points.map((p, i) => {
        const drift = lost ? 1 + 0.007 * Math.sin(t * 2 + i * 0.2) : 1;
        const x = (p.x * Math.cos(ay) + p.z * Math.sin(ay)) * drift;
        const z = -p.x * Math.sin(ay) + p.z * Math.cos(ay);
        const y = p.y * Math.cos(ax) - z * Math.sin(ax);
        const depth = p.y * Math.sin(ax) + z * Math.cos(ax);
        const perspective = 3.8 / (3.8 - depth);
        const screenX = width / 2 + x * scale * perspective;
        const screenY = height / 2 + y * scale * perspective;
        const offset = i * 4;
        if (moving) {
          const dx = screenX - cursorX, dy = screenY - cursorY;
          const distance = Math.hypot(dx, dy);
          const force = pointerActive ? Math.pow(Math.max(0, 1 - distance / radius), 2) * radius * 0.95 : 0;
          const targetX = (distance > 0.01 ? dx / distance : Math.cos(i)) * force;
          const targetY = (distance > 0.01 ? dy / distance : Math.sin(i)) * force;
          // Small substeps keep the spring stable on slower devices and high refresh displays.
          const steps = Math.ceil(delta / 16.667);
          const step = delta / (16.667 * steps);
          const damping = Math.pow(0.74, step);
          for (let n = 0; n < steps; n++) {
            offsets[offset + 2] = (offsets[offset + 2] + (targetX - offsets[offset]) * 0.09 * step) * damping;
            offsets[offset + 3] = (offsets[offset + 3] + (targetY - offsets[offset + 1]) * 0.09 * step) * damping;
            offsets[offset] += offsets[offset + 2] * step;
            offsets[offset + 1] += offsets[offset + 3] * step;
          }
        }
        return { x: screenX + offsets[offset], y: screenY + offsets[offset + 1], z: depth, size: p.size * perspective };
      }).sort((a, b) => a.z - b.z);
      for (const p of projected) {
        const brightness = Math.max(0.13, Math.min(1, (p.z + 1.5) / 2.6));
        ctx.fillStyle = `rgba(${Math.round(65 + brightness * 155)},${Math.round(150 + brightness * 95)},255,${brightness})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (small ? 0.95 : 1.1), 0, Math.PI * 2);
        ctx.fill();
      }
      // Only animate while on screen. A static sculpture remains for reduced motion.
      if (moving && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const requestDraw = () => { lastTime = 0; if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); };
    redrawRef.current = requestDraw;
    const move = (event: PointerEvent) => {
      if (motion.matches || pausedRef.current || event.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      pointerActive = true;
    };
    const leave = () => { pointerX = 0; pointerY = 0; pointerActive = false; };
    const observer = new ResizeObserver(() => { resize(); requestDraw(); });
    observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestDraw();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    intersection.observe(canvas);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', requestDraw);
    motion.addEventListener('change', requestDraw);
    resize(); requestDraw();
    return () => {
      disposed = true; cancelAnimationFrame(frame);
      redrawRef.current = null;
      observer.disconnect(); intersection.disconnect();
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', requestDraw);
      motion.removeEventListener('change', requestDraw);
    };
  }, [lost]);

  useEffect(() => {
    pausedRef.current = paused;
    // Resume the same sculpture and rotation instead of rebuilding it from scratch.
    if (!paused) redrawRef.current?.();
  }, [paused]);

  return (
    <div className={`particle-sculpture${lost ? ' particle-sculpture-lost' : ''}`}>
      <div className="sculpture-halo" aria-hidden="true" />
      <div className="sculpture-orbit" aria-hidden="true" />
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="sculpture-coordinate sculpture-coordinate-top" aria-hidden="true">STA / COMPUTE FIELD</span>
      <span className="sculpture-coordinate sculpture-coordinate-bottom" aria-hidden="true">{lost ? 'SIGNAL LOST · 404' : '10.8231° N / 106.6297° E'}</span>
      <button className="sculpture-pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} aria-label={paused ? 'Tiếp tục hiệu ứng 3D' : 'Tạm dừng hiệu ứng 3D'}>
        {paused ? '▶' : 'Ⅱ'}<span>{paused ? 'Tiếp tục' : 'Dừng chuyển động'}</span>
      </button>
    </div>
  );
}
