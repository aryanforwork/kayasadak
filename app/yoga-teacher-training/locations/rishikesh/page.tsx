import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '200-Hour Yoga Teacher Training Rishikesh | KayaSadhak',
  description:
    'Train in the Yoga Capital of the World. Certified 200/300/500-Hr YTT in Rishikesh in tie-up with Indian Federation of Yoga & Yoga Alliance USA. Apply.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/locations/rishikesh',
  },
};

export default function RishikeshYttLocationPage() {
  const faqs = [
    {
      question: 'Are accommodation and meals included in Rishikesh YTT?',
      answer:
        'Yes. Our Rishikesh residential programs include private or shared ashram lodging on the banks of the Ganges and 3 daily organic sattvic meals.',
    },
    {
      question: 'Which certifications are awarded upon completion?',
      answer:
        'Graduates receive international certificates conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India).',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-brand-gold-500/15 text-brand-gold-600 text-xs font-heading font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Global Capital Ashram Center
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-green-900">
          200-Hour Yoga Teacher Training Ashram in Rishikesh
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-grey leading-relaxed">
          Train in the World Capital of Yoga. KayaSadhak’s Rishikesh ashram center delivers immersive 200-Hour, 300-Hour, 500-Hour, Kundalini, and Yin YTT courses on the sacred banks of the Ganges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
          <h2 className="font-heading text-2xl font-bold text-brand-green-900">
            Rishikesh Ashram Features & Curriculum
          </h2>
          <ul className="space-y-3 list-disc pl-4">
            <li>
              <strong>Sacred Ganges Setting:</strong> Practice in open-air yoga shalas overlooking the Ganges river near Laxman Jhula.
            </li>
            <li>
              <strong>All 5 Programs Available:</strong> 200-Hr Foundation, 300-Hr Advanced, 500-Hr Master, 200-Hr Kundalini, and 50-Hr Yin TTC.
            </li>
            <li>
              <strong>Accreditation Tie-Ups:</strong> Conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India).
            </li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <LeadGenForm defaultService="Yoga Teacher Training (YTT)" defaultLocality="Rishikesh Ashram" title="Apply for Rishikesh YTT Intake" />
        </div>
      </div>

      <FaqAccordion items={faqs} />
    </div>
  );
}
