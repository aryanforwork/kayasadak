# PRD.md — KayaSadhak Product Requirements Document
### v2 — updated with founder, pricing, teacher-tier, and YTT-affiliation details confirmed by the client. Per the client's direction, we are now proceeding to build with this current information; remaining gaps are still tracked, not blocking.

---

## 1. Problem Statement

*(unchanged from v1 — see below)*

Delhi-NCR's home-yoga category is real and growing (India's yoga market is
projected to grow at a double-digit CAGR through the early 2030s, with the
30-50 age bracket and female segment as the largest buyer groups — see
SEO-STRATEGY.md §1 for sourcing), but it is currently dominated online by
pan-India aggregator platforms — most notably **ommantrayoga.com**, our
named reference competitor — that win on sheer page volume but lose on
genuine trust: reused stats and testimonials on every page, no visible
pricing, a vague "founded by a team of enthusiasts" origin story with no
named/certified founder, a fake-looking accreditation badge, and at least
one broken location hub page (Chandigarh UT) despite claiming coverage
there. Full findings remain in the standing competitor research file
(`kayasadhak-competitor-research-ommantrayoga.md`).

KayaSadhak now has exactly what that competitor lacks: a **named, real
founder**, **transparent, calculated pricing**, and **named certifying-body
affiliations** — this PRD update locks those facts in as build-ready
specification, not placeholders.

## 2. Target Users (Personas)

*(unchanged from v1)* — Busy Urban Professional, Health-Motivated Woman,
Aspiring Yoga Teacher. See SITEMAP-AND-IA.md and CONTENT-AND-SCHEMA-SPEC.md
for how each persona maps to page structure.

## 3. Core Service Lines

### 3.1 Yoga at Home — NOW FULLY SPECIFIED: Three-Tier Teacher System

KayaSadhak's home-yoga offering is not a single flat service — it is
**three distinct, bookable teacher tiers**, each with its own qualification
bar and price point. This is a genuinely new, structurally significant
differentiator vs. the reference competitor (which offers no teacher-tier
choice at all — every booking is undifferentiated).

| Tier | Teacher Qualification (Option A — Aligned to Price Hierarchy) | Price per session |
|---|---|---|
| **Platinum** | Complete Masters + Graduation + Advanced Teacher Training Course + 10+ years experience | ₹1,000 |
| **Gold** | Graduation in Yoga + Advanced Teacher Training Course + 7+ years experience | ₹750 |
| **Silver** | Graduation + Diploma in Yoga + 5+ years experience | ₹500 |

**CONFIRMED — display/listing order vs. price/qualification ranking:**
- **Display order (how tiers are LISTED on every page — pricing table
  columns, teacher directory filters, dropdowns):** Platinum first (₹1,000, Masters+10yrs), then
  Gold (₹750, Grad+7yrs), then Silver (₹500, Diploma+5yrs). Display order and price hierarchy are now aligned: Platinum is listed first as the top-tier service.

**CONFIRMED — tier system now extends beyond "Yoga at Home":** applies
consistently across Corporate Yoga, Senior Citizen Yoga, Kids Yoga, and
Prenatal-Postnatal Yoga (the exact "individual/home-delivered" set this
document previously recommended) — each of these service pages now needs
its own Platinum/Gold/Silver pricing table, same structure and same
per-session rates as §3.1's matrix. Yoga for Studio and Yoga for Hospital
remain outside the tier system for now (different delivery model — see
§3.2 in the prior version of this doc).

**Monthly package pricing (calculated from the per-session rates and the
three frequency options the founder specified):**

| Tier | 3 days/week (12 sessions/month) | 4 days/week (16 sessions/month) | 5 days/week (20 sessions/month) |
|---|---|---|---|
| Platinum (₹1,000/session) | ₹12,000/month | ₹16,000/month | ₹20,000/month |
| Gold (₹750/session) | ₹9,000/month | ₹12,000/month | ₹15,000/month |
| Silver (₹500/session) | ₹6,000/month | ₹8,000/month | ₹10,000/month |

