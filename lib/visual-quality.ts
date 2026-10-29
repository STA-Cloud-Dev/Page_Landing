export type VisualQuality = 'lite' | 'balanced' | 'full';

/** Hardware hints are optional; missing values must not be treated as zero. */
export function getVisualQuality(): VisualQuality {
  if (typeof window === 'undefined') return 'lite';
  if (document.documentElement.dataset.visualQuality === 'lite') return 'lite';
  const device = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  const lowCores = !!device.hardwareConcurrency && device.hardwareConcurrency <= 4;
  const lowMemory = !!device.deviceMemory && device.deviceMemory <= 4;
  if (device.connection?.saveData || lowCores || lowMemory ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window) || !('ResizeObserver' in window)) return 'lite';
  return window.matchMedia('(pointer: coarse), (max-width: 767px)').matches ? 'balanced' : 'full';
}

export function useLiteVisuals() {
  document.documentElement.dataset.visualQuality = 'lite';
  window.dispatchEvent(new Event('visual-quality-change'));
}
