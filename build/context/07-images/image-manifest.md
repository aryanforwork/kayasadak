# Site-Wide Image & Asset Direction Manifest — KayaSadhak (v2.0)

> **Single Source of Truth for Image Direction, Asset Inventory, Responsive Variants, and Anti-Stock Guidelines**  
> **Target Path:** `/context/07-images/image-manifest.md`  
> **Status:** Production Ready (Phase 2 Locked)  
> **Canonical Domain:** `https://www.kayasadhak.com`

---

## 1. Executive Summary & Image Direction Policy

### 1.1 Anti-Stock Photography Philosophy
KayaSadhak enforces a strict **Real Photography Only** policy. Generic stock photos of models pretending to be instructors, fake corporate team shots, or AI-generated realistic human faces presented as actual staff/founders are **strictly prohibited**.

- **Why:** KayaSadhak's primary differentiator against aggregators and competitors (such as ommantrayoga.com) is transparency, verified teacher credentials, and authentic practice.
- **Rule:** Every human photograph must be of real KayaSadhak founder Nivil Chaudhary, verified instructors, or actual home session setups.
- **Deferred Photo Handling (`[DEFERRED TO SECOND DRAFT]`):** Until real high-resolution staff headshots and ashram photos land in Draft 2, all personnel and founder headshots MUST use clean, neutral SVG monogram placeholders in brand colors (`#1F4A3C`, `#FAF7F1`, `#C08A3E`). Never substitute generic stock faces.

### 1.2 Alt-Text & Image Accessibility Standards
All site imagery must comply with standard WCAG 2.1 AA accessibility guidelines and AI search crawler (AEO/GEO) indexing requirements:

- **Descriptive & Contextual:** Alt text must describe the visual action and context accurately (e.g., "KayaSadhak Platinum instructor guiding student in Bhujangasana cobra pose during a home session in South Delhi").
- **No Keyword Stuffing:** Strictly ban SEO spamming like `alt="best cheap home yoga teacher south delhi noida gurugram"`.
- **HTML Implementation:** Every image tag must specify explicit `width`, `height`, `loading="lazy"` (except above-the-fold heroes), `decoding="async"`, and fallback `alt` attributes.
- **Decorative Images:** Purely decorative pattern dividers or SVG vectors must use `alt=""` and `aria-hidden="true"`.

---

## 2. Responsive Hero Asset Strategy (Desktop vs. Mobile)

Mobile viewports (375px–430px) require vertical composition (4:5 or 3:4 aspect ratio) to keep subject matter focused while reserving space for the primary WhatsApp Lead Generation Form. Simple CSS cropping cuts off vital visual context.

### 2.1 Hero Specifications Table

| Hero Placement | Desktop Aspect / Dimensions | Mobile Aspect / Dimensions | File Formats | Loading Strategy |
|---|---|---|---|---|
| **Homepage Hero** | 16:9 (1920×1080 / 1600×900) | 4:5 (800×1000) | `.avif`, `.webp` (fallback `.jpg`) | Eager (`fetchpriority="high"`) |
| **Service Tier Heroes** | 16:9 (1600×900 / 1440×810) | 4:5 (800×1000) | `.avif`, `.webp` (fallback `.jpg`) | Eager |
| **YTT Destination Heroes** | 16:9 (1920×1080 / 1600×900) | 4:5 (800×1000) | `.avif`, `.webp` (fallback `.jpg`) | Eager |
| **Locality Cluster Heroes** | 16:9 (1600×900 / 1440×810) | 4:5 (800×1000) | `.avif`, `.webp` (fallback `.jpg`) | Eager |
| **Condition Hub Heroes** | 16:9 (1600×900 / 1440×810) | 4:5 (800×1000) | `.avif`, `.webp` (fallback `.jpg`) | Eager |

