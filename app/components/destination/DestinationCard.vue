<script setup lang="ts">
import type { Destination } from '~/shared/types';

defineProps<{
  destination: Destination;
}>();
</script>

<template>
  <div class="destination-card position-relative rounded-4 overflow-hidden shadow-sm h-100">
    <img
      :src="destination.heroImage"
      :alt="destination.name"
      class="w-100 h-100 object-fit-cover dest-img"
      loading="lazy"
    />
    <div class="dest-overlay position-absolute bottom-0 start-0 w-100 p-4 text-white d-flex flex-column justify-content-end">
      <div class="badge-sc-gold d-inline-block align-self-start mb-2">
        {{ destination.region }}
      </div>
      <h3 class="font-serif fw-bold h4 text-white mb-1">
        {{ destination.name }}
      </h3>
      <p class="small text-white-50 mb-3 text-truncate-2">
        {{ destination.tagline }}
      </p>
      <NuxtLink
        :to="`/destinations/${destination.slug}`"
        class="stretched-link text-white text-decoration-none fw-semibold small d-inline-flex align-items-center gap-1 hover-gold"
      >
        <span>Explore Wildlife & Guides</span>
        <i class="bi bi-arrow-right"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.destination-card {
  height: 380px;
  background-color: var(--sc-forest-dark);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);

    .dest-img {
      transform: scale(1.08);
    }
  }
}

.dest-img {
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.dest-overlay {
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(26, 50, 44, 0.95) 90%);
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
