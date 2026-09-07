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

      <div className="space-y-16 sm:space-y-20 mt-16 sm:mt-20">

      {/* 2. Training Syllabus (Researched Master 500-Hour Curriculum) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Master Syllabus Points */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                  <KayaLeafMotif size={12} color="#C08A3E" />
                  <span>500-Hour Master Sadhak Curriculum</span>
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#16302B]">
                  Training Syllabus
                </h2>
                <p className="text-xs sm:text-sm text-[#5A574F]">
                  The complete master-level roadmap unifying foundational precision, advanced multi-style asana mastery, clinical therapeutics, Vedic scriptures, and lead educator pedagogy.
                </p>
              </div>

              {/* Master Syllabus List in two balanced columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-xs sm:text-sm text-[#3E3C36]">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Multi-style asana mastery (Hatha &amp; Ashtanga)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Classical Shatkriyas (Neti, Dhauti, Nauli)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Complete Patanjali Yoga Sutras (4 Padas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Bhagavad Gita &amp; Upanishadic philosophy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Hatha Yoga Pradipika &amp; Gheranda Samhita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sankhya &amp; Vedanta foundational systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Subtle energy: Nadis, Chakras &amp; Kundalini</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Master Bandha &amp; Mudra integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Vedic chanting, Mantra &amp; Nada Yoga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sukshma &amp; Sthula Vyayama systems</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Advanced applied anatomy &amp; biomechanics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Spine pathology &amp; clinical yoga therapy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Therapeutic protocols for PCOD &amp; Thyroid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Advanced Pranayama &amp; Kumbhaka retentions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Dhyana, Antar Mouna &amp; Yoga Nidra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Hands-on assists for multi-level practitioners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Curriculum design &amp; workshop architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Studio leadership, ethics &amp; business</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>100+ Hours lead teaching practicum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Lead Educator &amp; RYT-500 certification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                <img
                  src="/images/syllabus_500_master.webp"
                  alt="500-Hour Master Yoga Teacher Training - Sacred Ashram Immersion and Master Guidance"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits of the Program - Architectural Editorial Layout (Not on cards) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="border-t border-b border-[#E0D8C3] py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>Pinnacle Credential</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#16302B] leading-tight">
                Benefits of the Program
              </h2>
              <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                The 500-Hour Master TTC is the highest recognized credential in professional yoga education, establishing you as an authoritative educator, clinical therapist, and school director.
              </p>
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#EDE6D6]/70 border border-[#DCD3BE] text-xs text-[#3E3C36] space-y-2">
                  <div className="font-bold text-[#16302B] uppercase tracking-wider text-[11px]">Master Standing:</div>
                  <p className="italic">
                    &ldquo;Graduates hold the formal credentials to direct registered yoga teacher training schools and certify new generations of teachers globally.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Column - Clean Editorial Numbered Flow */}
            <div className="lg:col-span-8 divide-y divide-[#E2D9C4]">
              <div className="pb-6 sm:pb-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">01.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Highest International Teaching Status (RYT-500 &amp; Lead Trainer)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Graduate with the gold standard of professional yoga certification under Indian Federation of Yoga and Yoga Alliance USA benchmarks, unlocking unrestricted global eligibility to lead international teacher trainings, luxury resorts, and high-end academies.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">02.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Integrated Foundation + Clinical Therapy Synthesis
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Seamlessly connects foundational anatomical cueing with clinical pathology treatment protocols for spinal disc issues, chronic joint pain, metabolic syndromes, hormonal dysfunctions, and complex psychosomatic conditions.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">03.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Profound Spiritual Sadhana &amp; Internal Cleansing (Shatkriyas)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Experience full energetic and cellular detoxification through disciplined daily practice of all classical Shatkriyas, advanced Kumbhakas, Antar Mouna meditation, and unbroken Vedic mantra sadhana under senior lineage masters.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">04.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Authority to Form, Direct &amp; Certify Yoga Academies
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Gain the pedagogical, legal, and structural knowledge needed to design your own accredited 200-Hour and 300-Hour course syllabi, manage wellness centers, and mentor apprentice instructors under international accreditation bodies.
                </p>
              </div>

              <div className="pt-6 sm:pt-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">05.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Lifetime Placement &amp; KayaSadhak Lead Faculty Appointments
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Direct appointment opportunities as Lead Master Trainer across KayaSadhak&apos;s 9 training centers, head therapist positions, international retreat directors, and key contributors to our wellness publications and media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why This TTC Stands Out - Prestigious High-Contrast Architectural Section (Not on cards) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#16302B] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#C08A3E]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C08A3E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10 text-left">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#E5C384]">
                <KayaLeafMotif size={12} color="#E5C384" />
                <span>The Master Hallmark</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Why This TTC Stands Out
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                A unified, uninterrupted sadhana that preserves authentic guru-shishya transmission while upholding global academic, clinical, and pedagogical excellence.
              </p>
            </div>

            {/* Structured Editorial Grid with Subtle Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 border-t border-white/15">
              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Unbroken Immersion</div>
                <h3 className="font-heading font-bold text-lg text-white">Seamless 200 + 300 Integration</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Avoid fragmented certifications with a single, harmonious curriculum guided by consistent master faculty from day one through graduation.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Direct Lineage</div>
                <h3 className="font-heading font-bold text-lg text-white">Himalayan Acharya Mentorship</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Direct personal apprenticeship with seasoned lineage masters possessing decades of traditional sadhana and clinical university credentials.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">9 Premier Centers</div>
                <h3 className="font-heading font-bold text-lg text-white">Delhi NCR &amp; Residential Ashrams</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Complete modules locally in Delhi, Noida, or Gurugram, or spend transformative weeks in residential ashrams at Rishikesh Ganga Ghat and Dharamshala.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Clinical Specialization</div>
                <h3 className="font-heading font-bold text-lg text-white">Evidence-Based Therapy Practicum</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Comprehensive clinical training in spine alignment, musculoskeletal rehabilitation, stress-related endocrine recovery, and personalized therapy plans.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Dual Accreditation</div>
                <h3 className="font-heading font-bold text-lg text-white">IFoY &amp; Yoga Alliance USA</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Dual-certified credentials meeting stringent Indian Federation of Yoga and Yoga Alliance USA RYT-500 standards, aligned with AYUSH guidelines.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Leadership Pathway</div>
                <h3 className="font-heading font-bold text-lg text-white">Director &amp; Faculty Placement</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Direct opportunities to step into lead teacher trainer, ashram coordinator, and executive wellness director positions within KayaSadhak.
                </p>
              </div>
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
    </div>
  );
}
