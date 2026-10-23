import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { CapabilitiesView } from './views/CapabilitiesView';
import { ProductsView } from './views/ProductsView';
import { ProjectsView } from './views/ProjectsView';
import { NewsView } from './views/NewsView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RfqModal } from './components/RfqModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { FactoryTourModal } from './components/FactoryTourModal';
import { CertModal } from './components/CertModal';
import { SearchModal } from './components/SearchModal';
import { CookieBanner } from './components/CookieBanner';
import { Product } from './data/products';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqInitialCategory, setRfqInitialCategory] = useState<string | undefined>(undefined);
  const [rfqInitialModel, setRfqInitialModel] = useState<string | undefined>(undefined);

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Scroll to top when changing tab
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (category?: string, model?: string) => {
    setRfqInitialCategory(category);
    setRfqInitialModel(model);
    setRfqOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
        
        {/* Navigation Header adhering strictly to Top Bar Contract */}
        <Header
          currentTab={currentTab}
          setCurrentTab={handleTabChange}
          onOpenRfq={() => handleOpenRfq()}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenProfile={() => setProfileModalOpen(true)}
        />

        {/* Main Content Area with subtle framer-motion entry animations */}
        <main className="flex-1 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentTab === 'home' && (
                <HomeView
                  setCurrentTab={handleTabChange}
                  onOpenRfq={handleOpenRfq}
                  onOpenProfile={() => setProfileModalOpen(true)}
                  onOpenTour={() => setTourModalOpen(true)}
                  onOpenCerts={() => setCertModalOpen(true)}
                  onViewProductDetails={(p: Product) => setSelectedProduct(p)}
                />
              )}

              {currentTab === 'about' && (
                <AboutView
                  onOpenRfq={() => handleOpenRfq()}
                  onOpenProfile={() => setProfileModalOpen(true)}
                  onOpenTour={() => setTourModalOpen(true)}
                />
              )}

              {currentTab === 'services' && (
                <ServicesView
                  onOpenRfq={handleOpenRfq}
                  onOpenProfile={() => setProfileModalOpen(true)}
                />
              )}

              {currentTab === 'capabilities' && (
                <CapabilitiesView
                  onOpenRfq={() => handleOpenRfq()}
                  onOpenProfile={() => setProfileModalOpen(true)}
                  onOpenTour={() => setTourModalOpen(true)}
                  onOpenCerts={() => setCertModalOpen(true)}
                />
              )}

              {currentTab === 'products' && (
                <ProductsView
                  onViewProductDetails={(p) => setSelectedProduct(p)}
                  onRequestQuote={handleOpenRfq}
                />
              )}

              {currentTab === 'projects' && (
                <ProjectsView
                  onOpenRfq={() => handleOpenRfq()}
                  onOpenProfile={() => setProfileModalOpen(true)}
                />
              )}

              {currentTab === 'news' && (
                <NewsView
                  onOpenRfq={() => handleOpenRfq()}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Comprehensive Sitemap-Organized Footer */}
        <Footer
          setCurrentTab={handleTabChange}
          onOpenRfq={() => handleOpenRfq()}
          onOpenProfile={() => setProfileModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
          onOpenCerts={() => setCertModalOpen(true)}
        />

        {/* Interactive Modals */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(p) => handleOpenRfq(p.category, p.model)}
        />

        <RfqModal
          isOpen={rfqOpen}
          onClose={() => setRfqOpen(false)}
          initialCategory={rfqInitialCategory}
          initialModel={rfqInitialModel}
        />

        <CompanyProfileModal
          isOpen={profileModalOpen}
          onClose={() => setProfileModalOpen(false)}
          onOpenRfq={() => handleOpenRfq()}
        />

        <FactoryTourModal
          isOpen={tourModalOpen}
          onClose={() => setTourModalOpen(false)}
          onOpenRfq={() => handleOpenRfq()}
        />

        <CertModal
          isOpen={certModalOpen}
          onClose={() => setCertModalOpen(false)}
        />

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        <CookieBanner />

      </div>
    </LanguageProvider>
  );
}
