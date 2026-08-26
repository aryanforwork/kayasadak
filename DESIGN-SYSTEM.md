# DESIGN-SYSTEM.md — KayaSadhak
### v3 — Full-Screen Layout, Parchment Token System, Newsreader Typography & Signature Leaf Motif

---

## 1. Design Token System & Color Palette

| Token Name | Hex Code | Purpose & Application |
|---|---|---|
| `deep-kaya-green` | `#1F4A3C` | Primary brand color, headers, primary CTAs |
| `sage-whisper` | `#4A6B5D` | Secondary supporting UI green |
| `turmeric-gold` | `#C08A3E` | Accent color (10-15% of screen) for CTAs, leaf motif, badges |
| `parchment` | `#F3EEE2` | Warm, aged-paper background (replaces flat cream) |
| `ink-charcoal` | `#26241F` | Body text color for high legibility |
| `dusk-teal` | `#16302B` | Deep contrast color for final CTA band & footer |
| `tier-platinum` | `#D9D9E3` | Top tier badge background (₹1,000/sess, Masters + 10+ yrs) |
| `tier-gold` | `#A87C2E` | Mid tier badge background (₹750/sess, Graduation + 7+ yrs) |
| `tier-silver` | `#B8BCC2` | Entry tier badge background (₹500/sess, Diploma + 5+ yrs) |

---

## 2. Typography Hierarchy

- **Display & Headline Face:** **Newsreader** (Google Serif, 6..72 opsz) — Used for all H1, H2, and H3 headlines at an authoritative scale (56-72px H1 on desktop).
- **Body & Interface Face:** **Inter** (Humanist Sans) — Used for body prose, form fields, inputs, and navigation links.
- **Utility / Badges:** Inter font, uppercase tracking, bold weight.

---

## 3. Container & Layout System

- **Full-Screen Main Container:** `w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12`.
- **Elimination of Side Margin Gaps:** Replaced narrow `max-w-7xl` (`1280px`) containers to ensure full-bleed presentation on ultra-wide / desktop displays.

---

## 4. Signature Brand Motif

- **`KayaLeafMotif.tsx`:** Custom SVG leaf-loop motif derived from the KayaSadhak brand monogram. Used consistently across section dividers, headers, tier badges, watermark overlays, and footers.
- **Zero Emoji Iconography Policy:** No emoji characters (`🧘 🎓 🌿 🦴 🌸 🦋 ⚡ 🤰 🪑 📞 💬`) are used anywhere in the production build. All iconography is driven by custom SVG symbols and `KayaLeafMotif` accents.

---

## 5. Hero & Homepage Layout Architecture

- **Full-Bleed Editorial Hero:** Hero leads with high-impact editorial photography and Newsreader serif headlines (`56-72px`). The Lead Generation Form is moved below the fold into a dedicated section.
- **Option A Pricing Matrix:** Renders Platinum (₹1,000) → Gold (₹750) → Silver (₹500) left-to-right.
- **14 Rich Homepage Sections:**
  1. Full-Bleed Editorial Hero (No Form in Hero)
  2. Real Stats Trust Bar (12+ Yrs Exp, 20 Locality Clusters, 9 YTT Hubs, 3 Qualification Tiers)
  3. Three Pillars (Personal Home Yoga, YTT Institute, Authentic Panchkarma)
  4. "What Health Goal or Condition Are You Looking to Address?" Chips
  5. Transparent 3×3 Tier/Pricing Matrix Preview
  6. YTT Program & Location Showcase
  7. Locality Coverage Footprint Grid
  8. Founder Nivil Chaudhary Note (12+ Yrs Exp)
  9. Dedicated Lead Generation Form Section
  10. Social Proof / Founding Members Framing
  11. Panchkarma & Ayurveda Feature
  12. Raw HTML FAQ Accordion
  13. Final CTA Band (`dusk-teal` `#16302B`)
  14. Rich Textured Footer (`@kayasadhak` handles & certifying body tie-ups)
