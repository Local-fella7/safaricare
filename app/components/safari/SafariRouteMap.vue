<script setup lang="ts">
const props = defineProps<{
  destinations: string[];
  circuit: string;
  title: string;
}>();

// View mode: 'route' (styled vector route) or 'interactive' (satellite/terrain interactive)
const activeView = ref<'route' | 'satellite'>('route');

// Selected waypoint for details popover
const selectedPoint = ref<string | null>(null);

// Standardized coordinates database on 900x650 canvas
interface WaypointDef {
  id: string;
  name: string;
  shortName: string;
  x: number;
  y: number;
  region: string;
  type: 'park' | 'mountain' | 'gateway' | 'island';
  description: string;
  icon: string;
}

const allWaypoints: Record<string, WaypointDef> = {
  arusha: {
    id: 'arusha',
    name: 'Arusha Town & Gateway',
    shortName: 'Arusha',
    x: 590,
    y: 165,
    region: 'Northern Circuit',
    type: 'gateway',
    description: 'Safari Care headquarters and safari expedition staging base at the foot of Mount Meru.',
    icon: 'bi-compass'
  },
  kilimanjaro: {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro (5,895m)',
    shortName: 'Kilimanjaro',
    x: 650,
    y: 135,
    region: 'Northern Circuit',
    type: 'mountain',
    description: 'Roof of Africa and highest free-standing volcanic mountain in the world.',
    icon: 'bi-triangle-fill'
  },
  tarangire: {
    id: 'tarangire',
    name: 'Tarangire National Park',
    shortName: 'Tarangire',
    x: 530,
    y: 250,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Land of giants: ancient baobabs and the largest concentration of elephant herds in East Africa.',
    icon: 'bi-tree-fill'
  },
  manyara: {
    id: 'manyara',
    name: 'Lake Manyara National Park',
    shortName: 'Lake Manyara',
    x: 495,
    y: 195,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Great Rift Valley lake known for tree-climbing lions, pink flamingos, and groundwater forests.',
    icon: 'bi-water'
  },
  ngorongoro: {
    id: 'ngorongoro',
    name: 'Ngorongoro Conservation Area & Crater',
    shortName: 'Ngorongoro',
    x: 440,
    y: 160,
    region: 'Northern Circuit',
    type: 'park',
    description: 'UNESCO World Heritage 600m unbroken volcanic caldera sheltering 25,000 large mammals and black rhinos.',
    icon: 'bi-shield-shaded'
  },
  serengeti: {
    id: 'serengeti',
    name: 'Serengeti National Park',
    shortName: 'Central Serengeti',
    x: 350,
    y: 135,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Endless golden savannah plains, Great Migration predator territory, and kopjes.',
    icon: 'bi-binoculars-fill'
  },
  north_serengeti: {
    id: 'north_serengeti',
    name: 'North Serengeti (Mara River)',
    shortName: 'North Serengeti',
    x: 375,
    y: 65,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Dramatic Mara River crossing corridor where wildebeest brave giant Nile crocodiles.',
    icon: 'bi-water'
  },
  zanzibar: {
    id: 'zanzibar',
    name: 'Zanzibar Archipelago',
    shortName: 'Zanzibar',
    x: 775,
    y: 385,
    region: 'Zanzibar & Coast',
    type: 'island',
    description: 'Exotic Spice Island with UNESCO Stone Town, white sand beaches, and turquoise Indian Ocean reefs.',
    icon: 'bi-sun-fill'
  },
  dar: {
    id: 'dar',
    name: 'Dar es Salaam (Gateway)',
    shortName: 'Dar es Salaam',
    x: 745,
    y: 435,
    region: 'Coast & Southern',
    type: 'gateway',
    description: 'Coastal commercial capital and air departure hub for Southern Circuit safaris.',
    icon: 'bi-airplane-fill'
  },
  mikumi: {
    id: 'mikumi',
    name: 'Mikumi National Park',
    shortName: 'Mikumi',
    x: 585,
    y: 450,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Open Mkata floodplains often compared to Serengeti for easy predator and buffalo viewing.',
    icon: 'bi-tree-fill'
  },
  ruaha: {
    id: 'ruaha',
    name: 'Ruaha National Park',
    shortName: 'Ruaha',
    x: 440,
    y: 475,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Rugged, pristine wilderness with massive elephant populations and iconic greater kudu.',
    icon: 'bi-flower1'
  },
  selous: {
    id: 'selous',
    name: 'Nyerere National Park (Selous)',
    shortName: 'Nyerere (Selous)',
    x: 650,
    y: 520,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Africa’s largest wildlife refuge; famed for Rufiji River boat safaris and rare African wild dogs.',
    icon: 'bi-water'
  }
};

