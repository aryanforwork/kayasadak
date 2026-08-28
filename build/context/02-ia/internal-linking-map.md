# Comprehensive Internal Linking Strategy & Matrix — KayaSadhak

> **Single Source of Truth for Internal Link Equity Distribution & Zero Orphan Pages Policy**  
> **Build Phase:** Phase 2 (IA & Sitemap locked by Sub-Agent 2)  
> **Auditing Agent:** Sub-Agent 10 (Technical SEO & Internal Link Inspector)

---

## 1. Executive Summary & Zero Orphan Pages Policy

Internal linking is the primary mechanism for distributing PageRank, defining topical authority silos, and ensuring search engines discover every indexable URL. 

### Hard Guardrail: Zero Orphan Pages Policy
- **Requirement:** Every single page published on `kayasadhak.com` MUST receive a **minimum of 2 contextual inbound internal links** from relevant body content within the same or complementary hubs.
- **Header & Footer Link Limitation:** Utility links in the global header or sitewide footer do NOT count toward the 2 contextual inbound link minimum. Inbound links must be genuine, in-body contextual links.
- **Verification Gate:** Sub-Agent 10 will perform a programmatic link audit on `10-technical-seo/linking-audit.md` before launch. Any page with <2 contextual inbound links triggers an immediate build fail.

---

## 2. Silo & Linking Hierarchy Rules

To maximize topical relevance, internal links must follow strict siloing rules:

### Silo Rules:
1. **Vertical Relevance First:** Pages within a silo (e.g., YTT Location pages linking to YTT Program pages) link heavily to each other.
2. **Home Services Locality Silo Boundary:** Home-services locality clusters (`/yoga-teacher-at-home/*`) link inward to Tiered Service pages (`/services/yoga-at-home`), Pricing (`/pricing`), and sibling locality clusters in the same city. They **NEVER** link to destination YTT location pages like Rishikesh or Dharamshala.
3. **Cross-Hub Bridges:**
   - **Condition Pages → Tiered Service Pages:** e.g., `/yoga-for-conditions/back-pain` links contextually to `/services/yoga-at-home` and `/services/senior-citizen-yoga`.
   - **Pricing Page → Service Pages:** `/pricing` links to all 5 Tiered Service pages.
   - **Homepage "What's Bothering You?" Chips:** Links directly to all 7 Condition pages.

---

## 3. Comprehensive Page-by-Page Linking Rules Matrix

