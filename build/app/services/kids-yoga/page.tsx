import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaChild, FaSmile, FaBrain, FaGraduationCap } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Kids & Teen Yoga at Home in Delhi NCR | KayaSadhak',
  description:
    'Certified kids\' yoga teacher at home in Delhi NCR & Chandigarh Tricity. Builds focus, flexibility & calm for exam stress. From ₹500/session. Free trial.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/kids-yoga',
  },
  openGraph: {
    title: 'Kids & Teen Yoga at Home in Delhi NCR | KayaSadhak',
    description:
      'Certified kids\' yoga teacher at home in Delhi NCR & Chandigarh Tricity. Builds focus, flexibility & calm for exam stress. From ₹500/session. Free trial.',
    url: 'https://www.kayasadhak.com/services/kids-yoga',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function KidsYogaPage() {
  const faqs = [
    {
      question: 'What age can a child start yoga with KayaSadhak?',
      answer:
        'We generally start from around age 4, with the format adjusted heavily for younger children. There is no upper age limit — many of our sessions are for teenagers managing school and exam stress.',
    },
    {
      question: 'Does my child need any prior experience or flexibility?',
      answer:
        'No. Most children who start with us have never done yoga before, and flexibility develops naturally with regular practice rather than being a prerequisite.',
    },
    {
      question: 'Will the session actually hold my child’s attention?',
      answer:
        'Sessions for younger children are built around animal poses, games, stories, and short segments specifically because attention spans are limited at that age. A good teacher works with that rather than fighting it.',
    },
    {
      question: 'Can this help with my teenager’s exam stress specifically?',
      answer:
        'Many parents book sessions during board exams and terms for exactly this reason — the breathing and focus techniques are tools a teenager can use in the moment before exams.',
    },
    {
      question: 'How much does kids’ yoga at home cost?',
      answer:
        '₹500 to ₹1,000 per session depending on teacher tier, with monthly packages from ₹6,000 for 3 sessions a week — see the pricing table on this page.',
    },
    {
      question: 'Can siblings join the same session?',
      answer:
        'Yes, depending on age gaps. When ages are close, joint sessions work wonderfully; for larger age gaps, two shorter dedicated segments can be arranged.',
    },
    {
      question: 'Is this safe for a child with a health condition or an injury?',
      answer:
        'Let us know any relevant medical history when booking. Your teacher will adapt every posture accordingly, and we ask for a pediatrician’s clearance for anything serious.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kids & Teen Yoga at Home',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    description:
      'Certified kids yoga teacher at home in Delhi NCR & Chandigarh Tricity. Focus, flexibility & exam stress relief.',
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
          src="/images/hero_kids_yoga.jpg"
          alt="Kids & Teen Yoga at Home in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Focus, Posture & Exam Calm for Children
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Kids & Teen Yoga at Home — Focus, Flexibility & Stress Relief in Delhi NCR
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              A KayaSadhak teacher comes to your home and works with your child one-on-one — building flexibility and posture awareness for young kids, and focus tools for teenagers navigating exam pressure.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to book a free trial home yoga session for my child.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Book Free Kids Trial on WhatsApp</span>
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

      {/* 2. Age-Wise Approach */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>Tailored for Every Stage</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              Combating Screen Time, Heavy Bags & Academic Pressure
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Growing up in Delhi NCR involves long school days, heavy backpacks, hours of screen study, and less outdoor playtime. A weekly home session gives a child regular guided movement and quiet breathing free of grades or pressure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaChild className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Ages 4–10: Animal Poses & Fun Games</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaGraduationCap className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Teens: Exam Stress & Focus Pranayama</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaBrain className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Better Sleep & Spine Alignment</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaSmile className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Patient, Warm Child Specialists</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/hero_kids_yoga.jpg"
              alt="Kids Yoga Instructor Session"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
              <div className="font-heading font-bold text-sm text-[#E5C384]">Specially Audited Child Faculty</div>
              <p className="text-[11px] text-gray-200 mt-0.5">Audited by founder Nivil Chaudhary for patience, warmth, and the ability to hold a child’s attention constructively.</p>
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
            Kids & Teen Monthly Pricing Plans
          </h2>
          <p className="font-body text-xs sm:text-base text-[#5A574F]">
            Transparent pricing per session across Delhi NCR & Chandigarh Tricity:
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 4. LeadGen Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>BOOK KIDS TRIAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Book a Free Trial Session for Your Child
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Connect directly with our faculty on WhatsApp. Share your child’s age, locality, and what you’re hoping to develop (flexibility, concentration, exam calm).
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free Posture & Flexibility Trial Check
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Female & Male Certified Kids Specialists
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Flexible After-School & Weekend Timings
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Kids & Teen Yoga at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Kids & Teen Yoga" />
      </section>
      </div>
    </div>
  );
}
