import { safarisData } from '../../data/safaris';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const safari = safarisData.find((s) => s.slug === slug);

  if (!safari) {
    throw createError({
      statusCode: 404,
      statusMessage: `Safari package with slug '${slug}' not found`
    });
  }

  return safari;
});