// Map package destinations into matched waypoint keys in order
const routeWaypoints = computed<WaypointDef[]>(() => {
  const result: WaypointDef[] = [];
  const destLower = props.destinations.map((d) => d.toLowerCase());
  const isSouthern = props.circuit.toLowerCase().includes('southern');

  // Start waypoint
  if (isSouthern) {
    result.push(allWaypoints.dar);
  } else {
    result.push(allWaypoints.arusha);
  }

  // Check Kilimanjaro
  if (destLower.some((d) => d.includes('kilimanjaro'))) {
    result.push(allWaypoints.kilimanjaro);
  }

  // Check Tarangire
  if (destLower.some((d) => d.includes('tarangire'))) {
    result.push(allWaypoints.tarangire);
  }

  // Check Manyara
  if (destLower.some((d) => d.includes('manyara'))) {
    result.push(allWaypoints.manyara);
  }

  // Check Serengeti (Central and/or North)
  if (destLower.some((d) => d.includes('north serengeti'))) {
    result.push(allWaypoints.serengeti);
    result.push(allWaypoints.north_serengeti);
  } else if (destLower.some((d) => d.includes('serengeti'))) {
    result.push(allWaypoints.serengeti);
  }

  // Check Ngorongoro
  if (destLower.some((d) => d.includes('ngorongoro'))) {
    result.push(allWaypoints.ngorongoro);
  }

  // Check Southern circuit parks
  if (destLower.some((d) => d.includes('mikumi'))) {
    result.push(allWaypoints.mikumi);
  }
  if (destLower.some((d) => d.includes('ruaha'))) {
    result.push(allWaypoints.ruaha);
  }
  if (destLower.some((d) => d.includes('selous') || d.includes('nyerere'))) {
    result.push(allWaypoints.selous);
  }

  // Check Zanzibar
  if (destLower.some((d) => d.includes('zanzibar'))) {
    result.push(allWaypoints.zanzibar);
  }

  // Return to Gateway base if round trip
  if (!destLower.some((d) => d.includes('zanzibar'))) {
    if (isSouthern) result.push(allWaypoints.dar);
    else result.push(allWaypoints.arusha);
  }

  return result;
});

// SVG Path String connecting waypoints
const routePathD = computed(() => {
  if (routeWaypoints.value.length < 2) return '';
  return routeWaypoints.value.reduce((acc, pt, index) => {
    if (index === 0) return `M ${pt.x} ${pt.y}`;
    // Curved Bezier route for natural geography
    const prev = routeWaypoints.value[index - 1];
    const midX = (prev.x + pt.x) / 2;
    const midY = (prev.y + pt.y) / 2 - 15;
    return `${acc} Q ${midX} ${midY} ${pt.x} ${pt.y}`;
  }, '');
});

