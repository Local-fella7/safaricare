<script setup lang="ts">
// Hero Banner with Section 10 copy
</script>

<template>
  <section class="hero-section position-relative d-flex align-items-center text-white py-5">
    <!-- Hero Background Image & Gradient Overlay -->
    <div class="hero-bg-media position-absolute top-0 start-0 w-100 h-100">
      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85"
        alt="Tanzanian Serengeti Savannah Wildlife Safari"
        class="w-100 h-100 object-fit-cover hero-img"
        priority
      />
      <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <!-- Content Container -->
    <div class="container position-relative z-index-1 py-lg-5 my-3 my-md-5">
      <div class="row align-items-center">
        <div class="col-lg-9 col-xl-8">
          <!-- Top Badge -->
          <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-15 backdrop-blur text-white small mb-3 border border-white border-opacity-25">
            <span class="badge bg-sc-gold text-white rounded-pill px-2 py-1">Direct from Arusha</span>
            <span>Tailor-Made Tanzanian Expeditions</span>
          </div>

          <!-- Hero Headline -->
          <h1 class="display-3 font-serif fw-bold text-white mb-3 text-shadow lh-sm">
            Extraordinary Journeys. <br class="d-none d-sm-inline" />
            <span class="text-sc-gold fst-italic">Timeless Memories.</span>
          </h1>

          <!-- Hero Subtext (from Section 10 Starter Draft) -->
          <p class="lead text-white-90 fs-5 mb-4 text-shadow-sm pe-lg-5" style="max-width: 680px;">
            Discover Tanzania through thoughtfully designed private safaris, remarkable wildlife encounters, and exceptional hospitality guided by local experts who call this wilderness home.
          </p>

          <!-- Dual Primary CTAs -->
          <div class="d-flex flex-wrap align-items-center gap-3 pt-2">
            <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold btn-lg px-4 py-3 text-white shadow">
              <i class="bi bi-compass me-2"></i>
              <span>Plan Your Custom Safari</span>
            </NuxtLink>
            <NuxtLink to="/safaris" class="btn btn-sc-outline-light btn-lg px-4 py-3">
              <i class="bi bi-grid me-2"></i>
              <span>Explore Itineraries</span>
            </NuxtLink>
          </div>

          <!-- Trust Counters / Features -->
          <div class="row g-3 g-md-4 mt-4 pt-4 border-top border-white border-opacity-20 text-white-90">
            <div class="col-4 col-md-3">
              <div class="fs-4 fw-bold font-serif text-sc-gold">100%</div>
              <div class="small text-white-50">Private Safari 4x4s</div>
            </div>
            <div class="col-4 col-md-3">
              <div class="fs-4 fw-bold font-serif text-sc-gold">Local</div>
              <div class="small text-white-50">Arusha Specialists</div>
            </div>
            <div class="col-4 col-md-3">
              <div class="fs-4 fw-bold font-serif text-sc-gold">24/7</div>
              <div class="small text-white-50">Ground Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  min-height: 85vh;
  margin-top: -92px; /* Pull behind transparent header */
  padding-top: 140px !important;
  background-color: var(--sc-forest-dark);
}

@media (max-width: 767.98px) {
  .hero-section {
    min-height: 75vh;
    margin-top: -72px;
    padding-top: 110px !important;
  }
}

.hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(26, 50, 44, 0.88) 0%,
    rgba(67, 118, 108, 0.65) 50%,
    rgba(26, 50, 44, 0.85) 100%
  );
}

.text-white-90 {
  color: rgba(255, 255, 255, 0.92);
}

.backdrop-blur {
  backdrop-filter: blur(8px);
}

.text-shadow {
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
}

.text-shadow-sm {
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
}
</style>
