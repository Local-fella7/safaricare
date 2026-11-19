<script setup lang="ts">
const route = useRoute();
const siteUrl = 'https://www.safaricare.com';

const canonicalPath = computed(() => {
  const path = route.path.replace(/\/$/, '');
  return `${siteUrl}${path || '/'}`;
});

useHead(computed(() => ({
  link: [{ rel: 'canonical', href: canonicalPath.value }],
  meta: [{ property: 'og:url', content: canonicalPath.value }]
})));
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Global page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
