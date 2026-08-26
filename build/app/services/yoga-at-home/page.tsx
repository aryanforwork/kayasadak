import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ConditionChips } from '@/components/ConditionChips';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'Personal Yoga Teacher at Home | Platinum & Gold | KayaSadhak',
  description:
    'Book verified personal yoga teachers at home in Delhi NCR & Tricity. Transparent 3×3 pricing: Platinum ₹1,000, Gold ₹750, Silver ₹500/session. Customized sessions.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/yoga-at-home',
  },
};

export default function HomeYogaServicePage() {
  const faqs = [
    {
      question: 'Can two family members join the home session together?',
      answer: 'Yes, up to two family members can practice together during a personal home session at no extra charge.',
    },
    {
      question: 'What if I need to cancel or reschedule a session?',
      answer: 'Notify your teacher 4 hours in advance to reschedule the session within the same billing month.',
    },
    {
      question: 'What equipment do I need at home?',
      answer: 'A standard yoga mat and comfortable attire are sufficient. Tutors bring specialized props or blocks if required.',
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
            <span>Verified 1-on-1 At-Home Instruction</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Personal Yoga Teacher at Home in Delhi NCR & Tricity
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            KayaSadhak delivers certified personal yoga instructors directly to your residence across Delhi, Noida, Gurugram, Ghaziabad, Faridabad, and Chandigarh Tricity. Customized for your daily schedule and health goals.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to book a personal home yoga trial session.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Book Free Home Trial on WhatsApp</span>
              <span>➔</span>
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-body font-semibold text-sm rounded-xl transition-all border border-white/20"
            >
              View 3×3 Pricing Matrix
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid (Modern High-Quality Card Style) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Why Choose Home Yoga</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Private 1-on-1 Practice Tailored to You
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Experience therapeutic alignment, privacy, and full schedule flexibility in your living room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Platinum */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#16302B] text-white flex flex-col justify-between min-h-[480px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#16302B] via-[#16302B]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Platinum Yoga" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#D9D9E3] text-[#1F4A3C] font-body text-xs font-bold uppercase rounded-full">
                  Platinum Tier
                </span>
                <span className="text-brand-gold-500 font-heading font-bold text-lg">₹1,000 / sess</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Masters + 10+ Yrs Exp</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Matched for complex spinal rehabilitation, senior executive wellness, and chronic metabolic management.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• Complete Masters Degree in Yoga</li>
                <li>• Advanced 500-Hour TTC Certified</li>
                <li>• Medical & Doctor Guideline Sync</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in Platinum Tier Home Yoga.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Select Platinum Tier ➔
              </a>
            </div>
          </div>

          {/* Card 2: Gold */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#1F4A3C] text-white flex flex-col justify-between min-h-[480px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3C] via-[#1F4A3C]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Gold Yoga" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#A87C2E] text-white font-body text-xs font-bold uppercase rounded-full">
                  Gold Tier
                </span>
                <span className="text-brand-gold-500 font-heading font-bold text-lg">₹750 / sess</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Graduation + 7+ Yrs Exp</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Ideal for progressive strength building, weight management, PCOD/thyroid care, and family sessions.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• B.Sc / B.A. Graduation in Yoga</li>
                <li>• Advanced 300-Hour TTC Certified</li>
                <li>• Up to 2 Family Members Included</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in Gold Tier Home Yoga.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Select Gold Tier ➔
              </a>
            </div>
          </div>

          {/* Card 3: Silver */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#2E5E4E] text-white flex flex-col justify-between min-h-[480px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E5E4E] via-[#2E5E4E]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Silver Yoga" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#B8BCC2] text-[#1F4A3C] font-body text-xs font-bold uppercase rounded-full">
                  Silver Tier
                </span>
                <span className="text-brand-gold-500 font-heading font-bold text-lg">₹500 / sess</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Diploma + 5+ Yrs Exp</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Perfect for daily foundational Hatha yoga, flexibility maintenance, and routine stress relief.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• Diploma in Yoga Science</li>
                <li>• 200-Hour TTC Foundation</li>
                <li>• Flexible Morning & Evening Slots</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am interested in Silver Tier Home Yoga.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Select Silver Tier ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section id="pricing" className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Home Yoga 3×3 Monthly Pricing Matrix
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            No hidden travel or registration fees across Delhi NCR and Chandigarh Tricity.
          </p>
        </div>
        <PricingTable />
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
              <span>Personalized Assessment</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Book Your Free Home Assessment Session
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Connect directly with Nivil Chaudhary & senior faculty to get matched with verified Silver, Gold, or Platinum instructors in your exact locality.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm defaultService="Personal Yoga at Home" title="Book Personal Home Assessment" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Home Yoga FAQs" />
      </section>
    </div>
  );
}
