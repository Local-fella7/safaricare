import { z } from 'zod';

export const destinationSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(2),
  region: z.string().min(2),
  tagline: z.string().min(5),
  summary: z.string().min(20),
  heroImage: z.string(),
  gallery: z.array(z.string()).default([]),
  highlights: z.array(z.string()).min(1),
  wildlife: z.array(z.string()).default([]),
  bestTimeToVisit: z.string().min(3),
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export type Destination = z.infer<typeof destinationSchema>;
