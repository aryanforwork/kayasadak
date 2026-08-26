import React from 'react';
import type { Metadata } from 'next';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { PRICING_TIERS, CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'KayaSadhak Pricing — Gold, Silver & Platinum Home Yoga Plans',
  description:
    'Transparent 3×3 pricing matrix for home yoga in Delhi NCR. Platinum ₹1,000, Gold ₹750, Silver ₹500/session. Verified instructors & flexible packages.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/pricing',
  },
};

export default function PricingPage() {
  const pricingFaqs = [
    {
      question: 'Are there any additional registration or traveling fees?',
      answer:
        'No. The monthly package rates listed cover full instructor travel and personalized session planning within our confirmed home-services footprint (Delhi-NCR and Chandigarh Tricity).',
    },
    {
      question: 'Can I change my session frequency or tier mid-month?',
      answer:
        'Yes. Session schedules and tier choices can be upgraded or adjusted at the start of any new monthly billing cycle.',
    },
    {
      question: 'Why does Platinum cost ₹1,000 per session?',
      answer:
        'Platinum tier instructors hold a Master’s Degree in Yoga with 10+ years experience and are specifically matched for high-convenience, immediate scheduling and complex condition support.',
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Photographic Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>100% Published Rates • Zero Hidden Charges</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Transparent Home Yoga Pricing: Platinum, Gold & Silver Plans
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            KayaSadhak maintains complete pricing transparency across Delhi NCR and Chandigarh Tricity. Prices are determined strictly by instructor tier and monthly session frequency.
          </p>
        </div>
      </section>

      {/* Main Pricing Table Component */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <PricingTable />
      </section>

      {/* Qualification Breakdown Cards */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl font-bold text-brand-green-900">
            Instructor Qualification Standards
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Every instructor sent to your residence is audited across strict credential tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-md space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span
                  style={{ backgroundColor: tier.badgeBg, color: tier.badgeTextColor }}
                  className="inline-block px-3 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm"
                >
                  {tier.name}
                </span>
                <div className="text-3xl font-heading font-bold text-brand-green-900">
                  ₹{tier.perSessionPrice}{' '}
                  <span className="text-xs font-body font-normal text-neutral-grey">/ session</span>
                </div>
                <p className="font-body text-xs font-semibold text-neutral-charcoal leading-relaxed">
                  {tier.qualifications} ({tier.experience})
                </p>
                <p className="font-body text-xs text-neutral-grey leading-relaxed">
                  <strong>Best For:</strong> {tier.bestFor}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hi KayaSadhak! I want to select the ${tier.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-brand-green-900 hover:bg-brand-green-700 text-white text-center font-body text-xs font-semibold rounded-xl transition-colors"
                >
                  Select {tier.name} ➔
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
              Request Personalized Plan & Match
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Tell us your location and health goal to get matched with verified Silver, Gold, or Platinum instructors in your locality.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm title="Request Instructor Match" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={pricingFaqs} title="Pricing & Package FAQs" />
      </section>
    </div>
  );
}
