'use client';

import React from 'react';
import { CONTACT_INFO } from '@/config/pricing';

export const TopUtilityBar: React.FC = () => {
  return (
    <div className="bg-[#16302B] text-white text-xs font-body py-2 px-4 sm:px-8 border-b border-white/10">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Info Links */}
        <div className="flex items-center gap-6 text-[11px] sm:text-xs">
          <a
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="flex items-center gap-1.5 hover:text-brand-gold-500 transition-colors font-semibold"
          >
            <svg className="w-3.5 h-3.5 text-brand-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>{CONTACT_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.emailPrimary}`}
            className="hidden md:flex items-center gap-1.5 hover:text-brand-gold-500 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-brand-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>{CONTACT_INFO.emailPrimary}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-brand-green-50/80">
            <svg className="w-3.5 h-3.5 text-brand-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Delhi NCR • Chandigarh Tricity • YTT Institutes</span>
          </div>
        </div>

        {/* Right Social Media Links */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-brand-gold-500 font-semibold tracking-wider uppercase text-[10px]">Follow Us</span>
          <a
            href="https://instagram.com/kayasadhak"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold-500 flex items-center justify-center transition-colors text-white"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a
            href="https://facebook.com/kayasadhak"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold-500 flex items-center justify-center transition-colors text-white"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.667V8z"/>
            </svg>
          </a>

          <a
            href="https://youtube.com/@kayasadhak"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold-500 flex items-center justify-center transition-colors text-white"
            aria-label="YouTube"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>

          <a
            href={`${CONTACT_INFO.whatsappUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-gold-500 flex items-center justify-center transition-colors text-white"
            aria-label="WhatsApp"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.197 4.292-1.127z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
