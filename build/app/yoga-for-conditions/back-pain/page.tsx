import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaProcedures, FaRunning } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Yoga for Back Pain & Sciatica Relief at Home | KayaSadhak',
  description:
    'Therapeutic 1-on-1 yoga at home in Delhi NCR for chronic back pain & sciatica — spine decompression, core stabilization. Not medical advice. Enquire now.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/back-pain',
  },
  openGraph: {
    title: 'Yoga for Back Pain & Sciatica Relief at Home | KayaSadhak',
    description:
      'Therapeutic 1-on-1 yoga at home in Delhi NCR for chronic back pain & sciatica — spine decompression, core stabilization. Not medical advice. Enquire now.',
    url: 'https://www.kayasadhak.com/yoga-for-conditions/back-pain',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function BackPainYogaPage() {
  const faqs = [
    {
      question: 'Can yoga actually help with chronic back pain?',
      answer:
        'Gentle, appropriately guided yoga is widely used to support back pain management — easing stiffness, improving lumbar mobility, and building the deep core muscle corset that protects the lower back. A diagnosed structural issue should always be evaluated by your physician first.',
    },
    {
      question: 'Is yoga safe if I have a slipped or herniated disc?',
      answer:
        'Some poses (like aggressive unsupported forward bends and deep twists) are unsafe with an active disc issue. We ask for your doctor’s diagnosis and clearance before starting, and your teacher builds the session strictly around safe decompression movements.',
    },
    {
      question: 'How is this different from general yoga poses found online?',
      answer:
        'Generic online videos cannot assess how your spinal curvature and sciatic nerve respond in real time. A home therapist watches how you move, adjusts postures with supportive bolsters immediately, and personalizes every sequence.',
    },
    {
      question: 'How soon will I feel a difference in stiffness and mobility?',
      answer:
        'Many clients feel noticeable relief after 2–3 sessions as tight hamstrings and piriformis muscles relax. Longstanding chronic pain typically requires 4–6 weeks of consistent 3x/week practice for lasting spinal stability.',
    },
    {
      question: 'Can this help with sciatica nerve pain specifically?',
      answer:
        'Yes — our protocol includes targeted piriformis release, gentle nerve flossing, and supported hip openers to relieve pressure along the sciatic nerve pathway.',
    },
    {
      question: 'What if a pose causes discomfort during a session?',
      answer:
        'Tell your teacher immediately — they will stop and modify. In therapeutic yoga, sharp or worsening pain is a strict signal to pause and adjust, never to push through.',
    },
    {
      question: 'How much does therapeutic back pain yoga cost at home?',
      answer:
        'Standard home-yoga pricing applies — ₹500 to ₹1,000 per session depending on teacher tier (Silver, Gold, Platinum). See the pricing table on this page.',
    },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Therapeutic Yoga for Chronic Back Pain & Sciatica Relief',
    description:
      'Therapeutic 1-on-1 yoga at home in Delhi NCR for chronic back pain & sciatica — spine decompression, core stabilization.',
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
          src="/images/hero_back_pain_yoga.jpg"
          alt="Therapeutic Yoga for Back Pain & Sciatica"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Clinical Spine Decompression & Sciatica Care
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Therapeutic Yoga for Chronic Back Pain & Sciatica Relief
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A certified therapist visits your residence across Delhi NCR to guide a gentle practice tailored specifically around lumbar compression, disc safety, and sciatic nerve decompression.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to book a therapeutic yoga session for back pain/sciatica.'
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
            <strong>Medical Disclaimer:</strong> Yoga is a complementary wellness discipline, not a replacement for clinical diagnosis or surgery. If you have persistent back pain, a herniated disc, or acute numbness, please consult your physician before beginning.
          </p>
        </div>
      </section>

      {/* 3. 3-Pillar Back Care Protocol */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>Targeted 3-Stage Therapy</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
            How Our Back Care Yoga Protocol Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">01</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Spine Decompression</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Gentle axial traction, supported bridge, and pelvic tilts to decompress compressed lumbar vertebrae without floor strain.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">02</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Core & Glute Corset</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Strengthening the deep transverse abdominis and gluteal stabilizers that support the lower back during long sitting hours.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5DEC9] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center font-bold">03</div>
            <h3 className="font-heading font-bold text-lg text-[#16302B]">Sciatic Nerve Flossing</h3>
            <p className="text-xs text-[#5A574F] leading-relaxed">
              Bolster-supported piriformis and hamstring lengthening to release compression along the sciatic nerve pathway safely.
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
            Therapeutic Monthly Pricing Plans
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
                <span>BOOK BACK CARE TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Free 1-on-1 Back Care Assessment
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our therapeutic faculty on WhatsApp. Tell us about your pain pattern, diagnosis, and locality.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free Posture, Spine & Sciatica Assessment
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Certified Masters & Clinical Yoga Therapists
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Customized Spine Decompression Sequences
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Therapeutic Yoga for Back Pain & Sciatica" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Back Pain Yoga" />
      </section>
    </div>
  );
}
