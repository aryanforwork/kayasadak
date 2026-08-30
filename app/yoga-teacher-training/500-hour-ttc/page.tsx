import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaAward, FaUniversity, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: '500-Hour Master Yoga Teacher Training Delhi | KayaSadhak',
  description:
    'Complete 500-hour master-level YTT in Delhi NCR — 200 + 300 hour curriculum combined, clinical therapeutics & lineage training. Enquire on WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/500-hour-ttc',
  },
  openGraph: {
    title: '500-Hour Master Yoga Teacher Training Delhi | KayaSadhak',
    description:
      'Complete 500-hour master-level YTT in Delhi NCR — 200 + 300 hour curriculum combined, clinical therapeutics & lineage training. Enquire on WhatsApp.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/500-hour-ttc',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function YTT500HourPage() {
  const faqs = [
    {
      question: 'Should I do the 500-hour program, or 200-hour followed by 300-hour separately?',
      answer:
        'Both paths lead to the same master depth. The 500-Hour is ideal if you have committed upfront and want continuous curriculum integration. Doing them separately allows you to teach for a year between tiers.',
    },
    {
      question: 'Can complete beginners join the 500-hour program directly?',
      answer:
        'Yes — since it incorporates the full 200-Hour foundation at the beginning, no prior teaching credentials are required, though a sincere personal practice is expected.',
    },
    {
      question: 'Is this program more suited to Rishikesh/Dharamshala than Delhi NCR?',
      answer:
        'Both formats are available. For an intensive master program, many students prefer residential immersion in Rishikesh or Dharamshala, while working professionals choose Delhi NCR batches.',
    },
    {
      question: 'What career opportunities open up after completing this?',
      answer:
        'Graduates are qualified to teach multi-level classes, run specialized clinical yoga therapy practices, lead international retreats, and direct teacher training academies.',
    },
    {
      question: 'What certification do I receive?',
      answer:
        'The KayaSadhak 500-Hour Master Teacher Certificate, recognized under our tie-ups with the Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry standards.',
    },
    {
      question: 'How long does the full 500-hour program take?',
      answer:
        'Duration varies depending on intensive residential vs. weekend executive batch formats. Contact us directly on WhatsApp for upcoming batch timelines.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '500-Hour Master Yoga Teacher Training Course',
    description:
      'Complete 500-hour master-level YTT in Delhi NCR — 200 + 300 hour curriculum combined, clinical therapeutics & lineage training.',
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
          src="/images/hero_ytt_advanced_master.jpg"
          alt="500-Hour Master Yoga Teacher Training"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Highest Formal Teaching Credential
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              500-Hour Master Yoga Teacher Training in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              The complete master-level journey combining 200-Hour Foundation and 300-Hour Advanced curricula into one unified immersion. Master clinical therapeutics, classical philosophy, and authentic lineage teachings.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about the 500-Hour Master Yoga Teacher Training course.'
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

      {/* 2. Unified Master Curriculum */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Complete Sadhak Integration</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            The Full 500-Hour Master Curriculum
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Foundational Precision</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Complete 200-Hour asana biomechanics, fundamental pranayama, and Sanskrit chanting basics.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Clinical Therapeutics</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Comprehensive therapeutic applications for spinal pathologies, endocrine balance, and psychosomatic conditions.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Advanced Subtle Anatomy</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              In-depth Kundalini physiology, Granthis, Nadis, Koshas, and advanced Prana Vidya practices.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Vedic Lineage Philosophy</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Original Sanskrit shloka study across Patanjali Sutras, Upanishads, and Samkhya Karika.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">05</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Studio Leadership & Ethics</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Mentoring new teachers, running teacher training programs, and managing high-standard wellness centers.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">06</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">RYT-500 Master Credential</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Dual graduation recognized globally by Indian Federation of Yoga and Yoga Alliance (USA).
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
                <span>MASTER TRAINING ADMISSIONS</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Enquire for 500-Hour Master Admissions
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with academic leadership on WhatsApp to discuss program suitability, upcoming residential dates, and customized payment schedules.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Full 500-Hour Comprehensive Master Certification
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Residential Ashram Options in Rishikesh & Dharamshala
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Direct Mentorship from Senior Lineage Masters
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
        <FaqAccordion items={faqs} title="Frequently Asked Questions on 500-Hour Master YTT" />
      </section>
    </div>
  );
}
