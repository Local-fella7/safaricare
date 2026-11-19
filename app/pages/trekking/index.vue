<script setup lang="ts">
import TrekCard from '~/components/trek/TrekCard.vue';
import type { Trek } from '~/shared/types';

useSeoMeta({
  title: 'Kilimanjaro & Mount Meru Trekking Routes | Safari Care',
  description: 'Compare guided Kilimanjaro and Mount Meru trekking routes. Machame, Lemosho, Marangu, Rongai and Meru programs with certified mountain guides and ethical porter welfare.',
  ogTitle: 'Tanzania Mountain Trekking with Safari Care',
  ogDescription: 'Guided Kilimanjaro and Meru expeditions with certified high-altitude specialists, emergency oxygen and fair porter treatment.',
  ogImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1200&q=80'
});

const route = useRoute();
const router = useRouter();

const { data: allTreks, status, error, refresh } = await useFetch<Trek[]>('/api/treks');

const selectedMountain = ref<string>(typeof route.query.mountain === 'string' ? route.query.mountain : 'all');
const selectedDuration = ref<string>(typeof route.query.duration === 'string' ? route.query.duration : 'all');
const searchQuery = ref<string>('');

const mountains = [
  { label: 'All Mountains', value: 'all' },
  { label: 'Mount Kilimanjaro', value: 'kilimanjaro' },
  { label: 'Mount Meru', value: 'meru' }
];

const durations = [
  { label: 'All Durations', value: 'all' },
  { label: 'Short (3–4 Days)', value: 'short' },
  { label: 'Standard (5–7 Days)', value: 'medium' },
  { label: 'Extended (8+ Days)', value: 'long' }
];

type TrekFilterState = { mountain: string; duration: string; search: string };

const currentTrekState = (): TrekFilterState => ({
  mountain: selectedMountain.value,
  duration: selectedDuration.value,
  search: searchQuery.value
});

const matchesTrek = (trek: Trek, state: TrekFilterState): boolean => {
  if (state.search.trim() !== '') {
    const q = state.search.toLowerCase().trim();
    const inTitle = trek.title.toLowerCase().includes(q);
    const inSummary = trek.summary.toLowerCase().includes(q);
    const inRoute = trek.routeName.toLowerCase().includes(q);
    if (!inTitle && !inSummary && !inRoute) return false;
  }

  if (state.mountain !== 'all' && trek.mountain.toLowerCase() !== state.mountain) return false;
  if (state.duration === 'short' && trek.durationDays > 4) return false;
  if (state.duration === 'medium' && (trek.durationDays < 5 || trek.durationDays > 7)) return false;
  if (state.duration === 'long' && trek.durationDays < 8) return false;

  return true;
};

const countFor = (key: 'mountain' | 'duration', value: string): number => {
  const state = currentTrekState();
  state[key] = value;
  return (allTreks.value ?? []).filter((trek) => matchesTrek(trek, state)).length;
};

const mountainOptions = computed(() => mountains.map((m) => ({ ...m, count: countFor('mountain', m.value) })));
const durationOptions = computed(() => durations.map((d) => ({ ...d, count: countFor('duration', d.value) })));

const filteredTreks = computed(() =>
  (allTreks.value ?? []).filter((trek) => matchesTrek(trek, currentTrekState()))
);

watch([allTreks, selectedMountain, selectedDuration, searchQuery], () => {
  if (selectedMountain.value !== 'all' && countFor('mountain', selectedMountain.value) === 0) selectedMountain.value = 'all';
  if (selectedDuration.value !== 'all' && countFor('duration', selectedDuration.value) === 0) selectedDuration.value = 'all';
}, { immediate: true });

watch([selectedMountain, selectedDuration], ([mountain, duration]) => {
  const query: Record<string, string> = {};
  if (mountain !== 'all') query.mountain = mountain;
  if (duration !== 'all') query.duration = duration;
  router.replace({ query });
});

watch(() => route.query, (newQuery) => {
  selectedMountain.value = typeof newQuery.mountain === 'string' ? newQuery.mountain : 'all';
  selectedDuration.value = typeof newQuery.duration === 'string' ? newQuery.duration : 'all';
});

const clearAllFilters = () => {
  selectedMountain.value = 'all';
  selectedDuration.value = 'all';
  searchQuery.value = '';
};

const hasActiveFilters = computed(() =>
  selectedMountain.value !== 'all' || selectedDuration.value !== 'all' || searchQuery.value.trim() !== ''
);
</script>

