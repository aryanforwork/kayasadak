'use client';

import React, { useState } from 'react';
import { PRICING_TIERS, CONTACT_INFO, SERVICE_LINES } from '@/config/pricing';
import { KayaLeafMotif } from '@/components/KayaLeafMotif';

export default function BookFreeClassPage() {
  const [step, setStep] = useState(1);

  // Form State
  const [region, setRegion] = useState('Delhi NCR');
  const [locality, setLocality] = useState('');
  const [service, setService] = useState('Personal Yoga at Home');

  const [tier, setTier] = useState('Platinum Tier');
  const [frequency, setFrequency] = useState('12 Sessions / Month (3 days/wk)');

  const [days, setDays] = useState('Mon-Wed-Fri (3 Days)');
  const [timeSlot, setTimeSlot] = useState('Morning: 7:00 AM - 8:00 AM');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [genderPref, setGenderPref] = useState('No Preference');
  const [healthNotes, setHealthNotes] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      if (!name || !phone) {
        alert('Please enter your Name and WhatsApp Mobile Number.');
        return;
      }

      let text = `Hi KayaSadhak! I have completed the Free Class Booking Funnel on your website:\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Region/Locality:* ${region} — ${locality || 'N/A'}\n` +
        `*Service:* ${service}\n` +
        `*Selected Tier:* ${tier}\n` +
        `*Frequency:* ${frequency}\n` +
        `*Schedule:* ${days} | ${timeSlot}\n` +
        `*Instructor Preference:* ${genderPref}\n`;

      if (healthNotes) {
        text += `*Health Goals/Notes:* ${healthNotes}\n`;
      }

      const waUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className="space-y-10 sm:space-y-16 pb-16 bg-[#F3EEE2] text-[#26241F]">
      {/* Hero Banner */}
      <section className="relative bg-[#16302B] text-white pt-10 sm:pt-16 pb-12 sm:pb-20 overflow-hidden border-b border-brand-gold-500/20">
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-3 sm:px-8 lg:px-12 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-gold-500/20 border border-brand-gold-500/40 px-3.5 py-1 rounded-full text-[11px] font-body font-semibold text-brand-gold-500 tracking-widest uppercase">
            <KayaLeafMotif size={12} color="#C08A3E" />
            <span>4-Step Guided Booking Wizard</span>
          </div>

          <h1 className="font-heading text-2.5xl sm:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Book Your Personal Home Yoga Consultation
          </h1>

          <p className="font-body text-xs sm:text-base text-brand-green-50/90 max-w-2xl mx-auto">
            Match with verified Platinum, Gold, or Silver instructors in your area.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="w-full max-w-3xl mx-auto px-3 sm:px-4">
        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-green-900 h-full transition-all duration-300 ease-in-out"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-4 text-center text-[11px] sm:text-xs font-body font-semibold text-neutral-grey mt-2">
          <span className={step >= 1 ? 'text-brand-green-900 font-bold' : ''}>1. Service</span>
          <span className={step >= 2 ? 'text-brand-green-900 font-bold' : ''}>2. Tier</span>
          <span className={step >= 3 ? 'text-brand-green-900 font-bold' : ''}>3. Schedule</span>
          <span className={step >= 4 ? 'text-brand-green-900 font-bold' : ''}>4. Contact</span>
        </div>
      </div>

      {/* Form Wizard Container */}
      <div className="bg-white border border-[#1F4A3C]/15 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl max-w-3xl mx-auto mx-3 sm:mx-auto">
        <form onSubmit={handleNext} className="space-y-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-green-900">
                Step 1 of 4: Select Your Region & Service Line
              </h3>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-2">
                  Select Your Region <span className="text-brand-gold-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: 'Delhi NCR', desc: 'Delhi, Gurugram, Noida, Ghaziabad' },
                    { title: 'Chandigarh Tricity', desc: 'Chandigarh, Mohali, Panchkula' },
                    { title: 'YTT Belt', desc: 'Rishikesh, Haridwar, Dehradun' },
                  ].map((r) => (
                    <button
                      type="button"
                      key={r.title}
                      onClick={() => setRegion(r.title)}
                      className={`p-3 sm:p-4 text-left rounded-xl border text-xs transition-all ${
                        region === r.title
                          ? 'border-brand-green-900 bg-[#F3EEE2] text-brand-green-900 font-semibold shadow-sm'
                          : 'border-gray-200 hover:border-brand-green-900/40 text-neutral-charcoal'
                      }`}
                    >
                      <div className="font-heading font-bold text-xs sm:text-sm">{r.title}</div>
                      <div className="text-[10px] text-neutral-grey mt-0.5">{r.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Your Locality / Sector <span className="text-brand-gold-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. Vasant Kunj, DLF Phase 5, Sector 17"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 font-body text-base focus:ring-2 focus:ring-brand-green-900 bg-[#F3EEE2]/30"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Service Line <span className="text-brand-gold-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                >
                  {SERVICE_LINES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Yoga Teacher Training (YTT)">Yoga Teacher Training (YTT)</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-semibold text-sm rounded-xl transition-all shadow"
                >
                  Next: Choose Instructor Tier ➔
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">
                Step 2 of 4: Choose Qualification Tier & Plan
              </h3>

              <div className="space-y-3">
                <label className="block font-body text-xs font-semibold text-neutral-charcoal">
                  Select Instructor Qualification Tier <span className="text-brand-gold-500">*</span>
                </label>
                {PRICING_TIERS.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setTier(t.name)}
                    className={`w-full p-4 text-left rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      tier === t.name
                        ? 'border-brand-green-900 bg-[#F3EEE2] shadow-sm ring-2 ring-brand-green-900/20'
                        : 'border-gray-200 hover:border-brand-green-900/30'
                    }`}
                  >
                    <div>
                      <span
                        style={{ backgroundColor: t.badgeBg, color: t.badgeTextColor }}
                        className="px-3 py-0.5 rounded-full text-[10px] font-body font-bold uppercase tracking-wider inline-block"
                      >
                        {t.name}
                      </span>
                      <div className="font-body text-xs text-neutral-charcoal font-semibold mt-1">
                        {t.qualifications} ({t.experience})
                      </div>
                    </div>
                    <div className="text-right font-heading font-bold text-lg text-brand-green-900 flex-shrink-0">
                      ₹{t.perSessionPrice} <span className="text-[10px] font-normal text-neutral-grey">/ session</span>
                    </div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Session Frequency Preference <span className="text-brand-gold-500">*</span>
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                >
                  <option value="12 Sessions / Month (3 days/wk)">12 Sessions / Month (3 days/wk)</option>
                  <option value="16 Sessions / Month (4 days/wk)">16 Sessions / Month (4 days/wk)</option>
                  <option value="20 Sessions / Month (5 days/wk)">20 Sessions / Month (5 days/wk)</option>
                  <option value="Single Free Trial Session">Single Free Trial Session</option>
                </select>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 border border-gray-300 font-body text-xs font-semibold text-neutral-grey rounded-xl"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-semibold text-sm rounded-xl transition-all shadow"
                >
                  Next: Set Preferred Schedule ➔
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">
                Step 3 of 4: Set Preferred Schedule & Timing
              </h3>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Preferred Practice Days <span className="text-brand-gold-500">*</span>
                </label>
                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                >
                  <option value="Mon-Wed-Fri (3 Days)">Mon - Wed - Fri (3 Days/Wk)</option>
                  <option value="Tue-Thu-Sat (3 Days)">Tue - Thu - Sat (3 Days/Wk)</option>
                  <option value="Monday to Friday (5 Days)">Monday to Friday (5 Days/Wk)</option>
                  <option value="Flexible / Weekend">Flexible / Weekend Sessions</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Preferred Time Slot <span className="text-brand-gold-500">*</span>
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                >
                  <option value="Morning: 6:00 AM - 7:00 AM">Morning: 6:00 AM - 7:00 AM</option>
                  <option value="Morning: 7:00 AM - 8:00 AM">Morning: 7:00 AM - 8:00 AM</option>
                  <option value="Morning: 8:00 AM - 9:00 AM">Morning: 8:00 AM - 9:00 AM</option>
                  <option value="Evening: 5:00 PM - 6:00 PM">Evening: 5:00 PM - 6:00 PM</option>
                  <option value="Evening: 6:00 PM - 7:00 PM">Evening: 6:00 PM - 7:00 PM</option>
                </select>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 border border-gray-300 font-body text-xs font-semibold text-neutral-grey rounded-xl"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-semibold text-sm rounded-xl transition-all shadow"
                >
                  Next: Contact Details ➔
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-2xl text-brand-green-900">
                Step 4 of 4: Final Contact Details & Confirm
              </h3>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Full Name <span className="text-brand-gold-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 font-body text-base bg-[#F3EEE2]/30"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  WhatsApp Mobile Number <span className="text-brand-gold-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  pattern="[6-9][0-9]{9}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 font-body text-base bg-[#F3EEE2]/30"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Instructor Gender Preference
                </label>
                <select
                  value={genderPref}
                  onChange={(e) => setGenderPref(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                >
                  <option value="No Preference">No Preference (Any Verified Instructor)</option>
                  <option value="Female Instructor">Female Instructor Preferred</option>
                  <option value="Male Instructor">Male Instructor Preferred</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-neutral-charcoal mb-1">
                  Health Goals / Medical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={healthNotes}
                  onChange={(e) => setHealthNotes(e.target.value)}
                  placeholder="e.g. Back pain relief, PCOD management, general flexibility"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 font-body text-sm bg-[#F3EEE2]/30"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-3 border border-gray-300 font-body text-xs font-semibold text-neutral-grey rounded-xl"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-grow py-4 px-6 bg-brand-green-900 hover:bg-brand-green-700 text-white font-body font-semibold text-sm rounded-xl transition-all shadow-md text-center"
                >
                  Confirm Free Trial Request on WhatsApp ➔
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
