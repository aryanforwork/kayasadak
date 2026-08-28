'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { KayaLeafMotif } from './KayaLeafMotif';

export interface ServiceCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
  btnLink: string;
  image: string;
}

export const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: 'home-yoga',
    title: 'Personal Home Yoga',
    subtitle: 'Delhi NCR & Tricity Residences',
    description:
      'Choose 1-on-1 private home sessions tailored to your comfort and health goals with verified Silver, Gold & Platinum teachers.',
    btnText: 'EXPLORE HOME YOGA',
    btnLink: '/services/yoga-at-home',
    image: '/images/card_home_yoga.webp',
  },
  {
    id: 'ytt-certification',
    title: 'Yoga Teacher Training',
    subtitle: '9 Premier Institute Locations',
    description:
      'Master traditional Hatha, Ashtanga & Vinyasa with 200/300/500-Hour TTC certifications available across 9 premier ashram & institute locations.',
    btnText: 'YTT CERTIFICATIONS',
    btnLink: '/yoga-teacher-training/200-hour-ttc',
    image: '/images/card_ytt_rishikesh.webp',
  },
  {
    id: 'himalayan-therapy',
    title: 'Therapeutic Himalayan Practice',
    subtitle: 'Dharamshala Mountain Retreat',
    description:
      'Deepen posture alignment & spinal decompression facing snow-capped Dharamshala peaks for Back Pain, Sciatica & Thyroid care.',
    btnText: 'THERAPEUTIC CARE',
    btnLink: '/yoga-for-conditions/back-pain',
    image: '/images/card_himalaya_therapy.webp',
  },
  {
    id: 'panchkarma-detox',
    title: 'Authentic Home Panchkarma',
    subtitle: 'Vaidya Supervised Therapy',
    description:
      'Experience clinical Ayurvedic detoxification: Abhyanga, Swedana, Shirodhara & Basti delivered to your home with full equipment.',
    btnText: 'PANCHKARMA DETOX',
    btnLink: '/services/panchkarma',
    image: '/images/card_panchkarma_detox.webp',
  },
  {
    id: 'senior-yoga',
    title: 'Senior Citizen Home Yoga',
    subtitle: 'Gentle Mobility & Stability',
    description:
      'Gentle joint mobility, posture correction & fall prevention care tailored specially for seniors in private home comfort.',
    btnText: 'SENIOR YOGA CARE',
    btnLink: '/services/senior-citizen-yoga',
    image: '/images/card_senior_yoga.webp',
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness Program',
    subtitle: 'On-Site & Virtual Desk Ergonomics',
    description:
      'On-site & virtual desk ergonomics, stress relief, postural correction, and executive mindfulness for corporate teams.',
    btnText: 'CORPORATE WELLNESS',
    btnLink: '/services/corporate-yoga',
    image: '/images/card_corporate_wellness.webp',
  },
  {
    id: 'abhyanga-therapy',
    title: 'Abhyanga Full-Body Therapy',
    subtitle: 'Ayurvedic Medicated Herbal Oil Massage',
    description:
      'Warm medicated herbal oil full-body massage delivered to your home for deep tissue rejuvenation and lymphatic detox.',
    btnText: 'ABHYANGA THERAPY',
    btnLink: '/services/panchkarma',
    image: '/images/card_abhyanga_massage.webp',
  },
  {
    id: 'shirodhara-care',
    title: 'Shirodhara Nervous System Care',
    subtitle: 'Third-Eye Herbal Oil Stream',
    description:
      'Continuous third-eye herbal oil stream treatment at home for anxiety, insomnia, chronic headache, and mental stress relief.',
    btnText: 'SHIRODHARA CARE',
    btnLink: '/services/panchkarma',
    image: '/images/card_panchkarma_detox.webp',
  },
];

export const ServicesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 30;
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }
  };

  // Auto-Slide Interval (Loops back smoothly at end)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollRight();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 my-14 select-none font-body">
      {/* Header with Title and Right Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-brand-gold-600 font-body text-xs font-semibold uppercase tracking-wider">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span>Curated Disciplines & Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green-900 leading-tight">
            Find Your Ideal KayaSadhak Match
          </h2>
          <p className="text-sm sm:text-base text-neutral-grey">
            Explore 1-on-1 home yoga, Yoga Teacher Training across 9 locations, Senior & Corporate programs, and Panchkarma care.
          </p>
        </div>

        {/* Circular Arrow Navigation Buttons (Top Right) */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            aria-label="Previous Service"
            className="w-12 h-12 rounded-full border border-[#1F4A3C]/20 bg-white hover:bg-brand-green-900 hover:text-white text-brand-green-900 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next Service"
            className="w-12 h-12 rounded-full border border-[#1F4A3C]/20 bg-white hover:bg-brand-green-900 hover:text-white text-brand-green-900 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Cards Container (Auto Slides, Touch Swipe & CSS Snap) */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 snap-x snap-mandatory px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SERVICE_CARDS.map((card) => (
          <div
            key={card.id}
            className="w-[82vw] max-w-[310px] sm:w-[320px] lg:w-[340px] flex-shrink-0 h-[430px] sm:h-[500px] rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group snap-center"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity group-hover:from-black/95" />

            {/* Subtitle Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-black/50 backdrop-blur-md border border-white/20 text-brand-gold-500 font-display text-[9px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                {card.subtitle}
              </span>
            </div>

            {/* Content Container (Bottom Aligned) */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 space-y-3 sm:space-y-4 text-left">
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                {card.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-gray-200/90 leading-relaxed line-clamp-3">
                {card.description}
              </p>

              {/* Rounded Pill Outline Button */}
              <div className="pt-1.5 sm:pt-2">
                <Link
                  href={card.btnLink}
                  className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-full border border-white/40 hover:border-brand-gold-500 bg-black/30 hover:bg-brand-gold-500 text-white font-display font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md group/btn active:scale-[0.98]"
                >
                  <span>{card.btnText}</span>
                  <FaArrowRight className="w-3 h-3 text-brand-gold-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
