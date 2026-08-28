'use client';

import React, { useState } from 'react';
import { CONTACT_INFO } from '@/config/pricing';
import { KayaLeafMotif } from './KayaLeafMotif';
import {
  FaCheckCircle,
  FaCrown,
  FaStar,
  FaWhatsapp,
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaLeaf,
} from 'react-icons/fa';

export const PricingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'platinum' | 'gold' | 'silver'>('gold');

  return (
    <div className="w-full max-w-[1600px] mx-auto my-8 sm:my-12 font-body select-none">
      
      {/* Mobile-Only Segmented Control Tab Switcher */}
      <div className="md:hidden flex items-center p-1.5 bg-[#EAE2D2] rounded-2xl mb-6 shadow-inner border border-[#D9CEB9]">
        <button
          onClick={() => setActiveTab('gold')}
          className={`flex-1 py-2.5 px-2 rounded-xl font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'gold'
              ? 'bg-[#C08A3E] text-white shadow-md'
              : 'text-[#5A574F] hover:text-[#16302B]'
          }`}
        >
          <FaStar className="w-3 h-3 text-[#FFE082]" />
          <span>Gold (₹750)</span>
        </button>

        <button
          onClick={() => setActiveTab('platinum')}
          className={`flex-1 py-2.5 px-2 rounded-xl font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'platinum'
              ? 'bg-[#16302B] text-[#E5C384] shadow-md'
              : 'text-[#5A574F] hover:text-[#16302B]'
          }`}
        >
          <FaCrown className="w-3 h-3 text-[#E5C384]" />
          <span>Platinum (₹1k)</span>
        </button>

        <button
          onClick={() => setActiveTab('silver')}
          className={`flex-1 py-2.5 px-2 rounded-xl font-display font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'silver'
              ? 'bg-white text-[#16302B] shadow-md border border-[#D9CEB9]'
              : 'text-[#5A574F] hover:text-[#16302B]'
          }`}
        >
          <span>Silver (₹500)</span>
        </button>
      </div>

      {/* 3 Pricing Cards Grid: Tabbed on Mobile (< md), 3-col on Desktop (>= md) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* CARD 1: PLATINUM TIER (Left Card - Master Credential) */}
        <div className={`bg-[#FAF6F0] border-2 border-[#16302B] rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-col justify-between relative overflow-hidden group ${
          activeTab === 'platinum' ? 'flex' : 'hidden md:flex'
        }`}>
          
          {/* Top Dark Green Ribbon Badge */}
          <div className="absolute top-0 right-0 bg-[#16302B] text-[#E5C384] font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5 border-b border-l border-[#C08A3E]/30">
            <FaCrown className="w-3 h-3 text-[#E5C384]" />
            <span>MASTER CREDENTIAL</span>
          </div>

          <div className="space-y-6 pt-3">
            
            {/* Top Wreath Medal Emblem & Tier Title */}
            <div className="text-center">
              <div className="w-18 h-18 rounded-full border border-[#C08A3E]/40 bg-[#F5EFE4] flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-14 h-14 rounded-full border border-[#C08A3E]/60 flex items-center justify-center text-[#16302B]">
                  <FaCrown className="w-7 h-7 text-[#16302B]" />
                </div>
              </div>

              <div className="font-display font-bold text-xs tracking-[0.22em] text-[#16302B] uppercase mt-3">
                PLATINUM TIER
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#16302B] leading-none">
                  ₹1,000
                </span>
                <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
              </div>
            </div>

            {/* Qualification Box */}
            <div className="bg-[#EFE8DC]/80 border border-[#E0D7C4] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#DCD3C0] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="w-4 h-4" />
              </div>
              <p className="leading-tight font-medium">
                Complete Masters Degree + Graduation + Advanced Teacher Training <span className="font-bold text-[#16302B]">(10+ Years Experience)</span>
              </p>
            </div>

            {/* Monthly Package Rates */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
                <span>MONTHLY PACKAGE RATES</span>
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
              </div>

              <div className="space-y-2 font-body text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                  <span className="font-medium text-[#4A4842]">12 Sessions / Month (3d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹12,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#E2EBE7] border border-[#16302B]/20 shadow-xs">
                  <span className="font-bold text-[#16302B]">16 Sessions / Month (4d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹16,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                  <span className="font-medium text-[#4A4842]">20 Sessions / Month (5d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹20,000</span>
                </div>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#383630]">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>1-on-1 Personal Home Instruction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Masters Degree & 10+ Yrs Clinical Care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Up to 2 Family Members Included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Free Rescheduling & Zero Travel Fees</span>
              </div>
            </div>

          </div>

          {/* Select Button */}
          <div className="pt-8">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am interested in booking a Platinum Tier (₹1,000/sess) home yoga package.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-between px-6 group/btn"
            >
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4.5 h-4.5 text-[#25D366]" />
                <span className="uppercase tracking-wider">SELECT PLATINUM PLAN</span>
              </div>
              <FaArrowRight className="w-4 h-4 text-[#E5C384] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* CARD 2: GOLD TIER (Middle Card - MOST POPULAR) */}
        <div className={`bg-[#FAF6F0] border-2 border-[#C08A3E] rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 flex-col justify-between relative overflow-hidden transform lg:-translate-y-2 group ${
          activeTab === 'gold' ? 'flex' : 'hidden md:flex'
        }`}>
          
          {/* Top Gold Ribbon Badge */}
          <div className="absolute top-0 right-0 bg-[#C08A3E] text-white font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
            <FaStar className="w-3 h-3 text-white" />
            <span>MOST POPULAR</span>
          </div>

          <div className="space-y-6 pt-3">
            
            {/* Top Wreath Medal Emblem & Tier Title */}
            <div className="text-center">
              <div className="w-18 h-18 rounded-full border-2 border-[#C08A3E] bg-[#F7EFE0] flex items-center justify-center mx-auto shadow-md group-hover:scale-105 transition-transform">
                <div className="w-14 h-14 rounded-full border border-[#C08A3E]/60 flex items-center justify-center text-[#C08A3E]">
                  <FaStar className="w-7 h-7 text-[#C08A3E]" />
                </div>
              </div>

              <div className="font-display font-bold text-xs tracking-[0.22em] text-[#C08A3E] uppercase mt-3">
                GOLD TIER
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#C08A3E] leading-none">
                  ₹750
                </span>
                <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
              </div>
            </div>

            {/* Qualification Box */}
            <div className="bg-[#F7EFE0] border border-[#E8DABF] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E8DABF] text-[#C08A3E] flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="w-4 h-4" />
              </div>
              <p className="leading-tight font-medium">
                Graduation in Yoga + Advanced Teacher Training Course <span className="font-bold text-[#C08A3E]">(7+ Years Experience)</span>
              </p>
            </div>

            {/* Monthly Package Rates */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
                <span>MONTHLY PACKAGE RATES</span>
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
              </div>

              <div className="space-y-2 font-body text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F2E6] border border-[#E8DABF]/60">
                  <span className="font-medium text-[#4A4842]">12 Sessions / Month (3d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹9,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F0E2C8] border border-[#C08A3E]/40 shadow-xs">
                  <span className="font-bold text-[#B37B2E]">16 Sessions / Month (4d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#B37B2E]">₹12,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F2E6] border border-[#E8DABF]/60">
                  <span className="font-medium text-[#4A4842]">20 Sessions / Month (5d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹15,000</span>
                </div>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#383630]">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>1-on-1 Personal Home Instruction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Yoga Degree & 7+ Yrs Verified Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Up to 2 Family Members Included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Free Rescheduling & Zero Travel Fees</span>
              </div>
            </div>

          </div>

          {/* Select Button */}
          <div className="pt-8">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am interested in booking a Gold Tier (₹750/sess) home yoga package.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#C08A3E] hover:bg-[#A8762F] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-between px-6 group/btn"
            >
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4.5 h-4.5 text-white" />
                <span className="uppercase tracking-wider">SELECT GOLD PLAN</span>
              </div>
              <FaArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* CARD 3: SILVER TIER (Right Card) */}
        <div className={`bg-[#FAF6F0] border border-[#D9CEB9] rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-col justify-between relative overflow-hidden group ${
          activeTab === 'silver' ? 'flex' : 'hidden md:flex'
        }`}>
          
          <div className="space-y-6 pt-3">
            
            {/* Top Wreath Medal Emblem & Tier Title */}
            <div className="text-center">
              <div className="w-18 h-18 rounded-full border border-[#C0C0C0] bg-[#EFEFEF] flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-14 h-14 rounded-full border border-[#A0A0A0]/40 flex items-center justify-center text-[#5A574F]">
                  <KayaLeafMotif size={24} color="#5A574F" />
                </div>
              </div>

              <div className="font-display font-bold text-xs tracking-[0.22em] text-[#5A574F] uppercase mt-3">
                SILVER TIER
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#16302B] leading-none">
                  ₹500
                </span>
                <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
              </div>
            </div>

            {/* Qualification Box */}
            <div className="bg-[#EFE8DC]/70 border border-[#E0D7C4] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#DCD3C0] text-[#5A574F] flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="w-4 h-4" />
              </div>
              <p className="leading-tight font-medium">
                Graduation + Diploma in Yoga <span className="font-bold text-[#16302B]">(5+ Years Experience)</span>
              </p>
            </div>

            {/* Monthly Package Rates */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
                <span>MONTHLY PACKAGE RATES</span>
                <div className="h-[1px] w-8 bg-[#C08A3E]/40" />
              </div>

              <div className="space-y-2 font-body text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                  <span className="font-medium text-[#4A4842]">12 Sessions / Month (3d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹6,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#E2EBE7] border border-[#16302B]/20 shadow-xs">
                  <span className="font-bold text-[#16302B]">16 Sessions / Month (4d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹8,000</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                  <span className="font-medium text-[#4A4842]">20 Sessions / Month (5d/wk)</span>
                  <span className="font-heading font-bold text-base sm:text-lg text-[#16302B]">₹10,000</span>
                </div>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#383630]">
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>1-on-1 Personal Home Instruction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Yoga Diploma & 5+ Yrs Verified Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Up to 2 Family Members Included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                <span>Free Rescheduling & Zero Travel Fees</span>
              </div>
            </div>

          </div>

          {/* Select Button */}
          <div className="pt-8">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am interested in booking a Silver Tier (₹500/sess) home yoga package.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-between px-6 group/btn"
            >
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4.5 h-4.5 text-[#25D366]" />
                <span className="uppercase tracking-wider">SELECT SILVER PLAN</span>
              </div>
              <FaArrowRight className="w-4 h-4 text-[#E5C384] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

      {/* Pricing Footnote Trust Strip (Matching Reference Image 1:1) */}
      <div className="mt-10 bg-[#F0EBE0]/90 border border-[#E2D8C5] rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#16302B] shadow-sm">
        
        {/* Item 1 */}
        <div className="flex items-center gap-3 p-1">
          <div className="w-10 h-10 rounded-full bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0 shadow-xs">
            <KayaLeafMotif size={20} color="#E5C384" />
          </div>
          <div className="font-heading font-bold text-xs sm:text-sm leading-tight text-[#16302B]">
            Certified & Verified Instructors
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3 p-1">
          <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
            <FaShieldAlt className="w-4 h-4" />
          </div>
          <div className="font-body text-xs text-[#4A4842] leading-tight">
            <span className="font-heading font-bold text-[#16302B] block">Safe, Trusted &</span>
            Background Verified
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3 p-1">
          <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
            <FaUsers className="w-4 h-4" />
          </div>
          <div className="font-body text-xs text-[#4A4842] leading-tight">
            <span className="font-heading font-bold text-[#16302B] block">Family Friendly</span>
            Wellness Plans
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-3 p-1">
          <div className="w-10 h-10 rounded-full bg-[#EBE3D3] border border-[#DCD1BA] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
            <FaLeaf className="w-4 h-4" />
          </div>
          <div className="font-body text-xs text-[#4A4842] leading-tight flex items-center justify-between w-full">
            <div>
              <span className="font-heading font-bold text-[#16302B] block">Holistic Yoga,</span>
              Ayurveda & Wellness
            </div>
            <div className="hidden lg:block text-[#C08A3E]">
              ✦―
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
