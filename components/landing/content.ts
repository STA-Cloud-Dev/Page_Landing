import { oracleServicePlans, oraclePricingNote } from '@/components/shared/oracle-vps';
import { freePlans, donaterPlan, freePolicy, communitySpecs } from '@/components/shared/free-plans';
import { gamePlans, paidPlans, paidPlanSpecs, formatCredit, backupSchedule } from '@/components/shared/paid-plans';

import { sitePath } from '@/lib/site-path';

export const siteConfig = {
  name: 'STACloud',
  siteUrl: sitePath('/'),
  panelUrl: 'https://portal.stacloud.eu.cc/',
  discordUrl: 'https://discord.gg/nq8B4JXmnm',
  zaloUrl: 'https://zalo.me/g/ekaldlnq5sqdn37lvikk',
  messengerUrl: 'https://m.me/j/AbaXFRAcUrDjgFCN/?send_source=gc%3Acopy_invite_link_c',
  discordGroupUrl: 'https://discord.gg/nq8B4JXmnm',
  statusChannel: '🗺️｜server-status-and-slot',
  supportChannel: '📥｜support-ticket / Group Chat Messenger-Zalo',
  copyrightText: '© 2018 - 2026 STACloud. All rights reserved.',
  testerAlertMessage:
    freePolicy,
};

export const heroStats = [
  { value: '19', label: 'Cấu hình VPS Oracle' },
  { value: '10', label: 'Gói Linux Egg & Dev' },
  { value: 'OCI', label: 'VPS Oracle Cloud' },
  { value: '100%', label: 'Hoàn khoản mua gói FREE' },
] as const;

