<script setup lang="ts">
import HeroBanner from '~/components/home/HeroBanner.vue';
import BrandStory from '~/components/home/BrandStory.vue';
import ExperienceGrid from '~/components/home/ExperienceGrid.vue';
import FeaturedSafaris from '~/components/home/FeaturedSafaris.vue';
import DestinationShowcase from '~/components/home/DestinationShowcase.vue';
import TrustSection from '~/components/home/TrustSection.vue';
import HomeCtaBanner from '~/components/home/HomeCtaBanner.vue';

useSeoMeta({
  title: 'Safari Care | Tailored Tanzania Safaris, Wildlife & Kilimanjaro Expeditions',
  description: 'Extraordinary journeys, timeless memories. Locally based Tanzanian safari specialists in Arusha offering private Serengeti migrations, Ngorongoro, Kilimanjaro treks, and Zanzibar.',
  ogTitle: 'Safari Care | Tailored Tanzania Safaris',
  ogDescription: 'Experience Tanzania with local safari experts. 100% tailor-made private safaris, certified guides, and custom 4x4 Land Cruisers.',
  ogImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
});
</script>

<template>
  <div class="homepage-view">
    <HeroBanner />
    <BrandStory />
    <ExperienceGrid />
    <FeaturedSafaris />
    <DestinationShowcase />
    <TrustSection />
    <HomeCtaBanner />
  </div>
</template>
