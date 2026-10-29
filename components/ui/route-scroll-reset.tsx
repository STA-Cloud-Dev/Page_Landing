'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { sitePath } from '@/lib/site-path';

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    let frameId = 0;
    const navigateToAnchor = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
      let hash: string;
      try {
        hash = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        window.location.replace(sitePath('/404.html'));
        return;
      }
      const target = hash ? document.getElementById(hash) : null;

      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }

      // Fragments never reach the server, so unknown anchors need a client check.
      // Navigate to the exported error document so it also returns HTTP 404.
      if (hash && !hash.startsWith(':~:text=')) {
        window.location.replace(sitePath('/404.html'));
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    };
    navigateToAnchor();
    window.addEventListener('hashchange', navigateToAnchor);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('hashchange', navigateToAnchor);
    };
  }, [pathname]);

  return null;
}
