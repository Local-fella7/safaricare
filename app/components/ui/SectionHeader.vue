<script setup lang="ts">
defineProps<{
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}>();
</script>

<template>
  <div class="section-header mb-5" :class="{ 'text-center mx-auto': center }" style="max-width: 760px;">
    <div v-if="subtitle" class="badge-sc-terracotta d-inline-block mb-2">
      {{ subtitle }}
    </div>
    <h2 class="font-serif fw-bold text-sc-forest display-6 mb-3">
      {{ title }}
    </h2>
    <p v-if="description" class="lead text-muted fs-6 mb-0">
      {{ description }}
    </p>
  </div>
</template>
