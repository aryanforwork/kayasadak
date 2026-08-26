import React from 'react';
import type { Metadata } from 'next';
import { LeadGenForm } from '@/components/LeadGenForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'Authentic Home Panchkarma Therapy Delhi NCR | KayaSadhak',
  description:
    'Experience authentic Ayurvedic Panchkarma detox and Abhyanga massage at home in Delhi NCR. Delivered by trained Ayurvedic therapists. Enquire via WhatsApp.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/services/panchkarma',
  },
};

export default function PanchkarmaServicePage() {
  const faqs = [
    {
      question: 'Is home Panchkarma messy or difficult to manage?',
      answer:
        'No. Our team supplies complete protective floor coverings, portable massage tables, and disposal materials to leave your home completely clean.',
    },
    {
      question: 'Who supervises the Panchkarma treatments?',
      answer:
        'All home Panchkarma protocols are designed and supervised by trained Ayurvedic Vaidyas and executed by certified therapists.',
    },
    {
      question: 'What therapies are included in a full detox package?',
      answer:
        'Packages combine Abhyanga (herbal oil massage), Swedana (herbal steam), Shirodhara (warm forehead pour), and Kati/Janu Basti (localized oil pooling).',
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Photographic Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Ayurvedic Home Care • Vaidya Supervised</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Authentic Home Panchkarma Detox Therapies
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            Beyond asanas — embrace clinical Ayurvedic detoxification: Abhyanga, Swedana, Shirodhara & Basti treatments delivered directly to your home with full portable equipment and medicated herbal oils.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hi KayaSadhak! I am interested in Home Panchkarma care.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Book Home Panchkarma Care ➔</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Feature Image Cards */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Ayurvedic Therapies at Home</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Our Core Panchkarma Treatments
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Delivered directly to your residence with full portable steam units and medicated herbal oils.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Therapy 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#16302B] text-white flex flex-col justify-between min-h-[420px] p-6 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#16302B] via-[#16302B]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Abhyanga" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-[10px] font-bold uppercase rounded-full border border-brand-gold-500/40">
                Therapy 01
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">Abhyanga Massage</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Full-body therapeutic herbal oil massage for joint lubrication, lymphatic drainage, and circulation.
              </p>
            </div>

            <div className="relative z-20 pt-4">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book Abhyanga Massage at home.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors"
              >
                Enquire Abhyanga ➔
              </a>
            </div>
          </div>

          {/* Therapy 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#1F4A3C] text-white flex flex-col justify-between min-h-[420px] p-6 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A3C] via-[#1F4A3C]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Swedana" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-[10px] font-bold uppercase rounded-full border border-brand-gold-500/40">
                Therapy 02
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">Swedana Herbal Steam</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Herbal steam treatment following Abhyanga for deep cellular toxin release and skin rejuvenation.
              </p>
            </div>

            <div className="relative z-20 pt-4">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book Swedana Herbal Steam at home.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors"
              >
                Enquire Swedana ➔
              </a>
            </div>
          </div>

          {/* Therapy 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#2E5E4E] text-white flex flex-col justify-between min-h-[420px] p-6 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E5E4E] via-[#2E5E4E]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Shirodhara" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-[10px] font-bold uppercase rounded-full border border-brand-gold-500/40">
                Therapy 03
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">Shirodhara Pour</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Continuous forehead pour of warm medicated herbal oil for deep nervous system calming & insomnia relief.
              </p>
            </div>

            <div className="relative z-20 pt-4">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book Shirodhara Therapy at home.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors"
              >
                Enquire Shirodhara ➔
              </a>
            </div>
          </div>

          {/* Therapy 4 */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1F4A3C]/15 bg-[#16302B] text-white flex flex-col justify-between min-h-[420px] p-6 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#16302B] via-[#16302B]/85 to-transparent z-10"></div>
            <img src="/images/logo.png" alt="Kati Basti" className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 group-hover:scale-105 transition-transform z-0" />
            
            <div className="relative z-20 space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/20 text-brand-gold-500 font-body text-[10px] font-bold uppercase rounded-full border border-brand-gold-500/40">
                Therapy 04
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">Kati & Janu Basti</h3>
              <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                Specialized herbal oil pooling for localized lumbar spine, lower back, or knee joint rehabilitation.
              </p>
            </div>

            <div className="relative z-20 pt-4">
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book Kati/Janu Basti at home.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-brand-gold-500 text-white text-center font-body text-xs font-semibold rounded-xl hover:bg-brand-gold-600 transition-colors"
              >
                Enquire Kati Basti ➔
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
              <span>Ayurvedic Home Consultation</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Request Your Home Panchkarma Assessment
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Connect directly with our Vaidya team to customize your Ayurvedic home detoxification protocol in Delhi NCR or Chandigarh Tricity.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm defaultService="Home Panchkarma & Ayurveda" title="Enquire for Home Panchkarma" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={faqs} title="Panchkarma FAQs" />
      </section>
    </div>
  );
}
