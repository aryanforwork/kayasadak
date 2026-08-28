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

      {/* 2. Main Navbar (Pure White Background) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#1F4A3C]/10 shadow-sm">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-22 flex items-center justify-between py-2">
          {/* Larger Brand Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-14 w-12 sm:h-16 sm:w-14 flex-shrink-0">
              <img
                src="/images/logo.webp"
                alt="KayaSadhak Logo"
                className="h-full w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-3xl sm:text-[36px] text-brand-green-900 leading-none tracking-tight">
                  KayaSadhak
                </span>
                <KayaLeafMotif size={20} color="#C08A3E" className="opacity-90" />
              </div>
              <span className="font-display text-[10px] sm:text-[11px] text-brand-gold-600 font-semibold tracking-[0.2em] uppercase mt-1">
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
                <span className="bg-brand-gold-500/15 text-brand-gold-600 text-[10px] font-bold px-2 py-0.5 rounded-full ml-0.5">
                  ₹500+
                </span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
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

              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
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

            {/* Dropdown 5: Therapeutic Yoga */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('therapeutic')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.therapeutic.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>Therapeutic Yoga</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.therapeutic.items.map((item, i) => (
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

            {/* Dropdown 6: About Us */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={dropdownMenus.about.link}
                className="flex items-center gap-1 hover:text-brand-green-900 transition-colors py-2"
              >
                <span>About Us</span>
                <span className="text-xs text-neutral-grey group-hover:text-brand-green-900 transition-transform group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              <div className="absolute top-full right-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#1F4A3C]/15 p-3 hidden group-hover:block transition-all z-50 animate-fadeIn">
                {dropdownMenus.about.items.map((item, i) => (
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

            <Link href="/contact-us" className="hover:text-brand-green-900 py-2 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action: Phone Direct Link (NO "Book Free Demo" button as requested) */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#F3EEE2]/60 hover:bg-[#F3EEE2] border border-[#1F4A3C]/15 text-brand-green-900 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-brand-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-brand-green-900 hover:bg-brand-green-900/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#1F4A3C]/10 px-6 pt-4 pb-8 space-y-4 font-body text-sm shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-charcoal hover:text-brand-green-900 font-semibold border-b border-gray-100"
          >
            Home
          </Link>

          <div className="space-y-1 border-b border-gray-100 pb-3">
            <Link
              href="/services/yoga-at-home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-bold text-brand-green-900"
            >
              Yoga at Home
            </Link>
            <div className="pl-3 space-y-1.5 text-xs text-neutral-grey">
              <Link href="/services/yoga-at-home" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Personal 1-on-1 Home Yoga
              </Link>
              <Link href="/services/senior-citizen-yoga" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Senior Citizen Home Yoga
              </Link>
              <Link href="/services/corporate-yoga" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Corporate Wellness Program
              </Link>
            </div>
          </div>

          <div className="space-y-1 border-b border-gray-100 pb-3">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-bold text-brand-green-900 flex items-center justify-between"
            >
              <span>Pricing Matrix</span>
              <span className="bg-brand-gold-500/15 text-brand-gold-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                ₹500+
              </span>
            </Link>
            <div className="pl-3 space-y-1.5 text-xs text-neutral-grey">
              <Link href="/pricing#platinum" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Platinum Tier (₹1,000 / sess)
              </Link>
              <Link href="/pricing#gold" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Gold Tier (₹750 / sess)
              </Link>
              <Link href="/pricing#silver" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Silver Tier (₹500 / sess)
              </Link>
            </div>
          </div>

          <div className="space-y-1 border-b border-gray-100 pb-3">
            <Link
              href="/yoga-teacher-training/200-hour-ttc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-bold text-brand-green-900"
            >
              YTT Courses
            </Link>
            <div className="pl-3 space-y-1.5 text-xs text-neutral-grey">
              <Link href="/yoga-teacher-training/200-hour-ttc" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • 200-Hour Foundation TTC
              </Link>
              <Link href="/yoga-teacher-training/locations/rishikesh" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Rishikesh & Himalayan Retreats
              </Link>
            </div>
          </div>

          <div className="space-y-1 border-b border-gray-100 pb-3">
            <Link
              href="/services/panchkarma"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-bold text-brand-green-900"
            >
              Authentic Panchkarma
            </Link>
            <div className="pl-3 space-y-1.5 text-xs text-neutral-grey">
              <Link href="/services/panchkarma" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-brand-green-900">
                • Abhyanga, Swedana & Shirodhara
              </Link>
            </div>
          </div>

          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-charcoal hover:text-brand-green-900 border-b border-gray-100"
          >
            About Us
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-charcoal hover:text-brand-green-900"
          >
            Contact
          </Link>

          <div className="pt-3">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="w-full py-3 bg-[#1F4A3C] text-white font-semibold rounded-xl text-center block text-xs shadow-md"
            >
              📞 Call {CONTACT_INFO.phone} Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
