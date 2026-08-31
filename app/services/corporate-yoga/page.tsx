import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaBuilding, FaLaptop, FaUserTie, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Corporate Yoga & Desk Wellness Sessions Delhi | KayaSadhak',
  description:
    'Onsite corporate yoga for Delhi NCR offices — desk stretches, posture correction & stress-relief sessions for teams. Certified trainers. Book a free demo.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/corporate-yoga',
  },
  openGraph: {
    title: 'Corporate Yoga & Desk Wellness Sessions Delhi | KayaSadhak',
    description:
      'Onsite corporate yoga for Delhi NCR offices — desk stretches, posture correction & stress-relief sessions for teams. Certified trainers. Book a free demo.',
    url: 'https://www.kayasadhak.com/services/corporate-yoga',
    siteName: 'KayaSadhak',
    type: 'website',
  },
};

export default function CorporateYogaPage() {
  const faqs = [
    {
      question: 'How much does a corporate yoga program cost?',
      answer:
        'It depends on your team size, session frequency, and whether sessions are onsite or virtual — send us your headcount and preferred schedule on WhatsApp and we will respond with a clear proposal with zero hidden line items.',
    },
    {
      question: 'Do employees need to change clothes or bring a mat?',
      answer:
        'No — our desk-based format is designed to be done in regular office wear, with mats optional. If you prefer full mat-based sessions in a dedicated recreation space, we can plan for that instead.',
    },
    {
      question: 'How long is a typical corporate session?',
      answer:
        'Anywhere from a 20-minute desk reset to a full 60-minute wellness-hour session, depending on what fits your team’s daily workflow.',
    },
    {
      question: 'Can you run sessions for a remote or hybrid team?',
      answer:
        'Yes, we offer live interactive virtual sessions for distributed teams, either standalone or alongside onsite sessions for in-office employees.',
    },
    {
      question: 'Do you do one-off events, like an International Yoga Day session?',
      answer:
        'Yes — one-off wellness events, team retreats, and stress-management workshops are common bookings alongside our regular weekly programs.',
    },
    {
      question: 'What if only a few employees actually want to join?',
      answer:
        'That is fine — sessions work for small groups of 5–10 just as well as company-wide sessions. Some companies start with a pilot team before rolling out wider.',
    },
    {
      question: 'Can our CEO or a senior leader book individual sessions alongside the team program?',
      answer:
        'Yes, using our standard Platinum (₹1,000), Gold (₹750), or Silver (₹500) individual pricing tiers.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Corporate Yoga & Workplace Wellness',
    provider: {
      '@type': 'Organization',
      name: 'KayaSadhak',
      url: 'https://www.kayasadhak.com',
    },
    description:
      'Onsite corporate yoga for Delhi NCR offices — desk stretches, posture correction & stress-relief sessions for teams.',
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
          alt="Corporate Yoga & Wellness Programs"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75 scale-105 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 text-white text-left">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <KayaLeafMotif size={13} color="#E5C384" />
              <span className="font-display font-semibold text-[10px] sm:text-xs text-[#E5C384] tracking-[0.14em] uppercase">
                Workplace Wellness & Desk Ergonomics
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
              Corporate Yoga & Workplace Wellness Sessions for Delhi NCR Offices
            </h1>

            <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl">
              KayaSadhak sends certified teachers to your office in Delhi, Gurugram, Noida, Faridabad, or Ghaziabad for desk-friendly stretches, posture correction, and stress-relief sessions. No change of clothes required.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to request a corporate wellness proposal for our office.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#16302B] hover:bg-[#0E211D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span className="uppercase tracking-wider">Get Corporate Proposal on WhatsApp</span>
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

      {/* 2. Value Proposition */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/80 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
              <KayaLeafMotif size={12} color="#C08A3E" />
              <span>Targeted Workplace Relief</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B] leading-tight">
              Solving Desk Burnout, Neck Strain & Commute Fatigue
            </h2>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              Most HR teams that book us aren’t chasing a photo-op — they are responding to real employee strain: rising sick leave around lower back and neck pain, engineering burnout before releases, or executive stress.
            </p>

            <p className="text-sm sm:text-base text-[#4A4842] leading-relaxed">
              A short, consistent weekly session — not an occasional one-off — directly restores spinal alignment, releases thoracic tightness, and resets mental focus across your team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">No Mat or Dress Change Needed</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">20-Min Desk Resets or 60-Min Sessions</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Onsite in NCR & Virtual for Hybrid</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16302B]/10 shadow-xs">
                <FaCheckCircle className="w-4 h-4 text-[#B37B2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#16302B]">Executive 1-on-1s Available</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#16302B]/15">
            <img
              src="/images/card_corporate_wellness.webp"
              alt="Corporate Desk Wellness"
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs">
              <div className="font-heading font-bold text-sm text-[#E5C384]">Professional Office Facilitation</div>
              <p className="text-[11px] text-gray-200 mt-0.5">Instructors trained in corporate group dynamics, desk ergonomics, and non-disruptive office formats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Formats We Offer */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FAF6F0] border border-[#E5DEC9] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
              Corporate Formats We Offer
            </h2>
            <p className="text-xs sm:text-sm text-[#5A574F]">
              Customized to your office layout, headcount, and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
                <FaBuilding className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Onsite Office Sessions</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Directly at your Gurugram, Noida, or Delhi office in a conference room or open floor.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
                <FaLaptop className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Virtual & Hybrid</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Live interactive video sessions for remote teams across India and global offices.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
                <FaCalendarAlt className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Yoga Day & Offsites</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                One-off workshops, stress management sessions, and annual offsite wellness retreats.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#16302B]/10 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#16302B] text-[#E5C384] flex items-center justify-center">
                <FaUserTie className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#16302B]">Executive 1-on-1s</h3>
              <p className="text-xs text-[#5A574F] leading-relaxed">
                Private sessions for CXOs & founders alongside the team program (₹500–₹1,000/sess).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LeadGen Proposal Form */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#B37B2E]">
                <KayaLeafMotif size={12} color="#C08A3E" />
                <span>REQUEST CORPORATE PROPOSAL</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#16302B]">
                Get a Tailored Corporate Wellness Plan
              </h2>
              <p className="text-sm text-[#4A4842] leading-relaxed">
                Tell us your office locality, estimated headcount, and whether you prefer onsite or virtual sessions. We will send a customized proposal within 24 hours.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#16302B] font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Free 30-Minute Onsite Trial Demo
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Custom Schedules: 20-Min Resets to 60-Min Classes
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B37B2E] font-bold">✓</span> Serving Gurugram Cyber City, Noida, Delhi & Faridabad
                </div>
              </div>
            </div>

            <div>
              <LeadGenForm defaultService="Corporate Yoga & Desk Wellness" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Frequently Asked Questions on Corporate Yoga" />
      </section>
      </div>
    </div>
  );
}
