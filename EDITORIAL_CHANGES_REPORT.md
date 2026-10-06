# MMM Website Content Editorial Report

## Overview
This report documents all editorial content changes made to the Muslim Medical Mission (MMM) website to align long-form descriptions with the principle of "Let the work speak for itself." The changes replace exaggerated, emotional, or unsupported language with factual, credible, and calm descriptions while preserving MMM's Islamic identity and verified facts.

## Files Changed

### 1. `src/data/site.ts`
Edited 5 programme entries and associated report data:

#### a) Gaza Field Clinics (slug: "gaza-field-clinics")
- **Before**: Body contained "The work is unglamorous and repetitive and it is what keeps people alive:" - dramatic/heroic language
- **After**: Replaced with factual description: "Muslim Medical Mission operates field clinics in Gaza, providing consultations, wound care, medicines and paediatric care through paramedic and clinical teams working in shelters and tented treatment areas." Second paragraph preserved factual caseload and service details (wound care, respiratory infections, skin disease, malnutrition, chronic conditions; proper dressings, full antibiotic courses, vital sign monitoring, child weight checks, referrals). Third paragraph (Pakistan-Gaza relief connection) kept as-is since it's already factual.

#### b) Winter Packages (slug: "winter-packages")
- **Before**: First body paragraph included "Winter kills infants and the elderly in canvas shelters every year, and it does so quietly, without making the news." - emotional language
- **After**: Removed the dramatic sentence. First paragraph now simply states "A tent gives shelter from rain and almost nothing against cold." Second paragraph preserved unchanged (packages contents and household-by-household distribution tracking).

#### c) Health Education (slug: "health-education")
- **Before**: First body paragraph ended with "will save more lives than any single camp." - unsupported comparison/superlative
- **After**: Removed the comparison phrase. First paragraph now reads: "Most of the illness our doctors see in the field was preventable. Clean water handling, hand hygiene, recognising the warning signs in a sick infant and knowing when a fever needs a clinic rather than a home remedy are key aspects of health education." Second paragraph preserved unchanged (campaigns through trusted institutions, local language, repeat visits).

#### d) Professional Development (slug: "professional-development")
- **Before**: Second body paragraph ended with "because a mission that trains no successors ends with its founders." - metaphorical language
- **After**: Replaced with factual description: "Muslim Medical Mission provides continuing education, mentoring and study sessions for students, junior doctors and practising healthcare professionals. The programme also includes Islamic medical ethics as part of MMM's approach to professional development." First paragraph preserved (founding purpose, Islamic conduct, patient communication).

#### e) Training / First Responder Training (slug: "training")
- **Before**: First body paragraph contained "the highest return intervention available to us." - comparative language. Also, the bls-rescue-1122 report body and excerpt contained "highest return intervention available to us" and "certified frontline lifesavers."
- **After**: 
  - Programme body: Removed "the highest return intervention available to us." First paragraph now reads: "In most of the districts we work in, the first person to reach a casualty is not an ambulance crew. It is a neighbour. Training that neighbour properly is valuable for emergency response."
  - Report body: Removed "highest return intervention available to us" and changed "certified frontline lifesavers" to "certified lifesavers"
  - Report excerpt: Changed "certified frontline lifesavers" to "certified lifesavers"

### 2. `src/components/home/GazaBand.tsx`
- **Before**: "Our Gaza operation runs on the logic that keeps people alive when a health system has stopped functioning." - dramatic language
- **After**: "Our Gaza operation runs on the logic that provides essential healthcare when a health system has stopped functioning." - factual rephrase

### 3. `src/components/Hero.tsx`
- **Before**: Both `subtext` and `subtextMobile` for the "rescue" slide contained "frontline lifesavers." - hero/military terminology
- **After**: Both `subtext` and `subtextMobile` now read "lifesavers" (removed "frontline") - calm, credible language without heroic framing

## Pages Changed
- **gaza-field-clinics** page: Body rewritten to be factual and restrained
- **winter-packages** page: First body paragraph simplified, removing emotional language
- **health-education** page: First body paragraph had comparison removed
- **professional-development** page: Second body paragraph had metaphor removed
- **training/paramedic-training** page: First body paragraph had comparative language removed; report body and excerpt updated
- **homepage GazaBand**: "keeps people alive" rephrased to factual description
- **homepage Hero (rescue slide)**: "frontline lifesavers" changed to "lifesavers"

## Pages Intentionally Left Unchanged
The following pages were already factual and professional, and were not modified:
- **Prison Healthcare**: Summary and body already factual and restrained
- **Flood Medical Camps**: Summary already matches approved version
- **Flood Relief**: Summary already matches approved version
- **Water for Life**: Summary already matches approved version
- **Save Vision**: Summary already includes "partner hospitals" which is supported by the project's own data; highlights already state "Cataract surgery: Referred to partner hospitals"
- **Disaster Response**: Phase descriptions are factual and operational
- **About page**: Mission/vision/timeline text preserved as institutional/established language
- **Impact counters/statistics**: Verified numbers preserved (1M+ patients, 20 years, etc.)

## Claims Not Changed (Preserved Facts)
- **1,000,000+ patients served**: Verified running count documented over two decades of camps (confirmed in both impact stats and field report)
- **20+ years of service**: Verified organisational history
- **12+ national disasters responded to**: Documented response history
- **3+ years serving Gaza**: Confirmed humanitarian assistance period
- **15+ regular flagship programmes**: Standing year-round programmes
- **88% direct programme delivery**: Allocation data (88% programme, 8% logistics, 4% administration)
- **Partner hospitals in Save Vision**: Already present in the project's own data structure
- **Islamic identity and values**: Preserved throughout (motto, mission, means, Shariah guidance)

## Claims Requiring Human Verification
(The MMM team should verify these if not already documented):
- None identified as requiring immediate action. All claims in the edited content were either preserved (if factual) or removed (if unsupported). The edits followed the principle of removing only unsupported exaggeration while keeping verified operational details.

## Technical Validation
- **TypeScript check**: `npx tsc --noEmit` passed with zero errors
- **No design/UI changes**: Only text content was modified; visual design, layouts, animations, responsive behavior, images, colors, fonts, spacing, and navigation remain completely unchanged
- **No redesign**: URL structure, routing, metadata structure, SEO architecture, page hierarchy, component architecture, animations, responsive layouts, image positioning, visual design, and existing functionality were all preserved

## Final Diff Summary
The changes are exclusively editorial - removing or rephrasing exaggerated, emotional, or unsupported language in long-form descriptions. The website's structure, visual identity, and all factual claims remain intact. The result is that MMM now sounds like "a serious, established medical and humanitarian organization confidently explaining its work" rather than "a website trying to convince visitors that the organization is heroic."

---
**Total files modified**: 3
- `src/data/site.ts` (5 programme entries edited)
- `src/components/home/GazaBand.tsx` (1 edit)
- `src/components/Hero.tsx` (1 edit)

**Total pages with content changes**: 7 programme/display pages + 2 homepage components