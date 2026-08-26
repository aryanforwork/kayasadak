# SITEMAP-AND-IA.md — KayaSadhak Locked Site Structure
### v2 — updated with: (a) the client-supplied `Delhi-NCR-Local-SEO-Locations.md` reference file, which introduces a locality-CLUSTERING strategy superseding v1's flat per-micro-sector approach, and (b) YTT's separate, broader service-location footprint.

---

## 1. Top-Level Sitemap

```
/                                          → Home
/about-us                                  → Founder (Nivil Chaudhary) + brand story
/our-teachers                              → Directory, organized by Gold/Silver/Platinum tier
/our-teachers/[teacher-slug]               → Individual teacher profile (shows tier badge)

/services                                  → Services hub
   /services/yoga-at-home                  → NOW the pricing-matrix anchor page (3 tiers × 3 frequencies)
   /services/yoga-for-studio
   /services/yoga-for-hospital
   /services/corporate-yoga
   /services/senior-citizen-yoga
   /services/kids-yoga
   /services/prenatal-postnatal-yoga
   /services/panchkarma
   /services/dance-classes                [PHASE 2]
   /services/zumba-classes                [PHASE 2]
   /services/arabic-classes               [PHASE 2]

/yoga-teacher-training                     → YTT hub — NOTE: this hub links to its OWN location set (§2b), separate from the home-services location hub (§2a)
   /yoga-teacher-training/200-hour-ttc
   /yoga-teacher-training/300-hour-ttc
   /yoga-teacher-training/500-hour-ttc
   /yoga-teacher-training/200-hour-kundalini-ttc
   /yoga-teacher-training/50-hour-yin-ttc

/yoga-for-conditions                       → unchanged from v1
   /yoga-for-conditions/back-pain
   /yoga-for-conditions/pcod-pcos
   /yoga-for-conditions/thyroid
   /yoga-for-conditions/weight-loss
   /yoga-for-conditions/prenatal-yoga
   /yoga-for-conditions/anxiety-insomnia
   /yoga-for-conditions/senior-citizen-yoga

/yoga-teacher-at-home                      → HOME-SERVICES LOCATION HUB (Delhi-NCR + Chandigarh Tricity only — §2a)
/yoga-teacher-training/locations           → YTT LOCATION HUB (broader footprint — §2b) — kept structurally separate, never merged with §2a
/pricing                                   → Full 3×3 Gold/Silver/Platinum matrix (see CONTENT-AND-SCHEMA-SPEC.md §1)
/reviews
/gallery
/blog
   /blog/[slug]
/faq
/book-a-free-class
/contact-us
/privacy-policy /terms-and-conditions /return-refund-policy /disclaimer
/sitemap.xml /robots.txt /llms.txt
```

---

## 2a. Home-Services Location Hub — Now Built on the Clustering Strategy from the Client-Supplied Reference File

**This section supersedes v1's approach.** v1 assumed sector-level
granularity matching the reference competitor (e.g., a separate page per
individual Rohini sector). The client has now supplied a detailed,
zone-organized reference document
(`Delhi-NCR-Local-SEO-Locations.md`) that explicitly recommends the
opposite for thin-content/cannibalization avoidance:

> "Group micro-localities under their parent sector/zone... to avoid
> keyword cannibalization — e.g., don't create separate pages for every
> single Rohini sector; cluster them." — client reference file, §"How to
> Use This List for Local SEO"

**Revised rule:** build ONE page per major locality/zone cluster (using
the exact zone groupings already organized in that reference file), not
one page per every individual micro-sector. Within that page, mention the
real sub-localities/sectors it covers by name (for search coverage and
local texture) rather than giving each sub-area its own thin page.

```
/yoga-teacher-at-home/delhi
   /yoga-teacher-at-home/delhi/central-delhi      (CP, Karol Bagh, Paharganj, Chandni Chowk, Civil Lines, Kamla Nagar, etc.)
   /yoga-teacher-at-home/delhi/south-delhi         (Hauz Khas, Saket, Vasant Kunj, Defence Colony, GK 1&2, Lajpat Nagar, South Ex, CR Park, etc.)
   /yoga-teacher-at-home/delhi/west-delhi          (Rajouri Garden, Janakpuri, Dwarka [all sectors clustered under one page], Paschim Vihar, Punjabi Bagh, etc.)
   /yoga-teacher-at-home/delhi/north-delhi         (Model Town, Pitampura, Rohini [all sectors clustered], Shalimar Bagh, Mukherjee Nagar, etc.)
   /yoga-teacher-at-home/delhi/east-delhi          (Laxmi Nagar, Preet Vihar, Mayur Vihar, Patparganj, Anand Vihar, etc.)
   /yoga-teacher-at-home/delhi/new-delhi-central   (New Delhi govt hub, Diplomatic Enclave, Lodhi Road, Golf Links, Jorbagh — from client reference file's "Additional" group)

/yoga-teacher-at-home/noida
   /yoga-teacher-at-home/noida/central-prime-sectors    (Sector 18, 15, 16, 27, 29, 37, 39, 41)
   /yoga-teacher-at-home/noida/it-business-hub          (Sector 62, 63, 58-60, 132-144, Film City)
   /yoga-teacher-at-home/noida/residential-sectors      (Sector 50-168 residential cluster, per reference file grouping)
   /yoga-teacher-at-home/noida/extension-emerging       (Noida Extension, Sectors 1-49 emerging group, Amity area)

/yoga-teacher-at-home/greater-noida        (single page — Alpha/Beta/Gamma/Delta/Chi/Zeta/Eta/Theta/Omicron/Omega/Pi, Knowledge Park, Pari Chowk, etc. all named within, per reference file's single-group structure)

/yoga-teacher-at-home/ghaziabad            (single page — Vaishali, Vasundhara, Indirapuram, Kaushambi, Raj Nagar Extension, etc. — per reference file's single-group structure; may split Indirapuram out as its own page later if it proves to be a genuinely high-volume standalone keyword — flag for Sub-Agent 4 to validate)

/yoga-teacher-at-home/faridabad            (single page — NIT Faridabad, Old Faridabad, Ballabgarh, Neharpar/Greater Faridabad, Sector groups, etc.)

/yoga-teacher-at-home/gurugram
   /yoga-teacher-at-home/gurugram/dlf-central            (DLF Phases 1-5, Cyber City/Hub, MG Road, Sikanderpur, Udyog Vihar)
   /yoga-teacher-at-home/gurugram/golf-course-sohna-belt (Golf Course Road, Sushant Lok, South City, Sohna Road, Nirvana Country)
   /yoga-teacher-at-home/gurugram/new-gurugram-sectors   (Sectors 36-115 corridor)
   /yoga-teacher-at-home/gurugram/other-key-localities   (Palam Vihar, Old Gurgaon sectors, Manesar, Badshahpur, etc.)

/yoga-teacher-at-home/chandigarh-tricity   → unified hub, still fixes the reference-competitor's confirmed broken/absent equivalent
   /yoga-teacher-at-home/chandigarh-tricity/chandigarh   (Sector grid central+south clusters + key landmarks, single page per the reference file's own 3-group structure — may become 2-3 pages if Sub-Agent 4 finds strong distinct search volume per group)
   /yoga-teacher-at-home/chandigarh-tricity/mohali       (Phases cluster + IT hubs + other areas, single page)
   /yoga-teacher-at-home/chandigarh-tricity/panchkula    (Sectors + key localities, single page)
```

