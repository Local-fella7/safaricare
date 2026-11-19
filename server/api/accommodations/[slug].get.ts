import { accommodationsData } from '../../data/accommodations';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const accommodation = accommodationsData.find((a) => a.slug === slug);

  if (!accommodation) {
    throw createError({
      statusCode: 404,
      statusMessage: `Accommodation with slug '${slug}' not found`
    });
  }

  return accommodation;
});
