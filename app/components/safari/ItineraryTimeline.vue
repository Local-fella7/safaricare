<script setup lang="ts">
import type { ItineraryDay } from '~/shared/types';

const props = defineProps<{
  days: ItineraryDay[];
}>();

// Set of currently open days; default to day 1 open
const openDays = ref<Set<number>>(new Set([1]));

const isDayOpen = (dayNum: number): boolean => {
  return openDays.value.has(dayNum);
};

const toggleDay = (dayNum: number) => {
  const updated = new Set(openDays.value);
  if (updated.has(dayNum)) {
    updated.delete(dayNum);
  } else {
    updated.add(dayNum);
  }
  openDays.value = updated;
};

const expandAll = () => {
  openDays.value = new Set(props.days.map((d) => d.day));
};

const collapseAll = () => {
  openDays.value = new Set();
};

const allExpanded = computed(() => {
  return props.days.length > 0 && openDays.value.size === props.days.length;
});
</script>

<template>
  <div class="itinerary-timeline-wrapper">
    <!-- Controls Bar -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <span class="small text-muted">
        <strong>{{ days.length }}</strong> stages planned
      </span>
      <div class="d-flex gap-2">
        <button
          v-if="!allExpanded"
          type="button"
          class="btn btn-sm btn-outline-secondary py-1 px-2 small"
          @click="expandAll"
        >
          <i class="bi bi-arrows-expand me-1"></i> Expand All
        </button>
        <button
          v-else
          type="button"
          class="btn btn-sm btn-outline-secondary py-1 px-2 small"
          @click="collapseAll"
        >
          <i class="bi bi-arrows-collapse me-1"></i> Collapse All
        </button>
      </div>
    </div>

    <!-- Timeline Body -->
    <div class="itinerary-timeline">
      <div
        v-for="item in days"
        :key="item.day"
        class="timeline-item position-relative ps-4 pb-4"
      >
        <!-- Timeline Node Marker -->
        <div
          class="timeline-marker position-absolute top-0 start-0 rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
          :class="isDayOpen(item.day) ? 'bg-sc-forest ring-active' : 'bg-sc-gold'"
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
              <span class="day-badge px-2 py-1 rounded small fw-bold">
                Day {{ item.day }}
              </span>
              <h3 class="font-serif fw-bold h6 text-sc-forest mb-0">
                {{ item.title }}
              </h3>
            </div>
            <i
              class="bi fs-5 text-muted transition-transform"
              :class="isDayOpen(item.day) ? 'bi-chevron-up text-sc-forest' : 'bi-chevron-down'"
            ></i>
          </button>

          <transition name="accordion-slide">
            <div v-show="isDayOpen(item.day)" class="card-body px-3 px-md-4 pt-0 pb-4">
              <p class="text-muted mb-3 fs-6">
                {{ item.description }}
              </p>

              <div v-if="item.activities && item.activities.length" class="activities-tags d-flex flex-wrap gap-2 mb-3">
                <span
                  v-for="(act, aIdx) in item.activities"
                  :key="aIdx"
                  class="activity-tag d-inline-flex align-items-center gap-1 py-1 px-2 rounded-pill small"
                >
                  <i class="bi bi-tag-fill text-sc-gold" style="font-size: 0.75rem;"></i>
                  <span>{{ act }}</span>
                </span>
              </div>

              <div class="itinerary-meta-badges d-flex flex-wrap gap-3 pt-2 border-top">
                <div v-if="item.driveTime" class="small text-muted d-flex align-items-center gap-1">
                  <i class="bi bi-speedometer2 text-sc-forest"></i>
                  <span><strong>Drive / Transit:</strong> {{ item.driveTime }}</span>
                </div>
                <div v-if="item.accommodation" class="small text-muted d-flex align-items-center gap-1">
                  <i class="bi bi-houses-fill text-sc-gold"></i>
                  <span><strong>Lodging:</strong> {{ item.accommodation }}</span>
                </div>
                <div v-if="item.meals" class="small text-muted d-flex align-items-center gap-1">
                  <i class="bi bi-cup-hot-fill text-sc-gold"></i>
                  <span><strong>Meals:</strong> {{ item.meals }}</span>
                </div>
              </div>
            </div>
          </transition>
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

.accordion-slide-enter-active,
.accordion-slide-leave-active {
  transition: opacity 0.2s ease;
}

.accordion-slide-enter-from,
.accordion-slide-leave-to {
  opacity: 0;
}

.day-badge {
  background-color: var(--sc-forest-dark);
  color: #ffffff;
  font-size: 0.775rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.activity-tag {
  background-color: #EEF2DB;
  border: 1px solid rgba(67, 118, 108, 0.28);
  color: #1a322c;
  font-size: 0.8rem;
  font-weight: 600;

  span {
    color: #1a322c;
  }
}
</style>
