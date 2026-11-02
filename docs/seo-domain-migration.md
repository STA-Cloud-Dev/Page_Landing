# SEO và chuyển domain STACloud

Ngày kiểm tra: 02/11/2026. Domain chính: https://stacloud.eu.cc/.

## Kết quả trực tiếp trên website

- Cả 10 URL trong sitemap trả 200, có một H1, canonical đúng URL mới và không có noindex.
- robots.txt và sitemap.xml truy cập được. robots.txt cho phép Googlebot và Bingbot.
- Domain cũ https://stacloud.dev/ trả 301 sang domain mới.
- URL cũ /index trả 301 sang https://stacloud.eu.cc/index; URL đích trả 200 với canonical về /.
- /egg trên domain cũ đi qua hai lần 301 để đến /egg/ trên domain mới.
- URL không tồn tại trả 404, không trả trang chủ với mã 200.
- Truy vấn tìm kiếm công khai vẫn thấy URL stacloud.dev. Đây không phải báo cáo toàn bộ chỉ mục Google.
- Cloudflare trả 403 (error code 1010) với Python-urllib ở trang chủ và sitemap trong lần kiểm tra. Các request dùng User-Agent trình duyệt, Googlebot hoặc Bingbot trả 200. Việc đổi User-Agent không chứng minh bot Google thật được phép truy cập; cần Search Console và log Cloudflare.

README ghi nhận đã chuyển domain và gửi sitemap ngày 14/10/2026.

## Search Console đã kiểm tra bằng tài khoản đăng nhập

- Báo cáo tổng quan: 20 lần nhấp; báo cáo index cập nhật 23/10/2026 có 1 URL index và 10 URL chưa index. Báo cáo cấp domain bao gồm cả các subdomain, không chỉ website bán dịch vụ.
- Kiểm tra riêng https://stacloud.eu.cc/: **URL nằm trên Google**, Googlebot smartphone crawl thành công lúc 07:05 ngày 29/10/2026 (giờ hiển thị trên giao diện), được phép crawl/index. Canonical người dùng khai báo và Google chọn đều là URL được kiểm tra. Trang giới thiệu là https://stacloud.dev/.
- Sitemap https://stacloud.eu.cc/sitemap.xml đã gửi 24/10/2026, lần đọc cuối 24/10/2026; trạng thái **Không thể đọc sơ đồ trang web**, 0 URL được khám phá. Chưa có mã HTTP chi tiết trong giao diện đã đọc. Không thể suy ra nguyên nhân chỉ từ thông báo này.
- Property domain cũ hiển thị **đang trong quá trình chuyển sang stacloud.eu.cc**. Như vậy Change of Address đã được khai báo; không cần khởi tạo lại. Sitemap cũ đọc thành công ngày 27/10/2026, khám phá 10 trang.
- URL noindex là https://maintain.stacloud.eu.cc/, crawl 19/10/2026. Không sửa noindex của trang bảo trì chỉ để tăng số URL index.
- Ba URL thuộc nhóm đã crawl nhưng chưa index là /refund, /security, /partner theo ví dụ báo cáo. Đây là trạng thái Google đánh giá sau crawl, không phải bằng chứng robots.txt chặn.

Kết luận: trang chủ mới đã index và đã nhận tín hiệu chuyển từ domain cũ.
Ưu tiên xử lý sitemap chưa được đọc, nội dung dịch vụ và liên kết nội bộ; không
khẳng định toàn bộ domain mới chưa index hoặc bị phạt khi chưa có bằng chứng.

## Thay đổi mã nguồn trong lần kiểm tra này

- Title và mô tả giới thiệu rõ STA Cloud, Cloud VPS, game server và hosting.
- H1 có thương hiệu và dịch vụ; mô tả đầu trang giải thích đối tượng sử dụng.
- Footer thể hiện tên STA Cloud Hosting, nhất quán với alternateName.
- Mục dịch vụ giải thích hosting website/bot, Cloud VPS và game hosting/server hosting, với liên kết tới bảng giá và kho môi trường. OfferCatalog dùng cùng nội dung hiển thị trên trang.
- Thêm /vps-hosting/ giải thích VPS, hosting Việt Nam / Singapore, so sánh nhu cầu, cấu hình VPS dùng chung dữ liệu với trang chủ và cách đăng ký. Thêm vào sitemap (hiện 11 trang) và liên kết từ trang chủ, footer.
- JSON-LD trang chủ khai báo Organization, WebSite, WebPage và Service; cùng trỏ về domain mới. sameAs chỉ dùng GitHub chính thức đã kiểm chứng.
- Open Graph và Twitter có logo, tên và mô tả thương hiệu; cho phép preview ảnh lớn.
- Kiểm tra HTML sau build và CI ngăn canonical/domain sai hoặc noindex lọt vào bản xuất bản.

