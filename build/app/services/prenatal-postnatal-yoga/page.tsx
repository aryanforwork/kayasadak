import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaHeartbeat, FaFemale, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Prenatal & Postnatal Yoga at Home in Delhi NCR | KayaSadhak',
  description:
    'Trimester-wise prenatal yoga & postpartum recovery sessions at home in Delhi NCR & Chandigarh Tricity. Certified female teachers available. Free trial.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/prenatal-postnatal-yoga',
  },
  openGraph: {
    title: 'Prenatal & Postnatal Yoga at Home in Delhi NCR | KayaSadhak',
    description:
      'Trimester-wise prenatal yoga & postpartum recovery sessions at home in Delhi NCR & Chandigarh Tricity. Certified female teachers available. Free trial.',
    url: 'https://www.kayasadhak.com/services/prenatal-postnatal-yoga',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function PrenatalPostnatalYogaPage() {
  const faqs = [
    {
      question: 'Is prenatal yoga safe in the first trimester?',
      answer:
        'Gentle, appropriately modified yoga is commonly practiced through pregnancy, but the first trimester calls for extra caution. We ask for your obstetrician’s clearance before the first session and keep first-trimester practice deliberately conservative and breathwork-focused.',
    },
    {
      question: 'Can prenatal yoga actually help with a normal (vaginal) delivery?',
      answer:
        'Hip-opening poses, pelvic floor strengthening, and breathing techniques taught in later-trimester prenatal yoga are widely used to support labor preparation and endurance. Outcomes depend on many medical factors — your teacher coordinates with your doctor’s guidelines.',
    },
    {
      question: 'When can I start postnatal yoga after delivery?',
      answer:
        'This depends on your delivery (vaginal vs. C-section) and your doctor’s clearance — gentle breathing and restorative postures can begin early, while active pelvic floor and core rebuilding start once medically cleared (typically 6–8 weeks).',
    },
    {
      question: 'Do you only send female teachers for this service?',
      answer:
        'A certified female instructor is our default recommendation and available on request across all Delhi NCR and Tricity localities.',
    },
    {
      question: 'What if I have a high-risk pregnancy?',
      answer:
        'Please tell us upfront. We may provide gentle, doctor-approved breathing and relaxation techniques, but active asana practice may be paused. Safety is our non-negotiable priority.',
    },
    {
      question: 'How is postnatal yoga different from general postpartum fitness?',
      answer:
        'Postnatal yoga specifically prioritizes pelvic floor rehabilitation, gentle closure of diastasis recti (abdominal separation), and hormonal grounding before attempting intense core workouts.',
    },
    {
      question: 'How much does prenatal/postnatal yoga at home cost?',
      answer:
        '₹500 to ₹1,000 per session depending on teacher tier, with monthly packages from ₹6,000 for 3 sessions a week — see the complete pricing table on this page.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Prenatal & Postnatal Yoga at Home',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    description:
      'Trimester-wise pregnancy yoga and postnatal core recovery delivered at home across Delhi NCR & Chandigarh Tricity.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_prenatal_yoga.jpg"
          alt="Prenatal & Postnatal Yoga at Home in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Trimester-Wise Pregnancy & Postpartum Care
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Prenatal & Postnatal Yoga at Home — Trimester-Wise, in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified female instructor comes to your home to guide pregnancy yoga adapted to your exact stage — first, second, or third trimester — or postpartum pelvic floor recovery once cleared by your doctor.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a prenatal / postnatal home yoga trial session.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Trial on WhatsApp</span>
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

      {/* 2. Trimester-Wise Journey Cards */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Care Tailored by Trimester</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            What This Covers, Stage by Stage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <span className="text-xs font-bold text-[#B37B2E] font-display uppercase tracking-wider">Weeks 1–12</span>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">1st Trimester</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Gentle, conservative movement focusing on deep calming breathwork, easing early morning sickness, fatigue, and lower back tenderness.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <span className="text-xs font-bold text-[#B37B2E] font-display uppercase tracking-wider">Weeks 13–27</span>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">2nd Trimester</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Gentle strength building, hip opening, spine elongation, and balance adjustments as your belly grows and center of gravity shifts.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <span className="text-xs font-bold text-[#B37B2E] font-display uppercase tracking-wider">Weeks 28–40</span>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">3rd Trimester</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Labor preparation, pelvic floor relaxation, supported Squatting (Malasana) postures, and pranayama for managing contractions.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <span className="text-xs font-bold text-[#B37B2E] font-display uppercase tracking-wider">Post-Delivery</span>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Postnatal Recovery</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Rebuilding deep core strength, diastasis recti gentle healing, pelvic floor toning, and shoulder release from breastfeeding.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Safety Notice Banner */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#EFE8DC] border border-[#DCD3C0] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
            <FaShieldAlt className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Important Safety & Medical Coordination</h3>
            <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
              Yoga during pregnancy and postpartum should always accompany your obstetrician’s guidance. We request medical clearance before the first session and adapt every posture for high safety.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Pricing Matrix */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>TRANSPARENT INSTRUCTOR TIERS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#16302B]">
            Prenatal & Postnatal Monthly Pricing Plans
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            Transparent pricing per session across Delhi NCR & Chandigarh Tricity:
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 5. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>BOOK PRENATAL TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Free Trial with a Certified Female Instructor
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our faculty on WhatsApp. Share your trimester (or weeks postpartum) and your locality across Delhi NCR or Chandigarh.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Prenatal & Postpartum Specialists
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Bolsters & Supportive Props Recommended
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Safe Pelvic Floor & Labor Preparation Focus
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Prenatal & Postnatal Yoga at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Prenatal & Postnatal Yoga" />
      </section>
      </div>
    </div>
  );
}
