'use client';

import React, { useRef, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
}

export function TiltCard({
  children,
  className = '',
  glareColor = 'rgba(0, 240, 255, 0.15)',
  tiltMaxAngleX = 6,
  tiltMaxAngleY = 6,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltMaxAngleX;
      const rotateY = ((x - centerX) / centerX) * tiltMaxAngleY;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;

      if (glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareRef.current.style.opacity = '1';
        glareRef.current.style.background = `radial-gradient(circle 280px at ${glareX}% ${glareY}%, ${glareColor}, transparent 80%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {/* Dynamic Glare Reflection */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ease-out"
      />
      {children}
    </div>
  );
}
