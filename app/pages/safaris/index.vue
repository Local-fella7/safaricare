<script setup lang="ts">
import SafariCard from '~/components/safari/SafariCard.vue';
import type { SafariPackage } from '~/shared/types';

useSeoMeta({
  title: 'Tanzania Safari Packages & Private Itineraries | Safari Care',
  description: 'Explore tailored Tanzanian wildlife safaris: Serengeti Great Migration, Ngorongoro Crater, Tarangire elephant safaris, Kilimanjaro climbs, and Zanzibar escapes.',
  ogTitle: 'Safari Care Tanzania | Curated Safari Packages',
  ogDescription: '100% tailor-made private safaris in Tanzania. Browse our Northern & Southern Circuit packages, migration tracking, and bush-to-beach holidays.',
  ogImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
});

const route = useRoute();
const router = useRouter();

const { data: allSafaris, status } = await useFetch<SafariPackage[]>('/api/safaris');

// Reactive filters initialized from URL query params if present
const selectedCircuit = ref<string>(typeof route.query.circuit === 'string' ? route.query.circuit : 'all');
const selectedDuration = ref<string>(typeof route.query.duration === 'string' ? route.query.duration : 'all');
const selectedStyle = ref<string>(typeof route.query.style === 'string' ? route.query.style : 'all');
const searchQuery = ref<string>('');

const circuits = [
  { label: 'All Circuits', value: 'all' },
  { label: 'Northern Circuit', value: 'northern' },
  { label: 'Southern Circuit', value: 'southern' },
  { label: 'Kilimanjaro + Safari', value: 'kilimanjaro' },
  { label: 'Bush & Beach (Zanzibar)', value: 'zanzibar' }
];

