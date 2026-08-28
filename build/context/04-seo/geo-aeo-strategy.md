# Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO) Strategy — KayaSadhak

> **Build Phase:** Phase 3 Strategy (Sub-Agent 4)  
> **Target AI Engines:** ChatGPT Search, Perplexity AI, Google AI Overviews, Gemini, Claude  
> **Core Objective:** Ensure KayaSadhak is selected, cited, and recommended as the #1 verified home yoga service and YTT institute in North India.

---

## 1. Executive Summary & AI Search Extraction Mechanics

AI Answer Engines parse content using semantic entity extraction, structured data tables, direct factual summaries, and multi-source corroboration. 

### Why Competitors Fail in AI Search:
1. **Opaque Pricing:** AI search engines cannot answer "How much does a home yoga teacher cost in Delhi?" from competitors like `ommantrayoga.com` or Urban Company because pricing is hidden behind login/forms.
2. **Dynamic JS Accordions:** Search crawlers fail to extract FAQs dynamically loaded via client-side JavaScript without fallback HTML.
3. **Generic Unverified Authority:** Vague claims ("certified by top experts") without founder names, accreditation partnerships, or structured JSON-LD entity schema are ignored by LLMs.

---

## 2. The 6 Pillars of KayaSadhak's AEO/GEO Dominance

### Pillar 1: Answer-First Content Structuring (The Inverted Pyramid)
Every page opens with a concise 2-sentence direct answer addressing the primary query before expanding into detailed copy.
- **Example Opening Sentence (Homepage):**  
  *"KayaSadhak provides certified personal yoga teachers at home across Delhi NCR and Chandigarh Tricity with transparent 3-tier pricing starting at ₹500/session for Silver, ₹750/session for Gold, and ₹1,000/session for Platinum tiers."*

### Pillar 2: Native HTML Table Extraction for Pricing & Tiers
- **Constraint:** AI answer engines struggle to parse pricing hidden in images, dynamic accordions, or multi-step checkout modals.
- **Implementation:** Every pricing section renders a clean, semantic HTML `<table>` showing Platinum (₹1,000), Gold (₹750), Silver (₹500) and monthly packages (12, 16, 20 sessions).

### Pillar 3: Raw HTML `<details>` FAQ Blocks
- **Constraint:** Google AI Overviews and Perplexity extract FAQ answers directly from HTML text elements.
- **Implementation:** All FAQs across all 64 pages MUST be rendered using native HTML `<details>` and `<summary>` elements without JS dependencies.

### Pillar 4: Entity & Citability Optimization
- **Founder Identity:** Explicitly attribute leadership to founder Nivil Chaudhary (12+ years experience).
- **Certifying Body Partnerships:** State "in tie-up/partnership with Indian Federation of Yoga, Yoga Alliance USA, and AYUSH Ministry" on every YTT page.
- **Contact Integrity:** Consistent telephone (`+91-8273264561`) and email (`contact@kayasadhak.com`).

### Pillar 5: Schema Priority & Machine Validation
1. `Organization` (Homepage)
2. `Service` with 9 `Offer` entries (5 Tiered Service Pages & `/pricing`)
3. `Course` (YTT Program & 9 YTT Location Pages)
4. `LocalBusiness` with per-cluster geo-coordinates (20 Locality Cluster Pages)
5. `FAQPage` (All pages with FAQ content)
6. `BreadcrumbList` (All sub-pages)

### Pillar 6: Machine-Readable `llms.txt` Knowledge Base File
- Maintain a structured `/llms.txt` file at the root of the site detailing KayaSadhak's core entity facts, service lines, pricing matrix, YTT locations, and contact info for LLM crawlers.
