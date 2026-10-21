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
    'Cảnh báo: NODE TEST (tên cũ: TESTER) là gói miễn phí và không hỗ trợ backup. Bạn phải tự tải dữ liệu quan trọng về máy.',
};

export const heroStats = [
  { value: '17', label: 'Gói / dịch vụ đang công bố' },
  { value: '8', label: 'Gói Linux Egg & Dev' },
  { value: '3 ngày', label: 'Thời gian đặt trước VPS lớn' },
  { value: '0đ', label: 'Node Test / OpenClaw' },
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
    specs: [],
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
  {
    name: 'STA-XEON-01',
    description:
      'Economy Edition dùng Intel Xeon E5-26xx v3 Haswell-EP tại OVH Singapore. Tối ưu chi phí cho sinh viên, treo tool, bot Discord, web nhỏ hoặc test lab.',
    price: '146.000 VNĐ / tháng',
    highlight: 'Economy OVH SG',
    specs: ['2 vCore Intel Xeon E5-26xx v3', '~3.1 GHz', '6 GB RAM', '40 GB Disk', 'Full port theo yêu cầu'],
    addOns: [
      'Hạ tầng OVH Singapore với AntiDDoS layer 3 & 4.',
      'Phù hợp treo tool, bot Discord, web nhỏ hoặc test lab.',
      'Uptime 24/7 với độ trễ thấp từ Singapore về Việt Nam.',
      'Yêu cầu đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
      'Tạo ticket tại kênh 📥｜support-ticket để giữ slot.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-sky-400/20 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'STA-XEON-02',
    description:
      'Economy Edition nâng cao dùng Intel Xeon E5-26xx v3 Haswell-EP tại OVH Singapore. Phù hợp workload cần nhiều CPU, RAM và dung lượng lưu trữ hơn.',
    price: '209.000 VNĐ / tháng',
    highlight: 'Economy Plus OVH SG',
    specs: ['4 vCore Intel Xeon E5-26xx v3', '~3.1 GHz', '14 GB RAM', '90 GB Disk', 'Full port theo yêu cầu'],
    addOns: [
      'Hạ tầng OVH Singapore với AntiDDoS layer 3 & 4.',
      'Phù hợp bot, web app, tool, test lab hoặc workload cần nhiều RAM.',
      'Uptime 24/7 với độ trễ thấp từ Singapore về Việt Nam.',
      'Yêu cầu đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
      'Tạo ticket tại kênh 📥｜support-ticket để giữ slot.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-blue-400/20 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'STA-AMD-EPYC-01',
    description:
      'Standard Edition hiệu năng cao dùng AMD EPYC Milan Gen 3 tại OVH Singapore. Phù hợp Minecraft, game server, web app và workload cần CPU mạnh.',
    price: '249.000 VNĐ / tháng',
    highlight: 'Standard EPYC',
    specs: ['2 vCore AMD Milan', '7 GB RAM', '40 GB Disk', 'Full port theo yêu cầu', 'OVH Singapore'],
    addOns: [
      'Có thể đổi sang AMD Gen 4 hoặc Gen 5 theo khả năng hạ tầng.',
      'Hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Bảo vệ AntiDDoS mạnh từ hạ tầng OVH.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-cyan-400/20 to-sky-300/10',
    warnings: [],
  },
  {
    name: 'STA-AMD-EPYC-02',
    description:
      'Premium Edition hiệu năng cao dùng AMD EPYC Milan Gen 3 tại OVH Singapore. Dành cho workload cần nhiều vCore, nhiều RAM hoặc chia nhiều server.',
    price: '333.000 VNĐ / tháng',
    highlight: 'Premium EPYC',
    specs: ['4 vCore AMD Milan', '15 GB RAM', '90 GB Disk', 'Full port theo yêu cầu', 'OVH Singapore'],
    addOns: [
      'Có thể đổi sang AMD Gen 4 hoặc Gen 5 theo khả năng hạ tầng.',
      'Hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
    status: 'preorder',
    statusLabel: 'Đặt trước',
    accent: 'from-blue-400/20 to-cyan-300/10',
    warnings: [],
  },
] as const;

export const locations = [
  {
    name: 'Singapore',
    flagSrc: sitePath('/flags/singapore.svg'),
    speed: '10 Gbps',
    description:
      'OVH Singapore dành cho gói miễn phí và trả phí, phù hợp game server, web app, bot và VPS Xeon/EPYC.',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: sitePath('/flags/hong-kong.svg'),
    speed: '30 Gbps',
    description:
      'Proxy Hong Kong chỉ dành cho gói trả phí và hiện tạm ngưng do hết slot. Theo dõi Discord để nhận thông báo khi có slot mới.',
    availability: 'Proxy Paused',
  },
  {
    name: 'Thailand',
    flagSrc: sitePath('/flags/thailand.svg'),
    speed: '30 Gbps',
    description:
      'Proxy Thailand hỗ trợ gói miễn phí và trả phí, phù hợp nhu cầu proxy hoặc kết nối trong khu vực Đông Nam Á.',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: sitePath('/flags/vietnam.svg'),
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
      'NODE TEST và OpenClaw phục vụ trải nghiệm miễn phí, trong khi DEV, MC, Xeon và EPYC đáp ứng nhu cầu vận hành ổn định hơn.',
  },
  {
    title: 'Cấu hình và giá rõ ràng',
    description:
      'Mỗi gói đều hiển thị giá, CPU, RAM, disk, location, trạng thái slot và yêu cầu đặt trước nếu có.',
  },
  {
    title: 'Hạ tầng Singapore mạnh',
    description:
      'Các gói trả phí chính chạy trên OVH Singapore, có AntiDDoS và phù hợp độ trễ từ Singapore về Việt Nam.',
  },
  {
    title: 'Chính sách rủi ro minh bạch',
    description:
      'NODE TEST và OpenClaw Beta có cảnh báo rõ để người dùng chủ động backup, chọn location phù hợp và tạo ticket đúng quy trình.',
  },
] as const;

export const quickSteps = [
  {
    step: '01',
    title: 'Chọn nhóm gói phù hợp',
    description:
      'Chọn NODE TEST/OpenClaw nếu chỉ cần trải nghiệm miễn phí, DEV/MC cho nhu cầu nhỏ, hoặc Xeon/EPYC cho workload ổn định hơn.',
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
      'Các gói lớn như STA-XEON-01, STA-XEON-02, STA-AMD-EPYC-01 và STA-AMD-EPYC-02 cần đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
  },
] as const;

export const notes = [
  'NODE TEST (tên cũ: TESTER) là gói Free Forever, dùng 75% CPU và 2 GB RAM; mỗi lần tạo plan có giá 0 Credit.',
  'OpenClaw Beta miễn phí và hiện không cần domain riêng; nếu cần hỗ trợ có thể liên hệ Discord, Zalo hoặc Messenger Group.',
  'Dev 1–3: 7.000 / 12.000 / 20.000 Credit cho 28 ngày. Game Servers 1–2: 50.000 / 65.000 Credit cho 28 ngày. Egg Linux 1–5 dành cho người trả phí, chu kỳ 12 ngày.',
  'PROXY HK hiện tạm ngưng do hết slot; Shield AntiDDoS tính 20.000 VNĐ / 1 GB.',
  'STA-XEON-01 giá 146.000 VNĐ / tháng; STA-XEON-02 giá 209.000 VNĐ / tháng; STA-AMD-EPYC-01 giá 249.000 VNĐ / tháng; STA-AMD-EPYC-02 giá 333.000 VNĐ / tháng và đều cần đặt trước 3 ngày.',
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Gói Miễn Phí Và Beta',
    points: [
      'NODE TEST (tên cũ: TESTER) là gói free cho bot Discord, web nhỏ và project sinh viên, dùng 75% CPU và 2 GB RAM.',
      'NODE TEST được cung cấp theo chính sách Free Forever và mỗi lần tạo plan có giá 0 Credit.',
      'NODE TEST không hỗ trợ backup; người dùng phải chủ động tải bản sao dữ liệu về máy.',
      'Cấm DDoS, mining, scan port, botnet, mã độc và nội dung vi phạm pháp luật; tài khoản vi phạm bị khóa vĩnh viễn.',
      'OpenClaw Beta miễn phí và hiện không cần domain riêng.',
      'Nếu cần hỗ trợ OpenClaw, người dùng có thể liên hệ Discord, Zalo hoặc Messenger Group.',
    ],
  },
  {
    title: 'Dev, Linux Egg & Game Servers',
    points: [
      'Dev 1: 75% CPU, 512 MB RAM, 1024 MB ổ đĩa; 7.000 Credit / 28 ngày.',
      'Dev 2: 75% CPU, 1024 MB RAM, 2048 MB ổ đĩa; 12.000 Credit / 28 ngày.',
      'Dev 3: 100% CPU, 2048 MB RAM, 3072 MB ổ đĩa; 20.000 Credit / 28 ngày.',
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
  {
    title: 'Intel Xeon OVH Singapore',
    points: [
      'STA-XEON-01 dùng 2 vCore Intel Xeon E5-26xx v3 khoảng 3.1 GHz, 6 GB RAM và 40 GB Disk.',
      'Giá STA-XEON-01 là 146.000 VNĐ / tháng, full port theo yêu cầu.',
      'STA-XEON-02 dùng 4 vCore Intel Xeon E5-26xx v3 khoảng 3.1 GHz, 14 GB RAM và 90 GB Disk.',
      'Giá STA-XEON-02 là 209.000 VNĐ / tháng, full port theo yêu cầu.',
      'Yêu cầu đặt trước 3 ngày để khởi tạo và tối ưu tài nguyên.',
    ],
  },
  {
    title: 'AMD EPYC OVH Singapore',
    points: [
      'STA-AMD-EPYC-01 có 2 vCore AMD Milan, 7 GB RAM, 40 GB Disk, full port theo yêu cầu và giá 249.000 VNĐ / tháng.',
      'STA-AMD-EPYC-02 có 4 vCore AMD Milan, 15 GB RAM, 90 GB Disk, full port theo yêu cầu và giá 333.000 VNĐ / tháng.',
      'Có thể hỗ trợ chia nhỏ thành nhiều server hoặc port khác nhau.',
      'Yêu cầu đặt trước 3 ngày để phân bổ máy chủ.',
    ],
  },
  {
    title: 'Lưu Ý Location OpenClaw',
    points: [
      'Nên chọn Singapore hoặc Việt Nam khi dùng OpenClaw.',
      'Không khuyến nghị chọn Hong Kong cho workload AI vì một số dịch vụ AI có thể bị hạn chế.',
      'OpenClaw là bản Beta nên người dùng không nên kỳ vọng SLA nghiêm ngặt như gói trả phí ổn định.',
    ],
  },
] as const;
