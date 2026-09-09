export const siteConfig = {
  name: 'STACloud',
  siteUrl: 'https://stacloud.dev/',
  panelUrl: 'https://portal.stacloud.dev/',
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
  { value: '9', label: 'Gói / dịch vụ đang công bố' },
  { value: '24 + 10', label: 'Slots DEV / MC Singapore' },
  { value: '3 ngày', label: 'Thời gian đặt trước VPS lớn' },
  { value: '0đ', label: 'Node Test / OpenClaw' },
] as const;

export const servicePlans = [
  {
    name: 'NODE TEST',
    description:
      'Free hosting cho bot Discord, web nhỏ và project sinh viên. Plan dùng 9.000 Credit; tài khoản đủ điều kiện nhận 10.000 Credit để bắt đầu.',
    price: '9.000 Credit / plan',
    highlight: '100% Free',
    specs: ['75% CPU', '2 GB RAM', 'Không hỗ trợ backup', 'Hoàn Credit nếu lỗi hệ thống'],
    addOns: [
      'Tài khoản cũ đã được cộng sẵn 10.000 Credit.',
      'Tài khoản mới tạo ticket Discord và chọn Verify Account.',
      'Approval Account được AI tự động xét duyệt trong 5 phút đến 24 giờ.',
      'Có thể xác minh bằng mời 10 bạn, đăng bài giới thiệu hoặc nạp tối thiểu 10.000 Credit.',
    ],
    status: 'active',
    statusLabel: '100% Free',
    accent: 'from-emerald-400/25 to-cyan-300/10',
    warnings: [
      'Không hỗ trợ backup; người dùng phải tự tải bản sao lưu về máy.',
      'Cấm DDoS, mining, scan port, botnet, mã độc và nội dung vi phạm pháp luật.',
      'Tài khoản vi phạm bị khóa vĩnh viễn và không hỗ trợ mở lại.',
    ],
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
  {
    name: 'DEV SG',
    description:
      'Gói tiêu chuẩn dùng CPU AMD Milan tại Singapore, phù hợp app nhỏ, bot, web dev và môi trường test cần chi phí thấp theo chu kỳ.',
    price: '5.000 VNĐ (0.3$) / chu kỳ',
    highlight: '24 Slots',
    specs: ['1 vCore AMD Milan', '1 GB RAM', '2 GB SSD', 'Singapore / OVH Shield'],
    addOns: [
      'Upsize tối đa 2 vCore và 2 GB RAM.',
      '+5.000 VNĐ cho mỗi 1 vCore.',
      '+10.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-sky-400/30 to-cyan-300/10',
    warnings: [],
  },
  {
    name: 'MC SG',
    description:
      'Gói tiêu chuẩn dùng CPU AMD Milan tại Singapore cho Minecraft community nhỏ và nhu cầu test plugin với tài nguyên cao hơn DEV.',
    price: '8.000 VNĐ (0.5$) / chu kỳ',
    highlight: '10 Slots',
    specs: ['1 vCore AMD Milan', '2 GB RAM', '3 GB SSD', 'Singapore / OVH Shield'],
    addOns: [
      'Upsize tối đa 2 vCore và 4 GB RAM.',
      '+10.000 VNĐ cho mỗi 1 vCore.',
      '+15.000 VNĐ cho mỗi 1 GB RAM.',
    ],
    status: 'active',
    statusLabel: 'Đang mở',
    accent: 'from-cyan-400/20 to-sky-300/10',
    warnings: [],
  },
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
    flagSrc: '/flags/singapore.svg',
    speed: '10 Gbps',
    description:
      'OVH Singapore dành cho gói miễn phí và trả phí, phù hợp game server, web app, bot và VPS Xeon/EPYC.',
    availability: 'Free / Paid',
  },
  {
    name: 'Hong Kong',
    flagSrc: '/flags/hong-kong.svg',
    speed: '30 Gbps',
    description:
      'Proxy Hong Kong chỉ dành cho gói trả phí và hiện tạm ngưng do hết slot. Theo dõi Discord để nhận thông báo khi có slot mới.',
    availability: 'Proxy Paused',
  },
  {
    name: 'Thailand',
    flagSrc: '/flags/thailand.svg',
    speed: '30 Gbps',
    description:
      'Proxy Thailand hỗ trợ gói miễn phí và trả phí, phù hợp nhu cầu proxy hoặc kết nối trong khu vực Đông Nam Á.',
    availability: 'Free / Paid',
  },
  {
    name: 'Việt Nam',
    flagSrc: '/flags/vietnam.svg',
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
  'NODE TEST (tên cũ: TESTER) dùng 75% CPU, 2 GB RAM và có giá tạo plan 9.000 Credit; tài khoản đủ điều kiện nhận 10.000 Credit để bắt đầu.',
  'Tài khoản mới cần tạo ticket Discord, chọn Verify Account; Approval Account được AI xét duyệt trong 5 phút đến 24 giờ.',
  'OpenClaw Beta miễn phí và hiện không cần domain riêng; nếu cần hỗ trợ có thể liên hệ Discord, Zalo hoặc Messenger Group.',
  'DEV SG có giá 5.000 VNĐ (0.3$) / chu kỳ với 24 slots; MC SG có giá 8.000 VNĐ (0.5$) / chu kỳ với 10 slots.',
  'PROXY HK hiện tạm ngưng do hết slot; Shield AntiDDoS tính 20.000 VNĐ / 1 GB.',
  'STA-XEON-01 giá 146.000 VNĐ / tháng; STA-XEON-02 giá 209.000 VNĐ / tháng; STA-AMD-EPYC-01 giá 249.000 VNĐ / tháng; STA-AMD-EPYC-02 giá 333.000 VNĐ / tháng và đều cần đặt trước 3 ngày.',
  'Theo dõi tài nguyên còn lại tại kênh 🗺️｜server-status-and-slot trên Discord.',
] as const;

export const policyGroups = [
  {
    title: 'Gói Miễn Phí Và Beta',
    points: [
      'NODE TEST (tên cũ: TESTER) là gói free cho bot Discord, web nhỏ và project sinh viên, dùng 75% CPU và 2 GB RAM.',
      'Giá tạo NODE TEST là 9.000 Credit; tài khoản cũ đã được cộng sẵn 10.000 Credit.',
      'Tài khoản mới tạo ticket Discord, chọn Verify Account và hoàn thành hình thức xác minh được công bố.',
      'NODE TEST không hỗ trợ backup; nếu server sập do lỗi hệ thống, Credit của plan được hoàn trả 100%.',
      'Cấm DDoS, mining, scan port, botnet, mã độc và nội dung vi phạm pháp luật; tài khoản vi phạm bị khóa vĩnh viễn.',
      'OpenClaw Beta miễn phí và hiện không cần domain riêng.',
      'Nếu cần hỗ trợ OpenClaw, người dùng có thể liên hệ Discord, Zalo hoặc Messenger Group.',
    ],
  },
  {
    title: 'DEV / MC Singapore',
    points: [
      'DEV SG dùng AMD Milan tại Singapore, giá 5.000 VNĐ (0.3$) / chu kỳ với 1 vCore, 1 GB RAM và 2 GB SSD.',
      'MC SG dùng AMD Milan tại Singapore, giá 8.000 VNĐ (0.5$) / chu kỳ với 1 vCore, 2 GB RAM và 3 GB SSD.',
      'DEV có 24 slots, MC có 10 slots và đều dùng AntiDDoS OVH Shield.',
      'DEV upsize tối đa 2 vCore / 2 GB RAM; MC upsize tối đa 2 vCore / 4 GB RAM.',
    ],
  },
  {
    title: 'Upsize DEV / MC',
    points: [
      'Phụ phí DEV: +5.000 VNĐ cho mỗi 1 vCore và +10.000 VNĐ cho mỗi 1 GB RAM.',
      'Phụ phí MC: +10.000 VNĐ cho mỗi 1 vCore và +15.000 VNĐ cho mỗi 1 GB RAM.',
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
