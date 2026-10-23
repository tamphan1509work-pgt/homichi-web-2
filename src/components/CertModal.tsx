import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Building } from 'lucide-react';
import { CERTIFICATIONS } from '../data/companyInfo';

interface CertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#e2e8f0] shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#0062d2]" />
            <h3 className="font-serif text-lg font-bold text-[#0f172a]">
              Chứng chỉ & Tiêu chuẩn Quốc tế Homichi
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of certificates */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div className="p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#475569] leading-relaxed">
            Tất cả dây chuyền gia công và sản phẩm mang thương hiệu Homichi hoặc gia công OEM cho đối tác đều được kiểm định độc lập tại các trung tâm thử nghiệm quốc tế có thẩm quyền (SGS, TÜV Rheinland, Quatest).
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map(cert => (
              <div 
                key={cert.id}
                className="p-5 rounded-[20px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/50 transition-all space-y-3 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#0062d2] tracking-wider uppercase">
                      Mã chứng chỉ: {cert.code}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#0f172a] mt-0.5">
                      {cert.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-slate-100 rounded-full border border-[#e2e8f0] text-[#0f172a] shrink-0 font-semibold">
                    {cert.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#64748b]">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-[#0062d2]" />
                    <span>Cơ quan cấp: <strong className="text-[#0f172a]">{cert.issuer}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0062d2]" />
                    <span>Phạm vi: {cert.scope}</span>
                  </div>
                </div>

                <p className="text-xs text-[#333333] leading-relaxed pt-2 border-t border-[#e2e8f0]">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
