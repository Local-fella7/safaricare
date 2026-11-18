<script setup lang="ts">
useSeoMeta({
  title: 'Mount Kilimanjaro & Meru Trekking Guides | Safari Care',
  description: 'Climb Mount Kilimanjaro (5,895m) with certified mountain guides, premium safety equipment, and ethical porter treatment. Machame, Lemosho, and Marangu routes.'
});

const routes = [
  {
    name: 'Machame Route',
    nickname: 'The "Whiskey" Route',
    days: '6–7 Days',
    successRate: '92%',
    scenery: 'Spectacular',
    difficulty: 'Moderate to High',
    description: 'The most popular scenic route. Excellent acclimatization profile via the "climb high, sleep low" pattern around Lava Tower and Barranco Wall.'
  },
  {
    name: 'Lemosho Route',
    nickname: 'The Pristine Wilderness Ascent',
    days: '7–8 Days',
    successRate: '95%',
    scenery: 'Unsurpassed',
    difficulty: 'Moderate',
    description: 'Starts west of the mountain through untouched rainforest before crossing the expansive Shira Plateau. Exceptional acclimatization and high summit success.'
  },
  {
    name: 'Marangu Route',
    nickname: 'The "Coca-Cola" Route',
    days: '5–6 Days',
    successRate: '80%',
    scenery: 'Classic',
    difficulty: 'Moderate',
    description: 'The only Kilimanjaro route offering shared wooden sleeping huts rather than camping in tents. Approach and descent follow the same eastern path.'
  },
  {
    name: 'Rongai Route',
    nickname: 'The Northern Wilderness Trail',
    days: '6–7 Days',
    successRate: '88%',
    scenery: 'Remote & Quiet',
    difficulty: 'Moderate',
    description: 'Approaches Kilimanjaro from the north near the Kenyan border. Drier than southern routes, making it an excellent option during shoulder seasons.'
  }
];
</script>

<template>
  <div class="trekking-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Kilimanjaro Trekking
          </li>
        </ol>
      </nav>

      <!-- Page Header -->
      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Roof of Africa</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Mount Kilimanjaro Expeditions
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          At 5,895 meters (19,341 feet), Mount Kilimanjaro is the highest free-standing mountain on Earth. Our treks are guided by certified high-altitude specialists committed to safety, acclimatization, and fair porter welfare.
        </p>
      </div>

      <!-- Featured Trek + Safari Package Banner -->
      <div class="card bg-sc-forest-dark text-white rounded-4 shadow-lg p-4 p-md-5 mb-5 border-0 position-relative overflow-hidden">
        <div class="row align-items-center g-4">
          <div class="col-lg-8">
            <span class="badge bg-sc-gold text-white px-3 py-2 fw-semibold mb-2">Featured Combination</span>
            <h2 class="font-serif h3 fw-bold text-white mb-2">
              13-Day Kilimanjaro Climb & Big Five Wildlife Safari
            </h2>
            <p class="text-white-50 small mb-0">
              Summit Uhuru Peak via the Machame Route, then recover in luxury lodges while exploring Tarangire, Serengeti, and Ngorongoro Crater.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink to="/safaris/13-day-safari-and-kilimanjaro-climb" class="btn btn-sc-gold btn-lg text-white">
              <span>View 13-Day Expedition</span>
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Routes Comparison -->
      <div class="mb-5">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          Compare Kilimanjaro Trekking Routes
        </h2>
        <div class="row g-4">
          <div
            v-for="route in routes"
            :key="route.name"
            class="col-md-6"
          >
            <div class="card card-sc h-100 p-4 border-0 shadow-sm bg-white rounded-4">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h3 class="font-serif h5 fw-bold text-sc-forest mb-0">{{ route.name }}</h3>
                  <span class="small text-muted">{{ route.nickname }}</span>
                </div>
                <span class="badge bg-sc-forest text-white px-2 py-1 small">{{ route.days }}</span>
              </div>

              <div class="d-flex gap-3 my-3 small py-2 border-top border-bottom">
                <div><strong>Success Rate:</strong> <span class="text-success fw-bold">{{ route.successRate }}</span></div>
                <div><strong>Scenery:</strong> {{ route.scenery }}</div>
                <div><strong>Difficulty:</strong> {{ route.difficulty }}</div>
              </div>

              <p class="small text-muted mb-4 flex-grow-1">
                {{ route.description }}
              </p>

              <NuxtLink
                :to="{ path: '/plan-your-safari', query: { style: 'trekking', message: `Interested in climbing Kilimanjaro via ${route.name}` } }"
                class="btn btn-sc-outline-forest btn-sm w-100"
              >
                Inquire for {{ route.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Safety & Porter Welfare Standards -->
      <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          Our Mountain Safety & Ethical Commitments
        </h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-heart-pulse-fill text-danger fs-3"></i>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Twice-Daily Health Checks</h4>
                <p class="small text-muted mb-0">Our certified wilderness first responders monitor pulse oximeter saturation and Lake Louise score every morning and evening.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-people-fill text-sc-gold fs-3"></i>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Ethical Porter Welfare</h4>
                <p class="small text-muted mb-0">We ensure fair living wages, proper mountain gear, warm sleeping shelters, and strict 20kg load restrictions for every porter.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="d-flex align-items-start gap-3">
              <i class="bi bi-shield-fill-check text-sc-forest fs-3"></i>
              <div>
                <h4 class="font-serif h6 fw-bold text-sc-forest mb-1">Emergency Oxygen & Evacuation</h4>
                <p class="small text-muted mb-0">Medical oxygen cylinders, specialized high-altitude first aid kits, and AMREF Flying Doctors evacuation coverage on all climbs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trekking-view {
  background-color: var(--sc-ivory);
}
</style>
