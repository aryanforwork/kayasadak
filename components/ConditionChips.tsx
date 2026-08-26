'use client';

import React from 'react';
import Link from 'next/link';
import { KayaLeafMotif } from './KayaLeafMotif';
import {
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
  FaHeart,
  FaFemale,
  FaWalking,
  FaChild,
  FaFire,
  FaLungs,
  FaBrain,
  FaSpa,
} from 'react-icons/fa';

export const CONDITIONS = [
  {
    name: 'Back Pain & Sciatica Relief',
    path: '/yoga-for-conditions/back-pain',
    icon: FaLungs,
  },
  {
    name: 'PCOD / PCOS Care',
    path: '/yoga-for-conditions/pcod-pcos',
    icon: FaFemale,
  },
  {
    name: 'Thyroid Management',
    path: '/yoga-for-conditions/thyroid',
    icon: FaSpa,
  },
  {
    name: 'Weight Loss & Fat Burn',
    path: '/yoga-for-conditions/weight-loss',
    icon: FaFire,
  },
  {
    name: 'Prenatal & Maternity Care',
    path: '/yoga-for-conditions/prenatal-yoga',
    icon: FaChild,
  },
  {
    name: 'Anxiety & Insomnia Relief',
    path: '/yoga-for-conditions/anxiety-insomnia',
    icon: FaBrain,
  },
  {
    name: 'Senior Citizen Mobility',
    path: '/yoga-for-conditions/senior-citizen-yoga',
    icon: FaWalking,
  },
];

export const ConditionChips: React.FC = () => {
  const row1 = CONDITIONS.slice(0, 4);
  const row2 = CONDITIONS.slice(4, 7);

  return (
    <section className="w-full max-w-[1600px] mx-auto my-16 select-none font-body">
      <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden text-center space-y-10">
        
        {/* Background Spiritual Sketch Overlay */}
        <img
          src="/images/spiritual_yoga_sketch_bg.jpg"
          alt="Spiritual Background Sketch"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.25] pointer-events-none mix-blend-multiply"
        />

        {/* Soft Radial Cream Overlay for Contrast */}
        <div className="absolute inset-0 bg-radial from-[#F7F3EA]/70 via-[#F7F3EA]/40 to-transparent pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3.5 relative z-10">
          
          {/* Top Golden Lotus */}
          <div className="flex items-center justify-center gap-3 text-[#C08A3E]">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C08A3E]/80" />
            <KayaLeafMotif size={26} color="#C08A3E" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C08A3E]/80" />
          </div>

          {/* Tag */}
          <div className="font-display font-bold text-xs sm:text-sm tracking-[0.25em] text-[#B37B2E] uppercase">
            ✦ PERSONALIZED CARE FOR EVERY BODY ✦
          </div>

          {/* Main Title */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#16302B] tracking-tight leading-[1.14]">
            What Health Goal or Condition Are You Looking to Address?
          </h2>

          {/* Sub-description */}
          <p className="font-body text-sm sm:text-base text-[#5A574F] max-w-xl mx-auto leading-relaxed">
            Choose your concern and we'll connect you with the right yoga, ayurveda & wellness experts for your journey.
          </p>

        </div>

        {/* 7 Interactive Condition Pill Cards */}
        <div className="space-y-5 relative z-10">
          
          {/* Row 1: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {row1.map((cond) => {
              const IconComponent = cond.icon;
              return (
                <Link
                  key={cond.path}
                  href={cond.path}
                  className="bg-[#FAF6F0]/95 backdrop-blur-sm rounded-2xl border border-[#E5DEC9] p-4 sm:p-5 flex items-center justify-between gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-12 h-12 rounded-full bg-[#EFE8DC] border border-[#E0D7C4] flex items-center justify-center flex-shrink-0 text-[#B37B2E] group-hover:bg-[#16302B] group-hover:text-[#E5C384] transition-colors shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-sm sm:text-base text-[#16302B] group-hover:text-[#B37B2E] transition-colors leading-tight">
                      {cond.name}
                    </span>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-[#C08A3E] flex-shrink-0 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              );
            })}
          </div>

          {/* Row 2: 3 Cards (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {row2.map((cond) => {
              const IconComponent = cond.icon;
              return (
                <Link
                  key={cond.path}
                  href={cond.path}
                  className="bg-[#FAF6F0]/95 backdrop-blur-sm rounded-2xl border border-[#E5DEC9] p-4 sm:p-5 flex items-center justify-between gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-12 h-12 rounded-full bg-[#EFE8DC] border border-[#E0D7C4] flex items-center justify-center flex-shrink-0 text-[#B37B2E] group-hover:bg-[#16302B] group-hover:text-[#E5C384] transition-colors shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-sm sm:text-base text-[#16302B] group-hover:text-[#B37B2E] transition-colors leading-tight">
                      {cond.name}
                    </span>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-[#C08A3E] flex-shrink-0 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              );
            })}
          </div>

        </div>

        {/* Bottom Trust Strip (Matching Reference Image 1:1) */}
        <div className="relative z-10 pt-4">
          <div className="bg-[#F0EBE0]/90 border border-[#E2D8C5] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-6 shadow-sm text-left">
            
            {/* Left Main Badge */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0 shadow-md">
                <KayaLeafMotif size={24} color="#E5C384" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#16302B]">
                  Holistic Care. Real Results.
                </h4>
                <p className="font-body text-xs text-[#5A574F]">
                  Rooted in Yoga. Backed by Ayurveda. Guided by Experts.
                </p>
              </div>
            </div>

            {/* Right 3 Features */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="font-heading font-bold text-xs text-[#16302B]">
                    Expert Guidance
                  </div>
                  <div className="font-body text-[11px] text-[#5A574F]">
                    Verified Professionals
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
                  <FaLeaf className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="font-heading font-bold text-xs text-[#16302B]">
                    Natural Healing
                  </div>
                  <div className="font-body text-[11px] text-[#5A574F]">
                    Holistic & Safe
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
                  <FaHeart className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-left">
                  <div className="font-heading font-bold text-xs text-[#16302B]">
                    Personalized Plans
                  </div>
                  <div className="font-body text-[11px] text-[#5A574F]">
                    For Lasting Results
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
