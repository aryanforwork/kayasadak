# PROMPT FOR ANTIGRAVITY — KayaSadhak Design Correction & Premium Rebuild
### Paste this as a new instruction to your build agent. It supersedes any earlier design output — the current build is being rejected and rebuilt, not incrementally patched.

---

## 0. WHY THE CURRENT BUILD IS BEING REJECTED (read this first, understand it, don't just comply with it)

What you built is functionally correct but visually generic — it reads as an
AI-templated site, not a premium wellness brand, for these specific,
fixable reasons:

1. **The hero has no real image at all.** A lead-generation form is
   occupying the position where the site's single most important visual
   statement should be. A form is a conversion tool, not a hero. Nobody
   opens a premium wellness brand's homepage and sees a form filling half
   the screen before they've seen a single photograph of a real person
   practicing yoga.
2. **Emoji icons (🧘 🎓 🌿) are used as the primary visual language for the
   three pillars.** This is one of the most recognizable "built by AI, not
   designed" signals that exists. A premium brand never ships emoji as
   iconography in production.
3. **The palette and layout are the generic default**, not a considered
   choice: warm cream background, safe green accent, cards with rounded
   corners and centered icons, a form-heavy hero. This is the layout an AI
   produces for literally any wellness/service brand when not pushed
   toward something specific — nothing about it is specific to KayaSadhak,
   to Ayurveda, to yoga, or to the Delhi-NCR premium market it's
   targeting.
4. **The homepage is too short and stops too early** — it goes from hero
   into pillars into a single CTA band into the footer. There is no
   sense of depth, trust-building, or narrative. A premium brand's
   homepage should feel like a considered journey, not a landing page
   summary.
5. **Nothing distinguishes this from a template.** There is no signature
   visual element — nothing a visitor would remember or associate only
   with KayaSadhak.

Fix all five. Do not just add images on top of the current layout — rebuild
the visual system from the design plan below, then implement content into
it.

---

## 1. DESIGN PROCESS — FOLLOW THIS ORDER, DO NOT SKIP STEPS

1. **Brainstorm a design plan first**, before touching code: a compact
   token system covering color (4-6 named hex values), type (a
   characterful display face + a complementary body face + a utility
   face), layout concept (one-sentence descriptions + simple wireframe
   sketches for the homepage specifically), and a **signature element** —
   the one visual thing this site will be remembered by.
