<script setup lang="ts">
import type { Trek } from '~/shared/types';

defineProps<{
  trek: Trek;
}>();
</script>

<template>
  <div class="card card-sc h-100 d-flex flex-column border-0">
    <div class="card-img-wrapper position-relative overflow-hidden">
      <img
        :src="trek.heroImage"
        :alt="trek.title"
        class="card-img-top object-fit-cover w-100 trek-card-img"
        loading="lazy"
      />
      <span class="position-absolute top-0 start-0 m-3 badge bg-sc-forest text-white py-2 px-3 fw-semibold shadow-sm">
        <i class="bi bi-clock me-1"></i> {{ trek.durationDays }} Days / {{ trek.durationDays - 1 }} Nights
      </span>
      <span class="position-absolute top-0 end-0 m-3 badge bg-sc-gold text-white py-2 px-3 fw-semibold shadow-sm">
        {{ trek.mountain }}
      </span>
      <div class="position-absolute bottom-0 start-0 m-3">
        <span class="badge bg-dark bg-opacity-75 text-white backdrop-blur py-1 px-2 small">
          <i class="bi bi-signpost-split me-1"></i> {{ trek.routeName }}
        </span>
      </div>
    </div>

    <div class="card-body p-4 d-flex flex-column flex-grow-1">
      <h3 class="card-title font-serif h5 fw-bold text-sc-forest mb-2">
        <NuxtLink :to="`/trekking/${trek.slug}`" class="text-decoration-none text-sc-forest hover-gold">
          {{ trek.title }}
        </NuxtLink>
      </h3>

      <div class="trek-meta d-flex flex-wrap gap-2 mb-3">
        <span class="badge bg-light text-muted border py-1 px-2 fw-normal small">
          <i class="bi bi-bar-chart-line me-1 text-sc-forest"></i>{{ trek.difficulty }}
        </span>
        <span v-if="trek.successRate" class="badge bg-light text-muted border py-1 px-2 fw-normal small">
          <i class="bi bi-trophy me-1 text-sc-gold"></i>{{ trek.successRate }} summit success
        </span>
      </div>

      <p class="card-text text-muted small mb-4 flex-grow-1">
        {{ trek.summary }}
      </p>

      <ul v-if="trek.highlights.length" class="list-unstyled mb-4 small text-muted">
        <li
          v-for="(hl, i) in trek.highlights.slice(0, 2)"
          :key="i"
          class="d-flex align-items-start gap-2 mb-1"
        >
          <i class="bi bi-check2-circle text-sc-forest mt-1 flex-shrink-0"></i>
          <span>{{ hl }}</span>
        </li>
      </ul>

      <div class="card-actions pt-3 border-top mt-auto d-flex align-items-center justify-content-between">
        <div>
          <span class="d-block text-muted" style="font-size: 0.75rem;">Guided Expedition</span>
          <span class="fw-bold text-sc-forest small">{{ trek.priceNote.split('(')[0] }}</span>
        </div>
        <NuxtLink :to="`/trekking/${trek.slug}`" class="btn btn-sc-primary btn-sm px-3 py-2">
          View Route &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-img-wrapper {
  height: 240px;
}

.trek-card-img {
  height: 100%;
  transition: transform 0.5s ease;
}

.card-sc:hover .trek-card-img {
  transform: scale(1.06);
}

.hover-gold:hover {
  color: var(--sc-gold) !important;
}

.backdrop-blur {
  backdrop-filter: blur(4px);
}
</style>
