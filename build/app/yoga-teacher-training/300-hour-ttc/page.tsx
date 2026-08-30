import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaAward, FaUniversity, FaHeartbeat, FaBookOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: '300-Hour Advanced Yoga Teacher Training Delhi | KayaSadhak',
  description:
    'Advanced 300-hour YTT in Delhi NCR for 200-hour graduates — deeper philosophy, therapeutic yoga & pranayama. Tie-up with Yoga Alliance USA. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/300-hour-ttc',
  },
  openGraph: {
    title: '300-Hour Advanced Yoga Teacher Training Delhi | KayaSadhak',
    description:
      'Advanced 300-hour YTT in Delhi NCR for 200-hour graduates — deeper philosophy, therapeutic yoga & pranayama. Tie-up with Yoga Alliance USA. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/300-hour-ttc',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function YTT300HourPage() {
  const faqs = [
    {
      question: 'Do I need to complete my 200-hour with KayaSadhak specifically to join?',
      answer:
        'No — a 200-hour certificate from any recognized school is accepted. Send us your certificate and syllabus on WhatsApp so we can confirm alignment.',
    },
    {
      question: 'What is the real difference between this and the 200-hour course?',
      answer:
        'The 200-Hour builds your foundation. The 300-Hour assumes that foundation and goes into therapeutic clinical applications, advanced asana sequencing, and philosophical depth.',
    },
    {
      question: 'Should I do this 300-Hour or the standalone 500-Hour program?',
      answer:
        'If you already hold a 200-Hour certificate, this 300-Hour course completes your 500 hours of total training. If you are starting fresh with no prior certification, the standalone 500-Hour Master track is recommended.',
    },
    {
      question: 'Can I specialize in therapeutic yoga through this course?',
      answer:
        'Yes, therapeutic yoga protocols for musculoskeletal, hormonal, and stress conditions are a core specialized module within the 300-Hour curriculum.',
    },
    {
      question: 'Where does this course run?',
      answer:
        'In-person in Delhi NCR, or across any of our 8 other institute locations including Rishikesh (Ganga Sai Ghat) and Dharamshala (McLeod Ganj) for residential immersion.',
    },
    {
      question: 'What certification results from completing this course?',
      answer:
        'A KayaSadhak 300-Hour Advanced Certificate, issued under our institutional tie-up with the Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry standards.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '300-Hour Advanced Yoga Teacher Training Course',
    description:
      'Advanced 300-hour YTT in Delhi NCR for 200-hour graduates — deeper philosophy, therapeutic yoga & pranayama.',
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
          src="/images/hero_ytt_advanced_master.jpg"
          alt="300-Hour Advanced Yoga Teacher Training in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Advanced Specialization for 200-Hour Certified Teachers
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              300-Hour Advanced Yoga Teacher Training in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              Where certified teachers specialize. Master advanced therapeutic yoga applications, Sanskrit philosophical texts, subtle pranayama mastery, and senior adjustment techniques.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about the 300-Hour Advanced Yoga Teacher Training course.'
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

      {/* 2. Advanced Modules */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Advanced Modules</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            What the 300-Hour Advanced Course Covers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Therapeutic Yoga & Pathology</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Applying yoga as clinical therapy for lumbar disc pain, sciatica, cervical issues, PCOD, thyroid, and anxiety.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Advanced Asana & Props</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Iyengar prop usage, advanced arm balances, deep backbends, inversions, and safe multi-level adjustments.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Subtle Body & Kundalini</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Nadis, Chakras, Koshas, Vayus, Mudras, and Bandhas (Mula, Uddiyana, Jalandhara, Maha Bandha) mastery.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Deep Vedic Philosophy</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Rigorous textual analysis of the Bhagavad Gita, Upanishads, and Samkhya philosophy.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">05</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Master Teacher Sequencing</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Designing specialized workshops, therapeutic series, and institutional retreats with authentic presence.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">06</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Path to RYT-500</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Combined with your 200-Hour prerequisite, this course completes the full 500-Hour master credential.
            </p>
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
                <span>ADVANCE YOUR PRACTICE</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Enquire for 300-Hour Batch Dates
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with academic coordinators on WhatsApp for syllabus brochures, batch schedules, and fee structures across Delhi NCR and Himalayan ashram centers.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Recognized by Indian Federation of Yoga & Yoga Alliance
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Clinical Yoga Therapy Modules Included
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Master Faculty Hands-On Mentorship
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
        <FaqAccordion items={faqs} title="Frequently Asked Questions on 300-Hour Advanced YTT" />
      </section>
      </div>
    </div>
  );
}
