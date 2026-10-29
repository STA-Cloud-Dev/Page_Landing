'use client';

import { useEffect, useRef } from 'react';
import { getVisualQuality, useLiteVisuals } from '@/lib/visual-quality';

/** A projected point sculpture: no WebGL runtime or downloaded 3D assets. */
export function ParticleCloud({ lost = false }: { lost?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 640px)').matches;
    const quality = getVisualQuality();
    const count = quality === 'lite' ? 240 : quality === 'balanced' ? 480 : 1400;
    const frameInterval = 1000 / (quality === 'full' ? 60 : 30);
    let staticOnly = quality === 'lite';
    let slowFrames = 0;
    // Two Fibonacci shells form a luminous compute core with visible depth.
    let points = Array.from({ length: count }, (_, i) => {
      const y = 1 - 2 * i / (count - 1);
      const angle = i * 2.3999632297;
      const radius = i % 4 === 0 ? 0.76 : 1;
      const ring = Math.sqrt(1 - y * y) * radius;
      return {
        x: ring * Math.cos(angle),
        y: y * radius,
        z: ring * Math.sin(angle),
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
    let pointerSpeed = 0;
    // Screen-space spring offsets stay attached to each particle as the cloud turns.
    const offsets = new Float32Array(count * 4);
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width; height = box.height;
      const dpr = Math.min(window.devicePixelRatio || 1, quality === 'full' ? 1.5 : 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (time: number) => {
      frame = 0;
      if (disposed) return;
      if (lastTime && time - lastTime < frameInterval - 1) { frame = requestAnimationFrame(draw); return; }
      const drawStarted = performance.now();
      const moving = !staticOnly && !motion.matches && document.documentElement.dataset.visualQuality !== 'lite';
      const delta = lastTime ? Math.min(time - lastTime, 50) : 16.667;
      if (moving && lastTime) elapsed += delta;
      lastTime = time;
      if (!moving) { tiltX = 0; tiltY = 0; offsets.fill(0); }
      pointerSpeed *= Math.pow(.9, delta / 16.667);
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
      // Transparent dots do not need depth sorting or an object allocation per dot/frame.
      const cosY = Math.cos(ay), sinY = Math.sin(ay), cosX = Math.cos(ax), sinX = Math.sin(ax);
      points.forEach((p, i) => {
        const drift = lost ? 1 + 0.007 * Math.sin(t * 2 + i * 0.2) : 1;
        const x = (p.x * cosY + p.z * sinY) * drift;
        const z = -p.x * sinY + p.z * cosY;
        const y = p.y * cosX - z * sinX;
        const depth = p.y * sinX + z * cosX;
        const perspective = 3.8 / (3.8 - depth);
        const screenX = width / 2 + x * scale * perspective;
        const screenY = height / 2 + y * scale * perspective;
        const offset = i * 4;
        if (moving) {
          const dx = screenX - cursorX, dy = screenY - cursorY;
          const distance = Math.hypot(dx, dy);
          const force = pointerActive ? Math.pow(Math.max(0, 1 - distance / radius), 2) * radius * (.95 + pointerSpeed) : 0;
          const targetX = (distance > 0.01 ? dx / distance : Math.cos(i)) * force;
          const targetY = (distance > 0.01 ? dy / distance : Math.sin(i)) * force;
          // Small substeps keep the spring stable on slower devices and high refresh displays.
          const steps = Math.ceil(delta / 16.667);
          const step = delta / (16.667 * steps);
          const damping = Math.pow(lost ? 0.85 : 0.74, step);
          const stiffness = lost ? 0.04 : 0.09;
          for (let n = 0; n < steps; n++) {
            offsets[offset + 2] = (offsets[offset + 2] + (targetX - offsets[offset]) * stiffness * step) * damping;
            offsets[offset + 3] = (offsets[offset + 3] + (targetY - offsets[offset + 1]) * stiffness * step) * damping;
            offsets[offset] += offsets[offset + 2] * step;
            offsets[offset + 1] += offsets[offset + 3] * step;
          }
        }
        const brightness = Math.max(0.13, Math.min(1, (depth + 1.5) / 2.6));
        ctx.fillStyle = `rgba(${Math.round(65 + brightness * 155)},${Math.round(150 + brightness * 95)},255,${brightness})`;
        ctx.beginPath();
        ctx.arc(screenX + offsets[offset], screenY + offsets[offset + 1], p.size * perspective * (small ? 0.95 : 1.1), 0, Math.PI * 2);
        ctx.fill();
      });
      slowFrames = performance.now() - drawStarted > 20 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
      if (slowFrames >= 12) { staticOnly = true; useLiteVisuals(); }
      // Only animate while on screen. A static sculpture remains for reduced motion.
      if (moving && !staticOnly && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const requestDraw = () => { lastTime = 0; if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); };
    const move = (event: PointerEvent) => {
      if (staticOnly || getVisualQuality() !== 'full' || event.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      const nextX = (event.clientX - rect.left) / rect.width - 0.5;
      const nextY = (event.clientY - rect.top) / rect.height - 0.5;
      pointerSpeed = Math.min(.75, Math.hypot(nextX - pointerX, nextY - pointerY) * 8);
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      pointerActive = true;
    };
    const leave = () => { pointerX = 0; pointerY = 0; pointerActive = false; };
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { resize(); requestDraw(); }) : null;
    observer?.observe(canvas);
    const intersection = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestDraw();
      else { cancelAnimationFrame(frame); frame = 0; }
    }) : null;
    intersection?.observe(canvas);
    const onResize = () => { resize(); requestDraw(); };
    window.addEventListener('resize', onResize);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', requestDraw);
    if (motion.addEventListener) motion.addEventListener('change', requestDraw);
    else motion.addListener(requestDraw);
    resize(); requestDraw();
    return () => {
      disposed = true; cancelAnimationFrame(frame);
      observer?.disconnect(); intersection?.disconnect();
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', requestDraw);
      if (motion.removeEventListener) motion.removeEventListener('change', requestDraw);
      else motion.removeListener(requestDraw);
    };
  }, [lost]);

  return (
    <div className={`particle-sculpture${lost ? ' particle-sculpture-lost' : ''}`}>
      <div className="sculpture-halo" aria-hidden="true" />
      <div className="sculpture-orbit" aria-hidden="true" />
      <canvas ref={canvasRef} aria-hidden="true" />
      {!lost && <><span className="sculpture-coordinate sculpture-coordinate-top" aria-hidden="true">STA / COMPUTE FIELD</span>
      <span className="sculpture-coordinate sculpture-coordinate-bottom" aria-hidden="true">10.8231° N / 106.6297° E</span></>}
    </div>
  );
}
