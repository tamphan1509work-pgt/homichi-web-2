/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, MotionConfig, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Minus,
  Sparkles,
  Calendar,
  Layers,
  Factory,
  BarChart3,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { vn } from '../utils/typography';
import { ProductShowcase3D } from '../components/ProductShowcase3D';
import { HeroSlider } from '../components/HeroSlider';
import { WORKFLOW_STEPS } from '../data/companyInfo';

// Reveal animation variants for scroll-triggered high-end feel
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

// Banner reveal: soft scale-in, then staggers its inner blocks
const bannerReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

// Bar chart columns grow from the baseline one after another (custom = column index)
const barGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: { duration: 0.6, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }
  })
};

// Comparison table rows cascade in (custom = row index)
const tableRow: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }
  })
};

// Homichi campaign lifestyle visuals, grouped by room
const LIVING_SPACES = [
  {
    eyebrow: 'Phòng khách & phòng ngủ',
    title: 'Mát lành cả gia đình',
    image: 'phong-khach.webp',
    alt: 'Gia đình Việt bên điều hòa Livotec DHV Series Inverter',
    products: ['Điều hòa', 'Quạt', 'Quạt điều hòa', 'Máy hút ẩm'],
  },
  {
    eyebrow: 'Phòng bếp',
    title: 'Bữa cơm thêm trọn vị',
    image: 'phong-bep.webp',
    alt: 'Nồi chiên không dầu Livotec 4D Vision Glass trong căn bếp gia đình',
    products: ['Bếp từ', 'Máy hút mùi', 'Nồi chiên không dầu', 'Nồi cơm điện'],
  },
  {
    eyebrow: 'Phòng tắm',
    title: 'Ấm áp mỗi sớm mai',
    image: 'phong-tam.webp',
    alt: 'Bình nước nóng gián tiếp Livotec LWH-V20T26 trong phòng tắm',
    products: ['Bình nước nóng', 'Máy sưởi'],
  },
];

