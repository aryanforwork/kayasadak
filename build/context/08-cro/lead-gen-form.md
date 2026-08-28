# Lead Generation Form Specification

## Overview & Placement
The Lead Generation Form is the primary site-wide lead conversion component, embedded on:
- Homepage Hero
- `/pricing`
- All 5 Tiered Service Pages (`/services/yoga-at-home`, etc.)
- All Locality Cluster Pages (`/yoga-teacher-at-home/*`)
- All YTT Pages (`/yoga-teacher-training/*`)

## Form Fields & Validation
1. **Full Name:** Text input (Required)
2. **Phone Number:** Tel input (Required, 10-digit Indian phone validation)
3. **Service Interest:** Select Dropdown (Required: Home Yoga, Corporate Yoga, Senior Citizen Yoga, Kids Yoga, Prenatal/Postnatal Yoga, YTT)
4. **Locality / Area:** Text input (Optional)

## Submission Flow
Form DOES NOT post to a silent email server. Upon submission:
1. Form constructs a formatted WhatsApp message:
   `Hi KayaSadhak, I'm [Name] (+91-[Phone]). I am interested in [Service Interest] in [Locality]. Please contact me with pricing details.`
2. Trigger redirect to WhatsApp Web/App:
   `https://wa.me/918273264561?text=ENCODED_MESSAGE`
