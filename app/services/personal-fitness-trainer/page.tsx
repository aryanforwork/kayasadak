import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO, FITNESS_PRICING_TIERS, FITNESS_PRICING_PACKAGES } from '@/config/pricing';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaUserCheck,
  FaDumbbell,
  FaShieldAlt,
  FaClock,
  FaCalendarAlt,
  FaGraduationCap,
  FaCrown,
  FaStar,
  FaArrowRight,
  FaRunning,
  FaHeartbeat,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Personal Fitness Trainer at Home in Delhi NCR & Chandigarh Tricity | KayaSadhak',
  description:
    'Certified 1-on-1 personal fitness trainer at your home across Delhi NCR & Chandigarh Tricity. Silver (₹1,000), Gold (₹1,500), Platinum (₹2,000) tiers. Book a home trial on WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/personal-fitness-trainer',
  },
  openGraph: {
    title: 'Personal Fitness Trainer at Home in Delhi NCR & Chandigarh Tricity | KayaSadhak',
    description:
      'Certified 1-on-1 personal fitness trainer at your home across Delhi NCR & Chandigarh Tricity. Silver (₹1,000), Gold (₹1,500), Platinum (₹2,000) tiers. Book a home trial on WhatsApp.',
    url: 'https://www.kayasadhak.com/services/personal-fitness-trainer',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function PersonalFitnessTrainerPage() {
  const faqs = [
    {
      question: 'How does personal fitness training at home work?',
      answer:
        'A certified KayaSadhak fitness trainer comes directly to your residence at your preferred morning or evening schedule. Sessions combine structured functional strength, core activation, cardiovascular conditioning, and assisted stretching tailored to your personal goals and living space.',
    },
    {
      question: 'What is the pricing for home personal fitness training?',
      answer:
        'Our rates are 100% transparent and published: Silver Tier is ₹1,000 per session, Gold Tier is ₹1,500 per session, and Platinum Tier is ₹2,000 per session. Monthly packages start at ₹12,000 for 12 sessions (3 days a week). There are zero travel charges across Delhi NCR & Chandigarh Tricity.',
    },
    {
      question: 'Do I need gym machines or dumbbells at home?',
      answer:
        'No large gym equipment is required. Your trainer utilizes bodyweight mechanics, high-grade resistance bands, suspension equipment, and portable training aids. If you already own dumbbells, kettlebells, or a home gym, your trainer will incorporate them into a customized progression plan.',
    },
    {
      question: 'Can I request a female fitness trainer?',
      answer:
        'Yes. Both verified female and male personal trainers are available across Delhi NCR & Chandigarh Tricity. Please share your gender preference when booking your trial on WhatsApp.',
    },
    {
      question: 'What is the difference between the Silver, Gold, and Platinum fitness tiers?',
      answer:
        'The tiers reflect credential depth and years of active coaching experience. Silver trainers hold recognized personal trainer certifications (K11/ACE/equivalent) with 3+ years experience. Gold trainers have 5+ years experience with specialized strength or nutrition credentials. Platinum trainers bring 8+ years experience with master credentials and rehab/biomechanics specializations.',
    },
    {
      question: 'Can two family members train together during the session?',
      answer:
        'Yes. Up to two family members or partners can train together during the 60-minute private home session at no extra cost, provided both have aligned fitness levels and space.',
    },
    {
      question: 'Which cities and localities do your home fitness trainers cover?',
      answer:
        'We cover all major residential neighborhoods across Delhi NCR (South Delhi, Central Delhi, West Delhi, Noida, Greater Noida, Gurugram, Faridabad, Ghaziabad) and Chandigarh Tricity (Chandigarh, Mohali, Panchkula).',
    },
  ];

  // Schema: Service with 9 Offer entries in Silver -> Gold -> Platinum order
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Fitness Trainer at Home',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'City', name: 'Panchkula' },
    ],
    description:
      'Certified 1-on-1 personal fitness trainer at your home across Delhi NCR & Chandigarh Tricity. Silver (₹1,000), Gold (₹1,500), Platinum (₹2,000) tiers.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Personal Fitness Trainer Monthly Packages',
      itemListElement: [
        // Silver Tier (3 offers)
        {
          '@type': 'Offer',
          name: 'Silver Fitness Tier - 12 Sessions (3 Days/Week)',
          price: '12000',
          priceCurrency: 'INR',
          description: 'Silver Tier personal fitness coaching, 12 sessions per month at ₹1,000/session.',
        },
        {
          '@type': 'Offer',
          name: 'Silver Fitness Tier - 16 Sessions (4 Days/Week)',
          price: '16000',
          priceCurrency: 'INR',
          description: 'Silver Tier personal fitness coaching, 16 sessions per month at ₹1,000/session.',
        },
        {
          '@type': 'Offer',
          name: 'Silver Fitness Tier - 20 Sessions (5 Days/Week)',
          price: '20000',
          priceCurrency: 'INR',
          description: 'Silver Tier personal fitness coaching, 20 sessions per month at ₹1,000/session.',
        },
        // Gold Tier (3 offers)
        {
          '@type': 'Offer',
          name: 'Gold Fitness Tier - 12 Sessions (3 Days/Week)',
          price: '18000',
          priceCurrency: 'INR',
          description: 'Gold Tier personal fitness coaching, 12 sessions per month at ₹1,500/session.',
        },
        {
          '@type': 'Offer',
          name: 'Gold Fitness Tier - 16 Sessions (4 Days/Week)',
          price: '24000',
          priceCurrency: 'INR',
          description: 'Gold Tier personal fitness coaching, 16 sessions per month at ₹1,500/session.',
        },
        {
          '@type': 'Offer',
          name: 'Gold Fitness Tier - 20 Sessions (5 Days/Week)',
          price: '30000',
          priceCurrency: 'INR',
          description: 'Gold Tier personal fitness coaching, 20 sessions per month at ₹1,500/session.',
        },
        // Platinum Tier (3 offers)
        {
          '@type': 'Offer',
          name: 'Platinum Fitness Tier - 12 Sessions (3 Days/Week)',
          price: '24000',
          priceCurrency: 'INR',
          description: 'Platinum Tier personal fitness coaching, 12 sessions per month at ₹2,000/session.',
        },
        {
          '@type': 'Offer',
          name: 'Platinum Fitness Tier - 16 Sessions (4 Days/Week)',
          price: '32000',
          priceCurrency: 'INR',
          description: 'Platinum Tier personal fitness coaching, 16 sessions per month at ₹2,000/session.',
        },
        {
          '@type': 'Offer',
          name: 'Platinum Fitness Tier - 20 Sessions (5 Days/Week)',
          price: '40000',
          priceCurrency: 'INR',
          description: 'Platinum Tier personal fitness coaching, 20 sessions per month at ₹2,000/session.',
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kayasadhak.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.kayasadhak.com/services/yoga-at-home',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Personal Fitness Trainer',
        item: 'https://www.kayasadhak.com/services/personal-fitness-trainer',
      },
    ],
  };

  return (
    <div className="pb-16 bg-[#F3EEE2] text-[#26241F] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_weight_loss_yoga.jpg"
          alt="Personal Fitness Trainer at Home in Delhi NCR & Chandigarh Tricity"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 scale-105 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-xs border border-white/25 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                1-on-1 Certified Home Fitness Coaching
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Personal Fitness Trainer at Home in Delhi NCR & Chandigarh Tricity
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              Certified 1-on-1 fitness coaching delivered right inside your living room or residential clubhouse. Progressive functional strength, fat loss, mobility, and posture correction — completely customized to your body, with zero gym travel.
            </p>

            {/* Quick Badges Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-brand-gold-300 pt-2">
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold-500" />
                <span>Silver (₹1,000) • Gold (₹1,500) • Platinum (₹2,000)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold-500" />
                <span>Female & Male Trainers Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold-500" />
                <span>Zero Travel Charges</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a free 1-on-1 personal fitness assessment session at my home.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center gap-2.5 active:scale-95"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>Book Home Fitness Trial</span>
              </a>

              <a
                href="#pricing"
                className="px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <span>View Tiered Pricing</span>
                <FaArrowRight className="w-3 h-3 text-brand-gold-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Answer-First Overview Banner */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-12">
        <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>DIRECT ANSWER</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
            How KayaSadhak Personal Fitness Training Works at Your Residence
          </h2>
          <p className="font-body text-sm sm:text-base text-[#4A4842] leading-relaxed">
            Unlike commercial gym trainers who split attention across multiple members, KayaSadhak pairs you with an audited, credentialed fitness trainer dedicated solely to your session. Every workout is programmed around your orthopedic history, joint health, and lifestyle schedule. Whether your focus is visceral fat loss, lean muscle tone, functional posture rebalancing, or sports conditioning, your trainer brings the accountability and technique directly to your residence across Delhi NCR & Chandigarh Tricity.
          </p>
        </div>
      </section>

      {/* 3. Transparent Fitness Pricing Matrix */}
      <section id="pricing" className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>TRANSPARENT FITNESS PRICING</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#16302B] leading-tight">
            Personal Fitness Trainer Tier Pricing
          </h2>
          <p className="font-body text-sm sm:text-base text-[#5A574F]">
            Displayed strictly in ascending Silver (₹1,000) → Gold (₹1,500) → Platinum (₹2,000) order with zero hidden fees.
          </p>
        </div>

        {/* 3-Column Fitness Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {/* TIER 1: SILVER FITNESS TIER */}
          <div className="bg-[#FAF6F0] border border-[#D9CEB9] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-6 pt-2">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-[#C0C0C0] bg-[#EFEFEF] flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform">
                  <FaDumbbell className="w-6 h-6 text-[#5A574F]" />
                </div>
                <div className="font-display font-bold text-xs tracking-[0.22em] text-[#5A574F] uppercase mt-3">
                  SILVER FITNESS TIER
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#16302B] leading-none">
                    ₹1,000
                  </span>
                  <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
                </div>
              </div>

              {/* Qualification Note */}
              <div className="bg-[#EFE8DC]/70 border border-[#E0D7C4] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#DCD3C0] text-[#5A574F] flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-4 h-4" />
                </div>
                <p className="leading-tight font-medium">
                  Certified Personal Trainer (K11/ACE/equivalent recognized certification) + <span className="font-bold text-[#16302B]">3+ Years Experience</span> [CLIENT TO CONFIRM]
                </p>
              </div>

              {/* Monthly Packages */}
              <div className="space-y-2.5 pt-1">
                <div className="text-center text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                  MONTHLY PACKAGE RATES
                </div>
                <div className="space-y-2 font-body text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                    <span className="font-medium text-[#4A4842]">12 Sessions (3d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹12,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#E2EBE7] border border-[#16302B]/20">
                    <span className="font-bold text-[#16302B]">16 Sessions (4d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹16,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                    <span className="font-medium text-[#4A4842]">20 Sessions (5d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹20,000</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#383630]">
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Foundational functional strength & fat loss</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Postural rebalancing & core conditioning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Up to 2 family members train together</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in booking the Silver Fitness Tier (₹1,000/sess).'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#16302B] hover:bg-[#0E211D] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Select Silver Plan</span>
              </a>
            </div>
          </div>

          {/* TIER 2: GOLD FITNESS TIER (MOST POPULAR) */}
          <div className="bg-[#FAF6F0] border-2 border-[#C08A3E] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-2 group">
            <div className="absolute top-0 right-0 bg-[#C08A3E] text-white font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <FaStar className="w-3 h-3 text-white" />
              <span>MOST POPULAR</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#C08A3E] bg-[#F7EFE0] flex items-center justify-center mx-auto shadow-md group-hover:scale-105 transition-transform">
                  <FaStar className="w-7 h-7 text-[#C08A3E]" />
                </div>
                <div className="font-display font-bold text-xs tracking-[0.22em] text-[#C08A3E] uppercase mt-3">
                  GOLD FITNESS TIER
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#C08A3E] leading-none">
                    ₹1,500
                  </span>
                  <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
                </div>
              </div>

              {/* Qualification Note */}
              <div className="bg-[#F7EFE0] border border-[#E8DABF] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E8DABF] text-[#C08A3E] flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-4 h-4" />
                </div>
                <p className="leading-tight font-medium">
                  Certified Personal Trainer + Strength/Nutrition credential + <span className="font-bold text-[#C08A3E]">5+ Years Experience</span> [CLIENT TO CONFIRM]
                </p>
              </div>

              {/* Monthly Packages */}
              <div className="space-y-2.5 pt-1">
                <div className="text-center text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                  MONTHLY PACKAGE RATES
                </div>
                <div className="space-y-2 font-body text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F2E6] border border-[#E8DABF]/60">
                    <span className="font-medium text-[#4A4842]">12 Sessions (3d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹18,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F0E2C8] border border-[#C08A3E]/40 shadow-xs">
                    <span className="font-bold text-[#B37B2E]">16 Sessions (4d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#B37B2E]">₹24,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F2E6] border border-[#E8DABF]/60">
                    <span className="font-medium text-[#4A4842]">20 Sessions (5d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹30,000</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#383630]">
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Targeted muscle hypertrophy & recomposition</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Nutritional macro guidance & body tracking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Athletic conditioning & high-volume stamina</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in booking the Gold Fitness Tier (₹1,500/sess).'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#C08A3E] hover:bg-[#A8762F] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>Select Gold Plan</span>
              </a>
            </div>
          </div>

          {/* TIER 3: PLATINUM FITNESS TIER (MASTER CREDENTIAL) */}
          <div className="bg-[#FAF6F0] border-2 border-[#16302B] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#16302B] text-[#E5C384] font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5 border-b border-l border-[#C08A3E]/30">
              <FaCrown className="w-3 h-3 text-[#E5C384]" />
              <span>MASTER CREDENTIAL</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-[#C08A3E]/40 bg-[#F5EFE4] flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform">
                  <FaCrown className="w-7 h-7 text-[#16302B]" />
                </div>
                <div className="font-display font-bold text-xs tracking-[0.22em] text-[#16302B] uppercase mt-3">
                  PLATINUM FITNESS TIER
                </div>
                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="font-heading font-bold text-4xl sm:text-[46px] text-[#16302B] leading-none">
                    ₹2,000
                  </span>
                  <span className="font-body text-xs text-[#5A574F] font-medium">/ session</span>
                </div>
              </div>

              {/* Qualification Note */}
              <div className="bg-[#EFE8DC]/80 border border-[#E0D7C4] rounded-2xl p-3.5 text-left text-xs text-[#4A4842] flex items-center gap-3 shadow-inner">
                <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#DCD3C0] text-[#B37B2E] flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-4 h-4" />
                </div>
                <p className="leading-tight font-medium">
                  Advanced-level credential (NASM-CPT/Master) + Rehab certification + <span className="font-bold text-[#16302B]">8+ Years Experience</span> [CLIENT TO CONFIRM]
                </p>
              </div>

              {/* Monthly Packages */}
              <div className="space-y-2.5 pt-1">
                <div className="text-center text-[10px] font-bold text-[#B37B2E] tracking-[0.2em] uppercase">
                  MONTHLY PACKAGE RATES
                </div>
                <div className="space-y-2 font-body text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                    <span className="font-medium text-[#4A4842]">12 Sessions (3d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹24,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#E2EBE7] border border-[#16302B]/20">
                    <span className="font-bold text-[#16302B]">16 Sessions (4d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹32,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EEE4] border border-[#E0D7C4]/60">
                    <span className="font-medium text-[#4A4842]">20 Sessions (5d/wk)</span>
                    <span className="font-heading font-bold text-base text-[#16302B]">₹40,000</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#383630]">
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Injury rehab, disc safety & joint decompression</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Biomechanical posture correction & elite coaching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-[#C08A3E] flex-shrink-0" />
                  <span>Priority scheduling & direct master coach access</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in booking the Platinum Fitness Tier (₹2,000/sess).'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#16302B] hover:bg-[#0E211D] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Select Platinum Plan</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What a Session Looks Like (4 Structured Blocks) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-brand-green-900">
            What a 60-Minute Home Fitness Session Looks Like
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-grey">
            Every session is balanced across four systematic phases for maximum safety and metabolic efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#1F4A3C]/15 rounded-2xl p-6 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-heading font-bold text-lg text-brand-green-900">
              Joint Mobility & Activation (10 mins)
            </h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Dynamic joint warm-ups, scapular retraction, hip mobility drills, and glute activation to prime tendons and prevent injury before loading.
            </p>
          </div>

          <div className="bg-white border border-[#1F4A3C]/15 rounded-2xl p-6 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-heading font-bold text-lg text-brand-green-900">
              Progressive Strength (25 mins)
            </h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Compound movement patterns (squat, hinge, push, pull, carry) using resistance bands, dumbbells, or calisthenics calibrated to your baseline.
            </p>
          </div>

          <div className="bg-white border border-[#1F4A3C]/15 rounded-2xl p-6 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-heading font-bold text-lg text-brand-green-900">
              Metabolic Conditioning (15 mins)
            </h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Targeted high-efficiency intervals, core stabilization circuits, and functional agility drills to accelerate fat oxidation and stamina.
            </p>
          </div>

          <div className="bg-white border border-[#1F4A3C]/15 rounded-2xl p-6 shadow-sm space-y-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 className="font-heading font-bold text-lg text-brand-green-900">
              Assisted Decompression (10 mins)
            </h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Trainer-assisted PNF stretching, spinal decompression, diaphragmatic breathwork, and muscular cooldown to reduce DOMS soreness.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Equipment Provided vs What You Need */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14">
        <div className="bg-[#16302B] text-white rounded-3xl p-8 sm:p-12 border border-brand-gold-500/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 px-3 py-1 rounded-full text-xs font-bold text-brand-gold-400 uppercase tracking-wider">
                <FaDumbbell className="w-3.5 h-3.5" />
                <span>Zero Gym Gear Needed</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                Minimal Space. Maximum Home Transformation.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                You do not need a home gym or large machines. Our trainers bring loop resistance bands, heavy power bands, suspension trainers, agility cones, and core sliders. All you need is an open 6×6 ft floor space and comfortable workout shoes.
              </p>
              <div className="pt-2">
                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hi KayaSadhak! I want to consult about personal fitness training at my home.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Consult on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="font-bold text-brand-gold-400 uppercase text-[11px] tracking-wider">
                  What Trainer Brings
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>✓ Heavy &amp; mini loop resistance bands</li>
                  <li>✓ Core sliders &amp; agility markers</li>
                  <li>✓ Digital body-fat caliper &amp; measurement tape</li>
                  <li>✓ Customized session programming tablet</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="font-bold text-brand-gold-400 uppercase text-[11px] tracking-wider">
                  What You Keep Ready
                </div>
                <ul className="space-y-1.5 text-gray-200">
                  <li>✓ 6×6 ft clear floor space</li>
                  <li>✓ Water bottle &amp; sweat towel</li>
                  <li>✓ Supportive training shoes</li>
                  <li>✓ Any existing dumbbells/mats you own</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lead Generation Form */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#B37B2E]">
              <KayaLeafMotif size={13} color="#C08A3E" />
              <span>FREE 1-ON-1 TRIAL SESSION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Request Your In-Home Personal Fitness Assessment
            </h2>
            <p className="font-body text-sm text-[#4A4842] leading-relaxed">
              Book your complimentary 60-minute movement screen and fitness baseline trial. We match you with verified Silver, Gold, or Platinum male or female trainers in your exact neighborhood across Delhi NCR & Chandigarh Tricity.
            </p>
            <div className="space-y-2 text-xs text-[#5A574F]">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#C08A3E]" />
                <span>Zero registration fees or travel charges</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#C08A3E]" />
                <span>Free instructor replacement if not 100% satisfied</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#C08A3E]" />
                <span>Up to 2 family members train together</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadGenForm title="Book Home Fitness Trial" />
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14">
        <FaqAccordion items={faqs} title="Personal Fitness Trainer FAQs" />
      </section>
    </div>
  );
}
