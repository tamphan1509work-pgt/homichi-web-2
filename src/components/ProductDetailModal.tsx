/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Check, Download, Send, Layers, ShieldCheck, Settings } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  const handleDownloadSpec = () => {
    const textContent = `
=========================================
HOMICHI OEM/ODM TECHNICAL SPECIFICATION SHEET
=========================================
Sản phẩm: ${product.name}
Model: ${product.model}
Ngành hàng: ${product.category}
Tiêu chuẩn chất lượng: ISO 9001:2015, CE, CB, RoHS 2.0
Nhà máy sản xuất: Cụm Nhà máy Thiết bị Thông minh Homichi

THÔNG SỐ KỸ THUẬT:
- Công suất/Hiệu suất: ${product.specs?.power || 'N/A'}
- Công nghệ điều khiển: ${product.specs?.technology || 'N/A'}
- Dung tích / Thể tích: ${product.specs?.capacity || 'N/A'}
- Kích thước hoàn thiện: ${product.specs?.dimensions || 'N/A'}
- Vật liệu CMF: ${product.specs?.material || 'N/A'}

TÍNH NĂNG NỔI BẬT:
${product.features?.map(f => `- ${f}`).join('\n')}

KHẢ NĂNG TÙY BIẾN CHO ĐỐI TÁC (ODM/OEM):
${product.oemOptions?.map(o => `- ${o}`).join('\n')}

LIÊN HỆ PHÒNG DỰ ÁN HOMICHI:
Email: oem@homichi.vn | Hotline: 1900 6868
=========================================
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `HOMICHI-${product.model}-SpecSheet.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]">
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <span className="font-semibold text-[#0062d2] uppercase tracking-wider">{product.category}</span>
            <span>·</span>
            <span className="font-mono text-[#0f172a]">{product.model}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Top Grid: Image + Main details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Visual slot */}
            <div className="w-full h-[280px] bg-[#f8fafc] rounded-[20px] border border-[#e2e8f0] flex items-center justify-center p-6 relative">
              <img
                src={product.originalImage || product.thumbnail}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-[220px] max-w-[90%] object-contain mix-blend-multiply"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute bottom-3 left-4 text-[10px] font-mono text-[#64748b] uppercase">
                Mã tiêu chuẩn: {product.model}
              </span>
            </div>

            {/* Title & Key Highlights */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#0f172a] font-semibold leading-tight">
                {product.name}
              </h2>
              
              <div className="py-2.5 px-3.5 rounded-[12px] bg-blue-50 border border-[#0062d2]/20 flex items-center justify-between">
                <span className="text-xs text-[#64748b]">Giá chào gia công B2B:</span>
                <span className="font-mono text-sm font-bold text-[#0062d2]">
                  {product.displayPrice === 'Liên hệ' ? 'Thỏa thuận theo số lượng' : product.displayPrice}
                </span>
              </div>

              <div className="text-xs text-[#475569] space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0062d2]" />
                  <span>Chứng nhận tiêu chuẩn: ISO 9001:2015, CE, CB, RoHS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0062d2]" />
                  <span>Thời gian sản xuất mẫu: 10 - 15 ngày làm việc</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-[#0062d2]" />
                  <span>Hỗ trợ tùy biến CMF & Nhận diện thương hiệu riêng</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Yêu cầu báo giá mẫu này</span>
                </button>
                <button
                  onClick={handleDownloadSpec}
                  className="p-3 text-[#0f172a] bg-slate-50 hover:bg-slate-100 border border-[#e2e8f0] rounded-full transition-colors cursor-pointer"
                  title="Tải bảng thông số kỹ thuật (Spec sheet)"
                >
                  <Download className="w-4 h-4 text-[#0062d2]" />
                </button>
              </div>
            </div>

          </div>

          {/* Section: Technical Specifications */}
          {product.specs && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-semibold text-[#0f172a]">
                Thông số kỹ thuật chi tiết
              </h4>
              <div className="rounded-[16px] border border-[#e2e8f0] overflow-hidden bg-white divide-y divide-[#e2e8f0] text-xs">
                {product.specs.power && (
                  <div className="grid grid-cols-3 p-3 bg-white">
                    <span className="font-medium text-[#64748b]">Công suất / Lực hút</span>
                    <span className="col-span-2 font-mono text-[#0f172a]">{product.specs.power}</span>
                  </div>
                )}
                {product.specs.technology && (
                  <div className="grid grid-cols-3 p-3 bg-slate-50/50">
                    <span className="font-medium text-[#64748b]">Công nghệ cốt lõi</span>
                    <span className="col-span-2 text-[#0f172a]">{product.specs.technology}</span>
                  </div>
                )}
                {product.specs.capacity && (
                  <div className="grid grid-cols-3 p-3 bg-white">
                    <span className="font-medium text-[#64748b]">Dung tích bình chứa</span>
                    <span className="col-span-2 font-mono text-[#0f172a]">{product.specs.capacity}</span>
                  </div>
                )}
                {product.specs.dimensions && (
                  <div className="grid grid-cols-3 p-3 bg-slate-50/50">
                    <span className="font-medium text-[#64748b]">Kích thước sản phẩm</span>
                    <span className="col-span-2 font-mono text-[#0f172a]">{product.specs.dimensions}</span>
                  </div>
                )}
                {product.specs.material && (
                  <div className="grid grid-cols-3 p-3 bg-white">
                    <span className="font-medium text-[#64748b]">Vật liệu hoàn thiện</span>
                    <span className="col-span-2 text-[#0f172a]">{product.specs.material}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Section: Features & OEM custom options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="p-5 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <h5 className="font-serif font-semibold text-sm text-[#0f172a]">
                  Tính năng nổi bật
                </h5>
                <ul className="space-y-2 text-xs text-[#334155]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0062d2] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* OEM Options */}
            {product.oemOptions && product.oemOptions.length > 0 && (
              <div className="p-5 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <h5 className="font-serif font-semibold text-sm text-[#0f172a]">
                  Khả năng tùy biến ODM/OEM
                </h5>
                <ul className="space-y-2 text-xs text-[#334155]">
                  {product.oemOptions.map((opt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0062d2] shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
