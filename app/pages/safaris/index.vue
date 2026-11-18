<script setup lang="ts">
import SafariCard from '~/components/safari/SafariCard.vue';
import SectionHeader from '~/components/ui/SectionHeader.vue';
import type { SafariPackage } from '~/shared/types';

useSeoMeta({
  title: 'Tanzania Safari Packages & Private Itineraries | Safari Care',
  description: 'Explore tailored Tanzanian wildlife safaris: Serengeti Great Migration, Ngorongoro Crater, Tarangire elephant safaris, and Kilimanjaro climbs.'
});

const { data: allSafaris, status } = await useFetch<SafariPackage[]>('/api/safaris');

const selectedCircuit = ref('all');
const selectedDuration = ref('all');

const circuits = [
  { label: 'All Circuits', value: 'all' },
  { label: 'Northern Circuit', value: 'northern' },
  { label: 'Southern Circuit', value: 'southern' },
  { label: 'Kilimanjaro & Trekking', value: 'kilimanjaro' },
  { label: 'Bush & Beach (Zanzibar)', value: 'zanzibar' }
];

const filteredSafaris = computed(() => {
  if (!allSafaris.value) return [];
  return allSafaris.value.filter((s) => {
    // Filter circuit
    if (selectedCircuit.value !== 'all') {
      const match = s.circuit.toLowerCase().includes(selectedCircuit.value.toLowerCase()) ||
                    s.title.toLowerCase().includes(selectedCircuit.value.toLowerCase());
      if (!match) return false;
    }
    // Filter duration
    if (selectedDuration.value === 'short' && s.durationDays > 4) return false;
    if (selectedDuration.value === 'medium' && (s.durationDays < 5 || s.durationDays > 8)) return false;
    if (selectedDuration.value === 'long' && s.durationDays < 9) return false;

    return true;
  });
});
</script>

<template>
  <div class="safaris-catalog-view py-5">
    <div class="container py-lg-3">
      <!-- Page Header -->
      <div class="text-center mx-auto mb-5" style="max-width: 800px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Private Itineraries</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Tailor-Made Tanzanian Safaris
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          Discover our curated collection of private Tanzanian wildlife expeditions. Every journey includes a private 4x4 Land Cruiser with pop-up roof, certified local guide, and flexible customizations.
        </p>
      </div>

      <!-- Filter Bar -->
      <div class="filter-bar bg-white p-3 p-md-4 rounded-4 shadow-sm mb-5 border border-light">
        <div class="row g-3 align-items-center">
          <div class="col-md-6 col-lg-7">
            <label class="form-label small fw-bold text-muted mb-2">Filter by Region / Circuit:</label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="c in circuits"
                :key="c.value"
                type="button"
                class="btn btn-sm"
                :class="selectedCircuit === c.value ? 'btn-sc-primary' : 'btn-outline-secondary'"
                @click="selectedCircuit = c.value"
              >
                {{ c.label }}
              </button>
            </div>
          </div>

          <div class="col-md-6 col-lg-5">
            <label class="form-label small fw-bold text-muted mb-2">Filter by Trip Length:</label>
            <div class="d-flex flex-wrap gap-2">
              <button
                type="button"
                class="btn btn-sm"
                :class="selectedDuration === 'all' ? 'btn-sc-gold' : 'btn-outline-secondary'"
                @click="selectedDuration = 'all'"
              >
                All Durations
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="selectedDuration === 'short' ? 'btn-sc-gold' : 'btn-outline-secondary'"
                @click="selectedDuration = 'short'"
              >
                1–4 Days
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="selectedDuration === 'medium' ? 'btn-sc-gold' : 'btn-outline-secondary'"
                @click="selectedDuration = 'medium'"
              >
                5–8 Days
              </button>
              <button
                type="button"
                class="btn btn-sm"
                :class="selectedDuration === 'long' ? 'btn-sc-gold' : 'btn-outline-secondary'"
                @click="selectedDuration = 'long'"
              >
                9+ Days
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="d-flex justify-content-between align-items-center mb-4 text-muted small">
        <span>Showing <strong>{{ filteredSafaris.length }}</strong> curated safari packages</span>
        <span v-if="selectedCircuit !== 'all' || selectedDuration !== 'all'">
          <button class="btn btn-link text-sc-forest p-0 small text-decoration-none" @click="selectedCircuit = 'all'; selectedDuration = 'all'">
            <i class="bi bi-x-circle me-1"></i> Clear Filters
          </button>
        </span>
      </div>

      <!-- Safaris Grid -->
      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading safaris...</span>
        </div>
      </div>

      <div v-else-if="filteredSafaris.length === 0" class="text-center py-5 bg-white rounded-4 shadow-sm p-5">
        <i class="bi bi-compass display-4 text-muted mb-3 d-block"></i>
        <h3 class="font-serif h4 text-sc-forest">No itineraries match your criteria</h3>
        <p class="text-muted">We can design a 100% custom safari itinerary matched to your exact duration and destination wishes.</p>
        <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold text-white mt-2">
          Request a Custom Itinerary
        </NuxtLink>
      </div>

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
</style>