**Standing rule reaffirmed:** do NOT create a page for any area outside
this confirmed footprint. The reference file itself is scoped to exactly
Delhi, Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram, Chandigarh,
Mohali, and Panchkula — matching our confirmed service area exactly for
every service line EXCEPT YTT (see §2b).

## 2b. YTT Location Hub — Separate, Broader Footprint (New)

Per the founder's direction, YTT programs are additionally offered in the
Uttarakhand/Himachal yoga-training belt, alongside the NCR cities:

```
/yoga-teacher-training/locations/delhi
/yoga-teacher-training/locations/gurugram
/yoga-teacher-training/locations/noida
/yoga-teacher-training/locations/chandigarh
/yoga-teacher-training/locations/mohali
/yoga-teacher-training/locations/haridwar
/yoga-teacher-training/locations/dehradun
/yoga-teacher-training/locations/rishikesh
/yoga-teacher-training/locations/dharamshala
```

**Critical structural rule:** these 9 pages are YTT-only. Never link them
from, or present them as part of, the home-services location hub in §2a —
a visitor in Rishikesh should find KayaSadhak's YTT program, not be shown
(or led to expect) a home-yoga-at-your-door booking, which is not offered
there. **CONFIRMED:** all 5 YTT programs run at all 9 locations — each
location page lists and links to all 5 program pages, no per-location
filtering needed.

SEO note: "200 hour yoga teacher training Rishikesh" and equivalents for
Haridwar/Dehradun are nationally/internationally competitive search terms
(Rishikesh is a globally recognized YTT destination) — this is a
different, higher-competition keyword environment than our Delhi-NCR local
service pages, and should be treated as its own strategic track in
SEO-STRATEGY.md, not folded into the local "near me" strategy.

---

## 3. Pricing Page Structure (Updated — Confirmed Scope + Display Order)

`/pricing` is a substantive page, not a placeholder stub:
1. The full pricing matrix (PRD.md §3.1), listed in the CONFIRMED display
   order **Platinum → Gold → Silver** (price/qualification ranking is
   unchanged — Gold is still highest — only the listing order is
   Platinum-first) — a genuine, checkable differentiator vs. the reference
   competitor, which shows no pricing anywhere on-page.
2. A short, plain-language explainer of what distinguishes each tier.
3. **CONFIRMED:** separate pricing tables, same tiers/rates/order, for
   Corporate Yoga, Senior Citizen Yoga, Kids Yoga, and Prenatal/Postnatal
   Yoga, in addition to Yoga at Home — see PRD.md §3.2.
4. A lead-generation form (PRD.md §6a) embedded on this page, routing to
   WhatsApp.
5. Links to `/services/yoga-at-home` and `/yoga-teacher-training`.

---

## 4. Detail-Page Differentiation Rule
*(unchanged from v1 — Guardrail #6 applies fully to the new clustered
locality pages too: each cluster page must have genuinely distinct local
texture, not a copy-pasted structure with only the place names swapped.)*

---

## 5. Internal Linking Map (updated)
- Every clustered locality page links to: its region hub, 2+ sibling
  cluster pages in the same city, 2+ relevant service pages, 1+ relevant
  condition page — same as v1, just applied to clusters instead of
  micro-sectors.
- Every YTT location page (§2b) links to: the YTT hub, all 5 YTT program
  pages that run at that location specifically (not all 5 by default),
  and Our Teachers (faculty).
- `/pricing` links to `/services/yoga-at-home`, `/book-a-free-class`, and
  `/our-teachers` (so a visitor comparing tiers can immediately see real
  teachers per tier).
- HARD RULE UNCHANGED: every page needs 2+ real inbound links; zero orphan
  pages, verified explicitly by Sub-Agent 10.
