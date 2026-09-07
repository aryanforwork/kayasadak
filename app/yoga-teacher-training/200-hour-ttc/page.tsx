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

      {/* 2. Training Syllabus - Section by Section Architectural Spread */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-4 mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Curriculum &amp; Course Architecture</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#16302B]">
            Training Syllabus
          </h2>
          <p className="text-sm sm:text-base text-[#5A574F] max-w-3xl leading-relaxed">
            A comprehensive, lineage-grounded foundation spanning four core domains: classical philosophy, biomechanical wellness, teaching pedagogy, and living scriptural wisdom.
          </p>
        </div>

        {/* Section by Section Modules with High-Resolution Photography */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Section 1: Foundations of Yoga */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                    <span>Module 01 • Core Yogic Philosophy</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                    Foundations of Yoga
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                  Immerse into the timeless philosophical underpinnings of yoga. Explore traditional definitions, the evolution of yogic thought, and how classical texts guide the student from physical movement toward profound self-mastery.
                </p>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#3E3C36]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Introduction to yoga and its fundamental concepts:</strong>{' '}
                      Historical origins, etymology of Yuj, classical definitions, and the progression from personal sadhana to certified instruction.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Patanjali Yoga Sutras and the foundations of yogic philosophy:</strong>{' '}
                      Study of Samadhi Pada and Sadhana Pada, understanding Chitta Vritti Nirodha, and the systematic 8 limbs of Ashtanga Yoga.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">The five paths of yoga:</strong>{' '}
                      Comprehensive integration of Gyan (path of knowledge), Karma (selfless action), Bhakti (devotion), Raja (mental control), and Hatha (energetic harmony).
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                  <img
                    src="/images/syllabus_200_foundations.jpg"
                    alt="Foundations of Yoga - Woman yogi practicing Nadi Shodhana Pranayama in serene garden"
                    className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Practice & Wellness */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-1">
                <div className="overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                  <img
                    src="/images/syllabus_200_practice.jpg"
                    alt="Practice & Wellness - Large outdoor group yoga class on lush green lawn"
                    className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-left order-2">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                    <span>Module 02 • Biomechanics &amp; Breath</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                    Practice &amp; Wellness
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                  Bridge the ancient science of Prana with modern human anatomy and physiology. Learn to instruct asanas with biomechanical precision while regulating the autonomic nervous system through classical breathwork.
                </p>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#3E3C36]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Anatomy and physiology for safe and effective yoga practice:</strong>{' '}
                      Skeletal mechanics, joint articulation, muscular engagement, spine health, and injury-prevention protocols for every body type.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Breathing techniques (Pranayamas) and their role in health and wellbeing:</strong>{' '}
                      Systematic practice of Nadi Shodhana, Kapalabhati, Ujjayi, Bhastrika, and Sheetali with correct bandhas (energy locks) and retention ratios.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Integrative Somatic Wellness:</strong>{' '}
                      Understanding the vagus nerve, parasympathetic recovery, hormonal equilibrium, and the holistic physiological benefits of daily asana sadhana.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Teaching & Mastery */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                    <span>Module 03 • Pedagogy &amp; Leadership</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                    Teaching &amp; Mastery
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                  Transform personal practice into inspiring, safe, and authoritative teaching. Master the art of holding sacred space, articulating clear anatomical cues, and leading structured classes with unwavering confidence.
                </p>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#3E3C36]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Communication skills and effective interaction with students:</strong>{' '}
                      Voice projection, empathetic dialogue, trauma-informed presence, active listening, and addressing individual student limitations.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Teaching methodology and principles of conducting yoga sessions:</strong>{' '}
                      Room setup, demonstration etiquette, verbal cueing hierarchy, and master principles of hands-on and hands-off alignment assists.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Designing yoga sequences and structured classes:</strong>{' '}
                      Crafting balanced Vinyasa flows, traditional Hatha progressions, restorative cool-downs, and theme-based class architectures.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                  <img
                    src="/images/syllabus_200_teaching.jpg"
                    alt="Teaching & Mastery - Ashram yoga master demonstrating Bhujangasana to semicircle of students"
                    className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Philosophy of Yoga */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-1">
                <div className="overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                  <img
                    src="/images/syllabus_200_philosophy.jpg"
                    alt="Philosophy of Yoga - Students in mindful low lunge posture with yoga blocks"
                    className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-left order-2">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                    <span>Module 04 • Living Wisdom &amp; Texts</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                    Philosophy of Yoga
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                  Awaken the spiritual essence of the yogic tradition through direct immersion in canonical Vedic scriptures, cultivating deep inner awareness, ethical integrity, and mindful action in everyday life.
                </p>

                <div className="space-y-3 pt-1 text-xs sm:text-sm text-[#3E3C36]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">The Bhagavad Gita and its key teachings on life, action and self-awareness:</strong>{' '}
                      Exploring Karma Yoga (selfless action), Swadharma (individual purpose), and emotional equanimity amid modern worldly duties.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">The principles of yoga and their application in daily life and practice:</strong>{' '}
                      Living the Yamas and Niyamas, cultivating Vairagya (non-attachment) and Abhyasa (constant practice) in modern lifestyle settings.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C08A3E] mt-1.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#16302B]">Sanskrit Chanting &amp; Living Sadhana:</strong>{' '}
                      Traditional Vedic invocations, the sacred meaning of Om, mantra chanting, and integrating meditation into daily personal routines.
                    </div>
                  </div>
                </div>
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
                <span>Life &amp; Career Impact</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#16302B] leading-tight">
                Benefits of the Program
              </h2>
              <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                Graduating from the 200-Hour TTC transforms far more than your teaching credential — it redefines your physical vitality, mental equilibrium, and professional standing in the global wellness landscape.
              </p>
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#EDE6D6]/70 border border-[#DCD3BE] text-xs text-[#3E3C36] space-y-2">
                  <div className="font-bold text-[#16302B] uppercase tracking-wider text-[11px]">Key Transformation:</div>
                  <p className="italic">
                    &ldquo;Step out with the poise, clear vocal projection, and deep anatomical knowledge to guide any student safely from their very first class.&rdquo;
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
                    International Teaching Credential &amp; Global Mobility
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Graduate with a dual-recognized certificate awarded under our partnership with the Indian Federation of Yoga, Yoga Alliance (USA) standards, and AYUSH Ministry guidelines, granting you the credentials to teach at premier studios, retreats, and international wellness hubs.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">02.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Anatomical Precision &amp; Injury-Free Cueing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Gain functional biomechanical mastery over joint angles, skeletal variations, muscle activation, and common counter-indications. Confidently modify postures for beginners, seniors, and practitioners recovering from muscular strain.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">03.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Living Yogic Philosophy &amp; Mental Equilibrium
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Move beyond surface postures into the timeless psychological wisdom of Patanjali’s Yoga Sutras and the Bhagavad Gita. Learn how to translate ancient concepts of Vairagya, Abhyasa, and Karma Yoga into everyday emotional resilience and mindful living.
                </p>
              </div>

              <div className="py-6 sm:py-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">04.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Cellular Detoxification via Shatkriyas &amp; Classical Pranayama
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Undergo authentic daily yogic purifications (Jala Neti, Kapalabhati, Agnisara) combined with rigorous breath retention (Kumbhaka) that heighten lung capacity, optimize nervous system regulation, and cultivate intense mental focus.
                </p>
              </div>

              <div className="pt-6 sm:pt-8 text-left space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">05.</span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                    Immediate Placement Support &amp; KayaSadhak Faculty Opportunities
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                  Top graduates are directly invited to audition for KayaSadhak’s premier home yoga network, studio faculty positions in Noida Sector 45, corporate wellness contracts, and guest workshops across Delhi NCR and Chandigarh Tricity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why This TTC Stands Out - Prestigious High-Contrast Architectural Section (Not on cards) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#16302B] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-[#C08A3E]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C08A3E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10 text-left">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#E5C384]">
                <KayaLeafMotif size={12} color="#E5C384" />
                <span>The KayaSadhak Hallmark</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                Why This TTC Stands Out
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Unlike mass commercialized programs that dilute yogic heritage into mere physical workouts, our 200-Hour training preserves unbroken lineage authenticity with institutional rigor.
              </p>
            </div>

            {/* Structured Editorial Grid with Subtle Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 border-t border-white/15">
              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Lineage &amp; Ethics</div>
                <h3 className="font-heading font-bold text-lg text-white">Dual Lineage Accreditation</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Conducted under formal institutional partnership with the Indian Federation of Yoga and Yoga Alliance USA, aligned with AYUSH Ministry national curricula.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Geographic Flexibility</div>
                <h3 className="font-heading font-bold text-lg text-white">9 Premier Training Centers</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Train locally in Delhi, Gurugram, Noida, and Chandigarh, or opt for full residential ashram immersions on the holy banks of the Ganga in Rishikesh or Himalayan Dharamshala.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Personalized Attention</div>
                <h3 className="font-heading font-bold text-lg text-white">Strict Small-Cohort Mentorship</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  We cap student enrollment to guarantee that master faculty provide individual hands-on posture corrections, vocal coaching, and personalized sadhana guidance.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Therapeutic Depth</div>
                <h3 className="font-heading font-bold text-lg text-white">Clinical &amp; Therapy Foundations</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Learn how to safely address lumbar disc pain, sciatica, postural misalignments, and anxiety using classical restorative alignment and precision prop usage.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Authentic Texts</div>
                <h3 className="font-heading font-bold text-lg text-white">Original Sanskrit &amp; Textual Study</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Direct engagement with classical shlokas from the Hatha Yoga Pradipika, Yoga Sutras, and Bhagavad Gita, ensuring you teach with profound cultural authenticity.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Career Growth</div>
                <h3 className="font-heading font-bold text-lg text-white">Direct Alumni Career Network</h3>
                <p className="text-xs text-gray-300/90 leading-relaxed">
                  Receive lifelong community access, post-graduation practice hours, refresher invitations, and direct referrals across KayaSadhak&apos;s corporate and private clientele.
                </p>
              </div>
            </div>
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
