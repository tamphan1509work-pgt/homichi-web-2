import React from 'react';
import { Globe, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { CASE_STUDIES } from '../data/companyInfo';

interface ProjectsViewProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onOpenRfq,
  onOpenProfile
}) => {
  const MARKETS = [
    { country: 'Việt Nam (Thị trường nội địa)', share: '45% Sản lượng', desc: 'Cung cấp OEM cho các tập đoàn bán lẻ điện máy và siêu thị lớn trên cả nước.' },
    { country: 'Thái Lan & Đông Nam Á', share: '25% Sản lượng', desc: 'Xuất khẩu bếp từ đôi và quạt điều hòa hơi nước công suất lớn.' },
    { country: 'Hàn Quốc & Nhật Bản', share: '20% Sản lượng', desc: 'Gia công linh kiện bo mạch SMT và máy hút bụi không dây theo chuẩn CE/RoHS.' },
    { country: 'EU & Trung Đông', share: '10% Sản lượng', desc: 'Bình nước nóng gián tiếp men Titan và máy sưởi gốm PTC cao cấp.' }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block">
          DỰ ÁN & ĐỐI TÁC CHIẾN LƯỢC
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0f172a] font-normal leading-tight">
          Hợp tác cùng các thương hiệu gia dụng{' '}
          <em className="font-light italic text-[#0062d2]">hàng đầu</em>
        </h1>
        <p className="text-base text-[#475569] leading-relaxed">
          Sản phẩm do Homichi sản xuất hiện diện tại hơn 10 quốc gia, khẳng định vị thế sản xuất chất lượng cao của nền công nghiệp gia dụng Việt Nam.
        </p>
      </div>

      {/* 2. Global Export Markets Grid */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-8">
        <div>
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase block mb-1">
            THỊ TRƯỜNG PHÂN PHỐI
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f172a]">
            Mạng lưới đối tác thương mại quốc tế
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETS.map(m => (
            <div key={m.country} className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0062d2]" />
                <h3 className="font-serif font-bold text-base text-[#0f172a]">{m.country}</h3>
              </div>
              <span className="font-mono text-xs font-semibold text-[#0062d2] block bg-blue-50 px-2.5 py-1 rounded-full border border-[#0062d2]/30 w-fit">
                {m.share}
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. In-Depth Case Studies */}
      <div className="space-y-12">
        <div>
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
            NGHIÊN CỨU ĐIỂN HÌNH (CASE STUDIES)
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0f172a]">
            Giải pháp thực tế mang lại giá trị định lượng
          </h2>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map(cs => (
            <div
              key={cs.id}
              className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e2e8f0] pb-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase">
                    Ngành hàng: {cs.clientIndustry}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0f172a] mt-1">
                    {cs.title}
                  </h3>
                </div>
                <div className="text-right text-xs text-[#64748b] font-mono shrink-0">
                  <span>Thị trường: {cs.market}</span>
                  <span className="block text-[11px] text-[#94a3b8]">Giai đoạn: {cs.period}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#334155]">
                <div className="space-y-2 p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="font-serif font-bold text-sm text-[#0f172a]">Bài toán thách thức của đối tác:</h4>
                  <p className="text-[#475569] leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="space-y-2 p-5 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="font-serif font-bold text-sm text-[#0f172a]">Giải pháp kỹ thuật của Homichi:</h4>
                  <p className="text-[#475569] leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cs.results.map((res, i) => (
                  <div key={i} className="p-4 rounded-[14px] bg-[#f8fafc] border border-[#e2e8f0] text-center">
                    <span className="font-serif text-2xl font-bold text-[#0062d2] block">
                      {res.metric}
                    </span>
                    <span className="text-xs text-[#64748b] mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
            Bạn muốn xây dựng dòng sản phẩm gia dụng riêng?
          </h3>
          <p className="text-xs text-[#64748b] mt-1">
            Liên hệ ngay với bộ phận chiến lược Homichi để thảo luận chi tiết về hợp đồng bảo mật NDA và lộ trình mẫu thử nghiệm.
          </p>
        </div>
        <button
          onClick={onOpenRfq}
          className="px-6 py-3 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap"
        >
          Yêu cầu báo giá dự án
        </button>
      </div>

    </div>
  );
};
