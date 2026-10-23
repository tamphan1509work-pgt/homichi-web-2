import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PageHero, pageAsset } from '../components/PageHero';
import { FAQ_LIST } from '../data/companyInfo';

interface ServicesViewProps {
  onOpenRfq: (category?: string, model?: string) => void;
  onOpenProfile: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenRfq,
  onOpenProfile
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const SERVICE_MODELS = [
    {
      name: 'ODM',
      title: 'Thiết kế & sản xuất trọn gói',
      desc: 'Homichi phát triển sản phẩm từ ý tưởng: kiểu dáng, bo mạch, khuôn mẫu đến kiểm định và sản xuất hàng loạt.',
      image: 'pages/qc-inspection.webp',
      alt: 'Kỹ sư Homichi đo kiểm chi tiết sản phẩm',
    },
    {
      name: 'OEM',
      title: 'Gia công theo bản vẽ của bạn',
      desc: 'Sản xuất chính xác theo thiết kế và thông số kỹ thuật của đối tác, khuôn mẫu thuộc quyền sở hữu của khách hàng.',
      image: 'pages/factory-press.webp',
      alt: 'Dây chuyền gia công cơ khí tại nhà máy',
    },
    {
      name: 'PRIVATE LABEL',
      title: 'Nhãn riêng trên mẫu sẵn có',
      desc: 'Ra mắt nhanh với logo, màu sắc CMF và bao bì mang nhận diện thương hiệu riêng trên các mẫu đã kiểm chứng.',
      image: 'lifestyle/phong-bep.webp',
      alt: 'Nồi chiên không dầu mang thương hiệu riêng trong căn bếp gia đình',
    },
  ];

  const COMPARISON = [
    {
      feature: 'Phạm vi thiết kế & Kiểu dáng',
      odm: 'Homichi thiết kế từ đầu (2D/3D & Bo mạch)',
      oem: 'Khách hàng cung cấp bản vẽ hoàn chỉnh',
      privateLabel: 'Sử dụng khuôn mẫu sẵn có của Homichi'
    },
    {
      feature: 'Quyền sở hữu khuôn mẫu (Tooling)',
      odm: 'Khuôn độc quyền thuộc về khách hàng',
      oem: 'Khuôn do khách hàng sở hữu hoặc gửi sang',
      privateLabel: 'Khuôn dùng chung tiêu chuẩn Homichi'
    },
    {
      feature: 'Thời gian hoàn thiện mẫu thử (T1)',
      odm: '20 - 30 ngày làm việc',
      oem: '15 - 20 ngày làm việc',
      privateLabel: '5 - 7 ngày (mẫu có sẵn)'
    },
    {
      feature: 'Số lượng đặt hàng tối thiểu (MOQ)',
      odm: '1.000 - 3.000 chiếc / mã',
      oem: '1.000 - 2.000 chiếc / mã',
      privateLabel: '200 - 500 chiếc / mã'
    },
    {
      feature: 'Đăng kiểm chứng nhận (CE/CB/CR)',
      odm: 'Homichi hỗ trợ trọn gói A-Z',
      oem: 'Hỗ trợ mẫu đo kiểm & Hồ sơ kỹ thuật',
      privateLabel: 'Đã có sẵn chứng nhận theo dòng máy'
    },
    {
      feature: 'Tùy biến nhận diện (CMF & Logo)',
      odm: 'Tự do hoàn toàn (Màu, chất liệu, logo)',
      oem: 'Theo tiêu chuẩn bản vẽ của khách',
      privateLabel: 'In logo, đổi màu sơn vỏ & bao bì'
    }
  ];

