import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadGenForm } from '@/components/LeadGenForm';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { CONTACT_INFO } from '@/config/pricing';
import {
  FaQuoteLeft,
  FaShieldAlt,
  FaUserGraduate,
  FaHeartbeat,
  FaAward,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWhatsapp,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About KayaSadhak | Founder Nivil Chaudhary Story & Institutional Lineage',
  description:
    'Discover the journey of founder Nivil Chaudhary (12+ yrs exp), KayaSadhak’s verified 3-tier teacher ecosystem, and institutional tie-ups with Indian Federation of Yoga, Yoga Alliance USA & AYUSH Ministry.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/about-us',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-[#F3EEE2] text-[#26241F]">
      {/* 1. Full-Bleed Editorial Hero Banner */}
      <section className="relative bg-[#16302B] text-white pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden border-b border-brand-gold-500/20">
        {/* Subtle background overlay */}
        <div
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footer_himalayan_hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16302B] via-[#16302B]/95 to-[#1F4A3C]/80 z-10" />

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-5 sm:space-y-7">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/40 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-brand-gold-400 tracking-widest uppercase shadow-sm">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>The Journey of KayaSadhak</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-white">
            Rooted in Authentic Yogic Tradition, Refined with Modern Clinical Precision
          </h1>

          <p className="font-body text-sm sm:text-lg text-brand-green-50/90 max-w-3xl mx-auto leading-relaxed font-light">
            Founded by <strong className="text-white font-semibold">Nivil Chaudhary</strong> (12+ years experience), KayaSadhak bridges classical Hatha sadhana with rigorous anatomical science — delivering verified personal home yoga, authentic Panchkarma, and internationally accredited teacher training.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-body text-brand-gold-300">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-brand-gold-400" /> 12+ Years Founder Experience
            </span>
            <span className="text-brand-gold-500/50">•</span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-brand-gold-400" /> 3-Tier Verified Faculty
            </span>
            <span className="text-brand-gold-500/50">•</span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-brand-gold-400" /> 20+ Locality Clusters in NCR & Tricity
            </span>
          </div>
        </div>
      </section>

      {/* 2. Masterpiece Founder Spotlight & Story Card */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 -mt-10 sm:-mt-16 relative z-30">
        <div className="bg-[#FFFDF9] border border-[#E5DEC9] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(22,48,43,0.08)] overflow-hidden relative">
          
          {/* Subtle Corner Arch Ornament */}
          <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-brand-gold-500/20 rounded-tl-[44px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-brand-gold-500/20 rounded-br-[44px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Arched Photographic Portrait with Floating Founder Card */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                
                {/* Arch Background Container */}
                <div className="w-full aspect-[4/5] rounded-t-[180px] sm:rounded-t-[210px] rounded-b-3xl bg-[#EDE5D5] border-2 border-[#D6CBAE] overflow-hidden relative shadow-2xl flex items-end justify-center group">
                  
                  {/* Subtle Background Sacred Geometry Lines */}
                  <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none">
                    <svg className="w-80 h-80 text-brand-green-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <circle cx="50" cy="50" r="45" />
                      <circle cx="50" cy="50" r="35" />
                      <circle cx="50" cy="50" r="25" />
                      <path d="M50 5v90M5 50h90" />
                    </svg>
                  </div>

                  {/* Founder Real High-Resolution Photo */}
                  <img
                    src="/images/kayasadak-founder.png"
                    alt="Nivil Chaudhary - Founder & Lead Sadhak of KayaSadhak"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Dark Green & Gold Badge */}
                <div className="absolute -bottom-4 sm:-bottom-5 left-2 sm:-left-3 bg-[#16302B] text-white p-4 sm:p-5 rounded-2xl border border-brand-gold-500/50 shadow-2xl z-20 max-w-[270px] text-left">
                  <div className="font-serif italic text-2xl text-brand-gold-400 font-normal leading-none mb-1">
                    Nivil
                  </div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-white tracking-widest uppercase">
                    NIVIL CHAUDHARY
                  </div>
                  <div className="font-body text-xs text-brand-gold-300 font-medium mt-0.5">
                    Founder & Lead Sadhak
                  </div>
                  <div className="font-body text-[11px] text-gray-300/90 mt-1.5 border-t border-white/10 pt-1.5 flex items-center gap-1.5">
                    <FaAward className="text-brand-gold-400 w-3 h-3 flex-shrink-0" />
                    <span>12+ Years Transforming Lives</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Founder Narrative, Philosophy, and Credentials */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-left">
              
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
                <KayaLeafMotif size={16} color="#C08A3E" />
                <span>THE VISIONARY BEHIND KAYASADHAK</span>
              </div>

              {/* Title */}
              <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-4xl text-[#16302B] leading-[1.2] tracking-tight">
                Restoring Authentic Therapeutic Rigor & Transparency to Modern Yoga
              </h2>

              {/* Accent Line */}
              <div className="w-14 h-[2px] bg-brand-gold-500/70 rounded-full" />

              {/* Personal Quote Block */}
              <div className="flex items-start gap-3.5 bg-[#FAF6F0] p-4 sm:p-5 rounded-2xl border border-[#E5DEC9]">
                <FaQuoteLeft className="w-7 h-7 text-brand-gold-500/80 flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm sm:text-base text-[#3A3832] leading-relaxed italic">
                  "Yoga is not mere acrobatic flexibility or superficial stretching; it is a clinical science of inner equilibrium and bodily restoration. When we bring authentic sadhana into someone’s home, we transform not just an individual’s posture, but their entire vitality."
                </p>
              </div>

              {/* Narrative Bio */}
              <div className="space-y-3 font-body text-xs sm:text-sm text-neutral-charcoal/90 leading-relaxed">
                <p>
                  Having dedicated more than a decade to clinical yoga therapy, Hatha alignment, and teacher mentoring, <strong className="text-brand-green-900 font-semibold">Nivil Chaudhary</strong> founded KayaSadhak after observing a troubling trend in urban wellness: unverified local tutors offering generic routines without anatomical screening or safety protocols.
                </p>
                <p>
                  Under Nivil’s direct stewardship, KayaSadhak pioneered Delhi NCR’s first <strong className="text-brand-green-900 font-semibold">3-Tier Instructor Qualification Framework</strong> (Silver, Gold, and Platinum), ensuring that every practitioner is matched with an instructor whose degrees, physical certifications, and therapeutic capabilities have been personally audited.
                </p>
              </div>

              {/* 3 Core Philosophical Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E5DEC9] space-y-1">
                  <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-bold text-xs">
                    <FaShieldAlt className="w-3.5 h-3.5" />
                    <span>Verified Creds</span>
                  </div>
                  <p className="font-body text-[11px] text-neutral-grey leading-tight">
                    Strict background audits & degrees across Platinum, Gold & Silver tiers.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E5DEC9] space-y-1">
                  <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-bold text-xs">
                    <FaHeartbeat className="w-3.5 h-3.5" />
                    <span>Therapeutic Care</span>
                  </div>
                  <p className="font-body text-[11px] text-neutral-grey leading-tight">
                    Custom postures tailored for slip disc, sciatica, PCOD & hypertension.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E5DEC9] space-y-1">
                  <div className="flex items-center gap-2 text-brand-gold-600 font-heading font-bold text-xs">
                    <FaUserGraduate className="w-3.5 h-3.5" />
                    <span>Accredited Lineage</span>
                  </div>
                  <p className="font-body text-[11px] text-neutral-grey leading-tight">
                    Curricula aligned with Indian Federation of Yoga & Yoga Alliance USA.
                  </p>
                </div>
              </div>

              {/* Stats Strip Container */}
              <div className="bg-[#EFE8DA]/80 border border-[#E0D5BD] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
                    <FaClock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                      EXPERIENCE
                    </div>
                    <div className="font-heading font-bold text-lg text-[#16302B] leading-none">
                      12+ <span className="font-body text-xs font-normal text-neutral-grey">Years</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
                    <FaUsers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                      CLIENTS GUIDED
                    </div>
                    <div className="font-heading font-bold text-lg text-[#16302B] leading-none">
                      5,000+ <span className="font-body text-xs font-normal text-neutral-grey">Sadhaks</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 border border-brand-gold-500/30 text-brand-gold-600 flex items-center justify-center font-bold text-sm">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-neutral-grey uppercase tracking-wider font-semibold">
                      LOCALITY HUBS
                    </div>
                    <div className="font-heading font-bold text-lg text-[#16302B] leading-none">
                      20+ <span className="font-body text-xs font-normal text-neutral-grey">Clusters</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hi Nivil Chaudhary! I would like to consult with you regarding personal home yoga sessions.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#16302B] hover:bg-brand-green-700 text-white font-body font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-brand-gold-400" />
                  <span>Consult with Nivil on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Certifying Body Institutional Partnerships */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-bold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>INSTITUTIONAL CREDENTIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900">
            Conducted in Tie-Up & Partnership with Recognized Bodies
          </h2>
          <p className="font-body text-sm text-neutral-grey">
            Every teacher training course, syllabus milestone, and certification follows nationally and globally audited standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/15 text-brand-gold-600 font-body text-[11px] font-bold uppercase tracking-wider rounded-full inline-block">
                National Standard
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">Indian Federation of Yoga</h3>
              <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
                Affiliated partner for standardized Hatha yoga curriculum benchmarks, traditional practical examinations, and teacher accreditation.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-100 text-[11px] font-body text-neutral-grey">
              ✓ Classical Asana & Pranayama Frameworks
            </div>
          </div>

          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/15 text-brand-gold-600 font-body text-[11px] font-bold uppercase tracking-wider rounded-full inline-block">
                Global Recognition
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">Yoga Alliance (USA)</h3>
              <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
                Providing internationally recognized credentials for graduates of our 200-Hour, 300-Hour, and 500-Hour Yoga Teacher Training courses.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-100 text-[11px] font-body text-neutral-grey">
              ✓ Worldwide Teaching Eligibility (RYT-200 / RYT-500)
            </div>
          </div>

          <div className="bg-white p-8 border border-[#1F4A3C]/15 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-brand-gold-500/15 text-brand-gold-600 font-body text-[11px] font-bold uppercase tracking-wider rounded-full inline-block">
                Government Alignment
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">AYUSH Ministry (Govt of India)</h3>
              <p className="font-body text-xs text-neutral-charcoal/80 leading-relaxed">
                Strict adherence to the Ministry of AYUSH wellness and yoga certification frameworks for holistic preventive healthcare.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-100 text-[11px] font-body text-neutral-grey">
              ✓ Certified Indian Traditional Standards
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guiding Principles & Commitments */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#16302B] text-white rounded-[36px] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-brand-gold-400 font-body text-xs font-bold uppercase tracking-widest">
                HOW WE OPERATE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                The Four Pillars of KayaSadhak Trust
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2.5">
                <div className="text-brand-gold-400 font-heading font-bold text-2xl">01</div>
                <h4 className="font-heading font-bold text-lg text-white">Transparent 3×3 Pricing</h4>
                <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                  Published Silver (₹500), Gold (₹750), and Platinum (₹1,000) session pricing with zero hidden travel charges.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2.5">
                <div className="text-brand-gold-400 font-heading font-bold text-2xl">02</div>
                <h4 className="font-heading font-bold text-lg text-white">Credential Verification</h4>
                <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                  Every instructor undergoes mandatory document auditing, background checks, and live practical demonstration.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2.5">
                <div className="text-brand-gold-400 font-heading font-bold text-2xl">03</div>
                <h4 className="font-heading font-bold text-lg text-white">Punctuality & Safety</h4>
                <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                  Guaranteed arrival within your chosen morning or evening time slot, respecting your residential privacy.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2.5">
                <div className="text-brand-gold-400 font-heading font-bold text-2xl">04</div>
                <h4 className="font-heading font-bold text-lg text-white">Family Inclusion</h4>
                <p className="font-body text-xs text-brand-green-50/80 leading-relaxed">
                  Up to two family members can practice together in every 1-on-1 home session at no extra charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Connect & Lead Form Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-14 rounded-[36px] border border-[#1F4A3C]/15 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3.5 py-1 rounded-full text-xs text-brand-gold-600 font-bold uppercase">
              <KayaLeafMotif size={14} color="#C08A3E" />
              <span>DIRECT FOUNDER DIALOGUE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-green-900 leading-tight">
              Have Questions for Founder Nivil Chaudhary?
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-charcoal/90 leading-relaxed">
              Whether you need guidance on choosing between Silver, Gold, and Platinum tutors, designing a specialized back-care routine, or applying for upcoming 200-Hour YTT residential batches — our leadership team is here to assist you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#F3EEE2] text-brand-green-900 border border-[#1F4A3C]/20 font-body font-bold text-xs rounded-xl hover:bg-brand-green-900 hover:text-white transition-all text-center"
              >
                Call {CONTACT_INFO.phone}
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white font-body font-bold text-xs rounded-xl transition-all text-center shadow-sm"
              >
                View Transparent Pricing Matrix
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <LeadGenForm title="Connect with Founder & Team" subtitle="Direct routing to founder on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}
