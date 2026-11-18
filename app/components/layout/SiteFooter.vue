<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer bg-sc-forest-dark text-white pt-5 pb-4">
    <!-- Top Value Trust Highlights -->
    <div class="container pb-5 border-bottom border-secondary border-opacity-25">
      <div class="row g-4 text-center text-md-start">
        <div class="col-6 col-md-3">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <div class="footer-icon-box rounded-circle bg-white bg-opacity-10 text-sc-gold p-3 fs-3">
              <i class="bi bi-shield-check"></i>
            </div>
            <div>
              <div class="fw-bold">100% Tailor-Made</div>
              <div class="small text-white-50">Private custom itineraries</div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <div class="footer-icon-box rounded-circle bg-white bg-opacity-10 text-sc-gold p-3 fs-3">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div>
              <div class="fw-bold">Local Tanzanian Team</div>
              <div class="small text-white-50">Directly based in Arusha</div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <div class="footer-icon-box rounded-circle bg-white bg-opacity-10 text-sc-gold p-3 fs-3">
              <i class="bi bi-award"></i>
            </div>
            <div>
              <div class="fw-bold">Certified Guides</div>
              <div class="small text-white-50">Expert wildlife naturalists</div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="d-flex flex-column flex-md-row align-items-center gap-3">
            <div class="footer-icon-box rounded-circle bg-white bg-opacity-10 text-sc-gold p-3 fs-3">
              <i class="bi bi-heart-pulse"></i>
            </div>
            <div>
              <div class="fw-bold">AMREF Evacuation</div>
              <div class="small text-white-50">Included for peace of mind</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Columns -->
    <div class="container py-5">
      <div class="row g-5">
        <!-- Col 1: Brand & Story -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="brand-symbol bg-sc-gold text-white rounded-circle d-flex align-items-center justify-content-center">
              <i class="bi bi-compass"></i>
            </div>
            <div class="d-flex flex-column">
              <span class="brand-title font-serif fw-bold text-white fs-4">SAFARI CARE</span>
              <span class="brand-subtitle text-uppercase text-sc-gold small fw-semibold">Tanzania Wilderness</span>
            </div>
          </div>
          <p class="text-white-50 small mb-4">
            Locally owned and based in Arusha, Tanzania. We specialize in private, bespoke safari experiences, Great Migration wildlife tracking, Mount Kilimanjaro mountaineering expeditions, and idyllic Zanzibar beach holidays.
          </p>
          <div class="d-flex align-items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="TripAdvisor">
              <i class="bi bi-star-fill"></i>
            </a>
            <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Col 2: Safari Experiences & Circuits -->
        <div class="col-lg-2 col-md-6">
          <h5 class="font-serif fw-bold mb-3 text-sc-gold">Safaris</h5>
          <ul class="list-unstyled d-flex flex-column gap-2 small">
            <li>
              <NuxtLink to="/safaris/6-day-northern-circuit-signature" class="footer-link">6-Day Northern Circuit</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris/7-day-great-migration-safari" class="footer-link">7-Day Migration Safari</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris/3-day-private-camping-adventure" class="footer-link">3-Day Private Camping</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris/10-day-luxury-southern-circuit" class="footer-link">10-Day Southern Circuit</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris/16-day-luxury-safari-and-zanzibar" class="footer-link">Bush & Zanzibar Beach</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris" class="footer-link text-sc-gold fw-semibold">View All Itineraries &rarr;</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Destinations & Guides -->
        <div class="col-lg-3 col-md-6">
          <h5 class="font-serif fw-bold mb-3 text-sc-gold">Destinations & Advice</h5>
          <ul class="list-unstyled d-flex flex-column gap-2 small">
            <li>
              <NuxtLink to="/destinations/serengeti-national-park" class="footer-link">Serengeti National Park</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/destinations/ngorongoro-crater" class="footer-link">Ngorongoro Conservation Area</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/destinations/tarangire-national-park" class="footer-link">Tarangire National Park</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/destinations/zanzibar-archipelago" class="footer-link">Zanzibar Archipelago</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/trekking" class="footer-link">Kilimanjaro Trekking Routes</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel-guide" class="footer-link">Tanzania Packing & Travel Tips</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Contact & Office -->
        <div class="col-lg-3 col-md-6">
          <h5 class="font-serif fw-bold mb-3 text-sc-gold">Arusha Headquarters</h5>
          <ul class="list-unstyled d-flex flex-column gap-3 small text-white-50">
            <li class="d-flex align-items-start gap-2">
              <i class="bi bi-geo-alt-fill text-sc-gold mt-1"></i>
              <span>Safari Care Ltd, Arusha-Moshi Road, P.O. Box 14200, Arusha, Tanzania</span>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="bi bi-telephone-fill text-sc-gold"></i>
              <a href="tel:+255700000000" class="footer-link text-white-50">+255 700 000 000</a>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="bi bi-whatsapp text-success"></i>
              <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" class="footer-link text-white-50">
                +255 700 000 000 (WhatsApp)
              </a>
            </li>
            <li class="d-flex align-items-center gap-2">
              <i class="bi bi-envelope-fill text-sc-gold"></i>
              <a href="mailto:info@safaricare.com" class="footer-link text-white-50">info@safaricare.com</a>
            </li>
          </ul>

          <div class="mt-4">
            <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold w-100 py-2 text-white btn-sm">
              <i class="bi bi-calendar2-heart me-1"></i> Plan Your Custom Safari
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="container pt-4 border-top border-secondary border-opacity-25 text-white-50 small">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          &copy; {{ currentYear }} Safari Care Ltd. All rights reserved. Registered in the United Republic of Tanzania.
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="d-inline-flex gap-3">
            <NuxtLink to="/travel-guide" class="footer-link text-white-50">Traveler FAQs</NuxtLink>
            <span>•</span>
            <NuxtLink to="/contact" class="footer-link text-white-50">Contact Us</NuxtLink>
            <span>•</span>
            <span class="text-white-50">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  background-color: #1a322c;
}

.footer-icon-box {
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-symbol {
  width: 36px;
  height: 36px;
  font-size: 1.1rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: var(--sc-gold);
    color: #ffffff;
    transform: translateY(-2px);
  }
}

.footer-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--sc-gold) !important;
  }
}
</style>
