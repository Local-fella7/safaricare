<script setup lang="ts">
import type { SafariPackage } from '~/shared/types';

defineProps<{
  safari: SafariPackage;
}>();
</script>

<template>
  <div class="card card-sc h-100 d-flex flex-column border-0">
    <!-- Image Wrapper with Badges -->
    <div class="card-img-wrapper position-relative overflow-hidden">
      <img
        :src="safari.heroImage"
        :alt="safari.title"
        class="card-img-top object-fit-cover w-100 safari-card-img"
        loading="lazy"
      />
      <!-- Duration Badge -->
      <span class="position-absolute top-0 start-0 m-3 badge bg-sc-forest text-white py-2 px-3 fw-semibold shadow-sm">
        <i class="bi bi-clock me-1"></i> {{ safari.durationDays }} Days / {{ safari.durationDays - 1 }} Nights
      </span>
      <!-- Style Badge -->
      <span class="position-absolute top-0 end-0 m-3 badge bg-sc-gold text-white py-2 px-3 fw-semibold shadow-sm">
        {{ safari.travelStyle }}
      </span>
      <!-- Circuit Pill (Bottom Left of Image) -->
      <div class="position-absolute bottom-0 start-0 m-3">
        <span class="badge bg-dark bg-opacity-75 text-white backdrop-blur py-1 px-2 small">
          <i class="bi bi-compass me-1"></i> {{ safari.circuit }}
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body p-4 d-flex flex-column flex-grow-1">
      <h3 class="card-title font-serif h5 fw-bold text-sc-forest mb-2">
        <NuxtLink :to="`/safaris/${safari.slug}`" class="text-decoration-none text-sc-forest hover-gold">
          {{ safari.title }}
        </NuxtLink>
      </h3>

      <!-- Destinations Visited Tags -->
      <div class="destinations-pills mb-3 d-flex flex-wrap gap-1">
        <span
          v-for="dest in safari.destinations"
          :key="dest"
          class="badge bg-light text-muted border py-1 px-2 fw-normal small"
        >
          {{ dest }}
        </span>
      </div>

      <p class="card-text text-muted small mb-4 flex-grow-1">
        {{ safari.summary }}
      </p>

      <!-- Highlights list -->
      <ul v-if="safari.highlights && safari.highlights.length" class="list-unstyled mb-4 small text-muted">
        <li
          v-for="(hl, i) in safari.highlights.slice(0, 2)"
          :key="i"
          class="d-flex align-items-start gap-2 mb-1"
        >
          <i class="bi bi-check2-circle text-sc-forest mt-1 flex-shrink-0"></i>
          <span>{{ hl }}</span>
        </li>
      </ul>

      <!-- Card Footer Actions -->
      <div class="card-actions pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
        <div>
          <span class="d-block text-muted" style="font-size: 0.75rem;">Private Journey</span>
          <span class="fw-bold text-sc-forest small">{{ safari.priceNote.split('(')[0] }}</span>
        </div>
        <NuxtLink :to="`/safaris/${safari.slug}`" class="btn btn-sc-primary btn-sm px-3 py-2">
          View Itinerary &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-img-wrapper {
  height: 240px;
}

.safari-card-img {
  height: 100%;
  transition: transform 0.5s ease;
}

.card-sc:hover .safari-card-img {
  transform: scale(1.06);
}

.hover-gold:hover {
  color: var(--sc-gold) !important;
}

.backdrop-blur {
  backdrop-filter: blur(4px);
}
</style>
