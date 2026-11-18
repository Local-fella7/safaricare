<script setup lang="ts">
import 'leaflet/dist/leaflet.css';

const props = defineProps<{
  destinations: string[];
  circuit: string;
  title: string;
}>();

// View mode: 'satellite' (Live Terrain Map with real coordinates) or 'route' (Editorial Expedition Chart)
const activeView = ref<'satellite' | 'route'>('satellite');

// Selected waypoint for popover
const selectedPoint = ref<string | null>(null);

// Leaflet map refs
const mapContainer = ref<HTMLElement | null>(null);
let leafletMap: any = null;
let currentPolyline: any = null;
let currentMarkers: any[] = [];

// Waypoint definition with both SVG canvas coordinates (x, y) and real Geographic coordinates (lat, lng)
interface WaypointDef {
  id: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
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
    name: 'Arusha Town & Staging Base',
    shortName: 'Arusha',
    lat: -3.3869,
    lng: 36.6830,
    x: 590,
    y: 165,
    region: 'Northern Circuit',
    type: 'gateway',
    description: 'Safari Care headquarters and expedition staging base at the foot of Mount Meru.',
    icon: 'bi-compass'
  },
  kilimanjaro: {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro (5,895m)',
    shortName: 'Kilimanjaro',
    lat: -3.0674,
    lng: 37.3556,
    x: 650,
    y: 135,
    region: 'Northern Circuit',
    type: 'mountain',
    description: 'Roof of Africa and the highest free-standing volcanic mountain on Earth.',
    icon: 'bi-triangle-fill'
  },
  tarangire: {
    id: 'tarangire',
    name: 'Tarangire National Park',
    shortName: 'Tarangire',
    lat: -3.8333,
    lng: 36.0000,
    x: 530,
    y: 250,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Ancient baobab trees and the largest concentration of elephant herds in East Africa.',
    icon: 'bi-tree-fill'
  },
  manyara: {
    id: 'manyara',
    name: 'Lake Manyara National Park',
    shortName: 'Lake Manyara',
    lat: -3.5000,
    lng: 35.8000,
    x: 495,
    y: 195,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Great Rift Valley lake known for tree-climbing lions, pink flamingos, and groundwater forests.',
    icon: 'bi-water'
  },
  ngorongoro: {
    id: 'ngorongoro',
    name: 'Ngorongoro Crater Caldera',
    shortName: 'Ngorongoro',
    lat: -3.1667,
    lng: 35.5833,
    x: 440,
    y: 160,
    region: 'Northern Circuit',
    type: 'park',
    description: 'UNESCO World Heritage 600m unbroken caldera sheltering 25,000 large mammals and black rhinos.',
    icon: 'bi-shield-shaded'
  },
  serengeti: {
    id: 'serengeti',
    name: 'Serengeti National Park (Central / Seronera)',
    shortName: 'Central Serengeti',
    lat: -2.4333,
    lng: 34.8333,
    x: 350,
    y: 135,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Endless golden savannah plains, Great Migration resident predator territories, and granite kopjes.',
    icon: 'bi-binoculars-fill'
  },
  north_serengeti: {
    id: 'north_serengeti',
    name: 'North Serengeti (Mara River Crossing)',
    shortName: 'North Serengeti',
    lat: -1.5667,
    lng: 34.8833,
    x: 375,
    y: 65,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Dramatic Mara River crossing corridor where wildebeest brave giant Nile crocodiles.',
    icon: 'bi-water'
  },
  karatu: {
    id: 'karatu',
    name: 'Karatu Highlands & Coffee Country',
    shortName: 'Karatu',
    lat: -3.3333,
    lng: 35.6667,
    x: 470,
    y: 180,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Lush agricultural highlands between Lake Manyara and Ngorongoro crater rim.',
    icon: 'bi-cup-hot-fill'
  },
  zanzibar: {
    id: 'zanzibar',
    name: 'Zanzibar Island (Stone Town & Reefs)',
    shortName: 'Zanzibar',
    lat: -6.1659,
    lng: 39.2026,
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
    lat: -6.7924,
    lng: 39.2083,
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
    lat: -7.3833,
    lng: 37.0000,
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
    lat: -7.7000,
    lng: 34.9000,
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
    lat: -8.5000,
    lng: 37.3333,
    x: 650,
    y: 520,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Africa’s largest wildlife refuge; famed for Rufiji River boat safaris and rare African wild dogs.',
    icon: 'bi-water'
  }
};

