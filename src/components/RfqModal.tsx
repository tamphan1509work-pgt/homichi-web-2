import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, ArrowLeft, Send, Download, PhoneCall, Building2, Mail, Phone, FileText } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialModel?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialModel
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [modelType, setModelType] = useState<'ODM' | 'OEM' | 'Private Label'>('ODM');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'Bếp từ');
  const [specificModel, setSpecificModel] = useState(initialModel || '');
  const [quantity, setQuantity] = useState('500 - 1.000 sản phẩm');
  const [targetMarket, setTargetMarket] = useState('Việt Nam');
  const [certifications, setCertifications] = useState<string[]>(['ISO 9001:2015', 'CE / CB']);
  
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [generatedRfqId, setGeneratedRfqId] = useState('');

  if (!isOpen) return null;

  const toggleCert = (cert: string) => {
    setCertifications(prev => 
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `RFQ-2026-HMC-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedRfqId(id);
    setStep(4);
  };

  const handleDownloadConfirmation = () => {
    const text = `HOMISCHI ODM/OEM MANUFACTURING - RFQ RECEIPT
Confirmation Code: ${generatedRfqId}
Date: ${new Date().toLocaleDateString('vi-VN')}
--------------------------------------------------
Company: ${companyName || 'Đối tác B2B'}
Contact: ${contactName}
Email: ${email}
Phone: ${phone}
Model Type: ${modelType}
Category: ${selectedCategory}
Target Model: ${specificModel || 'Theo tư vấn R&D'}
Estimated Quantity: ${quantity}
Target Market: ${targetMarket}
Certifications Required: ${certifications.join(', ')}
Technical Notes: ${notes || 'Tiêu chuẩn Homichi Standard'}
--------------------------------------------------
Status: RECEIVED & ASSIGNED TO B2B ENGINEERING TEAM
Response Time: Within 24 business hours
Support Hotline: +84 (0) 24 3888 6688 | b2b@homichi.com
`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generatedRfqId}-Homichi-RFQ.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#e2e8f0]">
          <div>
            <span className="font-mono text-xs text-[#0062d2] font-semibold tracking-wider uppercase">
              B2B Inquiries & Quotation
            </span>
            <h3 className="font-serif text-xl font-bold text-[#0f172a]">
              {step === 4 ? 'Yêu cầu báo giá thành công' : 'Yêu cầu báo giá & Tư vấn giải pháp (RFQ)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator (for steps 1-3) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#0062d2] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
              <span>Mô hình & Ngành hàng</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#0062d2] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
              <span>Sản lượng & Tiêu chuẩn</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#0062d2] font-semibold' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
              <span>Thông tin đối tác</span>
            </div>
          </div>
        )}

        {/* Body content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {/* STEP 1: Model Type & Category */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2.5">
                  1. Chọn phương thức hợp tác
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'ODM', title: 'ODM', desc: 'Thiết kế & sản xuất trọn gói' },
                    { id: 'OEM', title: 'OEM', desc: 'Gia công theo thiết kế khách' },
                    { id: 'Private Label', title: 'Private Label', desc: 'Gắn thương hiệu lên mẫu sẵn' }
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setModelType(m.id as any)}
                      className={`p-4 text-left rounded-[16px] border transition-all cursor-pointer ${
                        modelType === m.id
                          ? 'bg-blue-50 border-[#0062d2] shadow-sm'
                          : 'bg-white border-[#e2e8f0] hover:border-[#0062d2]/50'
                      }`}
                    >
                      <div className="font-serif font-bold text-sm text-[#0f172a]">{m.title}</div>
                      <div className="text-xs text-[#64748b] mt-1">{m.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2">
                  2. Ngành hàng thiết bị gia dụng quan tâm
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 cursor-pointer shadow-sm"
                >
                  {CATEGORIES.filter(c => c !== 'Tất cả ngành hàng').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2">
                  Mã model tham chiếu (nếu có)
                </label>
                <input
                  type="text"
                  value={specificModel}
                  onChange={(e) => setSpecificModel(e.target.value)}
                  placeholder="Ví dụ: LIO-666V, LV-200, LAC-H66..."
                  className="w-full px-4 py-3 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer"
                >
                  <span>Tiếp tục: Sản lượng & Tiêu chuẩn</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Volume & Requirements */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2.5">
                  1. Số lượng đặt hàng dự kiến (MOQ)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    '200 - 500 sản phẩm (Thử nghiệm)',
                    '500 - 1.000 sản phẩm',
                    '1.000 - 3.000 sản phẩm',
                    'Trên 5.000 sản phẩm (Khuôn độc quyền)'
                  ].map(q => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(q)}
                      className={`p-3 text-left rounded-[14px] border text-xs font-medium transition-all cursor-pointer ${
                        quantity === q
                          ? 'bg-blue-50 border-[#0062d2] text-[#0062d2] font-semibold'
                          : 'bg-white border-[#e2e8f0] text-[#0f172a]'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2">
                  2. Thị trường phân phối mục tiêu
                </label>
                <select
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  className="w-full px-4 py-3 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 cursor-pointer shadow-sm"
                >
                  <option value="Việt Nam">Việt Nam (Thị trường nội địa)</option>
                  <option value="Đông Nam Á (ASEAN)">Đông Nam Á (Thái Lan, Indonesia, Malaysia...)</option>
                  <option value="Châu Âu (EU)">Châu Âu (Đức, Pháp, Hà Lan...)</option>
                  <option value="Bắc Mỹ (USA / Canada)">Bắc Mỹ (Hoa Kỳ & Canada)</option>
                  <option value="Nhật Bản & Hàn Quốc">Nhật Bản & Hàn Quốc</option>
                  <option value="Thị trường khác">Thị trường khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2">
                  3. Yêu cầu chứng nhận & tiêu chuẩn cần có
                </label>
                <div className="flex flex-wrap gap-2">
                  {['ISO 9001:2015', 'CE / CB', 'RoHS 2.0', 'QCVN 4', 'ERP Tiết kiệm điện', 'FCC / UL'].map(cert => {
                    const active = certifications.includes(cert);
                    return (
                      <button
                        key={cert}
                        type="button"
                        onClick={() => toggleCert(cert)}
                        className={`px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                          active
                            ? 'bg-[#0062d2] text-white border-[#0062d2]'
                            : 'bg-white text-[#334155] border-[#e2e8f0] hover:border-[#0062d2]'
                        }`}
                      >
                        {cert}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#64748b] hover:text-[#0f172a] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer"
                >
                  <span>Tiếp tục: Thông tin doanh nghiệp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Company & Contact Information */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#64748b] mb-1">
                    Tên công ty / Thương hiệu *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 text-[#94a3b8]" />
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Công ty CP Thiết bị..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#64748b] mb-1">
                    Người đại diện liên hệ *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Họ và tên..."
                    className="w-full px-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#64748b] mb-1">
                    Email công vụ *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#94a3b8]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#64748b] mb-1">
                    Số điện thoại / Zalo / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#94a3b8]" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+84 90 123 4567"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#64748b] mb-1">
                  Yêu cầu kỹ thuật, CMF, Smart App hoặc thời gian dự kiến
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ghi chú về màu sắc, in logo, thiết kế bao bì hay thời hạn dự kiến ra mắt lô hàng..."
                  className="w-full px-4 py-2.5 rounded-[16px] border border-[#cbd5e1] bg-white text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
                />
              </div>

              <div className="p-3 bg-[#f8fafc] rounded-[12px] border border-[#e2e8f0] text-[11px] text-[#64748b] flex items-center gap-2">
                <span>🔒 Cam kết bảo mật NDA: Mọi dữ liệu kỹ thuật và thiết kế độc quyền đều được bảo vệ nghiêm ngặt.</span>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#64748b] hover:text-[#0f172a] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi yêu cầu báo giá chính thức</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success / Thank You State */}
          {step === 4 && (
            <div className="py-4 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0062d2] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="font-mono text-sm font-bold text-[#0062d2] bg-blue-50 px-3 py-1 rounded-full border border-[#0062d2]/30">
                  Mã RFQ: {generatedRfqId}
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#0f172a] mt-3">
                  Đã tiếp nhận yêu cầu báo giá
                </h4>
                <p className="text-sm text-[#475569] max-w-md mx-auto mt-2 leading-relaxed">
                  Cảm ơn <strong>{contactName || 'Quý đối tác'}</strong> ({companyName || 'Doanh nghiệp'}). Đội ngũ kỹ sư R&D và chuyên viên kinh doanh B2B của Homichi sẽ liên hệ phản hồi bảng báo giá chi tiết và phương án kỹ thuật trong vòng <strong>24 giờ làm việc</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#f8fafc] rounded-[16px] border border-[#e2e8f0] max-w-md mx-auto text-xs text-left text-[#333333] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Mô hình & Ngành:</span>
                  <span className="font-semibold">{modelType} · {selectedCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Quy mô dự kiến:</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Thị trường:</span>
                  <span className="font-semibold">{targetMarket}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadConfirmation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0f172a] bg-slate-50 hover:bg-slate-100 border border-[#e2e8f0] rounded-[40px] cursor-pointer transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[#0062d2]" />
                  <span>Tải phiếu xác nhận RFQ (.txt)</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] cursor-pointer transition-colors shadow-sm"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
