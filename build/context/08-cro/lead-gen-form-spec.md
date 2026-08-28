# Site-Wide Lead Generation Form Specification (CRO & UX)

> **File:** `/context/08-cro/lead-gen-form-spec.md`  
> **Role:** Sub-Agent 8 — UX/CRO Forms & Conversion Agent  
> **Status:** Locked & Spec-Ready  
> **Canonical Domain:** `https://www.kayasadhak.com`  
> **Primary Direct Routing:** WhatsApp (`wa.me/918273264561`) & Phone (`tel:+918273264561`)

---

## 1. Executive Summary & Conversion Philosophy

The **KayaSadhak Site-Wide Lead Generation Form** is the central, high-intent lead capture mechanism across the entire digital platform. Unlike traditional form implementations that dump entries into unmonitored database queues or silent email servers, KayaSadhak's conversion engine routes leads **instantly to WhatsApp (`wa.me/918273264561`)**, pre-formatted with user inputs and page context.

### Core Conversion Principles
1. **Frictionless Lead Capture:** Maximum of 4 input fields to maximize mobile completion rate (>75% traffic expected on mobile).
2. **Instant Gratification:** Handoff straight to direct messaging with Founder Nivil Chaudhary and team within 1 click.
3. **Contextual Intelligence:** Pre-filled message dynamically adapts based on the page where the form is submitted (e.g., Homepage vs. Senior Citizen Yoga vs. Rishikesh YTT).
4. **Phone Fallback Support:** Clear click-to-call link for users who prefer direct phone calls over WhatsApp.
5. **Strict Design System Alignment:** Built using design tokens (`#1F4A3C`, `#FAF7F1`, `#C08A3E`, Poppins & Inter fonts).

---

## 2. Placements & Contextual UI Variants

| Placement Context | Page URLs | UX Presentation | Contextual Pre-Filled Header |
|---|---|---|---|
| **Homepage Hero** | `/` | Embedded 2-column hero card | "Book Your Free Trial Home Session" |
| **Tiered Service Pages (5)** | `/services/yoga-at-home`<br>`/services/corporate-yoga`<br>`/services/senior-citizen-yoga`<br>`/services/kids-yoga`<br>`/services/prenatal-postnatal-yoga` | Mid-page section + sticky sidebar | "Request Personal Instructor Callback for [Service Name]" |
| **Pricing Hub** | `/pricing` | Embedded under pricing table | "Get Custom Quote & Instructor Matching" |
| **Locality Cluster Pages** | `/yoga-teacher-at-home/*` | Embedded above footer / sticky hero | "Check Instructor Availability in [Locality]" |
| **YTT Hub & Locations (9)** | `/yoga-teacher-training/*` | Intake inquiry box | "Enquire for Upcoming YTT Batch Seats" |
| **Mobile Sticky CTA Bar** | All viewports < 768px | Fixed bottom bar button opening slide-up modal | "Quick Inquiry on WhatsApp" |

---

## 3. Technical WhatsApp Message Construction & Routing Logic

When the user clicks the submission CTA:
1. Prevent default form POST behavior via JavaScript `event.preventDefault()`.
2. Sanitize and extract all 4 field values (`Name`, `Phone`, `Service`, `Locality`).
3. Construct formatted text payload and redirect to `https://wa.me/918273264561?text=[ENCODED_PAYLOAD]`.
