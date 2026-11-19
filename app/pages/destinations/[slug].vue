<script setup lang="ts">
import type { Destination } from '~/shared/types';

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: destination, error, status } = await useFetch<Destination>(() => `/api/destinations/${slug.value}`);

useSeoMeta({
  title: () => destination.value ? `${destination.value.name} Wildlife Guide | Safari Care` : 'Destination Guide | Safari Care',
  description: () => destination.value?.summary ?? 'Tanzania destination guide with Safari Care.',
  ogTitle: () => destination.value?.name ?? 'Safari Care Destinations',
  ogDescription: () => destination.value?.summary ?? '',
  ogImage: () => destination.value?.heroImage ?? ''
});

const wildlifeIcon = (name: string): string => {
  const value = name.toLowerCase();

  if (value.includes('butterfly') || value.includes('butterflies')) return '🦋';
  if (value.includes('flamingo')) return '🦩';
  if (value.includes('turtle')) return '🐢';
  if (value.includes('dolphin')) return '🐬';
  if (value.includes('coral')) return '🪸';
  if (value.includes('fish')) return '🐠';
  if (value.includes('crocodile')) return '🐊';
  if (value.includes('chameleon')) return '🦎';
  if (value.includes('monkey') || value.includes('primate') || value.includes('mangabey') || value.includes('baboon') || value.includes('chimpanzee')) return '🐒';
  if (value.includes('lion')) return '🦁';
  if (value.includes('leopard') || value.includes('cheetah')) return '🐆';
  if (value.includes('hyena')) return '🐺';
  if (value.includes('dog')) return '🐕';
  if (value.includes('elephant')) return '🐘';
  if (value.includes('rhino')) return '🦏';
  if (value.includes('hippo')) return '🦛';
  if (value.includes('buffalo')) return '🐃';
  if (value.includes('giraffe')) return '🦒';
  if (value.includes('zebra')) return '🦓';
  if (value.includes('wildebeest')) return '🐂';
  if (value.includes('oryx') || value.includes('antelope') || value.includes('kudu') || value.includes('impala') || value.includes('gerenuk') || value.includes('duiker')) return '🦌';
  if (value.includes('warthog') || value.includes('bushpig')) return '🐗';
  if (value.includes('bird') || value.includes('avian') || value.includes('pelican') || value.includes('cormorant') || value.includes('stork')) return '🐦';
  if (value.includes('baobab') || value.includes('plant') || value.includes('tree')) return '🌳';

  return '🐾';
};
</script>

