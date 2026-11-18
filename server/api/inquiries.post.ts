import { safariInquirySchema } from '../../shared/schemas/safariInquiry';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = safariInquirySchema.safeParse(body);

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
