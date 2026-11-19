<script setup lang="ts">
import type { Accommodation } from '~/shared/types';

defineProps<{
  accommodation: Accommodation;
}>();
</script>

<template>
  <div class="card card-sc h-100 d-flex flex-column border-0">
    <div class="card-img-wrapper position-relative overflow-hidden">
      <img
        :src="accommodation.heroImage"
        :alt="accommodation.name"
        class="card-img-top object-fit-cover w-100 accommodation-card-img"
        loading="lazy"
      />
      <span class="position-absolute top-0 start-0 m-3 badge bg-sc-forest text-white py-2 px-3 fw-semibold shadow-sm">
        <i class="bi bi-geo-alt me-1"></i> {{ accommodation.location }}
      </span>
      <span class="position-absolute top-0 end-0 m-3 badge bg-sc-gold text-white py-2 px-3 fw-semibold shadow-sm">
        {{ accommodation.category }}
      </span>
    </div>

    <div class="card-body p-4 d-flex flex-column flex-grow-1">
      <h3 class="card-title font-serif h5 fw-bold text-sc-forest mb-1">
        <NuxtLink :to="`/accommodations/${accommodation.slug}`" class="text-decoration-none text-sc-forest hover-gold">
          {{ accommodation.name }}
        </NuxtLink>
      </h3>
      <p class="small text-sc-gold fw-semibold mb-3">{{ accommodation.tagline }}</p>

      <p class="card-text text-muted small mb-4 flex-grow-1">{{ accommodation.summary }}</p>

      <ul v-if="accommodation.amenities.length" class="list-unstyled mb-4 small text-muted">
        <li
          v-for="(amenity, i) in accommodation.amenities.slice(0, 2)"
          :key="i"
          class="d-flex align-items-start gap-2 mb-1"
        >
          <i class="bi bi-check2-circle text-sc-forest mt-1 flex-shrink-0"></i>
          <span>{{ amenity }}</span>
        </li>
      </ul>

      <div class="card-actions pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
        <span class="fw-bold text-sc-forest small">{{ (accommodation.priceNote || 'Rates on request').split('—')[0]?.trim() || 'Rates on request' }}</span>
        <NuxtLink :to="`/accommodations/${accommodation.slug}`" class="btn btn-sc-primary btn-sm px-3 py-2">
          View Stay &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-img-wrapper {
  height: 230px;
}

.accommodation-card-img {
  height: 100%;
  transition: transform 0.5s ease;
}

.card-sc:hover .accommodation-card-img {
  transform: scale(1.06);
}

.hover-gold:hover {
  color: var(--sc-gold) !important;
}
</style>