Các sửa đổi này chỉ có tác dụng trên website thật sau khi triển khai. Structured
data giúp hiểu website, không bảo đảm được đề xuất, có knowledge panel hay tăng hạng.

## Việc cần làm trong tài khoản quản trị

1. Search Console: cả hai property truy cập được, Change of Address đã được khai báo. Tiếp tục theo dõi quá trình chuyển; không khởi tạo lại khi chưa có lý do.
2. Trên property mới, mở sitemap.xml và xem trạng thái Success cùng thời điểm đọc cuối; không chỉ kiểm tra rằng đã nhấn gửi.
3. Kiểm tra URL trang chủ, /free-server/ và /egg/: lưu lý do index/exclusion, last crawl, crawl allowed, page fetch, user-declared canonical và Google-selected canonical. Chạy Live Test trước khi yêu cầu index lại sau triển khai.
4. Nếu Google chọn domain cũ: đối chiếu redirect, canonical và thời điểm crawl của URL cũ/mới. Nếu Crawled/Discovered — currently not indexed: đánh giá nội dung, liên kết nội bộ và lịch crawl; không gửi lặp yêu cầu mỗi ngày.
5. Cloudflare Security Events: lọc Googlebot/Bingbot thật và URL /, /robots.txt, /sitemap.xml; kiểm tra 403, Managed Challenge, WAF và rate limit. Đối chiếu IP đã xác minh, không whitelist chỉ theo User-Agent. Chỉ sửa rule đang chặn request hợp lệ.
6. Tối ưu redirect tại Cloudflare/proxy: /index và /index.html của cả hai domain về thẳng https://stacloud.eu.cc/ bằng 301/308; các trang khác về đúng đường dẫn có dấu / cuối. Không gom mọi URL cũ về trang chủ. Cấu hình ở hosting/proxy vì public site đang được phục vụ bằng GitHub Pages.
7. Duy trì domain cũ và redirect ít nhất một năm. Không dùng công cụ Remove URLs để xử lý chuyển domain thông thường.
8. Bing Webmaster Tools: xác minh domain mới, gửi sitemap và kiểm tra URL tương tự. Các công cụ tìm kiếm có chỉ mục riêng.

Những thay đổi bên ngoài repo (Search Console, Cloudflare, Bing, hồ sơ cộng đồng)
cần thao tác trong tài khoản tương ứng; chưa thực hiện trong lần sửa mã nguồn này.

## Kế hoạch tăng khả năng được tìm thấy

Ưu tiên cập nhật liên kết đang có người dùng thật: GitHub, Discord, Zalo,
Messenger và hồ sơ cộng đồng do STACloud sở hữu. Nhờ quản trị viên cập nhật
những bài giới thiệu cũ có link stacloud.dev. Dùng tên STACloud / STA Cloud
nhất quán và domain mới; không tạo đánh giá hoặc đề cập giả.

Nội dung nên xuất bản tiếp theo, sau khi xác nhận cấu hình và quy trình thực tế:

| Chủ đề | Nội dung cần có | Trang dịch vụ liên quan |
| --- | --- | --- |
| Cách host bot Discord Node.js trên STACloud | Điều kiện, phiên bản runtime, cài dependency, token qua biến môi trường, start/restart, lỗi thường gặp | /free-server/ |
| Chọn VPS, game server hay hosting bot | Quyền quản trị, tài nguyên, giới hạn, backup, chi phí và tình huống phù hợp | /#plans |
| Tạo server Minecraft | Egg thực sự hỗ trợ, RAM khuyến nghị theo workload thử nghiệm, upload world, backup | /egg/ |

Mỗi bài phải trả lời một nhu cầu cụ thể bằng thông tin đã kiểm chứng, có liên
kết sang dịch vụ và ngày cập nhật khi nội dung thực sự thay đổi. Không tạo
hàng loạt trang thay mỗi từ khóa hoặc thêm schema FAQ để hứa có rich result.

## Đo hiệu quả mỗi tuần

Ghi số URL index của sitemap mới; impressions, clicks và CTR theo trang;
truy vấn STACloud, STA Cloud, STA Cloud Hosting và các truy vấn dịch vụ;
lượt chuyển vào portal/ticket nếu có hệ thống đo lường đã được thiết lập.
So sánh giai đoạn 28 ngày, theo dõi cả domain cũ lẫn mới. Không lấy một lần
tìm kiếm cá nhân làm bằng chứng duy nhất vì kết quả thay đổi theo vị trí và thời điểm.

## Tài liệu gốc

- https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/ai-features

Google Search và AI Overviews dùng quyền truy cập Googlebot. Việc robots.txt
chặn Google-Extended hoặc GPTBot phục vụ mục đích khác không tự chứng minh
Google Search bị chặn; không mở toàn bộ bot chỉ để mong tăng hạng.
