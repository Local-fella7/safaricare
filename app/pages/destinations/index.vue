<script setup lang="ts">
import DestinationCard from '~/components/destination/DestinationCard.vue';
import type { Destination } from '~/shared/types';

useSeoMeta({
  title: 'Tanzania National Parks & Destinations Guide | Safari Care',
  description: 'Explore the iconic national parks and sanctuaries of Tanzania: Serengeti, Ngorongoro Crater, Tarangire, Kilimanjaro, and Zanzibar Archipelago.'
});

const { data: destinations, status } = await useFetch<Destination[]>('/api/destinations');
</script>

<template>
  <div class="destinations-page-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Destinations
          </li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-5" style="max-width: 800px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Wild Tanzania</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Tanzania’s Iconic Sanctuaries
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          Tanzania protects more than 30% of its land for wildlife conservation. From world-famous savannah plains to ancient volcanic calderas and pristine spice island atolls, discover the regions we explore.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="status === 'pending'" class="text-center py-5">
        <div class="spinner-border text-sc-forest" role="status">
          <span class="visually-hidden">Loading destinations...</span>
        </div>
      </div>

      <!-- Destinations Grid -->
      <div v-else class="row g-4 mb-5">
        <div
          v-for="dest in destinations"
          :key="dest.slug"
          class="col-md-6 col-lg-4"
        >
          <DestinationCard :destination="dest" />
        </div>
      </div>

      <!-- Circuits Explainer Section -->
      <div class="circuits-overview bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          Understanding Tanzania's Safari Circuits
        </h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-forest text-white mb-2">Most Famous</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">The Northern Circuit</h3>
              <p class="small text-muted mb-0">
                Home to the Serengeti, Ngorongoro Crater, Lake Manyara, and Tarangire. World-renowned for dense predator populations, the Great Migration, and easy vehicle access from Arusha.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-gold text-white mb-2">Wild & Remote</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">The Southern Circuit</h3>
              <p class="small text-muted mb-0">
                Comprising Nyerere (Selous), Ruaha, and Udzungwa Mountains. Offers immense wilderness areas, boat safaris on the Rufiji River, walking safaris, and virtually no crowds.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="circuit-box p-3 rounded-3 bg-sc-ivory h-100">
              <span class="badge bg-sc-terracotta text-white mb-2">Coast & Islands</span>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">Zanzibar & Coast</h3>
              <p class="small text-muted mb-0">
                The idyllic post-safari retreat: UNESCO Stone Town cultural history, fragrant spice plantations, and turquoise coral waters with barefoot luxury beachfront villas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.destinations-page-view {
  background-color: var(--sc-ivory);
}
</style>
