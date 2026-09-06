# PROMPT FOR ANTIGRAVITY — Build the KayaSadhak Yoga Studio (Sector 45, Noida) Page

## Why This Page Exists (context, don't skip)

This page has a specific, narrow job: it's the page linked from the KayaSadhak Yoga Studio's Google Business Profile "Website" field. Its content, schema, and NAP must be laser-focused on the STUDIO specifically — not a general KayaSadhak homepage covering home visits, YTT-belt locations, or Panchkarma. A generic, multi-service homepage linked from this GBP profile actively hurts local "yoga studio near me" ranking, because Google checks the linked website's relevance against the business's category and services — mixed, unrelated content dilutes that relevance signal. Every design and content decision below should reinforce one identity: a real, walk-in yoga studio at this specific address.

## URL & Placement

- URL: `/studio-noida-sector-45`
- Link this page from: the homepage (a clear "Visit Our Studio" section/card, distinct from the home-visit CTA), and from the Noida locality hub page (`/yoga-teacher-at-home/noida`) — this page must NOT be an orphan; it needs at least 2 real inbound links per the site's standing zero-orphan-pages rule.
- This page must NOT be linked as if it's the same offering as the home-visit service — use clearly different framing/CTAs so a visitor immediately understands "this is a physical studio you visit" vs. "a teacher comes to you."

## Exact NAP Block (use character-for-character, matching the studio's GBP listing exactly)

```
Name:    KayaSadhak Yoga Studio
Address: BJ Residency, 26759, Sadarpur Main Rd, Sadarpur, Sector-45,
         Noida, Uttar Pradesh 201303
Phone:   +91 87969 89667
```

Do not use the home-service WhatsApp number (+91-8273264561) anywhere on this page — every CTA, click-to-call, and WhatsApp link on this page uses the studio's own number only, since that's what's on the GBP listing and NAP consistency is a direct ranking factor.

## Page Content Structure

1. **H1:** "KayaSadhak Yoga Studio — Sector 45, Noida"
2. **Answer-first opening paragraph:** what the studio is, where exactly it is, and what's taught — group and private yoga classes across styles (Hatha, Vinyasa, Ashtanga, Power Yoga, Yin Yoga) plus on-site Yoga Teacher Training batches. Mention "Sadarpur," "Sector 45," and "Noida" naturally in this opening paragraph — this is the single most important paragraph on the page for local relevance.
3. **Real embedded Google Map** — an actual iframe embed pinned to the exact BJ Residency address, not a static image. Verify the pin lands precisely on the address before publishing (an imprecise pin undermines the exact thing this page exists to support).
4. **Class styles offered** — a clear list/table: Hatha, Vinyasa, Ashtanga, Power Yoga, Yin Yoga, Meditation sessions. `[STUDIO TO CONFIRM]`: exact weekly schedule/timings — until confirmed, state "Contact us for the current class schedule" rather than inventing days/times.
5. **Yoga Teacher Training at this location** — a shorter section (not the main focus of this page) noting that 200/300/500-Hour YTT batches run on-site here, linking to the full YTT program pages for curriculum detail — don't duplicate the full YTT certifying-body language here; one line and a link is enough, since this page's job is studio-identity, not YTT-detail.
6. **Meet the Founder** — Nivil Chaudhary, 12+ years experience — short, using the existing photo-placeholder treatment (neutral, branded, not a stock photo) since a real photo is still pending.
7. **What to expect / first-visit info** — parking (if applicable), what to bring, walk-in vs. booking — practical, real information a first-time visitor actually needs. `[STUDIO TO CONFIRM]`: parking availability and any walk-in policy.
8. **Photos section** — studio exterior and interior shots once available; flag clearly as pending if not yet photographed, do not fill with generic stock gym/studio images.
9. **FAQ** (5-6 real questions): "Do I need to book in advance?", "Is there a trial class?", "What should I wear/bring?", "Is the studio suitable for complete beginners?", "Is parking available?", "Can I join a YTT batch without prior teaching experience?"
10. **CTA throughout:** "Book a Trial Class" / "Call the Studio" / "WhatsApp the Studio" — all using +91 87969 89667. Use a simple Lead Generation Form (Name, Phone, Preferred Class/Batch) that routes to a pre-filled WhatsApp message to this number, consistent with the site's existing lead-gen pattern but scoped to this studio.

## Schema (JSON-LD) — Critical, Do Not Reuse the Home-Service Schema

```
LocalBusiness (type: ExerciseGym or SportsActivityLocation — the most
  specific applicable type, NOT the generic "Service" schema used on the
  home-visit pages)
  name: "KayaSadhak Yoga Studio"
  address: PostalAddress — exact NAP block above
  telephone: "+91 87969 89667"
  geo: REAL, independently verified latitude/longitude for BJ Residency,
    Sadarpur Main Rd, Sector-45, Noida — verify against the actual Google
    Maps pin, never a placeholder or the coordinates used on any other
    KayaSadhak page
  areaServed: NOT applicable in the SAB sense — this is a fixed-location
    business; omit areaServed or scope it narrowly to "walk-in visitors
    to this location," do not reuse the Delhi-NCR + Chandigarh Tricity
    areaServed scoping from the home-service Organization schema
  openingHoursSpecification: [STUDIO TO CONFIRM exact hours before this
    goes live — do not publish invented hours]
  hasOfferCatalog / makesOffer: list the class styles and YTT programs
    offered AT THIS LOCATION specifically
  sameAs: link to the studio's own GBP profile URL once available
FAQPage: matching the visible FAQ exactly
BreadcrumbList: Home → Studio (2 levels, since this is a standalone page,
  not nested under the home-services location hub)
```

**Do NOT include on this page:** the home-service Organization schema, the Delhi-NCR + Chandigarh Tricity areaServed scoping, the +91-8273264561 WhatsApp number, or the full YTT certifying-body tie-up paragraph used on the main YTT pages — this page has its own narrow identity and schema scope.

## Design Direction

Follow the site's existing premium design system (deep-kaya-green, turmeric-gold, parchment tones; Fraunces/Newsreader display type; signature leaf motif) — this page should look like it belongs to the same brand as the rest of the site, not a disconnected microsite. Hero section should use a real or tastefully-placeholdered studio photograph once available, following the same "no generic stock" rule as the rest of the site.

## Guardrails (carry over from the master plan, apply in full here)

- No fabricated reviews, ratings, or class-schedule details — use `[STUDIO TO CONFIRM]` and a graceful fallback sentence for anything not yet confirmed.
- NAP must be byte-for-byte identical to the studio's GBP listing — cross-check explicitly before publishing, not assumed.
- Geo-coordinates must be real and independently verified, never copied from another page's schema block.
- This page must receive 2+ real inbound links (homepage + Noida locality hub) before launch — verify, don't assume.
