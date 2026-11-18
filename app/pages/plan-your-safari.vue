<script setup lang="ts">
import InquiryForm from '~/components/forms/InquiryForm.vue';

const route = useRoute();
const safariParam = computed(() => route.query.safari ? String(route.query.safari) : '');
const styleParam = computed(() => route.query.style ? String(route.query.style).toLowerCase() : 'luxury');

useSeoMeta({
  title: 'Plan Your Custom Tanzania Safari | Safari Care',
  description: 'Design your dream safari in Tanzania with Safari Care. Tell us your travel style, destinations, and dates for a bespoke 24-hour proposal.'
});
</script>

<template>
  <div class="plan-safari-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Plan Your Safari
          </li>
        </ol>
      </nav>

      <div class="row g-5 align-items-start">
        <!-- Left: Planning Guidance & Trust -->
        <div class="col-lg-5">
          <span class="badge-sc-terracotta d-inline-block mb-2">Tailor-Made Excellence</span>
          <h1 class="font-serif fw-bold text-sc-forest display-6 mb-3">
            Crafting Your Bespoke Tanzanian Journey
          </h1>
          <p class="text-muted mb-4">
            Every traveler is unique. Whether this is your honeymoon, a multi-generational family journey, an avid birdwatching trip, or your first African safari, our native Arusha specialists craft every detail around you.
          </p>

          <!-- Step Process -->
          <div class="steps-list d-flex flex-column gap-3 mb-4">
            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-forest text-white rounded-circle p-2 fs-6 fw-bold">1</div>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Share Your Vision</h4>
                <p class="small text-muted mb-0">Fill in your dates, preferred travel style, and must-see animals or destinations.</p>
              </div>
            </div>

            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-gold text-white rounded-circle p-2 fs-6 fw-bold">2</div>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Receive Custom Proposal</h4>
                <p class="small text-muted mb-0">Within 24 hours, our Arusha specialist provides an itemized itinerary and clear quotation.</p>
              </div>
            </div>

            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-forest text-white rounded-circle p-2 fs-6 fw-bold">3</div>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Fine-tune & Confirm</h4>
                <p class="small text-muted mb-0">Adjust camps, pacing, and activities until it is 100% perfect for you.</p>
              </div>
            </div>
          </div>

          <!-- Direct WhatsApp Assistance -->
          <div class="card p-4 bg-sc-forest-dark text-white rounded-4 shadow-sm border-0">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="fs-1 text-success">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div>
                <div class="fw-bold fs-5">Prefer Instant Messaging?</div>
                <div class="small text-white-50">Speak directly with a safari expert in Arusha</div>
              </div>
            </div>
            <a
              href="https://wa.me/255700000000"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sc-gold text-white w-100 py-2 d-flex align-items-center justify-content-center gap-2"
            >
              <i class="bi bi-chat-text-fill"></i>
              <span>Chat with Safari Specialist</span>
            </a>
          </div>
        </div>

        <!-- Right: Inquiry Form Card -->
        <div class="col-lg-7">
          <InquiryForm
            :initial-experience="styleParam"
            :initial-safari-name="safariParam"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plan-safari-view {
  background-color: var(--sc-ivory);
}
</style>
