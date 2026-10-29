'use client';

import { useEffect } from 'react';
import { getVisualQuality } from '@/lib/visual-quality';

export function VisualPerformance() {
  useEffect(() => {
    const update = () => { document.documentElement.dataset.visualQuality = getVisualQuality(); };
    update();
    const onVisibility = () => document.documentElement.classList.toggle('visuals-hidden', document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    onVisibility();
    return () => { document.removeEventListener('visibilitychange', onVisibility); document.documentElement.classList.remove('visuals-hidden'); };
  }, []);
  return null;
}
