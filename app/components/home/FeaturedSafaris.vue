<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import SafariCard from '~/components/safari/SafariCard.vue';
import type { SafariPackage } from '~/shared/types';

const { data: featuredSafaris, error, status } = await useFetch<SafariPackage[]>('/api/safaris', {
  query: { featured: 'true' }
});
</script>

<template>
  <section class="featured-safaris-section py-5 my-2">
    <div class="container py-lg-4">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
        <div>
          <span class="badge-sc-terracotta d-inline-block mb-2">Curated Itineraries</span>
          <h2 class="font-serif fw-bold text-sc-forest display-6 mb-0">
            Featured Tanzanian Safari Journeys
          </h2>
        </div>
        <NuxtLink to="/safaris" class="btn btn-sc-outline-forest mt-3 mt-md-0 align-self-start align-self-md-auto">
          <span>View All 8+ Itineraries</span>
          <i class="bi bi-arrow-right ms-2"></i>
        </NuxtLink>
      </div>

      <p class="text-muted mb-5" style="max-width: 680px;">
        Every safari itinerary is 100% private and customizable. Choose your preferred departure date, customize your accommodations, and add extra days at your pace.
      </p>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading safaris...</span>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-warning">
        Could not load featured itineraries at this moment. Please check back shortly.
      </div>

      <!-- Safaris Grid -->
      <div v-else class="row g-4">
        <div
          v-for="safari in featuredSafaris"
          :key="safari.slug"
          class="col-md-6 col-lg-4"
        >
          <SafariCard :safari="safari" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.featured-safaris-section {
  background-color: var(--sc-ivory);
}
</style>
