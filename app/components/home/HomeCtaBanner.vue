<script setup lang="ts">
import { CONTACT } from '~/utils/contact';
</script>

<template>
  <section class="home-cta-section py-5 position-relative text-white overflow-hidden">
    <div class="cta-bg position-absolute top-0 start-0 w-100 h-100">
      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80"
        alt="Tanzania Sunset Safari"
        class="w-100 h-100 object-fit-cover"
        loading="lazy"
      />
      <div class="cta-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <div class="container position-relative z-index-1 py-5 text-center" style="max-width: 820px;">
      <span class="badge-sc-gold d-inline-block mb-3">Begin Your Adventure</span>
      <h2 class="display-5 font-serif fw-bold text-white mb-3">
        Your Dream Safari, Beautifully Planned.
      </h2>
      <p class="lead text-white-90 fs-5 mb-4">
        Tell us when you would like to travel, what you would love to experience, and how you imagine your ideal Tanzanian adventure. We will craft a bespoke day-by-day proposal within 24 hours.
      </p>

      <div class="d-flex flex-wrap justify-content-center gap-3">
        <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold btn-lg px-4 py-3 text-white shadow">
          <i class="bi bi-calendar-check me-2"></i>
          <span>Plan Your Safari Now</span>
        </NuxtLink>
        <a
          :href="CONTACT.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-light btn-lg px-4 py-3 d-inline-flex align-items-center gap-2"
        >
          <i class="bi bi-whatsapp text-success"></i>
          <span>Quick WhatsApp Inquiry</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-cta-section {
  background-color: var(--sc-forest-dark);
}

.cta-overlay {
  background: linear-gradient(
    135deg,
    rgba(26, 50, 44, 0.92) 0%,
    rgba(67, 118, 108, 0.85) 100%
  );
}

.text-white-90 {
  color: rgba(255, 255, 255, 0.92);
}
</style>