interface HomeViewProps {
  onOpenRfq: (initialCategory?: string, initialModel?: string) => void;
  onOpenTour: () => void;
  onOpenProfile: () => void;
  onOpenCerts?: () => void;
  onViewProductDetails?: (product: Product) => void;
  setCurrentTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenRfq,
  onOpenTour,
  onOpenProfile,
  onOpenCerts,
  onViewProductDetails,
  setCurrentTab,
}) => {
  // Micro-interactive widgets from the reference video walkthrough
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<number>(7);
  const [activeChecklist, setActiveChecklist] = useState<string[]>([
    'Bản vẽ 3D CMF & khuôn ép',
    'Kiểm định sóng hài EMI/EMC',
    'Đóng gói thùng 5 lớp thả rơi'
  ]);

  const toggleCheck = (item: string) => {
    if (activeChecklist.includes(item)) {
      setActiveChecklist(activeChecklist.filter(i => i !== item));
    } else {
      setActiveChecklist([...activeChecklist, item]);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* ============================================================== */}
      {/* 1. HERO SLIDESHOW: brand video + homichi.com campaign banners  */}
      {/* ============================================================== */}
      <HeroSlider onOpenRfq={() => onOpenRfq()} onOpenProfile={onOpenProfile} onViewProducts={() => setCurrentTab('products')} />

      {/* ============================================================== */}
      {/* 2. "Gia công ODM/OEM thật dễ dàng" (Matching Video 00:04 - 00:05) */}
      {/* 3 Numbered cards with real Micro-UI widgets (Calendar, Bar chart, checklist) */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        
        {/* Section Heading with Italic accent */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
            {vn('Gia công ODM / OEM')}{' '}
            <em className="font-light italic text-[#0062d2]">{vn('thật dễ dàng')}</em>
          </h2>
        </div>

        {/* 3 Numbered Cards with Staggered Scroll-Triggered Reveal */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Card 01: 49+ Mẫu thiết bị với Micro Calendar Picker Widget */}
          <motion.div variants={cardItem} className="rounded-[24px] bg-white p-8 sm:p-10 border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-[#0062d2] block">
                01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
                49+ Mẫu thiết bị sẵn sàng
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Lên lịch duyệt mẫu thực tế từ danh mục 49 thiết bị gia dụng: bếp từ, hút bụi, quạt làm mát, hút ẩm và bình nước nóng.
              </p>

              {/* Micro-UI: Calendar Picker Widget (from video frame 00:04) */}
              <div className="pt-2 p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <div className="text-[10px] font-mono text-[#64748b] uppercase flex items-center justify-between">
                  <span>Lịch hẹn nhận mẫu thử</span>
                  <span className="text-[#0062d2] font-semibold">Tháng 10 / 2026</span>
                </div>
                <div className="grid grid-cols-6 gap-1 text-center">
                  {['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d, i) => (
                    <span key={i} className="text-[9px] font-mono text-[#94a3b8]">{d}</span>
                  ))}
                  {[5, 6, 7, 8, 9, 10].map((num) => {
                    const active = num === selectedCalendarDay;
                    return (
                      <button
                        key={num}
                        onClick={() => setSelectedCalendarDay(num)}
                        className={`py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#0062d2] text-white font-bold shadow-sm'
                            : 'text-[#0f172a] hover:bg-slate-200/60'
                        }`}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#64748b] flex items-center gap-1.5 pt-2 border-t border-[#e2e8f0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062d2]"></span>
              <span>Thời gian cung cấp mẫu T1: 5 - 10 ngày</span>
            </div>
          </motion.div>

          {/* Card 02: R&D & Kiểm chuẩn với Micro Range/Bar Chart Widget */}
          <motion.div variants={cardItem} className="rounded-[24px] bg-white p-8 sm:p-10 border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-[#0062d2] block">
                02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
                R&D & Đo lường chuẩn hóa
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Đội ngũ 150+ kỹ sư và phòng lab thử nghiệm 2.000 giờ đảm bảo các chỉ số điện áp, nhiệt năng và độ ồn tĩnh âm dưới 28dB.
              </p>

              {/* Micro-UI: Range & Bar Chart Widget (from video frame 00:05) */}
              <div className="pt-2 p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <div className="text-[10px] font-mono text-[#64748b] uppercase flex items-center justify-between">
                  <span>Chỉ số đo kiểm mẫu</span>
                  <span className="text-[#0062d2] font-semibold">Đạt chuẩn 100%</span>
                </div>
                
                {/* Horizontal range bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-mono text-[#94a3b8]">
                    <span>TIÊU CHUẨN</span>
                    <span>THỰC NGHIỆM</span>
                    <span>TỐI ƯU</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden relative">
                    <div className="h-full bg-[#0062d2] rounded-full w-[85%]" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#0f172a] pt-1">
                  <span>Độ ồn: 26.4 dB</span>
                  <span className="text-emerald-600 font-semibold">✓ Pass</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#64748b] flex items-center gap-1.5 pt-2 border-t border-[#e2e8f0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062d2]"></span>
              <span>Kiểm chuẩn an toàn theo IEC 60335</span>
            </div>
          </motion.div>

          {/* Card 03: Sản xuất & Chuyển giao với Micro Checklist */}
          <motion.div variants={cardItem} className="rounded-[24px] bg-white p-8 sm:p-10 border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-[#0062d2] block">
                03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0f172a]">
                Sản xuất & Bàn giao khép kín
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Quản lý tiến độ đơn hàng tự động qua ERP/MES. Bàn giao kèm hồ sơ hợp quy Quatest, tem nhãn năng lượng và 2% linh kiện FOC.
              </p>

              {/* Micro-UI: Interactive Checklist Widget (from video frame 00:05) */}
              <div className="pt-2 p-4 rounded-[16px] bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
                <div className="text-[10px] font-mono text-[#64748b] uppercase flex items-center justify-between">
                  <span>Hạng mục kiểm soát OQC</span>
                  <span className="text-emerald-600 font-semibold font-mono">100% Passed</span>
                </div>
                {[
                  'Bản vẽ 3D CMF & khuôn ép',
                  'Kiểm định sóng hài EMI/EMC',
                  'Đóng gói thùng 5 lớp thả rơi'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleCheck(item)}
                    className="w-full flex items-center justify-between text-left p-2 rounded-[10px] hover:bg-slate-200/50 transition-colors cursor-pointer"
                  >
                    <span className="text-xs text-[#0f172a]">{item}</span>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                      activeChecklist.includes(item)
                        ? 'bg-[#0062d2] border-[#0062d2] text-white'
                        : 'border-[#cbd5e1] bg-white'
                    }`}>
                      {activeChecklist.includes(item) && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#64748b] flex items-center gap-1.5 pt-2 border-t border-[#e2e8f0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062d2]"></span>
              <span>Chính sách FOC 2% linh kiện dự phòng trọn đời</span>
            </div>
          </motion.div>

        </motion.div>

        {/* 2 Centered Pill CTAs Below 3 Cards (Matching Video 00:05) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenRfq()}
            className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Bắt đầu hợp tác ODM / OEM
          </button>
          <button
            onClick={onOpenTour}
            className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#0062d2] hover:text-[#004fb0] bg-transparent border-[1.5px] border-[#0062d2] hover:bg-blue-50/60 rounded-[40px] transition-all cursor-pointer whitespace-nowrap"
          >
            Đăng ký tham quan nhà máy
          </button>
        </div>

      </motion.section>

      {/* ============================================================== */}
      {/* 3. "Kiểm soát toàn diện 49+ chỉ số" (Matching Video 00:06 - 00:07) */}
      {/* Slider widget & category tag ticker                           */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="p-8 sm:p-14 rounded-[24px] bg-white border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] space-y-10"
        >
          
          <motion.div variants={cardItem} className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
              {vn('Kiểm soát chất lượng')}{' '}
              <em className="font-light italic text-[#0062d2]">{vn('hơn 49 chỉ số an toàn')}</em>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#475569] pt-2">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0062d2]" />
                <span>Đo dòng rò cách điện 3750V</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0062d2]" />
                <span>Chịu sốc nhiệt -40°C đến 150°C</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0062d2]" />
                <span>Độ ồn tĩnh âm dưới 28dB</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Range & Tolerance Simulation Display (from video 00:06) */}
          <motion.div variants={cardItem} className="max-w-md mx-auto p-5 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3 shadow-sm">
            <div className="flex justify-between text-[11px] font-mono text-[#64748b]">
              <span>DUNG SAI CHO PHÉP</span>
              <span className="text-[#0062d2] font-bold">CHUẨN XUẤT XƯỞNG</span>
              <span>GIỚI HẠN NGOÀI</span>
            </div>
            
            {/* Range Line with blue target dot */}
            <div className="relative py-3">
              <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
              <div className="absolute top-1/2 left-[58%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#0062d2] border-2 border-white shadow"></div>
                <span className="font-mono text-[10px] text-[#0062d2] font-bold mt-1">99.82% Chuẩn</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#64748b] pt-1">
              <span>Min Tolerance: ±0.01mm</span>
              <span>Max Voltage Drop: &lt; 1%</span>
            </div>
          </motion.div>

          {/* Horizontal Ticker / Category Flow (from video 00:07) */}
          <motion.div variants={cardItem} className="pt-4 border-t border-[#e2e8f0]">
            <div className="flex flex-wrap items-center justify-center gap-y-3 text-xs text-[#334155]">
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Bếp từ Dual Inverter E-Smart</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Máy hút bụi không dây BLDC 25.000Pa</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Quạt điều hòa làm mát Cooling Pad gỗ sồi</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Máy sưởi gốm PTC Ceramic chống khô da</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Máy hút ẩm biến tần Plasmacluster</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Bình nước nóng gián tiếp men Titan</span>
              <span className="px-3 text-[#0062d2] font-bold">·</span>
              <span className="hover:text-[#0062d2] transition-colors cursor-pointer">Điều hòa một chiều Inverter Gas R32</span>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* ============================================================== */}
      {/* 3b. 3D PRODUCT SHOWCASE CAROUSEL (renders from homichi.com)     */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        <ProductShowcase3D onViewProducts={() => setCurrentTab('products')} />
      </motion.section>

      {/* ============================================================== */}
      {/* 4. DOCTOR/CLIENT TESTIMONIAL & 6-GRID CATEGORY MATRIX          */}
      {/* (Matching Video 00:08 - 00:10)                                 */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-16"
      >
        
        {/* Testimonial Quote (Matching 00:08 in video) */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0f172a] font-normal italic leading-relaxed">
            "Hệ thống sản xuất của Homichi là một trong những chuẩn mực khắt khe nhất mà chúng tôi từng hợp tác. Khả năng kiểm soát bo mạch SMT và dung sai khuôn mẫu tương đương các nhà máy hàng đầu thế giới."
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0062d2]/10 border border-[#0062d2]/30 flex items-center justify-center font-serif text-sm font-bold text-[#0062d2]">
              KT
            </div>
            <div className="text-left text-xs">
              <span className="font-bold text-[#0f172a] block">Nguyễn Khắc Tuấn, M.Eng</span>
              <span className="text-[#64748b]">Giám đốc Chuỗi Cung ứng & Tiêu chuẩn Chất lượng</span>
            </div>
          </div>
        </div>

        {/* 6-Grid Category Matrix (Matching 00:08 - 00:10 in video) with Staggered Motion */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Bếp từ */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 hover:shadow-md transition-all cursor-pointer space-y-3"
          >
            <span className="text-[11px] font-mono text-[#0062d2] font-semibold">2 MẪU TIÊU BIỂU</span>
            <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Bếp từ & Nấu nướng</h4>
            <ul className="text-xs text-[#475569] space-y-1.5 pt-1">
              <li>· Dual Inverter tiết kiệm điện 35%</li>
              <li>· Kính Ceramic vát cạnh chịu nhiệt 800°C</li>
              <li>· Cảm ứng trượt Slider 9 mức công suất</li>
            </ul>
          </motion.div>

          {/* Card 2: Máy hút bụi */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 hover:shadow-md transition-all cursor-pointer space-y-3"
          >
            <span className="text-[11px] font-mono text-[#0062d2] font-semibold">3 MẪU TIÊU BIỂU</span>
            <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Máy hút bụi cầm tay</h4>
            <ul className="text-xs text-[#475569] space-y-1.5 pt-1">
              <li>· Động cơ không chổi than BLDC 25.000Pa</li>
              <li>· Màng lọc HEPA H13 khử bụi mịn PM2.5</li>
              <li>· Pin Lithium-ion dung lượng cao chạy 45 phút</li>
            </ul>
          </motion.div>

          {/* Card 3: Quạt điều hòa */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 hover:shadow-md transition-all cursor-pointer space-y-3"
          >
            <span className="text-[11px] font-mono text-[#0062d2] font-semibold">14 MẪU ĐA DẠNG</span>
            <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Quạt điều hòa hơi nước</h4>
            <ul className="text-xs text-[#475569] space-y-1.5 pt-1">
              <li>· Thể tích bình nước 45L - 70L làm mát sâu</li>
              <li>· Tấm làm mát Cooling Pad sợi gỗ sồi kháng khuẩn</li>
              <li>· Động cơ đồng nguyên chất bền bỉ 10 năm</li>
            </ul>
          </motion.div>

          {/* Card 4: Máy sưởi gốm */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 hover:shadow-md transition-all cursor-pointer space-y-3"
          >
            <span className="text-[11px] font-mono text-[#0062d2] font-semibold">5 MẪU CAO CẤP</span>
            <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Máy sưởi gốm PTC</h4>
            <ul className="text-xs text-[#475569] space-y-1.5 pt-1">
              <li>· Công nghệ nhiệt gốm PTC không đốt oxy</li>
              <li>· Tự ngắt khi nghiêng đổ hoặc quá nhiệt</li>
              <li>· Thiết kế dạng tháp tối giản sang trọng</li>
            </ul>
          </motion.div>

          {/* Card 5: Máy hút ẩm */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#e2e8f0] hover:border-[#0062d2]/60 hover:shadow-md transition-all cursor-pointer space-y-3"
          >
            <span className="text-[11px] font-mono text-[#0062d2] font-semibold">2 MẪU TIÊU BIỂU</span>
            <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Máy hút ẩm thông minh</h4>
            <ul className="text-xs text-[#475569] space-y-1.5 pt-1">
              <li>· Máy nén biến tần Panasonic siêu êm &lt; 32dB</li>
              <li>· Bù ẩm thông minh & tạo ion Plasmacluster</li>
              <li>· Kết nối điều khiển từ xa qua Smart App IoT</li>
            </ul>
          </motion.div>

          {/* Card 6: "+ Khám phá thêm 49 sản phẩm" (Matching video 00:10) */}
          <motion.div 
            variants={cardItem}
            onClick={() => setCurrentTab('products')}
            className="p-6 sm:p-8 rounded-[24px] bg-[#f8fafc] border-2 border-dashed border-[#0062d2]/30 hover:border-[#0062d2] hover:bg-blue-50/40 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#0062d2] font-semibold">+ 49 SẢN PHẨM SẴN CÓ</span>
              <h4 className="font-serif text-2xl font-bold text-[#0f172a]">Bình nóng lạnh & Quạt đứng</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Khám phá đầy đủ thông số kỹ thuật, khả năng tùy biến logo OEM, màu sắc CMF và bao bì xuất khẩu.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0062d2]">
              <span>Xem toàn bộ 49 model</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </motion.div>

      </motion.section>

      {/* ============================================================== */}
      {/* 5. "The new standard" / BENTO SOCIAL PROOF                     */}
      {/* (Matching Video 00:11 - 00:12)                                 */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
            {vn('Chuẩn mực mới cho')}{' '}
            <em className="font-light italic text-[#0062d2]">{vn('thiết bị gia đình')}</em>
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          
          <motion.div variants={cardItem} className="p-6 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-3">
            <span className="text-[10px] font-mono text-[#0062d2] font-semibold block">CHỨNG NHẬN SGS</span>
            <div className="font-serif text-xl font-bold text-[#0f172a]">ISO 9001:2015</div>
            <p className="text-xs text-[#64748b]">Hệ thống quản lý chất lượng đạt tiêu chuẩn quốc tế cho cụm nhà máy.</p>
          </motion.div>

          <motion.div variants={cardItem} className="p-6 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-3">
            <span className="text-[10px] font-mono text-[#0062d2] font-semibold block">TÜV RHEINLAND</span>
            <div className="font-serif text-xl font-bold text-[#0f172a]">CE Marking & CB</div>
            <p className="text-xs text-[#64748b]">Đủ điều kiện xuất khẩu trực tiếp sang thị trường Châu Âu và ASEAN.</p>
          </motion.div>

          <motion.div variants={cardItem} className="p-6 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-3">
            <span className="text-[10px] font-mono text-[#0062d2] font-semibold block">BUREAU VERITAS</span>
            <div className="font-serif text-xl font-bold text-[#0f172a]">RoHS 2.0 Green</div>
            <p className="text-xs text-[#64748b]">100% linh kiện không chứa chì và các chất độc hại môi trường.</p>
          </motion.div>

          <motion.div variants={cardItem} className="p-6 rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm space-y-3">
            <span className="text-[10px] font-mono text-[#0062d2] font-semibold block">ĐỐI TÁC TIN CẬY</span>
            <div className="font-serif text-xl font-bold text-[#0f172a]">120+ Thương hiệu</div>
            <p className="text-xs text-[#64748b]">Gia công và cung ứng cho các chuỗi bán lẻ điện máy hàng đầu.</p>
          </motion.div>

        </motion.div>

      </motion.section>

      {/* ============================================================== */}
      {/* 6. GIẢI PHÁP CHO MỌI KHÔNG GIAN SỐNG (lifestyle categories)     */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
            {vn('Giải pháp cho')}{' '}
            <em className="font-light italic text-[#0062d2]">{vn('mọi không gian sống')}</em>
          </h2>
          <p className="text-xs text-[#64748b] mt-2">
            Danh mục thiết bị đồng bộ cho từng không gian trong ngôi nhà Việt, sẵn sàng tùy biến theo thương hiệu riêng.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {LIVING_SPACES.map((space) => (
            <motion.button
              variants={cardItem}
              key={space.title}
              onClick={() => setCurrentTab('products')}
              className="group flex flex-col rounded-[24px] overflow-hidden bg-white text-left border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-[#0062d2]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Campaign visuals are square with headline copy baked in, so show them whole */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={`${import.meta.env.BASE_URL}assets/lifestyle/${space.image}`}
                  alt={space.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col p-6 sm:p-7 space-y-3">
                <span className="font-mono text-[11px] font-semibold text-[#0062d2] uppercase tracking-wider">{space.eyebrow}</span>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0f172a]">{space.title}</h3>
                  <span className="w-9 h-9 rounded-full border border-[#e2e8f0] text-[#0f172a] flex items-center justify-center shrink-0 transition-all group-hover:bg-[#0062d2] group-hover:border-[#0062d2] group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {space.products.map((product) => (
                    <span key={product} className="px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[11px] text-[#475569]">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

      </motion.section>

      {/* ============================================================== */}
      {/* 7. "Gold standard for lab testing" / FACILITY & MAP            */}
      {/* (Matching Video 00:15 - 00:16)                                 */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="p-8 sm:p-14 rounded-[24px] bg-white border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          
          {/* Left Text */}
          <motion.div variants={cardItem} className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-semibold text-[#0062d2] uppercase tracking-wider block">
              QUY MÔ & NĂNG LỰC CUNG ỨNG
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
              {vn('Tiêu chuẩn vàng trong')}{' '}
              <em className="font-light italic text-[#0062d2]">{vn('chế tác thiết bị gia dụng')}</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Tổ hợp nhà máy đặt tại khu công nghệ cao với chuỗi cung ứng khép kín từ gia công cơ khí chính xác, dây chuyền dán linh kiện SMT tự động đến kho vận quốc tế.
            </p>

            <button
              onClick={onOpenProfile}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062d2] hover:underline cursor-pointer"
            >
              <span>Xem báo cáo năng lực sản xuất chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Right Micro Chart & Metric Blocks (Matching Video 00:15 - 00:16) */}
          <motion.div variants={staggerContainer} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <motion.div variants={cardItem} className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#64748b] uppercase">DIỆN TÍCH NHÀ MÁY</span>
                <div className="font-serif text-3xl font-bold text-[#0f172a] mt-1">50.000m²</div>
              </div>
              <p className="text-[11px] text-[#64748b] mt-4">Tổ hợp bao gồm 4 phân xưởng công nghệ cao và trung tâm đo kiểm R&D.</p>
            </motion.div>

            <motion.div variants={cardItem} className="p-6 rounded-[20px] bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <span className="font-mono text-[10px] text-[#64748b] uppercase">SẢN PHẨM HÀNG NĂM</span>
              <div className="font-serif text-3xl font-bold text-[#0062d2]">1.2M+</div>
              
              {/* Vertical Bar Chart Widget (from video frame 00:16) */}
              <div className="h-16 flex items-end gap-1.5 pt-2">
                {[20, 32, 45, 60, 75, 88, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    variants={barGrow}
                    custom={i}
                    className="flex-1 bg-[#0062d2] rounded-t-[2px] origin-bottom"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="text-[9px] font-mono text-[#64748b] flex justify-between">
                <span>2020</span>
                <span>2026 (Hiện tại)</span>
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* ============================================================== */}
      {/* 8. FEATURE COMPARISON TABLE (Matching Video 00:17 - 00:19)      */}
      {/* Full-height Homichi Blue column with white checkmarks          */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
            {vn('Không chỉ là')}{' '}
            <em className="font-light italic text-[#0062d2]">{vn('gia công thông thường')}</em>
          </h2>
          <p className="text-xs text-[#64748b] mt-2">
            So sánh trực quan giữa mô hình hợp tác toàn diện tại Homichi và các xưởng gia công truyền thống.
          </p>
        </div>

        {/* The Exact Comparison Table from Video (00:17 - 00:19) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-[24px] border border-[#e2e8f0] bg-white overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-12 text-xs">
            
            {/* Header row */}
            <div className="col-span-6 sm:col-span-6 p-4 sm:p-6 font-serif font-bold text-sm text-[#0f172a] flex items-center bg-[#f8fafc]">
              Tiêu chuẩn năng lực
            </div>
            
            {/* Homichi Column Header (Highlight in Homichi Blue) */}
            <div className="col-span-3 sm:col-span-3 p-4 sm:p-6 bg-[#0062d2] text-white font-serif font-bold text-sm text-center flex flex-col items-center justify-center">
              <span>HOMICHI</span>
              <span className="text-[10px] font-mono font-normal opacity-90">ODM / OEM Khép kín</span>
            </div>

            {/* Standard Checkup Column Header */}
            <div className="col-span-3 sm:col-span-3 p-4 sm:p-6 text-[#64748b] font-serif font-bold text-sm text-center flex flex-col items-center justify-center bg-[#f8fafc]">
              <span>Gia công ngoài</span>
              <span className="text-[10px] font-mono font-normal">Gia công truyền thống</span>
            </div>

            {/* Table Rows */}
            {[
              { label: 'Bảo hộ bản quyền khuôn mẫu theo hợp đồng NDA', homichi: true, other: false },
              { label: 'Tự chủ 100% dây chuyền bo mạch SMT & vi xử lý IoT', homichi: true, other: false },
              { label: 'Đo kiểm âm học phòng câm tiêu chuẩn tĩnh âm < 28dB', homichi: true, other: false },
              { label: 'Bộ chứng nhận an toàn quốc tế CE / CB / RoHS 2.0', homichi: true, other: false },
              { label: 'Cung cấp 1.5% - 2% linh kiện bảo hành FOC miễn phí', homichi: true, other: false },
              { label: 'Hỗ trợ đăng kiểm hồ sơ hợp quy Quatest & dán nhãn năng lượng', homichi: true, other: true },
              { label: 'Quản lý tiến độ đơn hàng qua hệ thống ERP & MES thời gian thực', homichi: true, other: false },
              { label: 'Thời gian cung ứng mẫu thử nghiệm T1 dưới 15 ngày', homichi: true, other: false }
            ].map((row, idx) => (
              <React.Fragment key={idx}>
                {/* Feature Label */}
                <motion.div variants={tableRow} custom={idx} className={`col-span-6 sm:col-span-6 p-4 sm:p-5 border-t border-[#e2e8f0] flex items-center font-medium text-[#0f172a] ${idx % 2 === 0 ? 'bg-[#f8fafc]/60' : 'bg-white'}`}>
                  {row.label}
                </motion.div>

                {/* Homichi Highlight Column Cell (Matching Video: Blue cell with white circle check) */}
                <div className="col-span-3 sm:col-span-3 p-4 sm:p-5 bg-[#0062d2] border-t border-[#004fb0] flex items-center justify-center text-white">
                  <motion.div variants={tableRow} custom={idx} className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </motion.div>
                </div>

                {/* Standard Other Cell (Matching Video: Neutral cell with circle minus) */}
                <motion.div variants={tableRow} custom={idx} className={`col-span-3 sm:col-span-3 p-4 sm:p-5 border-t border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] ${idx % 2 === 0 ? 'bg-[#f8fafc]/60' : 'bg-white'}`}>
                  {row.other ? (
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#475569]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                      <Minus className="w-3 h-3 text-[#94a3b8]" />
                    </div>
                  )}
                </motion.div>
              </React.Fragment>
            ))}

          </div>
        </motion.div>

      </motion.section>

      {/* ============================================================== */}
      {/* 9. QUY TRÌNH HỢP TÁC ODM/OEM 6 BƯỚC                            */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0f172a] font-normal leading-tight">
            {vn('Quy trình hợp tác')}{' '}
            <em className="font-light italic text-[#0062d2]">{vn('minh bạch trong 6 bước')}</em>
          </h2>
          <p className="text-xs text-[#64748b] mt-2">
            Từ ý tưởng đến lô hàng mang thương hiệu riêng — mỗi giai đoạn đều có mốc thời gian và đầu mục bàn giao rõ ràng.
          </p>
        </div>

        <motion.ol 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WORKFLOW_STEPS.map((step) => (
            <motion.li
              variants={cardItem}
              key={step.step}
              className="group relative p-7 rounded-[24px] bg-white border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#0062d2]/50 hover:shadow-lg transition-all overflow-hidden"
            >
              <span aria-hidden className="absolute -top-5 -right-1 font-serif text-[110px] leading-none font-bold text-[#0062d2]/[0.06] select-none transition-colors group-hover:text-[#0062d2]/[0.12]">
                {step.step}
              </span>
              <div className="relative flex items-center justify-between gap-3">
                <span className="w-10 h-10 rounded-full bg-[#0062d2] text-white font-mono text-sm font-bold flex items-center justify-center shadow-md shadow-[#0062d2]/25">
                  {step.step}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f1f5f9] text-[11px] font-mono text-[#475569]">
                  <Calendar className="w-3 h-3 text-[#0062d2]" />
                  {step.duration}
                </span>
              </div>
              <h3 className="relative mt-5 font-serif text-lg font-bold text-[#0f172a] leading-snug">{step.title}</h3>
              <div className="relative text-[11px] font-mono text-[#0062d2] mt-1">{step.titleEn}</div>
              <p className="relative text-xs text-[#475569] leading-relaxed mt-3">{step.desc}</p>
            </motion.li>
          ))}
        </motion.ol>

      </motion.section>

      {/* ============================================================== */}
      {/* 10. FINAL BOTTOM RFQ CONVERSION BANNER                         */}
      {/* ============================================================== */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
        className="max-w-[1280px] mx-auto px-4 sm:px-6"
      >
        <motion.div variants={bannerReveal} className="p-10 sm:p-16 rounded-[24px] bg-[#0062d2] text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <motion.div variants={cardItem} className="space-y-3 max-w-2xl z-10 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-semibold">
              KHỞI ĐẦU DỰ ÁN CÙNG HOMICHI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              {vn('Sẵn sàng sở hữu dòng sản phẩm')}{' '}
              <em className="font-light italic text-[#cbe1ff]">{vn('mang thương hiệu riêng?')}</em>
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Nhận tư vấn giải pháp ODM/OEM chuyên sâu, phân tích cấu trúc chi phí linh kiện và bảng báo giá chi tiết trong vòng 24 giờ.
            </p>
          </motion.div>

          <motion.div variants={cardItem} className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
            <button
              onClick={() => onOpenRfq()}
              className="w-full sm:w-auto px-8 py-4 rounded-[40px] bg-white text-[#0062d2] hover:bg-slate-100 text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Yêu cầu báo giá chính thức (RFQ)
            </button>
            <button
              onClick={onOpenTour}
              className="w-full sm:w-auto px-6 py-4 rounded-[40px] bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap"
            >
              Đặt lịch tham quan nhà máy
            </button>
          </motion.div>

          {/* Decorative watermark */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[160px] font-serif select-none -mb-16 -mr-16">
            HOMICHI
          </div>

        </motion.div>
      </motion.section>

    </div>
    </MotionConfig>
  );
};
