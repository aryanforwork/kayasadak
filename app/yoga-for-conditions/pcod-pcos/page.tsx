import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaFemale, FaHeartbeat, FaLeaf } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga for PCOD & PCOS at Home in Delhi NCR | KayaSadhak',
  description:
    'Therapeutic 1-on-1 yoga at home for PCOD/PCOS hormonal balance in Delhi NCR — pelvic circulation & stress reduction focus. Not medical advice. Enquire.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/pcod-pcos',
  },
  openGraph: {
    title: 'Yoga for PCOD & PCOS at Home in Delhi NCR | KayaSadhak',
    description:
      'Therapeutic 1-on-1 yoga at home for PCOD/PCOS hormonal balance in Delhi NCR — pelvic circulation & stress reduction focus. Not medical advice. Enquire.',
    url: 'https://www.kayasadhak.com/yoga-for-conditions/pcod-pcos',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function PcodPcosYogaPage() {
  const faqs = [
    {
      question: 'Can yoga actually help regulate my menstrual cycle?',
      answer:
        'Yoga directly supports pelvic circulation, lowers elevated cortisol, and regulates the hypothalamic-pituitary-ovarian axis. Many clients notice improved cycle regularity within 8–12 weeks of consistent 3x/week therapeutic practice alongside medical care.',
    },
    {
      question: 'Is this practice safe if I am actively trying to conceive (TTC)?',
      answer:
        'Gentle restorative yoga with hip openers and stress-reducing pranayama is widely used to support reproductive wellness while trying to conceive. We request you share any ongoing fertility medication protocols with us so your instructor modifies postures safely.',
    },
    {
      question: 'How is this different from following general PCOS yoga videos online?',
      answer:
        'A generic video cannot adapt to where you are in your monthly cycle, whether you are experiencing heavy cramps, or managing insulin resistance. A personal instructor personalizes intensity session by session.',
    },
    {
      question: 'Can therapeutic yoga assist with PCOS metabolic and weight symptoms?',
      answer:
        'Yes — postures stimulating the abdominal organs (Agnisar Kriya, twists, and gentle core stabilizers) improve insulin sensitivity and support metabolic health alongside your dietary regimen.',
    },
    {
      question: 'How often should I practice for noticeable hormonal balance?',
      answer:
        'We recommend 3 sessions per week for steady metabolic and hormonal regulation, supplemented by daily 10-minute restorative evening pranayama.',
    },
    {
      question: 'Can I request a female yoga instructor for PCOD sessions?',
      answer:
        'Yes — a certified female instructor with specialized training in women’s endocrine health is our default recommendation and available across all Delhi NCR and Tricity hubs.',
    },
    {
      question: 'How much does PCOD/PCOS home yoga cost?',
      answer:
        'Standard home-yoga pricing applies — ₹500 to ₹1,000 per session depending on teacher tier (Silver, Gold, Platinum). See the full monthly pricing matrix on this page.',
    },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Yoga for PCOD / PCOS & Hormonal Balance Support',
    description:
      'Therapeutic 1-on-1 yoga at home for PCOD/PCOS hormonal balance in Delhi NCR — pelvic circulation & stress reduction focus.',
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
          src="/images/hero_pcod_yoga.jpg"
          alt="Yoga for PCOD & PCOS Hormonal Balance"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Endocrine Regulation & Pelvic Circulation
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Yoga for PCOD / PCOS & Hormonal Balance Support
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified female instructor comes to your home in Delhi NCR to guide cycle-aware yoga — pelvic blood flow restoration, cortisol reduction, and metabolic support adapted to your personal symptoms.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to book a therapeutic yoga consultation for PCOD/PCOS.'
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
            <strong>Medical Disclaimer:</strong> Yoga is a complementary lifestyle therapy, not a replacement for medical diagnosis or gynecological treatment. Please continue any prescribed medication and consult your doctor regarding your routine.
          </p>
        </div>
      </section>

      {/* 3. Core Protocol Focus Areas */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>4-Pillar Endocrine Focus</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            What Our PCOD/PCOS Practice Focuses On
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Pelvic Circulation</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Baddha Konasana, Supta Baddha Konasana, and gentle hip openers to stimulate ovarian circulation.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Cortisol Reduction</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Nadi Shodhana and Bhramari pranayama to calm adrenal overactivation that exacerbates hormonal spikes.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Insulin Sensitivity</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Gentle abdominal twists and core engagement to stimulate pancreas activity and metabolic balance.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-2.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">04</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Cycle-Aware Pacing</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Adjusting from restorative poses during menstruation to energizing sequences during follicular phases.
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
            PCOD/PCOS Monthly Pricing Plans
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
                <span>BOOK PCOD TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Confidential Consultation with a Female Teacher
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our women’s wellness faculty on WhatsApp. Share your symptoms, cycle patterns, and preferred timings.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Female Yoga Therapists
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> 100% Privacy & Cycle-Aware Pacing
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Integrated Stress & Cortisol Reduction Pranayama
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Therapeutic Yoga for PCOD / PCOS" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on PCOD/PCOS Yoga" />
      </section>
    </div>
  );
}
