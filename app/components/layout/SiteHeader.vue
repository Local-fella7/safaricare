<script setup lang="ts">
import MobileNav from '~/components/layout/MobileNav.vue'
import { CONTACT } from '~/utils/contact'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeDropdown = ref<string | null>(null)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 30
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleDropdown = (name: string) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeDropdown = () => {
  activeDropdown.value = null
}
</script>

<template>
  <header class="site-header-wrapper fixed-top">
    <!-- Top Micro Announcement Bar -->
    <div class="top-announcement-bar py-1 d-none d-md-block">
      <div class="container d-flex justify-content-between align-items-center text-white small">
        <div class="d-flex align-items-center gap-3">
          <span>
            <i class="bi bi-geo-alt-fill text-sc-gold me-1"></i>
            Arusha, Tanzania
          </span>
          <span>
            <i class="bi bi-shield-check text-sc-gold me-1"></i>
            Licensed Tanzanian Safari Operator
          </span>
        </div>
        <div class="d-flex align-items-center gap-3">
          <a
            :href="CONTACT.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-1 hover-gold"
          >
            <i class="bi bi-whatsapp text-success"></i>
            <span>Chat on WhatsApp</span>
          </a>
          <span class="opacity-50">|</span>
          <a
            :href="`mailto:${CONTACT.email}`"
            class="text-white text-decoration-none d-inline-flex align-items-center gap-1 hover-gold"
          >
            <i class="bi bi-envelope text-sc-gold"></i>
            <span>{{ CONTACT.email }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav
      class="navbar navbar-expand-lg transition-all"
      :class="isScrolled ? 'navbar-scrolled shadow-sm py-2' : 'navbar-transparent py-3'"
    >
      <div class="container">
        <!-- Brand Logo -->
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center gap-2 text-decoration-none" @click="closeDropdown">
          <div class="brand-symbol bg-sc-forest text-white rounded-circle d-flex align-items-center justify-content-center">
            <i class="bi bi-compass"></i>
          </div>
          <div class="d-flex flex-column">
            <span class="brand-title font-serif fw-bold">SAFARI CARE</span>
            <span class="brand-subtitle text-uppercase">Tanzania Wilderness</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="collapse navbar-collapse justify-content-center d-none d-lg-flex">
          <ul class="navbar-nav gap-lg-4 fw-medium">
            <!-- About Us -->
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link" active-class="active" @click="closeDropdown">
                About Us
              </NuxtLink>
            </li>

            <!-- Safaris Dropdown -->
            <li
              class="nav-item position-relative"
              @mouseenter="activeDropdown = 'safaris'"
              @mouseleave="activeDropdown = null"
            >
              <NuxtLink
                to="/safaris"
                class="nav-link d-inline-flex align-items-center gap-1"
                active-class="active"
              >
                <span>Safaris</span>
                <i class="bi bi-chevron-down small" style="font-size: 0.75rem;"></i>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <transition name="fade-down">
                <div
                  v-if="activeDropdown === 'safaris'"
                  class="dropdown-menu-sc position-absolute bg-white shadow-lg rounded-3 p-3"
                  style="width: 280px; top: 100%; left: 0;"
                >
                  <NuxtLink to="/safaris" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">All Safari Packages &rarr;</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Browse all tailor-made itineraries</div>
                  </NuxtLink>
                  <hr class="my-2" />
                  <NuxtLink to="/safaris/6-day-northern-circuit-signature" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">6-Day Northern Circuit</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Tarangire, Serengeti, Ngorongoro</div>
                  </NuxtLink>
                  <NuxtLink to="/safaris/7-day-great-migration-safari" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">7-Day Great Migration</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Serengeti migration tracking</div>
                  </NuxtLink>
                  <NuxtLink to="/safaris/16-day-luxury-safari-and-zanzibar" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">16-Day Bush & Zanzibar Beach</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Ultimate wildlife and coast luxury</div>
                  </NuxtLink>
                  <NuxtLink to="/safaris/3-day-private-camping-adventure" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">3-Day Private Camping</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Authentic wilderness adventure</div>
                  </NuxtLink>
                </div>
              </transition>
            </li>

            <!-- Destinations Dropdown -->
            <li
              class="nav-item position-relative"
              @mouseenter="activeDropdown = 'destinations'"
              @mouseleave="activeDropdown = null"
            >
              <NuxtLink
                to="/destinations"
                class="nav-link d-inline-flex align-items-center gap-1"
                active-class="active"
              >
                <span>Destinations</span>
                <i class="bi bi-chevron-down small" style="font-size: 0.75rem;"></i>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <transition name="fade-down">
                <div
                  v-if="activeDropdown === 'destinations'"
                  class="dropdown-menu-sc position-absolute bg-white shadow-lg rounded-3 p-3"
                  style="width: 270px; top: 100%; left: 0;"
                >
                  <NuxtLink to="/destinations" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">All National Parks &rarr;</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Circuits overview & sanctuaries</div>
                  </NuxtLink>
                  <hr class="my-2" />
                  <NuxtLink to="/destinations/serengeti-national-park" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">Serengeti National Park</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Endless plains & migration</div>
                  </NuxtLink>
                  <NuxtLink to="/destinations/ngorongoro-crater" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">Ngorongoro Conservation Area</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Volcanic caldera & Big Five</div>
                  </NuxtLink>
                  <NuxtLink to="/destinations/tarangire-national-park" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">Tarangire National Park</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Land of giants & baobabs</div>
                  </NuxtLink>
                  <NuxtLink to="/destinations/zanzibar-archipelago" class="dropdown-item-sc d-block p-2 rounded text-decoration-none" @click="closeDropdown">
                    <div class="fw-bold text-sc-forest small">Zanzibar Archipelago</div>
                    <div class="text-muted" style="font-size: 0.75rem;">Turquoise reefs & Stone Town</div>
                  </NuxtLink>
                </div>
              </transition>
            </li>

            <li class="nav-item">
              <NuxtLink to="/trekking" class="nav-link" active-class="active" @click="closeDropdown">
                Trekking
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/accommodations" class="nav-link" active-class="active" @click="closeDropdown">
                Accommodation
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/travel-guide" class="nav-link" active-class="active" @click="closeDropdown">
                Travel Guide
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link" active-class="active" @click="closeDropdown">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Action CTA & Mobile Toggle -->
        <div class="d-flex align-items-center gap-2 gap-sm-3">
          <NuxtLink to="/plan-your-safari" class="btn btn-sc-gold btn-sm px-3 px-md-4 py-2 text-white">
            <i class="bi bi-calendar-check me-1 d-none d-sm-inline"></i>
            <span>Plan My Safari</span>
          </NuxtLink>

          <button
            class="btn btn-sc-outline-forest d-lg-none p-2 lh-1"
            type="button"
            aria-label="Toggle navigation menu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-navigation-drawer"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <i class="bi" :class="isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'" style="font-size: 1.4rem;"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Offcanvas Drawer (Native Vue Reactive) -->
    <MobileNav :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>

<style scoped lang="scss">
.site-header-wrapper {
  z-index: 1030;
}

.top-announcement-bar {
  background-color: var(--sc-forest-dark);
  font-size: 0.825rem;
  letter-spacing: 0.02em;
}

.navbar {
  transition: background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
}

.navbar-transparent {
  background-color: rgba(248, 250, 229, 0.95);
  backdrop-filter: blur(8px);
}

.navbar-scrolled {
  background-color: rgba(248, 250, 229, 0.98);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(67, 118, 108, 0.12);
}

.brand-symbol {
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  background-color: var(--sc-forest);
}

.brand-title {
  color: var(--sc-forest);
  font-size: 1.35rem;
  letter-spacing: 0.05em;
  line-height: 1.1;
}

.brand-subtitle {
  color: var(--sc-gold);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.nav-link {
  color: var(--sc-charcoal);
  font-size: 0.975rem;
  position: relative;
  transition: color 0.2s ease;
  padding: 0.5rem 0;

  &:hover, &.active {
    color: var(--sc-forest);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--sc-forest);
    border-radius: 2px;
  }
}

.dropdown-menu-sc {
  border: 1px solid rgba(67, 118, 108, 0.15);
  box-shadow: 0 12px 30px rgba(35, 39, 36, 0.12);
  z-index: 1035;
}

.dropdown-item-sc {
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--sc-ivory);
    transform: translateX(4px);
  }
}

.hover-gold:hover {
  color: var(--sc-gold) !important;
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