export const servicePlans = [
  {
    name: 'NODE TEST',
    description:
      'Gói miễn phí ưu tiên cho bot Discord, web nhỏ và project học tập của sinh viên.',
    price: '0 Credit / Mỗi lần tạo plan',
    highlight: 'Free Forever',
    specs: [],
    addOns: [],
    status: 'active',
    statusLabel: 'Đang Mở Slot',
    accent: 'from-emerald-400/25 to-cyan-300/10',
    warnings: [],
  },
  ...[...freePlans, donaterPlan].map((plan) => ({
    name: plan.name,
    description: plan.requirement,
    price: `${formatCredit(plan.credit)} Credit / ${plan.days} ngày`,
    highlight: plan.id === 'donater' ? 'Donater • Gia hạn 0đ' : 'FREE • Mua hoàn 100%',
    specs: communitySpecs(plan),
    addOns: [`Sao lưu thủ công: ${plan.backups} vị trí. Người dùng tự quản lý bản sao; không bao gồm backup tự động.`],
    status: 'check',
    statusLabel: 'Xem slot trên Portal',
    accent: 'from-emerald-400/25 to-cyan-300/10',
    warnings: [plan.id === 'donater' ? 'Chủ động sao lưu dữ liệu. Kiểm tra điều kiện Donater trên Portal.' : freePolicy],
  })),
  {
    name: 'OPENCLAW',
    description:
      'OpenClaw Beta đã mở miễn phí cho cộng đồng. Phù hợp để trải nghiệm nhanh, đặc biệt với nhu cầu app web và các workload liên quan đến AI.',
    price: 'FREE / 0 VNĐ',
    highlight: 'Beta miễn phí',
    specs: ['Không cần domain riêng', 'Free Beta', 'Khuyến nghị Singapore / Việt Nam'],
    addOns: [
      'Hiện không cần domain riêng để trải nghiệm OpenClaw.',
      'Nếu cần hỗ trợ, có thể liên hệ Discord, Zalo hoặc Messenger Group.',
      'Nên nêu rõ location và nhu cầu app khi tạo yêu cầu hỗ trợ.',
    ],
    status: 'beta',
    statusLabel: 'Beta miễn phí',
    accent: 'from-blue-400/25 to-cyan-300/10',
    warnings: [
      'OpenClaw hiện là bản Beta nên có thể thay đổi hoặc gián đoạn trong quá trình trải nghiệm.',
      'Nên chọn server Singapore hoặc Việt Nam cho OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
    ],
  },
  ...paidPlans.map((plan) => ({
    name: plan.name,
    description: plan.name.startsWith('Egg Linux')
      ? `${plan.cpu / 100} Core | ${plan.ram / 1024} GB RAM | ${plan.disk / 1024} GB SSD. Dành cho người trả phí.`
      : 'Dành cho bot Discord, ứng dụng web nhỏ và môi trường phát triển.',
    price: `${formatCredit(plan.credit)} Credit / ${plan.days} ngày`,
    highlight: plan.name.startsWith('Egg Linux') ? `${formatCredit(plan.credit)}đ / 12 ngày` : 'Dev • 28 ngày',
    specs: paidPlanSpecs(plan),
    addOns: plan.backup ? [backupSchedule] : [],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-sky-400/30 to-cyan-300/10',
    warnings: [],
  })),
  ...gamePlans.map((plan) => ({
    name: plan.name,
    description: 'Gói máy chủ game trả phí, chu kỳ 28 ngày.',
    price: `${formatCredit(plan.credit)} Credit / ${plan.days} ngày`,
    highlight: 'Game Server • Trả phí',
    specs: paidPlanSpecs(plan),
    addOns: [],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-cyan-400/20 to-sky-300/10',
    warnings: [],
  })),
  {
    name: 'PROXY HK',
    description:
      'Gói proxy locate Hong Kong cấu hình nhỏ, hiện đang tạm ngưng vì hết slot. Shield AntiDDoS được tính riêng theo lưu lượng.',
    price: 'Shield AntiDDoS 20.000 VNĐ / 1 GB',
    highlight: 'Tạm ngưng - hết slot',
    specs: ['0.5 vCore', '512 MB RAM', '1 GB SSD', 'Hong Kong'],
    addOns: ['Theo dõi Discord để biết thời điểm mở slot mới.'],
    status: 'paused',
    statusLabel: 'Hết slot',
    accent: 'from-blue-400/20 to-cyan-300/10',
    warnings: [],
  },
  ...oracleServicePlans.map((plan) => ({
    name: plan.name, description: plan.description, price: `${plan.price} / ${plan.period}`,
    highlight: plan.badge, specs: plan.specs, addOns: [plan.upsizeNotes],
    status: 'check', statusLabel: 'Liên hệ tư vấn', accent: 'from-sky-400/20 to-cyan-300/10', warnings: [plan.warning],
  })),
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: sitePath('/flags/singapore.svg?v=20261024-2'),
    speed: '10 Gbps',
    description:
      'Hosting, game server và VPS Oracle Cloud được xác nhận khu vực theo từng dịch vụ.',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: sitePath('/flags/hong-kong.svg?v=20261024-2'),
    speed: '30 Gbps',
    description:
      'Proxy Hong Kong chỉ dành cho gói trả phí và hiện tạm ngưng do hết slot. Theo dõi Discord để nhận thông báo khi có slot mới.',
    availability: 'Proxy Paused',
  },
  {
    name: 'Thailand',
    flagSrc: sitePath('/flags/thailand.svg?v=20261024-2'),
    speed: '30 Gbps',
    description:
      'Proxy Thailand hỗ trợ gói miễn phí và trả phí, phù hợp nhu cầu proxy hoặc kết nối trong khu vực Đông Nam Á.',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: sitePath('/flags/vietnam.svg?v=20261024-2'),
    speed: '1 Gbps',
    description:
      'Location Việt Nam dành cho dịch vụ trả phí, có độ trễ thấp cho người dùng trong nước.',
    availability: 'Only Paid',
  },
] as const;

export const benefits = [
  {
    title: 'Có đủ gói free, beta và trả phí',
    description:
      'Nhóm FREE mua hoàn 100% và OpenClaw phục vụ trải nghiệm cộng đồng, trong khi DEV, MC và VPS Oracle đáp ứng nhu cầu vận hành ổn định hơn.',
  },
  {
    title: 'Cấu hình và giá rõ ràng',
    description:
      'Mỗi gói đều hiển thị giá, CPU, RAM, disk, location, trạng thái slot và yêu cầu đặt trước nếu có.',
  },
  {
    title: 'Hạ tầng Singapore mạnh',
    description:
      'Các gói trả phí gồm hosting, game server và VPS Oracle Cloud; khu vực và bảo vệ mạng tùy dịch vụ.',
  },
  {
    title: 'Chính sách rủi ro minh bạch',
    description:
      'Nhóm FREE và OpenClaw Beta có cảnh báo rõ để người dùng chủ động backup, chọn location phù hợp và tạo ticket đúng quy trình.',
  },
] as const;

export const quickSteps = [
  {
    step: '01',
    title: 'Chọn nhóm gói phù hợp',
    description:
      'Chọn nhóm FREE/OpenClaw nếu chỉ cần trải nghiệm miễn phí, DEV/MC cho nhu cầu nhỏ, hoặc VPS Oracle Cloud cho workload ổn định hơn.',
  },
  {
    step: '02',
    title: 'Gửi nhu cầu qua ticket',
    description:
      'Cho STACloud biết gói muốn đăng ký, location, nhu cầu full port, yêu cầu OpenClaw hoặc yêu cầu chia nhỏ server nếu có.',
  },
  {
    step: '03',
    title: 'Chờ xác minh và cấp phát',
    description:
      'VPS Oracle Cloud được tư vấn cấu hình, khu vực và lịch bàn giao qua ticket.',
  },
] as const;

