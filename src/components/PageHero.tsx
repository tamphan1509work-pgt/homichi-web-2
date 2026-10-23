import React from 'react';
import { motion } from 'framer-motion';
import { vn } from '../utils/typography';

export const pageAsset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  /** Path under /assets; omit to use the dark backdrop with `aside` content */
  image?: string;
  imagePosition?: string;
  /** Optional right-hand content (e.g. product renders) and actions under the copy */
  aside?: React.ReactNode;
  actions?: React.ReactNode;
}

// Photo header shared by the menu pages: full-bleed image with a left-to-right
// scrim so the copy stays readable on any photo.
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  accent,
  description,
  image,
  imagePosition = 'object-center',
  aside,
  actions,
}) => (
  <div className="relative min-h-[380px] sm:min-h-[440px] rounded-[28px] overflow-hidden bg-[#070b14] text-white shadow-xl flex items-end">
    {image && (
      <motion.img
        src={pageAsset(image)}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    )}
    {!image && (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,98,210,0.35),transparent_60%)]" />
    )}
    <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/90 via-[#060b14]/55 to-[#060b14]/5" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/70 via-transparent to-transparent" />

    <div className="relative z-10 w-full p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="max-w-2xl space-y-4"
      >
        <span className="font-mono text-xs font-semibold text-[#93c5fd] uppercase tracking-wider block">{eyebrow}</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-white">
          {vn(title)}{' '}
          <em className="font-light italic text-[#93c5fd]">{vn(accent)}</em>
        </h1>
        <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">{description}</p>
        {actions && <div className="pt-2">{actions}</div>}
      </motion.div>
      {aside}
    </div>
  </div>
);
