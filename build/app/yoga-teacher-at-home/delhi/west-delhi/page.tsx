import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaUserCheck, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Personal Yoga Teacher in West Delhi & Dwarka | KayaSadhak',
  description:
    'Certified yoga teacher at home in West Delhi — Dwarka (all sectors), Janakpuri, Rajouri Garden, Paschim Vihar, Punjabi Bagh. From ₹500/session. Free trial.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/west-delhi',
  },
  openGraph: {
    title: 'Personal Yoga Teacher in West Delhi & Dwarka | KayaSadhak',
    description:
      'Certified yoga teacher at home in West Delhi — Dwarka (all sectors), Janakpuri, Rajouri Garden, Paschim Vihar, Punjabi Bagh. From ₹500/session. Free trial.',
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/west-delhi',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function WestDelhiLocalityPage() {
  const faqs = [
    {
      question: 'Do you cover all Dwarka sectors, or only some?',
      answer:
        'All Dwarka sectors (1 through 29) are covered daily by our mobile teacher network. Message us on WhatsApp with your exact sector and apartment society.',
    },
    {
      question: 'I work shift hours near IGI Airport — can I book early morning or late evening slots?',
      answer:
        'Yes — early morning slots (from 6:00 AM) and evening slots (up to 8:30 PM) are available to accommodate airline crew and corporate shift schedules.',
    },
    {
      question: 'Is there a difference in service between Dwarka and the rest of West Delhi?',
      answer:
        'No — the same three teacher tiers (Silver, Gold, Platinum), identical monthly pricing, and verified quality standards apply across all West Delhi locations.',
    },
    {
      question: 'Can I book kids yoga and my own session together in Dwarka?',
      answer:
        'Yes — many families in Dwarka apartment societies book consecutive back-to-back sessions or train together at no additional registration fee.',
    },
    {
      question: 'Do you serve Uttam Nagar, Vikaspuri, and Tilak Nagar?',
      answer:
        'Yes, all residential sectors of Vikaspuri, Tilak Nagar, Uttam Nagar, Janakpuri, and Paschim Vihar are in our daily service perimeter.',
    },
    {
      question: 'Can I request a female yoga instructor in Janakpuri or Punjabi Bagh?',
      answer:
        'Yes — certified female instructors are available for all morning and evening residential slots across West Delhi.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KayaSadhak Home Yoga - West Delhi & Dwarka',
    image: 'https://www.kayasadhak.com/images/hero_home_yoga_ncr.webp',
    telephone: '+91-8273264561',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'West Delhi & Dwarka',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5921,
      longitude: 77.0460,
    },
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/west-delhi',
    priceRange: '₹500 - ₹1000',
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

  return (
    <div className="pb-16 bg-[#F3EEE2] text-[#26241F] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_home_yoga_ncr.webp"
          alt="Personal Yoga Teacher at Home in West Delhi & Dwarka"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                West Delhi & Dwarka Hub • Sectors 1-29 Coverage
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Personal Yoga Teacher at Home in West Delhi & Dwarka
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              KayaSadhak sends verified yoga teachers to homes right across West Delhi — all Dwarka sectors, Janakpuri, Rajouri Garden, Paschim Vihar, and Punjabi Bagh for private 1-on-1 sessions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a free trial home yoga session in West Delhi / Dwarka.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Trial in West Delhi</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-[#E5C384]" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">

      {/* 2. Sub-Localities Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] p-6 sm:p-10 rounded-3xl border border-[#E5DEC9] space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#C08A3E]" />
              <span>West Delhi & Dwarka Perimeters</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
              Colonies & Dwarka Sectors We Serve Daily
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-[#16302B] font-medium">
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Dwarka Sectors (1 to 29)
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Janakpuri (All Blocks)
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Rajouri Garden & Mansarovar
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Paschim Vihar & Punjabi Bagh
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Vikaspuri & Tilak Nagar
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Uttam Nagar & Mohan Garden
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Palam Colony & Dashrath Puri
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Moti Nagar & Kirti Nagar
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Matrix */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>WEST DELHI PRICING</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#16302B]">
            Transparent 3×3 Pricing Plans
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            From ₹500/session with zero traveling charges across West Delhi & Dwarka:
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 4. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>WEST DELHI BOOKING</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book Your Free West Delhi / Dwarka Trial
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our West Delhi coordinator on WhatsApp. Share your sector or colony, timing preference, and teacher tier.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free Assessment for Full Household
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Female & Male Verified Faculty
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Shift-Friendly Morning & Evening Timings
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Personal Yoga at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on West Delhi & Dwarka Yoga" />
      </section>
      </div>
    </div>
  );
}