This 3×3 matrix (9 total price points) is now the locked, calculated basis
for the `/pricing` page and every service/locality page's pricing display —
see CONTENT-AND-SCHEMA-SPEC.md §1 and §3 for the exact component spec and
schema requirements. All figures above are simple, direct multiplication of
the founder's stated per-session rate × the stated monthly session count for
each frequency plan — no figure here was invented or estimated.

### 3.2 Other Yoga Services
Yoga for Studio and Yoga for Hospital: unchanged structurally, no tier
pricing (different delivery model, pricing TBD separately).
**CONFIRMED:** Corporate Yoga, Senior Citizen Yoga, Kids Yoga, and
Prenatal/Postnatal Yoga each carry the full Gold/Silver/Platinum pricing
matrix from §3.1 — see CONTENT-AND-SCHEMA-SPEC.md for the per-page spec.

### 3.3 Yoga Teacher Training (YTT) — Certifying Bodies Now Confirmed

KayaSadhak's YTT programs (200/300/500-hour, 200-hour Kundalini, 50-hour
Yin) are affiliated with:
1. **Indian Federation of Yoga**
2. **Yoga Alliance (USA)**
3. **AYUSH Ministry** (Ministry of AYUSH, Government of India)

**CONFIRMED relationship type:** KayaSadhak has a tie-up/partnership
agreement with all three bodies (Indian Federation of Yoga, Yoga Alliance
USA, AYUSH Ministry). Site copy must state this exactly as "in tie-up/
partnership with [body]" — never upgraded to stronger language like
"certified by" or "registered under," since a partnership/agreement is a
distinct, more limited claim than a formal certification or government
registration. This applies with particular care to the AYUSH Ministry
entry, being a government body — "tie-up/partnership" is the confirmed,
accurate wording; do not substitute "AYUSH certified" or "AYUSH
recognized" anywhere on the site.

**Noteworthy relationship to flag for the founder, not to resolve here:**
"Indian Federation of Yoga" is also one of the six category websites we
deep-analyzed as a competitor earlier in this project
(`indianfederationyoga.org` — see the standing 6-site category analysis).
If KayaSadhak's YTT is affiliated with/certified through this same
organization, the relationship is more accurately "certifying partner we
also compete with in the open YTT market" than a pure competitor — worth
the founder's awareness, no action needed for the build itself.

### 3.4 YTT Service Locations — Broader Than the Home-Yoga Footprint

**This is a confirmed, deliberate scope difference and must be encoded
correctly across the sitemap and SEO strategy — do not merge it with the
home-yoga service area.**

- **Home yoga, corporate, kids, senior citizen, prenatal, Panchkarma, and
  all other individually-delivered services:** Delhi-NCR + Chandigarh
  Tricity ONLY (unchanged from the earlier scope decision in this
  project).
- **Yoga Teacher Training (YTT) specifically:** Delhi, Gurugram, Noida,
  Chandigarh, Mohali, **plus Haridwar, Dehradun, Rishikesh, and
  Dharamshala** — the classic Uttarakhand/Himachal yoga-training belt,
  where residential/intensive YTT demand and search volume is
  historically concentrated nationally and internationally. This is a
  genuine, intentional expansion for the YTT line only.

**CONFIRMED:** all 5 YTT programs (200/300/500-hour, Kundalini, Yin) run
at all 9 locations — no per-location program variation to account for.

See SITEMAP-AND-IA.md §2b for the resulting URL structure and
SEO-STRATEGY.md §2 for the resulting keyword-cluster implications (the
Rishikesh/Haridwar YTT search category is large and highly competitive
nationally, distinct from our Delhi-NCR local-service keyword strategy).