// Map package destinations into matched waypoint objects in sequential order
const routeWaypoints = computed<WaypointDef[]>(() => {
  const result: WaypointDef[] = [];
  const destLower = props.destinations.map((d) => d.toLowerCase());
  const isSouthern = props.circuit.toLowerCase().includes('southern');

  // Staging gateway
  if (isSouthern) {
    result.push(allWaypoints.dar);
  } else {
    result.push(allWaypoints.arusha);
  }

  // Kilimanjaro
  if (destLower.some((d) => d.includes('kilimanjaro'))) {
    result.push(allWaypoints.kilimanjaro);
  }

  // Tarangire
  if (destLower.some((d) => d.includes('tarangire'))) {
    result.push(allWaypoints.tarangire);
  }

  // Lake Manyara
  if (destLower.some((d) => d.includes('manyara'))) {
    result.push(allWaypoints.manyara);
  }

  // Serengeti
  if (destLower.some((d) => d.includes('north serengeti') || d.includes('mara river'))) {
    result.push(allWaypoints.serengeti);
    result.push(allWaypoints.north_serengeti);
  } else if (destLower.some((d) => d.includes('serengeti'))) {
    result.push(allWaypoints.serengeti);
  }

  // Ngorongoro
  if (destLower.some((d) => d.includes('ngorongoro'))) {
    result.push(allWaypoints.ngorongoro);
  }

  // Southern parks
  if (destLower.some((d) => d.includes('mikumi'))) {
    result.push(allWaypoints.mikumi);
  }
  if (destLower.some((d) => d.includes('ruaha'))) {
    result.push(allWaypoints.ruaha);
  }
  if (destLower.some((d) => d.includes('selous') || d.includes('nyerere'))) {
    result.push(allWaypoints.selous);
  }

  // Zanzibar
  if (destLower.some((d) => d.includes('zanzibar'))) {
    result.push(allWaypoints.zanzibar);
  } else {
    // Return to start
    if (isSouthern) result.push(allWaypoints.dar);
    else result.push(allWaypoints.arusha);
  }

  return result;
});

// SVG Path String for vector mode
const routePathD = computed(() => {
  if (routeWaypoints.value.length < 2) return '';
  return routeWaypoints.value.reduce((acc, pt, index) => {
    if (index === 0) return `M ${pt.x} ${pt.y}`;
    const prev = routeWaypoints.value[index - 1];
    const midX = (prev.x + pt.x) / 2;
    const midY = (prev.y + pt.y) / 2 - 15;
    return `${acc} Q ${midX} ${midY} ${pt.x} ${pt.y}`;
  }, '');
});

