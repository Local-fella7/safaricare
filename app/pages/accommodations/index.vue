<script setup lang="ts">
import AccommodationCard from '~/components/accommodation/AccommodationCard.vue';
import type { Accommodation } from '~/shared/types';

useSeoMeta({
  title: 'Safari Accommodation in Tanzania | Lodges & Camps | Safari Care',
  description: 'Handpicked Tanzania safari accommodation: lodges, tented camps and hotels in Arusha, Serengeti, Ngorongoro, Tarangire, Lake Manyara, Karatu, Kilimanjaro, Dar es Salaam and Zanzibar.',
  ogTitle: 'Where You Stay | Safari Care Tanzania',
  ogDescription: 'Authentic Tanzanian lodges, tented camps and coastal stays, chosen for comfort, character and proximity to the wildlife.',
  ogImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
});

const route = useRoute();
const router = useRouter();

const { data: allAccommodations, status, error, refresh } = await useFetch<Accommodation[]>('/api/accommodations');

const selectedRegion = ref<string>(typeof route.query.region === 'string' ? route.query.region : 'all');
const selectedCategory = ref<string>(typeof route.query.category === 'string' ? route.query.category : 'all');
const searchQuery = ref<string>('');

const regions = [
  { label: 'All Regions', value: 'all' },
  { label: 'Northern Tanzania', value: 'northern' },
  { label: 'Zanzibar & Coast', value: 'coast' }
];

const categories = [
  { label: 'All Stays', value: 'all' },
  { label: 'Luxury Lodges', value: 'Luxury Lodge' },
  { label: 'Tented Camps', value: 'Tented Camp' },
  { label: 'Hotels', value: 'Hotel' },
  { label: 'Boutique Hotels', value: 'Boutique Hotel' }
];

type AccommodationFilterState = { region: string; category: string; search: string };

const currentAccommodationState = (): AccommodationFilterState => ({
  region: selectedRegion.value,
  category: selectedCategory.value,
  search: searchQuery.value
});

const matchesAccommodation = (stay: Accommodation, state: AccommodationFilterState): boolean => {
  if (state.search.trim() !== '') {
    const q = state.search.toLowerCase().trim();
    const inName = stay.name.toLowerCase().includes(q);
    const inLocation = stay.location.toLowerCase().includes(q);
    const inSummary = stay.summary.toLowerCase().includes(q);
    if (!inName && !inLocation && !inSummary) return false;
  }

  if (state.region === 'northern') {
    if (!stay.region.includes('Northern') && !stay.region.includes('Northeastern')) return false;
  } else if (state.region === 'coast') {
    const coastal = stay.region.includes('Coastal') || stay.region.includes('Spice') || stay.location.includes('Zanzibar');
    if (!coastal) return false;
  }

  if (state.category !== 'all' && stay.category !== state.category) return false;

  return true;
};

const countFor = (key: 'region' | 'category', value: string): number => {
  const state = currentAccommodationState();
  state[key] = value;
  return (allAccommodations.value ?? []).filter((stay) => matchesAccommodation(stay, state)).length;
};

const regionOptions = computed(() => regions.map((r) => ({ ...r, count: countFor('region', r.value) })));
const categoryOptions = computed(() => categories.map((c) => ({ ...c, count: countFor('category', c.value) })));

const filteredAccommodations = computed(() =>
  (allAccommodations.value ?? []).filter((stay) => matchesAccommodation(stay, currentAccommodationState()))
);

watch([allAccommodations, selectedRegion, selectedCategory, searchQuery], () => {
  if (selectedRegion.value !== 'all' && countFor('region', selectedRegion.value) === 0) selectedRegion.value = 'all';
  if (selectedCategory.value !== 'all' && countFor('category', selectedCategory.value) === 0) selectedCategory.value = 'all';
}, { immediate: true });

watch([selectedRegion, selectedCategory], ([region, category]) => {
  const query: Record<string, string> = {};
  if (region !== 'all') query.region = region;
  if (category !== 'all') query.category = category;
  router.replace({ query });
});

watch(() => route.query, (newQuery) => {
  selectedRegion.value = typeof newQuery.region === 'string' ? newQuery.region : 'all';
  selectedCategory.value = typeof newQuery.category === 'string' ? newQuery.category : 'all';
});

const clearAllFilters = () => {
  selectedRegion.value = 'all';
  selectedCategory.value = 'all';
  searchQuery.value = '';
};

const hasActiveFilters = computed(() =>
  selectedRegion.value !== 'all' || selectedCategory.value !== 'all' || searchQuery.value.trim() !== ''
);
</script>

<template>
  <div class="accommodations-view py-5">
    <div class="container py-lg-3">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Accommodation</li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Where You Stay</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Safari Accommodation Across Tanzania
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          From a coffee plantation near Arusha to hilltop camps in the Serengeti and beach villas in Zanzibar, we place you in handpicked stays that combine genuine local character with the comfort you deserve between game drives.
        </p>
      </div>

      <div class="filter-panel bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-geo-alt-fill text-sc-gold me-1"></i> Region
            </label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="r in regionOptions"
                :key="r.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedRegion === r.value ? 'btn-sc-primary' : 'btn-outline-secondary',
                  r.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="r.count === 0"
                @click="selectedRegion = r.value"
              >
                {{ r.label }}
              </button>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-house-door-fill text-sc-gold me-1"></i> Accommodation Type
            </label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="c in categoryOptions"
                :key="c.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedCategory === c.value ? 'btn-sc-gold' : 'btn-outline-secondary',
                  c.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="c.count === 0"
                @click="selectedCategory = c.value"
              >
                {{ c.label }}
              </button>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-search text-sc-gold me-1"></i> Find a Stay
            </label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
              <input
                v-model="searchQuery"
                type="text"
                class="form-control border-start-0"
                placeholder="Search Serengeti, lodge, camp..."
                aria-label="Search accommodation"
              />
              <button v-if="searchQuery" class="btn btn-outline-secondary" type="button" @click="searchQuery = ''">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4 text-muted small">
        <div>Showing <strong>{{ filteredAccommodations.length }}</strong> of {{ allAccommodations?.length || 0 }} handpicked stays</div>
        <button
          v-if="hasActiveFilters"
          type="button"
          class="btn btn-sm btn-link text-sc-forest p-0 small text-decoration-none fw-semibold"
          @click="clearAllFilters"
        >
          <i class="bi bi-x-circle me-1"></i> Clear All Active Filters
        </button>
      </div>

      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading accommodation...</span>
        </div>
      </div>

      <div v-else-if="error" class="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <i class="bi bi-wifi-off display-4 text-sc-gold mb-3"></i>
        <h2 class="font-serif h4 text-sc-forest mb-2">Could not load stays</h2>
        <p class="text-muted small mb-3">We couldn't reach the accommodation service. Please try again.</p>
        <button type="button" class="btn btn-sc-primary btn-sm" @click="refresh()">Try Again</button>
      </div>

      <div v-else-if="filteredAccommodations.length" class="row g-4">
        <div v-for="stay in filteredAccommodations" :key="stay.slug" class="col-md-6 col-xl-4">
          <AccommodationCard :accommodation="stay" />
        </div>
      </div>

      <div v-else class="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <i class="bi bi-house-door display-4 text-sc-gold mb-3"></i>
        <h2 class="font-serif h4 text-sc-forest mb-2">No stays match your filters</h2>
        <p class="text-muted small mb-3">Try a different region or accommodation type.</p>
        <button type="button" class="btn btn-sc-primary btn-sm" @click="clearAllFilters">Show All Stays</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accommodations-view {
  background-color: var(--sc-ivory);
}
</style>
