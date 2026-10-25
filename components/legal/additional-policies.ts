import type { LegalSection } from './legal-content';

export const policyUpdated = '24/10/2026';

export const refundSections: LegalSection[] = [
  { title: '1. Nguyên tắc hoàn vào số dư Credit', bullets: [
    'Theo chính sách dịch vụ của STACloud, giao dịch đã hoàn tất không được hoàn bằng tiền mặt, chuyển khoản ngân hàng, ví điện tử hoặc cổng thanh toán bên ngoài. Ngoại lệ bắt buộc theo pháp luật áp dụng vẫn được thực hiện.',
    'Khoản hoàn trả hoặc bồi hoàn được chấp thuận được cộng vào số dư Credit của chính tài khoản Portal đã thanh toán tại portal.stacloud.eu.cc.',
    'Credit hoàn dùng để mua mới, nâng cấp hoặc gia hạn dịch vụ, không hết hạn; không được rút thành tiền mặt, chuyển nhượng hay chuyển sang tài khoản khác.',
  ] },
  { title: '2. Điều kiện xem xét', bullets: [
    'Dịch vụ trả phí không khởi tạo thành công sau 24 giờ kể từ khi xác nhận thanh toán hợp lệ, trừ gói đặt trước đã công bố thời gian cấp phát 3 ngày hoặc thỏa thuận riêng.',
    'STACloud không còn tài nguyên hoặc không thể cấp phát đúng gói và khách hàng không đồng ý phương án thay thế.',
    'Trong 48 giờ đầu sau kích hoạt dịch vụ trả phí theo tháng, khách hàng có thể yêu cầu hủy khi dịch vụ không đáp ứng thông số kỹ thuật đã công bố. Các chu kỳ khác áp dụng điều kiện cấp phát và SLA tương ứng, không mặc nhiên có thời gian dùng thử 48 giờ.',
    'Gián đoạn thuộc trách nhiệm hạ tầng STACloud được xử lý theo phạm vi, loại trừ và tỷ lệ trong SLA.',
  ] },
  { title: '3. Cách tính số Credit được hoàn', paragraphs: [
    'Credit hoàn = max(0, Credit thực trả − đơn giá ngày × số ngày đã sử dụng − phí thiết lập đặc biệt đã công bố và được chấp thuận trước). Đơn giá ngày = Credit thực trả / số ngày của chu kỳ gói đã mua.',
    'Thời gian sử dụng được tính từ kích hoạt đến thời điểm dừng dịch vụ được xác nhận, làm tròn lên ngày nguyên. Dịch vụ chưa kích hoạt do không thể cấp phát được hoàn toàn bộ Credit thực trả. Không khấu trừ ngày chờ cấp phát do lỗi STACloud.',
    'Nếu đã sử dụng trên 50% chu kỳ, STACloud có thể từ chối yêu cầu hủy theo nhu cầu cá nhân; quyền yêu cầu service credit cho sự cố đủ điều kiện theo SLA vẫn được xét riêng.',
    'Không hoàn hai lần cho cùng phần phí hoặc cùng thiệt hại. Khoản service credit theo SLA được cộng vào số dư Portal sau xác minh: 10%, 25% hoặc 50% phí chu kỳ bị ảnh hưởng theo mức uptime được quy định tại /sla.',
  ] },
  { title: '4. Các trường hợp không thuộc diện hoàn', bullets: [
    'Vi phạm quy định sử dụng: DDoS, mining, botnet, scan trái phép, mã độc, phishing, nội dung vi phạm pháp luật hoặc quyền hợp pháp của bên thứ ba.',
    'NODE TEST Free Forever, OpenClaw Beta và các dịch vụ hoàn toàn miễn phí không có khoản phí thực trả để hoàn.',
    'Sự cố do cấu hình, phần mềm, plugin, script, thao tác xóa dữ liệu hoặc lộ thông tin đăng nhập thuộc phía khách hàng.',
    'Tên miền đã đăng ký, IP riêng đã kích hoạt, lưu lượng Shield đã tiêu thụ và các khoản thiết lập đặc biệt không thu hồi được.',
    'Gói Partner đã hưởng ưu đãi trên 20% không thuộc chính sách hủy hoàn Credit theo nhu cầu; sự cố đủ điều kiện vẫn được xét theo SLA và thỏa thuận riêng.',
  ] },
  { title: '5. Gửi và xử lý yêu cầu', paragraphs: [
    'Tạo Ticket Discord chính thức hoặc gửi email stacloud.dev@gmail.com, kèm ID tài khoản Portal, mã giao dịch, tên gói, thời gian kích hoạt, lý do và log/ảnh lỗi đã che mật khẩu, khóa API hoặc dữ liệu riêng tư.',
    'STACloud xem xét hồ sơ đầy đủ trong 24–48 giờ làm việc. Kết quả, cách tính và thời điểm ghi Credit được xác nhận qua ticket; thời gian xử lý không phải cam kết tự động chấp thuận.',
  ] },
];

