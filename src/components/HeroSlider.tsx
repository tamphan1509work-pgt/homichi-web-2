import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

// Slide 0 is the brand video; the rest are homichi.com campaign banners,
// which carry their own logo and copy, so the headline only overlays the video.
const BANNERS = [
  { src: 'banners/banner-dieu-hoa.webp', alt: 'Điều hòa Livotec Inverter' },
  { src: 'banners/banner-binh-nuoc-nong.webp', alt: 'Bình nước nóng gián tiếp Livotec LWH-V15A25' },
  { src: 'banners/banner-quat.webp', alt: 'Quạt cây Livotec tiết kiệm điện năng' },
  { src: 'banners/banner-bep-tu.webp', alt: 'Bếp từ đôi Livotec tiết kiệm điện năng' },
];

const SLIDE_COUNT = BANNERS.length + 1;
const BANNER_MS = 5500;
// If the video buffers longer than this, move on instead of showing a frozen frame
const STALL_MS = 2500;

// Banners are ~2.5:1, so they only read well full-bleed on wide screens
const WIDE_QUERY = '(min-width: 1024px)';
const useIsWide = () => {
  const [isWide, setIsWide] = useState(() => window.matchMedia(WIDE_QUERY).matches);
  useEffect(() => {
    const mql = window.matchMedia(WIDE_QUERY);
    const onChange = () => setIsWide(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return isWide;
};

interface HeroSliderProps {
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenRfq, onOpenProfile }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stallTimer = useRef<number | undefined>(undefined);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isWide = useIsWide();
  const isVideoSlide = active === 0;

  // Narrow screens show only the (looping) video in the hero
  useEffect(() => {
    if (!isWide) setActive(0);
  }, [isWide]);

  const goTo = useCallback((index: number) => setActive((index + SLIDE_COUNT) % SLIDE_COUNT), []);
  const next = useCallback(() => setActive((i) => (i + 1) % SLIDE_COUNT), []);
  // Video events (ended / error / stall) can fire back to back; only leave slide 0 once
  const leaveVideo = useCallback(() => {
    if (isWide) setActive((i) => (i === 0 ? 1 : i));
  }, [isWide]);

  // Restart the video whenever its slide comes back into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isVideoSlide) {
      video.currentTime = 0;
      if (isPlaying) video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVideoSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  // Banner slides advance on a timer; the video slide advances when the clip ends
  useEffect(() => {
    if (!isPlaying || isVideoSlide) return;
    const id = window.setTimeout(next, BANNER_MS);
    return () => window.clearTimeout(id);
  }, [active, isPlaying, isVideoSlide, next]);

  const clearStall = () => window.clearTimeout(stallTimer.current);
  const handleWaiting = () => {
    clearStall();
    if (isWide && isVideoSlide && isPlaying) stallTimer.current = window.setTimeout(leaveVideo, STALL_MS);
  };
  // A pending stall skip is stale once the slide changes or playback is paused
  useEffect(() => clearStall, [isVideoSlide, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video?.pause();
    } else if (isVideoSlide) {
      video?.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
    <section
      aria-roledescription="carousel"
      aria-label="Homichi nổi bật"
      className="relative w-full h-[600px] sm:h-[680px] lg:h-auto lg:aspect-[1905/755] lg:min-h-[560px] lg:max-h-[820px] bg-[#070b14] text-white overflow-hidden"
    >
      {/* Slide 0: brand video */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoSlide ? 'opacity-100' : 'opacity-0'}`}>
        <video
          ref={videoRef}
          autoPlay
          loop={!isWide}
          muted
          playsInline
          preload="auto"
          poster={asset('hero/hero-factory.jpg')}
          onEnded={leaveVideo}
          onWaiting={handleWaiting}
          onPlaying={clearStall}
          onError={leaveVideo}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={asset('hero/hero-factory.mp4')} type="video/mp4" onError={leaveVideo} />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/45 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/90 via-[#060b14]/35 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0062d2]/25 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Slides 1..n: banners, shown uncropped over a blurred fill of themselves */}
      {isWide && BANNERS.map((banner, idx) => {
        const isActive = active === idx + 1;
        return (
          <div
            key={banner.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={asset(banner.src)}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl opacity-70"
            />
            <motion.img
              src={asset(banner.src)}
              alt={banner.alt}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-contain"
              animate={isActive ? { scale: [1, 1.04] } : { scale: 1 }}
              transition={{ duration: BANNER_MS / 1000 + 1, ease: 'linear' }}
            />
          </div>
        );
      })}

      {/* Headline + stats overlay (video slide only) */}
      <AnimatePresence>
        {isVideoSlide && (
          <motion.div
            key="hero-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
          >
            <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 pb-20 sm:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="max-w-2xl space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#93c5fd] font-mono text-xs font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0062d2] animate-pulse" />
                  TIÊU CHUẨN ISO 9001:2015 · CE / CB ELIGIBLE
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white text-balance">
                  Thiết bị gia dụng.{' '}
                  <span className="font-light italic text-[#93c5fd]">Thông minh & tinh tế.</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                  Nền tảng sản xuất và nghiên cứu ODM/OEM trọn gói cho 120+ thương hiệu gia dụng cao cấp. Dây chuyền SMT tự động, linh kiện tiêu chuẩn và vận hành đạt chứng nhận quốc tế.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenRfq}
                    className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#070b14] bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                  >
                    Gửi yêu cầu báo giá (RFQ)
                  </button>
                  <button
                    onClick={onOpenProfile}
                    className="px-6 py-3.5 text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-full transition-all cursor-pointer whitespace-nowrap"
                  >
                    Hồ sơ năng lực 2026
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                className="hidden sm:flex items-center divide-x divide-white/20 self-start lg:self-end"
              >
                <div className="pr-6 lg:pr-7">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">50.000m²</div>
                  <div className="text-xs text-slate-300 mt-0.5">Tổ hợp sản xuất</div>
                </div>
                <div className="px-6 lg:px-7">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">8 Dây chuyền</div>
                  <div className="text-xs text-slate-300 mt-0.5">SMT tự động hóa</div>
                </div>
                <div className="pl-6 lg:pl-7">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#93c5fd]">1.200.000+</div>
                  <div className="text-xs text-slate-300 mt-0.5">Thiết bị/năm</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide controls: segmented progress + play/pause */}
      <div className="absolute z-20 bottom-6 sm:bottom-8 inset-x-0">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {isWide && (
          <div className="flex items-center gap-2 px-3 rounded-full bg-black/30 backdrop-blur-md">
            {Array.from({ length: SLIDE_COUNT }, (_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={idx === 0 ? 'Xem video giới thiệu' : `Xem banner ${idx}`}
                aria-current={active === idx}
                className="group py-2 cursor-pointer"
              >
                <span
                  className={`block h-1 rounded-full overflow-hidden transition-all duration-500 ${
                    active === idx ? 'w-12 sm:w-16 bg-white/30' : 'w-6 sm:w-8 bg-white/25 group-hover:bg-white/50'
                  }`}
                >
                  {active === idx && idx > 0 && isPlaying && (
                    <motion.span
                      key={`progress-${active}`}
                      className="block h-full bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: BANNER_MS / 1000, ease: 'linear' }}
                    />
                  )}
                  {active === idx && (idx === 0 || !isPlaying) && <span className="block h-full bg-white" />}
                </span>
              </button>
            ))}
          </div>
          )}

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Tạm dừng trình chiếu' : 'Tiếp tục trình chiếu'}
            title={isPlaying ? 'Tạm dừng trình chiếu' : 'Tiếp tục trình chiếu'}
            className="ml-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>
      </div>
    </section>

    {!isWide && <MobileBannerStrip />}
    </div>
  );
};

// Narrow screens: banners as a swipeable strip under the hero, at their native ratio
const MobileBannerStrip: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setTimeout(() => scrollToIndex((active + 1) % BANNERS.length), BANNER_MS);
    return () => window.clearTimeout(id);
  }, [active, isPaused, scrollToIndex]);

  return (
    <div className="px-4 sm:px-6 pt-4">
      <div
        ref={trackRef}
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        onTouchStart={() => setIsPaused(true)}
        className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl shadow-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {BANNERS.map((banner) => (
          <img
            key={banner.src}
            src={asset(banner.src)}
            alt={banner.alt}
            loading="lazy"
            className="snap-start shrink-0 w-full aspect-[1905/755] object-cover"
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 pt-3">
        {BANNERS.map((banner, idx) => (
          <button
            key={banner.src}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Xem banner ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === active ? 'w-6 bg-[#0062d2]' : 'w-1.5 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
