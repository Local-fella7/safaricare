<script setup lang="ts">
import type { ItineraryDay } from '~/shared/types';

const props = defineProps<{
  days: ItineraryDay[];
}>();

const activeDay = ref<number | null>(1); // Default open first day

const toggleDay = (dayNum: number) => {
  activeDay.value = activeDay.value === dayNum ? null : dayNum;
};
</script>

<template>
  <div class="itinerary-timeline">
    <div
      v-for="item in days"
      :key="item.day"
      class="timeline-item position-relative ps-4 pb-4"
    >
      <!-- Timeline Node Marker -->
      <div
        class="timeline-marker position-absolute top-0 start-0 rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
        :class="activeDay === item.day ? 'bg-sc-forest ring-active' : 'bg-sc-gold'"
      >
        {{ item.day }}
      </div>

      <!-- Timeline Card -->
      <div class="card border-0 shadow-sm rounded-3 overflow-hidden bg-white">
        <button
          type="button"
          class="card-header bg-white border-0 p-3 p-md-4 d-flex align-items-center justify-content-between text-start w-100"
          @click="toggleDay(item.day)"
        >
          <div class="d-flex align-items-center gap-3">
            <span class="badge bg-sc-forest bg-opacity-10 text-sc-forest px-2 py-1 small fw-bold">
              Day {{ item.day }}
            </span>
            <h3 class="font-serif fw-bold h6 text-sc-forest mb-0">
              {{ item.title }}
            </h3>
          </div>
          <i
            class="bi fs-5 text-muted transition-transform"
            :class="activeDay === item.day ? 'bi-chevron-up text-sc-forest' : 'bi-chevron-down'"
          ></i>
        </button>

        <div v-show="activeDay === item.day" class="card-body px-3 px-md-4 pt-0 pb-4">
          <p class="text-muted mb-3 fs-6">
            {{ item.description }}
          </p>

          <div class="itinerary-meta-badges d-flex flex-wrap gap-2 pt-2 border-top">
            <div v-if="item.accommodation" class="small text-muted d-flex align-items-center gap-1">
              <i class="bi bi-houses-fill text-sc-gold"></i>
              <span><strong>Lodging:</strong> {{ item.accommodation }}</span>
            </div>
            <div v-if="item.meals" class="small text-muted d-flex align-items-center gap-1 ms-sm-3">
              <i class="bi bi-cup-hot-fill text-sc-gold"></i>
              <span><strong>Meals:</strong> {{ item.meals }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.itinerary-timeline {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 14px;
    bottom: 20px;
    left: 17px;
    width: 2px;
    background-color: rgba(67, 118, 108, 0.2);
  }
}

.timeline-item {
  position: relative;
}

.timeline-marker {
  width: 36px;
  height: 36px;
  left: 0;
  font-size: 0.9rem;
  z-index: 2;
  transition: all 0.2s ease;
}

.ring-active {
  box-shadow: 0 0 0 4px rgba(67, 118, 108, 0.25);
}

.transition-transform {
  transition: transform 0.2s ease;
}
</style>
