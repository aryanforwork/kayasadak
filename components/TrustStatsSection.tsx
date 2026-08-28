'use client';

import React from 'react';
import { KayaLeafMotif } from './KayaLeafMotif';
import { FaAward, FaMapMarkerAlt, FaUniversity, FaUsers } from 'react-icons/fa';

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-3 sm:px-8 lg:px-12 my-10 sm:my-16 select-none font-body">
      <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[44px] p-4 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden text-center space-y-8 sm:space-y-12">
        
        {/* Spiritual Yoga & Sacred Geometry Sketch Background Image */}
        <img
          src="/images/spiritual_yoga_sketch_bg.webp"
          alt="Spiritual Yoga Mandala Sketch Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.40] pointer-events-none mix-blend-multiply z-0"
          loading="lazy"
          decoding="async"
        />

        {/* Soft Radial Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-radial from-[#F7F3EA]/60 via-[#F7F3EA]/30 to-transparent pointer-events-none z-0" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5 relative z-10">
          
          {/* Top Golden Lotus & Flourish Lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#C08A3E]">
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#C08A3E]/80" />
            <KayaLeafMotif size={22} color="#C08A3E" />
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#C08A3E]/80" />
          </div>

          {/* Subtitle Tag */}
          <div className="font-display font-bold text-[10px] sm:text-xs tracking-[0.25em] text-[#B37B2E] uppercase">
            OUR REACH & COMMITMENT
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-[50px] text-[#16302B] tracking-tight leading-[1.15]">
            Trusted. Experienced. Transformative.
          </h2>

          {/* Diamond Accent */}
          <div className="flex items-center justify-center text-[#C08A3E] text-xs pt-0.5">
            ◆
          </div>

          {/* Sub-description */}
          <p className="font-body text-xs sm:text-base text-[#4A4842] max-w-xl mx-auto leading-relaxed font-medium">
            Over a decade of spreading authentic Yoga, Ayurveda & Panchakarma across homes and communities.
          </p>

        </div>

        {/* 4 Luxury Stat Cards (2x2 Grid on Mobile, 4-col on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 relative z-10">
          
          {/* Card 1: 12+ Years */}
          <div className="bg-[#FAF6F0]/95 backdrop-blur-md rounded-2xl sm:rounded-[28px] border border-[#E5DEC9] p-3.5 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[210px] sm:min-h-[330px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-xs group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaAward className="w-5 h-5 sm:w-8 sm:h-8 text-[#16302B]" />
              </div>
              <div className="absolute -bottom-2 bg-[#FAF6F0] px-1.5 py-0.5 rounded-full border border-[#C08A3E]/50">
                <KayaLeafMotif size={10} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-0.5 my-auto">
              <div className="font-heading font-bold text-xl sm:text-3xl lg:text-[36px] text-[#16302B] leading-tight">
                12+ Years
              </div>
              <div className="font-display font-bold text-[9px] sm:text-xs tracking-[0.18em] text-[#B37B2E] uppercase">
                OF EXCELLENCE
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-6 sm:w-10 h-[1px] bg-[#C08A3E]/40 my-1.5 sm:my-3" />

            {/* Description */}
            <p className="font-body text-[10px] sm:text-xs text-[#5A574F] leading-snug line-clamp-2 sm:line-clamp-none max-w-[240px] mx-auto font-medium">
              Authentic home Yoga, Ayurveda & holistic wellness with integrity.
            </p>

          </div>

          {/* Card 2: 20 Hubs */}
          <div className="bg-[#FAF6F0]/95 backdrop-blur-md rounded-2xl sm:rounded-[28px] border border-[#E5DEC9] p-3.5 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[210px] sm:min-h-[330px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-xs group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaMapMarkerAlt className="w-5 h-5 sm:w-8 sm:h-8 text-[#16302B]" />
              </div>
              <div className="absolute -bottom-2 bg-[#FAF6F0] px-1.5 py-0.5 rounded-full border border-[#C08A3E]/50">
                <KayaLeafMotif size={10} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-0.5 my-auto">
              <div className="font-heading font-bold text-xl sm:text-3xl lg:text-[36px] text-[#16302B] leading-tight">
                20 Hubs
              </div>
              <div className="font-display font-bold text-[9px] sm:text-xs tracking-[0.18em] text-[#B37B2E] uppercase">
                ACROSS INDIA
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-6 sm:w-10 h-[1px] bg-[#C08A3E]/40 my-1.5 sm:my-3" />

            {/* Description */}
            <p className="font-body text-[10px] sm:text-xs text-[#5A574F] leading-snug line-clamp-2 sm:line-clamp-none max-w-[240px] mx-auto font-medium">
              Presence across Delhi NCR & Tricity ensures quick matching.
            </p>

          </div>

          {/* Card 3: 9 Centers */}
          <div className="bg-[#FAF6F0]/95 backdrop-blur-md rounded-2xl sm:rounded-[28px] border border-[#E5DEC9] p-3.5 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[210px] sm:min-h-[330px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-xs group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaUniversity className="w-5 h-5 sm:w-8 sm:h-8 text-[#16302B]" />
              </div>
              <div className="absolute -bottom-2 bg-[#FAF6F0] px-1.5 py-0.5 rounded-full border border-[#C08A3E]/50">
                <KayaLeafMotif size={10} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-0.5 my-auto">
              <div className="font-heading font-bold text-xl sm:text-3xl lg:text-[36px] text-[#16302B] leading-tight">
                9 Centers
              </div>
              <div className="font-display font-bold text-[9px] sm:text-xs tracking-[0.18em] text-[#B37B2E] uppercase">
                FOR WELLNESS
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-6 sm:w-10 h-[1px] bg-[#C08A3E]/40 my-1.5 sm:my-3" />

            {/* Description */}
            <p className="font-body text-[10px] sm:text-xs text-[#5A574F] leading-snug line-clamp-2 sm:line-clamp-none max-w-[240px] mx-auto font-medium">
              Ashrams in Rishikesh & Dharamshala for YTT & detox.
            </p>

          </div>

          {/* Card 4: 3 Tiers */}
          <div className="bg-[#FAF6F0]/95 backdrop-blur-md rounded-2xl sm:rounded-[28px] border border-[#E5DEC9] p-3.5 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[210px] sm:min-h-[330px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-2 sm:mb-4 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-xs group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaUsers className="w-5 h-5 sm:w-8 sm:h-8 text-[#16302B]" />
              </div>
              <div className="absolute -bottom-2 bg-[#FAF6F0] px-1.5 py-0.5 rounded-full border border-[#C08A3E]/50">
                <KayaLeafMotif size={10} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-0.5 my-auto">
              <div className="font-heading font-bold text-xl sm:text-3xl lg:text-[36px] text-[#16302B] leading-tight">
                3 Tiers
              </div>
              <div className="font-display font-bold text-[9px] sm:text-xs tracking-[0.18em] text-[#B37B2E] uppercase">
                OF QUALITY
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-6 sm:w-10 h-[1px] bg-[#C08A3E]/40 my-1.5 sm:my-3" />

            {/* Description */}
            <p className="font-body text-[10px] sm:text-xs text-[#5A574F] leading-snug line-clamp-2 sm:line-clamp-none max-w-[240px] mx-auto font-medium">
              Platinum, Gold & Silver certified instructor standards.
            </p>

          </div>

        </div>

        {/* Bottom Trust Strip */}
        <div className="relative z-10 pt-2">
          <div className="bg-[#F0EBE0]/90 border border-[#E2D8C5] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-wrap items-center justify-center gap-3 sm:gap-8 shadow-xs backdrop-blur-sm text-xs sm:text-base font-heading font-bold text-[#16302B]">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
              <KayaLeafMotif size={16} color="#E5C384" />
            </div>
            <span>Rooted in Trust</span>
            <span className="text-[#C08A3E] text-xs font-bold">•</span>
            <span>Driven by Purpose</span>
            <span className="text-[#C08A3E] text-xs font-bold">•</span>
            <span>Committed to Your Well-being</span>
          </div>
        </div>

      </div>
    </section>
  );
};