### 2.2 Standard Responsive `<picture>` Markup Implementation
```html
<picture>
  <!-- Desktop & Tablet (≥768px) -->
  <source srcset="/assets/images/heroes/[hero-name]-desktop.avif 1x, /assets/images/heroes/[hero-name]-desktop@2x.avif 2x" type="image/avif" media="(min-width: 768px)">
  <source srcset="/assets/images/heroes/[hero-name]-desktop.webp 1x, /assets/images/heroes/[hero-name]-desktop@2x.webp 2x" type="image/webp" media="(min-width: 768px)">
  
  <!-- Mobile (<768px) - Recomposed 4:5 Vertical Asset -->
  <source srcset="/assets/images/heroes/[hero-name]-mobile.avif 1x, /assets/images/heroes/[hero-name]-mobile@2x.avif 2x" type="image/avif">
  <source srcset="/assets/images/heroes/[hero-name]-mobile.webp 1x, /assets/images/heroes/[hero-name]-mobile@2x.webp 2x" type="image/webp">
  
  <!-- Fallback Image -->
  <img src="/assets/images/heroes/[hero-name]-desktop.jpg" alt="Descriptive contextual alt text" width="1600" height="900" fetchpriority="high" decoding="async" class="ks-hero-img">
</picture>
```

---

## 3. Deferred Photo Tracking & Neutral SVG Placeholder Specifications (`[DEFERRED TO SECOND DRAFT]`)

Pending receipt of verified high-res headshots and ashram/session photography in Draft 2, all personnel (founder Nivil Chaudhary and faculty members across Platinum, Gold, and Silver tiers) MUST use neutral SVG monogram placeholders.

### 3.1 Deferred Personnel Asset Roster

| Asset Key | Usage Location | Target Subject / Tier | Placeholder Ratio | Status |
|---|---|---|---|---|
| `founder-nivil-chaudhary.svg` | Homepage, About, Contact, Lead Form | Founder Nivil Chaudhary | 4:5 & 1:1 | Deferred to Draft 2 |
| `teacher-platinum-01.svg` | Our Teachers Directory, Locality Cards | Verified Platinum Instructor #1 | 1:1 & 4:5 | Deferred to Draft 2 |
| `teacher-platinum-02.svg` | Our Teachers Directory, Locality Cards | Verified Platinum Instructor #2 | 1:1 & 4:5 | Deferred to Draft 2 |
| `teacher-gold-01.svg` | Our Teachers Directory, Locality Cards | Verified Gold Instructor #1 | 1:1 & 4:5 | Deferred to Draft 2 |
| `teacher-gold-02.svg` | Our Teachers Directory, Locality Cards | Verified Gold Instructor #2 | 1:1 & 4:5 | Deferred to Draft 2 |
| `teacher-silver-01.svg` | Our Teachers Directory, Locality Cards | Verified Silver Instructor #1 | 1:1 & 4:5 | Deferred to Draft 2 |
| `teacher-silver-02.svg` | Our Teachers Directory, Locality Cards | Verified Silver Instructor #2 | 1:1 & 4:5 | Deferred to Draft 2 |

---

## 4. Technical Implementation & Directory Organization Summary

### 4.1 Assets Directory Hierarchy (`/assets/images/`)
```
/assets/images/
├── brand/
│   ├── logo.svg
│   └── favicon.ico
├── heroes/
│   ├── hero-home-desktop.webp
│   ├── hero-home-mobile.webp
│   ├── hero-svc-*-desktop.webp
│   ├── hero-svc-*-mobile.webp
│   ├── hero-ytt-*-desktop.webp
│   ├── hero-ytt-*-mobile.webp
│   ├── hero-cond-*-desktop.webp
│   └── loc-*.webp
├── cards/
│   ├── card-*.webp
│   └── service-card-*.webp
├── partners/
│   ├── partner-ify.svg
│   ├── partner-yoga-alliance.svg
│   └── partner-ayush.svg
├── team/
│   ├── founder-nivil.svg
│   ├── teacher-platinum-*.svg
│   ├── teacher-gold-*.svg
│   └── teacher-silver-*.svg
└── reviews/
    └── review-thumb-*.webp
```
