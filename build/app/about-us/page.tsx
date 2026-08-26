import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'About KayaSadhak | Nivil Chaudhary & Yoga Institute',
  description:
    'Learn about KayaSadhak founder Nivil Chaudhary (12+ yrs exp), certifying body partnerships, and holistic home yoga & YTT mission in Delhi NCR & Tricity.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/about-us',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Our Leadership & Mission</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Authentic Yoga Leadership & Institutional Excellence
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            KayaSadhak was established to bring structured, authentic yogic science and Ayurvedic care directly into homes and professional training institutes across India.
          </p>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 sm:p-14 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-56 h-64 bg-[#F3EEE2] border-2 border-brand-gold-500/30 rounded-3xl flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <div className="w-24 h-24 bg-brand-green-900/10 rounded-full flex items-center justify-center text-brand-green-900 text-4xl font-bold mb-3">
                NC
              </div>
              <div className="font-heading font-bold text-brand-green-900 text-xl">Nivil Chaudhary</div>
              <div className="font-body text-xs text-brand-gold-600 font-semibold mt-1">Founder & Lead Sadhak</div>
              <div className="font-body text-[11px] text-neutral-grey mt-0.5">12+ Years Experience</div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
            <div className="flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
              <KayaLeafMotif size={16} color="#C08A3E" />
              <span>Founder Story</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-green-900">
              Founder Bio: Nivil Chaudhary
            </h2>
            <p>
              Nivil Chaudhary has spent over a decade refining yoga instruction into an accessible, measurable therapeutic discipline. Having trained thousands of individual practitioners, corporate professionals, and aspiring teachers, Nivil founded KayaSadhak on three foundational principles:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-neutral-charcoal">
              <li>
                <strong>Verified Credentials:</strong> Classifying teachers strictly into Silver, Gold, and Platinum qualification tiers to eliminate uncertified instruction.
              </li>
              <li>
                <strong>Therapeutic Precision:</strong> Adapting Hatha and Ashtanga postures to address modern metabolic and musculoskeletal conditions safely.
              </li>
              <li>
                <strong>Institutional Excellence:</strong> Standardizing YTT curricula in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl font-bold text-brand-green-900">
            Our Institutional Tie-Ups & Partnerships
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Conducted in tie-up/partnership with recognized national and global governing bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-md space-y-3">
            <h3 className="font-heading font-bold text-xl text-brand-green-900">Indian Federation of Yoga</h3>
            <p className="font-body text-xs text-neutral-grey leading-relaxed">
              Standardizing traditional Hatha yoga practices, examination benchmarks, and instructor quality frameworks.
            </p>
          </div>
          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-md space-y-3">
            <h3 className="font-heading font-bold text-xl text-brand-green-900">Yoga Alliance (USA)</h3>
            <p className="font-body text-xs text-neutral-grey leading-relaxed">
              Providing internationally recognized registry pathways for our 200-Hour, 300-Hour, and 500-Hour YTT graduates.
            </p>
          </div>
          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-md space-y-3">
            <h3 className="font-heading font-bold text-xl text-brand-green-900">AYUSH Ministry (Govt of India)</h3>
            <p className="font-body text-xs text-neutral-grey leading-relaxed">
              Aligning health promotion protocols and wellness frameworks in tie-up/partnership with official guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
              Have Questions for Founder Nivil Chaudhary?
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Contact our lead team directly via WhatsApp or phone to discuss personal home yoga matching or YTT course enrollment.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm title="Connect with Founder & Team" />
          </div>
        </div>
      </section>
    </div>
  );
}
