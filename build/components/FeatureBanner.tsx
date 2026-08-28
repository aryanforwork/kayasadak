'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/config/pricing';
import { KayaLeafMotif } from './KayaLeafMotif';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export const FeatureBanner: React.FC = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14 font-body select-none">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] flex items-center">
        {/* Sanctuary Studio Background Image */}
        <img
          src="/images/feature_banner_sanctuary.webp"
          alt="KayaSadhak Sanctuary Studio"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Content Container */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#1F4A3C]/80 backdrop-blur-md border border-brand-gold-500/40 px-4 py-1.5 rounded-full shadow-lg">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span className="font-display font-semibold text-xs text-brand-gold-500 tracking-widest uppercase">
              Sanctuary Experience
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.15] tracking-tight drop-shadow-md">
            Feel the Balance, <br className="hidden sm:inline" />
            Love the Transformation
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-gray-200/90 leading-relaxed max-w-xl drop-shadow">
            KayaSadhak challenges you to restore physical vitality, lumbar spinal alignment, and mental clarity. With verified Silver, Gold & Platinum teachers — our sessions are commitments to your best self.
          </p>

          {/* Dual CTAs (Matching Screenshot 2 layout) */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to book a free home trial session.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 group"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>BOOK HOME TRIAL</span>
            </a>

            <Link
              href="/pricing"
              className="px-7 py-3.5 bg-black/40 hover:bg-white/10 backdrop-blur-md border border-white/40 hover:border-brand-gold-500 text-white font-display font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 group/btn"
            >
              <span>VIEW PRICING MATRIX</span>
              <FaArrowRight className="w-3 h-3 text-brand-gold-500 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
