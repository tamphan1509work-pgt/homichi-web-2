import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('homichi_cookie_consent');
    if (!saved) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('homichi_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white rounded-[20px] p-4 border border-[#e2e8f0] shadow-xl animate-in slide-in-from-bottom-3 duration-300">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#0062d2] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="text-xs text-[#334155] leading-relaxed">
            Chúng tôi sử dụng cookie để tối ưu hóa trải nghiệm duyệt danh mục sản phẩm B2B và phân tích lưu lượng đối tác theo tiêu chuẩn bảo mật dữ liệu.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-full transition-colors cursor-pointer shadow-sm"
            >
              Chấp thuận
            </button>
            <button
              onClick={() => setAccepted(true)}
              className="px-3 py-1.5 text-xs font-medium text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              Cần thiết duy nhất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