2. **Critique that plan against genericness before building anything.**
   Ask: would this exact palette/layout/icon choice come out of an AI
   design tool for literally any wellness or yoga brand brief? If yes,
   revise it until the answer is no. In particular:
   - Do NOT use a warm cream background (~#F4F1EA) paired with a
     terracotta/clay accent — this specific combination is the single
     most common AI-generated-design default right now and will read as
     a tell to anyone who's seen enough AI-built sites.
   - Do NOT use emoji as icons anywhere in the production build.
   - Do NOT default to a centered-icon-card-grid layout for the three
     pillars unless you've deliberately decided it's the right choice
     for this specific content, not the easiest one.
3. **Build to the revised plan.** Every color and type decision traces
   back to the token system, not ad hoc per-component choices.
4. **Self-critique with screenshots before calling it done.** Take a
   screenshot of the built homepage. Does it look like it could belong
   to any wellness startup, or does it look like it could only be
   KayaSadhak? If the former, go back to step 2.

---

## 2. BRAND GROUND TRUTH (design FROM this, don't design generically and drop this in after)

KayaSadhak is a premium Delhi-NCR home yoga, Yoga Teacher Training (YTT),
and Ayurvedic Panchkarma brand. "Kaya" = body (an Ayurvedic term),
"Sadhak" = a dedicated practitioner. The confirmed logo is a deep-green
monogram fusing the letter "K" with a golden/terracotta leaf shape. The
brand sits at the intersection of three real, specific worlds — classical
Indian yoga tradition, modern instructor credentialing (YTT), and
Ayurvedic therapeutic practice (Panchkarma) — design should draw from the
actual vernacular of these worlds (manuscript typography, herbal/botanical
texture, the discipline and precision of an asana practice, the warmth of
a home visit) rather than generic "wellness app" visual language.

---

## 3. DESIGN TOKEN SYSTEM (use this as your starting point, refine don't discard)

**Color** (6 named values — richer and more specific than the current
build's flat cream+green):
- `deep-kaya-green` `#1F4A3C` — primary, most authoritative color: header,
  primary buttons, footer background
- `sage-whisper` `#4A6B5D` — secondary green for supporting UI, softer
  than the primary
- `turmeric-gold` `#C08A3E` — the brand's accent, used sparingly (10-15%
  of any screen) for CTAs, dividers, the tier-badge system
- `parchment` `#F3EEE2` — NOT plain cream; a warmer, slightly textured
  off-white evoking aged paper/manuscript, used as a background instead
  of the generic #F4F1EA
- `ink-charcoal` `#26241F` — body text, warmer than pure black, paired
  with parchment
- `dusk-teal` `#16302B` — a near-black deep green for high-contrast
  sections (e.g. the final CTA band, footer) — richer than plain dark green

**Typography** (do not default to Poppins+Inter — pick something with
actual character):
- Display/heading face: something with genuine editorial warmth and a
  slightly classical, manuscript-adjacent feel — evaluate options like
  **Fraunces** (warm, slightly quirky serif with real personality) or
  **Newsreader** (editorial serif with Indian-manuscript-adjacent warmth)
  for headlines specifically. Use it at a confident scale (56-72px H1
  desktop) and don't be shy with it.
- Body face: a clean, highly legible humanist sans — **General Sans** or
  **Inter** is fine here, but keep it firmly in a supporting role, never
  competing with the display face.
- Utility/caption face: same body face, smaller weight, used for
  metadata, tier badges, form labels.

**Layout concept:**
- Hero: full-bleed real photography (see Section 4), headline set in the
  display face large and confident over/beside the image, NOT a form. The
  Lead Generation Form is a secondary element — either a compact sticky
  corner widget, or positioned clearly BELOW the hero as its own section
  with its own real supporting image beside it (per the original brief:
  "enquiry form above a fantastic image" — meaning the form sits near
  strong imagery, not that imagery is replaced by the form).
- Three Pillars: redesign away from the generic centered-icon-card grid.
  Consider an asymmetric layout, a horizontal scroll-reveal, or a layout
  where each pillar gets a real photograph as its primary visual anchor
  with text overlaid or beside it — not a small emoji in a pastel square.

**Signature element (the one thing that makes this unmistakably
KayaSadhak):** Design a recurring graphic motif derived from the logo's
leaf-fused-K shape — e.g., a thin, elegant line-art leaf/vine motif used
as a section divider, a background watermark at low opacity behind key
headlines, or woven into the tier-badge and pricing-table design. This
motif should recur consistently across the site so a visitor starts to
recognize it as distinctly KayaSadhak's, the way a real brand's signature
graphic device works.

---

## 4. IMAGE REQUIREMENTS — PREMIUM PHOTOGRAPHY EVERYWHERE, NO EXCEPTIONS

**No emoji, no generic stock-photo-looking images, no icon-only
substitutes for real imagery anywhere in the production build.**

Required image set (generate/source at a genuinely premium, editorial
quality bar — warm natural light, real Delhi-NCR home settings where
relevant, authentic rather than overly staged):

1. **Homepage hero** — full-bleed, both a wide desktop crop and a
   separately composed (not just cropped) mobile/portrait version. Subject:
   a real-feeling moment of a home yoga session — warm morning or golden-
   hour light, a genuine home interior (not a studio backdrop), teacher
   and student mid-practice.
2. **Three Pillars section** — one strong photograph per pillar: (a) a
   home yoga session in progress, (b) a YTT training moment — a small
   group in a training setting, ideally with a Rishikesh/Himalayan-belt
   feel for at least one variant, (c) a Panchkarma/Ayurvedic therapy
   moment — herbal oils, a therapeutic setting, authentic not clinical.
3. **Founder section** — a placeholder treatment (per the standing project
   note: real founder photo is deferred to a second draft) using the
   signature leaf motif or a tasteful silhouette treatment in the brand
   palette — NOT a generic stock headshot standing in for the real
   founder.
4. **Tier/pricing section** — supporting imagery showing the tactile
   difference a more experienced teacher brings (subtle, not literal —
   e.g., hands adjusting a pose) rather than only using badge graphics.
5. **YTT program pages** — imagery distinct per location where possible:
   the NCR studio/training-room feel for Delhi/Gurugram/Noida/Chandigarh/
   Mohali vs. the Himalayan/ashram feel for Haridwar/Dehradun/Rishikesh/
   Dharamshala — these should not reuse the same generic yoga-class photo.
6. **Locality pages** — at minimum one warm, real-feeling home-practice
   image per region cluster; do not reuse the exact same image across
   every locality page.
7. **Condition pages** (back pain, PCOD, prenatal, etc.) — one supporting
   image per page relevant to that specific context (e.g., prenatal yoga
   page shows an actual prenatal-appropriate pose/context, not a generic
   yoga stock shot).
8. **Testimonials/Founding Members section** — once real testimonials
   exist, real photos; until then, do not fill with fake stock "customer"
   photos — use a tasteful text-only treatment with the signature motif
   instead.
9. **Footer background** — a subtle, low-contrast textured or photographic
   background (e.g., a soft-focus leaf/botanical texture drawing from the
   signature motif) rather than a flat color block.

Every image must obey the color grading direction from Section 3 (warm,
natural, never cool/blue-toned or corporate-feeling) so the whole site
feels shot by one photographer for one brand, not assembled from
mismatched stock.

---

## 5. HOMEPAGE — REBUILD AS A FULL, RICH PAGE (current version is too short)

Replace the current hero→pillars→CTA→footer structure with this fuller
sequence:

1. **Hero** — full-bleed premium image (Section 4.1), confident headline
   in the display face, one primary CTA. Lead Generation Form NOT in this
   position (see Section 3's layout note).
2. **Trust bar** — real, accurate stats only (founder's 12+ years
   experience, number of localities served, YTT locations count) — no
   fabricated numbers.
3. **Three Pillars** — redesigned per Section 3, real photography per
   pillar, not emoji cards.
4. **"What's bothering you?" condition-chip row** — Back Pain, PCOD,
   Stress, Weight Loss, Prenatal — each a clickable chip/pill linking to
   its condition page, giving the homepage a problem-first entry point
   beyond the three pillars.
5. **Tier/Pricing preview** — a visually considered preview of the
   Platinum/Gold/Silver system (not just a plain table) with a link to
   the full `/pricing` page.
6. **YTT program showcase** — a horizontal scroll or carousel of the 5
   programs with real/location-appropriate imagery, linking to the YTT
   hub.
7. **Locality coverage** — a visual (map-style or elegant grid) of the
   Delhi-NCR + Chandigarh-Tricity areas served, linking into the location
   hub.
8. **Founder note** — a short, warm passage introducing Nivil Chaudhary
   (12+ years experience), using the placeholder treatment from Section
   4.3, not a generic "About Us" block.
9. **Lead Generation Form** — as its own considered section here, paired
   with a strong supporting image beside/behind it, not competing with
   the hero.
10. **Social proof / Founding Members** — per the standing project note
    (no real reviews yet): a tasteful "be among our first" framing, never
    fabricated testimonials.
11. **Blog/Wisdom preview** — 3 latest articles, once available.
12. **FAQ accordion.**
13. **Final CTA band** — can keep the current dark-green CTA treatment,
    it's one of the stronger elements already built — but pair it with a
    supporting image or the signature motif rather than a flat color
    block.
14. **Footer** — the current footer's information density (locality hubs,
    YTT locations, services list) is genuinely good — keep that
    structure, just apply the textured/photographic treatment from
    Section 4.9 instead of a flat block.

---

## 6. NON-NEGOTIABLE QUALITY BAR BEFORE CALLING THIS DONE

- Zero emoji used as functional iconography anywhere in the production
  build.
- Zero pages where a form is the largest visual element above the fold —
  every page leads with real imagery or considered typography first.
- Every one of the required images in Section 4 is present, on-brand, and
  distinct (no image reused across more than 2-3 pages).
- The signature leaf motif from Section 3 appears consistently across at
  least 5 different contexts sitewide (section dividers, tier badges,
  footer texture, hero overlay, etc.) so it reads as a deliberate brand
  device, not a one-off.
- Take a full-page screenshot of the rebuilt homepage and self-assess: if
  this could be mistaken for a generic AI-generated wellness template,
  it is not done — go back to Section 1, step 2.
- Confirm all existing content/pricing/YTT/schema requirements from the
  master build plan are still intact — this is a visual and structural
  rebuild, not a content reset. Do not lose or alter any confirmed
  business fact (pricing matrix, founder details, certifying-body
  wording, contact info) while rebuilding the design.
