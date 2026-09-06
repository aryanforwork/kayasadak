import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
  FaUniversity,
  FaBookOpen,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaBaby,
  FaFemale,
  FaSpa,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Prenatal Yoga Teacher Training | KayaSadhak',
  description:
    'Specialized Prenatal Yoga Teacher Training in tie-up with Indian Federation of Yoga, Yoga Alliance USA & AYUSH Ministry standards. Trimester-wise methodology & safe postpartum care.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/prenatal-ttc',
  },
  openGraph: {
    title: 'Prenatal Yoga Teacher Training | KayaSadhak',
    description:
      'Specialized Prenatal Yoga Teacher Training in tie-up with Indian Federation of Yoga, Yoga Alliance USA & AYUSH Ministry standards. Trimester-wise methodology & safe postpartum care.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/prenatal-ttc',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function PrenatalYTTPage() {
  const faqs = [
    {
      question: 'What certification do I receive upon completing this course?',
      answer:
        'You receive the KayaSadhak Prenatal Yoga Teacher Training Certificate, conducted in tie-up/partnership with the Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India) curriculum guidelines.',
    },
    {
      question: 'What is the program duration and hour count?',
      answer:
        'Please contact our academic coordinator directly on WhatsApp for current batch duration, exact hour count, and upcoming schedule options [CLIENT TO CONFIRM].',
    },
    {
      question: 'Does this course require a prior 200-Hour YTT certification as a prerequisite?',
      answer:
        'A foundation in yoga practice is expected. Please contact us to confirm whether prior 200-Hour certification is mandatory for your specific batch enrollment [CLIENT TO CONFIRM].',
    },
    {
      question: 'Is the course conducted in-person, online, or hybrid?',
      answer:
        'We offer intensive in-person batches at our physical Sector 45 Noida Studio and partner centers, as well as interactive hybrid formats for practitioners residing outside Delhi NCR.',
    },
    {
      question: 'What specific pregnancy conditions and trimesters are covered?',
      answer:
        'The curriculum covers all three trimesters systematically, including safe posture modifications, contraindications for high-risk pregnancies, pelvic floor rehabilitation, diastasis recti recovery, and labor breathwork.',
    },
    {
      question: 'Can I teach pregnant women professionally after this course?',
      answer:
        'Yes. This specialization equips you with the physiological knowledge, prop sequencing, and contraindication safety protocols required to confidently guide private and group prenatal/postnatal classes.',
    },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Prenatal Yoga Teacher Training Course',
    description:
      'Specialized Prenatal Yoga Teacher Training in tie-up with Indian Federation of Yoga, Yoga Alliance USA & AYUSH Ministry standards.',
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
        name: 'YTT Courses',
        item: 'https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Prenatal YTT',
        item: 'https://www.kayasadhak.com/yoga-teacher-training/prenatal-ttc',
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_prenatal_yoga.jpg"
          alt="Prenatal Yoga Teacher Training Course"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                In Tie-Up with Indian Federation of Yoga &amp; Yoga Alliance USA
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Prenatal Yoga Teacher Training
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              Master the sacred art of guiding expectant and new mothers through trimester-wise asanas, safe pelvic floor dynamics, breathwork for labor, and gentle postpartum recovery. Conducted under our institutional tie-ups and AYUSH Ministry standards.
            </p>

            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-3 max-w-xl text-xs text-brand-gold-300">
              ℹ️ <strong>Program Notice:</strong> Exact duration hour count and prerequisite guidelines are available upon request. Contact our academic desk for current batch schedules.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enquire about the Prenatal Yoga Teacher Training course.'
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
              <span>Specialized Syllabus</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
              Prenatal &amp; Postnatal TTC Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-[#5A574F]">
              Comprehensive scientific, anatomical, and traditional grounding in maternal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Trimester-Wise Anatomy &amp; Hormones</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Physiological changes across 1st, 2nd, and 3rd trimesters. Understanding relaxin, pelvic widening, cardiovascular shifts, and postural adaptation.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Asana Modifications &amp; Prop Support</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Adapting classical Hatha and Yin postures using bolsters, chairs, blocks, and wall ropes for joint stability and zero abdominal compression.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Contraindications &amp; Red Flags</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Screening for placenta previa, pre-eclampsia, gestational hypertension, and recognizing symptoms that require immediate clinical cessation.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Labor Breathwork &amp; Garbha Sanskar</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Pranayama techniques safe for pregnancy (Brahmari, Ujjayi, deep diaphragmatic), vocal toning, pelvic floor release, and prenatal meditation.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">05</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Postnatal Core &amp; Diastasis Recti</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Postpartum recovery timelines (vaginal vs c-section), safe transverse abdominis activation, closing diastasis recti, and pelvic floor toning.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">06</div>
              <h3 className="font-heading font-bold text-lg text-[#16302B]">Teaching Practicum &amp; Live Guidance</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Designing real trimester-based class sequences, hands-on adjustments, empathetic verbal cueing, and certified graduation assessment.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Tie-Up & Certifying Bodies Banner */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-[#16302B] text-white rounded-[32px] p-8 sm:p-12 border border-brand-gold-500/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 px-3 py-1 rounded-full text-xs font-bold text-brand-gold-400 uppercase tracking-wider">
                  <FaAward />
                  <span>Dual Institutional Affiliation</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                  Conducted in Tie-Up with Leading Certifying Bodies
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Our teacher training programs are conducted in tie-up/partnership with the <strong className="text-white">Indian Federation of Yoga</strong>, <strong className="text-white">Yoga Alliance USA</strong> standards, and <strong className="text-white">AYUSH Ministry</strong> (Government of India) curriculum guidelines. KayaSadhak issues its own specialized certification upon successful completion of syllabus practicum.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 text-xs text-left">
                <div className="font-bold text-brand-gold-400 uppercase tracking-wider text-[11px]">
                  Institutional Framework
                </div>
                <div className="text-gray-200">✓ In partnership with Indian Federation of Yoga</div>
                <div className="text-gray-200">✓ Aligned with Yoga Alliance USA standards</div>
                <div className="text-gray-200">✓ Compliant with AYUSH Ministry guidelines</div>
                <div className="text-gray-200">✓ Verified KayaSadhak Teacher Credential</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Lead Form Section */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#B37B2E]">
                <KayaLeafMotif size={13} color="#C08A3E" />
                <span>ADMISSIONS OPEN</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
                Enquire for Upcoming Prenatal YTT Batches
              </h2>
              <p className="font-body text-sm text-[#4A4842] leading-relaxed">
                Connect with our academic coordinator on WhatsApp to receive the complete syllabus brochure, upcoming batch dates, fee structure, and prerequisite requirements.
              </p>
              <div className="space-y-2 text-xs text-[#5A574F]">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#C08A3E]" />
                  <span>On-site at Sector 45 Noida Studio &amp; Delhi NCR centers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#C08A3E]" />
                  <span>Hybrid weekend batches available for working professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#C08A3E]" />
                  <span>Direct mentorship by senior female therapeutic sadhaks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <LeadGenForm title="Enquire for Prenatal YTT" />
            </div>
          </div>
        </section>

        {/* 5. FAQs */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <FaqAccordion items={faqs} title="Prenatal YTT Course FAQs" />
        </section>
      </div>
    </div>
  );
}