// Interactive map embed URL based on circuit
const interactiveMapSrc = computed(() => {
  if (props.circuit.toLowerCase().includes('southern')) {
    // Southern Circuit (Mikumi / Ruaha / Selous)
    return 'https://www.openstreetmap.org/export/embed.html?bbox=34.5%2C-9.5%2C40.0%2C-5.5&layer=mapnik&marker=-7.5%2C37.0';
  }
  if (props.destinations.some((d) => d.toLowerCase().includes('zanzibar'))) {
    // Northern + Zanzibar
    return 'https://www.openstreetmap.org/export/embed.html?bbox=34.0%2C-6.5%2C39.5%2C-2.0&layer=mapnik&marker=-3.0%2C36.5';
  }
  // Standard Northern Circuit (Serengeti / Ngorongoro / Tarangire / Arusha)
  return 'https://www.openstreetmap.org/export/embed.html?bbox=34.2%2C-4.0%2C37.5%2C-1.8&layer=mapnik&marker=-2.8%2C35.8';
});
</script>

<template>
  <div class="safari-route-map-card bg-white rounded-4 shadow-sm border border-light overflow-hidden mb-5">
    <!-- Map Header Bar -->
    <div class="p-3 p-md-4 border-bottom d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
      <div>
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge-sc-gold small">Route Topology</span>
          <span class="text-muted small fw-semibold">Circuit: {{ circuit }}</span>
        </div>
        <h3 class="font-serif h5 fw-bold text-sc-forest mb-0">
          Interactive Itinerary Route Map
        </h3>
      </div>

      <!-- View Switcher -->
      <div class="btn-group btn-group-sm" role="group" aria-label="Map view mode">
        <button
          type="button"
          class="btn"
          :class="activeView === 'route' ? 'btn-sc-primary' : 'btn-outline-secondary'"
          @click="activeView = 'route'"
        >
          <i class="bi bi-map me-1"></i> Expedition Chart
        </button>
        <button
          type="button"
          class="btn"
          :class="activeView === 'satellite' ? 'btn-sc-primary' : 'btn-outline-secondary'"
          @click="activeView = 'satellite'"
        >
          <i class="bi bi-globe-americas me-1"></i> Live Terrain Map
        </button>
      </div>
    </div>

    <!-- Mode 1: Custom Vector Illustrated Expedition Map -->
    <div v-show="activeView === 'route'" class="vector-map-wrapper position-relative p-2 p-md-4">
      <svg
        viewBox="0 0 900 650"
        class="w-100 h-auto tanzania-svg-canvas"
        style="max-height: 520px;"
        role="img"
        aria-label="Tanzania Safari Itinerary Route Map"
      >
        <!-- Background Terrain Tint -->
        <rect width="900" height="650" fill="#F8FAE5" rx="16" />

        <!-- Stylized Tanzania Landmass Shape (Approximate geographical boundary) -->
        <path
          d="M 180,90 
             Q 280,60 380,50 
             Q 500,45 620,95 
             Q 710,130 760,200 
             Q 820,330 830,420 
             Q 770,540 680,600 
             Q 520,620 400,600 
             Q 280,580 200,500 
             Q 120,420 100,320 
             Q 90,200 150,120 Z"
          fill="#EEF2DB"
          stroke="#D8DEBF"
          stroke-width="2"
        />

        <!-- Water Bodies -->
        <!-- Lake Victoria (North) -->
        <path
          d="M 190,60 Q 240,40 310,65 Q 280,130 210,130 Q 170,100 190,60 Z"
          fill="#D6E9E6"
          stroke="#B4D5D0"
          stroke-width="1.5"
        />
        <text x="240" y="95" class="map-label-water">Lake Victoria</text>

        <!-- Lake Tanganyika (West) -->
        <path
          d="M 75,260 Q 95,360 120,490 Q 95,495 75,390 Q 60,300 75,260 Z"
          fill="#D6E9E6"
          stroke="#B4D5D0"
          stroke-width="1.5"
        />
        <text x="95" y="375" class="map-label-water" transform="rotate(-75 95 375)">Lake Tanganyika</text>

        <!-- Indian Ocean Coast (East) -->
        <path
          d="M 830,220 Q 860,360 850,560 L 900,560 L 900,220 Z"
          fill="#E2EFF0"
        />
        <text x="830" y="310" class="map-label-water" transform="rotate(75 830 310)">Indian Ocean</text>

        <!-- National Parks / Conservation Shaded Polygons -->
        <!-- Serengeti Green Zone -->
        <path
          d="M 280,70 Q 380,60 410,110 Q 380,180 300,165 Q 260,120 280,70 Z"
          fill="#43766C"
          fill-opacity="0.14"
          stroke="#43766C"
          stroke-width="1"
          stroke-dasharray="4,3"
        />
        <text x="325" y="115" class="park-label">SERENGETI</text>

        <!-- Ngorongoro Conservation Area -->
        <circle
          cx="440"
          cy="160"
          r="38"
          fill="#43766C"
          fill-opacity="0.16"
          stroke="#43766C"
          stroke-width="1"
          stroke-dasharray="3,3"
        />
        <text x="440" y="145" class="park-label" text-anchor="middle">NGORONGORO</text>

        <!-- Tarangire Zone -->
        <ellipse
          cx="530"
          cy="255"
          rx="32"
          ry="44"
          fill="#43766C"
          fill-opacity="0.14"
          stroke="#43766C"
          stroke-width="1"
          stroke-dasharray="3,3"
        />
        <text x="530" y="275" class="park-label" text-anchor="middle">TARANGIRE</text>

        <!-- Zanzibar Island Shape -->
        <path
          d="M 770,350 Q 785,360 782,410 Q 765,415 760,375 Z"
          fill="#B19470"
          fill-opacity="0.4"
          stroke="#B19470"
          stroke-width="1.5"
        />
        <text x="795" y="380" class="island-label">Zanzibar Island</text>

        <!-- Dynamic Animated Itinerary Route Curve -->
        <path
          v-if="routePathD"
          :d="routePathD"
          fill="none"
          stroke="#B19470"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="8,6"
          class="animated-route-path"
        />

        <!-- Secondary Glow Line -->
        <path
          v-if="routePathD"
          :d="routePathD"
          fill="none"
          stroke="#43766C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="0.4"
        />

        <!-- Render All Active Itinerary Waypoints -->
        <g
          v-for="(point, idx) in routeWaypoints"
          :key="`${point.id}-${idx}`"
          class="waypoint-group"
          style="cursor: pointer;"
          @click="selectedPoint = selectedPoint === point.id ? null : point.id"
        >
          <!-- Pulsing Ring for Active Points -->
          <circle
            :cx="point.x"
            :cy="point.y"
            r="16"
            class="pulse-ring"
            :class="selectedPoint === point.id ? 'ring-selected' : ''"
          />

          <!-- Pin Base Circle -->
          <circle
            :cx="point.x"
            :cy="point.y"
            r="11"
            :fill="point.type === 'gateway' ? '#76453B' : (point.type === 'mountain' ? '#B19470' : '#43766C')"
            stroke="#ffffff"
            stroke-width="2.5"
            class="pin-circle"
          />

          <!-- Order Index Number inside Pin -->
          <text
            :cx="point.x"
            :y="point.y + 4"
            text-anchor="middle"
            fill="#ffffff"
            font-size="10"
            font-weight="bold"
            font-family="sans-serif"
          >
            {{ idx + 1 }}
          </text>

          <!-- Waypoint Label Text -->
          <text
            :x="point.x"
            :y="point.y - 15"
            text-anchor="middle"
            class="waypoint-text"
            :class="{ 'fw-bold': selectedPoint === point.id }"
          >
            {{ point.shortName }}
          </text>
        </g>
      </svg>

      <!-- Selected Waypoint Info Floating Card -->
      <transition name="fade">
        <div
          v-if="selectedPoint && allWaypoints[selectedPoint]"
          class="waypoint-detail-popover position-absolute bg-white p-3 rounded-3 shadow-lg border"
          style="bottom: 24px; left: 24px; max-width: 320px; z-index: 5;"
        >
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge bg-sc-forest text-white small">
              {{ allWaypoints[selectedPoint].region }}
            </span>
            <button
              type="button"
              class="btn-close btn-close-sm"
              aria-label="Close details"
              @click="selectedPoint = null"
            ></button>
          </div>
          <h4 class="font-serif fw-bold h6 text-sc-forest mb-1">
            <i :class="`bi ${allWaypoints[selectedPoint].icon} text-sc-gold me-1`"></i>
            {{ allWaypoints[selectedPoint].name }}
          </h4>
          <p class="small text-muted mb-0">
            {{ allWaypoints[selectedPoint].description }}
          </p>
        </div>
      </transition>

      <!-- Map Legend Bar -->
      <div class="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 mt-3 pt-2 text-muted small border-top">
        <div class="d-flex align-items-center gap-2">
          <span class="legend-dot" style="background-color: #76453B;"></span>
          <span>Gateway Departure / Return</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="legend-dot" style="background-color: #43766C;"></span>
          <span>Wildlife National Park</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="legend-line"></span>
          <span>Private 4x4 Transit Route</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="legend-dot" style="background-color: #B19470;"></span>
          <span>Mountain / Island Extension</span>
        </div>
      </div>
    </div>

    <!-- Mode 2: Real Interactive Terrain/Satellite Frame (OpenStreetMap) -->
    <div v-show="activeView === 'satellite'" class="satellite-map-frame position-relative">
      <iframe
        width="100%"
        height="480"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :src="interactiveMapSrc"
        class="border-0 w-100"
        title="Live Interactive Topographic Map"
        loading="lazy"
      ></iframe>
      <div class="p-2 bg-light text-center small text-muted border-top d-flex justify-content-between px-3">
        <span>Use pinch/wheel to zoom across Tanzania's national parks.</span>
        <a
          href="https://www.openstreetmap.org"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none text-sc-forest fw-semibold"
        >
          View Fullscreen &rarr;
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vector-map-wrapper {
  background-color: var(--sc-ivory);
}

