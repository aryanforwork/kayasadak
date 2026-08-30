import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaMoon, FaBed, FaBrain, FaFeatherAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga for Anxiety, Stress & Insomnia at Home | KayaSadhak',
  description:
    '1-on-1 therapeutic yoga at home in Delhi NCR for anxiety, stress & insomnia — Yoga Nidra, breathwork & guided meditation. Not medical advice. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/anxiety-insomnia',
  },
  openGraph: {
    title: 'Yoga for Anxiety, Stress & Insomnia at Home | KayaSadhak',
    description:
      '1-on-1 therapeutic yoga at home in Delhi NCR for anxiety, stress & insomnia — Yoga Nidra, breathwork & guided meditation. Not medical advice. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-for-conditions/anxiety-insomnia',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function AnxietyInsomniaYogaPage() {
  const faqs = [
    {
      question: 'Can yoga actually help with chronic insomnia?',
      answer:
        'Practices like Yoga Nidra (yogic conscious sleep) and parasympathetic pranayama soothe an overactive autonomic nervous system, lowering evening cortisol and making it significantly easier to transition into deep restorative sleep.',
    },
    {
      question: 'Is Yoga Nidra the same as regular sleeping?',
      answer:
        'No — Yoga Nidra is a structured guided relaxation technique performed while lying down in Savasana. It systematically withdraws the senses (Pratyahara) to induce profound delta-wave physiological rejuvenation.',
    },
    {
      question: 'I have a diagnosed anxiety disorder — can this practice still assist?',
      answer:
        'Yes, slow guided breathwork and gentle movement are widely used to support mental wellness alongside clinical treatment. Please continue any prescribed medication or therapy recommended by your doctor.',
    },
    {
      question: 'What happens if I fall asleep during a Yoga Nidra session?',
      answer:
        'That is completely normal and welcomed — it simply indicates your nervous system has released chronic tension and allowed your body the deep rest it needs.',
    },
    {
      question: 'Do I need any prior meditation experience?',
      answer:
        'No prior meditation or yoga experience is required. The breath pacing and guided relaxation techniques are completely accessible for beginners.',
    },
    {
      question: 'Can the breathing techniques help during sudden anxiety spikes?',
      answer:
        'Yes — slow 1:2 ratio exhalations, Box Breathing, and Bhramari (humming bee breath) stimulate the vagus nerve to rapidly slow heart rate and de-escalate anxiety in the moment.',
    },
    {
      question: 'How much does therapeutic stress and sleep yoga cost at home?',
      answer:
        'Standard home-yoga pricing applies — ₹500 to ₹1,000 per session depending on teacher tier (Silver, Gold, Platinum). See the full monthly pricing table on this page.',
    },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Yoga for Anxiety, Stress & Insomnia — Calm Built Into Your Week',
    description:
      '1-on-1 therapeutic yoga at home in Delhi NCR for anxiety, stress & insomnia — Yoga Nidra, breathwork & guided meditation.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_insomnia_anxiety_yoga.jpg"
          alt="Yoga for Anxiety, Stress & Insomnia"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Yoga Nidra & Vagal Nerve Relaxation
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Yoga for Anxiety, Stress & Insomnia — Calm Built Into Your Week
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified therapist visits your home in Delhi NCR to guide slow restorative asanas, parasympathetic breathwork, and deeply rejuvenating Yoga Nidra to reset an overstimulated nervous system.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a therapeutic yoga session for anxiety and insomnia.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Consultation on WhatsApp</span>
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

      {/* 2. Medical Disclaimer */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#EFE8DC] border border-[#DCD3C0] rounded-3xl p-5 sm:p-6 flex items-start gap-4 text-left">
          <FaShieldAlt className="w-5 h-5 text-[#C08A3E] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
            <strong>Medical Disclaimer:</strong> Yoga is a complementary wellness discipline, not a clinical psychiatric replacement for diagnosed panic or severe anxiety disorders. Please continue any treatment recommended by your medical professional.
          </p>
        </div>
      </section>

      {/* 3. Daytime vs Nighttime Protocols */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">
                  <FaBrain className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#16302B]">Daytime Anxiety & Restlessness</h3>
              </div>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Emphasis on portable breathwork, grounding forward folds, and somatic awareness to lower elevated cortisol during high-pressure work days.
              </p>
              <ul className="text-xs text-[#16302B] space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Nadi Shodhana (Alternate Nostril Breath)</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Grounded Balasana (Child’s Pose) holds</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Vagal Nerve Stimulation Pranayama</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#5A574F]">
              Focus: Emotional regulation & focus restoration
            </div>
          </div>

          <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">
                  <FaMoon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#16302B]">Evening Sleep & Insomnia Reset</h3>
              </div>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Emphasis on restorative prop-supported postures, passive Viparita Karani (Legs-Up-The-Wall), and guided 20-minute Yoga Nidra.
              </p>
              <ul className="text-xs text-[#16302B] space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Deep Guided Yoga Nidra (Yogic Sleep)</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Bolster-supported Supta Baddha Konasana</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Bhramari Humming Breath for Melatonin onset</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#5A574F]">
              Focus: Deep sleep onset & nervous system down-regulation
            </div>
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
            Stress & Sleep Monthly Pricing Plans
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
                <span>BOOK SLEEP & CALM TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Free Stress Relief Consultation
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our therapeutic faculty on WhatsApp. Share whether daytime anxiety or nighttime sleep is your primary concern.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Masters in Yoga Nidra & Breath Therapy
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Patient, Warm & Sincere Instructors
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Evening & Weekend Home Slots Available
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Therapeutic Yoga for Anxiety & Insomnia" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Anxiety & Insomnia Yoga" />
      </section>
      </div>
    </div>
  );
}
