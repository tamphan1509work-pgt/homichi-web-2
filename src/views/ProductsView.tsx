import React, { useState, useMemo } from 'react';
import { Search, Download, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageHero, pageAsset } from '../components/PageHero';
import { motion } from 'framer-motion';

const HEADER_RENDERS = ['may-hut-am.webp', 'quat-cay.webp', 'noi-chien-khong-dau.webp'];

interface ProductsViewProps {
  onViewProductDetails: (product: Product) => void;
  onRequestQuote: (category?: string, model?: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onViewProductDetails,
  onRequestQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả ngành hàng');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'model'>('default');

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = selectedCategory === 'Tất cả ngành hàng' || p.category === selectedCategory;
      const matchSearch = !searchQuery.trim() || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'model') return a.model.localeCompare(b.model);
      return a.id - b.id;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleDownloadFullCatalog = () => {
    let content = `========================================================
HOMICHI SMART HOME APPLIANCES — OFFICIAL CATALOGUE 2026
Original Design & Equipment Manufacturer (ODM / OEM)
========================================================\n\n`;

    CATEGORIES.filter(c => c !== 'Tất cả ngành hàng').forEach(cat => {
      const items = PRODUCTS.filter(p => p.category === cat);
      if (items.length > 0) {
        content += `\n--- NGÀNH HÀNG: ${cat.toUpperCase()} (${items.length} SẢN PHẨM) ---\n`;
        items.forEach((p, idx) => {
          content += `${idx + 1}. [${p.model}] ${p.name}\n`;
          content += `   Giá hiển thị B2B: ${p.displayPrice}\n`;
          if (p.specs?.power) content += `   Công suất: ${p.specs.power}\n`;
          if (p.specs?.technology) content += `   Công nghệ: ${p.specs.technology}\n`;
          if (p.specs?.capacity) content += `   Dung tích: ${p.specs.capacity}\n`;
          content += `   Khả năng OEM: In logo thương hiệu, phối màu CMF, đóng gói chuẩn xuất khẩu.\n\n`;
        });
      }
    });

    content += `\nLIÊN HỆ PHÒNG KINH DOANH B2B HOMICHI:\nHotline: +84 (0) 24 3888 6688 | Email: b2b@homichi.com\nWebsite: homichi.com\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `HOMICHI-Catalogue-2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* 1. Header with Catalog Download action */}
      <PageHero
        eyebrow="DANH MỤC THIẾT BỊ GIA DỤNG HOMICHI"
        title="Bộ sưu tập thiết bị gia dụng"
        accent="chuẩn mực ODM/OEM"
        description="Các dòng sản phẩm được nghiên cứu và chế tác tối ưu cho gia đình hiện đại, sẵn sàng chuyển giao công nghệ hoặc sản xuất theo nhãn riêng của đối tác."
        actions={
          <button
            onClick={handleDownloadFullCatalog}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[40px] bg-white hover:bg-slate-100 text-xs font-semibold text-[#0f172a] shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#0062d2]" />
            <span>Tải toàn bộ Catalogue 2026 (.PDF / TXT)</span>
          </button>
        }
        aside={
          <div aria-hidden className="hidden md:flex items-end gap-2 lg:gap-4 shrink-0 self-center lg:self-end">
            {HEADER_RENDERS.map((file, idx) => (
              <motion.img
                key={file}
                src={pageAsset(`products-3d/${file}`)}
                alt=""
                className="w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)]"
                style={{ height: idx === 1 ? 260 : 190 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.3 + idx * 0.12 },
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 },
                }}
              />
            ))}
          </div>
        }
      />

      {/* 2. Filter & Search Controls */}
      <div className="space-y-4">
        
        {/* Search & Sort bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-4 top-3.5 text-[#64748b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên sản phẩm, mã model (vd: LIO-666V, LV-200, LAC-H66S, DHV12I)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-[9999px] border border-[#cbd5e1] bg-white text-xs text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0062d2]/30 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-2.5 text-xs text-[#64748b] hover:text-[#0f172a]"
              >
                Xóa
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-[9999px] border border-[#e2e8f0] bg-white text-xs text-[#475569] shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#0062d2]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#0f172a] focus:outline-none cursor-pointer"
              >
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="name">Tên sản phẩm (A-Z)</option>
                <option value="model">Mã model</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs (Single Line Horizontal Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
                selectedCategory === cat
                  ? 'bg-[#0062d2] text-white shadow-sm'
                  : 'bg-white text-[#334155] hover:bg-slate-100 border border-[#e2e8f0]'
              }`}
            >
              {cat}
              {cat !== 'Tất cả ngành hàng' && ` (${PRODUCTS.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Products Result Counter */}
      <div className="flex items-center justify-between text-xs text-[#64748b]">
        {/* The total catalogue size is not shown; counts appear only for a filtered view */}
        {selectedCategory !== 'Tất cả ngành hàng' || searchQuery.trim() ? (
          <span>Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm thiết bị</span>
        ) : (
          <span>Toàn bộ danh mục sản phẩm</span>
        )}
        {selectedCategory !== 'Tất cả ngành hàng' && (
          <button
            onClick={() => setSelectedCategory('Tất cả ngành hàng')}
            className="text-[#0062d2] hover:underline cursor-pointer"
          >
            Xem tất cả ngành hàng
          </button>
        )}
      </div>

      {/* 4. Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProductDetails}
              onRequestQuote={(p) => onRequestQuote(p.category, p.model)}
            />
          ))}
        </div>
      ) : (
        <div className="p-16 text-center rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-3">
          <p className="font-serif text-lg text-[#0f172a]">
            Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.
          </p>
          <p className="text-xs text-[#64748b]">
            Hãy thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc ngành hàng.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Tất cả ngành hàng');
            }}
            className="px-5 py-2 text-xs font-semibold text-[#0062d2] border border-[#0062d2] rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      )}

      {/* 5. Bottom Quick Quote Banner */}
      <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#0f172a]">
            Bạn cần dòng sản phẩm thiết kế theo yêu cầu kỹ thuật riêng?
          </h3>
          <p className="text-xs text-[#64748b] mt-1">
            Đội ngũ R&D của Homichi hỗ trợ phát triển khuôn mới và tối ưu bảng mạch Smart Home theo bài toán của đối tác.
          </p>
        </div>
        <button
          onClick={() => onRequestQuote()}
          className="px-6 py-3 text-xs font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          Gửi yêu cầu báo giá ODM/OEM
        </button>
      </div>

    </div>
  );
};
