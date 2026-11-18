import { z } from 'zod';

export const itineraryDaySchema = z.object({
  day: z.number().int().positive(),
  title: z.string().min(3),
  description: z.string().min(10),
  accommodation: z.string().optional(),
  meals: z.string().optional(),
  activities: z.array(z.string()).default([]),
  driveTime: z.string().optional()
});

export const safariPackageSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(5),
  durationDays: z.number().int().positive(),
  circuit: z.string().default('Northern Circuit'),
  travelStyle: z.string().default('Luxury Lodge'),
  featured: z.boolean().default(false),
  summary: z.string().min(20),
  heroImage: z.string(),
  gallery: z.array(z.string()).default([]),
  destinations: z.array(z.string()).min(1),
  itinerary: z.array(itineraryDaySchema).min(1),
  inclusions: z.array(z.string()).min(1),
  exclusions: z.array(z.string()).min(1),
  highlights: z.array(z.string()).default([]),
  startLocation: z.string().default('Arusha / Kilimanjaro Airport (JRO)'),
  endLocation: z.string().default('Arusha / Kilimanjaro Airport (JRO)'),
  bestSeason: z.string().default('Year-round (Peak: June–October & Dec–March)'),
  accommodationNotes: z.string().optional(),
  customizationOptions: z.array(z.string()).default([]),
  priceNote: z.string().default('Tailor-made private journey - Inquire for custom quote'),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(['draft', 'review', 'published']).default('published')
});

export type ItineraryDay = z.infer<typeof itineraryDaySchema>;
export type SafariPackage = z.infer<typeof safariPackageSchema>;
