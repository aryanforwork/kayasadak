'use client';

import React from 'react';
import Link from 'next/link';
import { KayaLeafMotif } from './KayaLeafMotif';
import {
  FaShieldAlt,
  FaUserCheck,
  FaSpa,
  FaHome,
  FaUsers,
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
  FaQuoteLeft,
} from 'react-icons/fa';

export const FounderNote: React.FC = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-12 font-body select-none">
      <div className="relative w-full bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        
        {/* Subtle Decorative Arch Corner Accent */}
        <div className="absolute top-0 left-0 w-36 h-36 border-t-2 border-l-2 border-brand-gold-500/20 rounded-tl-[32px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Founder Arch Portrait & Dark Green Floating Badge */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] sm:h-[500px]">
              
              {/* Arch Background Container */}
              <div className="w-full h-full rounded-t-[180px] sm:rounded-t-[200px] rounded-b-3xl bg-[#EDE5D5] border border-[#D6CBAE] overflow-hidden relative shadow-lg flex items-end justify-center">
                
                {/* Subtle Background Sacred Geometry Line Art */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                  <svg className="w-80 h-80 text-brand-green-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="35" />
                    <circle cx="50" cy="50" r="25" />
                    <path d="M50 5v90M5 50h90" />
                  </svg>
                </div>

                {/* Founder Photorealistic Portrait */}
                <img
                  src="/images/kayasadak-founder.png"
                  alt="Nivil Chaudhary - Founder & Lead Sadhak"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating Dark Green Badge (Bottom Left) */}
              <div className="absolute bottom-4 left-4 sm:-bottom-2 sm:-left-3 bg-[#16302B] text-white p-5 rounded-2xl border border-brand-gold-500/40 shadow-2xl z-20 max-w-[240px] sm:max-w-[260px] text-left">
                <div className="font-serif italic text-2xl text-brand-gold-400 font-normal leading-none mb-1">
                  Nivil
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white tracking-widest uppercase">
                  NIVIL CHAUDHARY
                </div>
                <div className="font-body text-xs text-brand-gold-300 font-medium mt-0.5">
                  Founder & Lead Sadhak
                </div>
                <div className="font-body text-[11px] text-gray-300/90 mt-1 border-t border-white/10 pt-1">
                  12+ Years of Transforming Lives
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Statement, Feature Pills Grid, and Stats Footer */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
              <KayaLeafMotif size={14} color="#C08A3E" />
              <span>FOUNDER'S COMMITMENT</span>
            </div>

            {/* Main Title */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#16302B] leading-[1.18] tracking-tight">
              A Personal Note from Founder Nivil Chaudhary
            </h2>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-brand-gold-500/60 rounded-full" />

            {/* Quote Block */}
            <div className="flex items-start gap-3 bg-[#FAF6F0] pt-1">
              <FaQuoteLeft className="w-8 h-8 text-brand-gold-500/70 flex-shrink-0 mt-1" />
              <p className="font-body text-sm sm:text-base text-[#3A3832] leading-relaxed italic">
                "KayaSadhak was founded to restore authentic therapeutic rigor and transparent qualification standards to home yoga practice. Every instructor sent to your residence has undergone rigorous credential auditing across our Platinum, Gold, and Silver tiers."
              </p>
            </div>

            {/* 4 Feature Items Grid (Icon + Title + Subtitle) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#D9CDAE] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <FaShieldAlt className="w-4 h-4 text-brand-gold-600" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-heading font-bold text-xs text-[#16302B] tracking-wide uppercase">
                    AUTHENTIC & EVIDENCE-BASED
                  </div>
                  <div className="font-body text-xs text-neutral-grey leading-tight">
                    Rooted in classical wisdom validated by modern science.
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#D9CDAE] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <FaUserCheck className="w-4 h-4 text-brand-gold-600" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-heading font-bold text-xs text-[#16302B] tracking-wide uppercase">
                    TRUSTED INSTRUCTORS
                  </div>
                  <div className="font-body text-xs text-neutral-grey leading-tight">
                    Rigorous background checks & tiered certification process.
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#D9CDAE] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <FaSpa className="w-4 h-4 text-brand-gold-600" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-heading font-bold text-xs text-[#16302B] tracking-wide uppercase">
                    HOLISTIC WELLNESS
                  </div>
                  <div className="font-body text-xs text-neutral-grey leading-tight">
                    Yoga, Ayurveda & Panchakarma for complete well-being.
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#D9CDAE] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <FaHome className="w-4 h-4 text-brand-gold-600" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-heading font-bold text-xs text-[#16302B] tracking-wide uppercase">
                    AT YOUR HOME
                  </div>
                  <div className="font-body text-xs text-neutral-grey leading-tight">
                    Bringing the wisdom of wellness directly to you.
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Divider with Diamond Motif */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full border-t border-[#E5DEC9]" />
              <span className="absolute bg-[#FAF6F0] px-3 text-brand-gold-600 text-xs font-bold">
                ◈
              </span>
            </div>

            {/* Bottom Stats & Signature Footer Strip Container */}
            <div className="bg-[#EFE8DA]/80 border border-[#E0D5BD] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/80 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center flex-shrink-0">
                  <FaUsers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                    WELLNESS EXPERTISE
                  </div>
                  <div className="font-heading font-bold text-lg sm:text-xl text-[#16302B] leading-tight">
                    12+ <span className="font-body text-xs font-normal text-neutral-grey">Years Exp</span>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/80 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                    LIVES TRANSFORMED
                  </div>
                  <div className="font-heading font-bold text-lg sm:text-xl text-[#16302B] leading-tight">
                    5000+ <span className="font-body text-xs font-normal text-neutral-grey">Clients</span>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/80 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center flex-shrink-0">
                  <FaCertificate className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                    CERTIFICATIONS
                  </div>
                  <div className="font-heading font-bold text-lg sm:text-xl text-[#16302B] leading-tight">
                    20+ <span className="font-body text-xs font-normal text-neutral-grey">Credentials</span>
                  </div>
                </div>
              </div>

              {/* Founder Cursive Signature Block */}
              <div className="pl-2 border-l border-[#D9CDAE] hidden md:block">
                <div className="font-serif italic text-lg text-[#16302B] font-semibold leading-tight">
                  Nivil Chaudhary
                </div>
                <div className="font-body text-[10px] text-neutral-grey">
                  Founder & Lead Sadhak
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/about-us"
                  className="px-5 py-3 bg-[#16302B] hover:bg-brand-green-700 text-white font-body font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 group/btn"
                >
                  <span>Read Founder Story & Tie-Up Credentials</span>
                  <FaArrowRight className="w-3 h-3 text-brand-gold-400 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
