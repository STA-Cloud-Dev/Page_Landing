import type { Metadata } from 'next';
export const siteUrl = "https://stacloud.eu.cc";
export const siteName = "STACloud";
export const alternateNames = ["STA Cloud", "STA Cloud Hosting"];
export const siteTitle = "STA Cloud | VPS, Hosting Việt Nam & Singapore";
export const siteDescription =
  "STA Cloud (STACloud) cung cấp VPS, hosting Việt Nam và Singapore cho website, bot Discord và game server. Xem Cloud VPS Oracle, game hosting, cấu hình và bảng giá.";

export const siteServices = [
  {
    name: "Hosting Việt Nam & Singapore",
    description:
      "Hosting cho website, bot Discord, ứng dụng Node.js và Python. Chọn khu vực Việt Nam hoặc Singapore theo gói và slot được xác nhận; có Free DEV và Free Gamming + AI Free Forever.",
    path: "/pricing/",
    action: "Xem hosting & bảng giá",
  },
  {
    name: "VPS & máy chủ theo nhu cầu",
    description:
      "STA Cloud giới thiệu VPS và GPU Oracle Cloud do ICS cung cấp. Mua trực tiếp tại oci.ics.vn hoặc liên hệ STA Cloud tư vấn; hosting FREE và Dev là dịch vụ riêng.",
    path: "/vps/",
    action: "Chọn VPS & khu vực hosting",
  },
  {
    name: "Game hosting & game server",
    description:
      "Dịch vụ server hosting cho máy chủ game, hỗ trợ Minecraft và các môi trường trong kho Egg. Chọn gói Game Servers theo tài nguyên và nhu cầu triển khai.",
    path: "/egg/",
    action: "Xem game & môi trường hỗ trợ",
  },
] as const;

export const siteImage = {
  url: `${siteUrl}/picture/logo.png`,
  width: 500,
  height: 500,
  alt: "STACloud — STA Cloud Hosting",
};

export function localizedAlternates(path: string) {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return {
    canonical: `${siteUrl}${normalized}`,
    languages: {
      vi: `${siteUrl}${normalized}`,
      en: `${siteUrl}/en${normalized}`,
      "x-default": `${siteUrl}${normalized}`,
    },
  };
}

export function vietnameseOpenGraph(metadata: Metadata, path: string): Metadata['openGraph'] {
 return { title: typeof metadata.title === 'string' ? metadata.title : siteTitle, description: metadata.description || siteDescription, url: `${siteUrl}${path}`, locale: 'vi_VN', alternateLocale: ['en_US'], siteName, type: 'website', images: [siteImage] };
}
