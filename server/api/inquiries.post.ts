import { safariInquirySchema } from '../../shared/schemas/safariInquiry';
import { sanitizeObject } from '../../shared/utils/sanitize';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Sanitize all string inputs to prevent XSS before validation.
  const sanitizedBody = sanitizeObject(body as Record<string, unknown>);

  // Honeypot check: if the hidden website field is filled, silently reject.
  // Do not reveal which field triggered rejection to avoid tipping off bots.
  if (sanitizedBody.website && String(sanitizedBody.website).trim() !== '') {
    return {
      ok: true,
      received: true,
      message: 'Thank you! Your inquiry has been received.'
    };
  }

  const result = safariInquirySchema.safeParse(sanitizedBody);

  if (!result.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Invalid inquiry data submitted',
      data: {
        errors: result.error.flatten().fieldErrors
      }
    });
  }

  const validInquiry = result.data;
  const inquiryId = `SC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  // In production, dispatch to email/CRM provider (Resend, SendGrid, etc.)
  console.log(`[Safari Care] Inquiry received #${inquiryId}:`, {
    fullName: validInquiry.fullName,
    email: validInquiry.email,
    experience: validInquiry.experience,
    travelers: validInquiry.travelers,
    arrivalDate: validInquiry.arrivalDate
  });

  return {
    ok: true,
    received: true,
    inquiryId,
    message: 'Thank you! Your custom safari inquiry has been received. Our Arusha travel specialist will reply within 24 hours.'
  };
});
