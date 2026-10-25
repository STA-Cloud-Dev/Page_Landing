import { gamePlans, paidPlans, paidPlanSpecs, formatCredit, backupSchedule } from '@/components/shared/paid-plans';

export const homeConfig = {
  name: 'STACloud',
  tagline: 'Free Hosting cho Bot, Web & Project sinh viên',
  panelUrl: 'https://portal.stacloud.eu.cc/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  messengerUrl: 'https://m.me/j/AbaXFRAcUrDjgFCN/?send_source=gc%3Acopy_invite_link_c',
  freeServerUrl: '/free-server',
  logoAlt: 'STACloud Logo',
  summary:
    'Free hosting cho bot Discord, web nhỏ và project sinh viên; kèm Portal quản trị game server, OpenClaw Beta và VPS OVH Singapore chống DDoS.',
  testerAlertMessage:
    '⚠️ Cảnh báo gói NODE TEST (tên cũ: TESTER): Gói miễn phí không hỗ trợ backup. Vui lòng tự tải dữ liệu quan trọng về máy; tài khoản vi phạm quy định sử dụng sẽ bị khóa vĩnh viễn.',
};

export const heroStats = [
  { value: '17', label: 'Gói dịch vụ đang công bố', tone: 'cyan' },
  { value: '8', label: 'Gói Linux Egg & Dev', tone: 'sky' },
  { value: 'L3/L4', label: 'Bảo vệ mạng OVH', tone: 'emerald' },
  { value: '0đ', label: 'Node Test & OpenClaw Free', tone: 'indigo' },
] as const;

export const heroSignals = [
  '🎁 Node Test 100% Free cho bot Discord, web nhỏ và project sinh viên',
  '⚡ Free Forever • 75% CPU • 2 GB RAM',
  '🦞 OpenClaw Beta miễn phí - Trải nghiệm AI & Web không cần domain riêng',
] as const;

export const heroStatusStrip = [
  { label: 'NODE TEST', detail: '75% CPU • 2 GB RAM', value: 'Free Forever', tone: 'emerald', status: 'active' },
  { label: 'Dev 1', detail: '75% CPU • 512 MB RAM', value: '7.000 Credit / 28 ngày', tone: 'emerald', status: 'active' },
  { label: 'Game Servers 1', detail: 'Gói máy chủ game trả phí', value: '50.000 Credit / 28 ngày', tone: 'cyan', status: 'active' },
  { label: 'OPENCLAW', detail: 'Free Beta AI & Web', value: '0đ / Không cần Domain', tone: 'blue', status: 'beta' },
  { label: 'STA-XEON-01', detail: 'OVH Singapore 6GB RAM', value: '146.000đ / tháng', tone: 'cyan', status: 'preorder' },
  { label: 'STA-AMD-EPYC-01', detail: 'AMD EPYC 7GB RAM', value: '249.000đ / tháng', tone: 'blue', status: 'preorder' },
] as const;

