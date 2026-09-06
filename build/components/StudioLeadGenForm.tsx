'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const StudioLeadGenForm: React.FC = () => {
  const whatsappPhone = '918796989667';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const style = (form.elements.namedItem('style') as HTMLSelectElement).value;
    const timing = (form.elements.namedItem('timing') as HTMLSelectElement).value;
    const instructorPref = (form.elements.namedItem('instructorPref') as HTMLSelectElement).value;

    const text = `Hi KayaSadhak! I would like to join/inquire at your Sector 45, Noida Studio:\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Preferred Class:* ${style}\n` +
      `*Preferred Timing:* ${timing}\n` +
      `*Instructor Preference:* ${instructorPref}`;

    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-body font-semibold text-neutral-charcoal mb-1">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Ananya Gupta"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-xs sm:text-sm bg-white focus:ring-2 focus:ring-brand-green-900"
        />
      </div>

      <div>
        <label className="block text-xs font-body font-semibold text-neutral-charcoal mb-1">
          WhatsApp Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          required
          pattern="[0-9]{10}"
          placeholder="10-digit mobile number"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-xs sm:text-sm bg-white focus:ring-2 focus:ring-brand-green-900"
        />
      </div>

      <div>
        <label className="block text-xs font-body font-semibold text-neutral-charcoal mb-1">
          Class / Style Preference *
        </label>
        <select
          name="style"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-xs sm:text-sm bg-white focus:ring-2 focus:ring-brand-green-900"
        >
          <option value="Hatha Yoga">Classical Hatha Yoga</option>
          <option value="Vinyasa Flow">Dynamic Vinyasa Flow</option>
          <option value="Ashtanga Yoga">Ashtanga Yoga</option>
          <option value="Power Yoga">Power Yoga (Fitness & Burn)</option>
          <option value="Yin & Meditation">Yin Yoga & Meditation</option>
          <option value="200-Hour YTT Batch">200-Hour Yoga Teacher Training</option>
          <option value="Trial Class Inquiry">General Studio Trial Class</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-body font-semibold text-neutral-charcoal mb-1">
          Instructor Preference (Optional)
        </label>
        <select
          name="instructorPref"
          defaultValue="No Preference / Any Certified Instructor"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-xs sm:text-sm bg-white focus:ring-2 focus:ring-brand-green-900"
        >
          <option value="Female Instructor Preferred">Female Instructor Preferred</option>
          <option value="Male Instructor Preferred">Male Instructor Preferred</option>
          <option value="No Preference / Any Certified Instructor">No Preference / Any Certified Instructor</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-body font-semibold text-neutral-charcoal mb-1">
          Preferred Time Window
        </label>
        <select
          name="timing"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 font-body text-xs sm:text-sm bg-white focus:ring-2 focus:ring-brand-green-900"
        >
          <option value="Morning Batch">Morning Batch (6:00 AM – 9:00 AM)</option>
          <option value="Evening Batch">Evening Batch (5:00 PM – 8:00 PM)</option>
          <option value="Weekend Batch">Weekend Batch</option>
          <option value="Flexible">Flexible / Discuss on Call</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
      >
        <FaWhatsapp className="w-4 h-4 text-brand-gold-400" />
        <span>Send WhatsApp Inquiry (+91 87969 89667)</span>
      </button>
    </form>
  );
};