<template>
  <div class="trekking-catalog-view py-5">
    <div class="container py-lg-3">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Trekking</li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Roof of Africa & Beyond</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Kilimanjaro & Mount Meru Treks
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          At 5,895 meters, Kilimanjaro is the highest free-standing mountain on Earth. Our treks are led by certified high-altitude specialists committed to safe acclimatization, emergency oxygen, and fair porter welfare. Mount Meru offers a spectacular, quieter ascent with views of Kibo.
        </p>
      </div>

      <div class="card bg-sc-forest-dark text-white rounded-4 shadow-lg p-4 p-md-5 mb-5 border-0 position-relative overflow-hidden">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold mb-2">Featured Combination</span>
            <h2 class="font-serif h3 fw-bold text-white mb-2">
              13-Day Kilimanjaro Climb & Big Five Wildlife Safari
            </h2>
            <p class="text-white-50 small mb-0">
              Summit Uhuru Peak via the Machame Route, then recover in luxury lodges while exploring Tarangire, Serengeti, and Ngorongoro Crater.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink to="/safaris/13-day-safari-and-kilimanjaro-climb" class="btn btn-sc-gold btn-lg text-white">
              <span>View 13-Day Expedition</span>
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="filter-panel bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-mountain text-sc-gold me-1"></i> Mountain
            </label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="m in mountainOptions"
                :key="m.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedMountain === m.value ? 'btn-sc-primary' : 'btn-outline-secondary',
                  m.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="m.count === 0"
                @click="selectedMountain = m.value"
              >
                {{ m.label }}
              </button>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-clock-fill text-sc-gold me-1"></i> Trip Duration
            </label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="d in durationOptions"
                :key="d.value"
                type="button"
                class="btn btn-sm"
                :class="[
                  selectedDuration === d.value ? 'btn-sc-gold' : 'btn-outline-secondary',
                  d.count === 0 ? 'opacity-25' : ''
                ]"
                :disabled="d.count === 0"
                @click="selectedDuration = d.value"
              >
                {{ d.label }}
              </button>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <label class="form-label small fw-bold text-sc-forest text-uppercase mb-2">
              <i class="bi bi-search text-sc-gold me-1"></i> Find a Route
            </label>
            <div class="input-group input-group-sm">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search text-muted"></i>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                class="form-control border-start-0"
                placeholder="Search Machame, Meru, summit..."
                aria-label="Search trekking routes"
              />
              <button v-if="searchQuery" class="btn btn-outline-secondary" type="button" @click="searchQuery = ''">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-4 text-muted small">
        <div>
          Showing <strong>{{ filteredTreks.length }}</strong> of {{ allTreks?.length || 0 }} guided expeditions
        </div>
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
          <span class="visually-hidden">Loading treks...</span>
        </div>
      </div>

      <div v-else-if="error" class="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <i class="bi bi-wifi-off display-4 text-sc-gold mb-3"></i>
        <h2 class="font-serif h4 text-sc-forest mb-2">Could not load expeditions</h2>
        <p class="text-muted small mb-3">We couldn't reach the trekking service. Please try again.</p>
        <button type="button" class="btn btn-sc-primary btn-sm" @click="refresh()">Try Again</button>
      </div>

      <div v-else-if="filteredTreks.length" class="row g-4">
        <div v-for="trek in filteredTreks" :key="trek.slug" class="col-md-6 col-xl-4">
          <TrekCard :trek="trek" />
        </div>
      </div>

      <div v-else class="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
        <i class="bi bi-signpost-split display-4 text-sc-gold mb-3"></i>
        <h2 class="font-serif h4 text-sc-forest mb-2">No routes match your filters</h2>
        <p class="text-muted small mb-3">Try a different mountain or duration — or clear the filters to see every expedition.</p>
        <button type="button" class="btn btn-sc-primary btn-sm" @click="clearAllFilters">Show All Treks</button>
      </div>

      <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light mt-5">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          Our Mountain Safety & Ethical Commitments
        </h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-heart-pulse-fill text-danger fs-3"></i>
              <div>
                <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">Twice-Daily Health Checks</h3>
                <p class="small text-muted mb-0">Certified wilderness first responders monitor pulse oximeter saturation and Lake Louise scores every morning and evening.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-people-fill text-sc-gold fs-3"></i>
              <div>
                <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">Ethical Porter Welfare</h3>
                <p class="small text-muted mb-0">Fair living wages, proper mountain gear, warm sleeping shelters, and strict 20kg load limits for every porter.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-shield-fill-check text-sc-forest fs-3"></i>
              <div>
                <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">Emergency Oxygen & Evacuation</h3>
                <p class="small text-muted mb-0">Medical oxygen, high-altitude first aid kits, and AMREF Flying Doctors evacuation coverage on all climbs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trekking-catalog-view {
  background-color: var(--sc-ivory);
}
</style>
