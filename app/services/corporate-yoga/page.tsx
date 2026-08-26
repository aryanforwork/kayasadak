import React from 'react';
import type { Metadata } from 'next';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Corporate Yoga & Employee Wellness Programs Delhi NCR | KayaSadhak',
  description:
    'Boost workplace productivity and reduce stress with KayaSadhak corporate yoga sessions & desk ergonomics in Delhi, Gurgaon, & Noida. Get custom quotes.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/corporate-yoga',
  },
};

export default function CorporateYogaPage() {
  const faqs = [
    {
      question: 'Do employees need to change into gym attire for desk yoga?',
      answer:
        'No. Our micro-break desk yoga sessions are designed for standard office attire right at employees workstations.',
    },
    {
      question: 'How do we request a corporate proposal?',
      answer:
        'Contact founder Nivil Chaudhary directly on WhatsApp at +91-8273264561 or email contact@kayasadhak.com.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-brand-gold-500/15 text-brand-gold-600 text-xs font-heading font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          B2B Employee Wellness
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green-900">
          Corporate Yoga & Employee Wellness Solutions in Delhi NCR
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-grey leading-relaxed">
          Deliver structured corporate yoga, desk ergonomics workshops, and mental wellness programs to office campuses across Cyber City Gurugram, Sector 62 Noida, and Connaught Place Delhi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-brand-green-900">
            Corporate Wellness Program Focus Areas
          </h2>
          <ul className="space-y-3 list-disc pl-4">
            <li>
              <strong>Postural Ergonomics & Spinal Relief:</strong> Targeted stretches for neck, shoulder, and lumbar strain caused by prolonged desk seating.
            </li>
            <li>
              <strong>Stress Reduction & Breathwork:</strong> Guided pranayama and mindfulness modules to improve team focus and reduce burnout.
            </li>
            <li>
              <strong>Executive 1-on-1 Sessions:</strong> Customized high-performance wellness coaching for senior leadership.
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <LeadGenForm defaultService="Corporate Yoga" title="Request Corporate Proposal" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-brand-green-900 text-center">
          Corporate Service Tiers
        </h2>
        <PricingTable />
      </div>

      <FaqAccordion items={faqs} />
    </div>
  );
}
