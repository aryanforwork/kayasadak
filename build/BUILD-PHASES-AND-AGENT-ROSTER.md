# BUILD-PHASES-AND-AGENT-ROSTER.md — KayaSadhak
### v2 — updated agent prompts reflecting the confirmed founder, pricing/tier system, YTT certifying bodies, and locality-clustering strategy. Phase structure and dependency graph are unchanged from v1. Per the client's explicit direction, the manager should now begin Phase 0/1 with this package as-is — remaining `[CLIENT TO CONFIRM]` items are tracked as non-blocking open items per field, not a reason to delay start.

---

## 1. Project Context Summary (updated)

**KayaSadhak** — founder **Nivil Chaudhary** (12+ years experience, fully
qualified; photo + itemized certificates deferred to a second draft),
contact **+91-8273264561**, email **contact@kayasadhak.com** /
**kayasadhak@gmail.com**, social handles **"kayasadhak"** across
Instagram/Facebook/Twitter-X/YouTube. A Delhi-NCR + Chandigarh-Tricity
home yoga business built on a confirmed **three-tier teacher system
(Gold/Silver/Platinum)**, displayed in the order **Platinum → Gold →
Silver** but keeping Gold as the highest-price/qualification tier (see
PRD.md §3.1 — this distinction is critical, see Guardrail #18), with
calculated, transparent pricing now extended across FIVE service lines
(Yoga at Home, Corporate, Senior Citizen, Kids, Prenatal/Postnatal),
alongside a Yoga Teacher Training institute (200/300/500-hour, Kundalini,
Yin — all 5 confirmed running at all 9 locations) offered **in tie-up/
partnership with** the Indian Federation of Yoga, Yoga Alliance (USA),
and the AYUSH Ministry, across Delhi-NCR + Chandigarh Tricity +
Haridwar, Dehradun, Rishikesh, Dharamshala. A site-wide **Lead Generation
Form** (homepage + key pages) routes directly to WhatsApp. Brand name and
logo are confirmed and locked. Named reference competitor
(ommantrayoga.com) has been deep-researched; findings are folded into
every relevant file in this package. Locality structure follows a
client-supplied clustering reference (`Delhi-NCR-Local-SEO-Locations.md`).

**This is the final information round — the package is now considered
complete and ready to hand to Antigravity for build.** Remaining gaps
(founder/teacher photos, itemized founder certificates, YTT lead faculty,
YTT course fees, business address, domain reconfirmation) are explicitly
deferred to a second draft per the client's direction and must not block
Phase 0-9 of this build.

All structural build discipline from v1 is unchanged: dedicated hub per
service line, dedicated detail page per locality-cluster/service/
condition, answer-first content, real internal linking, SEO/AEO/GEO as a
day-one priority.

---

## 2. Sub-Agent Roster
*(unchanged — 12 agents, same roles as v1. Updated prompts below only for
the agents materially affected by this round's new information: 1, 2, 4,
5, 6, 12. Agents 3, 7, 8, 9, 10, 11 carry forward from v1 with no material
prompt change beyond referencing the new pricing/tier and location facts
where they naturally apply — see CONTENT-AND-SCHEMA-SPEC.md and
DESIGN-SYSTEM.md v2 for the detail those agents should build from.)*

---

## 3. Updated Sub-Agent Prompts

### SUB-AGENT 1 — Research & Competitive Intelligence Agent (updated)
```
ROLE: Unchanged core objective from v1 (validate/extend the standing
ommantrayoga.com research; identify 4-7 additional real Delhi-NCR
competitors).

NEW THIS ROUND: Also identify and briefly profile 3-5 real competitors in
the YTT-belt locations specifically (Rishikesh, Haridwar, Dehradun,
Dharamshala) — this is a separate, nationally/internationally competitive
market from the Delhi-NCR local-service competitor set, and needs its own
short competitive scan before Sub-Agent 4 builds keyword strategy for
those 4 location pages. Note explicitly if "Indian Federation of Yoga"
(one of KayaSadhak's own confirmed YTT certifying bodies) also operates
as a direct YTT competitor in any of these locations — flag this
dual-relationship for the founder's awareness in your output, not to
resolve yourself.
```

### SUB-AGENT 2 — Information Architecture & Sitemap Agent (updated)
```
ROLE: Finalize sitemap.md, url-structure.md, and
internal-linking-map.md — now based on SITEMAP-AND-IA.md v2's clustering
strategy (built from the client-supplied Delhi-NCR-Local-SEO-Locations.md
reference file) rather than v1's micro-sector approach.

NEW THIS ROUND: Build out the separate YTT Location Hub (§2b) — 9 pages
(Delhi, Gurugram, Noida, Chandigarh, Mohali, Haridwar, Dehradun,
Rishikesh, Dharamshala). CONFIRMED: all 5 YTT programs run at all 9
locations — link all 5 program pages from every location page, no
filtering needed. Keep the YTT location hub and the home-services location hub (§2a)
structurally and navigationally separate at all times — never cross-link
them as if they were the same footprint.
```

### SUB-AGENT 4 — SEO Keyword & AEO/GEO Strategy Agent (updated)
```
ROLE: Validate SEO-STRATEGY.md v2's clusters against live search data,
including the two NEW clusters this round: (a) pricing/tier terms ("yoga
teacher Gold plan," "monthly yoga package Delhi," etc.) targeting
/pricing and /services/yoga-at-home, and (b) the YTT-belt cluster
("200 hour yoga teacher training Rishikesh" and equivalents for Haridwar/
Dehradun/Dharamshala).

CRITICAL: treat the YTT-belt cluster as its own research track with its
own competitive set (national/international YTT schools, not Delhi-NCR
local competitors) — do not apply local "near me" keyword logic to these
4 location pages. For the home-services locality clusters, validate that
each client-supplied zone grouping (e.g. "West Delhi" covering Dwarka,
Janakpuri, Rajouri Garden, etc.) is genuinely the right level of
aggregation — flag any individual locality within a cluster that shows
strong enough standalone search volume to justify its own page later
(e.g. Indirapuram within the Ghaziabad cluster), without unilaterally
splitting it out — that's a recommendation for manager approval, not an
automatic action.
```

### SUB-AGENT 5 — Schema & Structured Data Agent (updated)
```
ROLE: Implement valid JSON-LD per CONTENT-AND-SCHEMA-SPEC.md v2.

NEW THIS ROUND — CRITICAL RULES:
- FIVE pages now need the Service schema with all 9 Offer entries each
  (Yoga at Home, Corporate, Senior Citizen, Kids, Prenatal/Postnatal —
  not just `/pricing`), each price independently verified against that
  page's own visible table — see Guardrail #17. Treat with the same rigor
  as the geo-coordinate rule (Guardrail #14).
- Display order in every table is Platinum → Gold → Silver, but Gold's
  price/offer values remain the highest — do not let the reordering shift
  which price attaches to which tier name (Guardrail #18).
- YTT program page schema must describe all three confirmed bodies
  (Indian Federation of Yoga, Yoga Alliance USA, AYUSH Ministry) as
  tie-up/partnership relationships — never as "certified by," especially
  for the AYUSH Ministry entry, which is a government body.
- Homepage `Organization` schema: founder Nivil Chaudhary, email
  contact@kayasadhak.com (+ kayasadhak@gmail.com secondary), sameAs the
  four confirmed social URLs (instagram/facebook/twitter/youtube, all
  "kayasadhak" handle).
- YTT location pages (the new 9-page hub) must NOT carry
  LocalBusiness/areaServed schema scoped to the Delhi-NCR home-services
  footprint — use Course schema scoped to that specific training
  location instead.
```

### SUB-AGENT 6 — Content Writing & Humanization Agent (updated)
```
ROLE: Unchanged core approach from v1 (answer-first, real evidence only,
humanized rhythm, never fabricate).

NEW THIS ROUND:
- Write the pricing-table content for ALL FIVE tiered service pages
  (Yoga at Home, Corporate, Senior Citizen, Kids, Prenatal/Postnatal),
  listed Platinum → Gold → Silver, using the exact qualification wording
  from PRD.md §3.1 for each tier without paraphrasing it loosely.
- Tie-up/partnership wording for YTT certifying bodies — see
  CONTENT-AND-SCHEMA-SPEC.md §2 for the approved phrasing; never say
  "certified by," especially for AYUSH Ministry.
- YTT lead faculty: not yet available — use general "our expert faculty"
  framing, never an invented name (deferred to second draft).
- Write the 9 YTT location pages (§2b) in a genuinely distinct tone from
  the home-services locality pages.
- Founder bio for the About page: Nivil Chaudhary, 12+ years experience,
  fully qualified — do not invent specific certificate names, awards, or
  biographical detail beyond what's confirmed; photo is a placeholder
  (DESIGN-SYSTEM.md §4b) pending second draft.
- Build the Lead Generation Form copy/microcopy (CONTENT-AND-SCHEMA-SPEC.md
  §0) for the homepage and every other required page.
```

### SUB-AGENT 8 — UX/CRO Forms & Conversion Agent (updated)
```
ROLE: Unchanged core objective from v1 (booking funnel, WhatsApp-CTA
system, pricing table component).

NEW THIS ROUND — PRIMARY TASK: Build the Lead Generation Form component
per CONTENT-AND-SCHEMA-SPEC.md §0 and DESIGN-SYSTEM.md §4a — Name, Phone,
Service Interest, optional Locality; on submit, construct a pre-filled
WhatsApp message and open wa.me/918273264561. Place this form on the
homepage hero and on every service, locality, and YTT page. This is now
the primary confirmed lead-capture mechanism site-wide, alongside (not
replacing) the existing WhatsApp deep-link buttons on individual CTAs.
```

### SUB-AGENT 12 — QA, Accessibility, Performance & Launch Agent (updated)
```
ROLE: Unchanged core approach — use QA-CHECKLIST.md v2 verbatim, every
item.

NEW THIS ROUND: Section I of the updated checklist (Pricing & Tier
Integrity) is a new, dedicated QA section — treat every item in it with
the same weight as the geo-coordinate check in Section D. A single wrong
digit in the pricing matrix, on even one page, is a real trust and
compliance issue (a business advertising one price and charging another),
not a cosmetic bug.
```

---

## 4. Phase-Wise Execution Plan & Dependency Graph
*(unchanged from v1 — see prior version. The manager should begin Phase 0
now, per the client's explicit direction to start building with current
information and update later as remaining open items resolve.)*

## 5. Manager's Own Kickoff Prompt
*(unchanged from v1 — still applies in full, including: "Treat every
[CLIENT TO CONFIRM] tag across this package as a blocking item for the
specific page/field it appears on, not for the whole project — proceed
with everything else.")*
