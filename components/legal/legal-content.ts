export type LegalSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
};

export const legalLastUpdated = '09/09/2026';
export const slaLastUpdated = '09/09/2026';
export const partnerLastUpdated = '09/09/2026';

export const termsSections: LegalSection[] = [
  {
    title: '1. Thanh toán',
    bullets: [
      'Dịch vụ sẽ được kích hoạt sau khi chúng tôi nhận đủ thanh toán của bạn.',
      'Chúng tôi không hỗ trợ hoàn tiền, vì vậy vui lòng cân nhắc kỹ trước khi mua.',
      'Chúng tôi có thể giới hạn hoặc tạm ngưng dịch vụ miễn phí hoặc trả phí nếu phát hiện hành vi lạm dụng.',
    ],
  },
  {
    title: '2. Chấm dứt dịch vụ',
    bullets: [
      'Chúng tôi có thể tạm ngưng hoặc chấm dứt tài khoản của bạn khi cần, theo quyền quyết định của chúng tôi.',
      'Nếu tài khoản của bạn bị chấm dứt, bạn sẽ mất quyền truy cập và dữ liệu của bạn có thể bị xóa.',
    ],
  },
  {
    title: '3. Trách nhiệm pháp lý và bảo đảm',
    bullets: [
      'Dịch vụ được cung cấp theo hiện trạng và theo khả năng sẵn có. Chúng tôi không thể bảo đảm dịch vụ sẽ luôn hoàn hảo hoặc không bị gián đoạn.',
      'Chúng tôi không chịu trách nhiệm đối với bất kỳ mất mát, thiệt hại hoặc sự cố dữ liệu nào.',
    ],
  },
  {
    title: '4. Bảo mật tài khoản',
    bullets: [
      'Bạn có trách nhiệm giữ an toàn cho tài khoản của mình.',
      'Chúng tôi không chịu trách nhiệm cho các truy cập trái phép do mật khẩu yếu hoặc do sự bất cẩn của người dùng.',
      'Nếu bạn cho rằng có người đang sử dụng tài khoản của mình mà không được phép, hãy liên hệ với chúng tôi ngay lập tức.',
    ],
  },
  {
    title: '5. Sử dụng dịch vụ',
    bullets: [
      'Không thực hiện bất kỳ hành vi nào gây nghẽn mạng hoặc ảnh hưởng tiêu cực tới người dùng khác.',
      'Các tài khoản vi phạm quy định này hoặc gây rủi ro cho hệ thống có thể bị tạm ngưng vĩnh viễn mà không cần thông báo thêm.',
    ],
  },
  {
    title: '6. Quy định về nội dung',
    bullets: [
      'Không được phép đăng tải nội dung bất hợp pháp, vi phạm bản quyền, khiêu dâm hoặc phỉ báng.',
      'Chúng tôi có thể yêu cầu bạn hỗ trợ xác minh một số nội dung khi cần thiết.',
      'Nếu bạn không hợp tác, chúng tôi có thể hạn chế nội dung hoặc tài khoản của bạn.',
    ],
  },
  {
    title: '7. Fair Use: Điều gì được phép và điều gì không',
    paragraphs: [
      'Thông báo Fair Use: Tất cả các gói trả phí đều áp dụng chính sách sử dụng hợp lý. Vui lòng sử dụng ở mức phù hợp và không ảnh hưởng tới chất lượng dịch vụ của người khác.',
    ],
    subsections: [
      {
        title: '7.1 Những gì được phép',
        bullets: [
          'Tuân thủ pháp luật: Sử dụng dịch vụ hợp pháp và có trách nhiệm.',
          'Công bằng: Không chiếm dụng quá mức tài nguyên hoặc gây ảnh hưởng đến hiệu năng hay bảo mật của người khác.',
          'Tôn trọng: Tôn trọng nền tảng, đội ngũ vận hành và cộng đồng của chúng tôi.',
        ],
      },
      {
        title: '7.2 Những gì không được phép',
        bullets: [
          'Lạm dụng tài nguyên: Không sử dụng băng thông quá mức, gây quá tải máy chủ hoặc làm gián đoạn mạng lưới của chúng tôi.',
          'Bot và công cụ trái phép: Không sử dụng spam bot, selfbot, crypto-mining, VPN hoặc proxy service, hay bất kỳ công cụ nào gây quá tải cho máy chủ hoặc mạng, đặc biệt trên gói miễn phí.',
          'Bot game trên free tier: Free Fire Bot và Minecraft Bot không được phép trên gói miễn phí.',
          'Mã bị làm rối: Không được tải lên hoặc chạy mã bị obfuscate, mã hóa hoặc cố tình làm cho khó đọc trên free tier.',
        ],
      },
      {
        title: '7.3 Quy định về nội dung',
        bullets: [
          'Không được phép có nội dung bị cấm: Nội dung bất hợp pháp, độc hại hoặc phản cảm đều không được chấp nhận.',
          'Gỡ bỏ nội dung: STACloud có quyền gỡ bỏ bất kỳ nội dung nào vi phạm các quy định này hoặc quyền của bên thứ ba.',
        ],
      },
      {
        title: '7.4 Bảo mật',
        bullets: [
          'Giữ an toàn cho hệ thống: Không hack, không phát tán mã độc và không truy cập trái phép.',
          'Nếu bạn phát hiện lỗ hổng bảo mật, vui lòng báo cho chúng tôi.',
        ],
      },
      {
        title: '7.5 Thực thi',
        bullets: [
          'Giám sát: Chúng tôi có thể giám sát việc sử dụng để giữ môi trường công bằng và an toàn.',
          'Phát hiện lạm dụng tự động: Chúng tôi sử dụng hệ thống tự động để phát hiện hành vi lạm dụng như crypto mining, selfbot hoặc proxy. Tài khoản và máy chủ có thể bị tạm ngưng mà không cần thông báo trước nếu bị gắn cờ. Hãy bảo đảm script của bạn tuân thủ quy định.',
          'Hợp tác từ người dùng: Vui lòng hỗ trợ nếu chúng tôi cần điều tra một vấn đề nào đó.',
          'Vi phạm: Chúng tôi có thể gỡ bỏ nội dung, tạm ngưng hoặc chấm dứt tài khoản nếu các quy định này bị vi phạm.',
        ],
      },
      {
        title: '7.6 Điều khoản riêng cho Node Test',
        bullets: [
          'NODE TEST (tên cũ: TESTER) là gói miễn phí cho bot Discord, web nhỏ và project học tập; cấu hình công bố gồm 75% CPU và 2 GB RAM.',
          'Mỗi lần tạo plan dùng 9.000 Credit. Tài khoản cũ đã được cộng 10.000 Credit; tài khoản mới cần tạo ticket Discord và chọn Verify Account.',
          'Tài khoản mới có thể xác minh bằng cách mời tối thiểu 10 thành viên vào Discord, đăng bài giới thiệu dịch vụ hoặc nạp tối thiểu 10.000 Credit theo thông báo hiện hành.',
          'Approval Account được AI tự động xét duyệt trong khoảng 5 phút đến 24 giờ.',
          'NODE TEST không hỗ trợ backup. Người dùng phải tự tải bản sao lưu về máy trước khi có sự cố.',
          'Nếu server sập do lỗi hệ thống được STACloud xác nhận, Credit của plan được hoàn trả 100%.',
          'Nghiêm cấm DDoS, mining, scan port, botnet, mã độc, nội dung độc hại hoặc vi phạm pháp luật. Tài khoản vi phạm bị khóa vĩnh viễn và không hỗ trợ mở lại.',
        ],
      },
    ],
  },
  {
    title: '8. Thay đổi điều khoản',
    paragraphs: [
      'Chúng tôi có thể cập nhật các điều khoản này bất kỳ lúc nào. Nếu bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi, điều đó đồng nghĩa với việc bạn chấp nhận các điều khoản mới.',
    ],
  },
  {
    title: '9. Liên hệ',
    paragraphs: ['Nếu cần hỗ trợ, vui lòng liên hệ qua email: stacloud.dev@gmail.com.'],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: '1. Thông tin chúng tôi thu thập',
    bullets: [
      'Thông tin tài khoản và liên hệ như email, tên người dùng, cũng như các thông tin bạn cung cấp khi tạo tài khoản hoặc liên hệ hỗ trợ.',
      'Thông tin thanh toán và giao dịch cần thiết để kích hoạt dịch vụ và xác nhận thanh toán. Tùy phương thức thanh toán, một phần dữ liệu thanh toán có thể được xử lý bởi nhà cung cấp bên thứ ba thay vì được chúng tôi lưu trữ trực tiếp.',
      'Thông tin kỹ thuật và vận hành như địa chỉ IP, trình duyệt hoặc thiết bị, thời gian truy cập, nhật ký sử dụng, ticket hỗ trợ và dữ liệu cấu hình liên quan đến dịch vụ.',
    ],
  },
  {
    title: '2. Cách chúng tôi sử dụng thông tin',
    bullets: [
      'Để cung cấp, kích hoạt, vận hành và cải thiện dịch vụ.',
      'Để xử lý thanh toán, ngăn chặn lạm dụng và duy trì tính ổn định cũng như bảo mật của hệ thống.',
      'Để liên hệ với bạn về hỗ trợ, thông báo quan trọng, vấn đề tài khoản và cập nhật dịch vụ.',
    ],
  },
  {
    title: '3. Chia sẻ thông tin',
    bullets: [
      'Chúng tôi không bán thông tin cá nhân của bạn.',
      'Chúng tôi có thể chia sẻ một phần thông tin với nhà cung cấp dịch vụ hoặc đối tác hạ tầng khi việc đó là cần thiết để vận hành dịch vụ, xử lý thanh toán hoặc điều tra lạm dụng.',
      'Chúng tôi có thể tiết lộ thông tin nếu pháp luật yêu cầu, để thực thi quy định, hoặc để bảo vệ nền tảng, người dùng và quyền lợi của chúng tôi.',
    ],
  },
  {
    title: '4. Thời gian lưu trữ dữ liệu',
    bullets: [
      'Chúng tôi lưu giữ thông tin trong khoảng thời gian hợp lý cần thiết để cung cấp dịch vụ, tuân thủ nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi chính sách.',
      'Nếu tài khoản hoặc dịch vụ bị chấm dứt, dữ liệu liên quan có thể bị xóa mà không cần thông báo thêm, dù một số log hoặc bản sao lưu có thể còn tồn tại tạm thời.',
    ],
  },
  {
    title: '5. Bảo mật',
    bullets: [
      'Chúng tôi áp dụng các biện pháp hợp lý để giúp bảo vệ thông tin của bạn, nhưng không có dịch vụ trực tuyến nào có thể được bảo đảm an toàn tuyệt đối.',
      'Bạn có trách nhiệm bảo vệ thông tin đăng nhập tài khoản của mình và tự duy trì bản sao lưu dữ liệu khi cần.',
    ],
  },
  {
    title: '6. Cookie và công nghệ tương tự',
    bullets: [
      'Chúng tôi có thể sử dụng cookie, local storage hoặc công nghệ tương tự để duy trì phiên đăng nhập, ghi nhớ tùy chọn và cải thiện trải nghiệm website hoặc portal.',
      'Chúng tôi cũng có thể thu thập thông tin sử dụng để chẩn đoán lỗi, tối ưu hiệu năng và phát hiện hành vi lạm dụng.',
    ],
  },
  {
    title: '7. Trách nhiệm của người dùng',
    bullets: [
      'Vui lòng cung cấp thông tin chính xác và giữ cho thông tin tài khoản luôn được cập nhật.',
      'Không tải lên hoặc chạy nội dung vi phạm Điều khoản dịch vụ hoặc pháp luật hiện hành.',
      'Bạn vẫn chịu trách nhiệm đối với dữ liệu và nội dung mà bạn lưu trữ hoặc xử lý thông qua dịch vụ của chúng tôi.',
    ],
  },
  {
    title: '8. Quyền và yêu cầu của bạn',
    bullets: [
      'Bạn có thể liên hệ để yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin của mình, tùy thuộc vào yêu cầu pháp lý, bảo mật và vận hành.',
      'Chúng tôi có thể cần xác minh danh tính của bạn trước khi xử lý một số yêu cầu nhất định.',
    ],
  },
  {
    title: '9. Quyền riêng tư của trẻ em',
    paragraphs: [
      'Dịch vụ của chúng tôi không dành cho trẻ em nếu không có sự cho phép hoặc giám sát phù hợp. Nếu bạn cho rằng chúng tôi đã thu thập thông tin cá nhân của trẻ em một cách không phù hợp, vui lòng liên hệ để chúng tôi xem xét và xử lý.',
    ],
  },
  {
    title: '10. Thay đổi chính sách này',
    paragraphs: [
      'Chúng tôi có thể cập nhật Chính sách quyền riêng tư này bất kỳ lúc nào. Việc bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận phiên bản đã cập nhật.',
    ],
  },
  {
    title: '11. Liên hệ',
    paragraphs: ['Nếu bạn có câu hỏi về Chính sách quyền riêng tư này, vui lòng liên hệ: stacloud.dev@gmail.com.'],
  },
];

