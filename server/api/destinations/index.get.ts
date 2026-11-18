import { destinationsData } from '../../data/destinations';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let results = [...destinationsData];

  if (query.featured === 'true') {
    results = results.filter((d) => d.featured);
  }

  return results;
});
