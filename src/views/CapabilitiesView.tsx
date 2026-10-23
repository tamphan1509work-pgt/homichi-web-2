import React from 'react';
import { Factory, Cpu, ShieldCheck, Award, Video, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/companyInfo';

interface CapabilitiesViewProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
  onOpenTour: () => void;
  onOpenCerts: () => void;
}

export const CapabilitiesView: React.FC<CapabilitiesViewProps> = ({
  onOpenRfq,
  onOpenProfile,
  onOpenTour,
  onOpenCerts
}) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block">
          NĂNG LỰC SẢN XUẤT & KIỂM CHUẨN
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0f172a] font-normal leading-tight">
          Hệ sinh thái sản xuất thông minh quy mô{' '}
          <em className="font-light italic text-[#0062d2]">50.000m²</em>
        </h1>
        <p className="text-base text-[#475569] leading-relaxed">
          Tích hợp công nghệ chế tác khuôn mẫu chính xác, phân xưởng phòng sạch SMT chuẩn quốc tế và hệ thống kiểm định chất lượng khép kín, sẵn sàng đáp ứng các đơn hàng xuất khẩu quy mô lớn.
        </p>
      </div>

      {/* 2. Interactive Plant Virtual Tour Banner */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-[#0b1324] text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-xl z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              Trải nghiệm thực tế ảo
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            Tham quan nhà máy 360° (Virtual Facility Tour)
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Xem trực tiếp hình ảnh phân xưởng dán chip SMT tự động, phòng thử nghiệm âm học không phản xạ và dây chuyền lắp ráp phòng sạch từ xa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full sm:w-auto">
          <button
            onClick={onOpenTour}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[40px] bg-[#0062d2] hover:bg-[#004fb0] text-white text-xs font-semibold shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <Video className="w-4 h-4" />
            <span>Mở tour tham quan 360°</span>
          </button>
          <button
            onClick={onOpenProfile}
            className="w-full sm:w-auto px-5 py-3.5 rounded-[40px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium transition-all cursor-pointer whitespace-nowrap"
          >
            Tải sơ đồ nhà máy (.PDF)
          </button>
        </div>
      </div>

      {/* 3. 4 Core Capabilities Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Capability 1: SMT */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
              <span className="font-mono text-[#0062d2] font-semibold">01 · PHÂN XƯỞNG SMT TỰ ĐỘNG</span>
              <span className="font-mono text-[11px]">8 DÂY CHUYỀN</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
              Dán linh kiện bề mặt tốc độ cao & kiểm tra quang học 3D AOI
            </h3>
            <p className="text-xs text-[#475569] mt-2 leading-relaxed">
              Trang bị dàn máy JUKI tiên tiến của Nhật Bản với độ chuẩn xác micromet, xử lý các linh kiện chip siêu nhỏ 0201 và vi điều khiển QFN/BGA. Phòng sạch đạt chuẩn Class 100.000 với kiểm soát độ ẩm và chống tĩnh điện ESD 24/7.
            </p>
          </div>

          <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">2.4 Triệu</span>
              <span className="text-[10px] text-[#64748b]">Bo mạch/năm</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">10 Vùng</span>
              <span className="text-[10px] text-[#64748b]">Hàn Reflow Nitơ</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0062d2] block">100%</span>
              <span className="text-[10px] text-[#64748b]">Đo dòng rò ICT</span>
            </div>
          </div>
        </div>

        {/* Capability 2: R&D & Mold Tooling */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
              <span className="font-mono text-[#0062d2] font-semibold">02 · TRUNG TÂM R&D & KHUÔN MẪU</span>
              <span className="font-mono text-[11px]">MAKINO 5 TRỤC</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
              Thiết kế kiểu dáng công nghiệp & Gia công khuôn mẫu chính xác
            </h3>
            <p className="text-xs text-[#475569] mt-2 leading-relaxed">
              Sở hữu phòng lab CAD/CAM với máy phay CNC 5 trục Makino, máy cắt dây đồng hồ SODICK và máy đo quang học 3D Zeiss. Đảm bảo độ khít hoàn hảo của từng khớp nối vỏ máy gia dụng.
            </p>
          </div>

          <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">&lt; 0.02mm</span>
              <span className="text-[10px] text-[#64748b]">Dung sai khuôn</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">20 Ngày</span>
              <span className="text-[10px] text-[#64748b]">Thời gian mẫu T1</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0062d2] block">120 Bộ</span>
              <span className="text-[10px] text-[#64748b]">Khuôn mới/năm</span>
            </div>
          </div>
        </div>

        {/* Capability 3: Acoustic & Reliability Testing */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
              <span className="font-mono text-[#0062d2] font-semibold">03 · PHÒNG THỬ NGHIỆM ĐỘ BỀN</span>
              <span className="font-mono text-[11px]">ANECHOIC CHAMBER</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
              Đo âm học phòng câm & Sốc nhiệt môi trường khắc nghiệt
            </h3>
            <p className="text-xs text-[#475569] mt-2 leading-relaxed">
              Mọi model quạt điều hòa, quạt cây và điều hòa trước khi sản xuất hàng loạt đều được kiểm tra độ ồn 360 độ trong phòng cách âm triệt để. Bếp từ được kiểm tra chịu tải liên tục 2.000 giờ trong buồng nhiệt ẩm 85°C/85%RH.
            </p>
          </div>

          <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">&lt; 28 dB</span>
              <span className="text-[10px] text-[#64748b]">Độ ồn tĩnh âm</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">2.000h</span>
              <span className="text-[10px] text-[#64748b]">Đốt nóng liên tục</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0062d2] block">3.750V</span>
              <span className="text-[10px] text-[#64748b]">Thử nghiệm điện áp</span>
            </div>
          </div>
        </div>

        {/* Capability 4: 3-Tier QC Process */}
        <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
              <span className="font-mono text-[#0062d2] font-semibold">04 · HỆ THỐNG KIỂM SOÁT QC 3 TẦNG</span>
              <span className="font-mono text-[11px]">IQC - IPQC - OQC</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
              Quy trình kiểm soát chất lượng chuẩn ISO 9001:2015
            </h3>
            <p className="text-xs text-[#475569] mt-2 leading-relaxed">
              Kiểm tra nghiêm ngặt nguyên vật liệu đầu vào (IQC), kiểm tra bán thành phẩm từng công đoạn trên băng chuyền (IPQC) và kiểm tra 100% chức năng điện tử trước khi đóng gói niêm phong (OQC).
            </p>
          </div>

          <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">&lt; 0.18%</span>
              <span className="text-[10px] text-[#64748b]">Tỷ lệ bảo hành thực tế</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0f172a] block">100%</span>
              <span className="text-[10px] text-[#64748b]">Test an toàn điện</span>
            </div>
            <div>
              <span className="font-mono font-bold text-[#0062d2] block">10 Năm</span>
              <span className="text-[10px] text-[#64748b]">Lưu trữ dữ liệu lô</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Global Certifications Grid */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
              CHỨNG NHẬN CHẤT LƯỢNG
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0f172a]">
              Tiêu chuẩn kỹ thuật đã được công nhận
            </h2>
          </div>
          <button
            onClick={onOpenCerts}
            className="text-xs font-semibold text-[#0062d2] hover:underline cursor-pointer"
          >
            Xem chi tiết chứng thư bản quyền & tiêu chuẩn →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map(cert => (
            <div
              key={cert.id}
              onClick={onOpenCerts}
              className="p-6 rounded-[20px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 transition-all cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-md"
            >
              <div>
                <span className="font-mono text-[10px] text-[#0062d2] uppercase font-semibold block mb-1">
                  {cert.issuer}
                </span>
                <h4 className="font-serif text-xl font-bold text-[#0f172a]">
                  {cert.name}
                </h4>
                <p className="text-xs text-[#64748b] mt-2 line-clamp-3 leading-relaxed">
                  {cert.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-[11px] font-mono text-[#0f172a]">
                <span>Mã: {cert.code}</span>
                <span className="text-[#0062d2]">Xem →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA Strip */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
            Cần thẩm định năng lực nhà máy cho dự án lớn?
          </h3>
          <p className="text-xs text-[#64748b] mt-1">
            Homichi sẵn sàng cung cấp trọn bộ hồ sơ năng lực thiết bị và tiếp đón phái đoàn đánh giá nhà máy (Factory Audit).
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTour}
            className="px-5 py-3 text-xs font-medium text-[#0f172a] bg-slate-50 border border-[#e2e8f0] rounded-[40px] hover:bg-slate-100 transition-all cursor-pointer"
          >
            Đặt lịch Audit nhà máy
          </button>
          <button
            onClick={onOpenRfq}
            className="px-6 py-3 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer"
          >
            Yêu cầu báo giá
          </button>
        </div>
      </div>

    </div>
  );
};
