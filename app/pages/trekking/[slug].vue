<script setup lang="ts">
import ItineraryTimeline from '~/components/safari/ItineraryTimeline.vue';
import TrekCard from '~/components/trek/TrekCard.vue';
import { CONTACT } from '~/utils/contact';
import type { Trek } from '~/shared/types';

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: trek, error, status } = await useFetch<Trek>(() => `/api/treks/${slug.value}`);
const { data: allTreks } = await useFetch<Trek[]>('/api/treks');

const relatedTreks = computed(() => {
  if (!allTreks.value || !trek.value) return [];
  return allTreks.value
    .filter((t) => t.slug !== trek.value?.slug && t.mountain === trek.value?.mountain)
    .slice(0, 3);
});

useSeoMeta({
  title: () => trek.value ? `${trek.value.title} | Safari Care Tanzania` : 'Mountain Trek | Safari Care',
  description: () => trek.value?.summary ?? 'Guided Tanzania mountain expedition with Safari Care.',
  ogTitle: () => trek.value?.title ?? 'Safari Care Mountain Treks',
  ogDescription: () => trek.value?.summary ?? 'Guided Tanzania mountain expedition with Safari Care.',
  ogImage: () => trek.value?.heroImage ?? ''
});
</script>

<template>
  <div class="trek-detail-view pb-5">
    <div v-if="status === 'pending'" class="text-center py-5">
      <div class="spinner-border text-sc-forest" role="status">
        <span class="visually-hidden">Loading trek details...</span>
      </div>
    </div>

    <div v-else-if="error || !trek" class="container py-5 text-center my-5">
      <div class="card p-5 border-0 shadow-sm rounded-4 mx-auto" style="max-width: 600px;">
        <i class="bi bi-exclamation-triangle display-4 text-warning mb-3"></i>
        <h1 class="font-serif h3 text-sc-forest mb-2">Trekking Route Not Found</h1>
        <p class="text-muted mb-4">The requested expedition does not exist or may have been relocated.</p>
        <div class="d-flex justify-content-center gap-3">
          <NuxtLink to="/trekking" class="btn btn-sc-primary">Browse All Treks</NuxtLink>
          <NuxtLink to="/" class="btn btn-sc-outline-forest">Return Home</NuxtLink>
        </div>
      </div>
    </div>

    <div v-else>
      <section class="trek-hero position-relative text-white py-5">
        <div class="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img :src="trek.heroImage" :alt="trek.title" class="w-100 h-100 object-fit-cover" fetchpriority="high" />
          <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        <div class="container position-relative z-index-1 py-4 py-md-5">
          <nav aria-label="breadcrumb" class="mb-3 d-print-none">
            <ol class="breadcrumb small text-white-50">
              <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50 text-decoration-none">Home</NuxtLink></li>
              <li class="breadcrumb-item"><NuxtLink to="/trekking" class="text-white-50 text-decoration-none">Trekking</NuxtLink></li>
              <li class="breadcrumb-item active text-white" aria-current="page">{{ trek.title }}</li>
            </ol>
          </nav>

          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold">
              <i class="bi bi-clock me-1"></i> {{ trek.durationDays }} Days / {{ trek.durationDays - 1 }} Nights
            </span>
            <span class="badge bg-sc-forest text-white px-3 py-2 fw-semibold">{{ trek.routeName }}</span>
            <span class="badge bg-dark bg-opacity-75 text-white px-3 py-2">
              <i class="bi bi-mountain me-1"></i> Mount {{ trek.mountain }}
            </span>
          </div>

          <h1 class="font-serif fw-bold display-5 text-white mb-3 text-shadow">{{ trek.title }}</h1>
          <p class="lead text-white-90 fs-5 mb-4 pe-lg-5 text-shadow-sm" style="max-width: 820px;">
            {{ trek.summary }}
          </p>

          <div class="d-flex flex-wrap gap-3 align-items-center pt-2">
            <NuxtLink
              :to="{ path: '/plan-your-safari', query: { trek: trek.slug, style: 'trekking', duration: trek.durationDays } }"
              class="btn btn-sc-gold text-white px-4 py-2"
            >
              <i class="bi bi-calendar-check me-2"></i> Customize This Trek
            </NuxtLink>
            <a
              :href="`${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello Safari Care, I would like to inquire about the ${trek.title}.`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light px-3 py-2 d-inline-flex align-items-center gap-2"
            >
              <i class="bi bi-whatsapp text-success"></i><span>Quick WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      <section class="logistics-ribbon bg-white border-bottom py-3 shadow-sm">
        <div class="container">
          <div class="row g-3 text-center text-md-start align-items-center">
            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-geo-alt-fill text-sc-forest fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Mountain:</div>
                  <div class="fw-bold text-sc-forest small">Mount {{ trek.mountain }}</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-bar-chart-line text-sc-gold fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Difficulty:</div>
                  <div class="fw-bold text-sc-forest small">{{ trek.difficulty }}</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-trophy text-sc-forest fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Summit Success:</div>
                  <div class="fw-bold text-sc-forest small">{{ trek.successRate || 'Route dependent' }}</div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-calendar3 text-sc-gold fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Best Season:</div>
                  <div class="fw-bold text-sc-forest small">{{ trek.bestSeason }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="mb-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <span class="badge-sc-terracotta d-inline-block mb-1">Route & Schedule</span>
                  <h2 class="font-serif h4 fw-bold text-sc-forest mb-0">Day-by-Day Expedition Itinerary</h2>
                </div>
                <span class="badge bg-sc-forest text-white py-2 px-3 fw-semibold">{{ trek.durationDays }} Days Total</span>
              </div>
              <ItineraryTimeline :days="trek.itinerary" />
            </div>

            <div class="row g-4 mb-5">
              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h2 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-check2-circle text-sc-forest"></i> Included in the Price
                  </h2>
                  <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                    <li v-for="(item, i) in trek.inclusions" :key="i" class="d-flex align-items-start gap-2">
                      <i class="bi bi-check2 text-sc-gold mt-1 flex-shrink-0"></i><span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h2 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-x-circle text-sc-terracotta"></i> Excluded from the Price
                  </h2>
                  <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                    <li v-for="(item, i) in trek.exclusions" :key="i" class="d-flex align-items-start gap-2">
                      <i class="bi bi-dash text-sc-terracotta mt-1 flex-shrink-0"></i><span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-4 rounded-4 shadow-sm border border-light">
              <h2 class="font-serif h5 fw-bold text-sc-forest mb-3">Expedition Highlights</h2>
              <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
                <li v-for="(hl, i) in trek.highlights" :key="i" class="d-flex align-items-start gap-2">
                  <i class="bi bi-star-fill text-sc-gold mt-1 flex-shrink-0"></i><span>{{ hl }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <aside class="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top" style="top: 110px;">
              <span class="badge-sc-gold d-inline-block mb-2">Private Expedition Quote</span>
              <h2 class="font-serif h5 fw-bold text-sc-forest mb-2">{{ trek.title }}</h2>
              <p class="small text-muted mb-3">{{ trek.priceNote }}</p>
              <div class="d-grid gap-2 mb-3">
                <NuxtLink
                  :to="{ path: '/plan-your-safari', query: { trek: trek.slug, style: 'trekking', duration: trek.durationDays } }"
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

        <div v-if="relatedTreks.length" class="mt-5 pt-4 border-top">
          <h2 class="font-serif h4 fw-bold text-sc-forest mb-4 text-center">More Mountain Expeditions</h2>
          <div class="row g-4">
            <div v-for="related in relatedTreks" :key="related.slug" class="col-md-6 col-xl-4">
              <TrekCard :trek="related" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trek-detail-view {
  background-color: var(--sc-ivory);

  .trek-hero {
    min-height: 420px;
    background-color: #1a322c;
  }

  .hero-bg img {
    object-position: center 45%;
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
