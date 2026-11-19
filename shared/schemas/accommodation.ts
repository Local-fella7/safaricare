import { z } from 'zod';

export const accommodationSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(3),
  location: z.string().min(2),
  region: z.string().min(2),
  category: z.enum(['Luxury Lodge', 'Tented Camp', 'Hotel', 'Boutique Hotel']),
  tagline: z.string().min(5),
  summary: z.string().min(20),
  heroImage: z.string(),
  gallery: z.array(z.string()).default([]),
  amenities: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  nearbyDestinations: z.array(z.string()).default([]),
  priceNote: z.string().default('Rates on request — combined with your private safari itinerary'),
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export type Accommodation = z.infer<typeof accommodationSchema>;
