import React, { useState } from 'react';
import { Product } from '../data/products';
import { Cpu, ArrowUpRight, Flame, Wind, Sparkles, Thermometer, Droplets, Fan } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestQuote
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback domain category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Bếp từ':
        return <Flame className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Máy hút bụi':
        return <Sparkles className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Quạt điều hòa':
      case 'Quạt cây':
        return <Fan className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Máy sưởi':
        return <Thermometer className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Máy hút ẩm':
        return <Droplets className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Bình nước nóng':
        return <Droplets className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      case 'Điều hòa':
        return <Wind className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
      default:
        return <Cpu className="w-10 h-10 text-[#0062d2]/70 stroke-[1.5]" />;
    }
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-[24px] border border-[#e2e8f0] hover:border-[#0062d2]/60 transition-all duration-300 hover:shadow-xl overflow-hidden p-6">
      
      <div>
        {/* Unboxed clean metadata header: category and model */}
        <div className="flex items-center justify-between text-xs text-[#64748b] mb-3">
          <span className="font-semibold text-[#0062d2]">{product.category}</span>
          <span aria-hidden="true" className="text-[#cbd5e1]">·</span>
          <span className="font-mono text-[11px] text-[#64748b] tracking-wider">{product.model}</span>
        </div>

        {/* Visual Slot with resilient zero-broken image fallback */}
        <div className="relative w-full h-[210px] rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center overflow-hidden mb-5 group-hover:bg-[#eff6ff]/30 transition-colors">
          {!imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#f8fafc] animate-pulse">
                  {getCategoryIcon(product.category)}
                </div>
              )}
              <img
                src={product.originalImage || product.thumbnail}
                alt={product.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`max-h-[175px] max-w-[85%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
              <div className="p-3 rounded-full bg-white border border-[#e2e8f0] mb-2 shadow-sm">
                {getCategoryIcon(product.category)}
              </div>
              <span className="font-mono text-xs font-semibold text-[#0f172a]">{product.model}</span>
              <span className="text-[11px] text-[#64748b] mt-0.5">Mẫu thử nghiệm ODM/OEM</span>
            </div>
          )}

          {/* Quick inspect overlay button */}
          <button
            onClick={() => onViewDetails(product)}
            className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white text-[#0f172a] hover:text-[#0062d2] shadow-sm border border-[#e2e8f0] transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            title="Xem thông số kỹ thuật"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Title */}
        <h3 className="font-sans font-semibold text-base text-[#0f172a] leading-snug line-clamp-2 mb-2 group-hover:text-[#0062d2] transition-colors">
          {product.name}
        </h3>

        {/* Teaser technical specs */}
        {product.specs && (
          <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed mb-4">
            {product.specs.power || product.specs.technology || product.specs.capacity || 'Sẵn sàng tùy biến CMF và bo mạch điều khiển'}
          </p>
        )}
      </div>

      {/* Pricing / MOQ & Action Button Bar */}
      <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between gap-2 mt-auto">
        <div>
          <span className="block text-[11px] text-[#64748b]">Giá chào B2B</span>
          <span className="font-mono text-xs font-semibold text-[#0f172a]">
            {product.displayPrice === 'Liên hệ' ? 'Báo giá theo MOQ' : product.displayPrice}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onViewDetails(product)}
            className="px-3 py-1.5 text-xs font-medium text-[#334155] hover:text-[#0062d2] bg-transparent hover:bg-[#f1f5f9] rounded-[40px] transition-colors cursor-pointer"
          >
            Chi tiết
          </button>
          <button
            onClick={() => onRequestQuote(product)}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            Báo giá mẫu
          </button>
        </div>
      </div>

    </div>
  );
};
