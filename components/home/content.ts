import { oracleServicePlans, formatOraclePrice, oracleVpsPackages } from '@/components/shared/oracle-vps';
import { freePlans, donaterPlan, freePolicy, communitySpecs } from '@/components/shared/free-plans';
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
    'Free hosting cho bot Discord, web nhỏ và project sinh viên; kèm Portal quản trị game server, OpenClaw Beta và VPS Oracle Cloud.',
  testerAlertMessage:
    '⚠️ Cảnh báo gói NODE TEST (tên cũ: TESTER): Gói miễn phí không hỗ trợ backup. Vui lòng tự tải dữ liệu quan trọng về máy; tài khoản vi phạm quy định sử dụng sẽ bị khóa vĩnh viễn.',
};

export const heroStats = [
  { value: '19', label: 'Cấu hình VPS Oracle', tone: 'cyan' },
  { value: '10', label: 'Gói Linux Egg & Dev', tone: 'sky' },
  { value: 'OCI', label: 'VPS Oracle Cloud', tone: 'emerald' },
  { value: '0đ', label: 'Node Test & OpenClaw Free', tone: 'indigo' },
] as const;

export const heroSignals = [
  '🎁 Node Test 100% Free cho bot Discord, web nhỏ và project sinh viên',
  '⚡ Free Forever • 75% CPU • 2 GB RAM',
  '🦞 OpenClaw Beta miễn phí - Trải nghiệm AI & Web không cần domain riêng',
] as const;

export const heroStatusStrip = [
  { label: 'NODE TEST', detail: '75% CPU • 2 GB RAM', value: 'Free Forever', tone: 'emerald', status: 'active' },
  { label: 'Dev 1', detail: '50% CPU • 256 MB RAM', value: '7.000 Credit / 28 ngày', tone: 'emerald', status: 'active' },
  { label: 'Game Servers 1', detail: 'Gói máy chủ game trả phí', value: '50.000 Credit / 28 ngày', tone: 'cyan', status: 'active' },
  { label: 'OPENCLAW', detail: 'Free Beta AI & Web', value: '0đ / Không cần Domain', tone: 'blue', status: 'beta' },
  { label: 'VPS Oracle Starter 1', detail: '2 vCPU • 1 GB RAM • 20 GB SSD', value: `${formatOraclePrice(oracleVpsPackages[0].monthlyVnd)} / tháng • chưa VAT`, tone: 'cyan', status: 'check' },
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
  ...[...freePlans, donaterPlan].map((plan) => ({
    id: plan.id,
    category: 'community',
    name: plan.name,
    badge: plan.id === 'donater' ? 'Donater • Gia hạn 0đ' : 'FREE • Hoàn 100%',
    status: 'check',
    price: `${formatCredit(plan.credit)} Credit`,
    period: `${plan.days} ngày`,
    description: plan.requirement,
    specs: communitySpecs(plan),
    upsizeAvailable: false,
    upsizeNotes: `Sao lưu thủ công: ${plan.backups} vị trí. Người dùng tự quản lý bản sao; không bao gồm backup tự động.`,
    warning: plan.id === 'donater' ? 'Chủ động sao lưu dữ liệu. Kiểm tra điều kiện Donater và tài nguyên trên Portal.' : freePolicy,
    ctaText: 'Kiểm tra trên Portal',
  })),
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
    specs: paidPlanSpecs(plan),
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
    warning: '',
    ctaText: 'Hết Slot',
  },
  ...oracleServicePlans,
];

export const comprehensiveFaqs = [
  { q: 'Nhóm FREE trên Portal khác NODE TEST thế nào?', a: `${freePolicy} Free Gamming + AI và Free DEV: 9.990 Credit / 5 ngày; Linux Free: 9.990 Credit / 3 ngày; Booster Discord: 50.000 Credit / 15 ngày. NODE TEST vẫn giữ 0 Credit / Free Forever.` },
  {
    q: 'NODE TEST có thực sự miễn phí lâu dài không?',
    a: 'Có. NODE TEST được công bố là Free Forever với 75% CPU và 2 GB RAM. Mỗi lần tạo plan hiển thị 0 Credit; người dùng chỉ cần tuân thủ chính sách sử dụng và chủ động lưu bản sao dữ liệu.',
  },
  {
    q: 'Tôi là người mới, nên chọn gói nào để bắt đầu?',
    a: 'Bạn có thể bắt đầu miễn phí với NODE TEST hoặc OpenClaw Beta. Dev 1–5 có giá 7.000, 12.000, 20.000, 35.000 và 50.000 Credit cho 28 ngày; Linux Egg là các gói trả phí theo chu kỳ 12 ngày.',
  },
  {
    q: 'OpenClaw Beta hoạt động như thế nào và có mất phí không?',
    a: 'OpenClaw Beta hoàn toàn miễn phí cho cộng đồng STACloud! Bạn không cần mua domain riêng vì hệ thống đã tích hợp sẵn proxy tunneling. Bạn có thể triển khai web app hoặc bot AI một cách dễ dàng.',
  },
  {
    q: 'Phụ phí nâng cấp (upsize) vCore và RAM được tính như thế nào?',
    a: 'Dev 1–5 và Egg Linux 1–5 có cấu hình và chu kỳ riêng ghi trong bảng giá. Nhu cầu nâng cấp riêng cần xác nhận qua ticket.',
  },
  {
    q: 'Vì sao NODE TEST lại có cảnh báo về dữ liệu?',
    a: 'NODE TEST là gói miễn phí và không hỗ trợ backup. Người dùng cần chủ động tải và lưu trữ bản sao dữ liệu trên thiết bị của mình.',
  },
  {
    q: 'Đăng ký VPS Oracle Cloud và tính giá như thế nào?',
    a: 'Giá VPS Oracle theo tháng chưa gồm VAT 10%, bản quyền Windows và các tùy chọn bổ sung. CPU Burstable 50%. Tạo ticket để xác nhận khu vực, slot, tổng chi phí và thời gian bàn giao.',
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
      'Từ nhóm FREE mua hoàn 100% và OpenClaw Beta, đến DEV, MC và VPS Oracle đáp ứng nhu cầu vận hành server ổn định, dài hạn.',
  },
  {
    icon: '📊',
    title: 'Cấu Hình & Giá Cả Minh Bạch',
    description:
      'Mỗi gói dịch vụ đều hiển thị giá thực tế, số lượng vCore, RAM, NVMe, location, trạng thái slot và chi phí upsize minh bạch.',
  },
  {
    icon: '🛡️',
    title: 'VPS Oracle Cloud Theo Nhu Cầu',
    description:
      'Lựa chọn VPS Oracle Cloud theo vCPU, RAM và SSD. Xác nhận khu vực triển khai và yêu cầu bảo vệ mạng trước khi đặt mua.',
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
      'Chọn gói FREE / OpenClaw nếu muốn thử nghiệm miễn phí, Dev 1–5 / Game Servers cho bot/game, hoặc VPS Oracle Cloud cho hệ thống lớn.',
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
