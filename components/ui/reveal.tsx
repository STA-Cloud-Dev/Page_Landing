import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

// Content has always started visible. Keep that behavior without scheduling
// per-card geometry reads, observers and fallback timers during hydration.
export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  return (
    <div className={`reveal is-visible ${className}`.trim()} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}
