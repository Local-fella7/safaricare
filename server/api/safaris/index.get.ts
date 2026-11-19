import { safarisData } from '../../data/safaris';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let results = [...safarisData];

  if (query.featured === 'true') {
    results = results.filter((s) => s.featured);
  }

  const circuit = typeof query.circuit === 'string' ? query.circuit.toLowerCase() : '';
  const style = typeof query.style === 'string' ? query.style.toLowerCase() : '';

  if (circuit) {
    results = results.filter((s) => s.circuit.toLowerCase().includes(circuit));
  }

  if (style) {
    results = results.filter((s) => s.travelStyle.toLowerCase().includes(style));
  }

  return results;
});