.tanzania-svg-canvas {
  filter: drop-shadow(0 4px 12px rgba(35, 39, 36, 0.04));
}

.map-label-water {
  font-size: 11px;
  fill: #7FA9A2;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.05em;
  font-family: serif;
}

.park-label {
  font-size: 9px;
  fill: #43766C;
  font-weight: 700;
  letter-spacing: 0.12em;
  opacity: 0.75;
}

.island-label {
  font-size: 10px;
  fill: #76453B;
  font-weight: 600;
}

.waypoint-text {
  font-size: 11px;
  fill: #232724;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9), 0 -1px 2px rgba(255, 255, 255, 0.9);
}

.pin-circle {
  transition: transform 0.2s ease;
}

.waypoint-group:hover .pin-circle {
  transform: scale(1.2);
  transform-origin: center;
}

.pulse-ring {
  fill: none;
  stroke: var(--sc-gold);
  stroke-width: 1.5;
  opacity: 0.6;
  animation: pulse 2.5s infinite;
}

.ring-selected {
  stroke: var(--sc-forest) !important;
  stroke-width: 3 !important;
  opacity: 1 !important;
}

@keyframes pulse {
  0% {
    r: 11;
    opacity: 0.8;
  }
  70% {
    r: 22;
    opacity: 0;
  }
  100% {
    r: 11;
    opacity: 0;
  }
}

.animated-route-path {
  animation: dashAnimation 30s linear infinite;
}

@keyframes dashAnimation {
  to {
    stroke-dashoffset: -1000;
  }
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-line {
  width: 24px;
  height: 3px;
  border-top: 3px dashed var(--sc-gold);
  display: inline-block;
}

.satellite-map-frame iframe {
  height: 480px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
