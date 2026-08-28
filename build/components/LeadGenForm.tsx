'use client';

import React, { useState } from 'react';
import { CONTACT_INFO, SERVICE_LINES } from '@/config/pricing';
import {
  FaWhatsapp,
  FaUser,
  FaMapMarkerAlt,
  FaSpa,
  FaArrowRight,
  FaChevronDown,
} from 'react-icons/fa';

interface LeadGenFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  defaultLocality?: string;
  className?: string;
}

export const LeadGenForm: React.FC<LeadGenFormProps> = ({
  title = 'Book Your Free Trial Home Session',
  subtitle = 'Connect directly with Nivil Chaudhary & senior faculty on WhatsApp',
  defaultService = '',
  defaultLocality = '',
  className = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Personal Yoga at Home');
  const [locality, setLocality] = useState(defaultLocality || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service) {
      alert('Please fill in your Name, Phone Number, and Service Interest.');
      return;
    }

    let messageText =
      `Hi KayaSadhak! I am interested in booking a trial session.\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}`;

    if (locality) {
      messageText += `\n*Locality:* ${locality}`;
    }

    const waUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className={`bg-[#FAF6F0] rounded-[32px] border-4 border-[#16302B]/10 shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden relative w-full ${className}`}>
      
      {/* Top Dark Green Header Bar */}
      <div className="bg-[#16302B] text-white py-3 px-4 flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#E5C384] border-b border-[#C08A3E]/30">
        <div className="w-6 h-6 rounded-full bg-[#C08A3E]/20 border border-[#C08A3E]/40 flex items-center justify-center flex-shrink-0">
          <FaWhatsapp className="w-3.5 h-3.5 text-[#E5C384]" />
        </div>
        <span>INSTANT WHATSAPP CALLBACK</span>
      </div>

      {/* Form Body Container */}
      <div className="p-3 sm:p-7 md:p-10 space-y-4 sm:space-y-5 text-left font-body">
        
        {/* Title & Subtitle */}
        <div className="text-center space-y-1.5">
          <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#16302B] leading-tight">
            {title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#5A574F]">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          
          {/* Input 1: FULL NAME */}
          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-[#16302B] uppercase tracking-wider mb-1">
              FULL NAME <span className="text-[#C08A3E]">*</span>
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-2.5 w-7 h-7 rounded-lg bg-[#EFE8DC] border border-[#E0D7C4] text-[#16302B] flex items-center justify-center pointer-events-none">
                <FaUser className="w-3.5 h-3.5 text-[#C08A3E]" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-[#DCD3C0] text-base focus:outline-none focus:ring-2 focus:ring-[#16302B] bg-white text-[#16302B] placeholder:text-gray-400 shadow-inner"
              />
            </div>
          </div>

          {/* Input 2: WHATSAPP MOBILE NUMBER */}
          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-[#16302B] uppercase tracking-wider mb-1">
              WHATSAPP MOBILE NUMBER <span className="text-[#C08A3E]">*</span>
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 w-8 h-8 rounded-lg bg-[#EFE8DC] border border-[#E0D7C4] text-[#16302B] flex items-center justify-center pointer-events-none">
                <FaWhatsapp className="w-4 h-4 text-[#C08A3E]" />
              </div>
              <input
                type="tel"
                required
                pattern="[6-9][0-9]{9}"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-[#DCD3C0] text-base focus:outline-none focus:ring-2 focus:ring-[#16302B] bg-white text-[#16302B] placeholder:text-gray-400 shadow-inner"
              />
            </div>
          </div>

          {/* 2-Column Row: SERVICE INTEREST & LOCALITY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* Service Dropdown */}
            <div>
              <label className="block text-[10px] sm:text-[11px] font-bold text-[#16302B] uppercase tracking-wider mb-1">
                SERVICE INTEREST <span className="text-[#C08A3E]">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 w-7 h-7 rounded-lg bg-[#EFE8DC] border border-[#E0D7C4] text-[#16302B] flex items-center justify-center pointer-events-none">
                  <FaSpa className="w-3.5 h-3.5 text-[#C08A3E]" />
                </div>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 sm:py-3.5 rounded-xl border border-[#DCD3C0] text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#16302B] bg-white text-[#16302B] appearance-none shadow-inner"
                >
                  {SERVICE_LINES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Yoga Teacher Training (YTT)">Yoga Teacher Training (YTT)</option>
                </select>
                <FaChevronDown className="w-3 h-3 text-gray-400 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Locality Input */}
            <div>
              <label className="block text-[10px] sm:text-[11px] font-bold text-[#16302B] uppercase tracking-wider mb-1">
                LOCALITY <span className="text-[#5A574F] font-normal lowercase">(optional)</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 w-7 h-7 rounded-lg bg-[#EFE8DC] border border-[#E0D7C4] text-[#16302B] flex items-center justify-center pointer-events-none">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#C08A3E]" />
                </div>
                <input
                  type="text"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. South Extension / Sector 54"
                  className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-[#DCD3C0] text-base focus:outline-none focus:ring-2 focus:ring-[#16302B] bg-white text-[#16302B] placeholder:text-gray-400 shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#16302B] hover:bg-[#0E211D] text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-between group mt-2"
          >
            <div className="flex items-center gap-3">
              <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span className="uppercase tracking-wider">REQUEST INSTANT CALLBACK ON WHATSAPP</span>
            </div>
            <FaArrowRight className="w-4 h-4 text-[#E5C384] group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

    </div>
  );
};
