<script setup lang="ts">
import InquiryForm from '~/components/forms/InquiryForm.vue';
import { CONTACT } from '~/utils/contact';
import { experienceOptions, type Experience } from '#shared/schemas/safariInquiry';
import type { SafariPackage, Trek } from '~/shared/types';

useSeoMeta({
  title: 'Plan Your Custom Tanzania Safari | Safari Care',
  description: 'Design your dream safari, trek or beach extension in Tanzania with Safari Care. Tell us your travel style, destinations and dates for a bespoke 24-hour proposal.'
});

const route = useRoute();

const { data: safaris } = await useFetch<SafariPackage[]>('/api/safaris');
const { data: treks } = await useFetch<Trek[]>('/api/treks');

const safariParam = computed(() => typeof route.query.safari === 'string' ? route.query.safari : '');
const trekParam = computed(() => typeof route.query.trek === 'string' ? route.query.trek : '');
const styleParam = computed(() => typeof route.query.style === 'string' ? route.query.style.toLowerCase() : '');
const messageParam = computed(() => typeof route.query.message === 'string' ? route.query.message : '');
const durationParam = computed(() => typeof route.query.duration === 'string' ? route.query.duration : '');

const styleMap: Record<string, Experience> = {
  luxury: 'luxury',
  'luxury lodge': 'luxury',
  'wildlife migration': 'luxury',
  honeymoon: 'honeymoon',
  family: 'family',
  photography: 'photography',
  photographic: 'photography',
  'safari-zanzibar': 'safari-zanzibar',
  zanzibar: 'safari-zanzibar',
  trekking: 'trekking',
  camping: 'camping',
  'private camping': 'camping',
  adventure: 'adventure'
};

const initialExperience = computed<Experience>(() => {
  if (trekParam.value) return 'trekking';
  const mapped = styleMap[styleParam.value];
  if (mapped && (experienceOptions as readonly string[]).includes(mapped)) return mapped;
  return 'luxury';
});

const initialSafariName = computed(() => {
  if (safariParam.value) {
    return safaris.value?.find((s) => s.slug === safariParam.value)?.title || safariParam.value;
  }
  if (trekParam.value) {
    return treks.value?.find((t) => t.slug === trekParam.value)?.title || trekParam.value;
  }
  return '';
});

const initialDuration = computed(() => {
  const days = Number(durationParam.value);
  if (!Number.isFinite(days) || days <= 0) return '';
  if (days <= 5) return '3-5 days';
  if (days <= 8) return '6-8 days';
  if (days <= 12) return '9-12 days';
  return '13+ days';
});
</script>

<template>
  <div class="plan-safari-view py-5">
    <div class="container py-lg-3">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Plan Your Safari</li>
        </ol>
      </nav>

      <div class="row g-5 align-items-start">
        <div class="col-lg-5">
          <span class="badge-sc-terracotta d-inline-block mb-2">Tailor-Made Excellence</span>
          <h1 class="font-serif fw-bold text-sc-forest display-6 mb-3">Crafting Your Bespoke Tanzanian Journey</h1>
          <p class="text-muted mb-4">
            Every traveler is unique. Whether this is your honeymoon, a multi-generational family journey, an avid birdwatching trip, or your first African safari, our native Arusha specialists craft every detail around you.
          </p>

          <div class="steps-list d-flex flex-column gap-3 mb-4">
            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-forest text-white rounded-circle p-2 fs-6 fw-bold">1</div>
              <div>
                <h2 class="font-serif h6 fw-bold text-sc-forest mb-1">Share Your Vision</h2>
                <p class="small text-muted mb-0">Fill in your dates, preferred travel style, and must-see animals or destinations.</p>
              </div>
            </div>
            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-gold text-white rounded-circle p-2 fs-6 fw-bold">2</div>
              <div>
                <h2 class="font-serif h6 fw-bold text-sc-forest mb-1">Receive Custom Proposal</h2>
                <p class="small text-muted mb-0">Within 24 hours, our Arusha specialist provides an itemized itinerary and clear quotation.</p>
              </div>
            </div>
            <div class="d-flex align-items-start gap-3 bg-white p-3 rounded-3 shadow-sm border border-light">
              <div class="badge bg-sc-forest text-white rounded-circle p-2 fs-6 fw-bold">3</div>
              <div>
                <h2 class="font-serif h6 fw-bold text-sc-forest mb-1">Fine-tune & Confirm</h2>
                <p class="small text-muted mb-0">Adjust camps, pacing, and activities until it is 100% perfect for you.</p>
              </div>
            </div>
          </div>

          <div class="card p-4 bg-sc-forest-dark text-white rounded-4 shadow-sm border-0">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="fs-1 text-success"><i class="bi bi-whatsapp"></i></div>
              <div>
                <div class="fw-bold fs-5">Prefer Instant Messaging?</div>
                <div class="small text-white-50">Speak directly with a safari expert in Arusha</div>
              </div>
            </div>
            <a
              :href="CONTACT.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sc-gold text-white w-100 py-2 d-flex align-items-center justify-content-center gap-2"
            >
              <i class="bi bi-chat-text-fill"></i>
              <span>Chat with Safari Specialist</span>
            </a>
          </div>
        </div>

        <div class="col-lg-7">
          <InquiryForm
            :initial-experience="initialExperience"
            :initial-safari-name="initialSafariName"
            :initial-message="messageParam"
            :initial-duration="initialDuration"
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
