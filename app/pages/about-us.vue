<script setup lang="ts">
useSeoMeta({
  title: 'About Safari Care | Locally Owned Arusha Safari Specialists',
  description: 'Learn about Safari Care, our native Tanzanian heritage in Arusha, experienced safari guides, ethical tourism practices, and custom safari vehicles.'
});

const values = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Genuinely Native',
    text: 'Headquartered in Arusha, Tanzania. We are on the ground every single day, maintaining firsthand knowledge of wildlife movements and lodge standards.'
  },
  {
    icon: 'bi-tree-fill',
    title: 'Conservation First',
    text: 'A portion of every safari booked directly supports local community schools and anti-poaching wildlife corridor protection in northern Tanzania.'
  },
  {
    icon: 'bi-shield-shaded',
    title: 'Fair & Ethical Employment',
    text: 'Our safari guides and mountain porters receive industry-leading fair compensation, full insurance coverage, and continuous professional training.'
  },
  {
    icon: 'bi-gem',
    title: 'Uncompromising Quality',
    text: 'From customized 4WD cruisers to vetted luxury tented camps, we ensure seamless logistics and obsessive attention to detail.'
  }
];
</script>

<template>
  <div class="about-us-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>

      <!-- Page Intro -->
      <div class="row align-items-center g-5 mb-5">
        <div class="col-lg-6">
          <span class="badge-sc-terracotta d-inline-block mb-2">Our Story</span>
          <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
            Born in Arusha. Guided by Passion.
          </h1>
          <p class="lead text-muted fs-6 mb-3">
            Safari Care was founded with a singular, resolute mission: to showcase the untamed beauty of Tanzania with warmth, unrivaled local expertise, and an unwavering respect for African wilderness.
          </p>
          <p class="small text-muted mb-4">
            Unlike international travel conglomerates who subcontract their bookings to unknown third parties, when you book with Safari Care, you deal directly with the passionate Tanzanians who manage your vehicles, meet you at the airport, and guide you through the savannah.
          </p>
          <div class="d-flex gap-3">
            <NuxtLink to="/plan-your-safari" class="btn btn-sc-primary">
              Plan Your Safari With Us
            </NuxtLink>
            <NuxtLink to="/safaris" class="btn btn-sc-outline-forest">
              Browse Itineraries
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="rounded-4 overflow-hidden shadow-lg" style="height: 420px;">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="Safari Care Land Cruiser on the Serengeti Plains"
              class="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>

      <!-- Core Values Grid -->
      <div class="my-5">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          The Principles That Guide Every Safari
        </h2>
        <div class="row g-4">
          <div
            v-for="v in values"
            :key="v.title"
            class="col-md-6 col-lg-3"
          >
            <div class="card card-sc border-0 shadow-sm p-4 bg-white h-100 rounded-4">
              <div class="icon-circle bg-sc-forest bg-opacity-10 text-sc-forest rounded-circle d-flex align-items-center justify-content-center mb-3 fs-3" style="width: 54px; height: 54px;">
                <i :class="`bi ${v.icon}`"></i>
              </div>
              <h3 class="font-serif h5 fw-bold text-sc-forest mb-2">{{ v.title }}</h3>
              <p class="small text-muted mb-0">{{ v.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Safari Vehicles -->
      <div class="fleet-showcase bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light my-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 order-lg-2">
            <span class="badge-sc-gold d-inline-block mb-2">Private Fleet</span>
            <h2 class="font-serif h3 fw-bold text-sc-forest mb-3">
              Purpose-Built 4x4 Safari Land Cruisers
            </h2>
            <p class="text-muted small mb-3">
              Your vehicle is your mobile sanctuary in the bush. Our entire fleet consists of customized Toyota Land Cruisers designed specifically for Tanzanian terrain and photographic convenience.
            </p>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold"></i>
                <span>Pop-up roof hatches for unobstructed 360-degree photography</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold"></i>
                <span>Guaranteed window seat for every traveler (maximum 6 per vehicle)</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold"></i>
                <span>On-board electric refrigerator for chilled refreshments</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold"></i>
                <span>Device charging inverters (USB & 220V standard sockets)</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-sc-gold"></i>
                <span>Long-range VHF radio for wildlife tracking and park ranger coordination</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="rounded-4 overflow-hidden shadow-sm" style="height: 360px;">
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80"
                alt="Safari Land Cruiser in Tanzania"
                class="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us-view {
  background-color: var(--sc-ivory);
}
</style>