<template>
  <div class="destination-detail-view pb-5">
    <!-- Loading State -->
    <div v-if="status === 'pending'" class="text-center py-5">
      <div class="spinner-border text-sc-forest" role="status">
        <span class="visually-hidden">Loading destination...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !destination" class="container py-5 text-center my-5">
      <div class="card p-5 border-0 shadow-sm rounded-4 mx-auto" style="max-width: 600px;">
        <i class="bi bi-geo-alt-fill display-4 text-warning mb-3"></i>
        <h1 class="font-serif h3 text-sc-forest mb-2">Destination Not Found</h1>
        <p class="text-muted mb-4">
          The requested destination guide does not exist or may have been relocated.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <NuxtLink to="/destinations" class="btn btn-sc-primary">
            Explore All Destinations
          </NuxtLink>
          <NuxtLink to="/" class="btn btn-sc-outline-forest">
            Return Home
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-else>
      <!-- Hero Banner -->
      <section class="dest-hero position-relative text-white py-5">
        <div class="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img
            :src="destination.heroImage"
            :alt="destination.name"
            class="w-100 h-100 object-fit-cover"
          />
          <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        <div class="container position-relative z-index-1 py-4 py-md-5">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb small text-white-50">
              <li class="breadcrumb-item">
                <NuxtLink to="/" class="text-white-50 text-decoration-none">Home</NuxtLink>
              </li>
              <li class="breadcrumb-item">
                <NuxtLink to="/destinations" class="text-white-50 text-decoration-none">Destinations</NuxtLink>
              </li>
              <li class="breadcrumb-item active text-white" aria-current="page">
                {{ destination.name }}
              </li>
            </ol>
          </nav>

          <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold mb-3">
            {{ destination.region }}
          </span>

          <h1 class="font-serif fw-bold display-4 text-white mb-2 text-shadow">
            {{ destination.name }}
          </h1>

          <p class="lead text-sc-gold fs-5 mb-3 text-shadow-sm font-serif fst-italic">
            {{ destination.tagline }}
          </p>

          <p class="lead text-white-90 fs-6 mb-0 pe-lg-5" style="max-width: 800px;">
            {{ destination.summary }}
          </p>
        </div>
      </section>

      <!-- Main Destination Information -->
      <div class="container py-5">
        <div class="row g-5">
          <!-- Left Details -->
          <div class="col-lg-8">
            <!-- Highlights -->
            <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-4">
                What Makes {{ destination.name }} Unrivaled
              </h2>
              <div class="row g-3">
                <div
                  v-for="(hl, i) in destination.highlights"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="d-flex align-items-start gap-2 p-3 rounded-3 bg-sc-ivory h-100">
                    <i class="bi bi-star-fill text-sc-gold mt-1 flex-shrink-0"></i>
                    <span class="small text-muted">{{ hl }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Wildlife Spotlight -->
            <div v-if="destination.wildlife && destination.wildlife.length" class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-3">
                Signature Wildlife & Fauna
              </h2>
              <p class="small text-muted mb-4">
                During game drives led by our native Tanzanian naturalist guides, here are some of the resident species frequently observed:
              </p>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="animal in destination.wildlife"
                  :key="animal"
                  class="badge bg-sc-ivory text-sc-forest border py-2 px-3 fs-6 fw-medium d-inline-flex align-items-center gap-2"
                >
                  <span aria-hidden="true">{{ wildlifeIcon(animal) }}</span>
                  <span>{{ animal }}</span>
                </span>
              </div>
            </div>

            <!-- Best Time to Visit -->
            <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                <i class="bi bi-sun-fill text-warning"></i>
                <span>Best Time to Visit</span>
              </h2>
              <p class="text-muted mb-0">
                {{ destination.bestTimeToVisit }}
              </p>
            </div>
          </div>

          <!-- Right Sidebar -->
          <div class="col-lg-4">
            <div class="sticky-top" style="top: 110px;">
              <div class="card card-sc border-0 shadow-lg p-4 bg-white rounded-4">
                <span class="badge-sc-terracotta align-self-start mb-2">Safari Care Itineraries</span>
                <h3 class="font-serif h4 fw-bold text-sc-forest mb-3">
                  Experience {{ destination.name }}
                </h3>
                <p class="small text-muted mb-4">
                  We integrate {{ destination.name }} into tailored private circuits with private vehicles and top-rated eco-lodges.
                </p>

                <div class="d-flex flex-column gap-3">
                  <NuxtLink to="/safaris" class="btn btn-sc-primary py-3 w-100">
                    <i class="bi bi-compass me-2"></i> View Related Safaris
                  </NuxtLink>
                  <NuxtLink
                    :to="{ path: '/plan-your-safari', query: { destination: destination.slug } }"
                    class="btn btn-sc-gold text-white py-3 w-100"
                  >
                    <i class="bi bi-calendar2-check me-2"></i> Request Custom Quote
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dest-hero {
  min-height: 48vh;
  margin-top: -92px;
  padding-top: 130px !important;
  background-color: var(--sc-forest-dark);
}

@media (max-width: 767.98px) {
  .dest-hero {
    min-height: 42vh;
    margin-top: -72px;
    padding-top: 100px !important;
  }
}

.hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(26, 50, 44, 0.75) 0%,
    rgba(26, 50, 44, 0.95) 100%
  );
}

.text-white-90 {
  color: rgba(255, 255, 255, 0.92);
}

.text-shadow {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.text-shadow-sm {
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
</style>
