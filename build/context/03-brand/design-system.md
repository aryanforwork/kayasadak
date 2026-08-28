# KayaSadhak — Brand & Visual Design System Specification ( v3.0 )

> **Single Source of Truth for Visual Assets, CSS Design Tokens, and UI Components**  
> **Target Path:** `/context/03-brand/design-system.md`  
> **Status:** Locked & Production Aligned  
> **Canonical Domain:** `https://www.kayasadhak.com`

---

## 1. Executive Summary & Design System Principles

KayaSadhak’s visual identity balances **authentic yogic tradition** with **modern, editorial clarity**. 

### Core Visual Principles
1. **Full-Screen Responsive Container Architecture (`max-w-[1600px]`):** All headers, heroes, sections, tables, and footers span `w-full max-w-[1600px]` with generous padding (`px-4 sm:px-8 lg:px-12`), eliminating narrow side margins on desktop screens.
2. **Editorial Parchment Aesthetic:** `parchment` `#F3EEE2` background paired with `deep-kaya-green` `#1F4A3C`, `turmeric-gold` `#C08A3E`, `dusk-teal` `#16302B`, and `ink-charcoal` `#26241F`.
3. **Newsreader Editorial Typography:** Headlines set in **Newsreader** (Google Serif, 56-72px H1) for editorial warmth, paired with **Inter** for body text.
4. **Signature SVG Motif & Zero Emoji:** `KayaLeafMotif.tsx` SVG motif derived from the KayaSadhak monogram used across dividers, badges, and accents. Zero emoji iconography in production.
5. **Absolute Transparency:** Full published pricing matrices and explicit instructor qualification tiers (Platinum → Gold → Silver) rendered in accessible, responsive HTML tables.
6. **Conversion-First UX:** Lead Generation Form positioned below the fold, routing directly to pre-filled WhatsApp (`wa.me/918273264561`).

---

## 2. Color Palette & Design Tokens

### 2.1 Core Brand Colors

| Token Name | Hex Code | Visual Swatch Description | Usage & Context |
|---|---|---|---|
| `deep-kaya-green` | `#1F4A3C` | Deep Forest Green | Primary header backgrounds, primary button CTAs, main brand container anchors |
| `sage-whisper` | `#4A6B5D` | Medium Earth Green | Secondary buttons, active navigation states, hover transitions |
| `turmeric-gold` | `#C08A3E` | Warm Sattvic Gold | Visual accents, decorative dividers, star rating icons, high-intent CTA highlights |
| `parchment` | `#F3EEE2` | Warm Aged Parchment | Main website background (evokes aged manuscript paper) |
| `ink-charcoal` | `#26241F` | Deep Ink Charcoal | Primary body text (ensures 12.5:1 AAA contrast on parchment background) |
| `dusk-teal` | `#16302B` | Dark Dusk Teal | High-contrast background for final CTA band & footer |
| `neutral-grey` | `#5B5B5B` | Slate Grey | Subtitles, metadata, form labels, secondary captions |

### 2.2 Teacher Tier Badge Colors (Option A Aligned)

| Tier Badge Token | Hex Code | Text Color | Visual Style | Qualification & Pricing Summary |
|---|---|---|---|---|
| `--badge-platinum` | `#D9D9E3` | `#1F4A3C` | Soft Pearl Platinum pill | **Top Tier:** ₹1,000/sess \| Masters + Grad + Adv TTC + 10+ yrs exp |
| `--badge-gold` | `#A87C2E` | `#FFFFFF` | Deep Metallic Gold pill | **Mid Tier:** ₹750/sess \| Graduation in Yoga + Adv TTC + 7+ yrs exp |
| `--badge-silver` | `#B8BCC2` | `#1F4A3C` | Cool Silver Grey pill | **Entry Tier:** ₹500/sess \| Graduation + Diploma in Yoga + 5+ yrs exp |

---

## 3. Typography System

### 3.1 Typeface Selection
- **Heading Typeface:** **Newsreader** (Google Serif, 6..72 opsz, Weights: 400, 500, 600, 700). Selected for manuscript warmth and editorial elegance.
- **Body & Copy Typeface:** **Inter** (Weights: 300, 400, 500, 600, 700). Selected for superior multi-device legibility.

### 3.2 Full-Screen Container Utility
- **Class:** `.full-screen-container` / `w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12`

---

## 4. Signature SVG Leaf Motif (`KayaLeafMotif.tsx`)

A custom SVG component reproducing the KayaSadhak leaf-loop monogram:
```tsx
import React from 'react';

export const KayaLeafMotif: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 24,
  color = 'currentColor',
  className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={`inline-block ${className}`}>
    <path d="M20 4C20 4 24 12 32 14C32 14 28 24 20 36C12 24 8 14 8 14C16 12 20 4 20 4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 10V32" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M20 16C22.5 14.5 25 14 27 15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M20 22C17.5 20.5 15 20 13 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
```

---

## 5. Teacher Tier Badge System & Pricing Table Component

### Display Order Hierarchy
Every UI listing, pricing matrix header, directory filter, and card badge MUST observe the following locked hierarchy order:
$$\mathbf{Platinum} \longrightarrow \mathbf{Gold} \longrightarrow \mathbf{Silver}$$

### Option A Pricing Package Rates
- **12 Sessions / Month (3 days/wk):** Platinum ₹12,000 | Gold ₹9,000 | Silver ₹6,000
- **16 Sessions / Month (4 days/wk):** Platinum ₹16,000 | Gold ₹12,000 | Silver ₹8,000
- **20 Sessions / Month (5 days/wk):** Platinum ₹20,000 | Gold ₹15,000 | Silver ₹10,000

---

## 6. Official Contact & Social Media Directory

- **Phone & WhatsApp:** `+91-8273264561`
- **Email:** `contact@kayasadhak.com`
- **Instagram:** `https://www.instagram.com/kayasadhak` (`@kayasadhak`)
- **Facebook:** `https://www.facebook.com/kayasadhak` (`kayasadhak`)
- **Twitter / X:** `https://twitter.com/kayasadhak` (`@kayasadhak`)
- **YouTube:** `https://www.youtube.com/@kayasadhak` (`@kayasadhak`)
