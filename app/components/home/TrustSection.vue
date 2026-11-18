<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';

const trustPillars = [
  {
    icon: 'bi-truck',
    title: 'Customized 4x4 Land Cruisers',
    text: 'Every guest is guaranteed a window seat. Our vehicles feature pop-up photographic roofs, charging sockets, on-board fridge, and emergency HF radio.'
  },
  {
    icon: 'bi-person-badge',
    title: 'Certified Native Guides',
    text: 'Our guides have an average of 12+ years in the bush with deep knowledge of animal behavior, tracking skills, botany, and bird identification.'
  },
  {
    icon: 'bi-heart-pulse-fill',
    title: 'AMREF Flying Doctors Included',
    text: 'Complimentary emergency airborne medical evacuation coverage is provided for every traveler on all multi-day Safari Care itineraries.'
  },
  {
    icon: 'bi-stars',
    title: '100% Tailor-Made Flexibility',
    text: 'Your journey is built around your travel rhythm, accommodation preferences, dietary requirements, and personal wildlife bucket list.'
  }
];

const testimonials = [
  {
    quote: "Our 6-day Northern Circuit with Safari Care exceeded every dream. Seeing a lion hunt in the Serengeti and black rhinos in Ngorongoro with our guide Godfrey was utterly life-changing.",
    author: "Elena & David M.",
    location: "United Kingdom",
    safari: "6-Day Northern Circuit Signature",
    rating: 5
  },
  {
    quote: "The private camping setup was immaculate! Chef Raymond cooked three-course gourmet meals in the bush, and sleeping under the Serengeti stars was magical.",
    author: "Julian & Sarah K.",
    location: "Germany",
    safari: "3-Day Private Camping Safari",
    rating: 5
  },
  {
    quote: "Summiting Kilimanjaro via Machame and then relaxing in Zanzibar was flawlessly orchestrated. Safari Care’s Arusha team handled every detail seamlessly.",
    author: "Michael T. & Family",
    location: "United States",
    safari: "13-Day Kilimanjaro Trek & Safari",
    rating: 5
  }
];
</script>

<template>
  <section class="trust-section py-5 my-2">
    <div class="container py-lg-4">
      <SectionHeader
        subtitle="The Safari Care Standard"
        title="Why Discerning Travelers Choose Us"
        description="Experience the difference of traveling with an authentic, locally managed Tanzanian safari operator committed to excellence and ethical conservation."
        center
      />

      <!-- 4 Pillars Grid -->
      <div class="row g-4 mb-5">
        <div
          v-for="pillar in trustPillars"
          :key="pillar.title"
          class="col-md-6 col-lg-3"
        >
          <div class="pillar-card p-4 rounded-4 bg-white shadow-sm h-100 border border-light">
            <div class="pillar-icon rounded-circle bg-sc-forest bg-opacity-10 text-sc-forest d-flex align-items-center justify-content-center mb-3 fs-3">
              <i :class="`bi ${pillar.icon}`"></i>
            </div>
            <h3 class="font-serif fw-bold h5 text-sc-forest mb-2">{{ pillar.title }}</h3>
            <p class="small text-muted mb-0">{{ pillar.text }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonials Carousel/Grid -->
      <div class="testimonials-wrapper bg-sc-forest-dark text-white p-4 p-md-5 rounded-4 shadow-lg my-4">
        <div class="text-center mb-4">
          <span class="badge-sc-gold d-inline-block mb-2">Verified Traveler Stories</span>
          <h3 class="font-serif fw-bold display-7 text-white">Memories Created in Tanzania</h3>
        </div>

        <div class="row g-4">
          <div
            v-for="(t, idx) in testimonials"
            :key="idx"
            class="col-lg-4"
          >
            <div class="testimonial-card p-4 rounded-3 bg-white bg-opacity-10 h-100 d-flex flex-column">
              <!-- Rating Stars -->
              <div class="text-sc-gold mb-3">
                <i v-for="star in t.rating" :key="star" class="bi bi-star-fill me-1"></i>
              </div>
              <p class="fst-italic text-white-90 small mb-4 flex-grow-1">
                "{{ t.quote }}"
              </p>
              <div class="pt-3 border-top border-white border-opacity-20">
                <div class="fw-bold font-serif text-sc-gold">{{ t.author }}</div>
                <div class="small text-white-50">{{ t.location }} &bull; {{ t.safari }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pillar-icon {
  width: 58px;
  height: 58px;
}

.pillar-card {
  transition: transform 0.25s ease;
  &:hover {
    transform: translateY(-4px);
  }
}

.text-white-90 {
  color: rgba(255, 255, 255, 0.9);
}
</style>
