# Phased Implementation Roadmap

## Phase 1: Dependencies, SCSS & Design System Tokens
    • Install Bootstrap 5, Bootstrap Icons, Sass, Zod, and Popper.js.
    • Configure nuxt.config.ts and tsconfig.json for strict TypeScript.
    • Create app/assets/scss/main.scss embedding your specified color palette (#43766C, #F8FAE5, #B19470, #76453B) with Bootstrap overrides.
    
## Phase 2: Zod Schemas, Domain Types & Data Repository
    • Define shared runtime schemas in shared/schemas/ (safariPackage.ts, destination.ts, safariInquiry.ts).
    • Populate structured inventory data (server/data/safaris.ts & destinations.ts) based on the guide's packages (3-day camping, 6-day/7-day Northern Circuit,
      Southern luxury, Zanzibar, Kilimanjaro).
    • Build server API endpoints (/api/safaris, /api/safaris/[slug], /api/destinations).

## Phase 3: Global Layout & Navigation
    • Implement the global default.vue layout.
    • Build SiteHeader.vue with authentic branding and "Plan My Safari" CTA, MobileNav.vue (Vue-reactive offcanvas drawer), and the comprehensive SiteFooter.
      vue.

## Phase 4: Homepage & Reusable Showcase Cards
    • Implement the homepage (app/pages/index.vue) using the starter editorial copy: Hero banner, local Arusha brand story, Experience categories, Curated
      Safari packages, Destination cards, and Trust/Testimonials.
    • Create reusable SafariCard.vue and DestinationCard.vue.

## Phase 5: Safari Catalog & Dynamic Itinerary Detail Pages
    • Build app/pages/safaris/index.vue with duration, circuit, and travel style filters.
    • Build app/pages/safaris/[slug].vue featuring an interactive day-by-day ItineraryTimeline.vue, inclusions/exclusions list, and sticky inquiry sidebar.

## Phase 6: Destinations, Trekking & Travel Guide Pages
    • Create destination guides (/destinations & /destinations/[slug] for Serengeti, Ngorongoro, Tarangire, etc.).
    • Build Mount Kilimanjaro & Meru trekking guide (/trekking).
    • Build Travel Guide & FAQs (/travel-guide), About Us (/about-us), and Contact page (/contact).

## Phase 7: Interactive Inquiry System & Nitro Server Handler
    • Create app/composables/useSafariInquiry.ts with reactive client-side Zod validation and Bootstrap .is-invalid states.
    • Create app/components/forms/InquiryForm.vue and dedicated app/pages/plan-your-safari.vue.
    • Build server/api/inquiries.post.ts with 422 error handling and payload validation.

## Phase 8: SEO, Redirects, TypeCheck & Build QA
    • Setup 301 redirects from legacy .php URLs in Nuxt config.
    • Add meta tags, OpenGraph data, robots.txt, and sitemap.
    • Run strict typecheck (npx nuxi typecheck) and production build (pnpm run build).