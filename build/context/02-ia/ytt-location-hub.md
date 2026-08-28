# YTT Location Hub Architecture

## Overview & Scope
The YTT Location Hub targets aspiring yoga teachers searching for certified teacher training programs. Unlike home-yoga services, YTT operates across 9 dedicated locations:
1. Delhi
2. Gurugram
3. Noida
4. Chandigarh
5. Mohali
6. Haridwar
7. Dehradun
8. Rishikesh
9. Dharamshala

## Program Availability Confirmation
All 5 YTT programs run across all 9 locations:
1. 200-Hour YTT
2. 300-Hour YTT
3. 500-Hour YTT
4. 200-Hour Kundalini YTT
5. 50-Hour Yin YTT

## Isolation Guardrail
YTT Location pages are strictly separated from home-service locality pages. Schema on YTT location pages uses `Course` schema, NOT `LocalBusiness` / `areaServed` scoped to Delhi-NCR home yoga.