export const allServicePlans = [
  {
    id: 'node-test',
    category: 'community',
    name: 'NODE TEST',
    badge: '100% Free',
    status: 'active',
    price: '0 Credit',
    period: 'Mỗi lần tạo plan',
    description: 'Gói miễn phí ưu tiên cho bot Discord, web nhỏ và project học tập của sinh viên.',
    specs: [],
    upsizeAvailable: false,
    upsizeNotes: '',
    warning: '',
    ctaText: 'Đăng Ký NODE TEST',
  },
  {
    id: 'openclaw',
    category: 'beta',
    name: 'OPENCLAW BETA',
    badge: 'Free AI Engine',
    status: 'beta',
    price: '0 VNĐ',
    period: 'Miễn Phí Beta',
    description: 'OpenClaw Beta mở miễn phí cho cộng đồng trải nghiệm AI & Web. Chạy mượt mà, không cần sở hữu domain riêng.',
    specs: ['Không cần domain riêng', 'Băng thông cao Singapore / VN', 'Tối ưu Web & AI App', 'SSL Tunneling tự động'],
    upsizeAvailable: false,
    upsizeNotes: 'Được hỗ trợ qua kênh Zalo, Discord và Messenger.',
    warning: 'Không khuyến nghị chọn node Hong Kong cho tác vụ AI do một số API bên thứ 3 giới hạn khu vực.',
    ctaText: 'Trải Nghiệm OpenClaw',
  },
  ...paidPlans.map((plan) => ({
    id: plan.name.toLowerCase().replaceAll(' ', '-'),
    category: plan.name.startsWith('Egg Linux') ? 'linux' : 'community',
    name: plan.name,
    badge: plan.name.startsWith('Egg Linux') ? 'Linux Egg • Trả phí' : 'Bot & Web',
    status: 'active',
    price: `${formatCredit(plan.credit)} Credit`,
    period: `${plan.days} ngày`,
    description: plan.name.startsWith('Egg Linux')
      ? `${plan.cpu / 100} Core | ${plan.ram / 1024} GB RAM | ${plan.disk / 1024} GB SSD. ${formatCredit(plan.credit)}đ / 12 ngày. Dành cho người trả phí.`
      : 'Dành cho bot Discord, ứng dụng web nhỏ và môi trường phát triển.',
    specs: paidPlanSpecs(plan),
    upsizeAvailable: false,
    upsizeNotes: plan.backup ? backupSchedule : '',
    warning: '',
    ctaText: `Chọn ${plan.name}`,
  })),
  ...gamePlans.map((plan) => ({
    id: plan.name.toLowerCase().replaceAll(' ', '-'),
    category: 'game',
    name: plan.name,
    badge: 'Game Server • Trả phí',
    status: 'active',
    price: `${formatCredit(plan.credit)} Credit`,
    period: `${plan.days} ngày`,
    description: 'Gói máy chủ game trả phí, chu kỳ 28 ngày.',
    specs: [],
    upsizeAvailable: false,
    upsizeNotes: '',
    warning: '',
    ctaText: `Chọn ${plan.name}`,
  })),
  {
    id: 'proxy-hk',
    category: 'proxy',
    name: 'PROXY HK',
    badge: 'Tạm Ngưng',
    status: 'paused',
    price: '20.000 VNĐ',
    period: '1 GB Anti-DDoS',
    description: 'Proxy chuyển tiếp locate Hong Kong với Shield chống DDoS riêng biệt. Hiện đã kín slot đăng ký mới.',
    specs: ['0.5 vCore CPU', '512 MB RAM', '1 GB SSD', 'Hong Kong Routing', 'Shield AntiDDoS'],
    upsizeAvailable: false,
    upsizeNotes: 'Theo dõi thông báo Discord khi có thêm tài nguyên.',
    ctaText: 'Hết Slot',
  },
  {
    id: 'sta-xeon-01',
    category: 'vps',
    name: 'STA-XEON-01',
    badge: 'Economy OVH SG',
    status: 'preorder',
    price: '146.000 VNĐ',
    period: 'Tháng',
    description: 'VPS Intel Xeon E5-26xx v3 tại OVH Singapore. Giá tốt nhất cho sinh viên, treo tool, bot 24/7 và môi trường dev.',
    specs: ['2 vCore Intel Xeon', '6 GB RAM', '40 GB NVMe/SSD', 'Full Port theo yêu cầu', 'OVH Anti-DDoS Layer 3/4'],
    upsizeAvailable: true,
    upsizeNotes: 'Đặt trước 3 ngày để phân bổ slot tối ưu.',
    ctaText: 'Đặt Trước VPS Xeon',
  },
  {
    id: 'sta-xeon-02',
    category: 'vps',
    name: 'STA-XEON-02',
    badge: 'Economy Plus',
    status: 'preorder',
    price: '209.000 VNĐ',
    period: 'Tháng',
    description: 'VPS Xeon nâng cấp với dung lượng 14GB RAM và 90GB lưu trữ cho workload nhiều RAM, đa dịch vụ.',
    specs: ['4 vCore Intel Xeon', '14 GB RAM', '90 GB NVMe/SSD', 'Full Port theo yêu cầu', 'Anti-DDoS cao cấp'],
    upsizeAvailable: true,
    upsizeNotes: 'Đặt trước 3 ngày để khởi tạo.',
    ctaText: 'Đặt Trước STA-XEON-02',
  },
  {
    id: 'sta-epyc-01',
    category: 'vps',
    name: 'STA-AMD-EPYC-01',
    badge: 'High Perf EPYC',
    status: 'preorder',
    price: '249.000 VNĐ',
    period: 'Tháng',
    description: 'Cụm máy chủ AMD EPYC Milan Gen 3 cực mạnh cho game server đông người chơi, ứng dụng tải nặng và database.',
    specs: ['2 vCore AMD Milan', '7 GB RAM High-Speed', '40 GB SSD Fast I/O', 'Hỗ trợ chia nhiều Server', 'OVH Singapore'],
    upsizeAvailable: true,
    upsizeNotes: 'Có thể linh hoạt đổi sang AMD Gen 4/5 theo hạ tầng.',
    ctaText: 'Đặt Trước STA-AMD-01',
  },
  {
    id: 'sta-epyc-02',
    category: 'vps',
    name: 'STA-AMD-EPYC-02',
    badge: 'Ultra EPYC 15GB',
    status: 'preorder',
    price: '333.000 VNĐ',
    period: 'Tháng',
    description: 'Phiên bản cao cấp nhất với 4 Core AMD EPYC và 15GB RAM, xử lý mượt mà mọi hệ thống lớn.',
    specs: ['4 vCore AMD Milan', '15 GB RAM High-Speed', '90 GB SSD Fast I/O', 'Chia nhiều Port/Node', 'OVH Singapore Anti-DDoS'],
    upsizeAvailable: true,
    upsizeNotes: 'Đặt trước 3 ngày để kỹ thuật viên thiết lập riêng.',
    ctaText: 'Đặt Trước STA-AMD-02',
  },
];

