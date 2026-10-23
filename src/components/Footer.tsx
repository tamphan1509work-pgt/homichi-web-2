import React from 'react';
import { Mail, Phone, MapPin, Download, FileText, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenRfq: (category?: string) => void;
  onOpenProfile: () => void;
  onOpenTour: () => void;
  onOpenCerts: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentTab,
  onOpenRfq,
  onOpenProfile,
  onOpenTour,
  onOpenCerts
}) => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Top brand promise block with official Logo image */}
        <div className="pb-12 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-3">
            <div className="bg-white px-5 py-3.5 rounded-xl w-fit inline-block shadow-lg shadow-black/20">
              <img
                src="/assets/aistudio/homichi_logo_transparent.png"
                alt="Homichi Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tổ hợp sản xuất và thiết kế ODM/OEM thiết bị gia dụng thông minh với ngôn ngữ tối giản, độ tin cậy cơ học cao và công nghệ tiết kiệm năng lượng tiên tiến.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-3 rounded-[40px] bg-[#0062d2] hover:bg-[#004fb0] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Gửi yêu cầu báo giá (RFQ)
            </button>
            <button
              onClick={onOpenProfile}
              className="px-5 py-3 rounded-[40px] bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-medium transition-all cursor-pointer whitespace-nowrap"
            >
              Tải hồ sơ năng lực PDF
            </button>
          </div>
        </div>

        {/* 5-Column Sitemap Navigation Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          
          {/* Col 1: Về Homichi */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-white text-sm">Về Homichi</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Giới thiệu Homichi
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hành trình phát triển
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hệ sinh thái & Thương hiệu
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Trách nhiệm xã hội & ESG
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Văn hóa & Con người
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Dịch vụ ODM/OEM */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-white text-sm">Dịch vụ ODM/OEM</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  ODM – Thiết kế trọn gói
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  OEM – Gia công theo bản vẽ
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Private Label / White Label
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Quy trình hợp tác 6 bước
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  MOQ & Điều kiện hợp tác
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Câu hỏi thường gặp B2B
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Năng lực sản xuất */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-white text-sm">Năng lực sản xuất</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('capabilities')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nhà máy 50.000m² & SMT
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('capabilities')} className="hover:text-white transition-colors cursor-pointer text-left">
                  R&D & Thiết kế khuôn mẫu
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('capabilities')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Kiểm soát chất lượng QC/QA
                </button>
              </li>
              <li>
                <button onClick={onOpenCerts} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1">
                  <span>Chứng nhận ISO / CE / RoHS</span>
                  <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
                </button>
              </li>
              <li>
                <button onClick={onOpenTour} className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1">
                  <span>Tham quan nhà máy 360°</span>
                  <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Ngành hàng sản phẩm */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-white text-sm">Danh mục sản phẩm</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Bếp từ đôi Dual Inverter
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Máy hút bụi không dây BLDC
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Quạt điều hòa & Quạt đứng
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Máy sưởi gốm PTC Ceramic
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Máy hút ẩm thông minh
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Bình nước nóng 15L - 30L
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Điều hòa Inverter thế hệ mới
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Liên hệ B2B */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="font-serif font-bold text-white text-sm">Liên hệ hợp tác</div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>Lô CN-08, Cụm Công nghiệp Công nghệ cao, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span className="font-mono text-white">+84 (0) 24 3888 6688</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span className="font-mono text-white">b2b@homichi.com</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="block text-[11px] font-semibold text-white mb-1.5">Giờ làm việc R&D:</span>
              <span className="text-[11px] text-slate-400 block">Thứ 2 – Thứ 7: 08:00 – 17:30 (GMT+7)</span>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© 2026 HOMISCHI Manufacturing Co., Ltd. Tất cả quyền được bảo lưu.</span>
            <span>·</span>
            <span>Chứng nhận ISO 9001:2015</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-white cursor-pointer">Bảo mật thông tin & Cam kết NDA</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Điều khoản hợp tác</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Chính sách chất lượng</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
