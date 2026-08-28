import React from 'react';
import type { Metadata } from 'next';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ConditionChips } from '@/components/ConditionChips';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'Therapeutic Yoga for Back Pain & Sciatica | KayaSadhak',
  description:
    'Relieve chronic lower back pain & sciatica with customized therapeutic home yoga in Delhi NCR. Taught by certified back-care tutors. Book consultation.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-for-conditions/back-pain',
  },
};

export default function BackPainConditionPage() {
  const faqs = [
    {
      question: 'Is yoga safe for acute back pain or herniated disc?',
      answer:
        'Yes, when guided by our Platinum Tier therapeutic specialists using doctor-cleared protocols. Always consult your physician prior to starting.',
    },
    {
      question: 'How many sessions per week are recommended for sciatica relief?',
      answer:
        'We recommend a 3 to 4 day per week plan (12 to 16 sessions monthly) to maintain steady spine decompression and pelvic alignment.',
    },
    {
      question: 'Will the instructor adjust poses if I feel pain?',
      answer:
        'Absolutely. 1-on-1 home sessions allow instant modification of every posture using props, wall supports, or bolsters.',
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Medical Disclaimer Top Banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 py-3 px-4 text-xs sm:text-sm font-body text-center">
        ⚠️ <strong>Medical Disclaimer:</strong> Yoga is a holistic wellness discipline and not a substitute for medical advice or surgical treatment. Consult your physician.
      </div>

      {/* Hero Photographic Banner */}
      <section className="relative bg-[#16302B] text-white pt-12 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Spine Decompression & Sciatica Protocol</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Therapeutic Yoga for Chronic Back Pain & Sciatica Relief
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            Relieve lower back stiffness, lumbar compression, and sciatica discomfort with customized 1-on-1 home yoga instruction delivered directly to your residence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am looking for back pain relief home yoga.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Book Back Pain Assessment ➔</span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Targeted Back Care Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            How Our Back Care Protocol Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 className="font-heading font-bold text-2xl text-brand-green-900">Spine Alignment & Traction</h3>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Gentle axial extension and cat-cow mobilization to decompress spinal vertebrae and ease nerve impingement.
            </p>
          </div>

          <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 className="font-heading font-bold text-2xl text-brand-green-900">Deep Core Stabilization</h3>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Strengthening transverse abdominis and gluteal support to create a natural lumbar girdle and prevent re-injury.
            </p>
          </div>

          <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 className="font-heading font-bold text-2xl text-brand-green-900">Sciatica Nerve Release</h3>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Supta Padangusthasana and piriformis stretches to relieve pressure along the sciatic nerve pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Condition Chips Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <ConditionChips />
      </section>

      {/* Lead Generation Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3 py-1.5 rounded-full text-xs text-brand-gold-600 font-bold uppercase">
              <KayaLeafMotif size={14} color="#C08A3E" />
              <span>Back Care Assessment</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Request Your Free Home Back-Care Assessment
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Connect directly with Nivil Chaudhary & senior therapeutic faculty to get matched with verified Platinum or Gold instructors in your locality.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm defaultService="Personal Yoga at Home" title="Book Back Pain Consultation" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Back Pain Yoga FAQs" />
      </section>
    </div>
  );
}
