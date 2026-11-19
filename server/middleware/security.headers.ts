import { eventHandler, appendResponseHeader, getHeader } from 'h3';

declare const process: { env: Record<string, string | undefined> };

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https://api.whatsapp.com https://wa.me",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "object-src 'none'"
].join('; ');

// Allowed origins for CORS. Same-origin is always allowed by browsers;
// this list only matters for explicit cross-origin API calls.
const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  process.env.NUXT_PUBLIC_APP_URL || ''
].filter(Boolean);

export default eventHandler((event) => {
  appendResponseHeader(event, 'X-Content-Type-Options', 'nosniff');
  appendResponseHeader(event, 'X-Frame-Options', 'DENY');
  appendResponseHeader(event, 'Referrer-Policy', 'strict-origin-when-cross-origin');
  appendResponseHeader(event, 'Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  appendResponseHeader(event, 'Content-Security-Policy', CSP);
  if (process.env.NODE_ENV === 'production') {
    appendResponseHeader(event, 'Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  appendResponseHeader(event, 'X-XSS-Protection', '1; mode=block');

  // Restrictive CORS: echo origin only if allowlisted; never wildcard.
  const origin = getHeader(event, 'origin');
  if (origin && ALLOWED_ORIGINS.includes(String(origin))) {
    appendResponseHeader(event, 'Access-Control-Allow-Origin', String(origin));
    appendResponseHeader(event, 'Vary', 'Origin');
  }
});

