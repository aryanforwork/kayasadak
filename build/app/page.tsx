import React from 'react';
import Link from 'next/link';
import { HeroSlider } from '@/components/HeroSlider';
import { ServicesCarousel } from '@/components/ServicesCarousel';
import { FeatureBanner } from '@/components/FeatureBanner';
import { OmniSanctuary } from '@/components/OmniSanctuary';
import { FounderNote } from '@/components/FounderNote';
import { TrustStatsSection } from '@/components/TrustStatsSection';
import { LeadGenForm } from '@/components/LeadGenForm';
import { PricingTable } from '@/components/PricingTable';
import { ConditionChips } from '@/components/ConditionChips';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';
import { FaArrowRight, FaAward, FaMapMarkedAlt, FaUniversity, FaUserCheck, FaClock } from 'react-icons/fa';

export default function HomePage() {
  const homeFaqs = [
    {
      question: 'What makes KayaSadhak different from local yoga teachers?',
      answer:
        'KayaSadhak enforces strict credential verification across three transparent tiers (Silver, Gold, Platinum), transparent monthly pricing with zero hidden charges, and structured progress tracking guided by founder Nivil Chaudhary’s 12+ years of therapeutic expertise.',
    },
    {
      question: 'How quickly can a personal home yoga teacher start in my area?',
      answer:
        'Instructors are available across Delhi, Noida, Gurugram, Ghaziabad, Faridabad, and Chandigarh Tricity within 24 to 48 hours of booking your initial assessment session.',
    },
    {
      question: 'Are your YTT courses recognized internationally?',
      answer:
        'Yes. Our Yoga Teacher Training courses are conducted in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance (USA), and AYUSH Ministry (Government of India).',
    },
    {
      question: 'Do I need equipment for home Panchkarma treatments?',
      answer:
        'No. Our authentic Panchkarma team brings all required portable equipment, medicated herbal oils, and protective coverings directly to your residence.',
    },
    {
      question: 'Can two family members join the home session together?',
      answer:
        'Yes. Up to two family members can practice together during a personal home yoga session at no additional charge.',
    },
  ];

  return (
    <div className="space-y-20 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* 1. Full-Bleed Interactive Hero Slider Carousel */}
      <HeroSlider />

      {/* 2. Premium Luxury Trust & Stats Section (Screenshot 1 1:1) */}
      <TrustStatsSection />

      {/* 3. Interactive Services Carousel (Screenshot 1 - Updated with distinct Abhyanga & Shirodhara images) */}
      <ServicesCarousel />

      {/* 4. Three Pillars of Holistic Practice (Screenshot 2 - Enhanced with rich detail & background images) */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/15 border border-brand-gold-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-gold-600">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Our Core Disciplines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green-900 leading-tight">
            Three Pillars of Holistic Practice
          </h2>
          <p className="font-body text-base text-neutral-grey">
            Personalized home instruction, professional teacher certifications, and clinical Ayurvedic detox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Home Yoga */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-[#1F4A3C]/20 flex flex-col justify-between min-h-[580px]">
            {/* Background Image & Gradient Overlay */}
            <img
              src="/images/pillar_home_yoga.webp"
              alt="Personal Home Yoga"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 group-hover:from-black/95" />

            {/* Top Badges */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="bg-brand-gold-500 text-white font-display text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Pillar 01
              </span>
              <span className="bg-black/50 backdrop-blur-md border border-white/20 text-brand-gold-300 font-display text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                1-on-1 at Home
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-5 text-left text-white mt-auto">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-brand-gold-400 transition-colors">
                  1. Personal Home Yoga
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                  Receive 1-on-1 private instruction in the comfort of your living room across Delhi NCR and Chandigarh Tricity. Filtered by verified instructor tiers:
                </p>
              </div>

              {/* Tiers List */}
              <div className="space-y-2 text-xs font-body pt-1 border-t border-white/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] shadow-sm flex-shrink-0" />
                  <span className="text-gray-200">
                    <strong className="text-white">Platinum Tier (₹1,000/sess):</strong> Masters + 10+ yrs exp
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400 shadow-sm flex-shrink-0" />
                  <span className="text-gray-200">
                    <strong className="text-brand-gold-300">Gold Tier (₹750/sess):</strong> Yoga Graduation + 7+ yrs exp
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-400 shadow-sm flex-shrink-0" />
                  <span className="text-gray-200">
                    <strong className="text-gray-300">Silver Tier (₹500/sess):</strong> Yoga Diploma + 5+ yrs exp
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/services/yoga-at-home"
                  className="w-full py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white text-center font-body text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Home Yoga Services</span>
                  <FaArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 2: YTT Courses */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-[#1F4A3C]/20 flex flex-col justify-between min-h-[580px]">
            {/* Background Image & Gradient Overlay */}
            <img
              src="/images/pillar_ytt_training.webp"
              alt="Yoga Teacher Training"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 group-hover:from-black/95" />

            {/* Top Badges */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="bg-brand-gold-500 text-white font-display text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Pillar 02
              </span>
              <span className="bg-black/50 backdrop-blur-md border border-white/20 text-brand-gold-300 font-display text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                9 Centers & Online
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-5 text-left text-white mt-auto">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-brand-gold-400 transition-colors">
                  2. Yoga Teacher Training (YTT)
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                  Launch or advance your teaching career with internationally accredited teacher training courses across 9 centers including Delhi NCR, Rishikesh, Haridwar, Dehradun, and Dharamshala.
                </p>
              </div>

              {/* Course Highlights */}
              <div className="space-y-2 text-xs font-body pt-1 border-t border-white/15">
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">200-Hour Foundation TTC (Rishikesh & Delhi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">300-Hour Advanced TTC (Anatomy & Alignment)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">500-Hour Master TTC (Comprehensive Mastery)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">200-Hour Kundalini & 50-Hour Yin TTC</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/yoga-teacher-training/200-hour-ttc"
                  className="w-full py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white text-center font-body text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore YTT Courses</span>
                  <FaArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 3: Panchkarma */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-[#1F4A3C]/20 flex flex-col justify-between min-h-[580px]">
            {/* Background Image & Gradient Overlay */}
            <img
              src="/images/pillar_panchkarma.webp"
              alt="Authentic Home Panchkarma"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 group-hover:from-black/95" />

            {/* Top Badges */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="bg-brand-gold-500 text-white font-display text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Pillar 03
              </span>
              <span className="bg-black/50 backdrop-blur-md border border-white/20 text-brand-gold-300 font-display text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Vaidya Supervised
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-5 text-left text-white mt-auto">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-brand-gold-400 transition-colors">
                  3. Authentic Home Panchkarma
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                  Experience clinical Ayurvedic detoxification and rejuvenation therapies at home under Vaidya supervision with full portable equipment and medicated herbal oils.
                </p>
              </div>

              {/* Therapy Highlights */}
              <div className="space-y-2 text-xs font-body pt-1 border-t border-white/15">
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">Abhyanga Full-Body Herbal Massage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">Swedana Herbal Steam Therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">Shirodhara Nervous System Pour</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold-400 font-bold">•</span>
                  <span className="text-gray-200">Kati & Janu Basti Spine/Knee Care</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/services/panchkarma"
                  className="w-full py-3.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-white text-center font-body text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Panchkarma Therapies</span>
                  <FaArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Condition Chips Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <ConditionChips />
      </section>

      {/* 6. Transparent 3×3 Pricing Matrix Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6 select-none">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/70 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E]">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>TRANSPARENT INSTRUCTOR TIERS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#16302B] leading-[1.15] tracking-tight">
            Transparent Monthly Pricing Matrix
          </h2>
          <p className="font-body text-sm sm:text-base text-[#5A574F]">
            No hidden charges or travel fees across Delhi NCR & Chandigarh Tricity. Displayed strictly in Platinum (₹1,000) → Gold (₹750) → Silver (₹500) order.
          </p>
        </div>

        <PricingTable />
      </section>

      {/* 7. Central Glow Mandala Sanctuary Section */}
      <OmniSanctuary />

      {/* 8. Founder Note Section (Matching Screenshot 2 design perfectly) */}
      <FounderNote />

      {/* 9. Dedicated Personalized Assessment & Lead Gen Form Section (Equal 50/50 Area & Reduced Size) */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-10 select-none font-body">
        <div className="bg-[#F7F3EA] border border-[#E5DEC9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
          
          {/* Lotus & Incense Sanctuary Background Artwork (High Visibility & Rich Colors) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/assessment_incense_lotus.webp"
              alt="Lotus Incense Sanctuary"
              className="w-full h-full object-cover object-left opacity-65 mix-blend-multiply"
            />
            {/* Soft Warm Vignette Gradient Mask for text contrast while keeping artwork vibrant */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EA]/80 via-[#F7F3EA]/55 to-[#F7F3EA]/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EA]/60 via-transparent to-[#F7F3EA]/80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Assessment Copy, Benefits, Commitment & Vivid Lotus Sanctuary Artwork */}
            <div className="space-y-6 text-left">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 border border-[#C08A3E]/40 bg-[#EBE3D3]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-[#B37B2E] shadow-sm">
                <KayaLeafMotif size={14} color="#C08A3E" />
                <span>PERSONALIZED ASSESSMENT</span>
              </div>

              {/* Headline */}
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#16302B] leading-[1.14] tracking-tight drop-shadow-xs">
                Ready for Your Private Home Assessment?
              </h2>

              {/* Accent Line */}
              <div className="w-14 h-[2px] bg-[#C08A3E]/60 rounded-full" />

              {/* Description */}
              <p className="font-body text-sm sm:text-base text-[#383630] font-medium leading-relaxed">
                Connect directly with Nivil Chaudhary & senior faculty to get matched with verified Silver, Gold or Platinum instructors in your exact locality.
              </p>

              {/* 3 Benefits Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                
                {/* Benefit 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#EBE3D3]/90 border border-[#DCD1BA] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-sm">
                    <FaClock className="w-4 h-4 text-[#B37B2E]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-heading font-bold text-xs text-[#16302B]">
                      Free 60-Minute
                    </div>
                    <div className="font-body text-[11px] text-[#4A4842] leading-tight font-medium">
                      Home Trial & Posture Assessment
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#EBE3D3]/90 border border-[#DCD1BA] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-sm">
                    <FaUserCheck className="w-4 h-4 text-[#B37B2E]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-heading font-bold text-xs text-[#16302B]">
                      100% Punctuality
                    </div>
                    <div className="font-body text-[11px] text-[#4A4842] leading-tight font-medium">
                      Guarantee across Delhi NCR & Tricity
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#EBE3D3]/90 border border-[#DCD1BA] text-[#16302B] flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-sm">
                    <FaUserCheck className="w-4 h-4 text-[#B37B2E]" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-heading font-bold text-xs text-[#16302B]">
                      Up to 2 Family Members
                    </div>
                    <div className="font-body text-[11px] text-[#4A4842] leading-tight font-medium">
                      Included in every assessment
                    </div>
                  </div>
                </div>

              </div>

              {/* Commitment Card */}
              <div className="bg-[#F0EBE0]/95 backdrop-blur-md border border-[#E2D8C5] rounded-2xl p-4.5 flex items-center gap-4 shadow-sm mt-3">
                <div className="w-12 h-12 rounded-full bg-[#C08A3E]/15 border border-[#C08A3E]/30 flex items-center justify-center flex-shrink-0 text-[#B37B2E]">
                  <KayaLeafMotif size={24} color="#C08A3E" />
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-heading font-bold text-[#16302B] text-base sm:text-lg">
                    Our Commitment to You
                  </h4>
                  <p className="font-body text-xs text-[#4A4842] font-medium leading-relaxed">
                    Every instructor is background-verified, certified, and personally audited for quality & safety.
                  </p>
                </div>
              </div>

              {/* Incense Lotus Candle Image Sanctuary Card (Vivid & Prominent) */}
              <div className="pt-2">
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#E2D8C5] shadow-lg relative group">
                  <img
                    src="/images/assessment_incense_lotus.webp"
                    alt="Lotus Flower Candle Incense Sanctuary"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-body text-xs font-semibold">
                    <span className="flex items-center gap-1.5 drop-shadow">
                      <KayaLeafMotif size={16} color="#E5C384" />
                      Authentic Ayurvedic & Yoga Sanctuary
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#E5C384] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E5C384]/40">
                      100% Pure Healing
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Premium LeadGenForm (Equal 50% Area) */}
            <div className="flex justify-center w-full">
              <LeadGenForm />
            </div>

          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <FaqAccordion items={homeFaqs} />
      </section>

      {/* 11. Full-Width Feature Banner (Screenshot 4 replacing Screenshot 3 section position) */}
      <FeatureBanner />
    </div>
  );
}
