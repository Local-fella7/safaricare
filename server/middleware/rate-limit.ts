import { eventHandler, createError, getRouterParam } from 'h3';

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 submissions per minute per IP
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

let lastCleanup = Date.now();

function getClientIP(event: any): string {
  const forwarded = event.node.req.headers['x-forwarded-for'];
  if (forwarded) {
    return String(forwarded).split(',')[0].trim();
  }
  return event.node.req.connection?.remoteAddress || 'unknown';
}

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [ip, entry] of store.entries()) {
    if (now > entry.resetAt) {
      store.delete(ip);
    }
  }
}

export default eventHandler((event) => {
  const path = event.node.req.url?.split('?')[0] || '';
  const method = event.node.req.method;

  // Only rate limit POST to /api/inquiries
  if (method !== 'POST' || !path.startsWith('/api/inquiries')) {
    return;
  }

  cleanup();

  const ip = getClientIP(event);
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }

  if (entry.count >= MAX_REQUESTS) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many inquiry submissions. Please try again later.'
    });
  }

  entry.count += 1;
});
