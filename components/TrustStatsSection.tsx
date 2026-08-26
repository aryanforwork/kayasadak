'use client';

import React from 'react';
import { KayaLeafMotif } from './KayaLeafMotif';
import { FaAward, FaMapMarkerAlt, FaUniversity, FaUsers } from 'react-icons/fa';

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-16 select-none font-body">
      <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden text-center space-y-12">
        
        {/* Spiritual Yoga & Sacred Geometry Sketch Background Image (High Visibility & Clear View) */}
        <img
          src="/images/spiritual_yoga_sketch_bg.jpg"
          alt="Spiritual Yoga Mandala Sketch Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.40] pointer-events-none mix-blend-multiply z-0"
        />

        {/* Soft Radial Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-radial from-[#F7F3EA]/60 via-[#F7F3EA]/30 to-transparent pointer-events-none z-0" />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3.5 relative z-10">
          
          {/* Top Golden Lotus & Flourish Lines */}
          <div className="flex items-center justify-center gap-3 text-[#C08A3E]">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C08A3E]/80" />
            <KayaLeafMotif size={26} color="#C08A3E" />
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C08A3E]/80" />
          </div>

          {/* Subtitle Tag */}
          <div className="font-display font-bold text-xs sm:text-sm tracking-[0.25em] text-[#B37B2E] uppercase">
            OUR REACH & COMMITMENT
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#16302B] tracking-tight leading-[1.12] drop-shadow-xs">
            Trusted. Experienced. Transformative.
          </h2>

          {/* Diamond Accent */}
          <div className="flex items-center justify-center text-[#C08A3E] text-xs pt-0.5">
            ◆
          </div>

          {/* Sub-description */}
          <p className="font-body text-sm sm:text-base text-[#4A4842] max-w-xl mx-auto leading-relaxed font-medium">
            Over a decade of spreading authentic Yoga, Ayurveda & Panchakarma across homes and communities.
          </p>

        </div>

        {/* 4 Luxury Stat Cards (Slightly Translucent to reveal Spiritual Sketch Artwork) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          
          {/* Card 1: 12+ Years */}
          <div className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-[28px] border border-[#E5DEC9] p-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between min-h-[360px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-sm group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaAward className="w-8 h-8 text-[#16302B]" />
              </div>
              {/* Gold Lotus Badge */}
              <div className="absolute -bottom-2.5 bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#C08A3E]/50 shadow-xs">
                <KayaLeafMotif size={14} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 my-auto">
              <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-[38px] text-[#16302B] leading-tight">
                12+ Years
              </div>
              <div className="font-display font-bold text-[11px] sm:text-xs tracking-[0.22em] text-[#B37B2E] uppercase">
                OF EXCELLENCE
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-10 h-[1px] bg-[#C08A3E]/40 my-3" />

            {/* Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#5A574F] leading-relaxed max-w-[240px] mx-auto font-medium">
              Dedicated to delivering authentic home Yoga, Ayurveda & holistic wellness with integrity.
            </p>

          </div>

          {/* Card 2: 20 Hubs */}
          <div className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-[28px] border border-[#E5DEC9] p-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between min-h-[360px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-sm group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaMapMarkerAlt className="w-8 h-8 text-[#16302B]" />
              </div>
              {/* Gold Lotus Badge */}
              <div className="absolute -bottom-2.5 bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#C08A3E]/50 shadow-xs">
                <KayaLeafMotif size={14} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 my-auto">
              <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-[38px] text-[#16302B] leading-tight">
                20 Hubs
              </div>
              <div className="font-display font-bold text-[11px] sm:text-xs tracking-[0.22em] text-[#B37B2E] uppercase">
                ACROSS INDIA
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-10 h-[1px] bg-[#C08A3E]/40 my-3" />

            {/* Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#5A574F] leading-relaxed max-w-[240px] mx-auto font-medium">
              Our presence across major cities ensures quality wellness is never far.
            </p>

          </div>

          {/* Card 3: 9 Centers */}
          <div className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-[28px] border border-[#E5DEC9] p-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between min-h-[360px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-sm group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaUniversity className="w-8 h-8 text-[#16302B]" />
              </div>
              {/* Gold Lotus Badge */}
              <div className="absolute -bottom-2.5 bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#C08A3E]/50 shadow-xs">
                <KayaLeafMotif size={14} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 my-auto">
              <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-[38px] text-[#16302B] leading-tight">
                9 Centers
              </div>
              <div className="font-display font-bold text-[11px] sm:text-xs tracking-[0.22em] text-[#B37B2E] uppercase">
                FOR WELLNESS
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-10 h-[1px] bg-[#C08A3E]/40 my-3" />

            {/* Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#5A574F] leading-relaxed max-w-[240px] mx-auto font-medium">
              Wellness & therapy centers for deep healing, detox & transformative well-being.
            </p>

          </div>

          {/* Card 4: 3 Tiers */}
          <div className="bg-[#FAF6F0]/90 backdrop-blur-md rounded-[28px] border border-[#E5DEC9] p-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between min-h-[360px] group">
            
            {/* Top Wreath Emblem */}
            <div className="relative mb-4 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#C08A3E]/50 bg-[#F5EFE4]/90 flex items-center justify-center shadow-sm group-hover:border-[#C08A3E] group-hover:scale-105 transition-all">
                <FaUsers className="w-8 h-8 text-[#16302B]" />
              </div>
              {/* Gold Lotus Badge */}
              <div className="absolute -bottom-2.5 bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#C08A3E]/50 shadow-xs">
                <KayaLeafMotif size={14} color="#C08A3E" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1 my-auto">
              <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-[38px] text-[#16302B] leading-tight">
                3 Tiers
              </div>
              <div className="font-display font-bold text-[11px] sm:text-xs tracking-[0.22em] text-[#B37B2E] uppercase">
                OF VERIFIED QUALITY
              </div>
            </div>

            {/* Divider Accent */}
            <div className="w-10 h-[1px] bg-[#C08A3E]/40 my-3" />

            {/* Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#5A574F] leading-relaxed max-w-[240px] mx-auto font-medium">
              Platinum, Gold & Silver standards for instructors you can trust in your home.
            </p>

          </div>

        </div>

        {/* Bottom Trust Strip */}
        <div className="relative z-10 pt-4">
          <div className="bg-[#F0EBE0]/90 border border-[#E2D8C5] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 shadow-sm backdrop-blur-sm">
            
            {/* Green Circular Emblem */}
            <div className="w-11 h-11 rounded-full bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0 shadow-md">
              <KayaLeafMotif size={22} color="#E5C384" />
            </div>

            <div className="font-heading font-bold text-base sm:text-lg text-[#16302B]">
              Rooted in Trust
            </div>
            
            <span className="text-[#C08A3E] text-xs font-bold">•</span>

            <div className="font-heading font-bold text-base sm:text-lg text-[#16302B]">
              Driven by Purpose
            </div>

            <span className="text-[#C08A3E] text-xs font-bold">•</span>

            <div className="font-heading font-bold text-base sm:text-lg text-[#16302B]">
              Committed to Your Well-being
            </div>

            {/* Gold Flourish Line */}
            <div className="hidden md:flex items-center gap-1.5 text-[#C08A3E] pl-2">
              <div className="w-12 h-[1px] bg-[#C08A3E]/60" />
              <span className="text-xs">✦</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
