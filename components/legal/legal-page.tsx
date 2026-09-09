import { Reveal } from '@/components/ui/reveal';
import { SiteFooter } from '@/components/shared/site-footer';
import { homeConfig } from '@/components/home/content';
import { sitePath } from '@/lib/site-path';
import { Section3DAccent } from '@/components/visual/section-3d-accent';
import type { LegalSection } from './legal-content';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

function getSectionId(index: number) {
  return `muc-${index + 1}`;
}

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="legal-shell min-h-screen px-4 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-6">
      <header className="sticky top-3 z-40 mx-auto max-w-7xl rounded-2xl border border-cyan-200/25 bg-[#031a2f]/90 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <a href={sitePath('/')} className="group flex min-w-0 items-center gap-3 rounded-xl px-2 py-1.5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-200/30 bg-black/45 p-2 shadow-[0_0_24px_rgba(72,202,228,0.18)]">
              <img src={sitePath('/picture/logoSTACloud.png')} alt="STACloud" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-white transition group-hover:text-cyan-200">STACloud</p>
              <p className="truncate text-xs text-sky-200/70">Trung tâm chính sách & tài liệu dịch vụ</p>
            </div>
          </a>

          <nav className="grid grid-cols-3 gap-2 text-xs font-semibold sm:flex sm:flex-wrap sm:text-sm">
            <a href={sitePath('/')} className="inline-flex min-h-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-white/[0.04] px-3 text-sky-100 transition hover:bg-cyan-300/10 hover:text-white">Trang chủ</a>
            <a href={sitePath('/free-server')} className="inline-flex min-h-10 items-center justify-center rounded-xl border border-emerald-200/25 bg-emerald-400/10 px-3 text-emerald-100 transition hover:bg-emerald-400/20">Node Test Free</a>
            <a href={sitePath('/egg')} className="inline-flex min-h-10 items-center justify-center rounded-xl border border-cyan-200/20 bg-white/[0.04] px-3 text-sky-100 transition hover:bg-cyan-300/10 hover:text-white">Eggs</a>
            <a href={homeConfig.panelUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-white px-4 text-slate-950 transition hover:bg-cyan-100">Mở Portal</a>
            <a href={homeConfig.discordUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-sky-500 px-4 text-white transition hover:bg-sky-400">Discord</a>
          </nav>
        </div>
      </header>

      <section className="legal-hero relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-3xl border border-cyan-200/20 px-5 py-8 sm:px-8 sm:py-12">
        <div className="legal-orbit legal-orbit-one" aria-hidden="true" />
        <div className="legal-orbit legal-orbit-two" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <Reveal className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(72,202,228,0.9)]" />
              {eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl break-words text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-sky-100/85 sm:text-lg sm:leading-8">{intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-xl border border-cyan-200/20 bg-black/25 px-4 py-2 text-sm text-cyan-100">Cập nhật: <strong className="text-white">{lastUpdated}</strong></span>
              <span className="rounded-xl border border-cyan-200/20 bg-black/25 px-4 py-2 text-sm text-cyan-100">{sections.length} mục nội dung</span>
            </div>
          </Reveal>
          <Reveal delayMs={100}><Section3DAccent variant="legal" size="compact" /></Reveal>
        </div>
      </section>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <div className="rounded-2xl border border-cyan-200/20 bg-[#031a2f]/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="px-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Mục lục</p>
            <nav className="mt-3 max-h-[68vh] space-y-1 overflow-y-auto pr-1">
              {sections.map((section, index) => (
                <a key={section.title} href={`#${getSectionId(index)}`} className="legal-index-link flex gap-3 rounded-xl px-2 py-2.5 text-xs leading-5 text-sky-100/75 transition hover:bg-cyan-300/10 hover:text-white">
                  <span className="font-mono font-bold text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <section className="grid min-w-0 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delayMs={(index % 5) * 45}>
              <article id={getSectionId(index)} className="legal-article group scroll-mt-32 rounded-2xl border border-cyan-200/20 bg-[#052846]/80 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-200/30 bg-cyan-300/10 font-mono text-sm font-black text-cyan-200 transition group-hover:bg-cyan-300/20">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-sky-100/80 sm:text-base">{paragraph}</p>)}
                    {section.bullets ? (
                      <ul className="mt-5 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-7 text-sky-100/80 sm:text-base"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(72,202,228,0.8)]" /><span>{bullet}</span></li>
                        ))}
                      </ul>
                    ) : null}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="mt-6 border-l-2 border-cyan-300/30 pl-4 sm:pl-5">
                        <h3 className="text-base font-bold text-cyan-50 sm:text-lg">{subsection.title}</h3>
                        {subsection.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-7 text-sky-100/75 sm:text-base">{paragraph}</p>)}
                        {subsection.bullets ? (
                          <ul className="mt-4 grid gap-3">
                            {subsection.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-7 text-sky-100/75 sm:text-base"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" /><span>{bullet}</span></li>)}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