export const slaSections: LegalSection[] = [
  {
    title: '1. Phạm vi áp dụng',
    paragraphs: [
      'SLA này áp dụng cho các dịch vụ trả phí do STACloud trực tiếp vận hành và cấp phát cho khách hàng, bao gồm các gói compute trả phí và quyền truy cập panel đi kèm dịch vụ đó.',
    ],
    bullets: [
      'Không áp dụng cho các gói miễn phí như NODE TEST, OpenClaw Beta hoặc bất kỳ dịch vụ community nào được ghi chú là free/sponsored.',
      'Không áp dụng cho Discord, Zalo, email support hoặc các nền tảng cộng đồng của bên thứ ba.',
      'SLA chỉ áp dụng cho thời gian sau khi dịch vụ đã được kích hoạt hợp lệ và thanh toán đầy đủ.',
    ],
  },
  {
    title: '2. Cam kết uptime',
    bullets: [
      'STACloud đặt mục tiêu uptime hàng tháng ở mức 99.9% cho các dịch vụ thuộc phạm vi SLA.',
      'Uptime hàng tháng được tính theo công thức: (tổng thời gian trong tháng - downtime hợp lệ) / tổng thời gian trong tháng.',
      'Downtime hợp lệ là khoảng thời gian dịch vụ không thể truy cập do lỗi phía STACloud kéo dài liên tục từ 5 phút trở lên.',
    ],
  },
  {
    title: '3. Bảo trì và gián đoạn có kế hoạch',
    bullets: [
      'Các đợt bảo trì có kế hoạch sẽ được thông báo trước khi có thể, thông qua portal, ticket hoặc kênh cộng đồng phù hợp.',
      'Bảo trì khẩn cấp có thể được thực hiện mà không cần báo trước nếu việc trì hoãn gây rủi ro cho hệ thống hoặc dữ liệu.',
      'Thời gian bảo trì có kế hoạch hoặc bảo trì khẩn cấp hợp lý sẽ không được tính vào downtime hợp lệ của SLA.',
    ],
  },
  {
    title: '4. Trường hợp loại trừ',
    bullets: [
      'Lỗi do cấu hình, mã nguồn, container, game server, bot hoặc ứng dụng của chính người dùng.',
      'Sự cố do hành vi lạm dụng, vượt fair use, vi phạm Terms of Service hoặc bị tạm ngưng vì lý do bảo mật/vận hành.',
      'Sự cố từ nhà cung cấp upstream, mạng Internet công cộng, DNS bên thứ ba, tấn công DDoS quy mô lớn, hoặc sự kiện bất khả kháng.',
      'Mất dữ liệu, lỗi backup hoặc gián đoạn phát sinh trên các gói miễn phí, sponsored hoặc tester.',
    ],
  },
  {
    title: '5. Yêu cầu kiểm tra SLA',
    bullets: [
      'Nếu cho rằng dịch vụ đã vi phạm SLA, bạn cần mở ticket hoặc gửi email trong vòng 7 ngày kể từ thời điểm sự cố kết thúc.',
      'Yêu cầu cần nêu rõ dịch vụ bị ảnh hưởng, khung thời gian xảy ra sự cố, mức độ tác động và thông tin để STACloud đối chiếu log.',
      'STACloud có quyền xác minh lại log hệ thống trước khi xác nhận một yêu cầu SLA.',
    ],
  },
  {
    title: '6. Service credit',
    paragraphs: [
      'Nếu vi phạm SLA được xác nhận, STACloud có thể cấp service credit dưới dạng gia hạn chu kỳ hoặc cộng credit nội bộ, không quy đổi thành tiền mặt.',
    ],
    bullets: [
      'Uptime từ 99.0% đến dưới 99.9%: service credit 10% giá trị chu kỳ hiện tại.',
      'Uptime từ 95.0% đến dưới 99.0%: service credit 25% giá trị chu kỳ hiện tại.',
      'Uptime dưới 95.0%: service credit 50% giá trị chu kỳ hiện tại.',
      'Tổng service credit tối đa cho một chu kỳ không vượt quá phí của chính chu kỳ đó.',
    ],
  },
  {
    title: '7. Giới hạn trách nhiệm',
    bullets: [
      'Service credit theo SLA là biện pháp khắc phục duy nhất cho downtime thuộc phạm vi SLA.',
      'SLA này không tạo ra nghĩa vụ hoàn tiền mặt và không thay thế các giới hạn trách nhiệm đã nêu trong Terms of Service.',
      'STACloud có thể cập nhật SLA này khi cần thiết để phù hợp với thay đổi hạ tầng hoặc chính sách vận hành.',
    ],
  },
  {
    title: '8. Liên hệ',
    paragraphs: [
      'Mọi yêu cầu liên quan đến SLA vui lòng liên hệ qua email stacloud.dev@gmail.com hoặc ticket support chính thức trên Discord của STACloud.',
    ],
  },
];

