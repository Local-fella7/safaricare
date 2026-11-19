import { treksData } from '../../data/treks';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const trek = treksData.find((t) => t.slug === slug);

  if (!trek) {
    throw createError({
      statusCode: 404,
      statusMessage: `Trek with slug '${slug}' not found`
    });
  }

  return trek;
});