const travelStyles = [
  { label: 'All Styles', value: 'all' },
  { label: 'Luxury Lodge', value: 'luxury lodge' },
  { label: 'Wildlife Migration', value: 'migration' },
  { label: 'Private Camping', value: 'camping' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Honeymoon', value: 'honeymoon' },
  { label: 'Photographic', value: 'photographic' }
];

const durations = [
  { label: 'All Durations', value: 'all' },
  { label: 'Short (1–4 Days)', value: 'short' },
  { label: 'Medium (5–8 Days)', value: 'medium' },
  { label: 'Extended (9+ Days)', value: 'long' }
];

type SafariFilterState = { circuit: string; duration: string; style: string; search: string };

const currentSafariState = (): SafariFilterState => ({
  circuit: selectedCircuit.value,
  duration: selectedDuration.value,
  style: selectedStyle.value,
  search: searchQuery.value
});

const matchesSafari = (safari: SafariPackage, state: SafariFilterState): boolean => {
  if (state.search.trim() !== '') {
    const q = state.search.toLowerCase().trim();
    const inTitle = safari.title.toLowerCase().includes(q);
    const inSummary = safari.summary.toLowerCase().includes(q);
    const inDest = safari.destinations.some((d) => d.toLowerCase().includes(q));
    if (!inTitle && !inSummary && !inDest) return false;
  }

  if (state.circuit !== 'all') {
    const target = state.circuit.toLowerCase();
    const match = safari.circuit.toLowerCase().includes(target) ||
                  safari.title.toLowerCase().includes(target) ||
                  safari.destinations.some((d) => d.toLowerCase().includes(target));
    if (!match) return false;
  }

  if (state.style !== 'all') {
    const target = state.style.toLowerCase();
    const match = safari.travelStyle.toLowerCase().includes(target) ||
                  safari.title.toLowerCase().includes(target);
    if (!match) return false;
  }

  if (state.duration === 'short' && safari.durationDays > 4) return false;
  if (state.duration === 'medium' && (safari.durationDays < 5 || safari.durationDays > 8)) return false;
  if (state.duration === 'long' && safari.durationDays < 9) return false;

  return true;
};

const countFor = (key: 'circuit' | 'duration' | 'style', value: string): number => {
  const state = currentSafariState();
  state[key] = value;
  return (allSafaris.value ?? []).filter((safari) => matchesSafari(safari, state)).length;
};

const circuitOptions = computed(() => circuits.map((c) => ({ ...c, count: countFor('circuit', c.value) })));
const styleOptions = computed(() => travelStyles.map((s) => ({ ...s, count: countFor('style', s.value) })));
const durationOptions = computed(() => durations.map((d) => ({ ...d, count: countFor('duration', d.value) })));

const filteredSafaris = computed(() =>
  (allSafaris.value ?? []).filter((safari) => matchesSafari(safari, currentSafariState()))
);

watch([allSafaris, selectedCircuit, selectedDuration, selectedStyle, searchQuery], () => {
  if (selectedCircuit.value !== 'all' && countFor('circuit', selectedCircuit.value) === 0) selectedCircuit.value = 'all';
  if (selectedDuration.value !== 'all' && countFor('duration', selectedDuration.value) === 0) selectedDuration.value = 'all';
  if (selectedStyle.value !== 'all' && countFor('style', selectedStyle.value) === 0) selectedStyle.value = 'all';
}, { immediate: true });

// Watch for filter changes and update URL query cleanly
watch([selectedCircuit, selectedDuration, selectedStyle], ([circuit, duration, style]) => {
  const query: Record<string, string> = {};
  if (circuit !== 'all') query.circuit = circuit;
  if (duration !== 'all') query.duration = duration;
  if (style !== 'all') query.style = style;

  router.replace({ query });
});

// Watch route.query changes from browser navigation
watch(() => route.query, (newQuery) => {
  if (typeof newQuery.circuit === 'string') selectedCircuit.value = newQuery.circuit;
  else if (!newQuery.circuit) selectedCircuit.value = 'all';

  if (typeof newQuery.duration === 'string') selectedDuration.value = newQuery.duration;
  else if (!newQuery.duration) selectedDuration.value = 'all';

  if (typeof newQuery.style === 'string') selectedStyle.value = newQuery.style;
  else if (!newQuery.style) selectedStyle.value = 'all';
});

const clearAllFilters = () => {
  selectedCircuit.value = 'all';
  selectedDuration.value = 'all';
  selectedStyle.value = 'all';
  searchQuery.value = '';
};

const hasActiveFilters = computed(() => {
  return selectedCircuit.value !== 'all' ||
         selectedDuration.value !== 'all' ||
         selectedStyle.value !== 'all' ||
         searchQuery.value.trim() !== '';
});

</script>

<template>
  <div class="safaris-catalog-view py-5">
    <div class="container py-lg-3">
      <!-- Page Header -->
      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Curated Private Safaris</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Tanzania Safari Packages & Itineraries
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          Discover our handcrafted private wildlife safaris. Every itinerary is fully bespoke and includes a private 4x4 Land Cruiser with pop-up photographic roof, certified local naturalist guide, and 24/7 dedicated Arusha ground support.
        </p>
      </div>

      <!-- Filter Controls Panel -->
      <div class="filter-panel bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
        <div class="row g-4">
          <!-- Circuit Filter -->
          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-geo-alt-fill text-sc-gold me-1"></i> Region / Circuit
            </label>
            <div class="d-flex flex-wrap gap-2">
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
          </div>

          <!-- Travel Style Filter -->
          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-stars text-sc-gold me-1"></i> Travel Style
            </label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="style in styleOptions"
                :key="style.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedStyle === style.value ? 'btn-sc-gold' : 'btn-outline-secondary',
                  style.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="style.count === 0"
                @click="selectedStyle = style.value"
              >
                {{ style.label }}
              </button>
            </div>
          </div>

          <!-- Duration Filter & Search -->
          <div class="col-lg-4 col-md-12">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-clock-fill text-sc-gold me-1"></i> Trip Duration
            </label>
            <div class="d-flex flex-wrap gap-2 mb-3">
              <button
                v-for="d in durationOptions"
                :key="d.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedDuration === d.value ? 'btn-sc-primary' : 'btn-outline-secondary',
                  d.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="d.count === 0"
                @click="selectedDuration = d.value"
              >
                {{ d.label }}
              </button>
            </div>

            <!-- Quick Keyword Search -->
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search text-muted"></i>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                class="form-control border-start-0"
                placeholder="Search Serengeti, migration, camping..."
                aria-label="Search safaris"
              />
              <button
                v-if="searchQuery"
                class="btn btn-outline-secondary"
                type="button"
                @click="searchQuery = ''"
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Count Bar -->
      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4 text-muted small">
        <div>
          Showing <strong>{{ filteredSafaris.length }}</strong> of {{ allSafaris?.length || 0 }} private itineraries
        </div>
        <div v-if="hasActiveFilters">
          <button
            type="button"
            class="btn btn-sm btn-link text-sc-forest p-0 small text-decoration-none fw-semibold"
            @click="clearAllFilters"
          >
            <i class="bi bi-x-circle me-1"></i> Clear All Active Filters
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading safaris...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="filteredSafaris.length === 0"
        class="text-center py-5 bg-white rounded-4 shadow-sm p-5 border border-light"
      >
        <i class="bi bi-compass display-4 text-sc-gold mb-3 d-block"></i>
        <h3 class="font-serif h4 text-sc-forest mb-2">No itineraries matched your exact filters</h3>
        <p class="text-muted mb-4" style="max-width: 580px; margin: 0 auto;">
          Every Safari Care itinerary is tailor-made. If none of our standard packages match what you have in mind, our Arusha experts will craft a bespoke route tailored around your schedule and interests.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <button
            type="button"
            class="btn btn-sc-outline-forest"
            @click="clearAllFilters"
          >
            Reset Filters
          </button>
          <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold text-white">
            <i class="bi bi-pencil-square me-1"></i> Plan a Custom Safari
          </NuxtLink>
        </div>
      </div>

      <!-- Safaris Grid -->
      <div v-else class="row g-4">
        <div
          v-for="safari in filteredSafaris"
          :key="safari.slug"
          class="col-md-6 col-lg-4"
        >
          <SafariCard :safari="safari" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.safaris-catalog-view {
  background-color: var(--sc-ivory);
}

.filter-panel {
  background-color: #ffffff;
  border-radius: var(--sc-radius-lg);
}
</style>
