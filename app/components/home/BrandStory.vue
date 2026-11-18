<script setup lang="ts">
// Brand Story & Local Expertise
</script>

<template>
  <section class="brand-story-section py-5 my-3 my-md-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Visual Column -->
        <div class="col-lg-6 position-relative">
          <div class="story-image-stack position-relative pe-lg-4">
            <div class="main-image-frame rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
                alt="Local Safari Guide in Tanzania"
                class="w-100 object-fit-cover main-img"
              />
            </div>
            <!-- Floating Badge Card -->
            <div class="floating-badge-card bg-sc-forest text-white p-3 p-md-4 rounded-3 shadow-lg position-absolute bottom-0 start-0 mb-n3 ms-n2 ms-md-n4">
              <div class="d-flex align-items-center gap-3">
                <div class="fs-1 text-sc-gold">
                  <i class="bi bi-shield-shaded"></i>
                </div>
                <div>
                  <div class="font-serif fw-bold h5 mb-0">Born in Arusha</div>
                  <div class="small text-white-50">Local Tanzanian safari operator</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Copy Column -->
        <div class="col-lg-6">
          <div class="badge-sc-terracotta d-inline-block mb-3">
            Authentic Tanzania
          </div>
          <h2 class="font-serif fw-bold text-sc-forest display-6 mb-4">
            Locally Rooted. Universally Extraordinary.
          </h2>

          <p class="lead text-muted fs-6 mb-4">
            Based in Arusha, Safari Care creates personalized journeys through Tanzania’s extraordinary landscapes. From the Serengeti and Ngorongoro Crater to Kilimanjaro adventures and Zanzibar escapes, every itinerary is shaped around the way you want to travel.
          </p>

          <p class="text-muted small mb-4">
            We are not a distant overseas booking desk. We are Tanzanians who have spent decades tracking big cats across the savannah, summiting volcanic peaks, and building genuine relationships with community elders and conservation lodges.
          </p>

          <div class="row g-4 mb-4">
            <div class="col-sm-6">
              <div class="d-flex align-items-start gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold fs-5 mt-1"></i>
                <div>
                  <h4 class="h6 fw-bold text-sc-forest mb-1">Tailored Exclusively For You</h4>
                  <p class="small text-muted mb-0">No rigid group tours or fixed schedules. Travel at your own pace.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="d-flex align-items-start gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold fs-5 mt-1"></i>
                <div>
                  <h4 class="h6 fw-bold text-sc-forest mb-1">Dedicated 4x4 Land Cruisers</h4>
                  <p class="small text-muted mb-0">Custom pop-up roofs, charging sockets, fridge, and guaranteed window seats.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-3 pt-2">
            <NuxtLink to="/about-us" class="btn btn-sc-primary">
              <span>Read Our Full Story</span>
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn btn-sc-outline-forest">
              <span>Contact Arusha Office</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-story-section {
  background-color: var(--sc-ivory);
}

.main-image-frame {
  height: 480px;
}

.main-img {
  height: 100%;
}

.floating-badge-card {
  max-width: 320px;
  background-color: var(--sc-forest) !important;
}
</style>
