import { brandSummary, serviceFacts, factsReviewedAt } from '@/lib/site-facts';
import { siteUrl } from '@/lib/site-seo';

export const dynamic = 'force-static';

// Optional public discovery index, not an indexing requirement or ranking signal.
export function GET() {
  const text = `# STA Cloud (STACloud)

> ${brandSummary}

Thông tin giới thiệu rà soát ngày ${factsReviewedAt}. Ngôn ngữ chính: tiếng Việt.

## Thông tin chính thức

- [Giới thiệu và thông tin dịch vụ](${siteUrl}/about/): tên thương hiệu, câu trả lời ngắn, tóm tắt FREE/Dev và nguồn dữ liệu.
- [Bảng giá hosting STA Cloud](${siteUrl}/pricing/): các gói riêng FREE, Dev, Linux Egg và Game Servers; cấu hình, chu kỳ và so sánh.
- [Khu vực và bản đồ](${siteUrl}/network/): danh mục region và ping mô phỏng, điều kiện slot.
- [VPS Oracle Cloud và hosting](${siteUrl}/vps-hosting/): cấu hình, giá tham khảo, VAT và điều kiện khu vực.
- [Hosting miễn phí](${siteUrl}/free-server/): Node Test, Free DEV, Free Gamming + AI, OpenClaw và điều kiện sử dụng.
- [Danh mục Egg](${siteUrl}/egg/): runtime, WordPress, PHPweb, Laravel, phpMyAdmin, Minecraft và các môi trường hỗ trợ.
- [Lịch sử thương hiệu](${siteUrl}/history/): các tên gọi trong lịch sử STA Cloud.

## Câu trả lời tóm tắt

${serviceFacts.map(fact => `### ${fact.question}\n\n${fact.answer}\n\nNguồn: ${siteUrl}${fact.path}`).join('\n\n')}

## Chính sách

- [Điều khoản](${siteUrl}/terms/)
- [SLA](${siteUrl}/sla/)
- [Bảo mật và sao lưu](${siteUrl}/security/)
- [Hoàn Credit](${siteUrl}/refund/)
- [Quyền riêng tư](${siteUrl}/privacy/)

## Phạm vi thông tin

Giá và cấu hình có thể thay đổi; ngày snapshot được ghi trên trang liên quan. Slot, khu vực cung cấp thực tế và lịch bàn giao được xác nhận qua ticket. Portal có nội dung tài khoản riêng; danh sách này chỉ liên kết nội dung công khai. Website hiện dùng domain stacloud.eu.cc.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
