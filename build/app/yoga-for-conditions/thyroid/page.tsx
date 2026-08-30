import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaFeatherAlt, FaWind, FaHeartbeat } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga for Thyroid Health at Home in Delhi | KayaSadhak',
  description:
    '1-on-1 therapeutic yoga at home for hypothyroid & hyperthyroid support in Delhi NCR — Jalandhara Bandha, Ujjayi breathing. Not medical advice. Enquire.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/thyroid',
  },
  openGraph: {
    title: 'Yoga for Thyroid Health at Home in Delhi | KayaSadhak',
    description:
      '1-on-1 therapeutic yoga at home for hypothyroid & hyperthyroid support in Delhi NCR — Jalandhara Bandha, Ujjayi breathing. Not medical advice. Enquire.',
    url: 'https://www.kayasadhak.com/yoga-for-conditions/thyroid',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function ThyroidYogaPage() {
  const faqs = [
    {
      question: 'Can yoga cure my thyroid condition?',
      answer:
        'No. Yoga is a complementary lifestyle practice that supports endocrine blood flow, metabolic energy, and stress reduction. It does not replace prescribed thyroid medications (such as levothyroxine). Always continue your physician’s medical treatment.',
    },
    {
      question: 'Is Sarvangasana (Shoulder Stand) safe for me?',
      answer:
        'It depends on whether you have hypothyroidism (where gentle supported throat compression is helpful) versus hyperthyroidism or high blood pressure. Your personal instructor will evaluate your health profile before guiding supported prop variations.',
    },
    {
      question: 'What if I am not sure whether I have hypo- or hyperthyroidism?',
      answer:
        'We recommend getting your T3, T4, and TSH blood report confirmed with your physician first. Because the two conditions call for different approaches (stimulating vs. calming), knowing your diagnosis ensures safe, tailored practice.',
    },
    {
      question: 'How long before I might notice a difference in energy and fatigue?',
      answer:
        'Clients often report improved morning energy, reduced brain fog, and better sleep within 3–4 weeks of consistent practice. Thyroid blood markers should continue to be monitored via regular medical tests.',
    },
    {
      question: 'Can I do this alongside my prescribed thyroid medication?',
      answer:
        'Yes, yoga is meant to be practiced alongside your regular medication regimen without conflict.',
    },
    {
      question: 'How much does in-home thyroid yoga cost?',
      answer:
        'Standard home-yoga pricing applies — ₹500 to ₹1,000 per session depending on teacher tier (Silver, Gold, Platinum). Full monthly packages are displayed on this page.',
    },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Yoga for Thyroid Health — Hypothyroid & Hyperthyroid Support',
    description:
      '1-on-1 therapeutic yoga at home for hypothyroid & hyperthyroid support in Delhi NCR — Jalandhara Bandha, Ujjayi breathing.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Photographic Header */}
      <section className="relative min-h-[520px] sm:min-h-[580px] bg-black flex items-center overflow-hidden">
        <img
          src="/images/hero_thyroid_yoga.jpg"
          alt="Yoga for Thyroid Health at Home"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Throat Chakra & Endocrine Balance
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Yoga for Thyroid Health — Hypothyroid & Hyperthyroid Support
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified teacher visits your home in Delhi NCR to guide targeted asanas and Ujjayi breathwork adapted specifically to whether you are managing underactive (hypo) or overactive (hyper) thyroid.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a therapeutic yoga consultation for thyroid health.'
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

      {/* 2. Medical Disclaimer */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#EFE8DC] border border-[#DCD3C0] rounded-3xl p-5 sm:p-6 flex items-start gap-4 text-left">
          <FaShieldAlt className="w-5 h-5 text-[#C08A3E] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
            <strong>Medical Disclaimer:</strong> Yoga is a complementary wellness discipline, not a cure or medical replacement for thyroid disorders. Please continue any medication prescribed by your endocrinologist and share your diagnosis with your instructor.
          </p>
        </div>
      </section>

      {/* 3. Hypo vs Hyper Protocols */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="font-heading font-bold text-xl text-[#16302B]">Hypothyroidism (Underactive)</h3>
              </div>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Stimulating throat compression and gentle extension postures to improve circulation to the thyroid gland and combat metabolic sluggishness.
              </p>
              <ul className="text-xs text-[#16302B] space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Supported Matsyasana (Fish Pose)</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Gentle Halasana / Setu Bandhasana</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Jalandhara Bandha (Chin Lock) variations</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#5A574F]">
              Focus: Metabolic activation & circulation
            </div>
          </div>

          <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="font-heading font-bold text-xl text-[#16302B]">Hyperthyroidism (Overactive)</h3>
              </div>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Calming, non-stimulating restorative postures aimed at soothing sympathetic nervous system overdrive, cooling internal heat, and easing tremors.
              </p>
              <ul className="text-xs text-[#16302B] space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Restorative Supta Baddha Konasana</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Sheetali & Sheetkari cooling pranayama</li>
                <li className="flex items-center gap-2"><span className="text-[#B37B2E]">✓</span> Calming Yoga Nidra & breath pacification</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#E5DEC9] text-[11px] text-[#5A574F]">
              Focus: Nervous system pacification & cooling
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
            Thyroid Care Monthly Pricing Plans
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
                <span>BOOK THYROID TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Free Thyroid Yoga Consultation
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our therapeutic yoga faculty on WhatsApp. Share your diagnosis (hypo/hyper) and preferred home session schedule.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Yoga Therapists Matched to Your Specific Diagnosis
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Integrated Ujjayi & Thyroid Breathwork Guidance
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Female & Male Faculty Across Delhi NCR
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Therapeutic Yoga for Thyroid Balance" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Thyroid Yoga" />
      </section>
    </div>
  );
}
