'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/config/pricing';

export const OmniSanctuary: React.FC = () => {
  return (
    <section className="relative w-full my-16 py-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2E5E4E] via-[#1F4A3C] to-[#0F221B] text-white font-body select-none">
      {/* Background Decorative Radial Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#529983]/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Title */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-gold-400 font-display text-xs font-semibold uppercase tracking-[0.2em]">
          Holistic Sanctuary
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
          Welcome to KayaSadhak Sanctuary
        </h2>
        <p className="text-sm sm:text-base text-gray-300/85 max-w-xl mx-auto">
          Harmonizing authentic yogic wisdom with modern clinical precision for at-home wellness.
        </p>
      </div>

      {/* Interactive 3-Column Layout (Left Feature Nodes | Center Glowing Mandala | Right Action Node) */}
      <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: 3 Feature Nodes */}
        <div className="lg:col-span-4 space-y-10 text-left">
          
          {/* Node 1: Classes/Schedule */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold-500/20 group-hover:border-brand-gold-400 transition-all duration-300">
              {/* Outline Mandala Icon */}
              <svg className="w-7 h-7 text-brand-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <path d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-heading font-semibold text-lg text-white tracking-wider uppercase border-b border-white/20 pb-1 inline-block">
                CLASSES & SCHEDULE
              </h3>
              <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed">
                Flexible morning & evening 1-on-1 private home schedules matched to your daily routine in Delhi NCR & Tricity.
              </p>
            </div>
          </div>

          {/* Node 2: Need to Know */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold-500/20 group-hover:border-brand-gold-400 transition-all duration-300">
              {/* Zen Stones Outline Icon */}
              <svg className="w-7 h-7 text-brand-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="12" cy="17" rx="7" ry="3" />
                <ellipse cx="12" cy="11" rx="5" ry="2.5" />
                <ellipse cx="12" cy="6" rx="3" ry="1.8" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-semibold text-lg text-white tracking-wider uppercase border-b border-white/20 pb-1 inline-block">
                NEED TO KNOW
              </h3>
              <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed">
                All mats, props & copper water vessels provided. Zero travel fees across all localities in Delhi NCR & Tricity.
              </p>
              <div className="pt-1">
                <Link
                  href="/about-us"
                  className="inline-block px-4 py-1.5 rounded-full border border-white/40 hover:border-brand-gold-400 text-xs font-display font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          {/* Node 3: Pricing */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold-500/20 group-hover:border-brand-gold-400 transition-all duration-300">
              {/* Lotus Outline Icon */}
              <svg className="w-7 h-7 text-brand-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c-2 4-6 6-10 6 2 4 6 7 10 10 4-3 8-6 10-10-4 0-8-2-10-6z" />
                <path d="M12 8c-1.5 2.5-4 4-7 4 1.5 2.5 4 4.5 7 6.5 3-2 5.5-4 7-6.5-3 0-5.5-1.5-7-4z" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-heading font-semibold text-lg text-white tracking-wider uppercase border-b border-white/20 pb-1 inline-block">
                TRANSPARENT PRICING
              </h3>
              <p className="text-xs sm:text-sm text-gray-300/80 leading-relaxed">
                Clear Silver (₹500), Gold (₹750) & Platinum (₹1,000) rates with 2 family members included at no extra cost.
              </p>
            </div>
          </div>

        </div>

        {/* Center Column: Glowing Illuminated Lotus & Yogi Silhouette Mandala */}
        <div className="lg:col-span-4 flex items-center justify-center relative my-6 lg:my-0">
          <div className="relative w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
            
            {/* Outer Glowing Pulsing Lotus Ring */}
            <div className="absolute inset-0 rounded-full border border-brand-gold-400/35 bg-radial from-brand-gold-500/25 via-transparent to-transparent animate-pulse" />
            
            {/* Smoothly Rotating Golden Sacred Geometry Chakra & Mandala Wheel */}
            <svg className="absolute inset-0 w-full h-full text-brand-gold-400/50 animate-[spin_45s_linear_infinite] filter drop-shadow-[0_0_20px_rgba(192,138,62,0.5)]" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 3" />
              <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 2" />
              
              {/* 12 Radiating Chakra Rays & Sacred Lotus Petals */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 100 100)`}>
                  <path
                    d="M100 12 C108 45, 108 45, 100 78 C92 45, 92 45, 100 12"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    fill="none"
                  />
                  <circle cx="100" cy="8" r="1.5" fill="currentColor" />
                </g>
              ))}
            </svg>

            {/* Inner Radiant Aura Circle */}
            <div className="absolute inset-4 sm:inset-6 rounded-full bg-radial from-brand-gold-500/30 via-[#529983]/30 to-transparent blur-md" />

            {/* The Masterpiece Yogi & Luminous Lotus Bloom Artwork */}
            <img
              src="/images/sanctuary_yogi_lotus.webp"
              alt="KayaSadhak Sacred Yogi Lotus Mandala"
              className="relative z-10 w-[230px] h-[230px] sm:w-[340px] sm:h-[340px] lg:w-[410px] lg:h-[410px] object-contain drop-shadow-[0_0_30px_rgba(192,138,62,0.7)] rounded-full transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right Column: Get Started Action Node */}
        <div className="lg:col-span-4 text-left space-y-4 sm:space-y-6 lg:pl-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white tracking-wider uppercase border-b border-white/20 pb-1.5 inline-block">
              GET STARTED
            </h3>
            <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">
              Contact our sadhak matching team to tailor your personal 1-on-1 home yoga experience. We will match you with a certified male or female instructor in your locality.
            </p>
          </div>

          <div className="pt-1 sm:pt-2">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to join the KayaSadhak Sanctuary and book a 1-on-1 home yoga trial.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-brand-gold-400 text-brand-green-900 font-display font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:scale-[0.98]"
            >
              <span>JOIN SANCTUARY NOW</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
