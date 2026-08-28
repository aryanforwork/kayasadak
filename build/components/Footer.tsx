'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/config/pricing';
import { KayaLeafMotif } from './KayaLeafMotif';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaShieldAlt,
  FaHeart,
  FaMedal,
  FaSpa,
} from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#071611] text-white font-body relative overflow-hidden select-none border-t border-[#C08A3E]/40">
      
      {/* 1. TOP SPIRITUAL HERO BANNER (Himalayan Sunrise & Meditating Practitioner) */}
      <div className="relative w-full py-20 px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/footer_himalayan_hero.webp"
          alt="Himalayan Sunrise Yoga Meditation"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 opacity-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071611] via-[#071611]/40 to-black/30" />
        <div className="absolute inset-0 bg-radial from-[#C08A3E]/20 via-transparent to-transparent" />

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl space-y-5 mx-auto">
          {/* Sacred OM & Ornamental Lines */}
          <div className="flex items-center justify-center gap-4 text-brand-gold-600">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#C08A3E]" />
            <span className="text-3xl sm:text-4xl font-heading text-brand-gold-600 font-bold drop-shadow-[0_0_12px_rgba(192,138,62,0.9)]">
              ॐ
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#C08A3E]" />
          </div>

          {/* Sanskrit Shloka */}
          <div className="font-heading text-lg sm:text-2xl text-brand-gold-600 font-medium tracking-widest drop-shadow">
            योगः कर्मसु कौशलम्
          </div>

          {/* Main Headline */}
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
            Where Yoga Becomes a Way of Life.
          </h2>

          {/* Sub-bar */}
          <div className="font-display text-xs sm:text-sm text-brand-gold-600 font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-3">
            <span>YOGA</span>
            <span className="text-brand-gold-600">•</span>
            <span>AYURVEDA</span>
            <span className="text-brand-gold-600">•</span>
            <span>PANCHAKARMA</span>
          </div>

          {/* Gold Lotus SVG Motif */}
          <div className="pt-2 flex items-center justify-center">
            <svg className="w-8 h-8 text-brand-gold-600 drop-shadow-[0_0_8px_rgba(192,138,62,0.8)]" viewBox="0 0 100 60" fill="currentColor">
              <path d="M50 0 C60 20 80 20 100 30 C80 40 60 40 50 60 C40 40 20 40 0 30 C20 20 40 20 50 0 Z" />
              <path d="M50 15 C58 25 70 28 85 33 C70 40 58 40 50 50 C42 40 30 40 15 33 C30 28 42 25 50 15 Z" fill="#FFE5B4" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Thin Gold Ornamental Divider */}
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C08A3E]/50 to-transparent" />
        <div className="absolute w-3.5 h-3.5 rotate-45 border border-[#C08A3E] bg-[#071611]" />
      </div>

      {/* 2. MAIN 5-COLUMN FOOTER SECTION */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        
        {/* Top Header Branding Row */}
        <div className="pb-10 border-b border-[#C08A3E]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-5 group">
            {/* High-Visibility Logo Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-[#C08A3E]/60 p-2.5 shadow-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white/15 group-hover:border-[#C08A3E] transition-all duration-300">
              <img
                src="/images/logo.webp"
                alt="KayaSadhak Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  KayaSadhak
                </span>
                <KayaLeafMotif size={22} color="#C08A3E" />
              </div>
              <span className="text-xs sm:text-sm text-brand-gold-600 font-bold tracking-[0.2em] uppercase mt-1">
                HOME YOGA • YTT INSTITUTE • PANCHKARMA
              </span>
            </div>
          </Link>

          {/* Direct WhatsApp & Call Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I would like to inquire about home yoga sessions.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#C08A3E] hover:bg-[#A87C2E] text-white font-body font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-body font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#C08A3E]/20">
          
          {/* Column 1: Brand Story & Socials (3 Cols) */}
          <div className="lg:col-span-3 space-y-5 text-left">
            <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed">
              KayaSadhak delivers certified personal home yoga instruction, professional Yoga Teacher Training (YTT) courses, and authentic Ayurvedic Panchakarma therapies across Delhi NCR and Chandigarh Tricity. Founded by Nivil Chaudhary (12+ years experience).
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-gray-200">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="w-3.5 h-3.5 text-brand-gold-600 flex-shrink-0" />
                <span>Direct Call / WhatsApp:</span>
                <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-brand-gold-600 font-semibold hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="w-3.5 h-3.5 text-brand-gold-600 flex-shrink-0" />
                <span>Email:</span>
                <a href={`mailto:${CONTACT_INFO.emailPrimary}`} className="text-brand-gold-600 font-semibold hover:underline">
                  {CONTACT_INFO.emailPrimary}
                </a>
              </p>
            </div>

            {/* Official Social Media Buttons with text-brand-gold-600 heading */}
            <div className="pt-2 space-y-2">
              <span className="text-brand-gold-600 font-semibold text-xs uppercase tracking-wider block">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/kayasadhak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KayaSadhak Instagram"
                  className="w-10 h-10 rounded-full border border-[#C08A3E]/40 bg-black/30 hover:bg-[#C08A3E] hover:border-[#C08A3E] text-brand-gold-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/kayasadhak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KayaSadhak Facebook"
                  className="w-10 h-10 rounded-full border border-[#C08A3E]/40 bg-black/30 hover:bg-[#C08A3E] hover:border-[#C08A3E] text-brand-gold-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@kayasadhak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KayaSadhak YouTube"
                  className="w-10 h-10 rounded-full border border-[#C08A3E]/40 bg-black/30 hover:bg-[#C08A3E] hover:border-[#C08A3E] text-brand-gold-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/918273264561"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KayaSadhak WhatsApp"
                  className="w-10 h-10 rounded-full border border-[#C08A3E]/40 bg-black/30 hover:bg-[#C08A3E] hover:border-[#C08A3E] text-brand-gold-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Home Yoga Services (2.5 Cols) with text-brand-gold-600 heading */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-semibold text-sm uppercase tracking-wider border-b border-[#C08A3E]/30 pb-2">
              <KayaLeafMotif size={14} color="#A87C2E" />
              <span>HOME YOGA SERVICES</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300/85">
              <li>
                <Link href="/services/yoga-at-home" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Personal Yoga at Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-yoga" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Corporate Wellness Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/services/senior-citizen-yoga" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Senior Citizen Mobility Yoga</span>
                </Link>
              </li>
              <li>
                <Link href="/services/yoga-at-home" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Kids Yoga & Posture Care</span>
                </Link>
              </li>
              <li>
                <Link href="/services/yoga-at-home" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Prenatal & Postnatal Yoga</span>
                </Link>
              </li>
              <li>
                <Link href="/services/panchkarma" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <KayaLeafMotif size={11} color="#C08A3E" />
                  <span>Authentic Home Panchakarma</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/pricing"
                className="w-full py-2.5 px-4 rounded-xl border border-[#C08A3E]/50 bg-[#C08A3E]/10 hover:bg-[#C08A3E] hover:text-white text-brand-gold-600 font-display font-semibold text-xs flex items-center justify-between transition-all duration-300 shadow-sm"
              >
                <span>📄 Pricing Matrix</span>
                <FaChevronRight className="w-3 h-3 text-brand-gold-600" />
              </Link>
            </div>
          </div>

          {/* Column 3: YTT Institutes (2 Cols) with text-brand-gold-600 heading */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-semibold text-sm uppercase tracking-wider border-b border-[#C08A3E]/30 pb-2">
              <svg className="w-4 h-4 text-brand-gold-600" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="20" r="10" />
                <path d="M50 35 C35 40 25 50 15 65 C20 70 30 65 50 65 C70 65 80 70 85 65 C75 50 65 40 50 35 Z" />
              </svg>
              <span>YTT HUBS</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300/85">
              <li>
                <Link href="/yoga-teacher-training/200-hour-ttc" className="hover:text-brand-gold-600 font-bold text-white flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>200-Hour TTC</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-training/locations/rishikesh" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Rishikesh Ashram</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-training/200-hour-ttc" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Delhi NCR YTT</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-training/200-hour-ttc" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Gurugram YTT</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-training/200-hour-ttc" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Chandigarh Center</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-training/200-hour-ttc" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Haridwar Ashram</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Locality Hubs (2 Cols) with text-brand-gold-600 heading */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-semibold text-sm uppercase tracking-wider border-b border-[#C08A3E]/30 pb-2">
              <svg className="w-4 h-4 text-brand-gold-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>LOCALITIES</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300/85">
              <li>
                <Link href="/yoga-teacher-at-home/delhi/south-delhi" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>South Delhi</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-at-home/delhi/south-delhi" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Gurugram DLF</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-at-home/delhi/south-delhi" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Noida Sectors</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-at-home/delhi/south-delhi" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Chandigarh UT</span>
                </Link>
              </li>
              <li>
                <Link href="/yoga-teacher-at-home/delhi/south-delhi" className="hover:text-brand-gold-600 flex items-center gap-2 transition-colors">
                  <FaChevronRight className="w-2.5 h-2.5 text-brand-gold-600 flex-shrink-0" />
                  <span>Mohali Tricity</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Sunset Meditating Yogi Artwork Card */}
          <div className="lg:col-span-2 flex flex-col justify-stretch">
            <div className="relative w-full h-full min-h-[350px] rounded-2xl border border-[#C08A3E]/60 bg-[#091D17] overflow-hidden shadow-2xl p-1 flex flex-col justify-between group hover:border-[#C08A3E] transition-all duration-500">
              {/* Gold Corner Marks ┌ ┐ └ ┘ */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C08A3E] z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C08A3E] z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C08A3E] z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C08A3E] z-20 pointer-events-none" />

              {/* Top Center Emblem */}
              <div className="absolute top-4 inset-x-0 flex justify-center z-20 pointer-events-none drop-shadow">
                <KayaLeafMotif size={24} color="#D4A855" />
              </div>

              {/* Full Artwork Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden min-h-[340px]">
                <img
                  src="/images/footer_yogi_sunset.webp"
                  alt="Yogi Meditating Sunset - KayaSadhak"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </div>
          </div>

        </div>

        {/* 3. PILL TRUST BADGES STRIP */}
        <div className="pt-2">
          <div className="w-full border border-[#C08A3E]/40 bg-[#0C241D] rounded-full px-6 py-4 flex flex-wrap items-center justify-around gap-6 text-xs sm:text-sm text-gray-200 shadow-2xl">
            <div className="flex items-center gap-2.5">
              <FaSpa className="w-5 h-5 text-brand-gold-600 flex-shrink-0" />
              <span className="font-semibold text-white">Authentic & Traditional</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaShieldAlt className="w-5 h-5 text-brand-gold-600 flex-shrink-0" />
              <span className="font-semibold text-white">Safe • Hygienic • Professional</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaHeart className="w-5 h-5 text-brand-gold-600 flex-shrink-0" />
              <span className="font-semibold text-white">Trusted by Thousands</span>
            </div>
            <div className="flex items-center gap-2.5">
              <KayaLeafMotif size={20} color="#C08A3E" />
              <span className="font-semibold text-white">Holistic Healing for Body, Mind & Soul</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaMedal className="w-5 h-5 text-brand-gold-600 flex-shrink-0" />
              <span className="font-semibold text-white">Certified Experts & Experienced</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. BOTTOM ACCREDITATION & SANSKRIT MANTRA STRIP (Matching Attached Image 1:1) */}
      <div className="w-full bg-[#05120D] border-t border-[#C08A3E]/40 py-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden text-gray-300">
        
        {/* Left & Right Watermark Sketch Motifs */}
        <img
          src="/images/spiritual_yoga_sketch_bg.webp"
          alt="Sacred Mandala Watermark"
          className="absolute top-0 left-0 w-80 h-full object-cover opacity-10 pointer-events-none mix-blend-screen"
        />
        <img
          src="/images/spiritual_yoga_sketch_bg.webp"
          alt="Sacred Mandala Watermark Right"
          className="absolute top-0 right-0 w-80 h-full object-cover opacity-10 pointer-events-none mix-blend-screen -scale-x-100"
        />

        <div className="max-w-[1600px] mx-auto space-y-6 relative z-10">
          
          {/* Top 5-Column Accreditation Row with Vertical Dividers (No Cutting Horizontal Border) */}
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 pb-6 text-xs text-left">
            
            {/* Col 1: Copyright & Founded By Nivil */}
            <div className="space-y-0.5 min-w-[200px]">
              <p className="font-semibold text-white">
                © {new Date().getFullYear()} KayaSadhak. All rights reserved.
              </p>
              <p className="text-[11px] text-gray-300">
                Founded by Nivil Chaudhary
              </p>
              <p className="text-[11px] text-brand-gold-600 font-bold">
                (12+ yrs exp).
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-[#C08A3E]/30" />

            {/* Col 2: YTT Partnership Statement */}
            <div className="max-w-xs text-[11px] text-gray-300 leading-tight">
              YTT Courses conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance USA, and AYUSH Ministry.
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-[#C08A3E]/30" />

            {/* Col 3: Indian Federation of Yoga Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-brand-gold-600/60 bg-[#0C241D] flex items-center justify-center text-brand-gold-600 text-sm shadow-md">
                🪷
              </div>
              <div className="font-display font-bold text-[11px] text-white uppercase tracking-wider leading-tight">
                INDIAN FEDERATION<br />OF YOGA
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-[#C08A3E]/30" />

            {/* Col 4: Yoga Alliance USA Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 text-brand-gold-600 flex items-center justify-center">
                <KayaLeafMotif size={24} color="#C08A3E" />
              </div>
              <div className="font-display font-bold text-[11px] leading-tight">
                <span className="text-brand-gold-600 text-sm font-bold block tracking-wider">yoga</span>
                <span className="text-white text-[9px] tracking-widest uppercase block">ALLIANCE USA</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-[#C08A3E]/30" />

            {/* Col 5: AYUSH Ministry Emblem */}
            <div className="flex items-center gap-3">
              <div className="text-center font-display font-bold text-[11px] leading-tight flex items-center gap-2">
                <span className="text-xl">🏛️</span>
                <div className="text-left">
                  <div className="text-white text-xs font-bold tracking-wider uppercase">AYUSH</div>
                  <div className="text-gray-300 text-[9px] tracking-widest uppercase">MINISTRY</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Sacred Sanskrit Mantra & English Translation (Matching Image 1:1) */}
          <div className="text-center space-y-1.5 pt-1">
            <div className="font-heading text-lg sm:text-xl text-brand-gold-600 font-bold tracking-widest drop-shadow-sm flex items-center justify-center gap-2">
              <span className="text-brand-gold-600 font-normal">॥</span>
              <span>सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
              <span className="text-brand-gold-600 font-normal">॥</span>
            </div>

            <div className="text-xs sm:text-sm text-gray-300 italic font-body">
              May all be happy, may all be healthy.
            </div>

            {/* Bottom Diamond Line Flourish */}
            <div className="flex items-center justify-center gap-3 text-brand-gold-600 pt-2">
              <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C08A3E]/70" />
              <span className="text-xs">◆</span>
              <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C08A3E]/70" />
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};
