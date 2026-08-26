import React from 'react';
import type { Metadata } from 'next';
import { PricingTable } from '@/components/PricingTable';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Gentle Yoga for Senior Citizens at Home | KayaSadhak',
  description:
    'Safe, gentle therapeutic home yoga for senior citizens in Delhi NCR. Focus on joint mobility, balance, & arthritis relief with verified patient tutors.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/senior-citizen-yoga',
  },
};

export default function SeniorCitizenYogaPage() {
  const faqs = [
    {
      question: 'Is chair yoga available for seniors who cannot sit on the floor?',
      answer:
        'Yes. Instructors utilize stable chairs, bolsters, and wall supports to ensure 100% comfortable, risk-free practice.',
    },
    {
      question: 'Can an instructor coordinate with our family doctor?',
      answer:
        'Yes, Platinum instructors review physician guidelines prior to initiating movements.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-brand-gold-500/15 text-brand-gold-600 text-xs font-heading font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Specialized Geriatric Care
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green-900">
          Gentle Therapeutic Home Yoga for Senior Citizens
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-grey leading-relaxed">
          KayaSadhak provides low-impact home yoga instruction tailored for elderly adults to enhance joint mobility, balance, and fall prevention in the safety of home.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-brand-green-900">
            Senior Mobility & Balance Focus
          </h2>
          <ul className="space-y-3 list-disc pl-4">
            <li>
              <strong>Joint Lubrication & Arthritis Relief:</strong> Gentle, non-strenuous limb mobilization to ease stiffness.
            </li>
            <li>
              <strong>Fall Prevention & Proprioception:</strong> Supported standing and chair balance drills to improve confidence.
            </li>
            <li>
              <strong>Pranayama for Vitality:</strong> Diaphragmatic breathing to improve oxygenation, heart health, and sleep quality.
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <LeadGenForm defaultService="Senior Citizen Yoga" title="Book Senior Citizen Consultation" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-brand-green-900 text-center">
          Senior Citizen Pricing Matrix
        </h2>
        <PricingTable />
      </div>

      <FaqAccordion items={faqs} />
    </div>
  );
}
