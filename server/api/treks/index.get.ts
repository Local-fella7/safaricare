import { treksData } from '../../data/treks';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let results = [...treksData];

  if (query.featured === 'true') {
    results = results.filter((t) => t.featured);
  }

  const mountain = query.mountain;

  if (mountain && typeof mountain === 'string') {
    const name = mountain.toLowerCase();
    results = results.filter((t) => t.mountain.toLowerCase().includes(name));
  }

  if (query.duration && typeof query.duration === 'string') {
    const duration = query.duration.toLowerCase();

    if (duration === 'short') {
      results = results.filter((t) => t.durationDays <= 4);
    } else if (duration === 'medium') {
      results = results.filter((t) => t.durationDays >= 5 && t.durationDays <= 7);
    } else if (duration === 'long') {
      results = results.filter((t) => t.durationDays >= 8);
    }
  }

  return results;
});
