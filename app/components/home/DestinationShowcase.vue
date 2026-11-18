<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';
import DestinationCard from '~/components/destination/DestinationCard.vue';
import type { Destination } from '~/shared/types';

const { data: destinations } = await useFetch<Destination[]>('/api/destinations', {
  query: { featured: 'true' }
});
</script>

<template>
  <section class="destinations-showcase-section py-5 bg-white">
    <div class="container py-lg-4">
      <SectionHeader
        subtitle="Iconic Wilderness"
        title="Explore Tanzania’s Legendary Wildlife Sanctuaries"
        description="From the sweeping savannahs of the Serengeti to the primeval volcanic caldera of Ngorongoro and tropical spices of Zanzibar."
        center
      />

      <div class="row g-4">
        <div
          v-for="destination in destinations?.slice(0, 4)"
          :key="destination.slug"
          class="col-md-6 col-lg-3"
        >
          <DestinationCard :destination="destination" />
        </div>
      </div>

      <div class="text-center mt-5">
        <NuxtLink to="/destinations" class="btn btn-sc-primary px-4 py-2">
          <span>View All National Parks & Sanctuaries</span>
          <i class="bi bi-compass ms-2"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.destinations-showcase-section {
  background-color: #ffffff;
}
</style>