export const notes = [
  freePolicy,
  'NODE TEST giữ nguyên 0 Credit / Free Forever, 75% CPU và 2 GB RAM.',
  'OpenClaw Beta miễn phí và hiện không cần domain riêng; nếu cần hỗ trợ có thể liên hệ Discord, Zalo hoặc Messenger Group.',
  'Dev 1–5: 7.000 / 12.000 / 20.000 / 35.000 / 50.000 Credit cho 28 ngày. Game Servers 1–2: 50.000 / 65.000 Credit cho 28 ngày. Egg Linux 1–5 dành cho người trả phí, chu kỳ 12 ngày.',
  'PROXY HK hiện tạm ngưng do hết slot; Shield AntiDDoS tính 20.000 VNĐ / 1 GB.',
  oraclePricingNote,
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Gói Miễn Phí Và Beta',
    points: [
      'NODE TEST giữ nguyên 0 Credit / Free Forever, 75% CPU và 2 GB RAM. Nhóm FREE trên Portal áp dụng mức thanh toán và hoàn 100% riêng.',
      freePolicy,
      'Free Gamming + AI và Free DEV: 9.990 Credit / 5 ngày; Linux Free: 9.990 Credit / 3 ngày; Booster Discord: 50.000 Credit / 15 ngày.',
      'Nhóm FREE không hỗ trợ backup; người dùng phải chủ động tải bản sao dữ liệu về máy.',
      'Cấm DDoS, mining, scan port, botnet, mã độc và nội dung vi phạm pháp luật; tài khoản vi phạm bị khóa vĩnh viễn.',
      'OpenClaw Beta miễn phí và hiện không cần domain riêng.',
      'Nếu cần hỗ trợ OpenClaw, người dùng có thể liên hệ Discord, Zalo hoặc Messenger Group.',
    ],
  },
  {
    title: 'Dev, Linux Egg & Game Servers',
    points: [
      'Dev 1: 50% CPU, 256 MB RAM, 1024 MB ổ đĩa; 7.000 Credit / 28 ngày.',
      'Dev 2: 75% CPU, 512 MB RAM, 2048 MB ổ đĩa; 12.000 Credit / 28 ngày.',
      'Dev 3: 75% CPU, 1024 MB RAM, 3072 MB ổ đĩa; 20.000 Credit / 28 ngày.',
      'Dev 4: 100% CPU, 1536 MB RAM, 4096 MB ổ đĩa; 35.000 Credit / 28 ngày.',
      'Dev 5: 100% CPU, 2048 MB RAM, 5120 MB ổ đĩa; 50.000 Credit / 28 ngày.',
      'Game Servers 1–2 có giá 50.000 / 65.000 Credit cho chu kỳ 28 ngày.',
      'Linux Egg dành cho người trả phí và có chu kỳ 12 ngày.',
      'Egg Linux 1, 2, 3 và 5 có backup dự phòng vào Thứ 3, Thứ 6 và Chủ nhật.',
    ],
  },
  {
    title: 'Nâng cấp tài nguyên',
    points: [
      'Các gói Dev có cấu hình cố định; nhu cầu nâng cấp riêng cần xác nhận qua ticket.',
      'Nên nêu rõ nhu cầu CPU/RAM khi tạo ticket để được tư vấn cấu hình phù hợp.',
    ],
  },
  {
    title: 'Proxy Hong Kong / Thailand',
    points: [
      'PROXY HK hiện tạm ngưng do hết slot.',
      'Cấu hình công bố là 0.5 vCore, 512 MB RAM và 1 GB SSD.',
      'Shield AntiDDoS được tính 20.000 VNĐ / 1 GB.',
      'Proxy Thailand hỗ trợ gói Free / Paid với băng thông 30 Gbps.',
    ],
  },
  { title: 'VPS Oracle Cloud', points: [oraclePricingNote] },
  {
    title: 'Lưu Ý Location OpenClaw',
    points: [
      'Nên chọn Singapore hoặc Việt Nam khi dùng OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
      'OpenClaw là bản Beta nên người dùng không nên kỳ vọng SLA nghiêm ngặt như gói trả phí ổn định.',
    ],
  },
] as const;
