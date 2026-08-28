# Exact Taxonomy & URL Structure Standard — KayaSadhak

> **Single Source of Truth for URL Taxonomy, Canonical Rules & Structural Separation**  
> **Build Phase:** Phase 2 (IA & Sitemap locked by Sub-Agent 2)  
> **Canonical Domain:** `https://www.kayasadhak.com`

---

## 1. Canonical Domain & Global URL Conventions

### 1.1 Canonical Standard
- **Primary Canonical Domain:** `https://www.kayasadhak.com`
- **Protocol:** HTTPS (Strict TLS/SSL mandatory)
- **Subdomain:** `www` is the canonical prefix.
- **Trailing Slash Standard:** Non-trailing slash standard enforced sitewide (e.g., `https://www.kayasadhak.com/pricing`).

### 1.2 Global Redirection Rules (Server-Level 301 Permanent Redirects)
Every non-canonical URL variation MUST trigger a single 301 permanent redirect at the edge/server level:
1. `http://kayasadhak.com/*` → `https://www.kayasadhak.com/*`
2. `http://www.kayasadhak.com/*` → `https://www.kayasadhak.com/*`
3. `https://kayasadhak.com/*` → `https://www.kayasadhak.com/*`
4. `https://www.kayasadhak.com/index.html` → `https://www.kayasadhak.com/`
5. `https://www.kayasadhak.com/pricing/` → `https://www.kayasadhak.com/pricing` (Trailing slash stripping rule)

---

## 2. URL Formatting Rules & Slug Taxonomy

1. **Case Sensitivity:** All URLs must be strictly lowercase.
2. **Word Separation:** Words are separated exclusively using single hyphens (`kebab-case`). Underscores (`_`) or spaces (`%20`) are strictly forbidden.
3. **Character Set:** Alphanumeric characters (`a-z`, `0-9`) and hyphens (`-`) only. Special characters, punctuation, or non-ASCII characters are prohibited.
4. **File Extensions:** Clean URLs only. Extensions such as `.html`, `.php`, `.asp`, `.aspx`, or `.jsx` are prohibited.
5. **Nesting Depth Limit:** Maximum nesting depth is capped at 3 directory levels to preserve crawl depth and PR flow (e.g., `/yoga-teacher-at-home/[region]/[cluster-slug]`).

---

## 3. Structural Separation Protocol: Home Services vs. YTT Network

> **CRITICAL GUARDRAIL:** Home Yoga Services and Yoga Teacher Training (YTT) represent two distinct intent vectors, geographic footprints, and regulatory frameworks. They MUST be kept in completely separate URL namespaces.

| Attribute | Home Yoga Services Footprint | YTT Institute Network Footprint |
|---|---|---|
| **Root Namespace** | `/yoga-teacher-at-home/` | `/yoga-teacher-training/locations/` |
| **Geographic Scope** | Local service area (Delhi-NCR + Chandigarh Tricity only) | Regional/Global destination (Delhi-NCR + Tricity + Haridwar, Dehradun, Rishikesh, Dharamshala) |
| **Target Intent** | Local residents seeking doorstep yoga instructor | Aspiring instructors seeking professional certification |
| **Schema Type** | `LocalBusiness` / `Service` with `areaServed` | `Course` / `EducationalOrganization` |
| **Cross-Linking Rule** | Links ONLY to local home-service pages and pricing | Links to YTT programs, syllabus, certifying bodies, and accommodation |

### Technical Enforcement Rules:
1. **Never merge location hubs:** Do NOT create a single `/locations/` folder that combines home yoga localities (e.g., South Delhi) with YTT centers (e.g., Rishikesh).
2. **Rishikesh / Haridwar / Dehradun / Dharamshala Isolation:** These 4 locations exist EXCLUSIVELY under `/yoga-teacher-training/locations/`. They MUST NOT exist under `/yoga-teacher-at-home/` as KayaSadhak does not offer doorstep home yoga tutoring in Rishikesh or Dharamshala.

---

## 4. Parameter Handling & Canonical Tag Standards

1. **Self-Referencing Canonical Tags:** Every HTML page must include an explicit `<link rel="canonical" href="https://www.kayasadhak.com/clean-path">` tag in its `<head>`.
2. **URL Parameter Cleaning:** Any URL accessed with query parameters (e.g. tracking parameters `?utm_source=...`, `?ref=...`, or sorting parameters `?tier=gold`) MUST output a canonical tag pointing back to the clean base URL without query strings.
3. **No Index on Filtered Parameters:** Dynamic parameters used for search or complex filtering must carry `<meta name="robots" content="noindex, follow">` while preserving link equity.

---

## 5. Complete Itemized URL Directory Taxonomy

