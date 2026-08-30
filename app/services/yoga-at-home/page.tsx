import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaUserCheck, FaMapMarkerAlt, FaShieldAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Personal Yoga Teacher at Home in Delhi NCR | KayaSadhak',
  description:
    'Certified yoga teacher at your home in Delhi NCR & Chandigarh Tricity. Transparent Platinum, Gold & Silver pricing from ₹500/session. Free trial on WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/yoga-at-home',
  },
  openGraph: {
    title: 'Personal Yoga Teacher at Home in Delhi NCR | KayaSadhak',
    description:
      'Certified yoga teacher at your home in Delhi NCR & Chandigarh Tricity. Transparent Platinum, Gold & Silver pricing from ₹500/session. Free trial on WhatsApp.',
    url: 'https://www.kayasadhak.com/services/yoga-at-home',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function YogaAtHomePage() {
  const faqs = [
    {
      question: 'How much does a personal yoga teacher at home cost in Delhi NCR?',
      answer:
        'KayaSadhak’s home sessions run ₹500 to ₹1,000 per session depending on the teacher tier you choose (Silver, Gold, or Platinum), with monthly packages from ₹6,000 for 3 sessions a week. The full breakdown is in the pricing table on this page.',
    },
    {
      question: 'Can I request a female yoga teacher?',
      answer:
        'Yes. Mention your preference when you book on WhatsApp and we will match you accordingly, subject to availability in your locality.',
    },
    {
      question: 'Do I need a yoga mat and equipment, or does the teacher bring it?',
      answer:
        'A basic yoga mat is helpful but not essential for the first session — your teacher will tell you exactly what to keep ready once your goals and any props needed are confirmed.',
    },
    {
      question: 'Is one session a week enough, or should I book more?',
      answer:
        'It depends on your goal. General fitness and stress relief show results with 3 sessions a week; if you are working on a specific issue like back pain or weight management, your teacher may recommend 4–5 sessions a week for faster, steadier progress.',
    },
    {
      question: 'What is the difference between the Silver, Gold, and Platinum teacher tiers?',
      answer:
        'The tiers reflect the teacher’s formal qualification and years of experience. All three tiers are verified by KayaSadhak before they are assigned to any client; the difference is depth of training and experience, not supervision.',
    },
    {
      question: 'Can I switch teachers if it is not the right fit?',
      answer:
        'Yes — tell us within the first two sessions and we will match you with someone else at no extra cost.',
    },
    {
      question: 'Do you serve areas outside Delhi NCR and Chandigarh Tricity?',
      answer:
        'Not yet for home sessions — our verified-teacher network currently covers Delhi NCR and Chandigarh Tricity only. (Our Yoga Teacher Training programs run more widely across our 9 premier institutes).',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Yoga Teacher at Home',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'City', name: 'Panchkula' },
    ],
    description:
      'Certified yoga teacher at your home in Delhi NCR & Chandigarh Tricity. Transparent Platinum, Gold & Silver pricing from ₹500/session.',
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
          src="/images/hero_home_yoga_ncr.webp"
          alt="Personal Yoga Teacher at Home in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Verified 1-on-1 In-Home Sessions
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Personal Yoga Teacher at Home in Delhi NCR & Chandigarh Tricity
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A KayaSadhak teacher comes to your home, at a time you set, and teaches you one-on-one — no studio commute, no group class pace that’s wrong for your body, and no waiting for a slot. Transparent pricing starts at ₹500 a session.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a free trial home yoga session.'
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

      {/* 2. Core Value Proposition */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>Why In-Home Yoga Works Better</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              One-on-One Attention in the Comfort of Your Own Living Room
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Most people who look for a home yoga teacher have already tried one of two things: a nearby studio that never quite fits their busy schedule, or a YouTube routine that stalled after two weeks because nobody corrected their form.
            </p>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              A certified teacher who actually watches you move, in your own space, solves both problems at once. Your instructor observes your posture, joint alignment, and breathing rhythm, adjusting every sequence in real-time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Zero Commute or Traffic</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Male & Female Instructors</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Up to 2 Family Members Included</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Flexible Morning/Evening Slots</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/pillar_home_yoga.webp"
              alt="Home Yoga Personal Instructor"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
              <div className="font-heading font-bold text-sm text-[#E5C384]">Audited Quality & Safety</div>
              <p className="text-[11px] text-gray-200 mt-0.5">Every instructor undergoes rigorous background checks, credential verification, and physical teaching auditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How KayaSadhak Home Sessions Work */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
              How KayaSadhak’s Home Sessions Work
            </h2>
            <p className="text-xs sm:text-sm text-[#5A574F]">
              Four seamless steps from inquiry to personalized daily practice
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] font-display font-bold text-sm flex items-center justify-center">
                01
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Pick Your Tier & Slot</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Choose Silver, Gold, or Platinum tier and set your preferred morning or evening session time.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] font-display font-bold text-sm flex items-center justify-center">
                02
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Free Trial & Assessment</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                A verified instructor visits your home for a flexibility, posture, and health goal assessment.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] font-display font-bold text-sm flex items-center justify-center">
                03
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Tailored Sequence</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Sessions are built around your goals (back pain, weight, stress, stamina) rather than generic routines.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] font-display font-bold text-sm flex items-center justify-center">
                04
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Weekly Progression</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Your teacher tracks strength, joint mobility, and breathing progress with monthly review adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transparent 3x3 Pricing Table */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>TRANSPARENT INSTRUCTOR TIERS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#16302B]">
            Transparent Monthly Pricing Matrix
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            No hidden travel charges or extra fees across Delhi NCR & Chandigarh Tricity. Select your frequency:
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 5. Who Teaches Your Session & Locality Coverage */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Who Teaches Card */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-8 space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
                  <FaUserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#16302B]">Who Teaches Your Session</h3>
                  <p className="text-xs text-[#5A574F]">Personally audited by founder Nivil Chaudhary</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                Every teacher is personally screened by founder Nivil Chaudhary, who has spent 12+ years in the yoga and wellness field, before they are assigned to a tier. We verify university degrees, certifications, background checks, and conduct real-world teaching auditions.
              </p>

              <p className="text-xs sm:text-sm text-[#4A4842] leading-relaxed">
                If you prefer a <strong>female yoga instructor</strong>, simply mention it when you book on WhatsApp — we have verified male and female faculty across all hubs.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E5DEC9] flex items-center justify-between text-xs font-semibold text-[#16302B]">
              <span>100% Punctuality Guarantee</span>
              <span className="text-[#B37B2E]">Free Teacher Replacement</span>
            </div>
          </div>

          {/* Localities Covered Card */}
          <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-8 space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#16302B] text-[#E5C384] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#16302B]">Areas & Localities We Cover</h3>
                  <p className="text-xs text-[#5A574F]">Within 24–48 hours across 20+ active hubs</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#4A4842]">
                <div className="p-2.5 rounded-xl bg-white border border-[#16302B]/10">
                  <strong className="text-[#16302B] block">South & Central Delhi</strong>
                  GK, Saket, Hauz Khas, Vasant Kunj, South Ex, CP
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#16302B]/10">
                  <strong className="text-[#16302B] block">Gurugram (Gurgaon)</strong>
                  DLF Phase 1–5, Golf Course Rd, Cyber City, Sohna Rd
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#16302B]/10">
                  <strong className="text-[#16302B] block">Noida & Greater Noida</strong>
                  Sector 18, 50, 62, 137, Expressway, Pari Chowk
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#16302B]/10">
                  <strong className="text-[#16302B] block">Chandigarh Tricity</strong>
                  Chandigarh Sectors, Mohali Phase 1–11, Panchkula
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5DEC9] text-xs text-[#5A574F]">
              Also serving Faridabad, Ghaziabad (Indirapuram, Vaishali), West & North Delhi.
            </div>
          </div>
        </div>
      </section>

      {/* 6. Form & Booking Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>BOOK YOUR TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Ready to Experience 1-on-1 Home Yoga?
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our faculty on WhatsApp. Tell us your locality, preferred teacher tier, and schedule — we will confirm your trial slot the same day.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free 60-Minute Posture & Flexibility Assessment
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Male & Female Certified Instructors Available
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Up to 2 Family Members Can Practice Together
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Personal Yoga at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Home Yoga" />
      </section>
      </div>
    </div>
  );
}