// Initialize Leaflet Live Map with All Points and Polyline
const initLeafletMap = async () => {
  if (typeof window === 'undefined' || !mapContainer.value) return;

  const L = (await import('leaflet')).default;

  // Cleanup old instance if present
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }

  // Default center point
  const firstPt = routeWaypoints.value[0] || allWaypoints.arusha;
  leafletMap = L.map(mapContainer.value, {
    center: [firstPt.lat, firstPt.lng],
    zoom: 8,
    scrollWheelZoom: false
  });

  // OpenStreetMap Topo / Outdoors base tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(leafletMap);

  // Clear previous markers
  currentMarkers = [];

  // Plot each waypoint with custom numbered pin badge and popup
  const latLngs: [number, number][] = [];

  routeWaypoints.value.forEach((pt, index) => {
    latLngs.push([pt.lat, pt.lng]);

    const isStartOrEnd = index === 0 || index === routeWaypoints.value.length - 1;
    const badgeColor = isStartOrEnd ? '#76453B' : '#43766C';

    const customIcon = L.divIcon({
      className: 'leaflet-custom-safari-pin',
      html: `
        <div style="
          background-color: ${badgeColor};
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2.5px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 13px;
          font-family: sans-serif;
          cursor: pointer;
        ">
          ${index + 1}
        </div>
        <div style="
          background-color: rgba(26,50,44,0.85);
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
          text-align: center;
          margin-top: 2px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        ">
          ${pt.shortName}
        </div>
      `,
      iconSize: [32, 54],
      iconAnchor: [16, 20]
    });

    const marker = L.marker([pt.lat, pt.lng], { icon: customIcon }).addTo(leafletMap);

    // Popup content with rich info
    marker.bindPopup(`
      <div style="font-family: sans-serif; min-width: 200px;">
        <div style="color: #B19470; font-size: 11px; font-weight: 700; text-transform: uppercase;">
          Stop ${index + 1} • ${pt.region}
        </div>
        <div style="color: #43766C; font-size: 14px; font-weight: bold; margin-bottom: 4px;">
          ${pt.name}
        </div>
        <div style="color: #555555; font-size: 12px; line-height: 1.4;">
          ${pt.description}
        </div>
      </div>
    `);

    currentMarkers.push(marker);
  });

  // Draw connecting Route Polyline
  if (latLngs.length > 1) {
    currentPolyline = L.polyline(latLngs, {
      color: '#B19470',
      weight: 4,
      dashArray: '8, 8',
      opacity: 0.95
    }).addTo(leafletMap);

    // Fit map bounds to show all itinerary points comfortably
    leafletMap.fitBounds(currentPolyline.getBounds(), {
      padding: [45, 45]
    });
  }
};

const handleViewChange = (view: 'satellite' | 'route') => {
  activeView.value = view;
  if (view === 'satellite') {
    nextTick(() => {
      if (!leafletMap) {
        initLeafletMap();
      } else {
        leafletMap.invalidateSize();
        if (currentPolyline) {
          leafletMap.fitBounds(currentPolyline.getBounds(), { padding: [45, 45] });
        }
      }
    });
  }
};

onMounted(() => {
  nextTick(() => {
    initLeafletMap();
  });
});

watch(() => props.destinations, () => {
  nextTick(() => {
    initLeafletMap();
  });
}, { deep: true });
</script>

