'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/config/pricing';
import { KayaLeafMotif } from './KayaLeafMotif';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaChevronDown,
} from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownMenus = {
    yogaAtHome: {
      title: 'Yoga at Home',
      link: '/services/yoga-at-home',
      items: [
        {
          name: 'Personal 1-on-1 Home Yoga',
          desc: 'Verified instructors at your residence in Delhi NCR & Tricity',
          link: '/services/yoga-at-home',
        },
        {
          name: 'Senior Citizen Home Yoga',
          desc: 'Gentle joint mobility, posture & fall prevention care',
          link: '/services/senior-citizen-yoga',
        },
        {
          name: 'Corporate Wellness Program',
          desc: 'On-site & virtual desk ergonomics and stress relief',
          link: '/services/corporate-yoga',
        },
      ],
    },
    pricing: {
      title: 'Pricing Matrix',
      link: '/pricing',
      items: [
        {
          name: 'Transparent 3×3 Pricing Matrix',
          desc: 'No hidden charges or travel fees across all 20 local hubs',
          link: '/pricing',
        },
        {
          name: 'Platinum Tier — ₹1,000 / session',
          desc: 'Masters Degree + Adv TTC (10+ Years Experience)',
          link: '/pricing#platinum',
        },
        {
          name: 'Gold Tier — ₹750 / session',
          desc: 'Graduation in Yoga + Adv TTC (7+ Years Experience)',
          link: '/pricing#gold',
        },
        {
          name: 'Silver Tier — ₹500 / session',
          desc: 'Graduation + Diploma in Yoga (5+ Years Experience)',
          link: '/pricing#silver',
        },
      ],
    },
    ytt: {
      title: 'YTT Courses',
      link: '/yoga-teacher-training/200-hour-ttc',
      items: [
        {
          name: '200-Hour Foundation TTC',
          desc: 'Internationally accredited foundation certification',
          link: '/yoga-teacher-training/200-hour-ttc',
        },
        {
          name: '300-Hour Advanced TTC',
          desc: 'Advanced Hatha, Vinyasa & therapeutic instruction',
          link: '/yoga-teacher-training/200-hour-ttc',
        },
        {
          name: '500-Hour Master TTC',
          desc: 'Comprehensive master instructor & clinical sadhak training',
          link: '/yoga-teacher-training/200-hour-ttc',
        },
        {
          name: 'Rishikesh & Himalayan Centers',
          desc: 'Ashram retreats in Rishikesh, Haridwar & Dharamshala',
          link: '/yoga-teacher-training/locations/rishikesh',
        },
      ],
    },
    panchkarma: {
      title: 'Panchkarma',
      link: '/services/panchkarma',
      items: [
        {
          name: 'Abhyanga Full-Body Therapy',
          desc: 'Warm medicated herbal oil massage at home',
          link: '/services/panchkarma',
        },
        {
          name: 'Swedana Herbal Steam Detox',
          desc: 'Portable sauna steam therapy for cellular toxin release',
          link: '/services/panchkarma',
        },
        {
          name: 'Shirodhara Nervous System Care',
          desc: 'Third-eye herbal oil stream for anxiety & insomnia relief',
          link: '/services/panchkarma',
        },
        {
          name: 'Kati & Janu Basti Joint Care',
          desc: 'Targeted herbal oil reservoir for spine & knee relief',
          link: '/services/panchkarma',
        },
      ],
    },
    therapeutic: {
      title: 'Therapeutic Yoga',
      link: '/yoga-for-conditions/back-pain',
      items: [
        {
          name: 'Back Pain & Sciatica Relief',
          desc: 'Lumbar spinal decompression & posture realignment',
          link: '/yoga-for-conditions/back-pain',
        },
        {
          name: 'PCOD / PCOS Care',
          desc: 'Hormonal balancing, pelvic circulation & metabolism',
          link: '/yoga-for-conditions/back-pain',
        },
        {
          name: 'Thyroid Balance Yoga',
          desc: 'Endocrine stimulation & therapeutic neck pranayama',
          link: '/yoga-for-conditions/back-pain',
        },
        {
          name: 'Anxiety & Insomnia Relief',
          desc: 'Parasympathetic nervous system activation & Yoga Nidra',
          link: '/yoga-for-conditions/back-pain',
        },
      ],
    },
    about: {
      title: 'About Us',
      link: '/about-us',
      items: [
        {
          name: 'Founder Nivil Chaudhary Story',
          desc: '12+ years of clinical & home yoga teaching leadership',
          link: '/about-us',
        },
        {
          name: 'Strict Verification Tiers',
          desc: 'Audited credentials across Platinum, Gold & Silver levels',
          link: '/about-us#tiers',
        },
        {
          name: 'Institutional Tie-Ups',
          desc: 'Partnerships with Indian Federation of Yoga & Yoga Alliance USA',
          link: '/about-us#credentials',
        },
      ],
    },
  };

  return (
    <header className="sticky top-0 z-50 transition-all font-body">
      {/* 1. Top Header Bar (Brand Green #1F4A3C with Increased Readable Typography) */}
      <div className="bg-[#1F4A3C] text-white py-2.5 px-4 sm:px-8 lg:px-12 border-b border-emerald-900/40">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Left: Contact Info & Location (Increased font size & font-medium) */}
          <div className="flex items-center gap-5 sm:gap-7 flex-wrap justify-center sm:justify-start text-xs sm:text-sm lg:text-[14px]">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center gap-2 hover:text-brand-gold-500 transition-colors font-medium"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 text-brand-gold-500" />
              <span className="font-semibold tracking-wide">{CONTACT_INFO.phone}</span>
            </a>

            <a
              href="mailto:contact@kayasadhak.com"
              className="flex items-center gap-2 hover:text-brand-gold-500 transition-colors font-medium hidden md:flex"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>contact@kayasadhak.com</span>
            </a>

            <span className="hidden lg:flex items-center gap-1.5 text-brand-green-50/85 border-l border-white/20 pl-5 text-xs sm:text-sm">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-brand-gold-500" />
              <span>Delhi NCR • Chandigarh Tricity • YTT Institutes</span>
            </span>
          </div>

          {/* Right: Official Social Media Brand Icons ONLY (NO text labels) */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-display text-xs text-brand-gold-500 font-semibold uppercase tracking-wider mr-1">
              Follow Us
            </span>
            <a
              href="https://instagram.com/kayasadhak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KayaSadhak Instagram"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E4405F] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://facebook.com/kayasadhak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KayaSadhak Facebook"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <FaFacebookF className="w-3.5 h-3.5 text-white" />
            </a>
            <a
              href="https://youtube.com/@kayasadhak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KayaSadhak YouTube"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <FaYoutube className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://wa.me/918273264561"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KayaSadhak WhatsApp"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (Pure White & Frosted Glass Background) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#1F4A3C]/10 shadow-xs sticky top-0 z-40">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* Responsive Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group">
            <div className="relative h-10 w-9 sm:h-14 sm:w-12 flex-shrink-0">
              <img
                src="/images/logo.webp"
                alt="KayaSadhak Logo"
                className="h-full w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-brand-green-900 leading-none tracking-tight">
                  KayaSadhak
                </span>
                <KayaLeafMotif size={16} color="#C08A3E" className="opacity-90" />
              </div>
              <span className="font-display text-[9px] sm:text-[11px] text-brand-gold-600 font-semibold tracking-[0.16em] uppercase mt-0.5">
                Home Yoga • YTT • Panchkarma
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Premium Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7 font-body text-[15px] font-medium text-neutral-charcoal">
            <Link href="/" className="hover:text-brand-green-900 py-2 transition-colors">
              Home
            </Link>

            {/* Dropdown 1: Yoga at Home */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('yogaAtHome')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.yogaAtHome.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>Yoga at Home</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Flyout Menu */}
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.yogaAtHome.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-3 rounded-xl hover:bg-[#F3EEE2]/60 transition-colors group/item"
                  >
                    <div className="font-heading font-semibold text-sm text-brand-green-900 group-hover/item:text-brand-gold-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-neutral-grey mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown 2: Pricing Matrix */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('pricing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.pricing.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>Pricing Matrix</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Flyout Menu */}
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.pricing.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-3 rounded-xl hover:bg-[#F3EEE2]/60 transition-colors group/item"
                  >
                    <div className="font-heading font-semibold text-sm text-brand-green-900 group-hover/item:text-brand-gold-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-neutral-grey mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown 3: YTT Courses */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('ytt')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.ytt.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>YTT Courses</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Flyout Menu */}
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.ytt.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-3 rounded-xl hover:bg-[#F3EEE2]/60 transition-colors group/item"
                  >
                    <div className="font-heading font-semibold text-sm text-brand-green-900 group-hover/item:text-brand-gold-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-neutral-grey mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown 4: Panchkarma */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('panchkarma')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.panchkarma.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>Panchkarma</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Flyout Menu */}
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.panchkarma.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-3 rounded-xl hover:bg-[#F3EEE2]/60 transition-colors group/item"
                  >
                    <div className="font-heading font-semibold text-sm text-brand-green-900 group-hover/item:text-brand-gold-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-neutral-grey mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about-us" className="hover:text-brand-green-900 py-2 transition-colors">
              About Us
            </Link>

            <Link href="/contact-us" className="hover:text-brand-green-900 py-2 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="px-4 py-2.5 rounded-xl border border-brand-green-900/30 text-brand-green-900 hover:bg-brand-green-900 hover:text-white font-body font-semibold text-xs tracking-wider transition-all flex items-center gap-2"
            >
              <FaPhoneAlt className="w-3 h-3 text-brand-gold-600" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to book a free 1-on-1 personal home yoga trial.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#16302B] hover:bg-[#1F4A3C] text-white font-body font-semibold text-xs tracking-wider transition-all shadow-md flex items-center gap-2 border border-[#C08A3E]/40 group"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>BOOK FREE TRIAL</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Icon + Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to book a free trial home yoga session.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#1E7E34] active:scale-95 transition-transform"
              aria-label="WhatsApp Quick Chat"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-[#16302B]/10 border border-[#16302B]/20 flex items-center justify-center text-[#16302B] active:scale-95 transition-transform"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Native Mobile Slide-Over App Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden select-none">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-In Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-[#FAF8F5] shadow-2xl flex flex-col justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div>
                <div className="p-4 sm:p-5 border-b border-[#16302B]/10 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-2.5">
                    <img src="/images/logo.webp" alt="KayaSadhak" className="h-8 w-7 object-contain" />
                    <div>
                      <span className="font-heading font-bold text-xl text-[#16302B]">KayaSadhak</span>
                      <div className="text-[9px] text-[#B37B2E] font-display uppercase tracking-widest">Navigation Menu</div>
                    </div>
                  </div>
                  
                  {/* Close Button with 44px tap target */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center active:scale-90 transition-transform"
                    aria-label="Close Menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Quick Action Banner Cards */}
                <div className="p-4 space-y-2.5 bg-[#F5EFE4]/80 border-b border-[#E5DEC9]">
                  <a
                    href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hi KayaSadhak! I want to book a free trial home yoga class.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 px-4 rounded-xl bg-[#16302B] text-white font-body font-bold text-xs flex items-center justify-between shadow-sm border border-[#C08A3E]/40 active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                      <span>Book Free Trial on WhatsApp</span>
                    </div>
                    <span className="text-[10px] text-[#E5C384] uppercase font-display tracking-wider">Free</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#16302B]/15 text-[#16302B] font-body font-semibold text-xs flex items-center justify-between active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="w-3 h-3 text-[#C08A3E]" />
                      <span>Direct Faculty Helpline</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#16302B]">{CONTACT_INFO.phone}</span>
                  </a>
                </div>

                {/* Navigation Links with Interactive Accordions */}
                <div className="p-4 space-y-1 font-body text-sm divide-y divide-gray-100">
                  
                  {/* Link: Home */}
                  <div className="py-2">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-[#16302B] font-bold text-base hover:text-brand-gold-600 transition-colors"
                    >
                      <span>🏠 Home Overview</span>
                    </Link>
                  </div>

                  {/* Section 1: Yoga at Home */}
                  <div className="py-2 space-y-1">
                    <div className="flex items-center justify-between py-1.5 text-[#16302B] font-bold text-sm">
                      <Link href="/services/yoga-at-home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B37B2E]">
                        🧘 Personal Yoga at Home
                      </Link>
                    </div>
                    <div className="pl-3 space-y-1 text-xs text-[#5A574F]">
                      <Link href="/services/yoga-at-home" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • 1-on-1 Personal Home Yoga
                      </Link>
                      <Link href="/services/senior-citizen-yoga" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Senior Citizen Home Yoga
                      </Link>
                      <Link href="/services/corporate-yoga" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Corporate Desk Wellness
                      </Link>
                    </div>
                  </div>

                  {/* Section 2: Pricing Matrix */}
                  <div className="py-2 space-y-1">
                    <div className="flex items-center justify-between py-1.5 text-[#16302B] font-bold text-sm">
                      <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B37B2E] flex items-center gap-2">
                        <span>💎 Transparent Pricing Matrix</span>
                      </Link>
                      <span className="bg-[#16302B] text-[#E5C384] text-[10px] font-bold px-2 py-0.5 rounded-full font-display">
                        ₹500+
                      </span>
                    </div>
                    <div className="pl-3 space-y-1 text-xs text-[#5A574F]">
                      <Link href="/pricing#platinum" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Platinum Tier (₹1,000 / sess) — Masters Degree
                      </Link>
                      <Link href="/pricing#gold" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Gold Tier (₹750 / sess) — Graduation in Yoga
                      </Link>
                      <Link href="/pricing#silver" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Silver Tier (₹500 / sess) — Diploma in Yoga
                      </Link>
                    </div>
                  </div>

                  {/* Section 3: YTT Courses */}
                  <div className="py-2 space-y-1">
                    <div className="flex items-center justify-between py-1.5 text-[#16302B] font-bold text-sm">
                      <Link href="/yoga-teacher-training/200-hour-ttc" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B37B2E]">
                        🎓 Yoga Teacher Training (YTT)
                      </Link>
                    </div>
                    <div className="pl-3 space-y-1 text-xs text-[#5A574F]">
                      <Link href="/yoga-teacher-training/200-hour-ttc" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • 200-Hour Foundation TTC
                      </Link>
                      <Link href="/yoga-teacher-training/200-hour-ttc" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • 300 / 500-Hour Advanced TTC
                      </Link>
                      <Link href="/yoga-teacher-training/locations/rishikesh" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • 9 Locations (Rishikesh, Delhi NCR)
                      </Link>
                    </div>
                  </div>

                  {/* Section 4: Panchkarma */}
                  <div className="py-2 space-y-1">
                    <div className="flex items-center justify-between py-1.5 text-[#16302B] font-bold text-sm">
                      <Link href="/services/panchkarma" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#B37B2E]">
                        🌿 Authentic Home Panchkarma
                      </Link>
                    </div>
                    <div className="pl-3 space-y-1 text-xs text-[#5A574F]">
                      <Link href="/services/panchkarma" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#16302B]">
                        • Abhyanga, Swedana & Shirodhara
                      </Link>
                    </div>
                  </div>

                  {/* Section 5: Clinical Therapy */}
                  <div className="py-2">
                    <Link
                      href="/yoga-for-conditions/back-pain"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-[#16302B] font-bold text-sm hover:text-[#B37B2E]"
                    >
                      🩺 Therapeutic Care (Back Pain, Sciatica, PCOD)
                    </Link>
                  </div>

                  {/* Links: About & Contact */}
                  <div className="py-2 space-y-2">
                    <Link
                      href="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-[#16302B] font-medium text-sm hover:text-[#B37B2E]"
                    >
                      ℹ️ About Founder Nivil Chaudhary
                    </Link>
                    <Link
                      href="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-[#16302B] font-medium text-sm hover:text-[#B37B2E]"
                    >
                      📍 Contact & 20 Delhi NCR Hubs
                    </Link>
                  </div>

                </div>
              </div>

              {/* Drawer Footer Info */}
              <div className="p-4 bg-[#F5EFE4] border-t border-[#E5DEC9] text-center space-y-2 text-xs text-[#5A574F]">
                <div className="flex items-center justify-center gap-1 text-[#B37B2E] font-display uppercase tracking-widest text-[10px] font-bold">
                  <KayaLeafMotif size={12} color="#B37B2E" />
                  <span>KayaSadhak Holistic Care</span>
                </div>
                <p className="text-[11px] leading-tight">
                  Verified In-Home Instructors across Delhi, Gurgaon, Noida, Faridabad, Ghaziabad & Tricity.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};
