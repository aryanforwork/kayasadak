# QA-CHECKLIST.md — KayaSadhak
### v2 — adds Section I (Pricing & Tier Integrity), new this round. Sections A-H and J are unchanged from v1 and remain in full force. Every item, not a sample. A single failed item = NOT READY, not a footnote.

---

## A. Domain & Redirect Hygiene
- [ ] Single canonical domain form confirmed and used everywhere
- [ ] http→https redirect is one sitewide rule
- [ ] `/index.html`→`/` redirect is one sitewide rule
- [ ] Every internal link uses the canonical form only
- [ ] `sitemap.xml` contains ONLY canonical-form URLs
- [ ] Every URL-parameterized page has a self-referencing canonical tag

## B. Content Completeness & Honesty
- [ ] Zero bracketed placeholder text anywhere on the live site
- [ ] Zero invented testimonials, reviews, ratings, or statistics
- [ ] YTT certifying-body claims (Indian Federation of Yoga, Yoga Alliance USA, AYUSH Ministry) match their real, confirmed status — AYUSH relationship uses its exact confirmed wording, never a generic "certified by AYUSH" shortcut
- [ ] No trust badge/accreditation mark implies third-party endorsement unless one genuinely exists
- [ ] No condition page uses cure/treat/guaranteed-result language; medical disclaimer present on every condition page
- [ ] No sitewide stats block or testimonial is reused verbatim across pages as if page-specific

## C. Duplicate Content & Page Architecture
- [ ] No two pages target the same primary keyword cluster
- [ ] Every locality CLUSTER page (per the v2 clustering strategy) has genuinely distinct content, and genuinely covers its named sub-localities within the text, not just in a keyword list
- [ ] Zero orphan pages — every page has 2+ real inbound internal links
- [ ] No locality page exists for any area outside the confirmed Delhi-NCR + Chandigarh-Tricity footprint
- [ ] The YTT Location Hub (9 pages) is structurally separate from the home-services Location Hub — spot-check that no page cross-links them as if they were the same footprint

## D. Schema Validation
- [ ] Every page's JSON-LD tested in Google's Rich Results Test — full site, not a sample
- [ ] Every BreadcrumbList: non-empty "name," sequential "position," full absolute "item" URL
- [ ] Every home-services locality cluster page's `geo` lat/long independently verified as real and specific to that cluster's actual area — not a shared/default value
- [ ] No schema field claims anything not also visibly shown on the same page
- [ ] `aggregateRating` omitted entirely on any page/locality with no real reviews yet
- [ ] YTT program page schema lists all three confirmed certifying bodies accurately
- [ ] YTT location pages use Course schema, NOT LocalBusiness/areaServed schema scoped to the home-services footprint

## E. NAP & Local Consistency
- [ ] Name/Address/Phone/Hours byte-for-byte identical across website footer, Contact page, GBP, and schema
- [ ] Confirmed business phone/WhatsApp number (+91-8273264561) is the one used site-wide — spot-check no old/placeholder number remains anywhere
- [ ] Operating hours vs. class/session-slot hours clearly distinguished
- [ ] GBP primary category set to the confirmed choice ("Yoga Instructor" / "Yoga Teacher")
- [ ] No GBP post caption text contains a phone number or URL

## F. Technical / Performance
- [ ] Every FAQ/Q&A block present in raw HTML
- [ ] The pricing table on `/pricing` and `/services/yoga-at-home` is a real HTML `<table>`, not an image or styled divs — verified via view-source, not just visual inspection
- [ ] Core Web Vitals green on mobile: homepage, YTT hub, `/pricing`, top 5 launch locality-cluster pages
- [ ] Real semantic HTML spot-checked across page types
- [ ] Separate mobile hero image variants actually rendering on mobile
- [ ] `llms.txt`, `robots.txt`, `sitemap.xml` present, valid, reachable

## G. Multi-Service-Line Balance
- [ ] Homepage title/H1/meta/opening paragraph represents Yoga, YTT, and Panchkarma/Ayurveda roughly evenly

## H. Pre-Submission Gate
- [ ] Sections A-G above all pass BEFORE submitting sitemap to Google Search Console or Bing Webmaster Tools

## I. Pricing & Tier Integrity — HIGH PRIORITY
- [ ] All 9 prices (3 tiers × 3 frequencies) exactly match: Platinum ₹12,000 / ₹16,000 / ₹20,000; Gold ₹9,000 / ₹12,000 / ₹15,000; Silver ₹6,000 / ₹8,000 / ₹10,000 — re-calculated independently, not just visually compared
- [ ] This identical 9-price matrix appears correctly on ALL FIVE required pages (Yoga at Home, Corporate, Senior Citizen, Kids, Prenatal/Postnatal) — zero drift between any of the five
- [ ] All 9 `Offer` schema entries on each of the five pages match that page's visible table exactly, price-for-price
- [ ] Display order is Platinum → Gold → Silver on every pricing table site-wide (confirmed order)
- [ ] Tier price and qualification ranking match display order: Platinum is highest (₹1,000, Masters+10yrs), Gold mid (₹750, Grad+7yrs), Silver entry (₹500, Diploma+5yrs) — check this on all five pages independently
- [ ] Every teacher shown under a given tier badge genuinely meets that tier's stated qualification bar
- [ ] Pricing is uniform across all served localities (no locality page contradicts the sitewide matrix)

## I2. Founder, Contact & Social — NEW THIS ROUND
- [ ] Founder name reads "Nivil Chaudhary" consistently everywhere it appears (About page, homepage, schema) — no leftover "Nirmal" from an earlier draft
- [ ] Founder bio states 12+ years experience and "fully qualified" framing only — no invented specific certificate names
- [ ] Founder and teacher photo placeholders are neutral/labeled, never a stock photo or AI face presented as real
- [ ] Business email shows both contact@kayasadhak.com (primary) and kayasadhak@gmail.com (secondary) correctly, matching schema
- [ ] Footer social icons link to instagram.com/kayasadhak, facebook.com/kayasadhak, twitter.com/kayasadhak, youtube.com/@kayasadhak — all four present and correct
- [ ] YTT certifying-body copy uses "tie-up/partnership with," never "certified by," on every page mentioning Indian Federation of Yoga, Yoga Alliance USA, or AYUSH Ministry
- [ ] Lead Generation Form is present and functional (routes to correct pre-filled WhatsApp message) on: homepage, all five tiered service pages, all locality pages, all YTT pages

## J. Post-Launch Monitoring (first 30 days, not a one-time check)
- [ ] Weekly GSC Page Indexing report reviewed for duplicate-without-canonical, redirect errors, discovered-not-indexed trend direction
- [ ] Review-request cadence confirmed natural/spread-out, not bulk-requested in a burst
- [ ] Any founder-confirmed pricing change is verified as propagated to every page and every schema block simultaneously, not page-by-page over time (Guardrail #17)

---

## Sign-off
Every failed item above must be logged with: exact page URL, exact
sub-agent responsible, and re-check status once fixed. "READY TO LAUNCH"
is only declared once every box in Sections A-I is checked — Section J is
ongoing and does not block initial launch.