export const securitySections: LegalSection[] = [
  { title: '1. Cách ly tài nguyên và bảo vệ mạng', paragraphs: [
    'Máy chủ được phân tách theo cơ chế ảo hóa hoặc container tùy gói và hạ tầng được cấp. Không cố truy cập hoặc can thiệp môi trường của khách hàng khác. Việc cách ly là biện pháp bảo vệ, không phải bảo đảm tuyệt đối rằng không thể có lỗ hổng.',
    'Khả năng Anti-DDoS phụ thuộc location và nhà cung cấp. Các gói OVH phù hợp thừa hưởng lớp bảo vệ mạng của OVH; không cam kết miễn nhiễm mọi cuộc tấn công hoặc lọc lớp ứng dụng nếu gói không công bố tính năng đó.',
  ] },
  { title: '2. Quyền quản trị và truy cập hỗ trợ', bullets: [
    'Quyền root/SSH hoặc console được cung cấp theo loại dịch vụ; máy chủ container không mặc nhiên có quyền quản trị host hoặc máy vật lý.',
    'Kỹ thuật viên không tự ý xem nội dung mã nguồn, tệp tin hay cơ sở dữ liệu của khách hàng. Truy cập phục vụ hỗ trợ phải có yêu cầu được xác nhận qua ticket và chỉ trong phạm vi cần thiết.',
    'Can thiệp có thể được thực hiện để cô lập nguy cơ an ninh nghiêm trọng hoặc đáp ứng yêu cầu hợp lệ của cơ quan có thẩm quyền. Việc xử lý được giới hạn ở phạm vi cần thiết và thông báo khi được phép.',
    'Ưu tiên thông tin đăng nhập tạm thời. Khách hàng nên thu hồi quyền, thay mật khẩu và xoay khóa sau khi hỗ trợ kết thúc.',
  ] },
  { title: '3. Trách nhiệm bảo mật của khách hàng', bullets: [
    'Dùng mật khẩu riêng tối thiểu 12 ký tự; ưu tiên khóa SSH, xác thực nhiều yếu tố khi hệ thống có hỗ trợ và giới hạn cổng quản trị công khai.',
    'Cập nhật hệ điều hành, thư viện, plugin; bảo vệ token bot, khóa API, tệp .env và thông tin thanh toán. Không gửi bí mật vào nhóm chat công khai.',
    'Khách hàng chịu trách nhiệm với người được mình chia sẻ quyền. Báo ngay khi phát hiện truy cập lạ để phối hợp khóa phiên, cô lập và khôi phục.',
  ] },
  { title: '4. Backup và khôi phục', paragraphs: [
    'NODE TEST và OpenClaw Beta không được cam kết backup tự động. Người dùng phải chủ động giữ bản sao bên ngoài hệ thống.',
    'Gói trả phí có công bố Backup được sao lưu dự phòng vào Thứ 3, Thứ 6 và Chủ nhật. Chỉ áp dụng cho gói có ghi rõ quyền lợi này; không mặc nhiên áp dụng cho mọi gói Linux, Dev hoặc Game Servers.',
    'Backup hạ tầng không thay thế bản sao độc lập của khách hàng; khả năng khôi phục phụ thuộc bản sao còn hợp lệ. Nêu rõ mốc dữ liệu cần khôi phục khi tạo ticket.',
  ] },
  { title: '5. Báo cáo lỗ hổng và ứng phó sự cố', paragraphs: [
    'Báo cáo riêng qua stacloud.dev@gmail.com hoặc Ticket Discord. Cung cấp phạm vi, cách tái hiện và tác động; không tải dữ liệu khách hàng, phá hoại, gây gián đoạn hoặc công khai chi tiết khai thác khi chưa phối hợp xử lý.',
    'STACloud bảo vệ thông tin người báo cáo trong phạm vi vận hành và pháp luật cho phép. Báo cáo có giá trị có thể được xem xét thưởng Credit sau xác nhận; đây không phải cam kết thưởng tự động hoặc cho phép kiểm thử trái phép.',
  ] },
];

