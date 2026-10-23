import React, { useState } from 'react';
import { Calendar, ArrowRight, X, ExternalLink } from 'lucide-react';
import { PageHero, pageAsset } from '../components/PageHero';
import { NEWS_ARTICLES } from '../data/companyInfo';

interface NewsViewProps {
  onOpenRfq: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onOpenRfq }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const [readingArticle, setReadingArticle] = useState<typeof NEWS_ARTICLES[0] | null>(null);

  const categories = ['Tất cả', 'Triển lãm & Sự kiện', 'Nghiên cứu & R&D', 'Tin tức Ngành'];

  const filtered = activeCategory === 'Tất cả'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* 1. Page Header */}
      <PageHero
        eyebrow="TIN TỨC & SỰ KIỆN CÔNG NGHỆ"
        title="Góc nhìn chuyên gia &"
        accent="xu hướng thiết bị gia đình"
        description="Cập nhật các hoạt động đối ngoại của Homichi tại các hội chợ công nghệ quốc tế và chia sẻ kinh nghiệm phát triển sản phẩm đồ gia dụng thông minh."
        image="pages/qc-closeup.webp"
        imagePosition="object-[70%_center]"
      />

      {/* 2. Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium ${
              activeCategory === cat
                ? 'bg-[#0062d2] text-white shadow-sm'
                : 'bg-white text-[#334155] hover:bg-slate-100 border border-[#e2e8f0]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(article => (
          <div
            key={article.id}
            onClick={() => setReadingArticle(article)}
            className="rounded-[24px] bg-white border border-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-lg hover:border-[#0062d2]/60 transition-all cursor-pointer group shadow-sm overflow-hidden"
          >
            <div className="space-y-4">
              <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-2 aspect-[16/10] overflow-hidden">
                <img
                  src={pageAsset(article.image)}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#64748b]">
                <span className="font-semibold text-[#0062d2]">{article.category}</span>
                <span className="text-[11px] font-mono">{article.readTime}</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-[#0f172a] group-hover:text-[#0062d2] transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#94a3b8] font-mono">{article.date}</span>
              <span className="font-semibold text-[#0062d2] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Đọc bài</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-[24px] border border-[#e2e8f0] shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-xs text-[#64748b] border-b border-[#e2e8f0] pb-4">
              <span className="font-mono text-[#0062d2] font-semibold uppercase">{readingArticle.category}</span>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748b] hover:text-[#0f172a] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={pageAsset(readingArticle.image)}
              alt=""
              className="w-full aspect-[16/9] object-cover rounded-[16px]"
            />

            <div>
              <div className="text-xs text-[#94a3b8] font-mono mb-2">{readingArticle.date} · {readingArticle.readTime}</div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f172a] leading-snug">
                {readingArticle.title}
              </h2>
            </div>

            <p className="text-xs font-medium text-[#0f172a] leading-relaxed p-4 rounded-[14px] bg-[#f8fafc] border border-[#e2e8f0]">
              {readingArticle.summary}
            </p>

            <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-4">
              <p>{readingArticle.content}</p>
              <p>
                Homichi luôn chào đón quý đối tác và nhà nhập khẩu ghé thăm gian hàng tại các kỳ hội chợ hoặc liên hệ trực tiếp để nhận bộ tài liệu kỹ thuật chuyên ngành đầy đủ.
              </p>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex justify-end">
              <button
                onClick={() => {
                  setReadingArticle(null);
                  onOpenRfq();
                }}
                className="px-6 py-2.5 rounded-[40px] bg-[#0062d2] hover:bg-[#004fb0] text-white text-xs font-semibold cursor-pointer"
              >
                Liên hệ hợp tác
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
