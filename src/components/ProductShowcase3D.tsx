import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ShowcaseItem {
  file: string;
  name: string;
  nameEn: string;
}

// 3D product renders sourced from homichi.com
const SHOWCASE_ITEMS: ShowcaseItem[] = [
  { file: 'dieu-hoa.webp', name: 'Điều hòa', nameEn: 'Air conditioner' },
  { file: 'quat-cay.webp', name: 'Quạt', nameEn: 'Fan' },
  { file: 'quat-dieu-hoa.webp', name: 'Quạt điều hòa', nameEn: 'Air cooler fan' },
  { file: 'binh-nuoc-nong.webp', name: 'Bình nước nóng', nameEn: 'Water heater' },
  { file: 'may-hut-am.webp', name: 'Máy hút ẩm', nameEn: 'Dehumidifier' },
  { file: 'noi-chien-khong-dau.webp', name: 'Nồi chiên không dầu', nameEn: 'Air fryer' },
  { file: 'may-hut-mui.webp', name: 'Máy hút mùi', nameEn: 'Ducted hood' },
];

const AUTOPLAY_MS = 4500;

interface ProductShowcase3DProps {
  onViewProducts: () => void;
}

export const ProductShowcase3D: React.FC<ProductShowcase3DProps> = ({ onViewProducts }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Number of reachable scroll positions (fewer than items when 2-3 slides are visible)
  const [pageCount, setPageCount] = useState(SHOWCASE_ITEMS.length);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  // Track the slide nearest the left edge as the active one
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const slideWidth = (track.children[0] as HTMLElement).offsetWidth;
    const perView = Math.max(1, Math.round(track.clientWidth / slideWidth));
    setPageCount(SHOWCASE_ITEMS.length - perView + 1);
    setActiveIndex(Math.round(track.scrollLeft / slideWidth));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex + 1 >= pageCount ? 0 : activeIndex + 1);
  }, [activeIndex, pageCount, scrollToIndex]);

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [goNext, isPaused]);

  return (
    <div
      className="relative rounded-[28px] bg-[#05080f] text-white overflow-hidden border border-white/5 shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      {/* Ambient spotlight glows */}
      <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-[#0062d2]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-48 right-0 w-[420px] h-[420px] bg-[#38bdf8]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Heading + arrows */}
      <div className="relative z-10 px-6 sm:px-12 pt-10 sm:pt-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <span className="font-mono text-xs font-semibold text-[#93c5fd] uppercase tracking-wider block">
            DANH MỤC SẢN PHẨM HOMICHI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white">
            Thiết kế hiện đại,{' '}
            <em className="font-light italic text-[#93c5fd]">sẵn sàng cho thương hiệu của bạn</em>
          </h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={goPrev}
            aria-label="Sản phẩm trước"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            aria-label="Sản phẩm tiếp theo"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll-snap carousel track */}
      <div
        ref={trackRef}
        onScroll={measure}
        className="relative z-10 flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-6"
      >
        {SHOWCASE_ITEMS.map((item, idx) => (
          <button
            key={item.file}
            onClick={onViewProducts}
            className="group snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-6 sm:px-10 pt-6 pb-4 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-full h-[280px] sm:h-[340px] flex items-end justify-center">
              {/* Floor reflection that breathes with the float */}
              <motion.div
                aria-hidden
                className="absolute bottom-1 w-3/5 h-6 rounded-[50%] bg-[#0062d2]/35 blur-xl"
                animate={{ scaleX: [1, 0.82, 1], opacity: [0.8, 0.5, 0.8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
              />
              <motion.img
                src={`${import.meta.env.BASE_URL}assets/products-3d/${item.file}`}
                alt={item.name}
                loading="lazy"
                draggable={false}
                className="relative max-h-[260px] sm:max-h-[320px] max-w-[88%] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
              />
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#93c5fd] transition-colors">
                {item.name}
              </div>
              <div className="text-sm text-slate-400">{item.nameEn}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex items-center justify-center gap-2.5 pb-10 sm:pb-12 pt-4">
        {SHOWCASE_ITEMS.slice(0, pageCount).map((item, idx) => (
          <button
            key={item.file}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Xem ${item.name}`}
            className={`h-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? 'w-7 bg-white border-white' : 'w-2.5 bg-transparent border-white/40 hover:border-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
