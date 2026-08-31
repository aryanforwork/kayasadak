import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaSpa, FaShieldAlt, FaLeaf, FaUserMd } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Authentic Home Panchkarma & Ayurvedic Care Delhi | KayaSadhak',
  description:
    'Doctor-guided Panchkarma at home in Delhi NCR — Abhyanga, Shirodhara, Swedana & Basti with authentic medicated oils. Free consultation on WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/panchkarma',
  },
  openGraph: {
    title: 'Authentic Home Panchkarma & Ayurvedic Care Delhi | KayaSadhak',
    description:
      'Doctor-guided Panchkarma at home in Delhi NCR — Abhyanga, Shirodhara, Swedana & Basti with authentic medicated oils. Free consultation on WhatsApp.',
    url: 'https://www.kayasadhak.com/services/panchkarma',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function PanchkarmaPage() {
  const faqs = [
    {
      question: 'Is Panchkarma safe to do at home rather than at a clinic?',
      answer:
        'Yes, when delivered by qualified Ayurvedic therapists with portable tables, sterilization, and authentic medicated oils as KayaSadhak provides. If your condition requires continuous medical monitoring, our Vaidya will honestly advise a clinic-based stay.',
    },
    {
      question: 'What is Panchkarma actually supposed to help with?',
      answer:
        'Traditionally, it supports deep cellular detoxification, eases accumulated fatigue, and addresses poor digestion, joint stiffness, and chronic insomnia. It is a traditional wellness system that complements regular medical care.',
    },
    {
      question: 'How many sessions do I need for a complete cleanse?',
      answer:
        'This depends on your Prakriti/Vikriti (constitution) assessed during consultation. Single Shirodhara sessions provide immediate relaxation, while multi-day cleanses (3, 5, or 7 days) produce deep systemic resets.',
    },
    {
      question: 'Can I do Panchkarma if I am on regular medication?',
      answer:
        'Please inform us about all ongoing medications and medical history during booking. Our Vaidya reviews your profile to ensure therapies are completely compatible.',
    },
    {
      question: 'What is the difference between Abhyanga and Shirodhara?',
      answer:
        'Abhyanga is a synchronized full-body herbal massage using warm dosha-specific medicated oils to relieve muscular tension. Shirodhara is a rhythmic stream of warm herbal oil over the forehead to soothe the central nervous system.',
    },
    {
      question: 'Is this the same as a commercial spa massage?',
      answer:
        'No — we use authentic classical Ayurvedic tailas (medicated herbal oils) prepared with botanical decoctions under Vaidya supervision, not perfumed mineral oils common in commercial spas.',
    },
    {
      question: 'Can Panchkarma help with PCOD, thyroid, or back pain?',
      answer:
        'Yes, specialized therapies like Kati Basti (lower back), Janu Basti (knees), and detoxifying Abhyanga directly support metabolic balance and joint decompression alongside therapeutic yoga.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Panchkarma & Ayurvedic Detox Care',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    description:
      'Doctor-guided Panchkarma at home in Delhi NCR — Abhyanga, Shirodhara, Swedana & Basti with authentic medicated oils.',
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
          src="/images/hero_panchkarma_kerala.webp"
          alt="Home Panchkarma & Ayurvedic Detox Care"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75 scale-105 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Vaidya-Supervised In-Home Ayurvedic Therapies
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Authentic Home Panchkarma & Ayurvedic Detox Care in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              KayaSadhak brings genuine Ayurvedic therapies to your residence — Abhyanga warm herbal massage, Shirodhara nervous system pour, Swedana herbal steam, and Kati Basti delivered under Vaidya supervision with authentic medicated oils.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to book a free Panchkarma consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Consultation on WhatsApp</span>
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

      {/* 2. Core Therapies Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Classical Ayurvedic Therapies</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            Therapies Delivered at Your Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
              <FaSpa className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Abhyanga Massage</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Synchronized warm herbal oil massage customized to your Vata/Pitta/Kapha dosha for joint lubrication and toxin mobilization.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
              <FaLeaf className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Shirodhara Pour</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              A continuous, rhythmic stream of warm medicated oil across the forehead to soothe anxiety, insomnia, and nervous exhaustion.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
              <FaSpa className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Swedana Herbal Steam</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Portable herbal steam therapy following massage to open cellular channels and eliminate mobilized deep-tissue toxins.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
              <FaUserMd className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Kati & Janu Basti</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Medicated herbal oil retained over the lower lumbar spine or knee joint in a dough dam for targeted chronic pain relief.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Safety Notice */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#EFE8DC] border border-[#DCD3C0] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
            <FaShieldAlt className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Vaidya Consultation & Safety Protocol</h3>
            <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
              Panchkarma is a classical Ayurvedic wellness discipline. Every package begins with a constitution assessment. If you are pregnant or on regular medication, our Vaidya will advise on safe modifications.
            </p>
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
                <span>BOOK PANCHKARMA CONSULT</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book Your Home Panchkarma Consultation
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our Ayurvedic faculty on WhatsApp. Share your health concerns, preferred treatment dates, and locality across Delhi NCR or Chandigarh.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Authentic Kerala Herbal Medicated Oils
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Full Portable Massage Table & Steam Setup
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Supervised by Certified Ayurvedic Vaidyas
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Home Panchkarma & Ayurvedic Care" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Home Panchkarma" />
      </section>
      </div>
    </div>
  );
}
