import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { vi: 'Trang chủ', en: 'Home' },
  'nav.about': { vi: 'Về Homichi', en: 'About' },
  'nav.services': { vi: 'Dịch vụ ODM/OEM', en: 'ODM/OEM Services' },
  'nav.capabilities': { vi: 'Năng lực sản xuất', en: 'Capabilities' },
  'nav.products': { vi: 'Sản phẩm', en: 'Products' },
  'nav.projects': { vi: 'Dự án & Đối tác', en: 'Projects & Partners' },
  'nav.news': { vi: 'Tin tức & Triển lãm', en: 'Insights' },
  'nav.contact': { vi: 'Liên hệ', en: 'Contact' },
  'nav.rfq': { vi: 'Yêu cầu báo giá', en: 'Request RFQ' },
  'nav.profile': { vi: 'Hồ sơ năng lực', en: 'Company Profile' },

  // Hero
  'hero.eyebrow': {
    vi: 'TỔ HỢP SẢN XUẤT ĐỒ GIA DỤNG THÔNG MINH · ODM / OEM',
    en: 'SMART APPLIANCE MANUFACTURING COMPLEX · ODM / OEM'
  },
  'hero.title_part1': { vi: 'Thiết bị gia dụng thông minh cho ', en: 'Smart home appliances for ' },
  'hero.title_part2': { vi: 'cuộc sống tinh tế', en: 'refined modern living' },
  'hero.subtitle': {
    vi: 'Homichi đồng hành cùng các thương hiệu gia dụng hàng đầu phát triển các dòng sản phẩm tối giản, chuẩn mực kỹ thuật cao, tiết kiệm năng lượng và tối ưu trải nghiệm người dùng.',
    en: 'Homichi partners with forward-thinking home brands to engineer minimalist, energy-efficient, and impeccably crafted smart home appliances.'
  },
  'hero.cta_rfq': { vi: 'Gửi yêu cầu báo giá (RFQ)', en: 'Request a Quote (RFQ)' },
  'hero.cta_profile': { vi: 'Tải hồ sơ năng lực', en: 'Download Company Profile' },
  'hero.cta_catalog': { vi: 'Khám phá sản phẩm', en: 'Explore Products' },

  // Stats
  'stat.area': { vi: 'Diện tích nhà máy', en: 'Factory Area' },
  'stat.lines': { vi: 'Dây chuyền tự động', en: 'Automated Lines' },
  'stat.capacity': { vi: 'Công suất xuất xưởng/năm', en: 'Annual Capacity' },
  'stat.standards': { vi: 'Tiêu chuẩn quốc tế', en: 'Global Certifications' },

  // Models
  'models.title': { vi: 'Ba mô hình hợp tác', en: 'Three collaboration models' },
  'models.subtitle': {
    vi: 'Linh hoạt đáp ứng theo chiến lược tăng trưởng và mục tiêu đưa sản phẩm ra thị trường của thương hiệu đối tác.',
    en: 'Flexible engagement models designed around your brand growth strategy and time-to-market goals.'
  },

  // Common
  'common.view_details': { vi: 'Xem chi tiết', en: 'View details' },
  'common.request_sample': { vi: 'Báo giá mẫu này', en: 'Inquire this model' },
  'common.close': { vi: 'Đóng', en: 'Close' },
  'common.search_placeholder': { vi: 'Tìm theo tên sản phẩm hoặc mã model (vd: LIO-666V, LV-200)...', en: 'Search by product name or model code (e.g. LIO-666V, LV-200)...' },
  'common.all_categories': { vi: 'Tất cả ngành hàng', en: 'All Categories' }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('homichi_lang') as Language;
    return saved === 'en' ? 'en' : 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('homichi_lang', lang);
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
