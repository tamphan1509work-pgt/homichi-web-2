import React from 'react';
import { Globe, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { PageHero, pageAsset } from '../components/PageHero';
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

  // Campaign photo for the cooktop case; 3D product renders on a dark panel for the others
  const CASE_VISUALS: Record<string, { image: string; render?: boolean; position?: string }> = {
    'case-1': { image: 'banners/hero-bep-tu-booster.webp', position: 'object-left' },
    'case-2': { image: 'products-3d/may-hut-am.webp', render: true },
    'case-3': { image: 'products-3d/quat-cay.webp', render: true },
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <PageHero
        eyebrow="DỰ ÁN & ĐỐI TÁC CHIẾN LƯỢC"
        title="Hợp tác cùng các thương hiệu gia dụng"
        accent="hàng đầu"
        description="Sản phẩm do Homichi sản xuất hiện diện tại hơn 10 quốc gia, khẳng định vị thế sản xuất chất lượng cao của nền công nghiệp gia dụng Việt Nam."
        image="pages/cooking.webp"
        imagePosition="object-center"
      />

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

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
        <div className="relative rounded-[20px] overflow-hidden min-h-[260px]">
          <img
            src={pageAsset('pages/logistics-hub.webp')}
            alt="Trung tâm logistics và kho vận xuất khẩu"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/85 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <div className="font-serif text-3xl font-bold">10+</div>
            <div className="text-xs text-white/80">quốc gia & vùng lãnh thổ</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              className="rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr]"
            >
              <div className={`relative min-h-[260px] ${CASE_VISUALS[cs.id].render ? 'bg-gradient-to-br from-[#0b1324] to-[#0f2a52] flex items-center justify-center' : ''}`}>
                <img
                  src={pageAsset(CASE_VISUALS[cs.id].image)}
                  alt={cs.title}
                  loading="lazy"
                  className={CASE_VISUALS[cs.id].render
                    ? 'relative max-h-[240px] max-w-[70%] object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.55)]'
                    : `absolute inset-0 w-full h-full object-cover ${CASE_VISUALS[cs.id].position ?? ''}`}
                />
              </div>
              <div className="p-8 sm:p-10 space-y-6">
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
