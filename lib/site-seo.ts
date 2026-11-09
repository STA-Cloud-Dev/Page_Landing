export const siteUrl = 'https://stacloud.eu.cc';
export const siteName = 'STACloud';
export const alternateNames = ['STA Cloud', 'STA Cloud Hosting'];
export const siteTitle = 'STA Cloud | VPS, Hosting Việt Nam & Singapore';
export const siteDescription =
  'STA Cloud (STACloud) cung cấp VPS, hosting Việt Nam và Singapore cho website, bot Discord và game server. Xem Cloud VPS Oracle, game hosting, cấu hình và bảng giá.';

export const siteServices = [
  {
    name: 'Hosting Việt Nam & Singapore',
    description: 'Hosting cho website, bot Discord, ứng dụng Node.js và Python. Chọn khu vực Việt Nam hoặc Singapore theo gói và slot được xác nhận; có Node Test miễn phí để trải nghiệm.',
    path: '/free-server/',
    action: 'Xem hosting & bảng giá',
  },
  {
    name: 'VPS & máy chủ theo nhu cầu',
    description: 'Cloud VPS Oracle với cấu hình vCPU, RAM và SSD theo gói; tư vấn nhu cầu VPS, hosting Việt Nam và Singapore theo khu vực sử dụng, cấu hình và tình trạng hạ tầng.',
    path: '/vps-hosting/',
    action: 'Chọn VPS & khu vực hosting',
  },
  {
    name: 'Game hosting & game server',
    description: 'Dịch vụ server hosting cho máy chủ game, hỗ trợ Minecraft và các môi trường trong kho Egg. Chọn gói Game Servers theo tài nguyên và nhu cầu triển khai.',
    path: '/egg/',
    action: 'Xem game & môi trường hỗ trợ',
  },
] as const;

export const siteImage = {
  url: `${siteUrl}/picture/iconSTACloud.png`,
  width: 500,
  height: 500,
  alt: 'STACloud — STA Cloud Hosting',
};
