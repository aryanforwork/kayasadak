import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { StudioLeadGenForm } from '@/components/StudioLeadGenForm';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaDirections,
  FaDumbbell,
  FaSpa,
  FaAward,
  FaCar,
  FaQuestionCircle,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'KayaSadhak Yoga Studio — Sector 45, Noida | Classes & YTT',
  description:
    'Visit KayaSadhak Yoga Studio at BJ Residency, Sadarpur Main Rd, Sector-45, Noida. Group & private yoga classes (Hatha, Vinyasa, Ashtanga) & on-site YTT batches. Call +91 87969 89667.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/studio-noida-sector-45',
  },
};

export default function StudioNoidaPage() {
  const studioNap = {
    name: 'KayaSadhak Yoga Studio',
    streetAddress: 'BJ Residency, 26759, Sadarpur Main Rd, Sadarpur, Sector-45',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201303',
    addressCountry: 'IN',
    telephone: '+91 87969 89667',
    cleanPhone: '+918796989667',
    whatsappPhone: '918796989667',
    latitude: 28.5514,
    longitude: 77.3511,
  };

  const classStyles = [
    {
      name: 'Classical Hatha Yoga',
      level: 'All Levels (Beginner to Advanced)',
      desc: 'Traditional alignment-focused asanas, conscious breath retention (kumbhaka), and spine stabilization.',
      focus: 'Postural alignment, flexibility, inner calm',
    },
    {
      name: 'Dynamic Vinyasa Flow',
      level: 'Intermediate to Active',
      desc: 'Seamless movement synchronized with conscious breath, building cardiovascular heat, stamina, and graceful transitions.',
      focus: 'Cardio endurance, strength, core power',
    },
    {
      name: 'Ashtanga Primary Series',
      level: 'Structured & Disciplined',
      desc: 'Traditional Mysore-style and led sequence focusing on ujjayi breath, bandhas, and fixed progressive postures.',
      focus: 'Deep discipline, structural stamina, heat',
    },
    {
      name: 'Intense Power Yoga',
      level: 'Fitness & Weight Burn',
      desc: 'High-energy, athletic flows designed to activate metabolic burn, core strength, and muscular endurance.',
      focus: 'Calorie burn, core toning, agility',
    },
    {
      name: 'Restorative Yin Yoga',
      level: 'Relaxation & Healing',
      desc: 'Long-held floor postures targeting deep connective fascia, ligaments, and the parasympathetic nervous system.',
      focus: 'Joint mobility, stress release, fascia health',
    },
    {
      name: 'Pranayama & Meditation',
      level: 'Mental Clarity',
      desc: 'Systematic breath control techniques followed by guided sound dhyana and deep somatic relaxation.',
      focus: 'Stress reduction, lung capacity, focus',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to book in advance before visiting the Sector 45 studio?',
      answer:
        'Walk-in inquiries are welcome during operating hours. However, to join an ongoing group class or trial session, advance booking is recommended to reserve your mat and receive orientation from the instructor.',
    },
    {
      question: 'Is there a trial class available at the Sector 45 Noida studio?',
      answer:
        'Yes, introductory trial sessions are available for prospective members. You can reserve your trial slot directly by contacting the studio via phone or WhatsApp at +91 87969 89667.',
    },
    {
      question: 'What should I wear and bring to my first class?',
      answer:
        'Wear breathable, stretchable clothing suitable for uninhibited movement. Bring your own personal water bottle. Sanitized mats and yoga blocks are provided at the studio, but members are also welcome to bring their personal mats.',
    },
    {
      question: 'Is the studio suitable for complete beginners with zero yoga experience?',
      answer:
        'Absolutely. Our instructors offer personalized adjustments and prop modifications for practitioners of every age and fitness level, ensuring you build flexibility and confidence safely.',
    },
    {
      question: 'What is the parking situation at the Sector 45 studio?',
      answer:
        'Street parking and designated vehicle bays are available along Sadarpur Main Road in the immediate vicinity of BJ Residency. Contact the studio front desk for real-time guidance upon arrival.',
    },
    {
      question: 'Can I join an on-site Yoga Teacher Training (YTT) batch here without prior teaching experience?',
      answer:
        'Yes. The 200-Hour YTT batch hosted at our Sector 45 Noida studio is designed from foundational principles upwards, welcoming sincere students wanting to deepen their personal practice or build a career.',
    },
  ];

  const studioSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation', 'ExerciseGym'],
    '@id': 'https://www.kayasadhak.com/studio-noida-sector-45#studio',
    name: 'KayaSadhak Yoga Studio',
    url: 'https://www.kayasadhak.com/studio-noida-sector-45',
    image: 'https://www.kayasadhak.com/images/kayasadak-founder.png',
    telephone: studioNap.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: studioNap.streetAddress,
      addressLocality: studioNap.addressLocality,
      addressRegion: studioNap.addressRegion,
      postalCode: studioNap.postalCode,
      addressCountry: studioNap.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: studioNap.latitude,
      longitude: studioNap.longitude,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Studio Yoga Classes & Teacher Training',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hatha Yoga Classes (Sector 45 Noida Studio)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyasa Flow Classes (Sector 45 Noida Studio)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ashtanga Yoga Classes (Sector 45 Noida Studio)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Power Yoga Classes (Sector 45 Noida Studio)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Yin Yoga & Meditation (Sector 45 Noida Studio)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: '200-Hour Yoga Teacher Training On-Site Batch (Sector 45 Noida)',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kayasadhak.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'KayaSadhak Yoga Studio Noida Sector 45',
        item: 'https://www.kayasadhak.com/studio-noida-sector-45',
      },
    ],
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-[#F3EEE2] text-[#26241F]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden border-b border-brand-gold-500/20">
        <div
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footer_himalayan_hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16302B] via-[#16302B]/95 to-[#1F4A3C]/80 z-10" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-5 sm:space-y-7">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-400 tracking-widest uppercase shadow-sm">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Walk-In Physical Studio • Noida Sector 45</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-white">
            KayaSadhak Yoga Studio — Sector 45, Noida
          </h1>

          <p className="font-body text-sm sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed font-light">
            KayaSadhak Yoga Studio is a dedicated physical walk-in yoga sanctuary located at <strong className="text-white font-semibold">BJ Residency on Sadarpur Main Road in Sector 45, Noida</strong>. Designed for practitioners seeking an immersive, distraction-free environment, our Noida studio offers daily in-person group sessions, private studio instruction, and on-site Yoga Teacher Training (YTT) batches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${studioNap.whatsappPhone}?text=${encodeURIComponent(
                'Hi KayaSadhak! I want to inquire about joining classes at the Sector 45, Noida Studio.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Studio (+91 87969 89667)</span>
            </a>
            <a
              href={`tel:${studioNap.cleanPhone}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-body font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 text-brand-gold-400" />
              <span>Call {studioNap.telephone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Studio Exact NAP & Location Highlight Card */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 -mt-10 sm:-mt-16 relative z-30">
        <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(22,48,43,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info: Exact NAP */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
                <FaMapMarkerAlt className="text-brand-gold-500" />
                <span>OFFICIAL STUDIO LOCATION & NAP</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#16302B]">
                Visit Us in Person at Sector 45, Noida
              </h2>

              <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E5DEC9] space-y-3 font-body text-sm text-[#26241F]">
                <div>
                  <div className="text-[11px] font-bold text-neutral-grey uppercase tracking-wider">STUDIO NAME</div>
                  <div className="font-heading font-bold text-lg text-brand-green-900">{studioNap.name}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-neutral-grey uppercase tracking-wider">EXACT PHYSICAL ADDRESS</div>
                  <div className="font-medium text-neutral-charcoal leading-relaxed">{studioNap.streetAddress}, {studioNap.addressLocality}, {studioNap.addressRegion} {studioNap.postalCode}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-neutral-grey uppercase tracking-wider">OFFICIAL STUDIO TELEPHONE & WHATSAPP</div>
                  <div className="font-heading font-bold text-base text-brand-gold-600">
                    <a href={`tel:${studioNap.cleanPhone}`} className="hover:underline">{studioNap.telephone}</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${studioNap.name}, ${studioNap.streetAddress}, ${studioNap.addressLocality}, ${studioNap.addressRegion} ${studioNap.postalCode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <FaDirections className="text-brand-gold-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
                <a
                  href={`tel:${studioNap.cleanPhone}`}
                  className="px-6 py-3 bg-[#FAF6F0] border border-[#E5DEC9] text-brand-green-900 font-body font-bold text-xs rounded-xl hover:bg-brand-green-900 hover:text-white transition-all flex items-center gap-2"
                >
                  <FaPhoneAlt className="text-brand-gold-500" />
                  <span>Call Front Desk</span>
                </a>
              </div>
            </div>

            {/* Right Info: Studio Key Features */}
            <div className="lg:col-span-5 bg-[#FAF6F0] p-6 sm:p-8 rounded-2xl border border-[#E5DEC9] space-y-4">
              <h3 className="font-heading font-bold text-lg text-[#16302B] border-b border-[#E5DEC9] pb-3">
                Studio Highlights
              </h3>
              <ul className="space-y-3 text-xs font-body text-neutral-charcoal">
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-brand-gold-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Quiet Hall:</strong> Natural light, clean wooden flooring, and serene ambiance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-brand-gold-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Props & Mats Provided:</strong> Sanitized yoga mats, blocks, belts, and bolsters available on-site.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-brand-gold-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Walk-Ins & Trial Bookings:</strong> Welcoming beginners and seasoned sadhaks across Noida.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-brand-gold-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span><strong>On-Site YTT Batches:</strong> 200-Hour foundation courses hosted directly in this studio space.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Real Embedded Google Map Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
            <FaMapMarkerAlt />
            <span>INTERACTIVE MAP LOCATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Find Us in Sadarpur, Sector 45, Noida
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Easily accessible from Sector 44, 46, 43, 93, 104, Noida-Greater Noida Expressway, and Botanical Garden Metro.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-[32px] border border-[#E5DEC9] shadow-xl bg-white">
          <iframe
            title="KayaSadhak Yoga Studio Sector 45 Noida Google Map Location"
            src="https://maps.google.com/maps?q=BJ+Residency,+26759,+Sadarpur+Main+Rd,+Sector-45,+Noida,+Uttar+Pradesh+201303&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[380px] sm:h-[480px]"
          />
        </div>
      </section>

      {/* 4. Class Styles Offered */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
            <FaSpa />
            <span>DAILY STUDIO SESSIONS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Class Styles Offered at Sector 45 Studio
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Contact us for the current class schedule and batch timings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classStyles.map((style, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1F4A3C]/15 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 bg-brand-gold-500/15 text-brand-gold-600 font-body text-[11px] font-bold uppercase tracking-wider rounded-full inline-block">
                  {style.level}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-green-900">
                  {style.name}
                </h3>
                <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
                  {style.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs font-body text-neutral-grey">
                <strong className="text-brand-green-900">Key Focus:</strong> {style.focus}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#EFE8DA] border border-[#E0D5BD] text-center max-w-2xl mx-auto text-xs font-body text-neutral-charcoal">
          <strong>Batch Schedules:</strong> Morning and evening weekday/weekend batches run throughout the week. Please contact the studio directly via phone or WhatsApp at <strong>+91 87969 89667</strong> for the current active schedule.
        </div>
      </section>

      {/* 5. On-Site Yoga Teacher Training (YTT) Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#16302B] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-brand-gold-400 font-body text-xs font-bold uppercase tracking-wider">
                <FaAward />
                <span>ON-SITE TEACHER TRAINING BATCHES</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold">
                200-Hour, 300-Hour & 500-Hour YTT at Sector 45 Studio
              </h2>
              <p className="font-body text-xs sm:text-sm text-brand-green-50/90 leading-relaxed max-w-2xl">
                In addition to daily walk-in sessions, our Sector 45 Noida studio serves as an official physical training center for accredited Yoga Teacher Training (YTT) programs. Learn traditional Hatha alignment, anatomical screening, and teaching methodology in-person.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/yoga-teacher-training/200-hour-ttc"
                  className="px-6 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-bold text-xs rounded-xl transition-all shadow"
                >
                  View 200-Hour YTT Curriculum ➔
                </Link>
                <a
                  href={`https://wa.me/${studioNap.whatsappPhone}?text=${encodeURIComponent(
                    'Hi KayaSadhak! I am interested in applying for the on-site YTT batch at the Sector 45, Noida Studio.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-body font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-brand-gold-400" />
                  <span>Inquire About Noida YTT Intake</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-6 rounded-2xl border border-white/15 space-y-3 text-xs font-body text-brand-green-50">
              <div className="font-heading font-bold text-sm text-white border-b border-white/20 pb-2">
                YTT Formats Hosted Here
              </div>
              <div>✓ Executive Weekend Batches (Working Professionals)</div>
              <div>✓ 4-Week Intensive Morning Immersions</div>
              <div>✓ Practical Asana Clinics & Teacher Audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet the Founder Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white border border-[#1F4A3C]/15 rounded-[32px] p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[260px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-brand-gold-500/30 bg-[#16302B]">
              <img
                src="/images/kayasadak-founder.png"
                alt="Nivil Chaudhary - Founder & Lead Sadhak"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#16302B] via-[#16302B]/80 to-transparent p-3 text-center text-white">
                <div className="font-heading font-bold text-base text-white">Nivil Chaudhary</div>
                <div className="font-body text-[11px] text-brand-gold-400 font-semibold">Founder & Lead Sadhak</div>
                <div className="font-body text-[10px] text-gray-300">12+ Years Experience</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 font-body text-sm text-neutral-charcoal leading-relaxed">
            <div className="flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
              <KayaLeafMotif size={16} color="#C08A3E" />
              <span>STUDIO DIRECTIVE</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-green-900">
              Guided by Founder Nivil Chaudhary (12+ Years Exp)
            </h2>
            <p>
              "The Sector 45 Noida Studio was established to provide an authentic sanctuary for sadhana where practitioners are never treated like numbers in a generic gym. Every batch is capped in size, every posture is supervised with anatomical care, and every student receives the individual attention required to progress safely."
            </p>
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-brand-green-900 font-bold hover:underline text-xs sm:text-sm"
              >
                Read Founder Story & Institutional Credentials ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. What to Expect & First-Visit Info */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading text-3xl font-bold text-brand-green-900">
            What to Expect on Your First Visit
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Practical details to make your visit to our Sector 45 studio smooth and welcoming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#1F4A3C]/15 rounded-2xl shadow-sm space-y-2">
            <div className="text-brand-gold-600 font-heading font-bold text-xl">01. Attire</div>
            <h4 className="font-heading font-bold text-base text-brand-green-900">Comfortable Wear</h4>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Wear flexible, stretchable clothing. Changing space is available on-site for convenience.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#1F4A3C]/15 rounded-2xl shadow-sm space-y-2">
            <div className="text-brand-gold-600 font-heading font-bold text-xl">02. Equipment</div>
            <h4 className="font-heading font-bold text-base text-brand-green-900">Mats & Props</h4>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Sanitized mats, blocks, belts, and bolsters are provided. Personal mats are also welcome.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#1F4A3C]/15 rounded-2xl shadow-sm space-y-2">
            <div className="text-brand-gold-600 font-heading font-bold text-xl">03. Arrival</div>
            <h4 className="font-heading font-bold text-base text-brand-green-900">10-15 Min Early</h4>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Arrive 10 to 15 minutes before your scheduled class for check-in and teacher consultation.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#1F4A3C]/15 rounded-2xl shadow-sm space-y-2">
            <div className="text-brand-gold-600 font-heading font-bold text-xl">04. Parking</div>
            <h4 className="font-heading font-bold text-base text-brand-green-900">Street & Bays</h4>
            <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
              Vehicle parking available along Sadarpur Main Road in the immediate vicinity of BJ Residency.
            </p>
          </div>
        </div>
      </section>

      {/* 7b. Find Your Ideal KayaSadhak Match: Studio Instructor Preference Cards */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3.5 py-1 rounded-full text-xs text-brand-gold-600 font-bold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>INSTRUCTOR SELECTION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Find Your Ideal KayaSadhak Match at Sector 45 Studio
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Whether you prefer a female or male instructor for your studio classes or 1-on-1 private sessions, select your preference below to pre-fill your inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Female Instructor */}
          <div className="bg-white border-2 border-[#1F4A3C]/15 hover:border-brand-gold-500 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all space-y-5 text-left flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-brand-gold-500/15 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
                  <FaSpa className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-brand-green-900 uppercase tracking-widest bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#E5DEC9]">
                  Studio &amp; 1-on-1
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-brand-green-900 group-hover:text-brand-gold-600 transition-colors">
                  Female Instructor
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-charcoal/85 leading-relaxed mt-2">
                  Prefer a female instructor for your studio classes? Let us know when you book. We offer women-focused batches, prenatal guidance, and personalized private sessions led by certified female faculty.
                </p>
              </div>
              <div className="space-y-1.5 text-xs text-[#5A574F]">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-brand-gold-500" />
                  <span>Certified in Hatha, Vinyasa &amp; Prenatal care</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-brand-gold-500" />
                  <span>Available for morning and evening studio slots</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${studioNap.whatsappPhone}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a class with a Female Instructor at your Sector 45 Noida Studio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-green-900 hover:bg-brand-green-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-brand-gold-400" />
                <span>Select Female Instructor ➔</span>
              </a>
            </div>
          </div>

          {/* Card 2: Male Instructor */}
          <div className="bg-white border-2 border-[#1F4A3C]/15 hover:border-brand-gold-500 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all space-y-5 text-left flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-brand-green-900/10 text-brand-green-900 flex items-center justify-center font-bold text-sm">
                  <FaSpa className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-brand-green-900 uppercase tracking-widest bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#E5DEC9]">
                  Studio &amp; 1-on-1
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-brand-green-900 group-hover:text-brand-gold-600 transition-colors">
                  Male Instructor
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-charcoal/85 leading-relaxed mt-2">
                  Prefer a male instructor for high-intensity power flows, advanced arm balances, or strength-focused asana practice? Our senior male sadhaks guide rigorous alignment and stamina-building batches.
                </p>
              </div>
              <div className="space-y-1.5 text-xs text-[#5A574F]">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-brand-gold-500" />
                  <span>Masters &amp; Advanced TTC certified instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-brand-gold-500" />
                  <span>Available for daily batches &amp; YTT mentoring</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${studioNap.whatsappPhone}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I want to book a class with a Male Instructor at your Sector 45 Noida Studio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-green-900 hover:bg-brand-green-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-brand-gold-400" />
                <span>Select Male Instructor ➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dedicated Studio Lead Generation Form */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-14 rounded-[36px] border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3.5 py-1 rounded-full text-xs text-brand-gold-600 font-bold uppercase">
              <KayaLeafMotif size={14} color="#C08A3E" />
              <span>BOOK STUDIO TRIAL SESSION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Ready to Practice at Our Sector 45 Studio?
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Fill out your details to reserve an introductory trial class or inquire about batch schedules. Submitting will open WhatsApp directly with our studio coordinator at <strong className="text-brand-green-900">+91 87969 89667</strong>.
            </p>
            <div className="space-y-2 text-xs font-body text-neutral-grey">
              <div>📍 <strong>Address:</strong> {studioNap.streetAddress}, {studioNap.addressLocality}</div>
              <div>📞 <strong>Studio Phone:</strong> {studioNap.telephone}</div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5DEC9]">
            <StudioLeadGenForm />
          </div>
        </div>
      </section>

      {/* 9. FAQ Accordion */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white border border-[#1F4A3C]/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 mb-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
              <FaQuestionCircle />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-green-900">
              Sector 45 Noida Studio FAQs
            </h3>
          </div>
          <div className="space-y-4 font-body">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group border border-[#1F4A3C]/10 rounded-2xl bg-[#F3EEE2]/30 p-5 transition-all [&[open]]:shadow-md [&[open]]:bg-white"
              >
                <summary className="font-heading font-semibold text-base md:text-lg text-brand-green-900 cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                  <span>{item.question}</span>
                  <span className="text-brand-gold-500 font-bold text-xl group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <div className="mt-3 text-xs md:text-sm text-neutral-charcoal leading-relaxed pt-3 border-t border-gray-200/60 font-body">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call & Location Band */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#16302B] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-5">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold-500/20 border border-brand-gold-500 flex items-center justify-center mx-auto mb-2">
              <KayaLeafMotif size={24} color="#C08A3E" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold">
              Step Into the Sanctuary at Sector 45 Noida
            </h2>
            <p className="font-body text-xs sm:text-base text-brand-green-50/90 max-w-2xl mx-auto">
              Call or WhatsApp our Sector 45 studio desk directly at <strong>+91 87969 89667</strong> to schedule your first visit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/${studioNap.whatsappPhone}?text=${encodeURIComponent(
                  'Hi KayaSadhak! I would like to schedule a visit to the Sector 45, Noida Studio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Message Studio on WhatsApp</span>
              </a>
              <a
                href={`tel:${studioNap.cleanPhone}`}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all border border-white/20"
              >
                Call {studioNap.telephone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
