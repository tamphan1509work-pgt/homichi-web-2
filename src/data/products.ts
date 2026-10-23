export interface Product {
  id: number;
  name: string;
  model: string;
  category: string;
  displayPrice: string;
  price: number | null;
  link: string;
  thumbnail: string;
  originalImage: string;
  specs?: {
    power?: string;
    capacity?: string;
    dimensions?: string;
    technology?: string;
    material?: string;
  };
  features?: string[];
  oemOptions?: string[];
}

export const CATEGORIES = [
  'Tất cả ngành hàng',
  'Bếp từ',
  'Máy hút bụi',
  'Quạt điều hòa',
  'Máy sưởi',
  'Máy hút ẩm',
  'Bình nước nóng',
  'Quạt cây',
  'Điều hòa'
] as const;

export const CATEGORIES_EN: Record<string, string> = {
  'Tất cả ngành hàng': 'All Categories',
  'Bếp từ': 'Induction Cooktops',
  'Máy hút bụi': 'Cordless Vacuums',
  'Quạt điều hòa': 'Evaporative Air Coolers',
  'Máy sưởi': 'Ceramic Heaters',
  'Máy hút ẩm': 'Smart Dehumidifiers',
  'Bình nước nóng': 'Water Heaters',
  'Quạt cây': 'Smart Stand Fans',
  'Điều hòa': 'Inverter Air Conditioners'
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bếp từ đôi Livotec E-smart LIO-666V",
    model: "LIO-666V",
    category: "Bếp từ",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/bep-tu-doi-livotec-e-smart-lio-666v/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/10/livotec-e-smart-lio-666v-06-07-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/10/livotec-e-smart-lio-666v-06-07-1.png.webp",
    specs: {
      power: "4400W (Booster 2400W)",
      technology: "Dual Inverter E-Smart tiết kiệm điện 35%",
      dimensions: "730 x 430 x 60 mm",
      material: "Kính Ceramic vát cạnh chịu lực chịu sốc nhiệt 800°C"
    },
    features: ["Cảm biến chống trào tự động ngắt", "Hẹn giờ độc lập 99 phút", "Tự động nhận diện đáy nồi"],
    oemOptions: ["Khắc logo laser theo yêu cầu", "Tùy biến mặt kính CMF", "Bao bì carton 5 lớp song ngữ"]
  },
  {
    id: 2,
    name: "Bếp điện từ đôi Livotec LID-888",
    model: "LID-888",
    category: "Bếp từ",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/bep-dien-tu-doi-livotec-lid-888/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/10/LID-888-02.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/10/LID-888-02.png.webp",
    specs: {
      power: "4000W",
      technology: "Công nghệ điều khiển trượt Slider 9 mức công suất",
      dimensions: "720 x 420 x 65 mm",
      material: "Mặt kính pha lê cường lực Crystal Plate"
    },
    features: ["Khóa an toàn trẻ em", "Cảnh báo nhiệt dư vùng nấu", "Chế độ ninh hầm tiện lợi"],
    oemOptions: ["Tùy chỉnh giao diện điều khiển", "In thương hiệu riêng", "Chứng nhận xuất xưởng OEM"]
  },
  {
    id: 3,
    name: "Máy hút bụi không dây Livotec LV-200",
    model: "LV-200",
    category: "Máy hút bụi",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/may-hut-bui-khong-day-livotec-lv-200/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_byl7p5byl7p5byl7-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_byl7p5byl7p5byl7.webp",
    specs: {
      power: "Lực hút 25.000Pa - Động cơ không chổi than BLDC",
      capacity: "Hộp chứa bụi 0.8L tháo rời 1 chạm",
      technology: "Màng lọc HEPA 5 lớp lọc sạch 99.97% bụi mịn",
      material: "Khung hợp kim nhôm siêu nhẹ 1.4kg"
    },
    features: ["Pin Lithium 2500mAh dùng 55 phút", "Đèn LED soi bụi góc khuất", "Đầu hút thảm chống rối tóc"],
    oemOptions: ["Phối màu CMF (Terracotta/Graphite/Parchment)", "Bộ đầu hút chuyên biệt", "Mạch bảo vệ pin BMS chuẩn quốc tế"]
  },
  {
    id: 4,
    name: "Máy hút bụi không dây Livotec LV-100",
    model: "LV-100",
    category: "Máy hút bụi",
    displayPrice: "2.700.000 ₫",
    price: 2700000,
    link: "https://homichi.com/may-hut-bui-khong-day-livotec-lv-99/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_l2dv8hl2dv8hl2dv-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_l2dv8hl2dv8hl2dv.webp",
    specs: {
      power: "Lực hút 18.000Pa",
      capacity: "Hộp chứa bụi 0.6L",
      technology: "Lốc xoáy Cyclone đa tầng",
      material: "Nhựa ABS nguyên sinh chống va đập"
    },
    features: ["Pin 2200mAh thời lượng 40 phút", "Thiết kế tay cầm công thái học", "Treo tường sạc nhanh"],
    oemOptions: ["Tùy chọn dung lượng pin", "Logo ép nhiệt cao cấp", "Chứng chỉ CE/CB"]
  },
  {
    id: 5,
    name: "Máy hút bụi không dây Livotec LV-99",
    model: "LV-99",
    category: "Máy hút bụi",
    displayPrice: "1.800.000 ₫",
    price: 1800000,
    link: "https://homichi.com/may-hut-bui-khong-day-livotec-lv-99-2/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_x319oax319oax319-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_x319oax319oax319.webp",
    specs: {
      power: "Lực hút 14.000Pa",
      capacity: "0.5L",
      technology: "Động cơ đồng nguyên chất",
      material: "Thiết kế siêu nhỏ gọn 1.1kg"
    },
    features: ["Đa năng hút khe bàn và ô tô", "Sạc cổng Type-C tiện dụng", "Lọc rửa được dưới nước"],
    oemOptions: ["In nhãn riêng Private Label", "Tùy chọn phụ kiện ô tô", "Đóng gói hộp quà cao cấp"]
  },
  {
    id: 6,
    name: "Quạt điều hòa Livotec LAC-G62",
    model: "LAC-G62",
    category: "Quạt điều hòa",
    displayPrice: "3.200.000 ₫",
    price: 3200000,
    link: "https://homichi.com/quat-dieu-hoa-livotec-lac-g62/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_z9gfrbz9gfrbz9gf-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_z9gfrbz9gfrbz9gf.webp",
    specs: {
      power: "130W",
      capacity: "Bình chứa nước 35L",
      technology: "Tấm làm mát Cooling Pad gỗ sồi kháng khuẩn",
      dimensions: "450 x 360 x 980 mm"
    },
    features: ["Điều khiển từ xa 10m", "Tạo ion âm làm sạch không khí", "3 chế độ gió tự nhiên"],
    oemOptions: ["Tùy chỉnh bo mạch điều khiển", "Bản vẽ dập nổi logo", "Kèm hộp đá khô cao cấp"]
  },
  {
    id: 7,
    name: "Quạt điều hòa Livotec LAC-G60",
    model: "LAC-G60",
    category: "Quạt điều hòa",
    displayPrice: "2.400.000 ₫",
    price: 2400000,
    link: "https://homichi.com/quat-dieu-hoa-livotec-lac-g60/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8s6ooo8s6ooo8s6o-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8s6ooo8s6ooo8s6o.webp",
    specs: {
      power: "100W",
      capacity: "Bình nước 25L",
      technology: "Động cơ dây đồng 100% êm ái",
      dimensions: "380 x 320 x 860 mm"
    },
    features: ["Cảnh báo cạn nước tự động tắt bơm", "Bánh xe xoay 360 độ linh hoạt"],
    oemOptions: ["Màu sơn theo nhận diện thương hiệu", "Tùy biến nhãn cảnh báo"]
  },
  {
    id: 8,
    name: "Quạt điều hòa Livotec LAC-H66",
    model: "LAC-H66",
    category: "Quạt điều hòa",
    displayPrice: "8.990.000 ₫",
    price: 8990000,
    link: "https://homichi.com/quat-dieu-hoa-livotec-lac-h66/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8b2t7j8b2t7j8b2t-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_8b2t7j8b2t7j8b2t.webp",
    specs: {
      power: "280W - Lưu lượng gió 7.500 m³/h",
      capacity: "Dung tích cực đại 65L",
      technology: "3 cửa lấy gió với 3 tấm cooling pad dày 70mm",
      dimensions: "620 x 430 x 1200 mm"
    },
    features: ["Phù hợp diện tích 50-70m²", "Cổng châm nước tự động van phao", "Vỏ nhựa PP kỹ thuật chống oxy hóa"],
    oemOptions: ["Tích hợp module Smart Wifi", "In logo kim loại chìm", "Tiêu chuẩn xuất khẩu Đông Nam Á"]
  },
  {
    id: 9,
    name: "Quạt điều hòa Livotec LAC-G66S",
    model: "LAC-G66S",
    category: "Quạt điều hòa",
    displayPrice: "7.590.000 ₫",
    price: 7590000,
    link: "https://homichi.com/quat-dieu-hoa-livotec-lac-g66s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_74v8gl74v8gl74v8-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_74v8gl74v8gl74v8.webp",
    specs: {
      power: "220W",
      capacity: "55L",
      technology: "Công nghệ tạo luồng gió xoáy sâu 12m",
      dimensions: "580 x 400 x 1120 mm"
    },
    features: ["Màn hình cảm ứng LED hiện đại", "Cảm biến nhiệt độ phòng hiển thị real-time"],
    oemOptions: ["Tùy chỉnh màn hình cảm ứng", "Phát triển firmware chuyên biệt"]
  },
  {
    id: 10,
    name: "Quạt điều hòa Livotec LAC-H66S",
    model: "LAC-H66S",
    category: "Quạt điều hòa",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/quat-dieu-hoa-livotec-lac-h66s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/quat-dieu-hoa-livotec-lac-h66s-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/quat-dieu-hoa-livotec-lac-h66s-1.png.webp",
    specs: {
      power: "300W - Bơm chìm siêu êm",
      capacity: "70L",
      technology: "Động cơ biến tần chống nước IPX4"
    },
    features: ["Hẹn giờ 12 tiếng", "Tự động đảo hướng gió 4 chiều"],
    oemOptions: ["Gia công ODM theo khuôn riêng", "Cung cấp trọn gói chứng nhận xuất xứ C/O"]
  },
  {
    id: 11,
    name: "Máy sưởi gốm Livotec LCH-1597D",
    model: "LCH-1597D",
    category: "Máy sưởi",
    displayPrice: "1.640.000 ₫",
    price: 1640000,
    link: "https://homichi.com/may-suoi-gom-livotec-lch-1597d/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/thumnail-may-suoi-gom-livotec-lch-1597d-2.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/thumnail-may-suoi-gom-livotec-lch-1597d-2.png.webp",
    specs: {
      power: "1500W PTC Ceramic ấm nhanh sau 3 giây",
      technology: "Không đốt cháy oxy, không gây khô da hay chói mắt",
      dimensions: "180 x 180 x 480 mm",
      material: "Vỏ nhựa chống cháy chuẩn V0"
    },
    features: ["Cảm biến tự ngắt khi bị nghiêng đổ", "Bảo vệ quá nhiệt 2 cấp độ", "Quay đảo góc rộng 70°"],
    oemOptions: ["Tùy chọn tông màu Warm Taupe/Terracotta", "Điều khiển từ xa độc quyền"]
  },
  {
    id: 12,
    name: "Máy sưởi gốm Livotec LCH-2089T",
    model: "LCH-2089T",
    category: "Máy sưởi",
    displayPrice: "1.850.000 ₫",
    price: 1850000,
    link: "https://homichi.com/may-suoi-gom-livotec-lch-2089t/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/may-suoi-livotec-lch-2089t-2.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/may-suoi-livotec-lch-2089t-2.png.webp",
    specs: {
      power: "2000W",
      technology: "Mặt sưởi gốm tổ ong hiệu suất cao",
      dimensions: "200 x 200 x 620 mm"
    },
    features: ["Cảm ứng kỹ thuật số sang trọng", "Chế độ gió tự nhiên dùng quanh năm"],
    oemOptions: ["Custom logo mạ crom tinh tế", "Tiêu chuẩn CE/RoHS"]
  },
  {
    id: 13,
    name: "Máy sưởi gốm Livotec LCH-2079T",
    model: "LCH-2079T",
    category: "Máy sưởi",
    displayPrice: "2.400.000 ₫",
    price: 2400000,
    link: "https://homichi.com/may-suoi-gom-livotec-lch-2079t/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/may-suoi-gom-livotec-lch-2079t-3-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/may-suoi-gom-livotec-lch-2079t-3-1.png.webp",
    specs: {
      power: "2200W",
      technology: "Smart Temp Sensor giữ nhiệt độ phòng ổn định",
      dimensions: "220 x 220 x 780 mm",
      material: "Lưới thép phủ gốm nano chống bám bụi"
    },
    features: ["Điều khiển qua ứng dụng điện thoại Smart Life / Tuya", "Góc quay siêu rộng 90°"],
    oemOptions: ["Tích hợp App IoT thương hiệu riêng", "Gói hướng dẫn sử dụng đa ngôn ngữ"]
  },
  {
    id: 14,
    name: "Máy hút ẩm Livotec LHD-18IU",
    model: "LHD-18IU",
    category: "Máy hút ẩm",
    displayPrice: "5.789.000 ₫",
    price: 5789000,
    link: "https://homichi.com/may-hut-am-livotec-lhd-18iu/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_ydqjy9ydqjy9ydqj-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_ydqjy9ydqjy9ydqj.webp",
    specs: {
      power: "Công suất hút ẩm 18L/ngày (30°C, 80%RH)",
      capacity: "Bình chứa nước 3.2L kèm ống xả liên tục",
      technology: "Máy nén biến tần Panasonic siêu bền, gas R134a thân thiện môi trường",
      dimensions: "310 x 210 x 530 mm"
    },
    features: ["Chế độ sấy khô quần áo chống nồm", "Đèn báo độ ẩm 3 màu trực quan", "Khóa bảng điều khiển"],
    oemOptions: ["Tùy chọn dung tích hút ẩm", "Tùy biến nhãn năng lượng", "Đồng bộ hệ thống Smart Home"]
  },
  {
    id: 15,
    name: "Máy hút ẩm Livotec LHD-25IH",
    model: "LHD-25IH",
    category: "Máy hút ẩm",
    displayPrice: "7.610.000 ₫",
    price: 7610000,
    link: "https://homichi.com/may-hut-am-livotec-lhd-25ih/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_6vp0zi6vp0zi6vp0-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/09/Gemini_Generated_Image_6vp0zi6vp0zi6vp0.webp",
    specs: {
      power: "Hút ẩm 25L/ngày",
      capacity: "Bình nước 4.5L",
      technology: "Công nghệ Ion Plasmacluster diệt khuẩn nấm mốc",
      dimensions: "340 x 240 x 570 mm"
    },
    features: ["Độ ồn cực thấp < 38dB thích hợp phòng ngủ", "Hẹn giờ bật tắt 24h"],
    oemOptions: ["Custom CMF hoàn thiện mờ nhung", "Chứng nhận xuất khẩu EU"]
  },
  {
    id: 16,
    name: "Máy hút ẩm Livotec LHD-36IU",
    model: "LHD-36IU",
    category: "Máy hút ẩm",
    displayPrice: "7.860.000 ₫",
    price: 7860000,
    link: "https://homichi.com/may-hut-am-livotec-lhd-36iu-2/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_723v3c723v3c723v-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_723v3c723v3c723v.webp",
    specs: {
      power: "Hút ẩm 36L/ngày công suất lớn",
      capacity: "Bình chứa 6.5L",
      technology: "Dàn tản nhiệt đồng kép mạ titan kháng ăn mòn",
      dimensions: "380 x 270 x 630 mm"
    },
    features: ["Phù hợp diện tích 60 - 90m²", "Bơm đẩy xả nước cưỡng bức lên độ cao 3m"],
    oemOptions: ["Gia công theo đơn đặt hàng lớn B2B", "Logo kim loại phay xước"]
  },
  {
    id: 17,
    name: "Bình nước nóng 30L gián tiếp LWH-I30A26S",
    model: "LWH-I30A26S",
    category: "Bình nước nóng",
    displayPrice: "4.990.000 ₫",
    price: 4990000,
    link: "https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30a26s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k.webp",
    specs: {
      power: "2500W",
      capacity: "30 Lít",
      technology: "Thanh đốt đồng nguyên chất siêu bền, tráng men Titan chống ăn mòn",
      material: "Lớp cách nhiệt PU mật độ cao giữ nóng 48 tiếng"
    },
    features: ["Hệ thống chống giật ELCB lưỡng cực siêu nhạy", "Rơ-le kiểm soát nhiệt độ kép", "Van an toàn chống áp suất vượt ngưỡng"],
    oemOptions: ["Tùy chọn kích thước bình ngang/vuông", "In thương hiệu men nung chịu nhiệt", "Chứng nhận kiểm định an toàn điện QCVN"]
  },
  {
    id: 18,
    name: "Bình nước nóng 30L gián tiếp LWH-I30T26",
    model: "LWH-I30T26",
    category: "Bình nước nóng",
    displayPrice: "3.990.000 ₫",
    price: 3990000,
    link: "https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30t26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o.webp",
    specs: {
      power: "2500W",
      capacity: "30 Lít",
      technology: "Men sứ kim cương tráng lòng bình chống rò rỉ nước",
      material: "Ruột bình thép chịu áp lực cao dày 2mm"
    },
    features: ["Cọc magie cỡ lớn bảo vệ thanh đốt", "Đèn báo trạng thái đun nước thông minh"],
    oemOptions: ["Custom màu sắc dải viền trang trí", "Tùy biến độ dày vỏ bảo vệ"]
  },
  {
    id: 19,
    name: "Bình nước nóng 30L gián tiếp LWH-I30B26",
    model: "LWH-I30B26",
    category: "Bình nước nóng",
    displayPrice: "3.990.000 ₫",
    price: 3990000,
    link: "https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30b26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i.webp",
    specs: {
      power: "2500W",
      capacity: "30 Lít"
    },
    features: ["Núm vặn chỉnh nhiệt độ chính xác", "Lắp đặt linh hoạt theo không gian"],
    oemOptions: ["Sản xuất Private Label số lượng lớn"]
  },
  {
    id: 20,
    name: "Bình nước nóng 30L gián tiếp LWH-I30A25",
    model: "LWH-I30A25",
    category: "Bình nước nóng",
    displayPrice: "4.279.000 ₫",
    price: 4279000,
    link: "https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30a25/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq.webp",
    specs: {
      power: "2500W",
      capacity: "30 Lít"
    },
    features: ["Tiết kiệm điện năng chuẩn 5 sao", "Cơ chế gia nhiệt thông minh"],
    oemOptions: ["Bảo hành linh kiện mở rộng B2B"]
  },
  {
    id: 21,
    name: "Bình nước nóng 30L gián tiếp LWH-I30X26",
    model: "LWH-I30X26",
    category: "Bình nước nóng",
    displayPrice: "3.890.000 ₫",
    price: 3890000,
    link: "https://homichi.com/binh-nuoc-nong-30l-gian-tiep-lwh-i30x26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l.webp",
    specs: {
      power: "2500W",
      capacity: "30 Lít"
    },
    features: ["Thanh gia nhiệt Incoloy 840 siêu bền trong môi trường nước cứng"],
    oemOptions: ["Tùy chỉnh bao bì xuất khẩu"]
  },
  {
    id: 22,
    name: "Bình nước nóng 15L gián tiếp LWH-V15A26S",
    model: "LWH-V15A26S",
    category: "Bình nước nóng",
    displayPrice: "3.690.000 ₫",
    price: 3690000,
    link: "https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15a26s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl.webp",
    specs: {
      power: "2500W",
      capacity: "15 Lít dạng bình vuông nhỏ gọn",
      dimensions: "360 x 360 x 310 mm"
    },
    features: ["Tối ưu không gian phòng tắm chung cư", "Đun nóng nhanh chỉ 10 phút"],
    oemOptions: ["Tùy biến logo và tài liệu bán hàng B2B"]
  },
  {
    id: 23,
    name: "Bình nước nóng 15L gián tiếp LWH-V15B26",
    model: "LWH-V15B26",
    category: "Bình nước nóng",
    displayPrice: "2.990.000 ₫",
    price: 2990000,
    link: "https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15b26-2/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr.webp",
    specs: { power: "2500W", capacity: "15 Lít" },
    features: ["Chống giật ELCB an toàn tuyệt đối"],
    oemOptions: ["Hỗ trợ thiết kế khuôn mẫu riêng"]
  },
  {
    id: 24,
    name: "Bình nước nóng 15L gián tiếp LWH-V15T26",
    model: "LWH-V15T26",
    category: "Bình nước nóng",
    displayPrice: "2.990.000 ₫",
    price: 2990000,
    link: "https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15t26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1.webp",
    specs: { power: "2500W", capacity: "15 Lít" },
    features: ["Vỏ nhựa ABS dày dặn chống tia UV"],
    oemOptions: ["Gia công OEM theo tiêu chuẩn khách"]
  },
  {
    id: 25,
    name: "Bình nước nóng 15L gián tiếp LWH-V15A25",
    model: "LWH-V15A25",
    category: "Bình nước nóng",
    displayPrice: "3.289.000 ₫",
    price: 3289000,
    link: "https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15a25/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2.webp",
    specs: { power: "2500W", capacity: "15 Lít" },
    features: ["Giữ nhiệt đến 48 giờ"],
    oemOptions: ["Tùy chọn phụ kiện van một chiều cao cấp"]
  },
  {
    id: 26,
    name: "Bình nước nóng 15L gián tiếp LWH-V15X26",
    model: "LWH-V15X26",
    category: "Bình nước nóng",
    displayPrice: "2.990.000 ₫",
    price: 2990000,
    link: "https://homichi.com/binh-nuoc-nong-15l-gian-tiep-lwh-v15x26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo.webp",
    specs: { power: "2500W", capacity: "15 Lít" },
    features: ["Độ bền vượt trội"],
    oemOptions: ["Sản xuất thương mại quy mô lớn"]
  },
  {
    id: 27,
    name: "Bình nước nóng 20L gián tiếp LWH-V20A25",
    model: "LWH-V20A25",
    category: "Bình nước nóng",
    displayPrice: "3.685.000 ₫",
    price: 3685000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-lwh-v20a25/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jfvhnjfvhnjfvhnj-2.webp",
    specs: { power: "2500W", capacity: "20 Lít vuông" },
    features: ["Dung tích vừa vặn cho gia đình 2-3 người"],
    oemOptions: ["Tùy chỉnh phối màu CMF"]
  },
  {
    id: 28,
    name: "Bình nước nóng 20L gián tiếp LWH-I20A25",
    model: "LWH-I20A25",
    category: "Bình nước nóng",
    displayPrice: "3.729.000 ₫",
    price: 3729000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20a25/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_dnsqttdnsqttdnsq.webp",
    specs: { power: "2500W", capacity: "20 Lít ngang" },
    features: ["Kiểu dáng slim mỏng hiện đại"],
    oemOptions: ["Gia công logo laser"]
  },
  {
    id: 29,
    name: "Bình nước nóng 20L gián tiếp LWH-I20A26S",
    model: "LWH-I20A26S",
    category: "Bình nước nóng",
    displayPrice: "4.290.000 ₫",
    price: 4290000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20a26s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g59k0sg59k0sg59k.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Công nghệ kháng khuẩn ion bạc Ag+"],
    oemOptions: ["Tùy chỉnh module an toàn"]
  },
  {
    id: 30,
    name: "Bình nước nóng 20L gián tiếp LWH-I20B26",
    model: "LWH-I20B26",
    category: "Bình nước nóng",
    displayPrice: "3.490.000 ₫",
    price: 3490000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20b26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_g99ilog99ilog99i.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Thanh magie độc lập dễ bảo trì"],
    oemOptions: ["Hỗ trợ xuất khẩu các nước"]
  },
  {
    id: 31,
    name: "Bình nước nóng 20L gián tiếp LWH-I20T26",
    model: "LWH-I20T26",
    category: "Bình nước nóng",
    displayPrice: "3.490.000 ₫",
    price: 3490000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20t26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_aj2o82aj2o82aj2o.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Ruột bình phủ men kim cương"],
    oemOptions: ["Custom nhãn mác thương hiệu"]
  },
  {
    id: 32,
    name: "Bình nước nóng 20L gián tiếp LWH-I20X26",
    model: "LWH-I20X26",
    category: "Bình nước nóng",
    displayPrice: "3.390.000 ₫",
    price: 3390000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-livotec-lwh-i20x26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_jd4l6ljd4l6ljd4l.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Van an toàn áp suất cao"],
    oemOptions: ["Chứng chỉ tiêu chuẩn chất lượng"]
  },
  {
    id: 33,
    name: "Bình nước nóng 20L gián tiếp LWH-V20A26S",
    model: "LWH-V20A26S",
    category: "Bình nước nóng",
    displayPrice: "3.990.000 ₫",
    price: 3990000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-lwh-v20a26s/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_etvl0petvl0petvl.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Bình vuông thanh lịch"],
    oemOptions: ["In bao bì cao cấp"]
  },
  {
    id: 34,
    name: "Bình nước nóng 20L gián tiếp LWH-V20B26",
    model: "LWH-V20B26",
    category: "Bình nước nóng",
    displayPrice: "3.200.000 ₫",
    price: 3200000,
    link: "https://homichi.com/binh-nuoc-nong-20l-gian-tiep-lwh-v20b26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_vwlrk2vwlrk2vwlr.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Bộ rơ le cảm biến nhiệt"],
    oemOptions: ["Gia công theo đơn đặt hàng"]
  },
  {
    id: 35,
    name: "Bình nước nóng 20L gián tiếp LWH-V20T26",
    model: "LWH-V20T26",
    category: "Bình nước nóng",
    displayPrice: "3.200.000 ₫",
    price: 3200000,
    link: "https://homichi.com/binh-nuoc-nong-gian-tiep-livotec-lwh-v20t26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_9quoyk9quoyk9quo-1.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["Lớp cách nhiệt dày giữ nhiệt lâu"],
    oemOptions: ["Logo dập nổi tinh tế"]
  },
  {
    id: 36,
    name: "Bình nước nóng 20L gián tiếp LWH-V20X26",
    model: "LWH-V20X26",
    category: "Bình nước nóng",
    displayPrice: "3.350.000 ₫",
    price: 3350000,
    link: "https://homichi.com/binh-nuoc-nong-livotec-lwh-v20x26/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/Gemini_Generated_Image_a8losda8losda8lo.webp",
    specs: { power: "2500W", capacity: "20 Lít" },
    features: ["An toàn tối đa"],
    oemOptions: ["Dịch vụ ODM trọn gói"]
  },
  {
    id: 37,
    name: "Quạt cây Livotec SB-616",
    model: "SB-616",
    category: "Quạt cây",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/quat-cay-livotec-sb-616/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-sb-616-1-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-sb-616-1-1.png.webp",
    specs: {
      power: "Động cơ DC Inverter 35W siêu tiết kiệm điện",
      technology: "Cánh quạt 9 lá sinh trắc học cắt gió siêu mịn",
      dimensions: "Chiều cao tùy chỉnh 90 - 130 cm",
      material: "Khung hợp kim nhôm Anode kết hợp nhựa kỹ thuật"
    },
    features: ["12 cấp độ gió tự nhiên", "Điều khiển từ xa & màn hình LED ẩn", "Độ ồn cực thấp chỉ 28dB"],
    oemOptions: ["Phối màu phong cách Scandinavian", "Tùy biến cánh quạt 7 hoặc 9 cánh", "Chứng chỉ CB, CE, ERP"]
  },
  {
    id: 38,
    name: "Quạt cây Livotec S-420",
    model: "S-420",
    category: "Quạt cây",
    displayPrice: "Liên hệ",
    price: null,
    link: "https://homichi.com/quat-cay-livotec-s-420/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-420-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-420-1.png.webp",
    specs: {
      power: "48W",
      technology: "Động cơ bạc thau nguyên chất có cầu chì nhiệt",
      dimensions: "Đường kính cánh 400mm"
    },
    features: ["Chân đế đúc kim loại nặng chống rung", "Lồng quạt đan khít an toàn ngón tay trẻ nhỏ"],
    oemOptions: ["Tùy chỉnh đế quạt", "In ấn nhận diện thương hiệu"]
  },
  {
    id: 39,
    name: "Quạt cây Livotec S-400",
    model: "S-400",
    category: "Quạt cây",
    displayPrice: "2.420.000 ₫",
    price: 2420000,
    link: "https://homichi.com/quat-cay-livotec-s-400/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-400-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-400-1.png.webp",
    specs: { power: "45W", technology: "3 tốc độ gió + hẹn giờ 8 tiếng" },
    features: ["Remote điều khiển từ xa", "Góc quay 85° làm mát diện rộng"],
    oemOptions: ["Màu sắc theo yêu cầu", "Tiêu chuẩn kiểm nghiệm RoHS"]
  },
  {
    id: 40,
    name: "Quạt cây Livotec S-300",
    model: "S-300",
    category: "Quạt cây",
    displayPrice: "1.490.000 ₫",
    price: 1490000,
    link: "https://homichi.com/quat-cay-livotec-s-300/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-300-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-300-1.png.webp",
    specs: { power: "45W", dimensions: "Sải cánh 40cm" },
    features: ["Thiết kế tối giản", "Dễ dàng tháo lắp vệ sinh"],
    oemOptions: ["OEM bao bì nhãn mác riêng"]
  },
  {
    id: 41,
    name: "Quạt cây Livotec S-150B",
    model: "S-150B",
    category: "Quạt cây",
    displayPrice: "1.050.000 ₫",
    price: 1050000,
    link: "https://homichi.com/quat-cay-livotec-s-150b/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-150b-1.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-150b-1.png.webp",
    specs: { power: "40W", dimensions: "Sải cánh 35cm" },
    features: ["Độ bền bỉ cao", "Tiết kiệm không gian"],
    oemOptions: ["Cung cấp số lượng lớn cho dự án"]
  },
  {
    id: 42,
    name: "Quạt cây Livotec S-200",
    model: "S-200",
    category: "Quạt cây",
    displayPrice: "1.650.000 ₫",
    price: 1650000,
    link: "https://homichi.com/quat-cay-livotec-s-200/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-200-2-2.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-200-2-2.png.webp",
    specs: { power: "42W" },
    features: ["Chạy êm ái, gió đều"],
    oemOptions: ["Gia công ODM theo yêu cầu"]
  },
  {
    id: 43,
    name: "Quạt cây Livotec S-100",
    model: "S-100",
    category: "Quạt cây",
    displayPrice: "1.320.000 ₫",
    price: 1320000,
    link: "https://homichi.com/quat-cay-livotec-s-100/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-100-4.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/quat-cay-livotec-s-100-4.png.webp",
    specs: { power: "40W" },
    features: ["Đơn giản, tinh tế"],
    oemOptions: ["Dịch vụ Private Label"]
  },
  {
    id: 44,
    name: "Điều hòa một chiều Livotec DHV12I Inverter",
    model: "DHV12I",
    category: "Điều hòa",
    displayPrice: "11.540.000 ₫",
    price: 11540000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv12i-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv12i-inverter-thumbnails-18-03.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv12i-inverter-thumbnails-18-03.png.webp",
    specs: {
      power: "Công suất làm lạnh 12.000 BTU (1.5 HP)",
      technology: "Full DC Inverter tiết kiệm điện năng 60%, gas R32 thế hệ mới",
      material: "Dàn tản nhiệt ống đồng cánh nhôm mạ vàng Golden Fin chống ăn mòn muối biển"
    },
    features: ["Làm lạnh nhanh Turbo trong 30 giây", "Bộ lọc khí PM2.5 bảo vệ hô hấp", "Tự làm sạch dàn lạnh i-Clean"],
    oemOptions: ["Tích hợp Module Wifi Smart Life / Tuya", "Gia công vỏ dàn lạnh CMF tinh tế", "Chứng nhận xuất khẩu ASEAN / EU"]
  },
  {
    id: 45,
    name: "Điều hòa một chiều Livotec DHV10.8I Inverter",
    model: "DHV10.8I",
    category: "Điều hòa",
    displayPrice: "11.190.000 ₫",
    price: 11190000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter-01-06.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv10-8i-inverter-01-06.png.webp",
    specs: {
      power: "Công suất 10.800 BTU (1.2 HP)",
      technology: "Inverter thông minh kiểm soát nhiệt độ ±0.5°C"
    },
    features: ["Vận hành siêu tĩnh âm 22dB", "Chế độ ngủ đêm Eco thông minh"],
    oemOptions: ["Custom logo và phông chữ hiển thị LED", "Tùy biến dải điện áp làm việc"]
  },
  {
    id: 46,
    name: "Điều hòa một chiều Livotec DHV09I Inverter",
    model: "DHV09I",
    category: "Điều hòa",
    displayPrice: "10.390.000 ₫",
    price: 10390000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv09i-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv09i-inverter-thumbnails-18-03.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/08/dieu-hoa-mot-chieu-livotec-dhv09i-inverter-thumbnails-18-03.png.webp",
    specs: {
      power: "Công suất 9.000 BTU (1.0 HP)",
      technology: "Động cơ Inverter biến tần kép",
      dimensions: "Dàn lạnh 790 x 275 x 195 mm"
    },
    features: ["Phù hợp phòng ngủ diện tích < 15m²", "Cảm biến I-Feel điều chỉnh nhiệt theo vị trí remote"],
    oemOptions: ["Sản xuất ODM theo tiêu chuẩn nhãn năng lượng", "Bao bì chịu lực xuất khẩu đường biển"]
  },
  {
    id: 47,
    name: "Điều hòa một chiều Livotec DHV12J Inverter",
    model: "DHV12J",
    category: "Điều hòa",
    displayPrice: "11.990.000 ₫",
    price: 11990000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv12j-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1.webp",
    specs: { power: "12.000 BTU cao cấp" },
    features: ["Cửa gió 4 chiều tự động", "Bảo vệ điện áp thấp"],
    oemOptions: ["Tùy chỉnh tính năng Smart IoT", "Sản xuất Private Label"]
  },
  {
    id: 48,
    name: "Điều hòa một chiều Livotec DHV10.8J Inverter",
    model: "DHV10.8J",
    category: "Điều hòa",
    displayPrice: "11.590.000 ₫",
    price: 11590000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter-01-06.png-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv10-8j-inverter-01-06.png.webp",
    specs: { power: "10.800 BTU cao cấp" },
    features: ["Độ bền máy nén 10 năm", "Làm lạnh êm ái"],
    oemOptions: ["Chứng nhận kiểm định CE"]
  },
  {
    id: 49,
    name: "Điều hòa một chiều Livotec DHV09J Inverter",
    model: "DHV09J",
    category: "Điều hòa",
    displayPrice: "10.790.000 ₫",
    price: 10790000,
    link: "https://homichi.com/dieu-hoa-mot-chieu-livotec-dhv09j-inverter/",
    thumbnail: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1-300x300.webp",
    originalImage: "https://homichi.com/wp-content/uploads/2026/07/dieu-hoa-mot-chieu-livotec-dhv09j-inverter-thubnails-18-03.png-1.webp",
    specs: { power: "9.000 BTU Inverter" },
    features: ["Tiết kiệm điện năng vượt trội", "Khử mùi kháng khuẩn"],
    oemOptions: ["Dây chuyền OEM quy mô công nghiệp"]
  }
];
