import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return PRODUCTS.slice(0, 8);
    const q = searchTerm.toLowerCase();
    return PRODUCTS.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.specs && Object.values(p.specs).some(v => v.toLowerCase().includes(q)))
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input bar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#e2e8f0] bg-white">
          <Search className="w-5 h-5 text-[#64748b] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên sản phẩm, mã model (vd: LIO-666V, LV-200, LAC-H66)..."
            className="flex-1 bg-transparent text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-[#64748b] hover:text-[#0f172a] text-xs font-mono"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="text-[11px] font-mono text-[#64748b] px-3 py-1">
            {searchTerm ? `Tìm thấy ${filtered.length} sản phẩm phù hợp` : 'Sản phẩm nổi bật đề xuất'}
          </div>

          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => {
                onClose();
                onSelectProduct(product);
              }}
              className="flex items-center justify-between p-3 rounded-[16px] hover:bg-[#f8fafc] transition-colors cursor-pointer group border border-transparent hover:border-[#e2e8f0]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[12px] bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center p-1 shrink-0">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[#0062d2] font-semibold">{product.model}</span>
                    <span className="text-[11px] text-[#64748b]">· {product.category}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#0f172a] group-hover:text-[#0062d2] transition-colors line-clamp-1">
                    {product.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-[#64748b] hidden sm:inline">
                  {product.displayPrice}
                </span>
                <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0062d2] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-10 text-xs text-[#64748b]">
              Không tìm thấy sản phẩm nào khớp với từ khóa "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
