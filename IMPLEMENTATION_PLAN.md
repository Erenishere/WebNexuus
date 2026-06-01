# WebNexus Corporate Application Plan

## Objective

Build a separate, cleaner WebNexus corporate site inside `application/` without disturbing the current `webnexus/` app.

The target direction from the screenshots is:

- light, minimal, corporate visual system
- proper page-based navigation instead of app-state tab switching
- clearer business copy and less technical filler text
- stronger service, portfolio, and contact pages
- a visible `Pricing` entry in the navigation

## What Exists Now

The current app in `../webnexus/` already gives us:

- React + Vite setup
- reusable sections for hero, services, portfolio, about, and contact
- service and project data models
- modal patterns for quote/details

## Main Gaps To Fix In The New Application

1. Navigation is state-driven in `App.tsx` instead of real routes.
2. The current design defaults to dark mode, while the target is a bright corporate layout.
3. The content is too dense and overly technical for a company website.
4. The current contact flow is mostly frontend-only and still contains placeholder behavior.
5. `Pricing` appears in the target navigation but does not exist in the current page model.
6. The screenshots show more structured page layouts than the current single-view experience.

## Proposed Folder Structure

```text
application/
  src/
    app/
    assets/
    components/
      layout/
      ui/
    pages/
      Home/
      Services/
      Portfolio/
      About/
      Pricing/
      Contact/
    sections/
    data/
    styles/
```

## Implementation Plan

## Current Status Snapshot

As of 2026-05-25, the new `application/` build is no longer just a scaffold.

- Completed:
  - Next.js App Router shell in `application/`
  - route-based navigation for home, services, service detail, portfolio, portfolio detail, about, pricing, contact, privacy, and terms
  - light-first visual system and shared header/footer structure
  - main page implementations for home, services, portfolio, about, pricing, and contact
  - portfolio detail pages wired from the grid instead of sending every project action to contact
  - legal/footer placeholder links replaced with real pages
  - contact form posts through `/api/contact` and supports SMTP/Gmail app-password or `FORMSPREE_ENDPOINT`
  - build verification passing with `npm run build`

- Remaining high-value polish:
  - replace or improve remaining remote image placeholders with local branded assets
  - refine corporate copy further where it still feels generic or overly broad
  - configure production email delivery environment variables in Vercel
  - run responsive and visual QA against the reference screenshots

### Phase 1: Foundation

- Create the new app shell in `application/`
- Set up real routing for:
  - `/`
  - `/services`
  - `/portfolio`
  - `/about`
  - `/pricing`
  - `/contact`
- Define a light-first design system:
  - blue accent
  - white and soft gray surfaces
  - consistent spacing scale
  - button, card, badge, and form styles

### Phase 2: Shared Layout

- Build a reusable header matching the screenshots
- Build a clean footer with:
  - brand summary
  - navigation
  - legal links
- Add a shared page hero pattern for inner pages

### Phase 3: Page Implementation

#### Home

- large left-aligned hero copy
- CTA pair: consultation and services/portfolio
- right-side featured image panel
- four service highlight cards
- bottom CTA strip

#### Services

- section intro
- structured service cards
- featured sub-services / mini project examples
- clearer business outcomes per service

#### Portfolio

- portfolio grid with cleaner cards
- category tags
- detail action per project
- better visual placeholders or real local assets later

#### About

- company overview
- process / engagement model
- trust points or differentiators

#### Pricing

- pricing tiers or engagement models
- what is included
- CTA to request a quote

#### Contact

- contact intro panel
- expert advice / instant chat card
- project request form
- cleaner field labels and validation

### Phase 4: Content Cleanup

- rewrite headings and descriptions to sound corporate and client-facing
- remove exaggerated technical phrases
- standardize service and portfolio copy
- align labels with the screenshot style

### Phase 5: Interaction And Data

- connect navbar links to routes
- keep quote modal only if it still fits the simpler direction
- replace alert-based flows with proper success states
- prepare contact form for backend/email integration

### Phase 6: QA

- responsive pass for desktop, tablet, and mobile
- build verification
- content consistency pass
- visual comparison against screenshots

## Recommended Next Slice

The strongest next continuation is Phase 6 polish:

1. Responsive QA pass across major breakpoints
2. Visual polish against the screenshots
3. Content consistency cleanup
4. Optional replacement of remote placeholder imagery with local assets

## Recommended Build Order

1. App shell, routes, and layout
2. Home page
3. Services page
4. Portfolio page
5. Contact page
6. About page
7. Pricing page
8. Final polish and responsive QA

## Suggested Reuse From Current App

- adapt data from `../webnexus/src/data.ts`
- reuse icon direction where helpful
- reuse only the parts that fit the lighter corporate design
- do not carry over the dark-mode-first styling as the default

## Notes

- I could not open the shared ChatGPT conversation link from this environment, so this plan is based on the current codebase plus the screenshots you attached.
- The app has now progressed beyond scaffold status and is building successfully.
- The next practical continuation is QA and visual refinement rather than more route scaffolding.
