'use client';

import React from 'react';

export function CyberBackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient Luminous Light Orbs for Bright Depth */}
      <span className="ambient-orb ambient-orb-cyan -top-24 -left-20 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px]" />
      <span className="ambient-orb ambient-orb-blue top-[18%] -right-32 h-[550px] w-[550px] sm:h-[750px] sm:w-[750px]" />
      <span className="ambient-orb ambient-orb-cyan top-[52%] left-[15%] h-[600px] w-[600px]" />
      <span className="ambient-orb ambient-orb-emerald -bottom-20 right-[25%] h-[450px] w-[450px]" />

      {/* Dynamic ambient mesh gradient */}
      <span className="cyber-bg-mesh" />

      {/* Cyber sub-pixel grid with smooth drift */}
      <span className="cyber-bg-grid opacity-30" />

      {/* Laser glow beams */}
      <span className="cyber-bg-beam cyber-bg-beam-one" />
      <span className="cyber-bg-beam cyber-bg-beam-two" />

      {/* High-tech circuit traces */}
      <span className="cyber-bg-circuit" />

      {/* Orbital glowing rings */}
      <span className="cyber-bg-ring cyber-bg-ring-one" />
      <span className="cyber-bg-ring cyber-bg-ring-two" />

      {/* Periodic telemetry scanner light */}
      <span className="cyber-bg-scanline" />
    </div>
  );
}