  const MOQ_TABLE = [
    { cat: 'Bếp từ đôi Dual Inverter', moqPrivate: '200 chiếc', moqOem: '1.000 chiếc', leadTime: '25 - 30 ngày', foc: '1.5% linh kiện' },
    { cat: 'Máy hút bụi không dây BLDC', moqPrivate: '300 chiếc', moqOem: '1.500 chiếc', leadTime: '30 - 35 ngày', foc: '2.0% linh kiện' },
    { cat: 'Quạt điều hòa làm mát không khí', moqPrivate: '200 chiếc', moqOem: '1.000 chiếc', leadTime: '20 - 25 ngày', foc: '1.5% linh kiện' },
    { cat: 'Máy sưởi gốm PTC Ceramic', moqPrivate: '300 chiếc', moqOem: '1.500 chiếc', leadTime: '25 - 30 ngày', foc: '1.5% linh kiện' },
    { cat: 'Máy hút ẩm thông minh', moqPrivate: '150 chiếc', moqOem: '800 chiếc', leadTime: '30 - 35 ngày', foc: '2.0% linh kiện' },
    { cat: 'Bình nước nóng 15L - 30L', moqPrivate: '200 chiếc', moqOem: '1.000 chiếc', leadTime: '20 - 25 ngày', foc: '1.5% linh kiện' },
    { cat: 'Quạt cây Inverter tĩnh âm', moqPrivate: '500 chiếc', moqOem: '2.000 chiếc', leadTime: '20 - 25 ngày', foc: '1.5% linh kiện' },
    { cat: 'Điều hòa một chiều Inverter', moqPrivate: '100 bộ', moqOem: '500 bộ', leadTime: '35 - 40 ngày', foc: '2.0% linh kiện' }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-20 sm:space-y-28">
      
      {/* 1. Page Header */}
      <PageHero
        eyebrow="DỊCH VỤ SẢN XUẤT B2B"
        title="Giải pháp ODM / OEM & Private Label"
        accent="toàn diện"
        description="Chúng tôi cung cấp năng lực sản xuất trọn vẹn từ bản vẽ ý tưởng đến kho thành phẩm. Linh hoạt thích ứng theo từng giai đoạn phát triển sản phẩm của thương hiệu."
        image="pages/production-line.webp"
        imagePosition="object-center"
      />

      {/* 2. Detailed Matrix Comparison */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
            SO SÁNH MÔ HÌNH HỢP TÁC
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f172a]">
            Lựa chọn phương án gia công tối ưu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_MODELS.map((model) => (
            <div key={model.name} className="group rounded-[24px] overflow-hidden bg-white border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pageAsset(model.image)}
                  alt={model.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md font-mono text-[11px] font-bold text-[#0062d2]">
                  {model.name}
                </span>
              </div>
              <div className="p-6 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#0f172a]">{model.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[24px] bg-white border border-[#e2e8f0] overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                <th className="p-4 sm:p-5 font-serif font-bold text-sm text-[#0f172a] w-1/4">Tiêu chí đánh giá</th>
                <th className="p-4 sm:p-5 font-serif font-bold text-sm text-[#0062d2] w-1/4">ODM (Trọn gói)</th>
                <th className="p-4 sm:p-5 font-serif font-bold text-sm text-[#0f172a] w-1/4">OEM (Theo bản vẽ)</th>
                <th className="p-4 sm:p-5 font-serif font-bold text-sm text-[#64748b] w-1/4">Private Label (Nhãn riêng)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#0f172a]">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-[#334155] font-medium">{row.odm}</td>
                  <td className="p-4 sm:p-5 text-[#64748b]">{row.oem}</td>
                  <td className="p-4 sm:p-5 text-[#64748b]">{row.privateLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. MOQ & Commercial Terms Table */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
              ĐIỀU KIỆN THƯƠNG MẠI
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f172a]">
              Bảng quy định MOQ & Thời gian giao hàng
            </h2>
          </div>
          <span className="text-xs text-[#64748b]">
            * Số lượng có thể điều chỉnh linh hoạt theo thỏa thuận hợp đồng khung
          </span>
        </div>

        <div className="rounded-[24px] bg-white border border-[#e2e8f0] overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f8fafc]">
                <th className="p-4 sm:p-5 font-serif font-bold text-[#0f172a]">Ngành hàng thiết bị</th>
                <th className="p-4 sm:p-5 font-medium text-[#64748b]">MOQ Private Label</th>
                <th className="p-4 sm:p-5 font-medium text-[#64748b]">MOQ Khuôn OEM mới</th>
                <th className="p-4 sm:p-5 font-medium text-[#64748b]">Lead Time giao hàng</th>
                <th className="p-4 sm:p-5 font-medium text-[#0062d2]">Linh kiện bảo hành FOC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] font-mono">
              {MOQ_TABLE.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-sans font-semibold text-[#0f172a]">{item.cat}</td>
                  <td className="p-4 sm:p-5 text-[#334155]">{item.moqPrivate}</td>
                  <td className="p-4 sm:p-5 text-[#334155]">{item.moqOem}</td>
                  <td className="p-4 sm:p-5 text-[#64748b]">{item.leadTime}</td>
                  <td className="p-4 sm:p-5 text-[#0062d2] font-semibold">{item.foc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="space-y-8">
        <div className="max-w-xl">
          <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block mb-2">
            HỖ TRỢ & GIẢI ĐÁP
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#0f172a]">
            Câu hỏi thường gặp của đối tác B2B
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-[20px] bg-white border border-[#e2e8f0] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-serif font-bold text-base text-[#0f172a] pr-4">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0062d2] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#94a3b8] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#e2e8f0] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Bottom Lead Trigger */}
      <div className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#0062d2]/40 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <img
          src={pageAsset('pages/retail-partner.webp')}
          alt="Chuyên viên Homichi tư vấn đối tác"
          loading="lazy"
          className="w-24 h-24 rounded-full object-cover border-4 border-[#eff6ff] shadow-md shrink-0"
        />
        <div className="space-y-1 sm:flex-1">
          <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
            Cần phương án báo giá theo yêu cầu đặc thù?
          </h3>
          <p className="text-xs text-[#64748b]">
            Gửi bản vẽ hoặc yêu cầu tính năng cụ thể để chuyên gia Homichi lập bảng dự toán kỹ thuật chi tiết.
          </p>
        </div>
        <button
          onClick={() => onOpenRfq()}
          className="px-7 py-3 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          Yêu cầu báo giá ngay
        </button>
      </div>

    </div>
  );
};
