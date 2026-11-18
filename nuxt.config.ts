import { fileURLToPath } from 'node:url';

const sharedDir = fileURLToPath(new URL('./shared', import.meta.url));

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
    // 301 Redirects from legacy .php URLs
    '/index.php': { redirect: { to: '/', status: 301 } },
    '/safaris.php': { redirect: { to: '/safaris', status: 301 } },
    '/destinations.php': { redirect: { to: '/destinations', status: 301 } },
    '/kilimanjaro.php': { redirect: { to: '/trekking', status: 301 } },
    '/trekking.php': { redirect: { to: '/trekking', status: 301 } },
    '/contact.php': { redirect: { to: '/contact', status: 301 } },
    '/about.php': { redirect: { to: '/about-us', status: 301 } },
    '/faq.php': { redirect: { to: '/travel-guide', status: 301 } },
    '/travel-tips.php': { redirect: { to: '/travel-guide', status: 301 } }
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
        { property: 'og:type', content: 'website' }
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
