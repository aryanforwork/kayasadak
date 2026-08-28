'use client';

import React from 'react';
import { CONTACT_INFO } from '@/config/pricing';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { KayaLeafMotif } from './KayaLeafMotif';

export const MobileBottomDock: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pointer-events-auto select-none">
      {/* Frosted Glassmorphic Bar with Top Gold Border */}
      <div className="bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-[#C08A3E]/30 px-3 pt-2.5 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          {/* Button 1: Direct Phone Call */}
          <a
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-white border border-[#1F4A3C]/20 text-[#16302B] font-body font-bold text-xs shadow-sm hover:bg-[#F5EFE4] active:scale-[0.98] transition-all"
            aria-label="Call KayaSadhak Faculty"
          >
            <div className="w-7 h-7 rounded-full bg-[#16302B]/10 flex items-center justify-center text-[#16302B] flex-shrink-0">
              <FaPhoneAlt className="w-3 h-3 text-[#16302B]" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-[#B37B2E] font-display uppercase tracking-wider">Instant Call</div>
              <div className="font-bold text-[#16302B] text-xs">Call Faculty</div>
            </div>
          </a>

          {/* Button 2: WhatsApp Free Trial Booking (Primary High-Converting Action) */}
          <a
            href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
              'Hi KayaSadhak! I want to book a free 1-on-1 personal home yoga trial session.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-gradient-to-r from-[#16302B] to-[#1F4A3C] text-white font-body font-bold text-xs shadow-md border border-[#C08A3E]/40 active:scale-[0.98] transition-all relative overflow-hidden group"
            aria-label="Book Free Trial on WhatsApp"
          >
            {/* Pulsing Notification Glow Dot */}
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C384] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C08A3E]"></span>
            </span>

            <div className="w-7 h-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0">
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-[#E5C384] font-display uppercase tracking-wider flex items-center gap-1">
                <span>Free Trial</span>
                <KayaLeafMotif size={10} color="#E5C384" />
              </div>
              <div className="font-bold text-white text-xs">Book on WhatsApp</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
