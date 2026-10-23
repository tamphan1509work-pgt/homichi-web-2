export interface Certification {
  id: string;
  name: string;
  issuer: string;
  code: string;
  scope: string;
  year: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  market: string;
  period: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
}

export interface NewsArticle {
  id: string;
  category: 'Tin tức' | 'Triển lãm' | 'Kiến thức ODM/OEM';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'SGS International Certification',
    code: 'VN21/00842-QMS',
    scope: 'Hệ thống Quản lý Chất lượng Sản xuất Thiết bị Gia dụng Điện tử',
    year: '2021 - 2027',
    description: 'Quy trình kiểm soát chất lượng từ khâu nhập nguyên vật liệu linh kiện, dập khuôn, lắp ráp bo mạch SMT đến kiểm thử xuất xưởng 100% không dung sai.'
  },
  {
    id: 'ce-cb',
    name: 'CE Marking & CB Scheme',
    issuer: 'TÜV Rheinland / Intertek',
    code: 'IEC 60335-1 / IEC 60335-2-6',
    scope: 'Tiêu chuẩn An toàn Điện tử gia dụng & Tương thích Điện từ trường EMC',
    year: '2023 - 2028',
    description: 'Đảm bảo thiết bị gia dụng Homichi đáp ứng đầy đủ chỉ thị an toàn của Liên minh Châu Âu (EU Low Voltage Directive & EMC Directive).'
  },
  {
    id: 'rohs',
    name: 'RoHS 2.0 Directive',
    issuer: 'Bureau Veritas',
    code: '2011/65/EU & (EU)2015/863',
    scope: 'Hạn chế 10 chất độc hại trong linh kiện điện tử',
    year: '2022 - 2026',
    description: 'Cam kết 100% bảng mạch và linh kiện nhựa không chứa chì, thủy ngân, cadmi và các hợp chất chống cháy nguy hại.'
  },
  {
    id: 'qcvn-4',
    name: 'QCVN 4:2009/BKHCN & CR Mark',
    issuer: 'Quatest 1 / Quatest 3',
    code: 'QCVN4-KT1/2023',
    scope: 'Quy chuẩn Kỹ thuật Quốc gia về An toàn Thiết bị Điện và Điện tử Việt Nam',
    year: '2023 - Hiện tại',
    description: 'Đạt chứng nhận hợp quy điện tử gia dụng tại thị trường Việt Nam với chỉ số an toàn điện cực đại.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Tiếp nhận & Nghiên cứu định vị',
    titleEn: 'Requirement Analysis & Strategy',
    duration: '3 - 5 ngày',
    desc: 'Phân tích chân dung khách hàng mục tiêu của đối tác, bài toán giá thành FOB/CIF, yêu cầu CMF (Color, Material, Finish) và tiêu chuẩn kỹ thuật mục tiêu.'
  },
  {
    step: '02',
    title: 'Thiết kế R&D & Kỹ thuật khuôn mẫu',
    titleEn: 'Industrial Design & Tooling R&D',
    duration: '2 - 3 tuần',
    desc: 'Đội ngũ kỹ sư Homichi lên bản vẽ 3D CAD, tối ưu khí động học và phân bổ nhiệt năng, thiết kế kiến trúc bo mạch điều khiển Smart IoT theo yêu cầu.'
  },
  {
    step: '03',
    title: 'Chế tác mẫu thử nghiệm (Mock-up & T1)',
    titleEn: 'Functional Prototyping & T1 Sample',
    duration: '10 - 15 ngày',
    desc: 'Tạo mẫu thử nghiệm thực tế với độ chính xác cao bằng CNC & in 3D công nghiệp. Khách hàng trực tiếp cầm, thử nghiệm tính năng và phê duyệt mẫu.'
  },
  {
    step: '04',
    title: 'Đo kiểm phòng Lab & Đăng kiểm chứng nhận',
    titleEn: 'Rigorous Lab Testing & Certification',
    duration: '7 - 10 ngày',
    desc: 'Thử nghiệm độ ồn trong phòng cách âm, thử nghiệm thả rơi, thử nghiệm sốc nhiệt và độ ẩm khắc nghiệt nhằm hoàn thiện hồ sơ CE, CB, RoHS.'
  },
  {
    step: '05',
    title: 'Sản xuất hàng loạt (Mass Production)',
    titleEn: 'Mass Production & QC Process',
    duration: '25 - 35 ngày',
    desc: 'Dây chuyền tự động SMT hiện đại, hệ thống kiểm tra quang học AOI tự động và quy trình QC 3 tầng (IQC - IPQC - OQC) đảm bảo tỷ lệ lỗi < 0.2%.'
  },
  {
    step: '06',
    title: 'Đóng gói thương hiệu & Bàn giao Logistics',
    titleEn: 'Custom Packaging & Global Logistics',
    duration: 'Theo lịch trình',
    desc: 'Đóng thùng carton 5 lớp in ấn thương hiệu riêng của đối tác, xử lý hun trùng pallet xuất khẩu, giao hàng tại cảng Hải Phòng, Cát Lái hoặc EXW.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Phát triển dòng Bếp từ Dual Inverter siêu mỏng cho chuỗi bán lẻ điện máy tại Đông Nam Á',
    clientIndustry: 'Chuỗi bán lẻ thiết bị nhà bếp cao cấp',
    market: 'Việt Nam & Thái Lan',
    period: '2024 - 2025',
    challenge: 'Đối tác cần dòng bếp từ đôi phong cách tối giản Bắc Âu, tối ưu cho căn hộ chung cư với bề mặt siêu mỏng <65mm nhưng phải chịu tải 4400W ổn định.',
    solution: 'Homichi ứng dụng mạch làm mát kép gió xoáy tản nhiệt thông minh, mặt kính Ceramic mài vát kim cương và bo mạch điều khiển cảm ứng điện dung chống ẩm.',
    results: [
      { metric: '45.000+', label: 'Chiếc xuất xưởng trong năm đầu' },
      { metric: '< 0.18%', label: 'Tỷ lệ bảo hành đổi trả thực tế' },
      { metric: '40 ngày', label: 'Rút ngắn từ ý tưởng tới lô hàng thương mại đầu tiên' }
    ]
  },
  {
    id: 'case-2',
    title: 'Giải pháp gia công OEM Máy hút ẩm thông minh điều khiển qua App cho thương hiệu thiết bị gia đình',
    clientIndustry: 'Thương hiệu thiết bị Smart Home',
    market: 'Bắc Âu & Nhật Bản',
    period: '2025',
    challenge: 'Yêu cầu máy nén biến tần vận hành cực êm dưới 38dB, tích hợp module WiFi Matter tương thích đa nền tảng Apple Home và Google Home.',
    solution: 'Thiết kế cấu trúc giảm rung động 3 lớp với buồng nén độc lập, tối ưu hóa cánh quạt ly tâm và nhúng firmware IoT độc quyền bảo mật cao.',
    results: [
      { metric: '100%', label: 'Đạt kiểm định chứng nhận an toàn CE / CB' },
      { metric: '-35%', label: 'Tiết kiệm điện năng so với máy hút ẩm truyền thống' },
      { metric: '18.000', label: 'Sản phẩm xuất khẩu định kỳ hàng quý' }
    ]
  },
  {
    id: 'case-3',
    title: 'Dòng quạt cây sinh trắc học DC Inverter 9 cánh vận hành tĩnh âm cho khách hàng Private Label',
    clientIndustry: 'Thương hiệu nội thất & phong cách sống',
    market: 'Thị trường nội địa & Hàn Quốc',
    period: '2025 - 2026',
    challenge: 'Tạo ra quạt đứng có ngoại hình thanh lịch màu parchment, động cơ không chổi than tiết kiệm điện chỉ 35W nhưng tạo luồng gió tự nhiên dịu nhẹ.',
    solution: 'Đúc cánh quạt theo biên dạng sinh trắc học lấy cảm hứng từ cánh hải âu, phối màu CMF cao cấp chống bám vân tay và tia cực tím.',
    results: [
      { metric: '28 dB', label: 'Độ ồn cực thấp ở mức gió 1' },
      { metric: '60.000+', label: 'Đơn vị sản phẩm tiêu thụ sau 6 tháng ra mắt' },
      { metric: '4.9/5', label: 'Điểm đánh giá trải nghiệm người dùng cuối' }
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    category: 'Triển lãm',
    title: 'Homichi ra mắt bộ sưu tập thiết bị gia dụng thông minh tại Canton Fair & IFA Berlin 2026',
    date: '18 Tháng 10, 2026',
    readTime: '4 phút đọc',
    summary: 'Homichi giới thiệu tới hơn 120 đối tác quốc tế các giải pháp gia công ODM dòng bếp từ sinh nhiệt kép và máy hút ẩm điều khiển bằng thuật toán tiết kiệm năng lượng.',
    content: 'Tại hội chợ Canton Fair mùa thu 2026, gian hàng của Homichi thu hút sự quan tâm của nhiều nhà nhập khẩu từ Đức, Ba Lan, Úc và Nhật Bản. Với triết lý thiết kế tối giản, loại bỏ các chi tiết thừa và tập trung vào vật liệu mờ satin ấm áp, các dòng sản phẩm của Homichi khẳng định năng lực chế tác vượt trội của ngành sản xuất thiết bị gia dụng công nghệ cao tại Việt Nam.'
  },
  {
    id: 'news-2',
    category: 'Kiến thức ODM/OEM',
    title: 'Những tiêu chí cốt lõi khi doanh nghiệp lựa chọn đối tác ODM/OEM thiết bị gia dụng thông minh',
    date: '05 Tháng 10, 2026',
    readTime: '6 phút đọc',
    summary: 'Hướng dẫn chi tiết cho các nhà sáng lập thương hiệu và giám đốc chuỗi cung ứng trong việc đánh giá năng lực khuôn mẫu, cam kết bảo mật NDA và kiểm chuẩn chất lượng.',
    content: 'Việc chuyển dịch từ đơn vị thương mại thuần túy sang sở hữu dòng sản phẩm mang bản sắc thương hiệu riêng đòi hỏi một đối tác sản xuất có năng lực R&D thực thụ. Bài viết phân tích 5 khía cạnh then chốt: năng lực tự chủ khuôn mẫu cơ khí, quy trình thử nghiệm độ bền trong môi trường nhiệt ẩm nhiệt đới, tính linh hoạt của MOQ và chính sách bảo hành linh kiện dài hạn.'
  },
  {
    id: 'news-3',
    category: 'Tin tức',
    title: 'Homichi khánh thành tổ hợp dây chuyền SMT tự động thế hệ thứ tư, nâng công suất thêm 40%',
    date: '22 Tháng 09, 2026',
    readTime: '3 phút đọc',
    summary: 'Dây chuyền mới được trang bị máy gắp linh kiện siêu tốc của Nhật Bản và hệ thống kiểm tra quang học 3D AOI với độ chuẩn xác micromet.',
    content: 'Nhằm đáp ứng nhu cầu gia tăng đơn hàng xuất khẩu từ thị trường Đông Nam Á và Bắc Mỹ, Homichi đã hoàn tất lắp đặt và đưa vào vận hành phân xưởng SMT thế hệ mới tại cụm công nghiệp công nghệ cao. Bước tiến này củng cố năng lực kiểm soát 100% bo mạch điều khiển cho các dòng bếp từ và quạt điều hòa cao cấp.'
  }
];