export const partnerSections: LegalSection[] = [
  {
    title: '1. Mục đích chương trình',
    paragraphs: [
      'STACloud Partner Program dành cho cộng đồng Discord, nhóm người dùng, máy chủ game, team phát triển, creator hoặc cá nhân có nhu cầu hợp tác lâu dài với STACloud.',
      'Khi tham gia chương trình, Partner đồng ý tuân thủ các điều khoản Partner này, Điều khoản dịch vụ, Chính sách quyền riêng tư, SLA và các thông báo vận hành chính thức của STACloud.',
      'Nếu có hợp đồng hoặc thỏa thuận riêng được STACloud xác nhận bằng văn bản, nội dung trong thỏa thuận riêng sẽ được ưu tiên áp dụng trong phạm vi có mâu thuẫn.',
    ],
  },
  {
    title: '2. Tư cách Partner',
    bullets: [
      'Partner là bên hợp tác cộng đồng với STACloud, không mặc nhiên là nhân viên, đại lý pháp lý, nhà phân phối chính thức hoặc người đại diện có quyền cam kết thay STACloud.',
      'Partner không được tự ý sử dụng tên, logo, thương hiệu, hình ảnh hoặc thông tin dịch vụ của STACloud theo cách gây hiểu nhầm rằng Partner có quyền đại diện pháp lý cho STACloud.',
      'STACloud có quyền xét duyệt, từ chối hoặc thu hồi tư cách Partner dựa trên mức độ phù hợp, uy tín cộng đồng, lịch sử sử dụng dịch vụ và mức độ tuân thủ quy định.',
      'Tư cách Partner chỉ có hiệu lực sau khi được STACloud xác nhận qua ticket, Discord, email hoặc kênh liên hệ chính thức.',
    ],
  },
  {
    title: '3. Quyền lợi Partner',
    bullets: [
      'Partner được giảm 20% trên các dịch vụ trả phí đủ điều kiện của STACloud.',
      'Partner được ưu tiên hỗ trợ qua ticket hoặc kênh hỗ trợ riêng nếu STACloud có bố trí.',
      'Partner được ưu tiên tiếp nhận thông báo về thay đổi dịch vụ, bảo trì, chương trình thử nghiệm, thay đổi giá hoặc các gói mới.',
      'Partner có thể được hỗ trợ tư vấn cấu hình phù hợp cho VPS, server game, bot, web, proxy, OpenClaw hoặc các nhu cầu vận hành cộng đồng.',
      'Ưu tiên hỗ trợ không đồng nghĩa với cam kết xử lý ngay lập tức trong mọi trường hợp, nhất là khi sự cố đến từ nhà cung cấp hạ tầng, cấu hình người dùng, DDoS, lỗi phần mềm bên thứ ba hoặc vấn đề ngoài phạm vi kiểm soát hợp lý của STACloud.',
    ],
  },
  {
    title: '4. Phạm vi giảm giá 20%',
    bullets: [
      'Ưu đãi 20% chỉ áp dụng cho phí dịch vụ trả phí chính được STACloud xác nhận là đủ điều kiện.',
      'Ưu đãi không áp dụng cho NODE TEST, OpenClaw Beta miễn phí, phí setup riêng, phí khôi phục dữ liệu, phí xử lý khẩn cấp, phụ phí tài nguyên, dịch vụ tùy chỉnh hoặc các khoản phí phát sinh khác nếu không có thỏa thuận trước.',
      'Ưu đãi không được cộng dồn với mã giảm giá, chương trình khuyến mãi hoặc thỏa thuận riêng khác, trừ khi STACloud xác nhận bằng văn bản.',
      'STACloud có quyền điều chỉnh danh sách dịch vụ được áp dụng ưu đãi nếu chi phí hạ tầng, chính sách nhà cung cấp hoặc tình trạng vận hành thay đổi.',
      'Ưu đãi Partner không có giá trị quy đổi thành tiền mặt, không hoàn lại và không chuyển nhượng cho bên thứ ba nếu chưa được STACloud đồng ý.',
    ],
  },
  {
    title: '5. Thanh toán và duy trì ưu đãi',
    bullets: [
      'Partner cần thanh toán đúng hạn để duy trì dịch vụ và ưu đãi.',
      'Nếu Partner thanh toán trễ, STACloud có quyền tạm dừng ưu đãi, tạm dừng dịch vụ hoặc chuyển dịch vụ về mức giá thông thường.',
      'Trường hợp Partner muốn áp dụng ưu đãi cho nhiều dịch vụ, STACloud có quyền yêu cầu xác minh rằng các dịch vụ đó phục vụ đúng mục đích hợp tác đã đăng ký.',
      'Các khoản phí đã thanh toán không mặc nhiên được hoàn lại nếu Partner vi phạm điều khoản, chấm dứt hợp tác hoặc ngừng sử dụng dịch vụ trước thời hạn.',
      'Mọi tranh chấp về hóa đơn, thời hạn, giá hoặc ưu đãi cần được gửi qua ticket trong thời gian hợp lý để STACloud kiểm tra log và lịch sử thanh toán.',
    ],
  },
  {
    title: '6. Trách nhiệm của Partner',
    bullets: [
      'Partner cần sử dụng dịch vụ đúng mục đích, đúng pháp luật và không gây ảnh hưởng đến hệ thống, người dùng khác hoặc uy tín của STACloud.',
      'Partner cần cung cấp thông tin chính xác khi mở ticket, gồm mã dịch vụ, mô tả lỗi, thời điểm phát sinh, log nếu có, ảnh chụp màn hình nếu cần và các bước đã thử.',
      'Partner có trách nhiệm tự backup dữ liệu quan trọng, đặc biệt với NODE TEST, dịch vụ miễn phí, Beta hoặc dịch vụ thử nghiệm.',
      'Partner không được công khai token, mật khẩu, thông tin đăng nhập, dữ liệu khách hàng, IP nhạy cảm, log riêng tư hoặc thông tin bảo mật trên kênh công cộng.',
      'Partner cần thông báo sớm cho STACloud nếu phát hiện lỗi bảo mật, lạm dụng tài nguyên, truy cập trái phép hoặc vấn đề có thể ảnh hưởng đến hạ tầng.',
    ],
  },
  {
    title: '7. Quy tắc tôn trọng và giao tiếp',
    bullets: [
      'Hai bên cần giữ thái độ tôn trọng, rõ ràng và hợp tác khi trao đổi.',
      'STACloud có quyền từ chối hỗ trợ ưu tiên nếu Partner hoặc thành viên đại diện có hành vi xúc phạm, đe dọa, spam ticket, gây áp lực không phù hợp hoặc đưa thông tin sai lệch.',
      'Partner không được kích động cộng đồng tấn công, phá hoại, review sai sự thật, spam hoặc gây rối nhằm ép STACloud xử lý ngoài phạm vi cam kết.',
      'Mọi tranh chấp nên được xử lý qua ticket hoặc kênh liên hệ chính thức trước khi công khai ra cộng đồng.',
      'Nếu Partner có nhiều người đại diện, Partner cần chỉ định đầu mối chính để tránh trùng lặp ticket, sai lệch thông tin hoặc yêu cầu mâu thuẫn.',
    ],
  },
  {
    title: '8. Hành vi bị cấm',
    bullets: [
      'Không dùng dịch vụ cho spam, phishing, scam, malware, botnet, DDoS, quét lỗ hổng trái phép, phát tán nội dung vi phạm pháp luật hoặc hoạt động gây hại đến hệ thống khác.',
      'Không bán lại dịch vụ STACloud dưới danh nghĩa chính thức nếu chưa có thỏa thuận reseller riêng.',
      'Không tự ý cam kết uptime, giá, chính sách hoàn tiền, thời gian xử lý hoặc quyền lợi ngoài những gì STACloud đã công bố.',
      'Không lợi dụng ưu đãi để gom dịch vụ cho người khác sử dụng sai mục đích, né giới hạn hoặc trục lợi.',
      'Không sử dụng dịch vụ để lưu trữ, phát tán hoặc xử lý dữ liệu mà Partner không có quyền hợp pháp để sử dụng.',
    ],
  },
  {
    title: '9. SLA hỗ trợ Partner',
    paragraphs: [
      'SLA hỗ trợ Partner là cam kết về thời gian phản hồi ban đầu, không phải cam kết thời gian xử lý hoàn tất. Thời gian phản hồi có thể thay đổi tùy mức độ sự cố, giờ online của đội ngũ và thông tin Partner cung cấp trong ticket.',
    ],
    subsections: [
      {
        title: 'P1 - Nghiêm trọng',
        bullets: [
          'Áp dụng khi dịch vụ trả phí không truy cập được hoàn toàn, nhiều người dùng bị ảnh hưởng và chưa có hướng khắc phục tạm thời.',
          'Thời gian phản hồi mục tiêu: 15-30 phút khi đội ngũ đang online.',
        ],
      },
      {
        title: 'P2 - Cao',
        bullets: [
          'Áp dụng khi dịch vụ hoạt động chập chờn, giảm hiệu năng rõ rệt hoặc ảnh hưởng một phần đến vận hành.',
          'Thời gian phản hồi mục tiêu: trong 2 giờ.',
        ],
      },
      {
        title: 'P3 - Trung bình',
        bullets: [
          'Áp dụng cho yêu cầu chỉnh cấu hình, kiểm tra lỗi không khẩn cấp, tư vấn vận hành hoặc hỗ trợ thông thường.',
          'Thời gian phản hồi mục tiêu: trong 24 giờ.',
        ],
      },
      {
        title: 'P4 - Thấp',
        bullets: [
          'Áp dụng cho câu hỏi chung, yêu cầu tư vấn, góp ý hoặc thay đổi không ảnh hưởng trực tiếp đến dịch vụ đang chạy.',
          'Thời gian phản hồi mục tiêu: trong 48 giờ.',
        ],
      },
    ],
  },
  {
    title: '10. Phạm vi SLA hỗ trợ',
    bullets: [
      'SLA hỗ trợ ưu tiên áp dụng cho dịch vụ trả phí ổn định và đủ điều kiện của Partner.',
      'SLA hỗ trợ ưu tiên không áp dụng cho NODE TEST, OpenClaw Beta miễn phí hoặc dịch vụ thử nghiệm, trừ khi STACloud có thông báo riêng.',
      'Các yêu cầu không có đủ thông tin, gửi sai kênh, gửi trùng lặp hoặc thay đổi nội dung liên tục có thể làm chậm thời gian xử lý.',
      'STACloud có thể hạ mức ưu tiên nếu sự cố được xác định đến từ cấu hình, mã nguồn, plugin, bot, game server, domain, DNS hoặc phần mềm bên thứ ba do Partner quản lý.',
    ],
  },
  {
    title: '11. SLA dịch vụ',
    bullets: [
      'STACloud đặt mục tiêu uptime 99.9% theo tháng cho các dịch vụ trả phí đủ điều kiện.',
      'Uptime được tính dựa trên hệ thống giám sát của STACloud hoặc dữ liệu từ nhà cung cấp hạ tầng nếu có.',
      'Các trường hợp không tính là vi phạm SLA gồm bảo trì đã thông báo, lỗi từ nhà cung cấp hạ tầng, lỗi mạng quốc tế, DDoS, cấu hình sai từ phía người dùng, phần mềm người dùng gây treo máy, hành vi vi phạm điều khoản, sự cố bất khả kháng hoặc lỗi nằm ngoài phạm vi kiểm soát hợp lý của STACloud.',
      'Nếu dịch vụ trả phí đủ điều kiện không đạt SLA và lỗi được xác nhận thuộc trách nhiệm của STACloud, STACloud có thể bồi hoàn bằng service credit cho chu kỳ tiếp theo. Service credit không quy đổi thành tiền mặt.',
    ],
  },
  {
    title: '12. Bảo trì và thay đổi hạ tầng',
    bullets: [
      'STACloud có thể bảo trì định kỳ hoặc khẩn cấp để đảm bảo an toàn, ổn định và hiệu năng hệ thống.',
      'Với bảo trì định kỳ, STACloud sẽ cố gắng thông báo trước qua Discord, website, ticket hoặc kênh liên hệ phù hợp.',
      'Với bảo trì khẩn cấp liên quan đến bảo mật, lỗi nghiêm trọng hoặc nguy cơ mất ổn định hệ thống, STACloud có thể thực hiện ngay mà không cần thông báo trước.',
      'Partner có trách nhiệm theo dõi thông báo và chủ động backup dữ liệu trước các thay đổi quan trọng nếu được thông báo.',
      'Việc thay đổi node, IP, location hoặc nhà cung cấp hạ tầng có thể được thực hiện khi cần thiết để duy trì dịch vụ, tối ưu chi phí hoặc xử lý rủi ro vận hành.',
    ],
  },
  {
    title: '13. Dữ liệu và backup',
    bullets: [
      'STACloud vận hành hạ tầng theo khả năng kỹ thuật hợp lý, nhưng Partner vẫn là bên chịu trách nhiệm chính với dữ liệu của mình.',
      'Partner cần duy trì bản backup riêng đối với dữ liệu quan trọng, bao gồm website, bot, server game, database, file cấu hình và dữ liệu người dùng.',
      'STACloud không chịu trách nhiệm với mất mát dữ liệu trên NODE TEST hoặc dịch vụ Beta.',
      'Với dịch vụ trả phí, STACloud sẽ hỗ trợ kiểm tra và khôi phục trong khả năng có thể, nhưng không cam kết khôi phục thành công nếu Partner không có backup hoặc dữ liệu đã bị ghi đè, xóa, mã hóa, lỗi do phần mềm hoặc lỗi do người dùng.',
      'Partner cần kiểm tra định kỳ khả năng khôi phục backup, vì việc có file backup nhưng không thể restore vẫn được xem là rủi ro vận hành của Partner.',
    ],
  },
  {
    title: '14. OpenClaw Beta',
    bullets: [
      'OpenClaw hiện là dịch vụ Beta miễn phí cho cộng đồng, vì vậy có thể thay đổi, giới hạn, tạm dừng hoặc gián đoạn trong quá trình thử nghiệm.',
      'OpenClaw hiện không cần domain riêng để sử dụng trong giai đoạn Beta miễn phí.',
      'Nếu cần hỗ trợ cấu hình hoặc xử lý sự cố OpenClaw, Partner hoặc người dùng có thể liên hệ qua Discord, Zalo hoặc Messenger Group.',
      'STACloud khuyến nghị chọn vị trí Singapore hoặc Việt Nam cho OpenClaw, đặc biệt với workload liên quan đến AI. Một số vị trí như Hong Kong có thể bị hạn chế bởi chính sách mạng hoặc dịch vụ bên thứ ba.',
      'OpenClaw Beta không nằm trong phạm vi uptime, bồi hoàn hoặc khôi phục dữ liệu của SLA Partner, trừ khi có thỏa thuận riêng.',
    ],
  },
  {
    title: '15. Bảo mật và xử lý lạm dụng',
    bullets: [
      'STACloud có quyền tạm khóa, giới hạn hoặc cô lập dịch vụ nếu phát hiện dấu hiệu gây hại, bị khai thác, phát tán mã độc, spam, DDoS, quét mạng trái phép hoặc ảnh hưởng nghiêm trọng đến hạ tầng.',
      'Trong trường hợp khẩn cấp, STACloud có thể hành động trước và thông báo sau để bảo vệ hệ thống và người dùng khác.',
      'Partner có trách nhiệm phối hợp cung cấp thông tin, xử lý mã độc, đổi mật khẩu, vá lỗi phần mềm hoặc gỡ bỏ nội dung vi phạm khi được yêu cầu.',
      'Nếu Partner không hợp tác hoặc tiếp tục để dịch vụ gây hại, STACloud có quyền chấm dứt hỗ trợ Partner và xử lý dịch vụ theo điều khoản sử dụng chung.',
      'Việc STACloud tạm khóa dịch vụ vì lý do bảo mật hoặc lạm dụng không được xem là vi phạm SLA.',
    ],
  },
  {
    title: '16. Thương hiệu và truyền thông',
    bullets: [
      'Partner có thể giới thiệu mình là Partner của STACloud sau khi được chấp thuận.',
      'Partner không được sử dụng thương hiệu STACloud cho nội dung sai lệch, gây hiểu nhầm, lừa đảo, quảng cáo quá mức hoặc cam kết vượt quá chính sách công bố.',
      'Nếu Partner đăng thông tin về giá, chương trình khuyến mãi hoặc quyền lợi, nội dung đó cần đúng với thông báo hiện hành của STACloud.',
      'STACloud có quyền yêu cầu chỉnh sửa hoặc gỡ nội dung nếu nội dung đó gây hiểu nhầm, ảnh hưởng đến uy tín thương hiệu hoặc không còn chính xác.',
      'Partner không được dùng logo, ảnh, banner hoặc nội dung của STACloud cho mục đích thương mại ngoài phạm vi hợp tác nếu chưa được đồng ý.',
    ],
  },
  {
    title: '17. Bảo mật thông tin và dữ liệu cá nhân',
    bullets: [
      'Hai bên cần giữ bí mật các thông tin không công khai nhận được trong quá trình hợp tác, bao gồm thông tin tài khoản, thông tin kỹ thuật, giá riêng, cấu hình hệ thống, log, dữ liệu khách hàng và nội dung ticket.',
      'Partner cần có quyền hợp pháp khi thu thập, xử lý hoặc chuyển dữ liệu cá nhân của người dùng lên dịch vụ STACloud.',
      'Partner không được yêu cầu STACloud truy cập, xuất, chia sẻ hoặc xử lý dữ liệu của người dùng cuối nếu Partner không có căn cứ hợp lệ.',
      'STACloud có thể từ chối yêu cầu liên quan đến dữ liệu nếu yêu cầu đó thiếu căn cứ xác minh, có rủi ro vi phạm quyền riêng tư hoặc trái với quy định pháp luật hiện hành.',
    ],
  },
  {
    title: '18. Chuyển nhượng và bán lại',
    bullets: [
      'Partner không được chuyển nhượng tư cách Partner, ưu đãi Partner hoặc quyền hỗ trợ ưu tiên cho bên thứ ba nếu chưa có sự đồng ý của STACloud.',
      'Việc giới thiệu người dùng mới được khuyến khích, nhưng Partner không được tự thu tiền, tự cấp cam kết hoặc tự đứng ra bán lại dịch vụ STACloud nếu chưa có thỏa thuận reseller riêng.',
      'Nếu Partner vận hành cộng đồng nhiều thành viên, Partner vẫn chịu trách nhiệm với các dịch vụ đăng ký dưới danh nghĩa của mình.',
      'STACloud có quyền từ chối áp dụng ưu đãi cho dịch vụ có dấu hiệu được dùng để bán lại, chia sẻ trái phép hoặc né giới hạn chính sách.',
    ],
  },
  {
    title: '19. Tạm dừng hoặc chấm dứt hợp tác',
    bullets: [
      'STACloud có quyền tạm dừng hoặc chấm dứt tư cách Partner nếu Partner vi phạm điều khoản dịch vụ, lạm dụng ưu đãi, không thanh toán đúng hạn, gây ảnh hưởng đến hệ thống hoặc làm tổn hại đến cộng đồng.',
      'STACloud cũng có quyền chấm dứt hợp tác nếu Partner có hành vi thiếu tôn trọng, đe dọa, xúc phạm, công kích cá nhân, phát tán thông tin sai lệch hoặc gây áp lực không phù hợp.',
      'Khi hợp tác bị chấm dứt, ưu đãi Partner và quyền hỗ trợ ưu tiên sẽ kết thúc. Các dịch vụ đang hoạt động có thể được chuyển về giá thông thường hoặc xử lý theo điều khoản dịch vụ hiện hành.',
      'Partner có thể chủ động dừng hợp tác bất cứ lúc nào bằng cách thông báo qua ticket hoặc kênh liên hệ chính thức.',
      'Việc chấm dứt tư cách Partner không tự động xóa nghĩa vụ thanh toán, nghĩa vụ bảo mật, trách nhiệm với dữ liệu hoặc trách nhiệm xử lý vi phạm đã phát sinh trước đó.',
    ],
  },
  {
    title: '20. Giới hạn trách nhiệm',
    bullets: [
      'STACloud không chịu trách nhiệm cho thiệt hại gián tiếp, mất doanh thu, mất dữ liệu, mất người dùng, gián đoạn cộng đồng hoặc thiệt hại phát sinh từ việc Partner không backup, cấu hình sai, dùng phần mềm lỗi hoặc vi phạm điều khoản.',
      'Trong mọi trường hợp, mức bồi hoàn tối đa nếu có sẽ không vượt quá phí dịch vụ mà Partner đã thanh toán cho dịch vụ bị ảnh hưởng trong chu kỳ xảy ra sự cố.',
      'Các dịch vụ miễn phí như NODE TEST và OpenClaw Beta được cung cấp theo khả năng hiện có, không kèm cam kết uptime hoặc khôi phục dữ liệu ngoài chính sách Credit đã công bố.',
      'Service credit, nếu được áp dụng, là biện pháp khắc phục duy nhất cho sự cố downtime thuộc phạm vi SLA.',
    ],
  },
  {
    title: '21. Thay đổi điều khoản',
    bullets: [
      'STACloud có quyền cập nhật điều khoản Partner khi mô hình dịch vụ, chi phí hạ tầng, chính sách nhà cung cấp hoặc yêu cầu vận hành thay đổi.',
      'Các thay đổi quan trọng sẽ được thông báo qua website, Discord, ticket hoặc kênh phù hợp.',
      'Việc Partner tiếp tục sử dụng quyền lợi Partner sau khi điều khoản mới được công bố được xem là đồng ý với điều khoản cập nhật.',
      'Partner nên kiểm tra định kỳ trang này để nắm phiên bản điều khoản mới nhất.',
    ],
  },
  {
    title: '22. Liên hệ',
    paragraphs: [
      'Mọi yêu cầu đăng ký Partner, xác minh ưu đãi, khiếu nại SLA hoặc xử lý tranh chấp vui lòng liên hệ qua ticket support chính thức trên Discord của STACloud hoặc email stacloud.dev@gmail.com.',
    ],
  },
];
