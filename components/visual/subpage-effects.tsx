'use client';

import { useEffect, useRef } from 'react';
import { getVisualQuality } from '@/lib/visual-quality';

export function SubpageEffects() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current?.parentElement;
    if (!root || getVisualQuality() === 'lite' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('depth-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: .05 });
    const observe = () => root.querySelectorAll('article, section > .mx-auto, aside > div').forEach(card => {
      if (!card.classList.contains('depth-revealed')) observer.observe(card);
    });
    observe();
    const changes = new MutationObserver(observe);
    changes.observe(root, { childList: true, subtree: true });
    return () => { observer.disconnect(); changes.disconnect(); };
  }, []);
  return <div ref={ref} className="subpage-atmosphere" aria-hidden="true"><span /><span /></div>;
}
