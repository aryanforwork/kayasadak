import React from 'react';
import type { Metadata } from 'next';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Personal Yoga Teacher at Home South Delhi | KayaSadhak',
  description:
    'Book verified personal home yoga teachers in South Delhi (Hauz Khas, Saket, GK, Vasant Kunj). 3-tier pricing starting at ₹500/session.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-at-home/delhi/south-delhi',
  },
};

export default function SouthDelhiLocalityPage() {
  const faqs = [
    {
      question: 'Which South Delhi areas are covered for home yoga sessions?',
      answer:
        'We cover all major South Delhi localities including Hauz Khas, Green Park, Saket, Malviya Nagar, Vasant Kunj, Vasant Vihar, Greater Kailash (GK 1 & 2), Defense Colony, and RK Puram.',
    },
    {
      question: 'Can I request a female home yoga instructor in South Delhi?',
      answer:
        'Yes. We have certified female yoga tutors available across all three qualification tiers (Silver, Gold, Platinum) in South Delhi.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-brand-green-50 text-brand-green-900 border border-brand-green-900/20 text-xs font-heading font-semibold px-3 py-1 rounded-full uppercase">
          South Delhi Locality Cluster
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green-900">
          Personal Yoga Teacher at Home in South Delhi
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-grey leading-relaxed">
          Verified home yoga tutors delivered directly to your apartment or villa in Hauz Khas, Saket, Greater Kailash, Vasant Kunj, Defense Colony, and RK Puram.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-brand-green-900">
            Sub-Localities & Neighborhoods Covered
          </h2>
          <p>
            Our verified instructors serve practitioners across South Delhi with 100% punctuality and tailored session plans:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-brand-green-900 bg-neutral-cream p-4 rounded-xl border border-brand-green-900/10">
            <div>• Hauz Khas & Green Park</div>
            <div>• Greater Kailash (GK 1 & 2)</div>
            <div>• Saket & Malviya Nagar</div>
            <div>• Vasant Kunj & Vasant Vihar</div>
            <div>• Defense Colony & Lajpat Nagar</div>
            <div>• RK Puram & Munirka</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <LeadGenForm defaultService="Personal Yoga at Home" defaultLocality="South Delhi" title="Check South Delhi Availability" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-brand-green-900 text-center">
          South Delhi Home Yoga Rates (3×3 Matrix)
        </h2>
        <PricingTable />
      </div>

      <FaqAccordion items={faqs} />
    </div>
  );
}
