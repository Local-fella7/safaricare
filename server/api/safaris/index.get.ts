import { safarisData } from '../../data/safaris';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let results = [...safarisData];

  if (query.featured === 'true') {
    results = results.filter((s) => s.featured);
  }

  if (query.circuit && typeof query.circuit === 'string') {
    results = results.filter((s) => s.circuit.toLowerCase().includes(query.circuit.toLowerCase()));
  }

  if (query.style && typeof query.style === 'string') {
    results = results.filter((s) => s.travelStyle.toLowerCase().includes(query.style.toLowerCase()));
  }

  return results;
});
