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
        {/* 2. Training Syllabus (From Curriculum Specification) */}
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Syllabus Points */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                    <KayaLeafMotif size={12} color="#C08A3E" />
                    <span>Prenatal TTC Curriculum</span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#16302B]">
                    Training Syllabus
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A574F]">
                    A complete sacred science curriculum covering pre-conception planning, trimester-specific physiology, high-risk care, postpartum recovery, and Garbha Sanskar.
                  </p>
                </div>

                {/* Detailed Nested Syllabus List matching the curriculum specification */}
                <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-[#3E3C36] leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] mt-2 flex-shrink-0" />
                    <span>Yoga and pregnancy</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] mt-2 flex-shrink-0" />
                    <span>Understanding women and a women&apos;s physiology</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] mt-2 flex-shrink-0" />
                    <span>Pre-conception planning</span>
                  </div>

                  <div className="space-y-1.5 pl-4 border-l-2 border-[#C08A3E]/30 py-1">
                    <div className="font-semibold text-[#16302B]">Physiology of pregnancy and changes during pregnancy:</div>
                    <ol className="list-decimal list-inside pl-2 space-y-1 text-[#4A4842]">
                      <li>High risk pregnancies</li>
                      <li>Special conditions and related practices</li>
                    </ol>
                  </div>

                  <div className="space-y-1.5 pl-4 border-l-2 border-[#C08A3E]/30 py-1">
                    <div className="font-semibold text-[#16302B]">Post natal challenges and care:</div>
                    <ol className="list-decimal list-inside pl-2 space-y-1 text-[#4A4842]">
                      <li>Post-partum depression</li>
                      <li>Body toning post delivery</li>
                      <li>Isometric exercises as a part of sukshma vyayama for pregnancy</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Practicals (asanas) &amp; safe prop alignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Ayurveda and nutrition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Teaching methodology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Yoga nidra and meditation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Common practices during all trimester</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C08A3E] flex-shrink-0" />
                      <span>Trimester specific practices</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pl-4 border-l-2 border-[#C08A3E]/30 py-1">
                    <div className="font-semibold text-[#16302B]">Allied subjects:</div>
                    <ol className="list-decimal list-inside pl-2 space-y-1 text-[#4A4842]">
                      <li>Music and its effect on the womb</li>
                      <li>Astrology and 16 rites for a soul</li>
                      <li>Ayurveda and childbirth – Diet, nutrition and childcare</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Visual Presentation */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#E0D8C3] shadow-md bg-[#EDE6D6]">
                  <img
                    src="/images/syllabus_prenatal_asana.png"
                    alt="Prenatal Yoga Teacher Training - Pregnant Woman in Safe Posture Practice"
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
                  <span>Specialist Career &amp; Service</span>
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#16302B] leading-tight">
                  Benefits of the Program
                </h2>
                <p className="text-xs sm:text-sm text-[#5A574F] leading-relaxed">
                  Becoming a certified Prenatal and Postnatal Yoga specialist positions you in one of the most fulfilling, sacred, and financially rewarding niches in modern wellness.
                </p>
                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-[#EDE6D6]/70 border border-[#DCD3BE] text-xs text-[#3E3C36] space-y-2">
                    <div className="font-bold text-[#16302B] uppercase tracking-wider text-[11px]">Niche Opportunity:</div>
                    <p className="italic">
                      &ldquo;Specialized prenatal yoga teachers command 50% to 100% higher rates for private 1-on-1 home sessions across Delhi NCR and Chandigarh.&rdquo;
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
                      Clinical Competence &amp; Maternal Safety Mastery
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                    Gain exhaustive knowledge of obstetric anatomy, relaxin hormones, blood volume surges, and pelvic biomechanics. Master symptom recognition for pre-eclampsia, placenta previa, gestational hypertension, and know exactly how to guide high-risk pregnancies safely.
                  </p>
                </div>

                <div className="py-6 sm:py-8 text-left space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">02.</span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                      Sacred Garbha Sanskar &amp; Womb Communication
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                    Integrate ancient Vedic traditions of Garbha Sanskar, Nada yoga (sound vibrations for the womb), prenatal meditation, and 16 soul rites (Samskaras), offering expectant mothers profound emotional peace and conscious maternal bonding.
                  </p>
                </div>

                <div className="py-6 sm:py-8 text-left space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">03.</span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                      Labor Preparation &amp; Pain Management Breathwork
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                    Equip mothers with natural labor tools: diaphragmatic breathing, perineal relaxation cues, vocal toning, and active birthing postures that shorten active labor duration and minimize medical interventions.
                  </p>
                </div>

                <div className="py-6 sm:py-8 text-left space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">04.</span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                      Postnatal Core Rehabilitation &amp; Diastasis Recti Repair
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                    Safely guide new mothers through the crucial fourth trimester, restoring deep transverse abdominal wall strength, healing diastasis recti, strengthening the pelvic floor, and providing supportive emotional practices against postpartum depression.
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 text-left space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-xl sm:text-2xl text-[#C08A3E]">05.</span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#16302B]">
                      High-Demand Direct In-Home Private Client Referrals
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed pl-8 sm:pl-9">
                    Certified prenatal teachers receive priority onboarding for private home yoga clients through KayaSadhak across South Delhi, Gurugram Golf Course Road, and Chandigarh luxury sectors, ensuring rapid return on training investment.
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
                  <span>The KayaSadhak Distinction</span>
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                  Why This TTC Stands Out
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                  A rare synthesis of clinical maternal biomechanics, ancient Ayurvedic nourishment, and authentic Garbha Sanskar traditions that mainstream courses overlook.
                </p>
              </div>

              {/* Structured Editorial Grid with Subtle Dividers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 border-t border-white/15">
                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Medical Rigor</div>
                  <h3 className="font-heading font-bold text-lg text-white">High-Risk Pregnancy Protocols</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Clear clinical safety boundaries, prop modifications, and emergency cessation red flags taught alongside leading obstetric and Ayurvedic insights.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Sacred Heritage</div>
                  <h3 className="font-heading font-bold text-lg text-white">Complete Garbha Sanskar</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Classical study of the 16 soul rites, musical resonance on fetal brain development, and customized tridoshic maternal nutrition for each trimester.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Hands-On Props</div>
                  <h3 className="font-heading font-bold text-lg text-white">Dedicated Prop Laboratories</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Mastery over pregnancy bolsters, birthing balls, wall ropes, and chair yoga variations that alleviate pelvic girdle pain and backache effortlessly.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Accredited Recognition</div>
                  <h3 className="font-heading font-bold text-lg text-white">Dual Institutional Framework</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Conducted in tie-up with the Indian Federation of Yoga, Yoga Alliance (USA) standards, and AYUSH Ministry guidelines for authentic certification.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Postnatal Care</div>
                  <h3 className="font-heading font-bold text-lg text-white">Comprehensive 4th Trimester Care</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Dedicated focus on postpartum emotional healing, diastasis recti assessment, pelvic floor reconnection, and postnatal Ayurvedic restoration.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="text-[#E5C384] font-display text-xs uppercase tracking-widest font-bold">Client Pipeline</div>
                  <h3 className="font-heading font-bold text-lg text-white">Direct High-Value Referrals</h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed">
                    Seamless path to receiving high-paying private prenatal home clients across KayaSadhak&apos;s established clientele in Delhi NCR and Chandigarh.
                  </p>
                </div>
              </div>
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
