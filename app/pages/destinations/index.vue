<script setup lang="ts">
import DestinationCard from '~/components/destination/DestinationCard.vue';
import type { Destination } from '~/shared/types';

useSeoMeta({
  title: 'Tanzania National Parks & Destinations Guide | Safari Care',
  description: 'Explore Tanzania’s national parks and sanctuaries by circuit: Serengeti, Ngorongoro, Tarangire, Arusha, Lake Manyara, Selous, Mikumi, Ruaha, Gombe, Udzungwa, Kilimanjaro and Zanzibar.',
  ogTitle: 'Tanzania Destinations & Safari Parks | Safari Care',
  ogDescription: 'From the Great Migration plains to remote southern wilderness and the Zanzibar coast — discover where we take our guests.'
});

const { data: destinations, status } = await useFetch<Destination[]>('/api/destinations');

const selectedCircuit = ref<string>('all');

const circuits = [
  { label: 'All Destinations', value: 'all' },
  { label: 'Northern Circuit', value: 'Northern' },
  { label: 'Southern Circuit', value: 'Southern' },
  { label: 'Western Circuit', value: 'Western' },
  { label: 'Zanzibar & Kilimanjaro', value: 'special' }
];

const matchesDestination = (destination: Destination, circuit: string): boolean => {
  if (circuit === 'all') return true;
  if (circuit === 'special') {
    return destination.slug.includes('zanzibar') || destination.slug.includes('kilimanjaro');
  }
  return destination.region.includes(circuit);
};

const destinationCount = (circuit: string): number =>
  (destinations.value ?? []).filter((d) => matchesDestination(d, circuit)).length;

const circuitOptions = computed(() => circuits.map((c) => ({ ...c, count: destinationCount(c.value) })));

const filteredDestinations = computed(() =>
  (destinations.value ?? []).filter((d) => matchesDestination(d, selectedCircuit.value))
);

watch([destinations, selectedCircuit], () => {
  if (selectedCircuit.value !== 'all' && destinationCount(selectedCircuit.value) === 0) selectedCircuit.value = 'all';
}, { immediate: true });

const groupedDestinations = computed(() => {
  const groups: Record<string, Destination[]> = { 'Northern Circuit': [], 'Southern Circuit': [], 'Western Circuit': [], 'Other Iconic Destinations': [] };
  for (const d of filteredDestinations.value) {
    if (d.region.includes('Northern')) groups['Northern Circuit']!.push(d);
    else if (d.region.includes('Southern')) groups['Southern Circuit']!.push(d);
    else if (d.region.includes('Western')) groups['Western Circuit']!.push(d);
    else groups['Other Iconic Destinations']!.push(d);
  }
  return Object.entries(groups).filter(([, items]) => items.length > 0);
});
</script>

<template>
  <div class="destinations-page-view py-5">
    <div class="container py-lg-3">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Destinations</li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-4" style="max-width: 800px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Wild Tanzania</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">Tanzania’s Iconic Sanctuaries</h1>
        <p class="lead text-muted fs-6 mb-0">
          Tanzania protects more than 30% of its land for wildlife. From the Great Migration plains and ancient calderas to remote southern wilderness and the spice islands, discover the places we explore.
        </p>
      </div>

      <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
        <button
          v-for="c in circuitOptions"
          :key="c.value"
          type="button"
          class="btn btn-sm"
          :class="[
            selectedCircuit === c.value ? 'btn-sc-primary' : 'btn-outline-secondary',
            c.count === 0 ? 'opacity-25' : ''
          ]"
          :disabled="c.count === 0"
          @click="selectedCircuit = c.value"
        >
          {{ c.label }}
        </button>
      </div>

      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading destinations...</span>
        </div>
      </div>

      <template v-else>
        <section v-for="([title, items], index) in groupedDestinations" :key="title" class="mb-5">
          <div class="d-flex align-items-center gap-3 mb-3">
            <h2 class="font-serif h4 fw-bold text-sc-forest mb-0">{{ title }}</h2>
            <span class="badge bg-sc-gold text-white">{{ items.length }} parks</span>
            <hr class="flex-grow-1 border-secondary border-opacity-25" />
          </div>
          <div class="row g-4">
            <div v-for="dest in items" :key="dest.slug" class="col-md-6 col-lg-4">
              <DestinationCard :destination="dest" />
            </div>
          </div>
          <p v-if="index === groupedDestinations.length - 1" class="small text-muted mt-3 mb-0">
            Looking for a place that is not listed? Every journey is tailor-made — <NuxtLink to="/plan-your-safari" class="text-sc-forest fw-semibold">ask our Arusha team</NuxtLink>.
          </p>
        </section>
      </template>

      <div class="circuits-overview bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">Understanding Tanzania's Safari Circuits</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-forest text-white mb-2">Most Famous</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">The Northern Circuit</h3>
              <p class="small text-muted mb-0">Serengeti, Ngorongoro, Tarangire, Arusha and Lake Manyara. Renowned for dense predator populations, the Great Migration and easy access from Arusha.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-gold text-white mb-2">Wild & Remote</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">The Southern & Western Circuits</h3>
              <p class="small text-muted mb-0">Selous (Nyerere), Mikumi, Ruaha, Udzungwa and Gombe. Vast wilderness, boat safaris on the Rufiji, chimpanzee tracking and almost no crowds.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-terracotta text-white mb-2">Coast & Islands</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">Zanzibar & Mountains</h3>
              <p class="small text-muted mb-0">UNESCO Stone Town, spice plantations and turquoise coral waters — plus the high-altitude forests of Kilimanjaro and Meru.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.destinations-page-view {
  background-color: var(--sc-ivory);
}
</style>
