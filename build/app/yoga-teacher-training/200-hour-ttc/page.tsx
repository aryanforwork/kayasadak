import React from 'react';
import type { Metadata } from 'next';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: '200-Hour Yoga Teacher Training Course | KayaSadhak',
  description:
    'Certified 200-Hour YTT course in tie-up with Indian Federation of Yoga, Yoga Alliance USA & AYUSH Ministry. Master asana, anatomy, & teaching methodology.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc',
  },
};

export default function Ytt200HourPage() {
  const faqs = [
    {
      question: 'Can beginners join the 200-Hour YTT course?',
      answer:
        'Yes. The 200-Hour curriculum starts from foundational Hatha principles and systematically builds toward advanced posture alignment and teaching methodology.',
    },
    {
      question: 'Which certifying bodies are affiliated with this course?',
      answer:
        'Our YTT courses are conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India).',
    },
    {
      question: 'Where are the YTT residential ashram batches held?',
      answer:
        'Residential ashram batches take place at our centers in Rishikesh, Haridwar, Dehradun, and Dharamshala, alongside executive weekend batches in Delhi NCR & Chandigarh.',
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Photographic Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>International Certification • 9 Location Hubs</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            200-Hour Foundation Yoga Teacher Training Course (TTC)
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            Launch your career as a certified yoga teacher. Conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India).
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am interested in applying for the 200-Hour YTT Course.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire for Upcoming YTT Intake ➔</span>
            </a>
          </div>
        </div>
      </section>

      {/* Certifying Partner Ties Banner */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-sm text-center">
          <p className="font-body text-xs font-bold text-brand-gold-600 uppercase tracking-widest mb-4">
            YTT Certifications Conducted in Tie-Up / Partnership With Recognized Bodies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 bg-[#F3EEE2]/50 rounded-2xl border border-gray-200">
              <span className="font-heading font-bold text-lg text-brand-green-900">Indian Federation of Yoga</span>
              <span className="block text-xs text-neutral-grey mt-1">National Hatha Standard Partner</span>
            </div>
            <div className="p-4 bg-[#F3EEE2]/50 rounded-2xl border border-gray-200">
              <span className="font-heading font-bold text-lg text-brand-green-900">Yoga Alliance (USA)</span>
              <span className="block text-xs text-neutral-grey mt-1">International Registry Tie-Up</span>
            </div>
            <div className="p-4 bg-[#F3EEE2]/50 rounded-2xl border border-gray-200">
              <span className="font-heading font-bold text-lg text-brand-green-900">AYUSH Ministry (Govt of India)</span>
              <span className="block text-xs text-neutral-grey mt-1">Wellness Framework Tie-Up</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 YTT Program Feature Cards */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Curriculum & Program Options</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Certified Teacher Training Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#16302B] text-white flex flex-col justify-between min-h-[460px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#16302B] via-[#16302B]/85 to-transparent z-10"></div>
            <img src="/images/logo.webp" alt="200-Hour YTT" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-xs font-bold uppercase rounded-full border border-brand-gold-500/40">
                Foundation TTC
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">200-Hour Yoga TTC</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Foundational teacher training covering traditional Hatha & Ashtanga asana alignment, pranayama, and teaching methodology.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• 4 Weeks Intensive / 10 Weeks Weekend</li>
                <li>• Functional Human Anatomy & Physiology</li>
                <li>• Yoga Sutras & Teaching Practicum</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enroll in the 200-Hour YTT Course.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Apply for 200-Hour TTC ➔
              </a>
            </div>
          </div>

          {/* Program 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#1F4A3C] text-white flex flex-col justify-between min-h-[460px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3C] via-[#1F4A3C]/85 to-transparent z-10"></div>
            <img src="/images/logo.webp" alt="300-Hour YTT" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-xs font-bold uppercase rounded-full border border-brand-gold-500/40">
                Advanced TTC
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">300-Hour Advanced TTC</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Advanced level training focusing on therapeutic adjustments, advanced pranayama, mudras, and subtle body energy systems.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• Requires 200-Hour TTC Prerequisite</li>
                <li>• Advanced Asana Adjustment Protocols</li>
                <li>• Clinical Therapeutic Applications</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enroll in the 300-Hour YTT Course.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Apply for 300-Hour TTC ➔
              </a>
            </div>
          </div>

          {/* Program 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#2E5E4E] text-white flex flex-col justify-between min-h-[460px] p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E5E4E] via-[#2E5E4E]/85 to-transparent z-10"></div>
            <img src="/images/logo.webp" alt="500-Hour YTT" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-4">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-xs font-bold uppercase rounded-full border border-brand-gold-500/40">
                Master TTC
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">500-Hour Master TTC</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Comprehensive 500-Hour master certification combining foundational and advanced teaching mastery.
              </p>
              <ul className="space-y-2 text-xs font-body text-brand-green-50/90 pt-2">
                <li>• Complete 500-Hour Master Certification</li>
                <li>• Residential Ashram Stay Available</li>
                <li>• Direct Mentorship under Senior Faculty</li>
              </ul>
            </div>

            <div className="relative z-20 pt-6">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to enroll in the 500-Hour Master YTT Course.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors shadow"
              >
                Apply for 500-Hour TTC ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3 py-1.5 rounded-full text-xs text-brand-gold-600 font-bold uppercase">
              <KayaLeafMotif size={14} color="#C08A3E" />
              <span>YTT Admission Inquiry</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Enquire for Upcoming YTT Batches
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Connect directly with Nivil Chaudhary & lead YTT faculty to confirm batch availability in Rishikesh, Haridwar, Delhi NCR, or Dharamshala.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm defaultService="Yoga Teacher Training (YTT)" title="Apply for Upcoming YTT Intake" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="YTT Course FAQs" />
      </section>
    </div>
  );
}
