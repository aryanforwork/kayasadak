import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
  FaDumbbell,
  FaArrowRight,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Personal Yoga Teacher at Home in Noida | KayaSadhak',
  description:
    'Certified 1-on-1 yoga teachers at home in Noida — Sectors 15, 18, 50, 74-78, 137 & Expressway. Silver, Gold & Platinum tiers. Free trial session.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-at-home/noida',
  },
  openGraph: {
    title: 'Personal Yoga Teacher at Home in Noida | KayaSadhak',
    description:
      'Certified 1-on-1 yoga teachers at home in Noida — Sectors 15, 18, 50, 74-78, 137 & Expressway. Silver, Gold & Platinum tiers. Free trial session.',
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/noida',
    siteName: 'KayaSadhak',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Yoga Teacher at Home in Noida | KayaSadhak',
    description:
      'Certified 1-on-1 yoga teachers at home in Noida — Sectors 15, 18, 50, 74-78, 137 & Expressway. Silver, Gold & Platinum tiers. Free trial session.',
  },
};

export default function NoidaLocalityPage() {
  const faqs = [
    {
      question: 'Which sectors in Noida do your home yoga instructors cover?',
      answer:
        'We provide home instructors across all major residential sectors in Noida, including Sector 45, Sector 50, Sector 62, Sector 74-79, Sector 93, Sector 104, Sector 137, and all along the Noida-Greater Noida Expressway.',
    },
    {
      question: 'Do you also have a physical yoga studio in Noida that I can visit?',
      answer:
        'Yes! We operate our official physical walk-in studio, KayaSadhak Yoga Studio, located at BJ Residency, Sadarpur Main Rd, Sector-45, Noida. It offers daily in-person group classes, private sessions, and on-site YTT batches.',
    },
    {
      question: 'Can I choose between a male or female instructor for home sessions in Noida?',
      answer:
        'Yes, female and male instructors across all qualification tiers (Silver, Gold, Platinum) are available for morning and evening home slots throughout Noida.',
    },
    {
      question: 'What is the pricing for home yoga sessions in Noida?',
      answer:
        'Our rates are 100% transparent: Silver Tier at ₹500/session, Gold Tier at ₹750/session, and Platinum Tier at ₹1,000/session, with zero hidden travel charges.',
    },
    {
      question: 'How quickly can a personal home teacher start in Noida?',
      answer:
        'Typically within 24 to 48 hours of booking your initial consultation and posture assessment.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KayaSadhak Home Yoga - Noida',
    image: 'https://www.kayasadhak.com/images/hero_home_yoga_ncr.webp',
    telephone: '+91-8273264561',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5355,
      longitude: 77.391,
    },
    url: 'https://www.kayasadhak.com/yoga-teacher-at-home/noida',
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
        name: 'Delhi NCR Home Yoga',
        item: 'https://www.kayasadhak.com/services/yoga-at-home',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Noida Sectors',
        item: 'https://www.kayasadhak.com/yoga-teacher-at-home/noida',
      }
    ],
  };


  return (
    <div className="pb-16 bg-[#F3EEE2] text-[#26241F] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header — flush with navbar */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-20 overflow-hidden border-b border-brand-gold-500/20">
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_home_yoga_ncr.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16302B] via-[#16302B]/95 to-[#1F4A3C]/80 z-10" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-gold-400 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Noida Locality Hub & Physical Studio</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-white">
            Personal Yoga Teacher at Home in Noida & Sector 45 Studio
          </h1>

          <p className="text-sm sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed font-light">
            Book verified personal 1-on-1 yoga instructors at your residence across all Noida sectors, or join daily group sessions at our dedicated physical studio in Sector 45, Noida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am looking for a personal home yoga instructor in Noida.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Book Home Yoga on WhatsApp</span>
            </a>
            <Link
              href="/studio-noida-sector-45"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-brand-gold-400/50 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <FaMapMarkerAlt className="text-brand-gold-400" />
              <span>Visit Sector 45 Physical Studio ➔</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DEDICATED INBOUND LINK CARD: Physical Studio Highlight in Sector 45 Noida */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 -mt-10 relative z-30">
        <div className="bg-[#FFFDF9] border-2 border-brand-gold-500/40 rounded-[32px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(22,48,43,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 text-brand-gold-600 text-xs font-bold uppercase tracking-wider">
                <FaMapMarkerAlt />
                <span>PREFER AN IN-PERSON WALK-IN STUDIO?</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-green-900">
                KayaSadhak Yoga Studio — BJ Residency, Sector 45, Noida
              </h2>
              <p className="text-xs sm:text-sm text-neutral-charcoal leading-relaxed">
                If you prefer practicing in a dedicated sanctuary with natural light and wooden floors rather than at home, step into our official physical studio at <strong>BJ Residency, 26759, Sadarpur Main Rd, Sector-45, Noida</strong>. Offering daily group classes in Hatha, Vinyasa, Ashtanga, Power Yoga, and on-site Yoga Teacher Training batches.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/studio-noida-sector-45"
                className="w-full py-4 px-6 bg-brand-green-900 hover:bg-brand-green-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Explore Sector 45 Studio</span>
                <FaArrowRight className="text-brand-gold-400" />
              </Link>
              <a
                href="https://wa.me/918796989667?text=Hi%20KayaSadhak!%20I%20want%20to%20inquire%20about%20classes%20at%20your%20Sector%2045%20Noida%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-[#FAF6F0] border border-[#E5DEC9] text-brand-green-900 hover:bg-brand-green-900 hover:text-white font-bold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-brand-gold-500" />
                <span>WhatsApp Studio Desk (+91 87969 89667)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 mt-16">
        {/* Noida Sectors Footprint */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl font-bold text-brand-green-900">
            Noida Sectors Covered for Home Visits
          </h2>
          <p className="text-sm text-neutral-grey">
            Zero travel surcharges. Our instructors travel directly to your gated society or bungalow across Noida.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {['Sector 45 & Sadarpur', 'Sector 50 & 51', 'Sector 62 & IT Corridor', 'Sector 74 to 79 (Supertech/Amrapali)', 'Sector 93 & Grand Omaxe', 'Sector 104 & Hazipur', 'Sector 137 & Paras Tierea', 'Noida-Greater Noida Expressway'].map((area, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#1F4A3C]/10 rounded-2xl shadow-sm text-xs font-semibold text-brand-green-900">
              📍 {area}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl font-bold text-brand-green-900">
            Transparent 3×3 Pricing for Noida Home Yoga
          </h2>
          <p className="text-sm text-neutral-grey">
            Silver (₹500), Gold (₹750), and Platinum (₹1,000) per session rates.
          </p>
        </div>
        <PricingTable />
      </section>

      {/* Lead Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl font-bold text-brand-green-900">
              Book Your Free Assessment in Noida
            </h2>
            <p className="text-sm text-neutral-charcoal/90 leading-relaxed">
              Connect directly with our instructor matching team to receive a personalized trial session at your residence in Noida.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm defaultService="Personal Yoga at Home" title="Book Noida Home Trial" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Noida Home Yoga & Studio FAQs" />
      </section>
      </div>
    </div>
  );
}
