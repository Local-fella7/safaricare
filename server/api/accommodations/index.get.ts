import { accommodationsData } from '../../data/accommodations';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let results = [...accommodationsData];

  if (query.featured === 'true') {
    results = results.filter((a) => a.featured);
  }

  if (typeof query.region === 'string') {
    const region = query.region.toLowerCase();
    results = results.filter((a) => a.region.toLowerCase().includes(region));
  }

  return results;
});
