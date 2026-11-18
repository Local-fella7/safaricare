<script setup lang="ts">
import SectionHeader from '~/components/ui/SectionHeader.vue';

const experiences = [
  {
    title: 'Luxury Lodge Safaris',
    tag: 'Refined Comfort',
    description: 'Boutique tented sanctuaries, plunge pools overlooking watering holes, and fine dining under the stars.',
    icon: 'bi-gem',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
    link: '/safaris'
  },
  {
    title: 'Great Migration Safaris',
    tag: 'Wildlife Spectacle',
    description: 'Position directly along seasonal migration corridors for river crossings and predator action.',
    icon: 'bi-compass',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    link: '/safaris/7-day-great-migration-safari'
  },
  {
    title: 'Mount Kilimanjaro Climbs',
    tag: 'Roof of Africa',
    description: 'Summit Uhuru Peak (5,895m) with certified mountain guides, premium gear, and high summit success rates.',
    icon: 'bi-triangle',
    image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80',
    link: '/trekking'
  },
  {
    title: 'Bush to Beach & Zanzibar',
    tag: 'Safari + Island',
    description: 'Combine thrilling Serengeti game tracking with turquoise waters and white sand luxury in Zanzibar.',
    icon: 'bi-water',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    link: '/safaris/16-day-luxury-safari-and-zanzibar'
  },
  {
    title: 'Private Camping Adventures',
    tag: 'Authentic Wilderness',
    description: 'Fall asleep to the sound of roaring lions with private safari chefs and comfortable canvas dome tents.',
    icon: 'bi-fire',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    link: '/safaris/3-day-private-camping-adventure'
  },
  {
    title: 'Photographic Safaris',
    tag: 'Visual Masters',
    description: 'Custom vehicles with 360-degree shooting angles, beanbags, and guides trained in lighting and animal behavior.',
    icon: 'bi-camera',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80',
    link: '/safaris'
  }
];
</script>

<template>
  <section class="experience-section py-5 bg-white">
    <div class="container py-lg-4">
      <SectionHeader
        subtitle="Tailored Travel Styles"
        title="Extraordinary Ways to Experience Tanzania"
        description="Whether you crave five-star lodge elegance, private wilderness canvas camping, or conquering Africa’s highest peak, we tailor every moment around your vision."
        center
      />

      <div class="row g-4">
        <div
          v-for="exp in experiences"
          :key="exp.title"
          class="col-md-6 col-lg-4"
        >
          <div class="exp-card position-relative rounded-4 overflow-hidden shadow-sm h-100">
            <img
              :src="exp.image"
              :alt="exp.title"
              class="exp-card-img w-100 h-100 object-fit-cover"
              loading="lazy"
            />
            <div class="exp-overlay position-absolute bottom-0 start-0 w-100 p-4 d-flex flex-column justify-content-end text-white">
              <span class="badge-sc-gold align-self-start mb-2">{{ exp.tag }}</span>
              <h3 class="font-serif fw-bold h5 text-white mb-2">{{ exp.title }}</h3>
              <p class="small text-white-50 mb-3">{{ exp.description }}</p>
              <NuxtLink :to="exp.link" class="stretched-link text-white text-decoration-none fw-semibold small d-inline-flex align-items-center gap-1 hover-gold">
                <span>View Journeys</span>
                <i class="bi bi-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.exp-card {
  height: 320px;
  background-color: var(--sc-forest-dark);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.2);

    .exp-card-img {
      transform: scale(1.08);
    }
  }
}

.exp-card-img {
  transition: transform 0.5s ease;
}

.exp-overlay {
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(26, 50, 44, 0.95) 90%);
}
</style>
