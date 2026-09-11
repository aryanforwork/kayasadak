import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaAward, FaUniversity, FaHeartbeat, FaBookOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: '300-Hour Advanced Yoga Teacher Training Course | KayaSadhak',
  description:
    'Elevate to RYT-500 with 300-Hour Advanced Yoga TTC in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Advanced sequencing & philosophy.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/300-hour-ttc',
  },
  openGraph: {
    title: '300-Hour Advanced Yoga Teacher Training Course | KayaSadhak',
    description:
      'Elevate to RYT-500 with 300-Hour Advanced Yoga TTC in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Advanced sequencing & philosophy.',
    url: 'https://www.kayasadhak.com/yoga-teacher-training/300-hour-ttc',
    siteName: 'KayaSadhak',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '300-Hour Advanced Yoga Teacher Training Course | KayaSadhak',
    description:
      'Elevate to RYT-500 with 300-Hour Advanced Yoga TTC in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Advanced sequencing & philosophy.',
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
        name: 'Yoga Teacher Training',
        item: 'https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '300-Hour TTC',
        item: 'https://www.kayasadhak.com/yoga-teacher-training/300-hour-ttc',
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
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-105 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

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

      {/* 2. Training Syllabus (From Curriculum Specification) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Syllabus Points */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                  <KayaLeafMotif size={12} color="#C08A3E" />
                  <span>300-Hour Advanced Curriculum</span>
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#16302B]">
                  Training Syllabus
                </h2>
                <p className="text-xs sm:text-sm text-[#5A574F]">
                  An advanced immersion in classical scriptures, clinical therapeutics, Shatkriya purifications, and master-level adjustments.
                </p>
              </div>

              {/* Syllabus List organized in two balanced columns for legibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 text-xs sm:text-sm text-[#3E3C36]">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Yoga philosophy and yoga principles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sankhya philosophy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Vedanta and the principal upanishads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Yogasara upanishad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Principles of yoga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sadhna chatushtaya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Patanjali yoga sutra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Samadhi and its types</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Raj yoga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Chanting &amp; Vedic Mantras</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Anatomy and physiology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Specific functional anatomy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Benefits and contraindications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Bhagavad gita, patanjali yoga sutra, upanishads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sutra neti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Vaman dhauti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Shanka prakshalan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Introduction to nauli</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Sukshma vyayam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Advanced classical yoga poses &amp; asana mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                    <span>Teaching methodology &amp; advanced adjustments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Visual Presentation */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                <img
                  src="/images/syllabus_300_asana.png"
                  alt="300-Hour Advanced Yoga Teacher Training - Advanced Asana and Dhanurasana Practice"
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
                <span>Master Level Transformation</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#16302B] leading-tight">
                Benefits of the Program
              </h2>
              <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                The 300-Hour Advanced TTC bridges the gap between an introductory instructor and an authoritative yoga therapist, master educator, and lineage scholar.
              </p>
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#EDE6D6]/70 border border-[#DCD3BE] text-xs text-[#3E3C36] space-y-2">
                  <div className="font-bold text-[#16302B] uppercase tracking-wider text-[11px]">Academic Pathway:</div>
                  <p className="italic">
                    &ldquo;Completing this course alongside your 200-Hour foundation qualifies you for the prestigious RYT-500 Master Teacher credential.&rdquo;
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
                    Advanced Clinical Yoga Therapy Specialization
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Develop prescriptive therapeutic competencies to design targeted, safe movement protocols for clients suffering from lumbar disc herniation, sciatica, cervical spondylosis, PCOD/PCOS, thyroid imbalances, and chronic anxiety.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">02.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Rigorous Scriptural Scholarship (Upanishads &amp; Samkhya)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Gain textual mastery of the principal Upanishads, Yogasara Upanishad, Samkhya philosophy, and the higher Samadhi padas of Patanjali&apos;s Yoga Sutras, elevating your discourses and teaching depth far above modern fitness-based instructors.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">03.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Complete Mastery of Traditional Shatkriyas
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Master the sacred classical yogic cleanses under senior master supervision: Sutra Neti, Vaman Dhauti, Shankhaprakshalana (full gastrointestinal wash), and advanced Nauli Kriya to completely purify the physical and energetic koshas.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">04.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Multi-Level Hands-On Adjustments &amp; Prop Sequencing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Learn sophisticated Iyengar prop variations (belts, bolsters, wooden bricks, wall ropes) and advanced hands-on tactile assists for deep backbends, arm balances, and inversions with flawless anatomical safety.
                </p>
              </div>

              <div className="pt-6 sm:pt-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">05.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Senior Faculty &amp; International Retreat Leadership
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Qualify to lead teacher training modules, design immersive residential retreats, conduct corporate executive wellness masterclasses, and secure high-retainer senior therapist roles across KayaSadhak&apos;s global ecosystem.
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
                <span>The Advanced Standard</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Why This TTC Stands Out
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Designed specifically for 200-hour graduates ready to move beyond routine cueing into genuine clinical therapeutics, scriptural scholarship, and master practitioner status.
              </p>
            </div>

            {/* Structured Editorial Grid with Subtle Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 border-t border-white/15">
              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Clinical Focus</div>
                <h3 className="font-heading font-bold text-lg text-white">Evidence-Led Therapy Protocols</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Direct pathology modules covering spine biomechanics, endocrine regulation, and nervous system recalibration for private therapy clients.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Classical Kriyas</div>
                <h3 className="font-heading font-bold text-lg text-white">Hands-On Shatkriya Cleanses</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Perform internal cleansing kriyas (Sutra Neti, Vaman Dhauti, Shankhaprakshalana, Nauli) under experienced master supervision in dedicated ashram facilities.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Scriptural Lineage</div>
                <h3 className="font-heading font-bold text-lg text-white">Direct Vedic &amp; Upanishadic Study</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  In-depth exploration of Sankhya, Vedanta, Yogasara Upanishad, and the Patanjali Yoga Sutras in their original Sanskrit philosophical context.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Institutional Tie-Up</div>
                <h3 className="font-heading font-bold text-lg text-white">IFoY &amp; Yoga Alliance (USA)</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Dual-certified graduation credentials completing the pathway to the internationally recognized RYT-500 master credential.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Ashram Immersion</div>
                <h3 className="font-heading font-bold text-lg text-white">Rishikesh &amp; Dharamshala Centers</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  The freedom to complete intensive residential modules at our Ganga Sai Ghat ashram in Rishikesh or serene Dharamshala Himalayan sanctuary.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Career Advancement</div>
                <h3 className="font-heading font-bold text-lg text-white">Senior Master Faculty Track</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Direct onboarding as lead educators, clinical therapists, and retreat conductors within KayaSadhak&apos;s pan-India wellness network.
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