### 3.5 Adjacent Instructor Services (Dance, Zumba, Arabic) — unchanged, Phase 2
See PRD v1 / SITEMAP-AND-IA.md — still recommended for Phase 2, pending
confirmation, to keep the launch homepage focused (Guardrail #11).

## 4. Success Metrics
*(unchanged from v1, plus one addition):*
- The `/pricing` page and every relevant service/locality page must
  display the full, accurate 3×3 Gold/Silver/Platinum pricing matrix with
  zero calculation errors — independently re-verified by Sub-Agent 12
  against the source rates in §3.1 above, not just copied forward.

## 5. Non-Goals
*(unchanged from v1)* — still explicitly Delhi-NCR + Chandigarh Tricity for
all non-YTT services; YTT's broader footprint (§3.4) is the one deliberate,
confirmed exception, not a signal to expand other service lines similarly
without further confirmation.

## 6. Brand Facts — Founder Details Now Confirmed

- **Founder name:** Nivil Chaudhary (corrected spelling, confirmed final).
- **Founder experience:** 12+ years in the yoga/wellness service-provider
  field, holds full relevant qualifications (specific credential names
  not yet itemized — do not invent specific certificate names; use
  general "fully qualified, 12+ years of experience" framing until exact
  credentials are provided).
- **Founder photo + teacher photos:** confirmed coming in a second draft.
  Build the first draft with photo placeholders left visibly blank/pending
  (not a stock photo, not an AI-generated placeholder presented as real) —
  see DESIGN-SYSTEM.md and Sub-Agent 7's updated note.
- **Business contact / WhatsApp number:** +91-8273264561 — confirmed
  number for every WhatsApp CTA, GBP contact field, and schema
  `telephone` field site-wide.
- **Business email (confirmed, two addresses):** `contact@kayasadhak.com`
  (primary/official, use in schema `email` field and as the main
  displayed contact) and `kayasadhak@gmail.com` (secondary — display
  alongside the primary on the Contact page footer as a backup contact).
- **Social media (confirmed handles, username "kayasadhak" throughout):**
  Instagram (instagram.com/kayasadhak), Facebook (facebook.com/kayasadhak),
  Twitter/X (twitter.com/kayasadhak), YouTube (youtube.com/@kayasadhak) —
  all four go in the footer and in `Organization.sameAs` schema.
- Business/brand name, logo, and category positioning: unchanged from v1.

**Still open on the founder profile, deferred to second draft (not
blocking this build):** founder photo, teacher photos, itemized specific
certificate names for the founder.

## 6a. Lead Generation Form — New, Site-Wide Conversion Element

**CONFIRMED requirement:** a compact lead-generation form (not just a
WhatsApp button) on the homepage and on other key pages (service pages,
locality pages, YTT pages), which captures basic visitor info and then
routes directly into a WhatsApp conversation — not a generic contact-form
email submission. See CONTENT-AND-SCHEMA-SPEC.md new §0 and
DESIGN-SYSTEM.md §4a for the exact component spec and field list.

## 7. Social Proof Strategy
*(unchanged from v1)* — Founding-Members pricing framing was explicitly
declined by the client ("Not include" — recorded in the open-items
tracking); real reviews will be developed later, once real sessions begin,
per the client's own stated plan. No fabrication either way.

## 8. Updated Open Items — FINAL ROUND before Antigravity build

**Resolved this round (in addition to everything resolved previously):**
- Founder name ✅ Nivil Chaudhary
- Founder experience/qualification framing ✅ (12+ years, fully qualified;
  specific certificate names deferred, not blocking)
- Tier display order ✅ Platinum, Gold, Silver (listing order only — price/
  qualification ranking unchanged, see §3.1)
- Tier system extended to other services ✅ Corporate, Senior Citizen,
  Kids, Prenatal/Postnatal
- Certifying-body relationship type ✅ tie-up/partnership with all three
- All 5 YTT programs at all 9 locations ✅ confirmed, no per-location variation
- Business email ✅ contact@kayasadhak.com + kayasadhak@gmail.com
- Social media handles ✅ all four platforms, username "kayasadhak"
- Lead-generation form (homepage + key pages, routes to WhatsApp) ✅ spec added

**Explicitly deferred to a second draft (build now with existing info,
per client direction — do not treat as blocking):**
- Founder photo, teacher photos
- Founder's itemized specific certificate names
- YTT lead faculty per program, YTT course fees
- Registered business address, domain name final reconfirmation

This is the final information round before this package goes to
Antigravity for build — proceed with build using everything confirmed
above; the deferred items above are explicitly non-blocking per the
client's own instruction.
