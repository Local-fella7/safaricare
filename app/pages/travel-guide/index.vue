<script setup lang="ts">
useSeoMeta({
  title: 'Tanzania Safari Travel Guide & FAQ | Safari Care',
  description: 'Essential travel planning advice for Tanzania: best time to visit, Great Migration calendar, visa and health requirements, what to carry, flights and answers to our most common safari questions.',
  ogTitle: 'Tanzania Travel Guide & FAQs | Safari Care',
  ogDescription: 'Plan with confidence — local advice on seasons, packing, health, flights and safari logistics from our Arusha team.'
});

const faqs = [
  {
    q: 'When is the best time to visit Tanzania for a wildlife safari?',
    a: 'Tanzania is a premier year-round safari destination. The Dry Season (late June to October) is ideal for concentrated wildlife viewing and Mara River migration crossings. The Calving Season (January to March) in Southern Serengeti offers thousands of newborn wildebeest calves and intense predator encounters.'
  },
  {
    q: 'Do I need a tourist visa to enter Tanzania?',
    a: 'Most international travelers require a tourist visa. You can obtain an electronic visa (e-Visa) via the official Tanzania Immigration portal before arrival, or receive one on arrival at Kilimanjaro International Airport (JRO), Dar es Salaam (DAR), or Zanzibar (ZNZ). Three-month single-entry visas cost $50 for most nationalities and $100 for US citizens.'
  },
  {
    q: 'Can I take my children on safari?',
    a: 'Yes. Our itineraries are tailor-made to accommodate families, with pacing, activities and accommodation suited to children. Our Arusha staff are trained to care for young guests — tell us your family’s interests when you enquire and we will build them into the itinerary.'
  },
  {
    q: 'Will I stay in tents or lodges?',
    a: 'We offer a wide range of safari styles to suit your interests and budget, from luxury lodges and permanent tented camps to authentic private camping safaris. Browse our accommodation guide or ask our team to recommend a mix.'
  },
  {
    q: 'What is the average size of a safari group?',
    a: 'Our private safaris are just your party. Scheduled departures are deliberately small — typically 1 to 6 people, with an absolute maximum of 15 — so everyone enjoys a window seat. Daily seat-swapping is standard practice.'
  },
  {
    q: 'What clothes should I bring on safari?',
    a: 'Pack lightweight, washable clothes, a sweater for early morning game drives, a sunhat, sunglasses and sunscreen. Long sleeves and trousers in light-coloured fabrics discourage insect bites. Dress is casual and comfortable — layers are essential, and keep it simple with items you do not mind getting dusty. In Zanzibar and rural villages, modest clothing is respectful.'
  },
  {
    q: 'What food can I expect on safari?',
    a: 'Guests are often surprised by the quality and variety. Most lodges serve buffet meals; camps use stylish set menus. Food is generally prepared to Western tastes with curries and local dishes included. Our camping chefs prepare fresh produce to the highest sanitary standards — and returning guests often talk about the camping food.'
  },
  {
    q: 'Can special dietary requirements be accommodated?',
    a: 'Vegetarian, vegan, diabetic and other special meals can be arranged with advance notice. If you have multiple food allergies, bring supplemental snacks and let us know your requirements as early as possible.'
  },
  {
    q: 'Is tap water safe to drink?',
    a: 'We provide bottled water on safari and recommend drinking only bottled or treated water — including at our camps and on Kilimanjaro treks. Additional bottled water is available at lodges and camps.'
  },
  {
    q: 'What vaccinations or medications are recommended?',
    a: 'Consult your doctor or travel clinic 4–6 weeks before departure. Malaria prophylaxis is strongly recommended. Yellow fever vaccination is required if arriving from or transiting through an endemic country, and is still requested for Zanzibar by some authorities.'
  },
  {
    q: 'What if the safari vehicle breaks down?',
    a: 'Our guides carry full recovery equipment and we maintain a rapid response network. In the unlikely event of a breakdown, a rescue vehicle is dispatched within 2–4 hours depending on location. Your guide will compensate lost time where possible, and emergency AMREF Flying Doctors evacuation can be arranged if needed.'
  },
  {
    q: 'What is the tipping etiquette for safari guides and camp staff?',
    a: 'Tipping is customary and deeply appreciated. Standard guidelines suggest $20–$30 per day per vehicle for your head driver-guide (shared by your party) and $10–$15 per day into the communal lodge or camp staff tip box.'
  },
  {
    q: 'What luggage should I bring on safari?',
    a: 'Soft-sided duffel bags are required, especially for domestic bush flights with strict 15kg/33lb limits. Hard-shell suitcases do not fit easily in 4x4 cruiser luggage compartments.'
  }
];

