import { z } from 'zod';

export const safariInquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(120, 'Name must be under 120 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().trim().optional(),
  experience: z.enum([
    'luxury',
    'honeymoon',
    'family',
    'photography',
    'safari-zanzibar',
    'trekking',
    'camping'
  ], {
    errorMap: () => ({ message: 'Please select an experience style' })
  }),
  travelers: z.coerce.number().int().min(1, 'At least 1 traveler required').max(30, 'For groups larger than 30, please contact us directly'),
  arrivalDate: z.string().optional(),
  duration: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().max(3000, 'Message cannot exceed 3000 characters').optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the privacy policy to proceed' })
  }),
  // Honeypot field: must remain empty. Bots often fill all fields.
  website: z.string().optional().refine((val) => !val || val.trim() === '', {
    message: 'Invalid submission'
  })
});

export type SafariInquiry = z.infer<typeof safariInquirySchema>;