| Page Category | Target Page / URL Pattern | Minimum Inbound Links (Contextual) | Mandatory Inbound Source Pages | Mandatory Outbound Target Pages | Approved Anchor Text Strategy |
|---|---|---|---|---|---|
| **Core** | Homepage `/` | 60+ (Sitewide) | Header logo link, All Breadcrumbs, All Footer brand links | `/services`, `/yoga-teacher-training`, `/yoga-for-conditions`, `/yoga-teacher-at-home`, `/pricing`, `/about-us`, `/reviews`, `/book-a-free-class` | Branded ("KayaSadhak", "KayaSadhak Home Yoga") |
| **Core** | `/about-us` | 4+ | Homepage (body), Services Hub, YTT Hub, `/pricing` | `/our-teachers`, `/yoga-teacher-training`, `/contact-us` | "Founder Nivil Chaudhary", "about KayaSadhak", "certified yoga instructors" |
| **Core** | `/our-teachers` | 4+ | Homepage, About Us, Tiered Service pages, Pricing | Individual Teacher Profiles `[teacher-slug]`, `/pricing`, `/book-a-free-class` | "experienced yoga teachers", "Platinum & Gold certified trainers", "our instructor team" |
| **Core** | `/pricing` | 8+ | Homepage hero CTA, All 5 Tiered Service pages, Locality Hub, About Us, Footer | All 5 Tiered Service Pages (`/services/yoga-at-home`, etc.), `/book-a-free-class`, `/contact-us` | "yoga home class pricing", "Platinum Gold Silver yoga plans", "transparent yoga fees" |
| **Core** | `/book-a-free-class` | 10+ | All Service Pages, All Locality Clusters, Pricing, Header CTA | WhatsApp routing (`wa.me/918273264561`), Homepage | "book a free trial class", "schedule home yoga trial", "reserve your session" |
| **Services Hub** | `/services` | 5+ | Homepage (nav & body), Footer, About Us, Blog hub | All 8 Active Service Pages, `/pricing`, `/yoga-teacher-at-home` | "home yoga services Delhi NCR", "our yoga & wellness service lines" |
| **Tiered Services** | `/services/yoga-at-home` | 15+ | Services Hub, Homepage, All 20 Locality Cluster Pages, `/pricing`, Condition pages | `/pricing`, `/our-teachers`, Top 3 Locality Clusters, `/yoga-for-conditions/back-pain`, Lead Gen CTA | "personal yoga teacher at home", "home yoga classes Delhi NCR", "doorstep yoga trainer" |
| **Tiered Services** | `/services/corporate-yoga` | 3+ | Services Hub, Homepage, Blog (corporate fitness post), `/pricing` | `/pricing`, `/contact-us`, Lead Gen WhatsApp CTA | "corporate yoga classes Delhi NCR", "office wellness programs", "employee yoga sessions" |
| **Tiered Services** | `/services/senior-citizen-yoga` | 4+ | Services Hub, `/yoga-for-conditions/senior-citizen-yoga`, `/yoga-for-conditions/back-pain`, `/pricing` | `/pricing`, `/yoga-for-conditions/senior-citizen-yoga`, `/our-teachers`, Lead Gen CTA | "senior citizen yoga at home", "gentle yoga for elderly", "geriatric yoga trainer" |
| **Tiered Services** | `/services/kids-yoga` | 3+ | Services Hub, Homepage, Blog (kids posture post), `/pricing` | `/pricing`, `/contact-us`, Lead Gen CTA | "kids yoga classes at home", "children fitness yoga", "posture yoga for kids" |
| **Tiered Services** | `/services/prenatal-postnatal-yoga` | 4+ | Services Hub, `/yoga-for-conditions/prenatal-yoga`, Blog (maternity guide), `/pricing` | `/pricing`, `/yoga-for-conditions/prenatal-yoga`, `/our-teachers`, Lead Gen CTA | "prenatal yoga at home", "postnatal yoga trainer", "maternity yoga classes Delhi" |
| **Special Services**| `/services/panchkarma` | 3+ | Services Hub, Homepage (Ayurveda section), Blog (Panchkarma post) | `/contact-us`, `/about-us`, Lead Gen WhatsApp CTA | "home panchkarma therapy Delhi", "Ayurvedic detoxification at home", "Panchkarma treatment" |
| **Special Services**| `/services/yoga-for-studio` | 2+ | Services Hub, About Us | `/contact-us`, `/our-teachers` | "yoga studio instructor placement", "B2B yoga trainer contracting" |
| **Special Services**| `/services/yoga-for-hospital` | 2+ | Services Hub, About Us | `/contact-us`, `/yoga-for-conditions` | "hospital clinical yoga support", "medical rehabilitation yoga" |
| **YTT Hub** | `/yoga-teacher-training` | 10+ | Homepage, Header/Footer, About Us, All 9 YTT Location Pages | All 5 YTT Program Pages, `/yoga-teacher-training/locations`, `/about-us` | "Yoga Teacher Training Institute", "registered yoga TTC India", "YTT courses" |
| **YTT Program** | `/yoga-teacher-training/200-hour-ttc` | 10+ | YTT Hub, All 9 YTT Location Pages, Blog (TTC guide), Homepage | All 9 YTT Location Pages, `/yoga-teacher-training/300-hour-ttc`, Lead Gen CTA | "200 hour yoga teacher training", "200 hour TTC course", "foundation yoga certification" |
| **YTT Program** | `/yoga-teacher-training/300-hour-ttc` | 10+ | YTT Hub, All 9 YTT Location Pages, `/yoga-teacher-training/200-hour-ttc` | All 9 YTT Location Pages, `/yoga-teacher-training/500-hour-ttc`, Lead Gen CTA | "300 hour advanced yoga TTC", "300 hour yoga teacher training" |
| **YTT Program** | `/yoga-teacher-training/500-hour-ttc` | 10+ | YTT Hub, All 9 YTT Location Pages, `/yoga-teacher-training/300-hour-ttc` | All 9 YTT Location Pages, `/yoga-teacher-training/locations/rishikesh`, Lead Gen CTA | "500 hour master yoga TTC", "500 hour yoga teacher certification" |
| **YTT Program** | `/yoga-teacher-training/200-hour-kundalini-ttc` | 10+ | YTT Hub, All 9 YTT Location Pages, Blog (Kundalini post) | All 9 YTT Location Pages, `/yoga-teacher-training/locations/rishikesh`, Lead Gen CTA | "200 hour Kundalini yoga TTC", "Kundalini teacher training India" |
| **YTT Program** | `/yoga-teacher-training/50-hour-yin-ttc` | 10+ | YTT Hub, All 9 YTT Location Pages, Blog (Yin yoga post) | All 9 YTT Location Pages, `/yoga-teacher-training/locations/dharamshala`, Lead Gen CTA | "50 hour Yin yoga TTC", "Yin yoga teacher training course" |
| **YTT Location Hub**| `/yoga-teacher-training/locations` | 6+ | YTT Hub, Homepage, Footer, All 9 YTT Location Pages | All 9 YTT Location Pages, All 5 YTT Program Pages | "YTT course locations", "yoga teacher training centers India", "YTT location network" |
| **YTT Location** | `/yoga-teacher-training/locations/[location]` | 6+ | YTT Location Hub, YTT Master Hub, Sibling YTT Location Pages | ALL 5 YTT Program Pages, YTT Location Hub, Lead Gen CTA | "yoga teacher training in [Location]", "yoga TTC [Location]", "yoga ashram [Location]" |
| **Condition Hub** | `/yoga-for-conditions` | 5+ | Homepage ("What's Bothering You?" section), Footer, Services Hub | All 7 Condition Pages, `/services/yoga-at-home` | "yoga for health conditions", "therapeutic yoga programs", "curative yoga Delhi" |
| **Condition Page** | `/yoga-for-conditions/[condition]` | 3+ | Condition Hub, Homepage Chips, Relevant Tiered Service Page, Relevant Blog post | Relevant Tiered Service Page (`/services/yoga-at-home`, etc.), `/pricing`, Lead Gen CTA | "yoga for [condition] at home", "[condition] relief yoga", "therapeutic yoga for [condition]" |
| **Locality Hub** | `/yoga-teacher-at-home` | 8+ | Homepage, Footer, All 20 Locality Cluster Pages, Services Hub | All 20 Locality Cluster Pages, `/services/yoga-at-home`, `/pricing` | "home yoga locality coverage", "yoga teacher near me Delhi NCR", "locality directory" |
| **Locality Cluster**| `/yoga-teacher-at-home/[city]/[cluster]` | 3+ | Master Locality Hub, Homepage, Sibling Locality Clusters (same city), `/services/yoga-at-home` | `/services/yoga-at-home`, `/pricing`, 2 Sibling Locality Clusters, Relevant Condition Page, Lead Gen CTA | "yoga teacher at home in [Cluster]", "home yoga classes [Cluster]", "personal yoga trainer [Cluster]" |

---

## 4. Anchor Text Enforcement & Rules

To prevent search engine spam penalties while ensuring maximum contextual relevance:

1. **Exact-Match Target Keywords (40% Weight):** Use target search terms matching the destination page's primary keyword cluster (e.g. `personal yoga teacher at home in South Delhi`).
2. **Partial-Match & Descriptive Variation (40% Weight):** Use natural variations and descriptive phrases (e.g. `experienced yoga instructor for home sessions in South Delhi`, `our 200-hour TTC program in Rishikesh`).
3. **Branded Anchors (20% Weight):** Use brand-infused anchors (e.g. `KayaSadhak home yoga plans`, `KayaSadhak YTT Institute`).
4. **STRICTLY PROHIBITED ANCHORS:** Generic click anchors such as `"click here"`, `"read more"`, `"link"`, `"this page"`, `"check this"`, or unformatted bare URLs.