### 5.1 Core & Utility Pages Taxonomy
| Page Category | URL Standard Pattern | Example Canonical URL | Parameter Rule |
|---|---|---|---|
| Homepage | `/` | `https://www.kayasadhak.com/` | Canonical base |
| Brand / Bio | `/[page-slug]` | `https://www.kayasadhak.com/about-us` | Canonical base |
| Teacher Hub | `/our-teachers` | `https://www.kayasadhak.com/our-teachers` | Filters strip to base |
| Teacher Bio | `/our-teachers/[teacher-slug]` | `https://www.kayasadhak.com/our-teachers/nivil-chaudhary` | Dynamic slug |
| Commercial | `/pricing` | `https://www.kayasadhak.com/pricing` | Canonical base |
| Booking | `/book-a-free-class` | `https://www.kayasadhak.com/book-a-free-class` | Funnel steps strip to base |
| Informational | `/blog/[post-slug]` | `https://www.kayasadhak.com/blog/yoga-for-back-pain-at-home-guide` | Category slugs omitted from post path |

### 5.2 Services Hub Taxonomy (`/services/`)
| Service Type | URL Standard Pattern | Example Canonical URL | Notes |
|---|---|---|---|
| Service Hub | `/services` | `https://www.kayasadhak.com/services` | Parent Hub |
| Tiered Service | `/services/[service-slug]` | `https://www.kayasadhak.com/services/yoga-at-home` | 5 Tiered Pages |
| Specialized Service | `/services/[service-slug]` | `https://www.kayasadhak.com/services/panchkarma` | 3 Non-Tiered Pages |
| Phase 2 Service | `/services/[service-slug]` | `https://www.kayasadhak.com/services/dance-classes` | Flagged Phase 2 |

### 5.3 YTT Hub & Location Network Taxonomy (`/yoga-teacher-training/`)
| Category | URL Standard Pattern | Example Canonical URL | Notes |
|---|---|---|---|
| YTT Hub | `/yoga-teacher-training` | `https://www.kayasadhak.com/yoga-teacher-training` | Program Master Hub |
| YTT Program | `/yoga-teacher-training/[program-slug]` | `https://www.kayasadhak.com/yoga-teacher-training/200-hour-ttc` | 5 Program Pages |
| YTT Location Hub | `/yoga-teacher-training/locations` | `https://www.kayasadhak.com/yoga-teacher-training/locations` | Location Master Hub |
| YTT Location Page | `/yoga-teacher-training/locations/[location-slug]` | `https://www.kayasadhak.com/yoga-teacher-training/locations/rishikesh` | 9 Destination Pages |

### 5.4 Condition-Specific Hub Taxonomy (`/yoga-for-conditions/`)
| Category | URL Standard Pattern | Example Canonical URL | Notes |
|---|---|---|---|
| Condition Hub | `/yoga-for-conditions` | `https://www.kayasadhak.com/yoga-for-conditions` | Condition Master Hub |
| Condition Page | `/yoga-for-conditions/[condition-slug]` | `https://www.kayasadhak.com/yoga-for-conditions/back-pain` | 7 Condition Pages |

### 5.5 Home-Services Locality Hub Taxonomy (`/yoga-teacher-at-home/`)
| Region | URL Standard Pattern | Example Canonical URL | Notes |
|---|---|---|---|
| Locality Hub | `/yoga-teacher-at-home` | `https://www.kayasadhak.com/yoga-teacher-at-home` | Master Locality Hub |
| Delhi Cluster | `/yoga-teacher-at-home/delhi/[cluster-slug]` | `https://www.kayasadhak.com/yoga-teacher-at-home/delhi/south-delhi` | 6 Zone Clusters |
| Noida Cluster | `/yoga-teacher-at-home/noida/[cluster-slug]` | `https://www.kayasadhak.com/yoga-teacher-at-home/noida/central-prime-sectors` | 4 Zone Clusters |
| Gr. Noida Cluster | `/yoga-teacher-at-home/greater-noida` | `https://www.kayasadhak.com/yoga-teacher-at-home/greater-noida` | 1 Zone Cluster |
| Ghaziabad Cluster | `/yoga-teacher-at-home/ghaziabad` | `https://www.kayasadhak.com/yoga-teacher-at-home/ghaziabad` | 1 Zone Cluster |
| Faridabad Cluster | `/yoga-teacher-at-home/faridabad` | `https://www.kayasadhak.com/yoga-teacher-at-home/faridabad` | 1 Zone Cluster |
| Gurugram Cluster | `/yoga-teacher-at-home/gurugram/[cluster-slug]` | `https://www.kayasadhak.com/yoga-teacher-at-home/gurugram/dlf-central` | 4 Zone Clusters |
| Tricity Cluster | `/yoga-teacher-at-home/chandigarh-tricity/[city-slug]` | `https://www.kayasadhak.com/yoga-teacher-at-home/chandigarh-tricity/chandigarh` | 3 Tricity Pages |
