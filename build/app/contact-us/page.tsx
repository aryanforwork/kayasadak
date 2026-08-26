import React from 'react';
import type { Metadata } from 'next';
import { LeadGenForm } from '@/components/LeadGenForm';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';

export const metadata: Metadata = {
  title: 'Contact KayaSadhak | Call or WhatsApp +91-8273264561',
  description:
    'Contact KayaSadhak for home yoga tutor booking, YTT course enrollment, or corporate wellness inquiries. Call/WhatsApp +91-8273264561 or email us.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/contact-us',
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 pb-24 overflow-hidden border-b border-brand-gold-500/20">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16302B] via-[#16302B]/90 to-[#1F4A3C]/70 z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Direct WhatsApp & Helpline Support</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Connect with KayaSadhak: Direct WhatsApp & Helpline
          </h1>

          <p className="font-body text-base sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about booking a personal home yoga instructor, enrolling in a YTT program, or scheduling Panchkarma? Reach out directly.
          </p>
        </div>
      </section>

      {/* 2-Column Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#16302B] text-white rounded-3xl p-8 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <KayaLeafMotif size={24} color="#C08A3E" />
                <div>
                  <h3 className="font-heading font-bold text-xl">Instant WhatsApp Chat</h3>
                  <p className="font-body text-xs text-brand-green-50/80">Typical response under 15 minutes (6:00 AM – 9:00 PM IST)</p>
                </div>
              </div>
              <a
                href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I am looking for information on home yoga classes.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white text-center font-body font-semibold text-sm rounded-xl transition-colors shadow"
              >
                Start WhatsApp Chat ➔
              </a>
            </div>

            <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-brand-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-green-900">Direct Phone Helpline</h3>
                  <p className="font-body text-xs text-neutral-grey">Speak directly with Nivil Chaudhary & lead team</p>
                </div>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="block w-full py-3.5 bg-[#F3EEE2] text-brand-green-900 border border-[#1F4A3C]/20 text-center font-body font-bold text-base rounded-xl hover:bg-brand-green-900 hover:text-white transition-all"
              >
                Call {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-8 space-y-4 font-body text-xs text-neutral-charcoal shadow-sm">
              <h4 className="font-heading font-bold text-base text-brand-green-900 uppercase tracking-wider">
                Official Contact Information
              </h4>
              <div className="space-y-2.5">
                <p>
                  <strong>Primary Email:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.emailPrimary}`} className="text-brand-green-900 font-semibold underline">
                    {CONTACT_INFO.emailPrimary}
                  </a>
                </p>
                <p>
                  <strong>Secondary Email:</strong>{' '}
                  <a href={`mailto:${CONTACT_INFO.emailSecondary}`} className="text-brand-green-900 font-semibold underline">
                    {CONTACT_INFO.emailSecondary}
                  </a>
                </p>
                <p>
                  <strong>Operating Hours:</strong> 6:00 AM – 9:00 PM IST (Monday – Sunday)
                </p>
                <p>
                  <strong>Official Social Handles:</strong> <code>@kayasadhak</code> on Instagram, Facebook, YouTube
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6">
            <LeadGenForm title="Send Us an Instant Inquiry" subtitle="Fill in your details for a quick callback and instructor matching." />
          </div>
        </div>
      </section>
    </div>
  );
}
