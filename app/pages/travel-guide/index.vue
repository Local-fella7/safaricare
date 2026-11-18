<script setup lang="ts">
useSeoMeta({
  title: 'Tanzania Safari Travel Guide & FAQ | Safari Care',
  description: 'Essential travel planning advice for Tanzania: best time to visit, Serengeti Great Migration calendar, visa requirements, packing list, and health tips.'
});

const faqs = [
  {
    q: 'When is the best time to visit Tanzania for a wildlife safari?',
    a: 'Tanzania is a premier year-round safari destination. The Dry Season (late June to October) is ideal for concentrated wildlife viewing and Mara River migration crossings. The Calving Season (January to March) in Southern Serengeti offers thousands of newborn wildebeest calves and intense predator encounters.'
  },
  {
    q: 'Do I need a tourist visa to enter Tanzania?',
    a: 'Most international travelers require a tourist visa. You can easily obtain an electronic visa (e-Visa) online via the official Tanzania Immigration portal prior to arrival, or receive one on arrival at Kilimanjaro International Airport (JRO), Dar es Salaam (DAR), or Zanzibar (ZNZ). Visas cost $50 for most nationalities and $100 for US citizens.'
  },
  {
    q: 'What vaccinations or medications are recommended?',
    a: 'Consult your travel doctor 4-6 weeks before departure. Malaria prophylaxis (such as Malarone or Doxycycline) is recommended. A Yellow Fever vaccination certificate is mandatory if you are traveling from or transiting through an endemic country.'
  },
  {
    q: 'What is the tipping etiquette for safari guides and camp staff?',
    a: 'Tipping in Tanzania is customary and deeply appreciated. Standard guidelines recommend $20-$30 per day per vehicle for your head safari driver-guide (shared by your traveling party), and $10-$15 per day into the communal lodge staff tip box.'
  },
  {
    q: 'What luggage should I bring on safari?',
    a: 'Soft-sided duffel bags are required (especially for domestic bush flights, which have strict 15kg/33lb limits). Hard-shell suitcases do not fit easily in 4x4 safari cruiser luggage compartments.'
  }
];

const migrationMonths = [
  { month: 'Jan – Mar', location: 'Southern Serengeti & Ndutu', desc: 'Calving season. 8,000 wildebeest calves born daily. Exceptional cheetah and lion predation.' },
  { month: 'Apr – May', location: 'Central & Western Serengeti', desc: 'The herds move northwest following rain. Lush green landscapes and quiet parks.' },
  { month: 'Jun – Jul', location: 'Grumeti River / Western Corridor', desc: 'Massive herds encounter giant Nile crocodiles as they cross the Grumeti River.' },
  { month: 'Aug – Oct', location: 'Northern Serengeti & Mara River', desc: 'Dramatic Mara River crossings into the Maasai Mara. Peak dry season safari action.' },
  { month: 'Nov – Dec', location: 'Eastern Serengeti returning South', desc: 'Short rains bring fresh grasses; herds journey back south towards Ndutu.' }
];
</script>

<template>
  <div class="travel-guide-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Travel Guide
          </li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Essential Traveler Advice</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">
          Tanzania Safari Travel Guide
        </h1>
        <p class="lead text-muted fs-6 mb-0">
          Everything you need to know before stepping foot on the savannah. Prepared directly by our Arusha-based safari operations team.
        </p>
      </div>

      <!-- Great Migration Calendar -->
      <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-5">
        <div class="d-flex align-items-center gap-2 mb-2">
          <i class="bi bi-calendar3 text-sc-gold fs-4"></i>
          <h2 class="font-serif h3 fw-bold text-sc-forest mb-0">
            The Great Serengeti Migration Calendar
          </h2>
        </div>
        <p class="small text-muted mb-4">
          The Great Migration is an unending, circular movement of 1.5 million wildebeest, 300,000 zebras, and gazelles dictated by rainfall.
        </p>

        <div class="row g-3">
          <div
            v-for="item in migrationMonths"
            :key="item.month"
            class="col-md-6 col-lg"
          >
            <div class="migration-card p-3 rounded-3 bg-sc-ivory h-100 border border-light">
              <span class="badge bg-sc-forest text-white mb-2">{{ item.month }}</span>
              <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">{{ item.location }}</h3>
              <p class="small text-muted mb-0" style="font-size: 0.8rem;">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Packing List Highlights -->
      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h3 class="font-serif h4 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-backpack2-fill text-sc-gold"></i>
              <span>Safari Clothing & Packing Tips</span>
            </h3>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Neutral Bush Tones:</strong> Khaki, olive, tan, and beige. Avoid dark blue and black (attracts tsetse flies).</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Layering is Key:</strong> Dawn game drives can be chilly (10°C / 50°F), while midday is warm and sunny (28°C / 82°F).</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Binoculars & Camera:</strong> Quality 8x42 or 10x42 binoculars and a telephoto lens (200-400mm+).</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Sun & Bug Protection:</strong> Wide-brimmed safari hat, polarized sunglasses, high SPF sunscreen, and DEET insect repellent.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h3 class="font-serif h4 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-cash-coin text-sc-gold"></i>
              <span>Currency, Payments & Connectivity</span>
            </h3>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>US Dollars Accepted:</strong> US Dollars printed after 2013 are widely accepted throughout Tanzania alongside Tanzanian Shillings (TZS).</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Credit Cards:</strong> Visa and Mastercard are accepted at major safari lodges (usually 3–5% bank processing fee applies).</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Local SIM / Wi-Fi:</strong> High-speed 4G SIMs (Airtel / Vodacom) can be arranged upon arrival in Arusha. Most safari lodges have complimentary Wi-Fi.</span>
              </li>
              <li class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1"></i>
                <span><strong>Vehicle Charging:</strong> All our private safari cruisers feature in-vehicle USB and standard universal wall plugs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQs Accordion -->
      <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div class="d-flex flex-column gap-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item p-3 rounded-3 bg-sc-ivory"
          >
            <h3 class="font-serif h6 fw-bold text-sc-forest mb-2 d-flex align-items-center gap-2">
              <i class="bi bi-question-circle-fill text-sc-gold"></i>
              <span>{{ faq.q }}</span>
            </h3>
            <p class="small text-muted mb-0 ps-4">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.travel-guide-view {
  background-color: var(--sc-ivory);
}
</style>
