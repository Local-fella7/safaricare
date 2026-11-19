<script setup lang="ts">
import { CONTACT } from '~/utils/contact'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleClose = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) emit('close')
}

watch(() => props.isOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', handleKeydown)
  else window.removeEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="mobile-nav-root">
    <!-- Backdrop -->
    <div
      v-if="isOpen"
      class="mobile-backdrop position-fixed top-0 start-0 w-100 h-100"
      @click="handleClose"
    ></div>

    <!-- Drawer Panel -->
    <transition name="slide-drawer">
      <div
        v-if="isOpen"
        id="mobile-navigation-drawer"
        class="mobile-drawer position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column z-index-modal p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div class="d-flex justify-content-between align-items-center pb-3 border-bottom">
          <NuxtLink to="/" class="text-decoration-none" @click="handleClose">
            <div class="brand-title font-serif fw-bold text-sc-forest fs-4">SAFARI CARE</div>
            <div class="brand-subtitle text-uppercase text-muted small">Tanzania Specialists</div>
          </NuxtLink>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="handleClose"
          ></button>
        </div>

        <nav class="mobile-nav-list my-4 flex-grow-1 overflow-auto">
          <ul class="list-unstyled d-flex flex-column gap-3 fs-5">
            <li>
              <NuxtLink to="/" class="mobile-link" @click="handleClose">
                <i class="bi bi-house me-2 text-sc-gold"></i> Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us" class="mobile-link" @click="handleClose">
                <i class="bi bi-people me-2 text-sc-gold"></i> About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/safaris" class="mobile-link" @click="handleClose">
                <i class="bi bi-binoculars me-2 text-sc-gold"></i> Safari Packages
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/destinations" class="mobile-link" @click="handleClose">
                <i class="bi bi-map me-2 text-sc-gold"></i> Destinations
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/trekking" class="mobile-link" @click="handleClose">
                <i class="bi bi-triangle me-2 text-sc-gold"></i> Kilimanjaro Trekking
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/accommodations" class="mobile-link" @click="handleClose">
                <i class="bi bi-house-door me-2 text-sc-gold"></i> Accommodation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel-guide" class="mobile-link" @click="handleClose">
                <i class="bi bi-journal-bookmark me-2 text-sc-gold"></i> Travel Guide & FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="mobile-link" @click="handleClose">
                <i class="bi bi-chat-dots me-2 text-sc-gold"></i> Contact & Inquiries
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="mobile-drawer-footer pt-3 border-top d-flex flex-column gap-2">
          <NuxtLink
            to="/plan-your-safari"
            class="btn btn-sc-primary w-100 py-2 text-white"
            @click="handleClose"
          >
            <i class="bi bi-calendar-check me-2"></i> Custom Safari Planner
          </NuxtLink>
          <a
            :href="CONTACT.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-success w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          >
            <i class="bi bi-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.mobile-backdrop {
  background: rgba(35, 39, 36, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1040;
}

.mobile-drawer {
  width: 85%;
  max-width: 380px;
  z-index: 1050;
}

.mobile-link {
  color: var(--sc-charcoal);
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover, &.router-link-active {
    color: var(--sc-forest);
  }
}

.slide-drawer-enter-active,
.slide-drawer-leave-active {
  transition: transform 0.3s ease;
}

.slide-drawer-enter-from,
.slide-drawer-leave-to {
  transform: translateX(100%);
}
</style>