const openFaq = ref<number | null>(0);
const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const migrationMonths = [
  { month: 'Jan – Mar', location: 'Southern Serengeti & Ndutu', desc: 'Calving season. 8,000 wildebeest calves born daily. Exceptional cheetah and lion predation.' },
  { month: 'Apr – May', location: 'Central & Western Serengeti', desc: 'The herds move northwest following rain. Lush green landscapes and quiet parks.' },
  { month: 'Jun – Jul', location: 'Grumeti River / Western Corridor', desc: 'Massive herds encounter giant Nile crocodiles as they cross the Grumeti River.' },
  { month: 'Aug – Oct', location: 'Northern Serengeti & Mara River', desc: 'Dramatic Mara River crossings into the Maasai Mara. Peak dry season safari action.' },
  { month: 'Nov – Dec', location: 'Eastern Serengeti returning South', desc: 'Short rains bring fresh grasses; herds journey back south towards Ndutu.' }
];

const packingLists = [
  {
    title: 'Travel Essentials',
    icon: 'bi bi-file-earmark-text',
    items: ['Valid passport and visa', 'Photocopy of your passport', 'Airline tickets and booking confirmations', 'International health card with immunisations', 'Travel and medical insurance', 'US dollars cash, travellers cheques or credit card', 'Small lock for zippers', 'Small diary and pen']
  },
  {
    title: 'Clothing',
    icon: 'bi bi-bag',
    items: ['4–5 short-sleeve t-shirts in neutral colours', '2–3 pairs of shorts and 2 casual trousers', '2 sweaters or fleece jackets for dawn drives', 'Long-sleeve shirts and lightweight rain jacket', 'Walking shoes, socks and underwear', 'Wide-brimmed hat, sunglasses and swimsuit', 'Warm sleeping outfit for camping safaris']
  },
  {
    title: 'Accessories & First Aid',
    icon: 'bi bi-briefcase',
    items: ['Sunscreen and lip protection (SPF 30+)', 'Insect repellent spray', 'Ziploc bags to protect cameras from dust', 'Money belt and towel', 'Toiletries in small travel containers', 'Aspirin, painkillers, plasters and throat lozenges', 'Camera, binoculars, spare batteries and tripod', 'Snacks, reading material and a pocket knife']
  }
];

const tanzaniaFacts = [
  { label: 'Geography', value: '937,062 km² — the largest country in East Africa, with an 800 km palm-fringed coast.' },
  { label: 'People & Language', value: 'Kiswahili and English are official. The word “safari” comes from the Swahili word for journey.' },
  { label: 'History', value: 'Olduvai Gorge in the Ngorongoro Conservation Area is the “cradle of mankind”, where Dr Louis Leakey found Homo habilis fossils.' },
  { label: 'Climate', value: 'Tropical, with long rains March–June and short rains November–January. High-altitude areas can fall below freezing at night.' },
  { label: 'Currency', value: 'Tanzanian shilling (TZS). Banks and bureaux de change are available at airports and in major towns.' }
];
</script>

