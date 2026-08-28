import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
}) => {
  return (
    <div className="my-6 sm:my-10 bg-white border border-[#1F4A3C]/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm">
      <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-green-900 mb-4 sm:mb-6">
        {title}
      </h3>
      <div className="space-y-2.5 sm:space-y-4 font-body">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group border border-[#1F4A3C]/10 rounded-xl sm:rounded-2xl bg-[#F3EEE2]/30 p-3.5 sm:p-5 transition-all [&[open]]:shadow-md [&[open]]:bg-white"
          >
            <summary className="font-heading font-semibold text-sm sm:text-base md:text-lg text-brand-green-900 cursor-pointer list-none flex items-center justify-between gap-3 sm:gap-4 select-none">
              <span>{item.question}</span>
              <FaChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-charcoal/85 leading-relaxed pt-2.5 sm:pt-3 border-t border-gray-200/60 font-body font-normal">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
