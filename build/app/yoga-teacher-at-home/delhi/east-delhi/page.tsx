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
  title: 'Personal Yoga Teacher at Home in East Delhi | KayaSadhak',
  description:
    'Certified yoga teacher at home in East Delhi — Mayur Vihar, Preet Vihar, Laxmi Nagar & Patparganj. Transparent pricing from ₹500/session. Free trial.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/east-delhi',
  },
  openGraph: {
    title: 'Personal Yoga Teacher at Home in East Delhi | KayaSadhak',
    description:
      'Certified yoga teacher at home in East Delhi — Mayur Vihar, Preet Vihar, Laxmi Nagar & Patparganj. Transparent pricing from ₹500/session. Free trial.',
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/east-delhi',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function EastDelhiLocalityPage() {
  const faqs = [
    {
      question: 'Do you cover all three phases of Mayur Vihar for home yoga?',
      answer:
        'Yes — Mayur Vihar Phase 1, Phase 2, and Phase 3 (including Pocket 1–5 societies) are within our active daily service route.',
    },
    {
      question: 'Is East Delhi pricing the same as South Delhi and Gurugram?',
      answer:
        'Yes — Platinum (₹1,000), Gold (₹750), and Silver (₹500) per-session rates and monthly packages are 100% uniform across all zones.',
    },
    {
      question: 'Can I book prenatal or postpartum yoga specifically in Patparganj?',
      answer:
        'Yes — certified female instructors specializing in trimester-wise prenatal and postpartum recovery visit IP Extension and Patparganj societies daily.',
    },
    {
      question: 'Do you send verified teachers to Laxmi Nagar and Preet Vihar?',
      answer:
        'Yes — Preet Vihar (all blocks), Laxmi Nagar, Swasthya Vihar, and Nirman Vihar are part of our standard East Delhi perimeter.',
    },
    {
      question: 'Can I request a female teacher for an East Delhi booking?',
      answer:
        'Yes — mention your preference when booking on WhatsApp and we will match you with a certified female instructor.',
    },
    {
      question: 'How quickly can an instructor start in East Delhi after booking?',
      answer:
        'Typically within 24 to 48 hours of your assessment booking, matching your preferred morning or evening schedule.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KayaSadhak Home Yoga - East Delhi',
    image: 'https://www.kayasadhak.com/images/hero_home_yoga_ncr.webp',
    telephone: '+91-8273264561',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'East Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6280,
      longitude: 77.2954,
    },
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/east-delhi',
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
          alt="Personal Yoga Teacher at Home in East Delhi"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                East Delhi Locality Hub • Mayur Vihar, Preet Vihar & Patparganj
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Personal Yoga Teacher at Home in East Delhi
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              KayaSadhak sends verified yoga teachers to homes across Mayur Vihar (Phases 1, 2, 3), Preet Vihar, Laxmi Nagar, Patparganj, and Anand Vihar for private one-on-one sessions on your schedule.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a free trial home yoga session in East Delhi.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Trial in East Delhi</span>
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
              <span>East Delhi Blue Line & IP Extension</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
              Colonies & Apartment Clusters We Serve Daily
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-[#16302B] font-medium">
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Mayur Vihar (Phase 1, 2 & 3)
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Preet Vihar & Nirman Vihar
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Patparganj & IP Extension
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Laxmi Nagar & Shakarpur
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Anand Vihar & Vivek Vihar
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Krishna Nagar & Geeta Colony
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Karkardooma & Surajmal Vihar
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#16302B]/10 flex items-center gap-2">
              <span className="text-[#B37B2E]">✓</span> Vasundhara Enclave
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Matrix */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>EAST DELHI PRICING</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#16302B]">
            Transparent 3×3 Pricing Plans
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            From ₹500/session with zero traveling charges across East Delhi:
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
                <span>EAST DELHI BOOKING</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book Your Free East Delhi Trial Session
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our East Delhi dispatch coordinator on WhatsApp. Share your colony, preferred timing, and teacher tier.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free 60-Minute Posture Assessment
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Verified Female & Male Instructors
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Up to 2 Family Members at 0 Extra Cost
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
        <FaqAccordion items={faqs} title="Frequently Asked Questions on East Delhi Home Yoga" />
      </section>
      </div>
    </div>
  );
}
