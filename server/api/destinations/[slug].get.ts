import { destinationsData } from '../../data/destinations';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const destination = destinationsData.find((d) => d.slug === slug);

  if (!destination) {
    throw createError({
      statusCode: 404,
      statusMessage: `Destination with slug '${slug}' not found`
    });
  }

  return destination;
});