export const FAQ_LIST = [
  {
    q: 'Số lượng đặt hàng tối thiểu (MOQ) tại Homichi là bao nhiêu?',
    a: 'Đối với dịch vụ Private Label (tùy biến logo, màu sắc CMF trên mẫu khuôn sẵn có), MOQ từ 200 - 500 sản phẩm/mã. Đối với dự án ODM/OEM phát triển khuôn độc quyền mới, MOQ thông thường từ 1.000 - 3.000 sản phẩm tùy theo quy mô và ngành hàng.'
  },
  {
    q: 'Homichi cam kết bảo vệ bản quyền thiết kế và bí mật thương mại (NDA) như thế nào?',
    a: 'Chúng tôi ký kết thỏa thuận bảo mật thông tin (Non-Disclosure Agreement - NDA) có giá trị pháp lý quốc tế trước khi khách hàng gửi bất kỳ bản vẽ hay thông số kỹ thuật nào. Mọi khuôn mẫu và thiết kế ODM độc quyền do khách hàng tài trợ đều thuộc quyền sở hữu riêng của khách hàng và tuyệt đối không bao giờ cung cấp cho bên thứ ba.'
  },
  {
    q: 'Thời gian hoàn thiện đơn hàng mẫu và sản xuất hàng loạt mất bao lâu?',
    a: 'Thời gian cung cấp mẫu thử nghiệm chức năng (T1 Sample) dao động từ 10 - 20 ngày. Thời gian sản xuất hàng loạt cho lô hàng đầu tiên thường là 30 - 35 ngày kể từ ngày duyệt mẫu cuối và nhận đặt cọc.'
  },
  {
    q: 'Chính sách bảo hành và cung cấp linh kiện thay thế dành cho đối tác B2B ra sao?',
    a: 'Homichi cung cấp chính sách bảo hành động cơ máy nén lên đến 5 năm, bo mạch điện tử 24 tháng. Đồng thời, chúng tôi luôn dự phòng 1 - 2% linh kiện bảo hành miễn phí (FOC - Free of Charge) đi kèm theo từng lô hàng xuất xưởng để đối tác chủ động chăm sóc khách hàng.'
  },
  {
    q: 'Homichi có hỗ trợ thủ tục kiểm định và đăng ký chứng nhận an toàn (CR, CE, CB) không?',
    a: 'Có. Đội ngũ pháp lý và kỹ sư của Homichi sẽ đồng hành hỗ trợ toàn bộ quá trình lập hồ sơ, đưa mẫu đi đo kiểm tại các trung tâm Quatest, TÜV, Intertek và hoàn tất các thủ tục dán nhãn năng lượng, chứng nhận hợp quy theo đúng thị trường mà quý đối tác kinh doanh.'
  }
];
