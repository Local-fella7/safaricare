import { z } from 'zod';
import { itineraryDaySchema } from './safariPackage';

export const trekSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(5),
  mountain: z.enum(['Kilimanjaro', 'Meru']),
  routeName: z.string().min(2),
  durationDays: z.number().int().positive(),
  difficulty: z.string().default('Moderate'),
  successRate: z.string().optional(),
  featured: z.boolean().default(false),
  summary: z.string().min(20),
  heroImage: z.string(),
  gallery: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  itinerary: z.array(itineraryDaySchema).min(1),
  inclusions: z.array(z.string()).min(1),
  exclusions: z.array(z.string()).min(1),
  priceNote: z.string().default('Custom quote based on party size & mountain season'),
  bestSeason: z.string().default('January–March & June–October'),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(['draft', 'review', 'published']).default('published')
});

export type Trek = z.infer<typeof trekSchema>;
