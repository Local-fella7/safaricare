<script setup lang="ts">
import ItineraryTimeline from '~/components/safari/ItineraryTimeline.vue';
import SafariRouteMap from '~/components/safari/SafariRouteMap.vue';
import SafariCard from '~/components/safari/SafariCard.vue';
import type { SafariPackage } from '~/shared/types';

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: safari, error, status } = await useFetch<SafariPackage>(() => `/api/safaris/${slug.value}`);

// Fetch all safaris to show related recommendations
const { data: allSafaris } = await useFetch<SafariPackage[]>('/api/safaris');

const relatedSafaris = computed(() => {
  if (!allSafaris.value || !safari.value) return [];
  return allSafaris.value
    .filter((s) => s.slug !== safari.value?.slug)
    .filter((s) => s.circuit === safari.value?.circuit || s.travelStyle === safari.value?.travelStyle)
    .slice(0, 3);
});

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
            fetchpriority="high"
          />
          <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        <div class="container position-relative z-index-1 py-4 py-md-5">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="mb-3 d-print-none">
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

          <p class="lead text-white-90 fs-5 mb-4 pe-lg-5 text-shadow-sm" style="max-width: 820px;">
            {{ safari.summary }}
          </p>

          <!-- Top Action Bar -->
          <div class="d-flex flex-wrap gap-3 align-items-center pt-2">
            <NuxtLink
              :to="{ path: '/plan-your-safari', query: { safari: safari.slug, style: safari.travelStyle, duration: safari.durationDays } }"
              class="btn btn-sc-gold text-white px-4 py-2"
            >
              <i class="bi bi-calendar-check me-2"></i> Customize This Safari
            </NuxtLink>
            <a
              :href="`https://wa.me/255700000000?text=${encodeURIComponent(`Hello Safari Care, I would like to inquire about the ${safari.title}.`)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light px-3 py-2 d-inline-flex align-items-center gap-2"
            >
              <i class="bi bi-whatsapp text-success"></i>
              <span>Quick WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Logistics Ribbon / Quick Facts Strip -->
      <section class="logistics-ribbon bg-white border-bottom py-3 shadow-sm">
        <div class="container">
          <div class="row g-3 text-center text-md-start align-items-center">
            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-geo-alt-fill text-sc-forest fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Starts & Finishes:</div>
                  <div class="fw-bold text-sc-forest small">{{ safari.startLocation || 'Arusha / JRO' }}</div>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-calendar3 text-sc-gold fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Best Season:</div>
                  <div class="fw-bold text-sc-forest small">{{ safari.bestSeason || 'Year-round' }}</div>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-truck text-sc-forest fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Safari Vehicle:</div>
                  <div class="fw-bold text-sc-forest small">Private 4x4 Land Cruiser</div>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-shield-check text-sc-gold fs-4"></i>
                <div class="text-start">
                  <div class="small text-muted" style="font-size: 0.75rem;">Party Guarantee:</div>
                  <div class="fw-bold text-sc-forest small">100% Private (No Strangers)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content Layout -->
      <div class="container py-5">
        <div class="row g-5">
          <!-- Left Column: Itinerary Details & Gallery -->
          <div class="col-lg-8">
            <!-- Destinations Visited Strip -->
            <div class="destinations-strip bg-white p-4 rounded-4 shadow-sm mb-4 border border-light">
              <h2 class="font-serif h6 fw-bold text-sc-forest text-uppercase mb-3">
                <i class="bi bi-map-fill text-sc-gold me-2"></i> Destinations & Sanctuaries on this Itinerary
              </h2>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="d in safari.destinations"
                  :key="d"
                  class="badge bg-sc-forest bg-opacity-10 text-sc-forest px-3 py-2 fs-6 fw-medium"
                >
                  <i class="bi bi-geo-alt text-sc-gold me-1"></i> {{ d }}
                </span>
              </div>
            </div>

            <!-- Interactive Route & Circuit Map -->
            <SafariRouteMap
              :destinations="safari.destinations"
              :circuit="safari.circuit"
              :title="safari.title"
            />

            <!-- Key Highlights -->
            <div v-if="safari.highlights && safari.highlights.length" class="mb-5">
              <h2 class="font-serif h4 fw-bold text-sc-forest mb-3">
                Safari Highlights & Wildlife Encounters
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
                <div>
                  <span class="badge-sc-terracotta d-inline-block mb-1">Route & Schedule</span>
                  <h2 class="font-serif h4 fw-bold text-sc-forest mb-0">
                    Day-by-Day Itinerary
                  </h2>
                </div>
                <span class="badge bg-sc-forest text-white py-2 px-3 fw-semibold">
                  {{ safari.durationDays }} Days Total
                </span>
              </div>
              <ItineraryTimeline :days="safari.itinerary" />
            </div>

            <!-- Accommodation Standards & Camp Notes -->
            <div class="accommodation-notes-box bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2 d-flex align-items-center gap-2">
                <i class="bi bi-houses-fill text-sc-gold"></i>
                <span>Accommodation & Wilderness Camp Standards</span>
              </h3>
              <p class="small text-muted mb-3">
                {{ safari.accommodationNotes || 'We partner with handpicked luxury safari lodges and permanent tented sanctuaries offering solar electricity, private verandas, en-suite hot bush showers, and gourmet dining inspired by local Tanzanian produce.' }}
              </p>
              <div class="row g-3 pt-2">
                <div class="col-sm-4">
                  <div class="p-2 bg-light rounded text-center small text-muted">
                    <i class="bi bi-wifi text-sc-forest me-1"></i> Wi-Fi at Main Lodges
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="p-2 bg-light rounded text-center small text-muted">
                    <i class="bi bi-battery-charging text-sc-forest me-1"></i> Solar Inverter Power
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="p-2 bg-light rounded text-center small text-muted">
                    <i class="bi bi-cup-hot text-sc-forest me-1"></i> Bush Dinners & Bar
                  </div>
                </div>
              </div>
            </div>

            <!-- Customization & Extension Options -->
            <div v-if="safari.customizationOptions && safari.customizationOptions.length" class="mb-5">
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                <i class="bi bi-sliders text-sc-gold"></i>
                <span>Recommended Itinerary Add-Ons & Customizations</span>
              </h3>
              <div class="row g-3">
                <div
                  v-for="(opt, optIdx) in safari.customizationOptions"
                  :key="optIdx"
                  class="col-md-6"
                >
                  <div class="p-3 bg-white rounded-3 shadow-sm border border-light h-100 d-flex align-items-start gap-2">
                    <i class="bi bi-plus-circle-fill text-sc-forest mt-1 flex-shrink-0"></i>
                    <span class="small text-muted">{{ opt }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Photo Gallery Preview -->
            <div v-if="safari.gallery && safari.gallery.length" class="mb-5">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="font-serif h4 fw-bold text-sc-forest mb-0">
                  Experience Gallery
                </h2>
                <span class="small text-muted">{{ safari.gallery.length }} scenic snapshots</span>
              </div>
              <div class="row g-3">
                <div
                  v-for="(photo, idx) in safari.gallery"
                  :key="idx"
                  class="col-4"
                >
                  <div class="gallery-frame rounded-3 overflow-hidden shadow-sm" style="height: 180px;">
                    <img
                      :src="photo"
                      :alt="`${safari.title} preview ${idx + 1}`"
                      class="w-100 h-100 object-fit-cover gallery-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
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

            <!-- Safari Packing & Preparation Tips -->
            <div class="packing-tips-box bg-white p-4 rounded-4 shadow-sm mb-5 border border-light">
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
                <i class="bi bi-backpack text-sc-gold"></i>
                <span>Essential Safari Packing & Tips for this Journey</span>
              </h3>
              <div class="row g-3 small text-muted">
                <div class="col-md-6 d-flex align-items-start gap-2">
                  <i class="bi bi-check2-circle text-sc-forest mt-1"></i>
                  <span>Neutral-colored clothing (khaki, tan, olive green); avoid dark blue/black in tsetse fly zones.</span>
                </div>
                <div class="col-md-6 d-flex align-items-start gap-2">
                  <i class="bi bi-check2-circle text-sc-forest mt-1"></i>
                  <span>Quality binoculars (8x42 or 10x42) and telephoto camera lens (minimum 300mm recommended).</span>
                </div>
                <div class="col-md-6 d-flex align-items-start gap-2">
                  <i class="bi bi-check2-circle text-sc-forest mt-1"></i>
                  <span>Warm layers or fleece for early morning Ngorongoro crater rim game drives (elevations exceed 2,200m).</span>
                </div>
                <div class="col-md-6 d-flex align-items-start gap-2">
                  <i class="bi bi-check2-circle text-sc-forest mt-1"></i>
                  <span>Type G (UK standard 3-pin) electrical plug adapter, insect repellent (DEET), and sunscreen.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sticky Booking & Inquiry Card -->
          <div class="col-lg-4 d-print-none">
            <div class="sticky-top" style="top: 110px;">
              <div class="card card-sc border-0 shadow-lg p-4 bg-white rounded-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="badge-sc-gold">100% Private Safari</span>
                  <span class="badge bg-sc-forest bg-opacity-10 text-sc-forest small fw-bold">Direct Operator</span>
                </div>

                <h3 class="font-serif h4 fw-bold text-sc-forest mb-1">
                  Tailor This Journey
                </h3>
                <p class="small text-muted mb-3">
                  Every departure date, lodge category, and pacing can be customized to your party.
                </p>

                <div class="price-box p-3 rounded-3 bg-sc-ivory mb-4 border">
                  <div class="small text-muted">Estimated Private Rate:</div>
                  <div class="fw-bold text-sc-forest fs-6">{{ safari.priceNote }}</div>
                </div>

                <div class="d-flex flex-column gap-3">
                  <NuxtLink
                    :to="{ path: '/plan-your-safari', query: { safari: safari.slug, style: safari.travelStyle, duration: safari.durationDays } }"
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

                <!-- Trust Points -->
                <div class="pt-4 mt-4 border-top">
                  <div class="fw-bold small text-sc-forest mb-2">Safari Care Guarantee:</div>
                  <ul class="list-unstyled small text-muted d-flex flex-column gap-2 mb-3">
                    <li class="d-flex align-items-center gap-2">
                      <i class="bi bi-check-circle-fill text-sc-forest"></i>
                      <span>Guaranteed window seat & private 4x4</span>
                    </li>
                    <li class="d-flex align-items-center gap-2">
                      <i class="bi bi-check-circle-fill text-sc-forest"></i>
                      <span>AMREF Flying Doctors included</span>
                    </li>
                    <li class="d-flex align-items-center gap-2">
                      <i class="bi bi-check-circle-fill text-sc-forest"></i>
                      <span>Free flexible itinerary revisions</span>
                    </li>
                  </ul>

                  <div class="fw-bold small text-sc-forest mb-2">Direct Arusha Office:</div>
                  <div class="d-flex flex-column gap-2 small text-muted">
                    <div>
                      <i class="bi bi-telephone-fill text-sc-gold me-2"></i>
                      <span>+255 700 000 000</span>
                    </div>
                    <div>
                      <i class="bi bi-envelope-fill text-sc-gold me-2"></i>
                      <span>info@safaricare.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Itineraries Recommendations -->
        <div v-if="relatedSafaris.length > 0" class="mt-5 pt-5 border-top d-print-none">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span class="badge-sc-terracotta d-inline-block mb-2">Alternative Journeys</span>
              <h2 class="font-serif fw-bold text-sc-forest display-6 mb-0">
                You May Also Consider
              </h2>
            </div>
            <NuxtLink to="/safaris" class="btn btn-sc-outline-forest mt-3 mt-md-0">
              <span>View All Safaris</span>
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>

          <div class="row g-4">
            <div
              v-for="relSafari in relatedSafaris"
              :key="relSafari.slug"
              class="col-md-6 col-lg-4"
            >
              <SafariCard :safari="relSafari" />
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

.gallery-img {
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
