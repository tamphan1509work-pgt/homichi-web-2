import React, { useState } from 'react';
import { Search, Globe, Menu, X, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FacebookIcon } from './FacebookIcon';
import { SOCIAL_LINKS } from '../data/companyInfo';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenRfq: (initialCategory?: string, initialModel?: string) => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenRfq,
  onOpenSearch,
  onOpenProfile,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'services', label: 'Dịch vụ ODM/OEM' },
    { id: 'capabilities', label: 'Năng lực' },
    { id: 'products', label: 'Sản phẩm' },
    { id: 'projects', label: 'Dự án & Đối tác' },
    { id: 'news', label: 'Tin tức' },
    { id: 'about', label: 'Về Homichi' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#004fb0] text-white text-xs py-2 px-4 border-b border-[#003d8a]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 tracking-tight overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="font-mono text-[10px] bg-black/25 px-2 py-0.5 rounded-full uppercase tracking-wider text-white">
              B2B ODM / OEM
            </span>
            <span>Tổ hợp sản xuất gia dụng thông minh Homichi đạt chuẩn ISO 9001:2015 & CE/RoHS.</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <button
              onClick={onOpenProfile}
              className="hover:underline flex items-center gap-1 cursor-pointer transition-opacity text-white/90 hover:text-white"
            >
              <FileText className="w-3 h-3" />
              <span>Tải hồ sơ năng lực 2026</span>
            </button>
            <span className="text-white/40">|</span>
            <span className="font-mono text-white/90">Hotline: +84 (0) 24 3888 6688</span>
            <span className="text-white/40">|</span>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Homichi trên Facebook"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Top Bar - Clean white canvas with crisp slate border */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] transition-all">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-3 xl:gap-6">
          
          {/* Zone 1: Homichi Logo using official logo image */}
          <button
            onClick={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Homichi Trang chủ"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/homichi_logo_transparent.png`}
              alt="Homichi Logo"
              className="h-6 sm:h-8 w-auto object-contain"
            />
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden xl:flex items-center gap-5 text-[14px] font-medium text-[#334155]">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#0062d2] font-semibold' : 'text-[#334155] hover:text-[#0062d2]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0062d2] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Utilities & 1 Primary Action */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-[#334155] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
              title="Tìm kiếm sản phẩm hoặc mã model"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#0f172a]" />
            </button>

            {/* Language switch */}
            <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-full border border-[#e2e8f0] bg-[#f8fafc] text-[#334155] hover:border-[#0062d2] transition-colors cursor-pointer"
              title="Chuyển đổi ngôn ngữ VI / EN"
            >
              <Globe className="w-3 h-3 text-[#0062d2]" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>

            {/* Ghost action for partners */}
            <button
              onClick={onOpenProfile}
              className="hidden md:inline-flex xl:hidden px-3 py-2 text-xs font-medium text-[#0f172a] hover:text-[#0062d2] hover:bg-[#f1f5f9] rounded-[40px] transition-colors cursor-pointer"
            >
              Hồ sơ năng lực
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenRfq()}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0062d2] hover:bg-[#004fb0] rounded-[40px] shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
            >
              <span className="hidden min-[400px]:inline">Yêu cầu báo giá</span>
              <span className="min-[400px]:hidden">Báo giá</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#0f172a] hover:bg-[#f1f5f9] rounded-full transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#e2e8f0] px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center justify-between py-2.5 text-base text-left border-b border-[#f1f5f9] ${
                    currentTab === item.id ? 'text-[#0062d2] font-semibold' : 'text-[#0f172a]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                </button>
              ))}
            </nav>
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0062d2] rounded-[40px] cursor-pointer"
              >
                Yêu cầu báo giá (RFQ)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="w-full py-2.5 text-center text-sm font-medium text-[#0f172a] bg-[#f8fafc] border border-[#e2e8f0] rounded-[40px] cursor-pointer"
              >
                Tải Hồ sơ năng lực (Company Profile)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
