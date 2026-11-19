const sharedDir = new URL('./shared', import.meta.url).pathname;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-18',
  devtools: { enabled: true },

  alias: {
    '#shared': sharedDir,
    '~~/shared': sharedDir,
    '~/shared': sharedDir,
    '@shared': sharedDir
  },

  nitro: {
    alias: {
      '#shared': sharedDir,
      '~~/shared': sharedDir,
      '~/shared': sharedDir,
      '@shared': sharedDir
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  typescript: {
    strict: true,
    typeCheck: false
  },

  routeRules: {
    '/index.php': { redirect: { to: '/', statusCode: 301 } },

    '/safaris.php': { redirect: { to: '/safaris', statusCode: 301 } },
    '/6_days_Northern_Circuit_Safari.php': { redirect: { to: '/safaris/6-day-northern-circuit-signature', statusCode: 301 } },
    '/7_days_Nothern_circuit.php': { redirect: { to: '/safaris/7-day-great-migration-safari', statusCode: 301 } },
    '/9_days_Northern_Circuit_Safari.php': { redirect: { to: '/safaris/9-day-northern-circuit-in-depth', statusCode: 301 } },
    '/6days-Mikumi-Selous.php': { redirect: { to: '/safaris/3-day-private-camping-adventure', statusCode: 301 } },
    '/10_days_Luxury_Safari.php': { redirect: { to: '/safaris/10-day-luxury-southern-circuit', statusCode: 301 } },
    '/16_days_Luxury_Safari_with_Beach_Extension_in_Zanzibar.php': { redirect: { to: '/safaris/16-day-luxury-safari-and-zanzibar', statusCode: 301 } },
    '/13_days_Safari_and_Trekking_Kilimanjaro.php': { redirect: { to: '/safaris/13-day-safari-and-kilimanjaro-climb', statusCode: 301 } },
    '/7_Days_Photographers_Camping_Itinerary.php': { redirect: { to: '/safaris/7-day-wildlife-photographers-safari', statusCode: 301 } },

    '/destinations.php': { redirect: { to: '/destinations', statusCode: 301 } },
    '/Serengeti_National_Park.php': { redirect: { to: '/destinations/serengeti-national-park', statusCode: 301 } },
    '/Ngorongoro_Conservation_area.php': { redirect: { to: '/destinations/ngorongoro-crater', statusCode: 301 } },
    '/Tarangire_National_Park.php': { redirect: { to: '/destinations/tarangire-national-park', statusCode: 301 } },
    '/Arusha_National_Park.php': { redirect: { to: '/destinations/arusha-national-park', statusCode: 301 } },
    '/Lake_Manyara_National_Park.php': { redirect: { to: '/destinations/lake-manyara-national-park', statusCode: 301 } },
    '/Selous_Game_Reserve.php': { redirect: { to: '/destinations/selous-game-reserve', statusCode: 301 } },
    '/Mikumi_National_Park.php': { redirect: { to: '/destinations/mikumi-national-park', statusCode: 301 } },
    '/Ruaha_National_Park.php': { redirect: { to: '/destinations/ruaha-national-park', statusCode: 301 } },
    '/Gombe_National_Park.php': { redirect: { to: '/destinations/gombe-stream-national-park', statusCode: 301 } },
    '/Zanzibar_Beach_excursion.php': { redirect: { to: '/destinations/zanzibar-archipelago', statusCode: 301 } },

    '/kilimanjaro.php': { redirect: { to: '/trekking', statusCode: 301 } },
    '/trekking.php': { redirect: { to: '/trekking', statusCode: 301 } },
    '/Mountain_Kilimanjaro.php': { redirect: { to: '/trekking/7-day-machame-kilimanjaro', statusCode: 301 } },
    '/Mount_meru.php': { redirect: { to: '/trekking/3-day-mount-meru', statusCode: 301 } },

    '/acc_arusha_town_moivaro_arushasafarilodge_arusha_hotel.php': { redirect: { to: '/accommodations/moivaro-coffee-plantation-lodge', statusCode: 301 } },
    '/acc_Serengeti_kirawira_serena.php': { redirect: { to: '/accommodations/kirawira-camp', statusCode: 301 } },
    '/acc_Tarangire.php': { redirect: { to: '/accommodations/tarangire-safari-lodges-camps', statusCode: 301 } },
    '/acc_Ngorongoro_sopalodge_craterforest_craterlodge.php': { redirect: { to: '/accommodations/ngorongoro-sopa-lodge', statusCode: 301 } },
    '/acc_karatu.php': { redirect: { to: '/accommodations/bougainvillea-safari-lodge', statusCode: 301 } },
    '/acc_lake_manyara.php': { redirect: { to: '/accommodations/lake-manyara-hotel', statusCode: 301 } },
    '/acc_Kilimanjaro.php': { redirect: { to: '/accommodations/kambi-ya-tembo', statusCode: 301 } },
    '/acc_DaresSalaam.php': { redirect: { to: '/accommodations/southern-sun-dar-es-salaam', statusCode: 301 } },
    '/acc_Zanzibar.php': { redirect: { to: '/accommodations/maruhubi-beach-villas', statusCode: 301 } },

    '/contact.php': { redirect: { to: '/contact', statusCode: 301 } },
    '/Contacts.php': { redirect: { to: '/contact', statusCode: 301 } },
    '/about.php': { redirect: { to: '/about-us', statusCode: 301 } },
    '/About_Tanzania.php': { redirect: { to: '/travel-guide', statusCode: 301 } },
    '/faq.php': { redirect: { to: '/travel-guide', statusCode: 301 } },
    '/What_to_carry_on_Safari.php': { redirect: { to: '/travel-guide', statusCode: 301 } },
    '/flight.php': { redirect: { to: '/travel-guide', statusCode: 301 } },
    '/travel-tips.php': { redirect: { to: '/travel-guide', statusCode: 301 } }
  },

  app: {
    head: {
      title: 'Safari Care | Tailored Tanzania Safaris & Wildlife Adventures',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Authentic, locally-led Tanzanian safari specialists based in Arusha. Discover tailored Serengeti wildlife migrations, Ngorongoro Crater tours, Mount Kilimanjaro climbs, and Zanzibar beach escapes.'
        },
        { name: 'theme-color', content: '#43766C' },
        { property: 'og:site_name', content: 'Safari Care Tanzania' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@SafariCare' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap'
        }
      ]
    }
  }
})
