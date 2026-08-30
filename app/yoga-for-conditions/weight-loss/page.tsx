import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaFire, FaShieldAlt, FaDumbbell, FaHeartbeat } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Therapeutic Yoga for Weight Loss at Home | KayaSadhak',
  description:
    '1-on-1 yoga at home in Delhi NCR for healthy weight management — metabolic-boosting core work & Agnisar kriya. Not medical advice. Enquire on WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/weight-loss',
  },
  openGraph: {
    title: 'Therapeutic Yoga for Weight Loss at Home | KayaSadhak',
    description:
      '1-on-1 yoga at home in Delhi NCR for healthy weight management — metabolic-boosting core work & Agnisar kriya. Not medical advice. Enquire on WhatsApp.',
    url: 'https://www.kayasadhak.com/yoga-for-conditions/weight-loss',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function WeightLossYogaPage() {
  const faqs = [
    {
      question: 'Can yoga alone help me lose weight without changing my diet?',
      answer:
        'Yoga supports metabolic efficiency, builds deep core muscle, and lowers stress-induced emotional eating — but nutrition plays a fundamental role. Most clients see the best, sustainable results combining therapeutic home yoga with mindful eating habits.',
    },
    {
      question: 'Is Agnisar Kriya safe for everyone?',
      answer:
        'No — it is generally avoided by individuals with untreated high blood pressure, serious cardiac conditions, peptic ulcers, hyperthyroidism, or during pregnancy. Your instructor will screen your health and provide gentler, safer alternatives if necessary.',
    },
    {
      question: 'How is therapeutic yoga different from a high-intensity gym workout?',
      answer:
        'Therapeutic yoga focuses on consistent, sustainable movement, core endurance, and visceral organ stimulation without causing joint wear or cortisol spikes that trigger rebound appetite. It creates a habit you can maintain for years.',
    },
    {
      question: 'How long before I see noticeable changes in body composition?',
      answer:
        'Most clients notice significant improvements in stamina, posture, digestion, and waistline tone within 3–4 weeks of consistent 3x/week practice. Long-term metabolic fat loss develops steadily alongside consistent nutrition.',
    },
    {
      question: 'I have high blood pressure — can I still practice weight management yoga?',
      answer:
        'Yes. Inform us during booking, and your instructor will structure a modified sequence that avoids breath retentions and intense inversions, focusing instead on continuous gentle flow and restorative core work.',
    },
    {
      question: 'Do I need to be flexible or already fit to start?',
      answer:
        'No prior fitness or flexibility is required. Our teachers start exactly at your current comfort level and progress gradually.',
    },
    {
      question: 'How much does in-home weight management yoga cost?',
      answer:
        'Standard home-yoga pricing applies — ₹500 to ₹1,000 per session depending on teacher tier (Silver, Gold, Platinum). See our full monthly pricing table below.',
    },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Therapeutic Yoga for Healthy Weight Management',
    description:
      '1-on-1 yoga at home in Delhi NCR for healthy weight management — metabolic-boosting core work & Agnisar kriya.',
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
          src="/images/hero_weight_loss_yoga.jpg"
          alt="Therapeutic Yoga for Weight Loss at Home"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Metabolic Core Work & Agnisar Kriya
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Therapeutic Yoga for Healthy Weight Management
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified KayaSadhak instructor visits your home across Delhi NCR to guide a sustainable metabolic practice — functional core strengthening, Agnisar kriya, and stress-reduction breathwork tailored to your body.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to book a consultation for weight management yoga at home.'
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
            <strong>Medical Disclaimer:</strong> Yoga supports metabolic wellness and core strength as part of an overall lifestyle. It is not an invasive medical procedure or crash diet. Please consult your physician if you have cardiovascular conditions or hypertension before starting intense pranayama.
          </p>
        </div>
      </section>

      {/* 3. Core Protocol Focus Areas */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>4-Pillar Metabolic Focus</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            What This Sustainable Practice Includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Agnisar Kriya</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Rhythmic abdominal contraction to stimulate the digestive fire (Jatharagni), massage visceral organs, and ignite sluggish metabolism.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Deep Core Asanas</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Navasana (Boat Pose), Kumbhakasana (Plank), and dynamic twisting series that tone transverse abdominal muscles and posture.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Continuous Flow</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Gentle, sustained Surya Namaskar variations and standing transitions that keep heart rate elevated without joint compression.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Stress-Eating Calm</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Breathwork that regulates cortisol and parasympathetic tone, easing the chronic emotional stress that triggers late-night snacking.
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
            Weight Management Monthly Pricing Plans
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
                <span>BOOK WEIGHT LOSS TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book Your 1-on-1 Metabolic Assessment
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our fitness & therapeutic faculty on WhatsApp. Share your current fitness background and scheduling preference.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Personalized Core & Agnisar Progression
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Sustainable Routine with 0 Equipment Required
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Instructors across Delhi NCR
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Therapeutic Yoga for Weight Management" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Weight Management Yoga" />
      </section>
      </div>
    </div>
  );
}
