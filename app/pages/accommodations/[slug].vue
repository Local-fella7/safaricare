<script setup lang="ts">
import AccommodationCard from '~/components/accommodation/AccommodationCard.vue';
import { CONTACT } from '~/utils/contact';
import type { Accommodation } from '~/shared/types';

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: stay, error, status } = await useFetch<Accommodation>(() => `/api/accommodations/${slug.value}`);
const { data: allStays } = await useFetch<Accommodation[]>('/api/accommodations');

const relatedStays = computed(() => {
  if (!allStays.value || !stay.value) return [];
  return allStays.value
    .filter((a) => a.slug !== stay.value?.slug && a.region === stay.value?.region)
    .slice(0, 3);
});

useSeoMeta({
  title: () => stay.value ? `${stay.value.name}, ${stay.value.location} | Safari Care` : 'Safari Accommodation | Safari Care',
  description: () => stay.value?.summary ?? 'Handpicked Tanzanian safari accommodation with Safari Care.',
  ogTitle: () => stay.value?.name ?? 'Safari Care Accommodation',
  ogDescription: () => stay.value?.summary ?? 'Handpicked Tanzanian safari accommodation with Safari Care.',
  ogImage: () => stay.value?.heroImage ?? ''
});
</script>

<template>
  <div class="accommodation-detail-view pb-5">
    <div v-if="status === 'pending'" class="text-center py-5">
      <div class="spinner-border text-sc-forest" role="status">
        <span class="visually-hidden">Loading accommodation details...</span>
      </div>
    </div>

    <div v-else-if="error || !stay" class="container py-5 text-center my-5">
      <div class="card p-5 border-0 shadow-sm rounded-4 mx-auto" style="max-width: 600px;">
        <i class="bi bi-exclamation-triangle display-4 text-warning mb-3"></i>
        <h1 class="font-serif h3 text-sc-forest mb-2">Accommodation Not Found</h1>
        <p class="text-muted mb-4">This property is no longer listed or may have been relocated.</p>
        <div class="d-flex justify-content-center gap-3">
          <NuxtLink to="/accommodations" class="btn btn-sc-primary">Browse All Stays</NuxtLink>
          <NuxtLink to="/" class="btn btn-sc-outline-forest">Return Home</NuxtLink>
        </div>
      </div>
    </div>

    <div v-else>
      <section class="stay-hero position-relative text-white py-5">
        <div class="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img :src="stay.heroImage" :alt="stay.name" class="w-100 h-100 object-fit-cover" fetchpriority="high" />
          <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        <div class="container position-relative z-index-1 py-4 py-md-5">
          <nav aria-label="breadcrumb" class="mb-3 d-print-none">
            <ol class="breadcrumb small text-white-50">
              <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50 text-decoration-none">Home</NuxtLink></li>
              <li class="breadcrumb-item"><NuxtLink to="/accommodations" class="text-white-50 text-decoration-none">Accommodation</NuxtLink></li>
              <li class="breadcrumb-item active text-white" aria-current="page">{{ stay.name }}</li>
            </ol>
          </nav>

          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold"><i class="bi bi-geo-alt me-1"></i>{{ stay.location }}</span>
            <span class="badge bg-sc-forest text-white px-3 py-2 fw-semibold">{{ stay.category }}</span>
            <span class="badge bg-dark bg-opacity-75 text-white px-3 py-2">{{ stay.region }}</span>
          </div>

          <h1 class="font-serif fw-bold display-5 text-white mb-3 text-shadow">{{ stay.name }}</h1>
          <p class="lead text-white-90 fs-5 mb-4 text-shadow-sm" style="max-width: 820px;">{{ stay.tagline }}</p>

          <div class="d-flex flex-wrap gap-3 align-items-center pt-2">
            <NuxtLink
              :to="{ path: '/plan-your-safari', query: { accommodation: stay.slug, message: `I would like to stay at ${stay.name} during my safari.` } }"
              class="btn btn-sc-gold text-white px-4 py-2"
            >
              <i class="bi bi-calendar-check me-2"></i> Include in My Safari
            </NuxtLink>
            <a
              :href="`${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello Safari Care, please tell me more about ${stay.name}.`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light px-3 py-2 d-inline-flex align-items-center gap-2"
            >
              <i class="bi bi-whatsapp text-success"></i><span>Ask About This Stay</span>
            </a>
          </div>
        </div>
      </section>

      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
              <span class="badge-sc-terracotta d-inline-block mb-2">The Property</span>
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-3">{{ stay.tagline }}</h2>
              <p class="text-muted mb-4">{{ stay.summary }}</p>

              <div v-if="stay.gallery.length" class="row g-3">
                <div v-for="(image, i) in stay.gallery" :key="i" class="col-md-6">
                  <img :src="image" :alt="`${stay.name} gallery image ${i + 1}`" class="img-fluid rounded-3 w-100 object-fit-cover" style="height: 220px;" loading="lazy" />
                </div>
              </div>
            </div>

            <div class="row g-4 mb-4">
              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h2 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-stars text-sc-gold"></i> Why Guests Love It
                  </h2>
                  <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                    <li v-for="(hl, i) in stay.highlights" :key="i" class="d-flex align-items-start gap-2">
                      <i class="bi bi-check2-circle text-sc-forest mt-1 flex-shrink-0"></i><span>{{ hl }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h2 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-list-check text-sc-gold"></i> Facilities & Amenities
                  </h2>
                  <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                    <li v-for="(amenity, i) in stay.amenities" :key="i" class="d-flex align-items-start gap-2">
                      <i class="bi bi-check2 text-sc-gold mt-1 flex-shrink-0"></i><span>{{ amenity }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-if="stay.nearbyDestinations.length" class="bg-white p-4 rounded-4 shadow-sm border border-light">
              <h2 class="font-serif h5 fw-bold text-sc-forest mb-3">Nearby Wilderness</h2>
              <div class="d-flex flex-wrap gap-2">
                <NuxtLink
                  v-for="dest in stay.nearbyDestinations"
                  :key="dest"
                  :to="`/destinations`"
                  class="destination-pill d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm text-decoration-none"
                >
                  <i class="bi bi-geo-alt-fill text-sc-gold fs-6"></i>
                  <span class="fw-semibold text-white small">{{ dest }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <aside class="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top" style="top: 110px;">
              <span class="badge-sc-gold d-inline-block mb-2">Tailor-Made Stay</span>
              <h2 class="font-serif h5 fw-bold text-sc-forest mb-2">{{ stay.name }}</h2>
              <p class="small text-muted mb-3">{{ stay.priceNote }}</p>
              <div class="d-grid gap-2 mb-3">
                <NuxtLink
                  :to="{ path: '/plan-your-safari', query: { accommodation: stay.slug, message: `I would like to stay at ${stay.name} during my safari.` } }"
                  class="btn btn-sc-gold text-white py-2"
                >
                  <i class="bi bi-calendar2-heart me-1"></i> Request Custom Quote
                </NuxtLink>
                <a :href="CONTACT.whatsapp" target="_blank" rel="noopener noreferrer" class="btn btn-sc-outline-forest py-2">
                  <i class="bi bi-whatsapp text-success me-1"></i> Chat on WhatsApp
                </a>
              </div>
              <hr />
              <div class="small text-muted">
                <div class="mb-2"><i class="bi bi-envelope-fill text-sc-gold me-2"></i>{{ CONTACT.email }}</div>
                <div class="mb-2"><i class="bi bi-telephone-fill text-sc-gold me-2"></i>{{ CONTACT.phoneLabel }}</div>
                <div><i class="bi bi-geo-alt-fill text-sc-gold me-2"></i>{{ CONTACT.address }}</div>
              </div>
            </aside>
          </div>
        </div>

        <div v-if="relatedStays.length" class="mt-5 pt-4 border-top">
          <h2 class="font-serif h4 fw-bold text-sc-forest mb-4 text-center">More Stays in {{ stay.region }}</h2>
          <div class="row g-4">
            <div v-for="related in relatedStays" :key="related.slug" class="col-md-6 col-xl-4">
              <AccommodationCard :accommodation="related" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accommodation-detail-view {
  background-color: var(--sc-ivory);

  .stay-hero {
    min-height: 400px;
    background-color: #1a322c;
  }

  .hero-overlay {
    background: linear-gradient(90deg, rgba(26, 50, 44, 0.88) 0%, rgba(26, 50, 44, 0.45) 70%, rgba(26, 50, 44, 0.25) 100%);
  }

  .text-shadow {
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
  }

  .text-shadow-sm {
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);
  }
}
</style>
