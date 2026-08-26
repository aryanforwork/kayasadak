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
    <div className="my-10 bg-white border border-[#1F4A3C]/10 rounded-3xl p-6 md:p-10 shadow-sm">
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-green-900 mb-6">
        {title}
      </h3>
      <div className="space-y-4 font-body">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group border border-[#1F4A3C]/10 rounded-2xl bg-[#F3EEE2]/30 p-5 transition-all [&[open]]:shadow-md [&[open]]:bg-white"
          >
            <summary className="font-heading font-semibold text-lg md:text-xl text-brand-green-900 cursor-pointer list-none flex items-center justify-between gap-4 select-none">
              <span>{item.question}</span>
              <FaChevronDown className="w-4 h-4 text-brand-gold-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="mt-3 text-sm md:text-base text-neutral-charcoal/85 leading-relaxed pt-3 border-t border-gray-200/60 font-body font-normal">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