export const comprehensiveFaqs = [
  {
    q: 'NODE TEST có thực sự miễn phí lâu dài không?',
    a: 'Có. NODE TEST được công bố là Free Forever với 75% CPU và 2 GB RAM. Mỗi lần tạo plan hiển thị 0 Credit; người dùng chỉ cần tuân thủ chính sách sử dụng và chủ động lưu bản sao dữ liệu.',
  },
  {
    q: 'Tôi là người mới, nên chọn gói nào để bắt đầu?',
    a: 'Bạn có thể bắt đầu miễn phí với NODE TEST hoặc OpenClaw Beta. Dev 1–3 có giá 7.000, 12.000 và 20.000 Credit cho 28 ngày; Linux Egg là các gói trả phí theo chu kỳ 12 ngày.',
  },
  {
    q: 'OpenClaw Beta hoạt động như thế nào và có mất phí không?',
    a: 'OpenClaw Beta hoàn toàn miễn phí cho cộng đồng STACloud! Bạn không cần mua domain riêng vì hệ thống đã tích hợp sẵn proxy tunneling. Bạn có thể triển khai web app hoặc bot AI một cách dễ dàng.',
  },
  {
    q: 'Phụ phí nâng cấp (upsize) vCore và RAM được tính như thế nào?',
    a: 'Dev 1–3 và Egg Linux 1–5 có cấu hình và chu kỳ riêng ghi trong bảng giá. Nhu cầu nâng cấp riêng cần xác nhận qua ticket.',
  },
  {
    q: 'Vì sao NODE TEST lại có cảnh báo về dữ liệu?',
    a: 'NODE TEST là gói miễn phí và không hỗ trợ backup. Người dùng cần chủ động tải và lưu trữ bản sao dữ liệu trên thiết bị của mình.',
  },
  {
    q: 'Các gói VPS OVH Singapore (Xeon, EPYC) cần đặt trước bao lâu?',
    a: 'Thời gian đặt trước tiêu chuẩn là 3 ngày. Việc này giúp đội ngũ kỹ thuật viên STACloud phân bổ dedicated core, dọn dẹp phân vùng ổ cứng NVMe và cấu hình firewall Anti-DDoS tối ưu nhất cho bạn.',
  },
  {
    q: 'Làm thế nào để nhận hỗ trợ nhanh nhất khi cần trợ giúp?',
    a: 'Để hỏi nhanh trước khi mua: Vào nhóm Zalo Group hoặc Messenger Group. Khi cần hỗ trợ kỹ thuật, cấp quyền server hoặc giao dịch: Tạo ticket tại kênh 📥｜support-ticket trong Discord chính thức.',
  },
];

export const homeBenefits = [
  {
    icon: '💎',
    title: 'Đầy Đủ Gói Free, Beta & Trả Phí',
    description:
      'Từ NODE TEST và OpenClaw phục vụ trải nghiệm miễn phí 100%, đến DEV, MC, Xeon và EPYC đáp ứng nhu cầu vận hành server ổn định, dài hạn.',
  },
  {
    icon: '📊',
    title: 'Cấu Hình & Giá Cả Minh Bạch',
    description:
      'Mỗi gói dịch vụ đều hiển thị giá thực tế, số lượng vCore, RAM, NVMe, location, trạng thái slot và chi phí upsize minh bạch.',
  },
  {
    icon: '🛡️',
    title: 'Hạ Tầng OVH Singapore Chống DDoS',
    description:
      'Cụm máy chủ chuyên dụng đặt tại OVH Singapore với lớp lọc Anti-DDoS Layer 3/4/7 bảo vệ toàn diện các cuộc tấn công flood.',
  },
  {
    icon: '⚡',
    title: 'Chính Sách An Toàn & Hỗ Trợ 24/7',
    description:
      'Đội ngũ kỹ thuật viên trực tiếp hỗ trợ qua Discord Ticket, Zalo và Messenger; chính sách dữ liệu công khai rõ ràng.',
  },
] as const;

export const homeQuickSteps = [
  {
    step: '01',
    title: 'Chọn Gói Dịch Vụ',
    description:
      'Chọn NODE TEST / OpenClaw nếu muốn thử nghiệm miễn phí, Dev 1–3 / Game Servers cho bot/game, hoặc VPS Xeon / EPYC cho hệ thống lớn.',
  },
  {
    step: '02',
    title: 'Gửi Nhu Cầu & Nhận Tư Vấn',
    description:
      'Tạo ticket tại Discord hoặc nhắn tin nhanh qua nhóm Zalo / Messenger để được kỹ thuật viên tư vấn cấu hình tối ưu.',
  },
  {
    step: '03',
    title: 'Bàn Giao & Quản Trị Trực Quan',
    description:
      'Hệ thống cấp phát server tự động vào tài khoản Control Portal; quản lý restart, console, file manager và đổi bản phân phối 1-click.',
  },
] as const;
