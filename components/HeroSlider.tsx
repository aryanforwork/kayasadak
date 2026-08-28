'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { KayaLeafMotif } from './KayaLeafMotif';
import { FaArrowRight, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface SlideData {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
  locationLabel: string;
  image: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'home-yoga',
    badge: 'Delhi NCR • Chandigarh Tricity • At-Home Sessions',
    titlePrefix: 'Certified ',
    titleHighlight: 'Yoga Teacher',
    titleSuffix: ' At Home',
    description:
      '"Learn from verified 1-on-1 female & male yoga instructors at your home — available across all localities in Delhi NCR & Tricity. Personalized sessions tailored to your comfort and health goals."',
    ctaText: 'Book Home Yoga Session',
    ctaLink: 'https://wa.me/918273264561?text=Hi%20KayaSadhak!%20I%20want%20to%20book%20a%20free%20home%20yoga%20trial.',
    isExternal: true,
    locationLabel: 'Delhi NCR & Tricity Luxury Residences',
    image: '/images/hero_home_yoga_ncr.webp',
  },
  {
    id: 'rishikesh-ytt',
    badge: 'Rishikesh Ganga Sai Ghat • Sacred Heritage',
    titlePrefix: 'Authentic ',
    titleHighlight: 'Yoga Teacher Training',
    titleSuffix: ' (YTT)',
    description:
      '"Master traditional Hatha, Ashtanga & Vinyasa across 9 premier institute locations including Rishikesh, Haridwar & Delhi NCR. Internationally recognized 200/300/500-Hour TTC certifications in partnership with Indian Federation of Yoga & Yoga Alliance USA."',
    ctaText: 'Explore YTT Courses',
    ctaLink: '/yoga-teacher-training/200-hour-ttc',
    locationLabel: '9 Premier YTT Institute Centers',
    image: '/images/hero_rishikesh_ganga.webp',
  },
  {
    id: 'dharamshala-himalayas',
    badge: 'Dharamshala McLeod Ganj • Himalayan Heights',
    titlePrefix: 'Himalayan ',
    titleHighlight: 'Therapeutic Yoga',
    titleSuffix: ' Practice',
    description:
      '"Deepen pranayama and therapeutic posture alignment facing snow-capped Himalayan peaks. Dedicated clinical care for Back Pain, Sciatica, PCOD/PCOS, Thyroid & Stress Relief."',
    ctaText: 'View Therapeutic Programs',
    ctaLink: '/yoga-for-conditions/back-pain',
    locationLabel: 'Dharamshala Himalayan Yoga Retreat',
    image: '/images/hero_dharamshala_himalayas.webp',
  },
  {
    id: 'kerala-panchkarma',
    badge: 'Ayurvedic Home Care • Vaidya Supervised',
    titlePrefix: 'Authentic ',
    titleHighlight: 'Home Panchkarma',
    titleSuffix: ' Detox Therapies',
    description:
      '"Beyond asanas — embrace clinical Ayurvedic detoxification: Abhyanga, Swedana, Shirodhara & Basti treatments delivered directly to your home with full portable equipment and herbal oils."',
    ctaText: 'Book Home Panchkarma Care',
    ctaLink: '/services/panchkarma',
    locationLabel: 'Ayurvedic Home Detox Sanctuary',
    image: '/images/hero_panchkarma_kerala.webp',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Touch Swipe Handlers for Native Mobile Feel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black min-h-[500px] sm:min-h-[640px] lg:min-h-[720px] h-[78vh] sm:h-[82vh] max-h-[860px] flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides with Crossfade */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.locationLabel}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
              fetchPriority={index === 0 ? 'high' : 'low'}
              decoding={index === 0 ? 'sync' : 'async'}
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Gradient Overlays for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
          </div>
        );
      })}

      {/* Main Content Overlay */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="max-w-3xl space-y-4 sm:space-y-6 text-left">
          {/* Eyebrow Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1F4A3C]/60 backdrop-blur-md border border-[#1F4A3C]/80 px-3 sm:px-4 py-1.5 rounded-full shadow-lg">
            <KayaLeafMotif size={14} color="#C08A3E" />
            <span className="font-display font-semibold text-[10px] sm:text-xs md:text-sm text-brand-gold-500 tracking-[0.14em] uppercase">
              {SLIDES[currentIndex].badge}
            </span>
          </div>

          {/* Service Headline */}
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.12] tracking-tight drop-shadow-md">
            {SLIDES[currentIndex].titlePrefix}
            <span className="text-[#529983] underline decoration-[#1F4A3C] underline-offset-4 sm:underline-offset-8">
              {SLIDES[currentIndex].titleHighlight}
            </span>
            {SLIDES[currentIndex].titleSuffix}
          </h1>

          {/* Service Short Description Quote */}
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200/95 leading-relaxed max-w-2xl drop-shadow line-clamp-3 sm:line-clamp-none">
            {SLIDES[currentIndex].description}
          </p>

          {/* CTA Action Button */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {SLIDES[currentIndex].isExternal ? (
              <a
                href={SLIDES[currentIndex].ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#16302B] hover:bg-brand-green-700 text-white font-body font-bold text-xs sm:text-base rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <span>{SLIDES[currentIndex].ctaText}</span>
                <FaArrowRight className="w-3.5 h-3.5 text-brand-gold-500" />
              </a>
            ) : (
              <Link
                href={SLIDES[currentIndex].ctaLink}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#16302B] hover:bg-brand-green-700 text-white font-body font-bold text-xs sm:text-base rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 border border-[#C08A3E]/40 active:scale-[0.98]"
              >
                <span>{SLIDES[currentIndex].ctaText}</span>
                <FaArrowRight className="w-3.5 h-3.5 text-brand-gold-500" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Side Arrow Navigation — hidden on mobile, visible sm+ */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-green-900/80 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
      >
        <FaChevronLeft className="w-4 h-4 text-white" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-green-900/80 border border-white/20 text-white items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-110"
      >
        <FaChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Bottom Controls: prev arrow + thumbnail dots + next arrow */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-md px-2 py-2 rounded-full border border-white/15 shadow-2xl">
        {/* Prev Arrow — visible on mobile only */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="sm:hidden w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-all active:scale-90"
        >
          <FaChevronLeft className="w-3 h-3 text-white" />
        </button>

        {/* Thumbnail Dots */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              title={slide.locationLabel}
              className={`relative rounded-full transition-all duration-300 group ${
                isActive
                  ? 'w-12 h-12 sm:w-16 sm:h-16 ring-4 ring-[#1F4A3C] border-2 border-white scale-110 opacity-100'
                  : 'w-9 h-9 sm:w-12 sm:h-12 border-2 border-white/40 opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.locationLabel}
                className="w-full h-full object-cover rounded-full"
              />
              {isActive && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-green-900 border-2 border-white rounded-full" />
              )}
            </button>
          );
        })}

        {/* Next Arrow — visible on mobile only */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="sm:hidden w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white flex items-center justify-center transition-all active:scale-90"
        >
          <FaChevronRight className="w-3 h-3 text-white" />
        </button>
      </div>
    </section>
  );
};
