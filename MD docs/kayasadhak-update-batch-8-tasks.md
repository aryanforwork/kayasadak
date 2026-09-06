# KAYASADHAK — WEBSITE UPDATE BATCH (8 Tasks)
### Each task below is a standalone, individually-implementable prompt for Antigravity. Treat each as its own unit of work with its own acceptance criteria — do not bundle them into one giant change. Several open items need your (the client's) confirmation before the owning sub-agent can call its task fully done — these are marked `[CLIENT TO CONFIRM]` and must not be filled in with invented detail.

---

## 0. What's Changing, in Plain Terms (read this first)

A new service line — **Personal Fitness Trainer** — is being added alongside Yoga and YTT. Panchkarma steps back from being a homepage "pillar" (it likely still exists as its own service page — see Task 5's open item). The Gold/Silver/Platinum display order is being revised to **Silver → Gold → Platinum**, which — usefully — now matches ascending price order exactly, since Platinum is already the highest-priced tier (₹1,000) and Silver the lowest (₹500). This resolves the earlier "display order doesn't match price order" caution from our guardrails; that caution can now be relaxed for the yoga tiers, but the SAME simple ascending logic must be applied consistently to the new Personal Fitness Trainer tiers too.

---

## TASK 1 — Logo Tagline Change

**Objective:** Update the tagline text under the KayaSadhak wordmark (currently "HOME YOGA • YTT • PANCHKARMA" or similar, per the last confirmed design) to reflect the three services now being emphasized.

**Exact prompt for Antigravity:**
```
Update the site-wide logo lockup tagline (the small text beneath
"KayaSadhak" in the header, footer, and anywhere else the tagline
appears) to read exactly:

HOME YOGA * PERSONAL FITNESS TRAINER * YTT

Keep the existing typography treatment, letter-spacing, and color
(turmeric-gold accent, per DESIGN-SYSTEM.md) -- only the text content
changes, not the styling. Update every instance sitewide (header,
footer, favicon-adjacent branding if used, any exported logo lockup
files) -- do a full sitewide search for the old tagline text to make
sure none is left behind.
```

**Files/pages affected:** Global header, footer, `DESIGN-SYSTEM.md` (update the logo usage reference).

**Guardrail:** Search the entire built site for the old tagline text after this change — a stale tagline surviving on even one page is a real, visible inconsistency a visitor could notice.

---

## TASK 2 — Add a Sliding/Hero Card for Personal Fitness Trainer

**Objective:** Add a new card to the homepage's sliding/carousel card set (the service-preview cards near the hero) specifically for Personal Fitness Trainer.

**Exact prompt for Antigravity:**
```
Add one new card to the homepage's sliding hero card carousel,
positioned alongside the existing Home Yoga and YTT cards, for
"Personal Fitness Trainer." Follow the exact same card component spec
already used for the other cards (image + service name + short benefit
line + trust-icon row + WhatsApp-deep-link CTA), per DESIGN-SYSTEM.md's
service card component.

Card content:
- Title: "Personal Fitness Trainer"
- Short benefit line: "Certified 1-on-1 fitness training at your home
  across Delhi NCR & Chandigarh Tricity"
- Price teaser badge: "Rs 1,000+" (lowest tier's starting price -- see
  Task 3 for full pricing)
- CTA: links to the new dedicated Personal Fitness Trainer page (Task 3)

Use real photography direction per DESIGN-SYSTEM.md's imagery
philosophy (no generic stock gym photos, no emoji) -- flag as pending
if a real image isn't available yet, following the same placeholder
discipline already used for founder/teacher photos.
```

**Files/pages affected:** Homepage hero/carousel section, `CONTENT-AND-SCHEMA-SPEC.md` (add this card to the homepage spec).

**Depends on:** Task 3 (the dedicated page this card links to) should exist before this card goes live, or the CTA will point to a 404.

---

## TASK 3 — New Navbar Item + Fully Dedicated Personal Fitness Trainer Page

**Objective:** Add "Personal Fitness Trainer" to the main navigation and build a complete, dedicated page for it — structured the same way as the existing tiered service pages (e.g., Yoga at Home).

**Exact prompt for Antigravity:**
```
1. Add "Personal Fitness Trainer" as a new item in the main site
   navigation, positioned logically alongside "Home Yoga" and "YTT
   Courses."

2. Build a new page at /services/personal-fitness-trainer, following
   the exact same structural pattern as /services/yoga-at-home
   (CONTENT-AND-SCHEMA-SPEC.md Section 1): answer-first opening, tiered
   pricing table, teacher-tier qualification explainer, what a session
   looks like, service area, FAQ, lead-generation CTA.

3. TIER PRICING (confirmed by the client):
   | Tier | Price/session |
   |---|---|
   | Silver | Rs 1,000 |
   | Gold | Rs 1,500 |
   | Platinum | Rs 2,000 |
   Display order: Silver, then Gold, then Platinum (ascending -- this
   also matches ascending price order, unlike the earlier yoga-tier
   situation, so there is no display-order-vs-price-order mismatch to
   flag here).

4. TIER QUALIFICATION CRITERIA -- RECOMMENDED FRAMEWORK, PENDING CLIENT
   APPROVAL (the client asked us to design this; do not present as
   confirmed fact until approved):
   | Tier | Recommended qualification bar |
   |---|---|
   | Silver | Certified Personal Trainer (e.g. K11/ACE/equivalent recognized certification) + 3+ years experience |
   | Gold | Certified Personal Trainer + one specialized certification (e.g. strength & conditioning, sports nutrition) + 5+ years experience |
   | Platinum | Advanced-level certification (e.g. NASM-CPT or equivalent master-level credential) + a specialized certification (rehab/sports-specific training) + 8+ years experience |
   [CLIENT TO CONFIRM]: approve this framework, adjust it, or provide
   your own real criteria before this table goes live -- do not publish
   invented-but-plausible certification claims as fact.

5. MONTHLY PRICING MATRIX (calculated, same 12/16/20-session frequency
   structure as the yoga tiers):
   | Tier | 3 days/wk (12 sessions) | 4 days/wk (16 sessions) | 5 days/wk (20 sessions) |
   |---|---|---|---|
   | Silver (Rs 1,000) | Rs 12,000 | Rs 16,000 | Rs 20,000 |
   | Gold (Rs 1,500) | Rs 18,000 | Rs 24,000 | Rs 30,000 |
   | Platinum (Rs 2,000) | Rs 24,000 | Rs 32,000 | Rs 40,000 |

6. Service area: same as all other individual service lines -- Delhi
   NCR & Chandigarh Tricity (see Task 8 for the exact phrasing pattern
   to use).

7. Schema: Service + 9 Offer entries (matching the table above exactly,
   independently verified -- same Guardrail #17 discipline used for the
   yoga tiers) + FAQPage + BreadcrumbList.

RULES: No fabricated testimonials or review counts. Use the humanizer
skill (web-copy-humanizer) for all page copy -- no AI-tell phrasing, no
puffery, vary sentence rhythm, written like a real trainer talking to a
visitor.
```

**Files/pages affected:** Main navigation, new page `/services/personal-fitness-trainer`, `SITEMAP-AND-IA.md` (add this page + update the services hub list), `CONTENT-AND-SCHEMA-SPEC.md` (add this page's spec).

**Open item:** `[CLIENT TO CONFIRM]` the tier qualification framework in step 4 before launch.

---

## TASK 4 — "Find Your Ideal KayaSadhak Match" Section: Add Female/Male Instructor Cards

**Objective:** Within the "Find Your Ideal KayaSadhak Match" section, add two cards letting a visitor choose a Female Instructor or Male Instructor preference, specifically in the Studio context.

**Exact prompt for Antigravity:**
```
In the "Find Your Ideal KayaSadhak Match" section, add two new cards:
"Female Instructor" and "Male Instructor" -- presented as a preference
selector specifically for Studio bookings (the physical Sector 45,
Noida studio, not the home-visit service, which already has its own
female-teacher-on-request pattern used on the condition pages).

Each card should have a short line of copy (e.g., "Prefer a female
instructor for your studio classes? Let us know when you book.") and a
CTA that pre-fills this preference into the studio's Lead Generation
Form / WhatsApp message.

Follow the existing card component styling from DESIGN-SYSTEM.md -- no
new ad hoc component design.
```

**Files/pages affected:** The "Find Your Ideal KayaSadhak Match" section (confirm exact page — likely homepage or the studio page at `/studio-noida-sector-45`).

**Open item:** `[CLIENT TO CONFIRM]` — please confirm this section lives on the studio page specifically (as the note suggests), not the general homepage, since the instructor-gender-preference framing is described as being "in a Studio" context. If it should also appear elsewhere, let us know.

---

## TASK 5 — Three Pillars Section: Replace Panchkarma With Personal Fitness Trainer

**Objective:** On the homepage's "Three Pillars of Holistic Wellness" section, remove Panchkarma/Ayurveda as the third pillar and replace it with Personal Fitness Trainer, using the best available imagery and full detail.

**Exact prompt for Antigravity:**
```
In the homepage's "Three Pillars" section, replace the third pillar
(currently Panchkarma/Ayurveda) with "Personal Fitness Trainer." The
three pillars are now: (1) Personal Home Yoga, (2) Yoga Teacher
Training (YTT), (3) Personal Fitness Trainer.

For the new third pillar card:
- Use the same card structure as the other two pillars (icon/image,
  title, 2-3 sentence description, key bullet list, CTA button)
- Description should cover: certified trainers, home-based sessions,
  tier system (Silver/Gold/Platinum)
- Use the best available real photography per DESIGN-SYSTEM.md's
  imagery philosophy -- this is explicitly called out as needing
  "all best detailed and highest best image," so prioritize genuine,
  premium-quality photography direction for this card over the other
  two if resources are limited
- CTA links to /services/personal-fitness-trainer (Task 3)

Do NOT delete the Panchkarma service page itself -- it simply steps
back from being one of the homepage's three featured pillars. Keep it
accessible from the Services hub navigation.
```

**Files/pages affected:** Homepage "Three Pillars" section, `CONTENT-AND-SCHEMA-SPEC.md` Section 5 (homepage spec), `PRD.md` Section 3 (update pillar framing if referenced).

**Open item:** `[CLIENT TO CONFIRM]` — please confirm Panchkarma should remain live as a normal (non-featured) service page rather than being removed from the site entirely. We're proceeding on the assumption that only its "pillar" prominence is being removed, not the service itself — correct us if that's wrong.

---

## TASK 6 — Revised Tier Display Order: Silver → Gold → Platinum, Sitewide

**Objective:** Change the confirmed tier display order from the earlier "Platinum, Gold, Silver" to "Silver, Gold, Platinum" everywhere tiers are shown — for both the existing yoga-tier pricing tables and the new Personal Fitness Trainer tiers.

**Exact prompt for Antigravity:**
```
Change the sitewide tier display order from "Platinum, Gold, Silver" to
"Silver, Gold, Platinum" (ascending) everywhere a tier list, pricing
table, badge row, filter, or dropdown appears. This applies to:
- /pricing (main pricing matrix page)
- /services/yoga-at-home
- /services/corporate-yoga
- /services/senior-citizen-yoga
- /services/kids-yoga
- /services/prenatal-postnatal-yoga
- /services/personal-fitness-trainer (new, Task 3 -- build it in this
  order from the start)
- The tier badge system in DESIGN-SYSTEM.md (update the documented
  display order)
- Any teacher-directory filter or dropdown using tier as a sort/filter
  option

IMPORTANT SIMPLIFICATION: with this change, display order now matches
ascending price order for BOTH service lines (Yoga: Silver Rs 500 ->
Gold Rs 750 -> Platinum Rs 1,000; Fitness Trainer: Silver Rs 1,000 ->
Gold Rs 1,500 -> Platinum Rs 2,000). This resolves the earlier
documented mismatch between display order and price/qualification
ranking -- the special caution in the old Guardrail #18 (about Platinum
being listed first despite having the lowest qualification bar) is no
longer needed going forward, since the new order is both intuitive and
accurate. Update TECHNICAL-SEO-AND-GUARDRAILS.md to reflect this
simplification rather than carrying the old caution forward
unnecessarily.

Update all 9-Offer-entry schema blocks on every page listed above so
the Offer entries are listed in the same Silver->Gold->Platinum order
as the visible table, on every one of the 6 tiered service pages (5
existing + 1 new).
```

**Files/pages affected:** All 6 tiered service pages, `/pricing`, `DESIGN-SYSTEM.md`, `TECHNICAL-SEO-AND-GUARDRAILS.md`, `QA-CHECKLIST.md` (update Section I's stated order).

**Guardrail:** This is a sitewide, cross-cutting change — verify every one of the 6 pages plus the main pricing page, not just a sample. A leftover "Platinum, Gold, Silver" order on even one page creates a visible sitewide inconsistency.

---

## TASK 7 — Add Prenatal Yoga Teacher Training to the YTT Section

**Objective:** Add a new, sixth YTT program — Prenatal Yoga Teacher Training — alongside the existing 200/300/500-Hour, Kundalini, and Yin programs.

**Exact prompt for Antigravity:**
```
Add a new YTT program page at /yoga-teacher-training/prenatal-ttc,
following the exact same structural pattern as the existing YTT program
pages (CONTENT-AND-SCHEMA-SPEC.md Section 2): curriculum outline,
certifying-body tie-up language (Indian Federation of Yoga, Yoga
Alliance USA, AYUSH Ministry -- same "in tie-up/partnership with"
wording rule as every other YTT program, never "certified by"), format,
FAQ.

Add this program to the YTT hub navigation and to the YTT Location Hub
(all 9 locations) alongside the other 5 programs, per the existing
"all programs run at all 9 locations" confirmation -- unless the client
specifies this program runs at a narrower set of locations.

CONFIRMED: KayaSadhak issues its own certificate for this program and
has a real, ready curriculum for it.

[CLIENT TO CONFIRM]: the exact program duration (hour count -- e.g.
"85-Hour Prenatal YTT" is a common industry standard, but we have not
been given KayaSadhak's specific hour count) and whether this program
requires a prior 200-hour certification as a prerequisite (common for
prenatal-specialization YTTs industry-wide) or is open to complete
beginners. Do not publish an invented hour count -- use "Prenatal Yoga
Teacher Training" without a specific hour number in the title/H1 until
this is confirmed, and note the duration as "contact us for program
length and prerequisites" in the interim.
```

**Files/pages affected:** New page `/yoga-teacher-training/prenatal-ttc`, YTT hub navigation, all 9 YTT location pages (add this program to each), `SITEMAP-AND-IA.md` Section 2b, `PRD.md` Section 3.3.

**Open item:** `[CLIENT TO CONFIRM]` exact program duration/hour count and prerequisite requirements before this page's H1 and title tag are finalized.

---

## TASK 8 — Highlight Chandigarh Alongside Delhi NCR, Everywhere

**Objective:** Wherever "Delhi NCR" appears sitewide, ensure Chandigarh (Tricity) is also explicitly named alongside it, rather than being implied or mentioned only occasionally.

**Exact prompt for Antigravity:**
```
Do a full sitewide text audit for every instance of "Delhi NCR" (in
headings, body copy, meta titles/descriptions, schema areaServed
labels, and footer text) and update the phrasing so Chandigarh Tricity
is explicitly named alongside it in the same sentence or phrase, not
left implicit or only mentioned elsewhere on the page.

Use this consistent pattern: "Delhi NCR & Chandigarh Tricity" (or, in
a heading context where space is tight, "Delhi NCR + Chandigarh
Tricity") -- apply this exact phrasing pattern everywhere for
consistency, rather than inventing a different variant per page.

This applies to (non-exhaustive -- audit the full site):
- Homepage hero and section copy
- All 6 tiered service pages
- All condition pages
- The Panchkarma page
- Meta titles and descriptions sitewide where "Delhi NCR" currently
  appears alone
- Organization schema's areaServed label

Do NOT apply this pattern to the YTT Location Hub pages' broader
footprint references (Haridwar, Dehradun, Rishikesh, Dharamshala) --
those already correctly list Chandigarh as one of several YTT
locations; this task is specifically about ensuring Chandigarh isn't
dropped from mentions of the home-services "Delhi NCR" footprint.
```

**Files/pages affected:** Sitewide — homepage, all 6 tiered service pages, all condition pages, Panchkarma page, meta tags, `SEO-STRATEGY.md` (update the stated phrasing pattern for future content), `PRD.md` (Non-Goals/footprint section already says "Delhi-NCR + Chandigarh Tricity" — confirm this phrasing is what's being extended to all visible copy, not just planning docs).

**Guardrail:** This is a find-and-replace-style task across many pages — verify with a full-site search after the change that no bare "Delhi NCR" (without Chandigarh alongside it) remains on any customer-facing page.

---

## Summary Table — Dependencies & Suggested Order

| Task | Depends on | Suggested build order |
|---|---|---|
| 1. Logo tagline | None | 1st (quick, unblocks nothing else but easy to do first) |
| 3. Fitness Trainer page + nav | Task 1's tagline concept (same 3-service framing) | 2nd |
| 2. Hero sliding card | Task 3 (links to the page) | 3rd |
| 5. Three Pillars update | Task 3 (links to the page) | 4th |
| 6. Tier order revision | Task 3 (new tiers must launch in the new order) | 5th, applied last so it covers Task 3's new page too |
| 4. Female/Male instructor cards | Confirm which page (open item) | Can run in parallel once confirmed |
| 7. Prenatal YTT | None (independent of Fitness Trainer work) | Can run in parallel |
| 8. Delhi NCR + Chandigarh audit | Best done LAST, since it's a sitewide sweep that should catch text introduced by Tasks 1-7 too | Last |
