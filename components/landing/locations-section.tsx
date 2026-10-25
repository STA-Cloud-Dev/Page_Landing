import Image from 'next/image';
import { locations } from './content';
import { Section3DAccent } from '@/components/visual/section-3d-accent';

export function LocationsSection() {
  return (
    <section id="locations" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="status-panel mx-auto max-w-6xl rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 backdrop-blur sm:p-8">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Locations</p>
            <h2 className="section-title">Các location hiện có cho gói cộng đồng và dịch vụ trả phí</h2>
            <p className="section-copy">
              Xem nhanh location nào hỗ trợ free hoặc paid để chọn khu vực phù hợp với nhu cầu sử dụng.
            </p>
          </div>
          <Section3DAccent variant="location" size="compact" />
        </div>

        <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="interactive-card relative min-w-0 overflow-hidden rounded-lg border border-cyan-300/15 bg-black/35 p-5 sm:p-6"
            >
              <span className="card-3d-badge card-3d-badge--location" aria-hidden="true">
                <span />
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="relative aspect-[3/2] w-20 shrink-0 overflow-hidden shadow-sm">
                    <Image
                      src={location.flagSrc}
                      alt={`${location.name} flag`}
                      fill
                      sizes="80px"
                      loading="eager"
                      className="block object-fill"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-xl font-semibold text-white sm:text-2xl">{location.name}</p>
                    <h3 className="mt-2 text-lg font-semibold text-cyan-100 sm:text-xl">{location.speed}</h3>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  {location.availability}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{location.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
