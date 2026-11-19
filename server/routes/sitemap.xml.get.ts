import { defineEventHandler, setHeader } from 'h3';
import { safarisData } from '../data/safaris';
import { destinationsData } from '../data/destinations';
import { treksData } from '../data/treks';
import { accommodationsData } from '../data/accommodations';

const siteUrl = 'https://www.safaricare.com';

const staticRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/safaris', priority: '0.9' },
  { path: '/trekking', priority: '0.9' },
  { path: '/destinations', priority: '0.8' },
  { path: '/accommodations', priority: '0.8' },
  { path: '/plan-your-safari', priority: '0.9' },
  { path: '/travel-guide', priority: '0.7' },
  { path: '/about-us', priority: '0.6' },
  { path: '/contact', priority: '0.6' }
];

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');

  const urls = [
    ...staticRoutes.map((route) => ({ path: route.path, priority: route.priority })),
    ...safarisData.map((safari) => ({ path: `/safaris/${safari.slug}`, priority: '0.8' })),
    ...treksData.map((trek) => ({ path: `/trekking/${trek.slug}`, priority: '0.8' })),
    ...destinationsData.map((destination) => ({ path: `/destinations/${destination.slug}`, priority: '0.7' })),
    ...accommodationsData.map((accommodation) => ({ path: `/accommodations/${accommodation.slug}`, priority: '0.7' }))
  ];

  const entries = urls
    .map(({ path, priority }) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
});
