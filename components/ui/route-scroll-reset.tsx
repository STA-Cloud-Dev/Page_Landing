'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const hash = window.location.hash.slice(1);
      const target = hash ? document.getElementById(hash) : null;

      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return null;
}
