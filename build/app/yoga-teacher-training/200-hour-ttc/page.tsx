import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaAward, FaUniversity, FaBookOpen, FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: '200-Hour Yoga Teacher Training in Delhi NCR | KayaSadhak',
  description:
    'Foundation 200-hour YTT in Delhi NCR, in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Hatha, anatomy, teaching methodology. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc',
  },
  openGraph: {
    title: '200-Hour Yoga Teacher Training in Delhi NCR | KayaSadhak',
    description:
      'Foundation 200-hour YTT in Delhi NCR, in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Hatha, anatomy, teaching methodology. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function YTT200HourPage() {
  const faqs = [
    {
      question: 'Do I need prior yoga teaching experience to join?',
      answer:
        'No. Most students have a personal practice but no formal teaching experience — the course is built from the ground up to take you from passionate practitioner to confident teacher.',
    },
    {
      question: 'Is 200 hours enough to actually start teaching?',
      answer:
        'Yes. 200 hours is the industry-standard international entry credential and qualifies you to teach general classes globally. Many teachers progress to the 300-Hour program later to deepen therapeutic applications.',
    },
    {
      question: 'What is the difference between 200-Hour, 300-Hour, and 500-Hour programs?',
      answer:
        'The 200-Hour is the foundational entry credential. The 300-Hour builds upon it with advanced asanas and therapeutic alignment. The 500-Hour combines both into an all-inclusive master sadhak certification.',
    },
    {
      question: 'Is this program in-person only, or is there a hybrid option?',
      answer:
        'We run intensive in-person batches across Delhi NCR and Himalayan retreats, with hybrid options available. Message us on WhatsApp to discuss current formats.',
    },
    {
      question: 'What certification do I receive on completion?',
      answer:
        'A KayaSadhak 200-Hour Teacher Training certificate, issued under our institutional tie-ups and partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry standards.',
    },
    {
      question: 'Can I train at the Rishikesh or Dharamshala locations instead of Delhi NCR?',
      answer:
        'Yes — the same 200-Hour curriculum runs across all 9 premier institute locations, including residential ashram immersions in Rishikesh (Ganga Sai Ghat) and Dharamshala (McLeod Ganj).',
    },
    {
      question: 'How do I find out current batch dates and course fees?',
      answer:
        'Message our academic coordinator directly on WhatsApp at +91-8273264561 for up-to-date batch schedules, syllabus brochures, and fee structures.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '200-Hour Foundation Yoga Teacher Training Course',
    description:
      'Foundation 200-hour YTT in Delhi NCR, in tie-up with Indian Federation of Yoga & Yoga Alliance USA.',
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
          src="/images/hero_rishikesh_ganga.webp"
          alt="200-Hour Yoga Teacher Training in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Dual Certification • Indian Federation of Yoga & Yoga Alliance
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              200-Hour Foundation Yoga Teacher Training in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              The international gateway to teaching yoga professionally. Comprehensive immersion in traditional Hatha, Ashtanga, anatomy, teaching methodology, and Vedic philosophy across our 9 premier institute centers.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about the 200-Hour Yoga Teacher Training course.'
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

      {/* 2. Course Curriculum Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>200-Hour Core Modules</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            What the 200-Hour Foundation Covers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Asana Alignment & Mastery</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Foundational postures in Hatha and Ashtanga Vinyasa, with repetition to demonstrate, adjust, and cue correctly.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Anatomy & Injury Prevention</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Biomechanics, skeletal variations, muscle engagement, and injury management so you teach safely from day one.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Pranayama & Kriyas</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Classical yogic breath control (Nadi Shodhana, Kapalabhati, Bhastrika, Ujjayi, Sheetali) and cleansing kriyas.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Philosophy & Sanskrit Texts</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Patanjali Yoga Sutras, Hatha Yoga Pradipika, the 8 Limbs of Yoga, Chakras, and ethical Yama/Niyama lifestyle.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">05</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Teaching Methodology & Voice</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Class sequencing, hands-on adjustments, verbal cueing, room energy management, and overcoming stage fear.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">06</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Practicum & Live Auditions</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Live practice teaching under senior master faculty feedback with formal graduation certification.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 9 Locations Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-10 text-left space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>9 Institute Locations</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#16302B]">Where You Can Take the 200-Hour Program</h3>
            <p className="text-xs sm:text-sm text-[#5A574F]">Train locally in Delhi NCR or in a residential Himalayan ashram retreat</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Delhi NCR Hubs</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Gurugram DLF</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Noida Center</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Chandigarh Tricity</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Mohali Institute</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Haridwar Center</div>
            <div className="p-3 bg-white rounded-xl border border-[#16302B]/10 font-bold text-[#16302B]">📍 Dehradun Valley</div>
            <Link href="/yoga-teacher-training/locations/rishikesh" className="p-3 bg-[#16302B] text-[#E5C384] rounded-xl font-bold hover:bg-[#0E211D] transition-colors">
              🏔️ Rishikesh Ashram →
            </Link>
            <Link href="/yoga-teacher-training/locations/dharamshala" className="p-3 bg-[#16302B] text-[#E5C384] rounded-xl font-bold hover:bg-[#0E211D] transition-colors">
              🏔️ Dharamshala Retreat →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>ENQUIRE FOR BATCH DETAILS</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Begin Your 200-Hour Teaching Journey
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our academic coordinators on WhatsApp for syllabus brochures, batch dates, and early enrollment fee concessions.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Internationally Recognized Certification
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Direct Hands-On Faculty Mentorship
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Placement Support & KayaSadhak Faculty Opportunities
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Yoga Teacher Training (YTT)" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on 200-Hour YTT" />
      </section>
      </div>
    </div>
  );
}
