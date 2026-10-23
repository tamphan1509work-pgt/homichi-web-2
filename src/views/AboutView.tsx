import React from 'react';
import { ShieldCheck, Heart, Leaf, Target, Users, Factory, Award, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
  onOpenTour: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenRfq,
  onOpenProfile,
  onOpenTour
}) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block">
          CÂU CHUYỆN & ĐỊNH VỊ THƯƠNG HIỆU
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0f172a] font-normal leading-tight">
          Kiến tạo sự tinh tế từ{' '}
          <em className="font-light italic text-[#0062d2]">trái tim của công nghệ gia dụng</em>
        </h1>
        <p className="text-base text-[#475569] leading-relaxed">
          Homichi được thành lập với tầm nhìn trở thành trung tâm sản xuất và thiết kế ODM/OEM hàng đầu khu vực, đưa các sản phẩm gia dụng thông minh chuẩn mực cao của Việt Nam vươn ra thị trường toàn cầu.
        </p>
      </div>

      {/* 2. Brand Philosophy */}
      <div className="p-8 sm:p-14 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase">Triết lý thiết kế</span>
          <h2 className="font-serif text-3xl font-bold text-[#0f172a] leading-snug">
            Tối giản trong hình thái, hoàn hảo trong trải nghiệm
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Chúng tôi tin rằng một thiết bị gia dụng hoàn hảo là thiết bị hòa quyện tự nhiên vào không gian sống. Không cầu kỳ phô trương, từng đường cong, từng nút bấm cảm ứng và chất liệu hoàn thiện CMF của Homichi đều được tính toán để mang lại sự tĩnh tại, an tâm và bền bỉ suốt hàng thập kỷ.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
            <Target className="w-5 h-5 text-[#0062d2]" />
            <h4 className="font-serif font-bold text-sm text-[#0f172a]">Độ tin cậy tuyệt đối</h4>
            <p className="text-[11px] text-[#64748b]">Kiểm chuẩn 100% xuất xưởng không dung sai lỗi.</p>
          </div>
          <div className="p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
            <Leaf className="w-5 h-5 text-[#0062d2]" />
            <h4 className="font-serif font-bold text-sm text-[#0f172a]">Bền vững & ESG</h4>
            <p className="text-[11px] text-[#64748b]">100% tuân thủ chỉ thị RoHS không kim loại nặng độc hại.</p>
          </div>
          <div className="p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
            <Users className="w-5 h-5 text-[#0062d2]" />
            <h4 className="font-serif font-bold text-sm text-[#0f172a]">Đồng hành chiến lược</h4>
            <p className="text-[11px] text-[#64748b]">Ký kết bảo mật NDA và chia sẻ bản quyền minh bạch.</p>
          </div>
          <div className="p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
            <Factory className="w-5 h-5 text-[#0062d2]" />
            <h4 className="font-serif font-bold text-sm text-[#0f172a]">Tự chủ công nghệ</h4>
            <p className="text-[11px] text-[#64748b]">Khép kín từ khâu R&D khuôn mẫu đến lập trình vi mạch.</p>
          </div>
        </div>
      </div>

      {/* 3. Milestones Timeline (2018 - 2026) */}
      <div className="space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
            HÀNH TRÌNH PHÁT TRIỂN
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0f172a]">
            Các cột mốc định hình tầm vóc Homichi
          </h2>
        </div>

        <div className="border-l-2 border-[#e2e8f0] ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0062d2] border-2 border-white shadow"></span>
            <span className="font-mono text-xs font-bold text-[#0062d2]">2018</span>
            <h3 className="font-serif text-lg font-bold text-[#0f172a] mt-0.5">Khởi tạo trung tâm R&D khuôn mẫu gia dụng</h3>
            <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
              Thành lập đội ngũ 25 kỹ sư cơ khí và điện tử, tập trung nghiên cứu giải pháp nhiệt biến tần cho bếp từ và quạt làm mát.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white shadow"></span>
            <span className="font-mono text-xs font-bold text-[#64748b]">2021</span>
            <h3 className="font-serif text-lg font-bold text-[#0f172a] mt-0.5">Đạt chứng nhận ISO 9001:2015 & Mở rộng phân xưởng SMT</h3>
            <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
              Đưa vào vận hành 4 dây chuyền SMT tự động, nâng công suất xuất xưởng lên 500.000 sản phẩm/năm, chính thức triển khai dịch vụ OEM cho các đối tác chuỗi lớn.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white shadow"></span>
            <span className="font-mono text-xs font-bold text-[#64748b]">2023</span>
            <h3 className="font-serif text-lg font-bold text-[#0f172a] mt-0.5">Đạt chuẩn CE/CB Châu Âu & Xuất khẩu sang thị trường ASEAN</h3>
            <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
              Hoàn thành các bài kiểm thử khắt khe của TÜV Rheinland, xuất khẩu lô hàng bếp từ Dual Inverter đầu tiên sang Thái Lan và Malaysia.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0062d2] border-2 border-white shadow"></span>
            <span className="font-mono text-xs font-bold text-[#0062d2]">2026</span>
            <h3 className="font-serif text-lg font-bold text-[#0f172a] mt-0.5">Khánh thành tổ hợp nhà máy 50.000m² & Nền tảng Smart Home IoT</h3>
            <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
              Nâng quy mô lên 8 dây chuyền tự động hóa, cung cấp trọn gói giải pháp ODM thiết bị kết nối IoT thông minh cho các thương hiệu quốc tế.
            </p>
          </div>

        </div>
      </div>

      {/* 4. ESG & Sustainable Commitment */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-emerald-600" />
          <span className="font-mono text-xs font-semibold uppercase text-emerald-700">
            Trách nhiệm xã hội & Sản xuất xanh (ESG)
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
          Cam kết sản xuất trung hòa carbon và không phát thải độc hại
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl">
          Homichi ứng dụng điện mặt trời áp mái cho 40% nhu cầu năng lượng của nhà máy, hệ thống tuần hoàn nước làm mát khép kín và loại bỏ 100% bao bì xốp khó phân hủy sang mút tổ ong giấy tái chế.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenProfile}
            className="px-6 py-3 text-xs font-semibold text-white bg-[#0062d2] rounded-[40px] shadow-sm hover:bg-[#004fb0] transition-all cursor-pointer"
          >
            Tải báo cáo năng lực & ESG Homichi
          </button>
          <button
            onClick={onOpenTour}
            className="px-6 py-3 text-xs font-medium text-[#0f172a] bg-slate-50 border border-[#e2e8f0] rounded-[40px] hover:bg-slate-100 transition-all cursor-pointer"
          >
            Xem nhà máy thực tế
          </button>
        </div>
      </div>

    </div>
  );
};
