import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaWater, FaOm, FaMountain, FaHotel, FaPlane } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga Teacher Training in Rishikesh | KayaSadhak',
  description:
    'Residential 200/300/500-hour YTT in Rishikesh — Ganga-side setting, Ganga Aarti, Himalayan immersion. Tie-up with Yoga Alliance USA. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/locations/rishikesh',
  },
  openGraph: {
    title: 'Yoga Teacher Training in Rishikesh | KayaSadhak',
    description:
      'Residential 200/300/500-hour YTT in Rishikesh — Ganga-side setting, Ganga Aarti, Himalayan immersion. Tie-up with Yoga Alliance USA. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/locations/rishikesh',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function RishikeshYTTPage() {
  const faqs = [
    {
      question: 'Which YTT program should I choose for Rishikesh — 200, 300, or 500 hours?',
      answer:
        'If you are new to formal teacher training, start with the 200-Hour foundation or enroll in the 500-Hour Master track. If you already hold a 200-Hour certificate, the 300-Hour is the natural next step.',
    },
    {
      question: 'Do I need any prior yoga teaching experience to train in Rishikesh?',
      answer:
        'For the 200-Hour and 500-Hour programs, no formal teaching background is required, though a consistent personal practice is expected. The 300-Hour assumes a prior 200-Hour certification.',
    },
    {
      question: 'Is accommodation and sattvic meals included in the residential program?',
      answer:
        'Yes, full residential arrangements with clean ashram/retreat rooms and nutritious organic sattvic meals are included for the duration of the course.',
    },
    {
      question: 'What is the best time of year to train in Rishikesh?',
      answer:
        'Batches run year-round, with spring (Feb–April) and autumn/winter (Oct–Dec) being particularly popular. Message us on WhatsApp for current batch schedules.',
    },
    {
      question: 'Can international students join?',
      answer:
        'Yes — students from around the world train with us in Rishikesh regularly. We provide full travel guidance from Delhi International Airport (IGI) to Rishikesh.',
    },
    {
      question: 'Is this the same certification as training in Delhi NCR?',
      answer:
        'Yes — the curriculum, certification, and our tie-ups with the Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry standards are identical across all locations.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Yoga Teacher Training in Rishikesh (Ganga Sai Ghat)',
    description:
      'Residential 200/300/500-hour YTT in Rishikesh — Ganga-side setting, Ganga Aarti, Himalayan immersion.',
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
    <div className="space-y-16 sm:space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F] font-body">
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
          src="/images/hero_rishikesh_ganga.webp"
          alt="Yoga Teacher Training in Rishikesh"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Ganga Sai Ghat • Sacred Himalayan Ashram Immersion
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Yoga Teacher Training in Rishikesh — 200 / 300 / 500-Hour Programs
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              Immerse your mind and body where the sacred Ganga emerges from the Himalayan foothills. Authentic residential certifications in tie-up with Indian Federation of Yoga and Yoga Alliance (USA).
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about Yoga Teacher Training batches in Rishikesh.'
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

      {/* 2. Why Rishikesh */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>The World Capital of Yoga</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              Ganga Aarti, Pristine Mountain Air & Living Vedic Heritage
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Rishikesh is organized around sadhana in a way no urban environment can replicate. Daily life revolves around morning asanas in the cool Himalayan breeze, afternoon philosophy by the Ganga, and evening Aarti at the sacred ghats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaWater className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Daily Ganga Ghat Immersion</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaHotel className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Ashram Stay & Sattvic Meals</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaOm className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Evening Chanting & Kirtan</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaPlane className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Airport Transfer Assistance</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/card_ytt_rishikesh.webp"
              alt="Rishikesh Yoga Teacher Training"
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
                <span>RISHIKESH ASHRAM ADMISSIONS</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Enquire for Upcoming Rishikesh Batches
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our Rishikesh ashram coordinators on WhatsApp for accommodation packages, seasonal batch calendars, and registration forms.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Full Ashram Accommodation & 3 Sattvic Meals Included
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> International Dual Certification
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Daily Morning & Evening Ganga Ghat Sadhana
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
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Rishikesh YTT" />
      </section>
    </div>
  );
}