export const cookieSections: LegalSection[] = [
  { title: '1. Phạm vi và khái niệm', paragraphs: [
    'Cookie là dữ liệu nhỏ mà website lưu trên trình duyệt. Chính sách này phân biệt website công khai stacloud.eu.cc với Portal tại portal.stacloud.eu.cc. Cơ chế lưu trữ phụ thuộc chức năng thực tế đang được bật trên từng hệ thống.',
  ] },
  { title: '2. Cookie thiết yếu và an ninh', bullets: [
    'Portal có thể dùng cookie phiên đăng nhập và token CSRF để xác thực, duy trì phiên và bảo vệ thao tác tài khoản. Thời hạn cụ thể theo cấu hình phiên của Portal.',
    'Khi Cloudflare Challenge/Turnstile được bật, nhà cung cấp có thể xử lý tín hiệu an ninh hoặc cookie xác minh như cf_clearance. Không phải mọi lần truy cập đều tạo loại cookie này.',
    'Chặn cookie thiết yếu có thể làm đăng nhập hoặc xác minh thất bại. Website giới thiệu và các văn bản công khai vẫn có thể đọc mà không cần tài khoản.',
  ] },
  { title: '3. Tùy chọn giao diện và phân tích', paragraphs: [
    'Bộ lọc catalog và bảng giá trên website công khai hiện được giữ trong bộ nhớ của trang, không cần cookie để lưu lựa chọn. Tải lại trang có thể đặt lại bộ lọc.',
    'Nếu công cụ phân tích hiệu năng được bật ở lớp hạ tầng, công cụ đó có thể nhận dữ liệu kỹ thuật như URL, trình duyệt, thời gian tải và lỗi. Không mặc nhiên coi mọi công cụ phân tích là dùng cookie hoặc mọi dữ liệu là ẩn danh.',
    'Khi triển khai cookie phân tích hoặc tùy chọn không thiết yếu cần sự đồng ý, STACloud sẽ cung cấp cơ chế lựa chọn phù hợp trước khi kích hoạt. Trang chính sách này không tự cấp sự đồng ý thay người dùng.',
  ] },
  { title: '4. Kiểm soát và xóa dữ liệu trình duyệt', paragraphs: [
    'Trong Chrome, Firefox, Safari hoặc Edge, mở phần Quyền riêng tư/Dữ liệu trang web, tìm stacloud.eu.cc và portal.stacloud.eu.cc để xem, chặn hoặc xóa cookie và dữ liệu lưu trữ. Sau khi xóa, bạn có thể phải đăng nhập hoặc xác minh lại.',
    'Cài đặt chặn cookie bên thứ ba và cửa sổ riêng tư có thể giới hạn một số tích hợp. Chỉ đăng nhập trên domain Portal chính thức.',
  ] },
  { title: '5. Liên hệ và chính sách liên quan', paragraphs: [
    'Gửi câu hỏi qua Ticket Discord hoặc stacloud.dev@gmail.com. Nội dung thu thập, sử dụng và chia sẻ dữ liệu được giải thích thêm tại Chính sách quyền riêng tư; biện pháp bảo vệ máy chủ nằm trong Điều khoản bảo mật.',
  ] },
];