<template>
  <div class="safari-route-map-card bg-white rounded-4 shadow-sm border border-light overflow-hidden mb-5">
    <!-- Map Header Bar -->
    <div class="p-3 p-md-4 border-bottom d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
      <div>
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="badge-sc-gold small">Live Itinerary Map</span>
          <span class="text-muted small fw-semibold">{{ routeWaypoints.length }} Route Waypoints Plotted</span>
        </div>
        <h3 class="font-serif h5 fw-bold text-sc-forest mb-0">
          Geographic Itinerary & Route Map
        </h3>
      </div>

      <!-- View Switcher -->
      <div class="btn-group btn-group-sm" role="group" aria-label="Map view mode">
        <button
          type="button"
          class="btn"
          :class="activeView === 'satellite' ? 'btn-sc-primary' : 'btn-outline-secondary'"
          @click="handleViewChange('satellite')"
        >
          <i class="bi bi-globe-americas me-1"></i> Live Interactive Terrain Map
        </button>
        <button
          type="button"
          class="btn"
          :class="activeView === 'route' ? 'btn-sc-primary' : 'btn-outline-secondary'"
          @click="handleViewChange('route')"
        >
          <i class="bi bi-compass me-1"></i> Expedition Chart
        </button>
      </div>
    </div>

    <!-- Mode 1: Live Interactive Leaflet Terrain Map with Real Coordinates & All Points -->
    <div v-show="activeView === 'satellite'" class="position-relative">
      <div
        ref="mapContainer"
        class="leaflet-map-element w-100"
        style="height: 480px; z-index: 1;"
      ></div>

      <!-- Interactive Map Route Legend Footer -->
      <div class="p-3 bg-light border-top d-flex flex-wrap justify-content-between align-items-center gap-2 small text-muted">
        <div class="d-flex flex-wrap align-items-center gap-3">
          <div class="d-flex align-items-center gap-2">
            <span class="legend-badge" style="background-color: #76453B;">1</span>
            <span>Gateway Base</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="legend-badge" style="background-color: #43766C;">2</span>
            <span>National Park / Sanctuary</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="legend-line"></span>
            <span>Private 4x4 Route Path</span>
          </div>
        </div>
        <div class="text-sc-forest fw-semibold">
          <i class="bi bi-cursor-fill me-1"></i> Click any pin to view stop details
        </div>
      </div>
    </div>

    <!-- Mode 2: Vector Editorial Expedition Map -->
    <div v-show="activeView === 'route'" class="vector-map-wrapper position-relative p-2 p-md-4">
      <svg
        viewBox="0 0 900 650"
        class="w-100 h-auto tanzania-svg-canvas"
        style="max-height: 520px;"
        role="img"
        aria-label="Tanzania Safari Itinerary Route Map"
      >
        <rect width="900" height="650" fill="#F8FAE5" rx="16" />

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

        <path
          d="M 190,60 Q 240,40 310,65 Q 280,130 210,130 Q 170,100 190,60 Z"
          fill="#D6E9E6"
          stroke="#B4D5D0"
          stroke-width="1.5"
        />
        <text x="240" y="95" class="map-label-water">Lake Victoria</text>

        <path
          d="M 75,260 Q 95,360 120,490 Q 95,495 75,390 Q 60,300 75,260 Z"
          fill="#D6E9E6"
          stroke="#B4D5D0"
          stroke-width="1.5"
        />
        <text x="95" y="375" class="map-label-water" transform="rotate(-75 95 375)">Lake Tanganyika</text>

        <path
          d="M 830,220 Q 860,360 850,560 L 900,560 L 900,220 Z"
          fill="#E2EFF0"
        />
        <text x="830" y="310" class="map-label-water" transform="rotate(75 830 310)">Indian Ocean</text>

        <path
          d="M 280,70 Q 380,60 410,110 Q 380,180 300,165 Q 260,120 280,70 Z"
          fill="#43766C"
          fill-opacity="0.14"
          stroke="#43766C"
          stroke-width="1"
          stroke-dasharray="4,3"
        />
        <text x="325" y="115" class="park-label">SERENGETI</text>

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

        <path
          d="M 770,350 Q 785,360 782,410 Q 765,415 760,375 Z"
          fill="#B19470"
          fill-opacity="0.4"
          stroke="#B19470"
          stroke-width="1.5"
        />
        <text x="795" y="380" class="island-label">Zanzibar Island</text>

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

        <g
          v-for="(point, idx) in routeWaypoints"
          :key="`${point.id}-${idx}`"
          class="waypoint-group"
          style="cursor: pointer;"
          @click="selectedPoint = selectedPoint === point.id ? null : point.id"
        >
          <circle
            :cx="point.x"
            :cy="point.y"
            r="16"
            class="pulse-ring"
            :class="selectedPoint === point.id ? 'ring-selected' : ''"
          />

          <circle
            :cx="point.x"
            :cy="point.y"
            r="11"
            :fill="point.type === 'gateway' ? '#76453B' : (point.type === 'mountain' ? '#B19470' : '#43766C')"
            stroke="#ffffff"
            stroke-width="2.5"
            class="pin-circle"
          />

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

.legend-badge {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.legend-line {
  width: 24px;
  height: 3px;
  border-top: 3px dashed var(--sc-gold);
  display: inline-block;
}
</style>
