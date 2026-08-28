# Schema Implementation Notes & Strict Validation Rules

## Core Schema Rules
1. **Zero Hallucination Alignment:** Schema MUST NOT claim any feature, rating, certification, or location that is not explicitly displayed in readable HTML text on the same page.
2. **No Fake Ratings:** Omit `aggregateRating` schema entirely on any page/locality until real customer reviews exist.
3. **9-Offer Service Schema:** All 5 tiered service pages (`/services/yoga-at-home`, `/services/corporate-yoga`, `/services/senior-citizen-yoga`, `/services/kids-yoga`, `/services/prenatal-postnatal-yoga`) and `/pricing` must include the complete 9-Offer array matching the visible Platinum (₹1,000), Gold (₹750), Silver (₹500) pricing table.
4. **YTT Certifying Partnership Wording:** Describe affiliations as tie-up/partnership with Indian Federation of Yoga, Yoga Alliance USA, and AYUSH Ministry — never "certified by".
5. **Course vs. LocalBusiness Scope:** Use `Course` schema for YTT location pages (`/yoga-teacher-training/locations/*`). Do NOT attach `LocalBusiness`/`areaServed` scoped to Delhi-NCR home yoga to YTT destination pages.
