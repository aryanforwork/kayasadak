import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaMountain, FaOm, FaTree, FaHotel, FaPlane } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga Teacher Training in Dharamshala | KayaSadhak',
  description:
    'Residential 200/300/500-hour YTT in Dharamshala & McLeod Ganj — Himalayan meditation retreat setting. Tie-up with Yoga Alliance USA. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/locations/dharamshala',
  },
  openGraph: {
    title: 'Yoga Teacher Training in Dharamshala | KayaSadhak',
    description:
      'Residential 200/300/500-hour YTT in Dharamshala & McLeod Ganj — Himalayan meditation retreat setting. Tie-up with Yoga Alliance USA. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/locations/dharamshala',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function DharamshalaYTTPage() {
  const faqs = [
    {
      question: 'How is Dharamshala different from Rishikesh for YTT?',
      answer:
        'Both offer the exact same KayaSadhak dual certification and curriculum. Rishikesh is on the sacred Ganga with classical Hatha roots; Dharamshala sits higher in the pine forests of the Dhauladhar Himalayas with a strong meditation focus and Tibetan culture in McLeod Ganj.',
    },
    {
      question: 'Do I need prior meditation experience for Dharamshala?',
      answer:
        'No — the curriculum does not require prior advanced meditation experience. The tranquil mountain setting naturally supports deep concentration and inner stillness.',
    },
    {
      question: 'Is accommodation and meals included in the retreat package?',
      answer:
        'Yes, full residential arrangements with serene mountain-view rooms and 3 organic sattvic meals daily are included.',
    },
    {
      question: 'Can I take the 50-Hour Yin Yoga program here specifically?',
      answer:
        'Yes, all five programs — 200-Hour, 300-Hour, 500-Hour, 200-Hour Kundalini, and 50-Hour Yin Yoga — run at our Dharamshala institute.',
    },
    {
      question: 'Is the certification recognized globally?',
      answer:
        'Yes — identical curriculum, certification, and our tie-ups with the Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry standards across all locations.',
    },
    {
      question: 'What is the best way to travel to Dharamshala from Delhi?',
      answer:
        'Fly into Kangra (Gaggal) Airport via a direct Delhi flight, or take an overnight Volvo bus from Delhi / train to Pathankot followed by a scenic mountain taxi ride.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Yoga Teacher Training in Dharamshala (McLeod Ganj)',
    description:
      'Residential 200/300/500-hour YTT in Dharamshala & McLeod Ganj — Himalayan meditation retreat setting.',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
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

  return (
    <div className="pb-16 bg-[#F3EEE2] text-[#26241F] font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_dharamshala_ytt.jpg"
          alt="Yoga Teacher Training in Dharamshala"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Dhauladhar Himalayan Foothills • McLeod Ganj Retreat
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Yoga Teacher Training in Dharamshala — 200 / 300 / 500-Hour Programs
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              Train surrounded by cedar pine forests and snow-capped Himalayan peaks. A deep meditation-focused residential certification in tie-up with Indian Federation of Yoga and Yoga Alliance (USA).
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about Yoga Teacher Training in Dharamshala.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Enquire on WhatsApp</span>
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

      {/* 2. Why Dharamshala */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>Himalayan Meditation Haven</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              Mountain Stillness, Pine Forests & Living Buddhist Culture
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Where Rishikesh is energized by the river, Dharamshala is grounded in mountain silence. Practicing asanas overlooking the Dhauladhar range with prayer flags fluttering in the cool breeze deepens meditation and breath awareness effortlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaMountain className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Snow-Capped Dhauladhar Views</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaOm className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Deep Meditation & Yin Focus</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaHotel className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Mountain Retreat Accommodation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaPlane className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Kangra Airport Shuttle Support</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/hero_dharamshala_ytt.jpg"
              alt="Dharamshala Yoga Teacher Training"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
              <div className="font-heading font-bold text-sm text-[#E5C384]">All 5 Programs Available</div>
              <p className="text-[11px] text-gray-200 mt-0.5">200-Hour Foundation, 300-Hour Advanced, 500-Hour Master, 200-Hour Kundalini, and 50-Hour Yin YTT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>DHARAMSHALA ADMISSIONS</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Enquire for Dharamshala Retreat Batches
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our Dharamshala retreat coordinators on WhatsApp for accommodation packages, seasonal batch calendars, and registration details.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Full Mountain Retreat Stay & 3 Sattvic Meals Included
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Dual Recognized Global Certification
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Daily Rooftop Himalayan Meditation Sadhana
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Yoga Teacher Training (YTT)" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Dharamshala YTT" />
      </section>
      </div>
    </div>
  );
}
