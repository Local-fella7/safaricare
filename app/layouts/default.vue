<script setup lang="ts">
import SiteHeader from '~/components/layout/SiteHeader.vue';
import SiteFooter from '~/components/layout/SiteFooter.vue';
</script>

<template>
  <div class="site-layout d-flex flex-column min-vh-100">
    <SiteHeader />
    <main class="site-main flex-grow-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped lang="scss">
.site-layout {
  background-color: var(--sc-ivory);
}

.site-main {
  padding-top: 92px; /* Offset for fixed top navbar */
}

@media (max-width: 767.98px) {
  .site-main {
    padding-top: 72px;
  }
}
</style>
