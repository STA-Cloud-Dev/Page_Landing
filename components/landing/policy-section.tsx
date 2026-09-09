import { policyGroups } from './content';
import { Section3DAccent } from '@/components/visual/section-3d-accent';

export function PolicySection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="status-panel mx-auto max-w-6xl rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 backdrop-blur sm:p-8">
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Important Rules</p>
            <h2 className="section-title">Chính sách mới bạn cần biết trước khi đăng ký</h2>
            <p className="section-copy">
              Nội dung dưới đây được cập nhật trực tiếp theo thông báo mới nhất, tập trung vào giá,
              slot, trạng thái gói, tùy chọn nâng cấp và lưu ý riêng cho NODE TEST miễn phí.
            </p>
          </div>
          <Section3DAccent variant="legal" size="compact" />
        </div>

        <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
          {policyGroups.map((group) => (
            <article
              key={group.title}
              className="interactive-card relative overflow-hidden rounded-lg border border-cyan-300/15 bg-black/35 p-6"
            >
              <span className="card-3d-badge card-3d-badge--legal" aria-hidden="true">
                <span />
              </span>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
