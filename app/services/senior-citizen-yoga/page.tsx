import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaUserCheck, FaHeart, FaShieldAlt, FaChair, FaWalking } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Senior Citizen Yoga at Home in Delhi NCR | KayaSadhak',
  description:
    'Gentle chair yoga, joint mobility & fall-prevention sessions for seniors, taught at home in Delhi NCR & Chandigarh Tricity. From ₹500/session. Free trial.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/senior-citizen-yoga',
  },
  openGraph: {
    title: 'Senior Citizen Yoga at Home in Delhi NCR | KayaSadhak',
    description:
      'Gentle chair yoga, joint mobility & fall-prevention sessions for seniors, taught at home in Delhi NCR & Chandigarh Tricity. From ₹500/session. Free trial.',
    url: 'https://www.kayasadhak.com/services/senior-citizen-yoga',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function SeniorCitizenYogaPage() {
  const faqs = [
    {
      question: 'Is yoga safe for a senior with arthritis or a knee replacement?',
      answer:
        'Gentle, chair-based yoga is widely used for people managing arthritis and joint issues, but every case is different. We ask for your doctor’s go-ahead before the first session if there is a diagnosed condition or recent surgery, and your teacher adapts every pose to what is actually comfortable.',
    },
    {
      question: 'Does the session happen sitting in a chair the whole time?',
      answer:
        'Mostly, yes, with some standing poses using the chair or a wall for support if your teacher judges it is safe. Nobody is asked to get down onto the floor unless they want to and can do so easily.',
    },
    {
      question: 'How is this different from a general yoga class?',
      answer:
        'A general class is paced for the group. Here, the entire session is built around one person’s actual mobility, medical history, and comfort level that day — the pace and poses are adjusted in real time, not set in advance.',
    },
    {
      question: 'Can my mother/father do this if they have never done yoga before?',
      answer:
        'Yes — most senior clients are complete beginners. The first session is intentionally slow and mostly about assessing what feels comfortable.',
    },
    {
      question: 'How much does senior citizen yoga at home cost?',
      answer:
        '₹500 to ₹1,000 per session depending on the teacher tier, with monthly packages from ₹6,000 for 3 sessions a week. Full pricing is in the table on this page.',
    },
    {
      question: 'Can I book this for a parent and pay for it myself?',
      answer:
        'Yes, that is very common. Use your own contact details when booking and give us your parent’s address and availability — we will handle scheduling directly with them from there.',
    },
    {
      question: 'What if a session needs to be paused partway through?',
      answer:
        'Your teacher will always stop if your parent feels unwell, dizzy, or uncomfortable — safety takes absolute priority over finishing a planned sequence.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Senior Citizen Yoga at Home',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    description:
      'Gentle chair yoga, joint mobility & fall-prevention sessions for seniors, taught at home in Delhi NCR & Chandigarh Tricity.',
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
          src="/images/card_senior_yoga.webp"
          alt="Senior Citizen Yoga at Home"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Gentle & Joint-Safe Care for Elders
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Senior Citizen Yoga at Home — Gentle, Joint-Safe Sessions in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              KayaSadhak sends a verified teacher to your home to guide chair-based and gentle floor yoga built for older adults — joint mobility, balance work to reduce fall risk, and breathing practice, starting at ₹500 a session.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a gentle senior citizen home yoga trial session.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Trial on WhatsApp</span>
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

      {/* 2. What This Actually Helps With */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>Chair Yoga & Fall Prevention</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              Comfortable Movement Without Floor Strain
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              A lot of families book this for a parent who used to go to the park for a walk and has stopped — not because they don’t want to move, but because the floor got harder to get down to, a knee started aching, or they just don’t feel steady anymore.
            </p>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Chair yoga directly solves the “getting down to the floor” problem: most of the practice happens seated or standing with chair/wall support, so the cardiovascular and joint benefits come without strain or fall risk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaChair className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">100% Chair-Supported Options</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaWalking className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Balance & Fall Risk Reduction</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaHeart className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Arthritis & Joint Lubrication</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaUserCheck className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Patient, Gentle Instructors</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/trust_section_sketch_bg.webp"
              alt="Gentle Senior Yoga"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
              <div className="font-heading font-bold text-sm text-[#E5C384]">Zero Floor Pressure</div>
              <p className="text-[11px] text-gray-200 mt-0.5">Gentle stretches, pranayama breathwork, and supported balance exercises adapted to daily comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Matrix */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>TRANSPARENT INSTRUCTOR TIERS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#16302B]">
            Senior Citizen Monthly Pricing Plans
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            For most seniors starting out, 3 sessions a week is a comfortable pace. Choose your tier:
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 4. Booking for Parents Living Alone & Who Teaches */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-8 space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
                  <FaHeart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#16302B]">Booking for a Parent Who Lives Alone?</h3>
                  <p className="text-xs text-[#5A574F]">We coordinate scheduling directly with them</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                Many of our senior-citizen bookings come from adult children arranging sessions for parents in a different part of Delhi NCR or Chandigarh.
              </p>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                That is completely fine — share your parent’s address and preferred timing, and we will coordinate directly with them while keeping you continuously informed about progress and attendance.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E5DEC9] text-xs font-semibold text-[#16302B] flex items-center justify-between">
              <span>Hindi & English Speaking Faculty</span>
              <span className="text-[#B37B2E]">Female Instructors Available</span>
            </div>
          </div>

          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-8 space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
                  <FaUserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#16302B]">What a Typical Session Looks Like</h3>
                  <p className="text-xs text-[#5A574F]">30 to 45 minutes of gentle, focused care</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                Your instructor starts by asking about joint pain, past surgeries, dizziness, and medications affecting blood pressure or balance.
              </p>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                From there, expect seated stretches, chair-supported posture exercises, and soothing deep breathing. Sessions are kept to 30–45 minutes — long enough to stimulate healing, short enough not to fatigue.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E5DEC9] text-xs text-[#5A574F]">
              Serving Delhi, Gurugram, Noida, Greater Noida, Faridabad, Ghaziabad & Chandigarh Tricity.
            </div>
          </div>
        </div>
      </section>

      {/* 5. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>BOOK SENIOR TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Gentle Home Trial for Your Parents
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our faculty on WhatsApp. Tell us your locality, preferred teacher, and any health considerations.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free Assessment & Mobility Check
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Patient, Senior-Specialized Certified Teachers
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> 100% Chair-Supported Practice Available
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Senior Citizen Yoga at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Senior Citizen Yoga" />
      </section>
      </div>
    </div>
  );
}
