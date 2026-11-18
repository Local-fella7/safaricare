<script setup lang="ts">
import ItineraryTimeline from '~/components/safari/ItineraryTimeline.vue';
import type { SafariPackage } from '~/shared/types';

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: safari, error, status } = await useFetch<SafariPackage>(() => `/api/safaris/${slug.value}`);

useSeoMeta({
  title: () => safari.value ? `${safari.value.title} | Safari Care Tanzania` : 'Safari Package | Safari Care',
  description: () => safari.value?.summary ?? 'Tailored Tanzanian safari journey with Safari Care.',
  ogTitle: () => safari.value?.title ?? 'Safari Care Tanzania',
  ogDescription: () => safari.value?.summary ?? 'Tailored Tanzanian safari journey with Safari Care.',
  ogImage: () => safari.value?.heroImage ?? ''
});
</script>

<template>
  <div class="safari-detail-view pb-5">
    <!-- Loading State -->
    <div v-if="status === 'pending'" class="text-center py-5">
      <div class="spinner-border text-sc-forest" role="status">
        <span class="visually-hidden">Loading safari details...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !safari" class="container py-5 text-center my-5">
      <div class="card p-5 border-0 shadow-sm rounded-4 mx-auto" style="max-width: 600px;">
        <i class="bi bi-exclamation-triangle display-4 text-warning mb-3"></i>
        <h1 class="font-serif h3 text-sc-forest mb-2">Safari Itinerary Not Found</h1>
        <p class="text-muted mb-4">
          The requested safari itinerary does not exist or may have been relocated.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <NuxtLink to="/safaris" class="btn btn-sc-primary">
            Browse All Safaris
          </NuxtLink>
          <NuxtLink to="/" class="btn btn-sc-outline-forest">
            Return Home
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Detail Content -->
    <div v-else>
      <!-- Hero Banner -->
      <section class="safari-hero position-relative text-white py-5">
        <div class="hero-bg position-absolute top-0 start-0 w-100 h-100">
          <img
            :src="safari.heroImage"
            :alt="safari.title"
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
                <NuxtLink to="/safaris" class="text-white-50 text-decoration-none">Safaris</NuxtLink>
              </li>
              <li class="breadcrumb-item active text-white" aria-current="page">
                {{ safari.title }}
              </li>
            </ol>
          </nav>

          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold">
              <i class="bi bi-clock me-1"></i> {{ safari.durationDays }} Days / {{ safari.durationDays - 1 }} Nights
            </span>
            <span class="badge bg-sc-forest text-white px-3 py-2 fw-semibold">
              {{ safari.travelStyle }}
            </span>
            <span class="badge bg-dark bg-opacity-75 text-white px-3 py-2">
              <i class="bi bi-compass me-1"></i> {{ safari.circuit }}
            </span>
          </div>

          <h1 class="font-serif fw-bold display-5 text-white mb-3 text-shadow">
            {{ safari.title }}
          </h1>

          <p class="lead text-white-90 fs-5 mb-0 pe-lg-5 text-shadow-sm" style="max-width: 820px;">
            {{ safari.summary }}
          </p>
        </div>
      </section>

      <!-- Main Content Layout -->
      <div class="container py-5">
        <div class="row g-5">
          <!-- Left Column: Itinerary Details -->
          <div class="col-lg-8">
            <!-- Destinations Visited Strip -->
            <div class="destinations-strip bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
              <h2 class="font-serif h6 fw-bold text-sc-forest text-uppercase mb-3">
                <i class="bi bi-geo-alt-fill text-sc-gold me-2"></i> Destinations Visited on this Journey
              </h2>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="d in safari.destinations"
                  :key="d"
                  class="badge bg-sc-forest bg-opacity-10 text-sc-forest px-3 py-2 fs-6 fw-medium"
                >
                  {{ d }}
                </span>
              </div>
            </div>

            <!-- Key Highlights -->
            <div v-if="safari.highlights && safari.highlights.length" class="mb-5">
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-3">
                Safari Highlights
              </h2>
              <div class="row g-3">
                <div
                  v-for="(hl, i) in safari.highlights"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="d-flex align-items-start gap-2 bg-white p-3 rounded-3 shadow-sm border border-light h-100">
                    <i class="bi bi-check-circle-fill text-sc-gold mt-1 flex-shrink-0 fs-5"></i>
                    <span class="small text-muted">{{ hl }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day by Day Itinerary -->
            <div class="mb-5">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h2 class="font-serif h4 fw-bold text-sc-forest mb-0">
                  Day-by-Day Itinerary
                </h2>
                <span class="badge-sc-terracotta">{{ safari.durationDays }} Days Detailed Plan</span>
              </div>
              <ItineraryTimeline :days="safari.itinerary" />
            </div>

            <!-- Inclusions & Exclusions -->
            <div class="row g-4 mb-5">
              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h3 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-check-circle-fill text-success fs-5"></i>
                    <span>What's Included</span>
                  </h3>
                  <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
                    <li
                      v-for="(inc, idx) in safari.inclusions"
                      :key="idx"
                      class="d-flex align-items-start gap-2"
                    >
                      <i class="bi bi-check2 text-success mt-1 flex-shrink-0"></i>
                      <span>{{ inc }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                  <h3 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                    <i class="bi bi-x-circle-fill text-danger fs-5"></i>
                    <span>What's Excluded</span>
                  </h3>
                  <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
                    <li
                      v-for="(exc, idx) in safari.exclusions"
                      :key="idx"
                      class="d-flex align-items-start gap-2"
                    >
                      <i class="bi bi-dash text-danger mt-1 flex-shrink-0"></i>
                      <span>{{ exc }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sticky Booking & Inquiry Card -->
          <div class="col-lg-4">
            <div class="sticky-top" style="top: 110px;">
              <div class="card card-sc border-0 shadow-lg p-4 bg-white rounded-4">
                <span class="badge-sc-gold align-self-start mb-2">100% Private Safari</span>
                <h3 class="font-serif h4 fw-bold text-sc-forest mb-1">
                  Tailor This Journey
                </h3>
                <p class="small text-muted mb-3">
                  Pricing depends on season, party size, and lodge level.
                </p>

                <div class="price-box p-3 rounded-3 bg-sc-ivory mb-4 border">
                  <div class="small text-muted">Estimated Private Rate:</div>
                  <div class="fw-bold text-sc-forest fs-5">{{ safari.priceNote }}</div>
                </div>

                <div class="d-flex flex-column gap-3">
                  <NuxtLink
                    :to="{ path: '/plan-your-safari', query: { safari: safari.slug, style: safari.travelStyle } }"
                    class="btn btn-sc-gold btn-lg w-100 py-3 text-white fw-bold shadow-sm"
                  >
                    <i class="bi bi-calendar-check me-2"></i>
                    <span>Inquire About This Safari</span>
                  </NuxtLink>

                  <a
                    :href="`https://wa.me/255700000000?text=${encodeURIComponent(`Hello Safari Care, I would like to inquire about the ${safari.title}.`)}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-success w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                  >
                    <i class="bi bi-whatsapp"></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div class="pt-4 mt-4 border-top">
                  <div class="fw-bold small text-sc-forest mb-2">Direct Expert Contact:</div>
                  <div class="d-flex flex-column gap-2 small text-muted">
                    <div>
                      <i class="bi bi-telephone-fill text-sc-gold me-2"></i>
                      <span>+255 700 000 000</span>
                    </div>
                    <div>
                      <i class="bi bi-envelope-fill text-sc-gold me-2"></i>
                      <span>info@safaricare.com</span>
                    </div>
                    <div>
                      <i class="bi bi-geo-alt-fill text-sc-gold me-2"></i>
                      <span>Arusha, Tanzania</span>
                    </div>
                  </div>
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
.safari-hero {
  min-height: 48vh;
  margin-top: -92px;
  padding-top: 130px !important;
  background-color: var(--sc-forest-dark);
}

@media (max-width: 767.98px) {
  .safari-hero {
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
