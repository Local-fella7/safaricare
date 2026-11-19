const HTML_TAG_RE = /<[^>]*>/g;
const SCRIPT_RE = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

/**
 * Strip HTML tags and script blocks from a string to prevent XSS.
 * Returns the sanitized string.
 */
export function sanitizeHtml(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  let sanitized = value.replace(SCRIPT_RE, '');
  sanitized = sanitized.replace(HTML_TAG_RE, '');
  return sanitized;
}

/**
 * Recursively sanitize all string values in an object (e.g. request body).
 * Leaves non-string values untouched.
 */
export function sanitizeObject(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = sanitizeHtml(value);
    } else if (Array.isArray(value)) {
      result[key] = value.map((v) => (typeof v === 'string' ? sanitizeHtml(v) : v));
    } else if (value && typeof value === 'object') {
      result[key] = sanitizeObject(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }
  return result;
}
