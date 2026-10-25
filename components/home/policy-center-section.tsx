import { sitePath } from '@/lib/site-path';

const documents = [
  {
    path: '/terms',
    title: 'Điều khoản dịch vụ',
    description: 'Quy định sử dụng, thanh toán và trách nhiệm của người dùng.',
  },
  {
    path: '/privacy',
    title: 'Chính sách quyền riêng tư',
    description: 'Cách thông tin tài khoản và dữ liệu cá nhân được xử lý.',
  },
  {
    path: '/sla',
    title: 'Cam kết chất lượng SLA',
    description: 'Mục tiêu uptime, phạm vi áp dụng và cơ chế service credit.',
  },
  {
    path: '/refund',
    title: 'Chính sách hoàn Credit',
    description: 'Điều kiện, cách tính và quy trình hoàn vào số dư Portal.',
  },
  {
    path: '/security',
    title: 'Bảo mật máy chủ',
    description: 'Quyền truy cập hỗ trợ, bảo vệ tài nguyên và sao lưu.',
  },
  {
    path: '/cookies',
    title: 'Chính sách Cookie',
    description: 'Cookie, lưu trữ trình duyệt và quyền kiểm soát dữ liệu.',
  },
] as const;

export function PolicyCenterSection() {
  return (
    <section id="policies" aria-labelledby="policies-title" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/30 bg-[#031b34]/90 p-5 shadow-xl sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">STACloud Policy Center</p>
          <h2 id="policies-title" className="text-2xl font-black text-white sm:text-3xl">Chính sách &amp; điều khoản dịch vụ</h2>
          <p className="max-w-3xl text-sm leading-6 text-sky-100/85">
            Xem đầy đủ các quy định trước khi đăng ký hoặc gia hạn dịch vụ. Mỗi tài liệu được công bố riêng và có thể đọc trực tiếp.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <a
              key={doc.path}
              href={sitePath(doc.path)}
              className="group flex min-h-40 flex-col justify-between rounded-2xl border border-cyan-300/25 bg-[#082b4b]/65 p-5 transition hover:border-cyan-300/60 hover:bg-[#103d60] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-200">{doc.title}</h3>
                <p className="mt-2 text-sm leading-6 text-sky-100/80">{doc.description}</p>
              </div>
              <span className="mt-4 text-xs font-bold text-cyan-300">Đọc chính sách →</span>
            </a>
          ))}
        </div>
        <a href={sitePath('/free-server#service-rules')} className="mt-5 inline-flex text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">
          Xem thêm chính sách áp dụng cho NODE TEST, Beta và từng gói máy chủ →
        </a>
      </div>
    </section>
  );
}