<template>
  <div class="travel-guide-view py-5">
    <div class="container py-lg-3">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Travel Guide</li>
        </ol>
      </nav>

      <div class="text-center mx-auto mb-5" style="max-width: 820px;">
        <span class="badge-sc-terracotta d-inline-block mb-2">Essential Traveler Advice</span>
        <h1 class="font-serif fw-bold text-sc-forest display-5 mb-3">Tanzania Safari Travel Guide</h1>
        <p class="lead text-muted fs-6 mb-0">
          Everything you need to know before stepping onto the savannah — prepared directly by our Arusha-based operations team.
        </p>
      </div>

      <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-5">
        <div class="d-flex align-items-center gap-2 mb-2">
          <i class="bi bi-calendar3 text-sc-gold fs-4"></i>
          <h2 class="font-serif h3 fw-bold text-sc-forest mb-0">The Great Serengeti Migration Calendar</h2>
        </div>
        <p class="small text-muted mb-4">The Great Migration is an unending, circular movement of 1.5 million wildebeest, 300,000 zebras and gazelles dictated by rainfall.</p>
        <div class="row g-3">
          <div v-for="item in migrationMonths" :key="item.month" class="col-md-6 col-lg">
            <div class="migration-card p-3 rounded-3 bg-sc-ivory h-100 border border-light">
              <span class="badge bg-sc-forest text-white mb-2">{{ item.month }}</span>
              <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">{{ item.location }}</h3>
              <p class="small text-muted mb-0" style="font-size: 0.8rem;">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-5">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4">What to Carry on Safari</h2>
        <div class="row g-4">
          <div v-for="list in packingLists" :key="list.title" class="col-md-4">
            <h3 class="font-serif h6 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
              <i :class="list.icon" class="text-sc-gold"></i>{{ list.title }}
            </h3>
            <ul class="list-unstyled small text-muted mb-0 d-flex flex-column gap-2">
              <li v-for="item in list.items" :key="item" class="d-flex align-items-start gap-2">
                <i class="bi bi-check2 text-sc-forest mt-1 flex-shrink-0"></i><span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="alert alert-light border small text-muted mt-4 mb-0">
          <i class="bi bi-info-circle text-sc-gold me-2"></i>
          Domestic bush flights limit soft bags to 15kg/33lb. Modest dress is respectful in Zanzibar and rural villages; a khanga or wrap is inexpensive and useful.
        </div>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h2 class="font-serif h4 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-cash-coin text-sc-gold"></i><span>Currency, Payments & Connectivity</span>
            </h2>
            <ul class="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li class="d-flex align-items-start gap-2"><i class="bi bi-check2 text-sc-forest mt-1"></i><span><strong>US Dollars Accepted:</strong> US Dollars printed after 2013 are widely accepted alongside Tanzanian Shillings (TZS).</span></li>
              <li class="d-flex align-items-start gap-2"><i class="bi bi-check2 text-sc-forest mt-1"></i><span><strong>Credit Cards:</strong> Visa and Mastercard are accepted at major lodges (a 3–5% bank fee usually applies).</span></li>
              <li class="d-flex align-items-start gap-2"><i class="bi bi-check2 text-sc-forest mt-1"></i><span><strong>Local SIM / Wi-Fi:</strong> 4G SIMs from Airtel or Vodacom can be arranged on arrival in Arusha. Most lodges offer complimentary Wi-Fi.</span></li>
              <li class="d-flex align-items-start gap-2"><i class="bi bi-check2 text-sc-forest mt-1"></i><span><strong>Vehicle Charging:</strong> All our private cruisers feature USB ports and universal wall plugs.</span></li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h2 class="font-serif h4 fw-bold text-sc-forest mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-airplane text-sc-gold"></i><span>Flights & Arrival</span>
            </h2>
            <p class="small text-muted mb-3">
              We arrange domestic and international flight reservations and ticketing, including connections to Kilimanjaro International Airport (JRO), Dar es Salaam (DAR) and Zanzibar (ZNZ), plus bush flights to the Serengeti and southern parks.
            </p>
            <p class="small text-muted mb-4">
              Departure tax from mainland Tanzania is included in your ticket price. Zanzibar may charge a local departure tax payable at the airport.
            </p>
            <NuxtLink
              :to="{ path: '/plan-your-safari', query: { message: 'Please help me arrange domestic and international flights for my safari.' } }"
              class="btn btn-sc-outline-forest btn-sm"
            >
              Ask Us About Flights &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light mb-5">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4">About Tanzania</h2>
        <div class="row g-3">
          <div v-for="fact in tanzaniaFacts" :key="fact.label" class="col-md-6">
            <div class="bg-sc-ivory rounded-3 p-3 h-100">
              <h3 class="font-serif h6 fw-bold text-sc-forest mb-1">{{ fact.label }}</h3>
              <p class="small text-muted mb-0">{{ fact.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
        <h2 class="font-serif h3 fw-bold text-sc-forest mb-4 text-center">Frequently Asked Questions</h2>
        <div class="accordion" id="safariFaqAccordion">
          <div v-for="(faq, i) in faqs" :key="i" class="accordion-item border-0 border-bottom mb-0">
            <h3 class="accordion-header">
              <button
                class="accordion-button bg-white fw-semibold small text-sc-forest"
                :class="{ collapsed: openFaq !== i }"
                type="button"
                :aria-expanded="openFaq === i"
                :aria-controls="`faq-panel-${i}`"
                @click="toggleFaq(i)"
              >
                <i class="bi bi-question-circle-fill text-sc-gold me-2"></i>{{ faq.q }}
              </button>
            </h3>
            <div
              :id="`faq-panel-${i}`"
              class="accordion-collapse collapse"
              :class="{ show: openFaq === i }"
            >
              <div class="accordion-body small text-muted ps-4">{{ faq.a }}</div>
            </div>
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

.accordion-button {
  box-shadow: none;

  &:not(.collapsed) {
    box-shadow: none;
  }
}
</style>
