# CONTENT-AND-SCHEMA-SPEC.md — KayaSadhak
### v2 — adds the Pricing page spec, updates the Yoga-at-Home service page for the tier system, and updates YTT schema for the three confirmed certifying bodies. All other v1 page specs (locality pages, condition pages, homepage, teacher profiles) are unchanged and carried forward.

Standing rule unchanged: schema must never claim anything not also
visibly shown on the page.

---

## 0. NEW — Lead Generation Form (Site-Wide Component)

Appears on: homepage hero, `/pricing`, `/services/*` (all 5 tiered
service pages), `/yoga-teacher-at-home/*` locality pages, and
`/yoga-teacher-training/*` pages. Fields: Name, Phone, Service Interest
(dropdown of the service lines), optional Locality. Submit action:
build a pre-filled WhatsApp message from the field values (e.g. "Hi, I'm
[Name], interested in [Service] in [Locality], please contact me at
[Phone]") and open `https://wa.me/918273264561?text=...` — this is a
direct-to-WhatsApp lead form, not an email-only contact form. See
DESIGN-SYSTEM.md §4a for the component spec.

## 1. UPDATED — Pricing Page (`/pricing`) and Yoga-at-Home Service Page (`/services/yoga-at-home`)

Both pages share the same core pricing content block (the second is the
service-specific version, the first is the dedicated comparison page) —
build the matrix as a single reusable component per DESIGN-SYSTEM.md §4.

**Content structure:**
1. H1 (pricing page): "KayaSadhak Pricing — Gold, Silver & Platinum Home Yoga Plans"
2. Answer-first: one sentence stating the three tiers exist and what
   distinguishes them (qualification bar, not just price)
3. The full pricing table (real HTML `<table>`), rows in the CONFIRMED
   display order Platinum → Gold → Silver:

   | | 3 days/week (12 sessions) | 4 days/week (16 sessions) | 5 days/week (20 sessions) |
   |---|---|---|---|
   | **Platinum** — ₹1,000/session | ₹12,000/month | ₹16,000/month | ₹20,000/month |
   | **Gold** — ₹750/session | ₹9,000/month | ₹12,000/month | ₹15,000/month |
   | **Silver** — ₹500/session | ₹6,000/month | ₹8,000/month | ₹10,000/month |

4. Per-tier qualification explainer directly below the table, same
   Platinum/Gold/Silver order, wording pulled exactly from PRD.md §3.1.
5. FAQ: "Which plan is right for me?", "Can I switch tiers later?", etc.
6. The Lead Generation Form (§0 above), tier-aware pre-filled message.
7. **CONFIRMED — same table structure required on 4 additional service
   pages:** `/services/corporate-yoga`, `/services/senior-citizen-yoga`,
   `/services/kids-yoga`, `/services/prenatal-postnatal-yoga` each get
   their own copy of this pricing table (same rates, same order) per
   PRD.md §3.2. `/services/yoga-for-studio` and `/services/yoga-for-hospital`
   do NOT get this table (different delivery/pricing model, still open).
8. Pricing is treated as uniform across all served localities unless/until
   told otherwise — no locality-specific price variants in this draft.

**Schema (JSON-LD):**
```
Service (name: e.g. "Yoga at Home" / "Corporate Yoga" / "Senior Citizen Yoga" / "Kids Yoga" / "Prenatal-Postnatal Yoga" — one per applicable page)
  offers: [ ... 9 Offer entries, one per tier×frequency combination, exactly matching that page's visible table — zero deviation ]
```
This 9-offer schema block is now required on FIVE separate pages (§1.7
above), not just one. Every occurrence must be independently checked
against its own page's visible table at build time and again at QA — see
TECHNICAL-SEO-AND-GUARDRAILS.md Guardrail #17, which now applies across
all five pages, not just `/pricing`.

---

## 2. UPDATED — YTT Program Page (`/yoga-teacher-training/{program}`)

**Content structure (updated section 5 only, rest unchanged from v1):**
5. Certifying-body relationship — CONFIRMED as "in tie-up/partnership
   with" all three, stated exactly that way, never upgraded to
   "certified by" or "registered under":
   - Indian Federation of Yoga
   - Yoga Alliance (USA)
   - AYUSH Ministry (Government of India)
   Example approved phrasing: "KayaSadhak's YTT programs are offered in
   tie-up with the Indian Federation of Yoga, Yoga Alliance (USA), and
   the AYUSH Ministry." Do not use "AYUSH certified" anywhere on the site.
   Lead faculty per program: not yet available, deferred to second draft
   — use general "led by our expert faculty" framing for now, never a
   specific invented name.

**Schema (JSON-LD) — updated:**
```
Course
  ...
  provider: Organization (KayaSadhak)
  hasCredential / recognizedBy (or equivalent property per current
    schema.org guidance at build time): list all three confirmed
    tie-up/partner bodies — Indian Federation of Yoga, Yoga Alliance
    (USA), AYUSH Ministry — described as partnership/tie-up relationships,
    not certifications
```

## 3. NEW — YTT Location Pages (`/yoga-teacher-training/locations/{location}`)

**Content structure:**
1. H1: "Yoga Teacher Training in {Location}"
2. Answer-first: which specific program(s) run at this location
   (`[CLIENT TO CONFIRM]` per SITEMAP-AND-IA.md §2b — do not assume all 5
   programs run everywhere)
3. For the four non-NCR locations (Haridwar, Dehradun, Rishikesh,
   Dharamshala): real local context appropriate to a residential/
   intensive training environment (accommodation, setting, why this
   location suits YTT) — distinct in tone from the NCR home-services
   locality pages, since this is a different buyer journey (an aspiring
   teacher considering a residential program, not a local resident
   booking home sessions)
4. FAQ, faculty, CTA — as per the standard YTT program page pattern

**Schema:** `Course` (per program available at that location) +
`BreadcrumbList`. Do NOT reuse `LocalBusiness`/`areaServed` scoped to the
home-services footprint on these pages — they are a structurally separate
part of the business (see SITEMAP-AND-IA.md §2b's explicit warning
against merging the two location hubs).

---

## 3a. NEW — Homepage `Organization` Schema Update (Confirmed Facts)

`Organization.founder`: Nivil Chaudhary. `Organization.email`:
`contact@kayasadhak.com` (primary); `kayasadhak@gmail.com` as a secondary
contactPoint. `Organization.sameAs`: the four confirmed social URLs —
instagram.com/kayasadhak, facebook.com/kayasadhak, twitter.com/kayasadhak,
youtube.com/@kayasadhak. `Organization.areaServed` remains scoped to
Delhi-NCR + Chandigarh Tricity for all non-YTT services (unchanged
principle from v1 — YTT's separate footprint is scoped only on its own
pages per §2 above, never merged into this site-wide Organization scope).
Homepage also carries the Lead Generation Form (§0) in the hero section.

## 4-9. All Other Page Types
*(Locality pages, condition pages, other service pages, homepage, teacher
profile pages — unchanged from v1. See v1 spec for full detail. Teacher
profile pages now additionally display the tier badge per
DESIGN-SYSTEM.md §4, and every teacher's tier assignment must match a
real, verified qualification per PRD.md §3.1's stated bar for that tier —
never assign a tier badge that isn't actually earned.)*
