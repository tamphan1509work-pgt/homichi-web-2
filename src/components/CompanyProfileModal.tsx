import React, { useState } from 'react';
import { X, Download, ShieldCheck, Factory, Cpu, Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const content = `========================================================
HOMICHI SMART LIVING APPLIANCES — CORPORATE PROFILE 2026
Original Design & Equipment Manufacturer (ODM / OEM)
========================================================

1. GIỚI THIỆU TỔNG QUAN
- Tên công ty: Công ty Cổ phần Công nghệ & Sản xuất Homichi
- Lĩnh vực hoạt động: Nghiên cứu, thiết kế và sản xuất đồ gia dụng thông minh (Bếp từ, Quạt điều hòa, Máy hút bụi, Máy sưởi gốm, Máy hút ẩm, Bình nước nóng, Điều hòa Inverter).
- Năng lực cốt lõi: Tự chủ khuôn mẫu, dây chuyền SMT tự động, phòng Lab đo kiểm chất lượng đạt chuẩn quốc tế.

2. CƠ SỞ VẬT CHẤT & THÔNG SỐ SẢN XUẤT
- Tổng diện tích nhà máy: 50.000 m²
- Dây chuyền SMT & Lắp ráp: 08 dây chuyền tự động hóa cao
- Công suất xuất xưởng: 1.200.000 sản phẩm / năm
- Tỷ lệ lỗi kiểm thử xuất xưởng: < 0.18%
- Hệ thống quản lý: ERP SAP S/4HANA & MES Production Tracking

3. CHỨNG CHỈ & TIÊU CHUẨN QUỐC TẾ
- ISO 9001:2015 (Chứng nhận bởi SGS)
- CE Marking & CB Scheme (IEC 60335-1 / IEC 60335-2-6 bởi TÜV Rheinland)
- RoHS 2.0 Directive 2011/65/EU (Bureau Veritas)
- QCVN 4:2009/BKHCN (Quatest)

4. MÔ HÌNH HỢP TÁC B2B
- ODM: Hỗ trợ từ khâu định vị thị trường, thiết kế kiểu dáng công nghiệp, bo mạch IoT, khuôn ép nhựa, thử nghiệm đến đăng kiểm.
- OEM: Gia công chính xác theo hồ sơ kỹ thuật và bản vẽ của khách hàng.
- Private Label: Tùy biến nhanh logo, bao bì, màu sắc CMF cho các mẫu sản phẩm sẵn có.

5. LIÊN HỆ PHÒNG HỢP TÁC B2B
- Hotline: +84 (0) 24 3888 6688
- Email: b2b@homichi.com
- Trụ sở: Tòa nhà Homichi Innovation, Cụm Công nghiệp Công nghệ cao
========================================================
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `HOMICHI-Company-Profile-2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#e2e8f0] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0062d2]" />
            <h3 className="font-serif text-lg font-bold text-[#0f172a]">
              Hồ sơ năng lực Homichi 2026 (Company Profile)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Hero Summary */}
          <div className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
            <span className="font-mono text-xs text-[#0062d2] uppercase tracking-wider font-semibold">
              Corporate Overview & Manufacturing Capabilities
            </span>
            <h4 className="font-serif text-2xl text-[#0f172a] font-semibold leading-snug">
              Kiến tạo thiết bị gia dụng thông minh với chuẩn mực chế tác hàng đầu
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tài liệu tổng hợp năng lực hệ sinh thái nhà máy, bằng sáng chế giải pháp nhiệt điện, danh mục thiết bị tiêu biểu và quy trình kiểm thử khép kín đạt tiêu chuẩn Châu Âu.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="font-serif text-2xl font-bold text-[#0f172a]">50.000m²</div>
              <div className="text-[11px] text-[#64748b] mt-1">Diện tích nhà máy</div>
            </div>
            <div className="p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="font-serif text-2xl font-bold text-[#0f172a]">08</div>
              <div className="text-[11px] text-[#64748b] mt-1">Dây chuyền SMT tự động</div>
            </div>
            <div className="p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="font-serif text-2xl font-bold text-[#0f172a]">1.2 Triệu</div>
              <div className="text-[11px] text-[#64748b] mt-1">Sản phẩm/Năm</div>
            </div>
            <div className="p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="font-serif text-2xl font-bold text-[#0062d2]">&lt; 0.18%</div>
              <div className="text-[11px] text-[#64748b] mt-1">Tỷ lệ lỗi thực tế</div>
            </div>
          </div>

          {/* Highlighted sections preview */}
          <div className="space-y-3 text-xs text-[#333333]">
            <div className="font-serif font-semibold text-sm text-[#0f172a]">Nội dung tài liệu bao gồm:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2 p-3 rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0]">
                <CheckCircle2 className="w-4 h-4 text-[#0062d2] shrink-0" />
                <span>Sơ đồ bố trí mặt bằng nhà máy & Dây chuyền SMT</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0]">
                <CheckCircle2 className="w-4 h-4 text-[#0062d2] shrink-0" />
                <span>Bản sao chứng nhận ISO 9001, CE, CB, RoHS 2.0</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0]">
                <CheckCircle2 className="w-4 h-4 text-[#0062d2] shrink-0" />
                <span>Bảng phân tích MOQ & Chi phí làm khuôn ODM</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0]">
                <CheckCircle2 className="w-4 h-4 text-[#0062d2] shrink-0" />
                <span>Danh mục linh kiện dự phòng & Cam kết bảo hành FOC</span>
              </div>
            </div>
          </div>

          {/* Download Form */}
          <div className="pt-2">
            {!downloaded ? (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Nhập email nhận bản mềm tài liệu..."
                  className="flex-1 px-4 py-3 rounded-[9999px] border border-[#cbd5e1] bg-white text-xs text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải hồ sơ năng lực (.txt / PDF)</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-[16px] bg-blue-50 border border-[#0062d2]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#0f172a]">
                  <CheckCircle2 className="w-4 h-4 text-[#0062d2]" />
                  <span>Tài liệu đã được tải xuống thiết bị của bạn.</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenRfq();
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#0062d2] hover:underline cursor-pointer"
                >
                  <span>Chuyển sang yêu cầu báo giá</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
