'use client';

import { useEffect } from 'react';

export function LandingDepthEffects() {
  useEffect(() => {
    const root = document.querySelector('.landing-depth-content');
    if (!root) return;
    const cards = root.querySelectorAll('.glass-card-bright, .depth-plan-card, #policies .grid > a, section > div > .text-center, #openclaw .grid > div, section > .mx-auto.rounded-3xl');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('depth-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    cards.forEach((card, index) => {
      (card as HTMLElement).style.setProperty('--reveal-delay', `${index % 3 * 65}ms`);
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);
  return <div className="depth-light-trails" aria-hidden="true"><span /><span /><span /></div>;
}
