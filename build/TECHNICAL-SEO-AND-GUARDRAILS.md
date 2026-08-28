# TECHNICAL-SEO-AND-GUARDRAILS.md — KayaSadhak
### v2 — adds Guardrails #17 and #18, both new and specific to the confirmed pricing/tier system. Guardrails #1-16 are unchanged from v1 (13 carried from the reference project's real production bugs, 3 traced to confirmed bugs found on ommantrayoga.com) and remain in full force.

---

## PART A — CARRIED FORWARD FROM THE REFERENCE PROJECT (rules 1-13)
## PART B — TRACED TO CONFIRMED BUGS ON THE REFERENCE COMPETITOR (rules 14-16)

*(All 16 rules unchanged — see prior version of this file for full text.
Summary index: 1 canonical domain, 2 URL-parameter canonicals, 3 no live
placeholder text, 4 no fabricated reviews/stats, 5 no false accreditation
claims, 6 no near-duplicate detail pages, 7 zero orphan pages, 8 complete
BreadcrumbList schema, 9 review-count-discrepancy caution, 10 no
phone/URL in GBP post captions, 11 multi-service-line homepage balance,
12 fix known issues before GSC/Bing submission, 13 byte-for-byte NAP
consistency, 14 real per-locality geo-coordinates — NOT a shared default,
15 no self-referential fake accreditation badges, 16 no reused
stats/testimonials presented as page-specific.)*

---

## PART C — NEW RULES, TRACED TO THE NEWLY CONFIRMED PRICING/TIER SYSTEM

## 17. Every price shown anywhere must be independently verified against the source rates, not copied forward
**Why this rule exists:** KayaSadhak's pricing is a calculated 3×3 matrix
(3 tiers × 3 frequency plans = 9 monthly prices per service line), now
required on **five separate pages** (Yoga at Home, Corporate, Senior
Citizen, Kids, Prenatal/Postnatal — PRD.md §3.2), not just one. This is
genuinely easy to get subtly wrong: a copy-paste that shifts a price into
the wrong tier/frequency cell, a schema `Offer` block that drifts out of
sync with a later on-page edit, or a price fixed on one of the five pages
but missed on the other four.
**Guardrail:** Treat the source rates (Platinum ₹1,000/session, Gold
₹750/session, Silver ₹500/session; frequency plans 12/16/20
sessions/month) as the single source of truth, ideally stored once (e.g.
in the CMS/config) and reused across all five pages, not hand-typed
independently five times. Every page and every schema block must be
checked against that source at build time AND again at QA — not assumed
correct because another page matched. If a rate changes later, all five
pages and their schema blocks must be updated together as one coordinated
change.

## 18. Tier display order and price/qualification ranking alignment
**Why this rule exists:** the client has confirmed Option A: display order (Platinum → Gold → Silver) matches price/qualification hierarchy (Platinum = ₹1,000, Masters+10yrs; Gold = ₹750, Grad+7yrs; Silver = ₹500, Diploma+5yrs).
**Guardrail:** Every sub-agent touching tier display, badge design, price
tables, or copy must implement BOTH facts together exactly as stated in PRD.md §3.1: list Platinum first as top tier, Gold second as mid tier, Silver third as entry tier. Verify this explicitly at QA on every one of the five pricing-table pages.

---

## PART D — CORE TECHNICAL IMPLEMENTATION SPEC
*(unchanged from v1 — canonical domain [client to confirm exact
registered form], raw-HTML FAQ blocks, semantic HTML, single-canonical
sitemap/robots/llms.txt, image optimization/performance targets. See v1
for full text; the recommended stack — Next.js + Tailwind + headless CMS
+ Vercel — is unchanged and now additionally well-suited to Guardrail #17
above, since a proper CMS/config layer is exactly what prevents the
hand-typed-price-drift failure mode described there.)*
