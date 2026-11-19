<script setup lang="ts">
import 'leaflet/dist/leaflet.css';

const props = defineProps<{
  destinations: string[];
  circuit: string;
  title: string;
}>();

// Leaflet map refs
const mapContainer = ref<HTMLElement | null>(null);
let leafletMap: any = null;
let currentPolyline: any = null;
let currentMarkers: any[] = [];

// Waypoint definition with real Geographic coordinates (lat, lng)
interface WaypointDef {
  id: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
  region: string;
  type: 'park' | 'mountain' | 'gateway' | 'island';
  description: string;
}

const allWaypoints = {
  arusha: {
    id: 'arusha',
    name: 'Arusha Town & Staging Base',
    shortName: 'Arusha',
    lat: -3.3869,
    lng: 36.6830,
    region: 'Northern Circuit',
    type: 'gateway',
    description: 'Safari Care headquarters and expedition staging base at the foot of Mount Meru.'
  },
  kilimanjaro: {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro (5,895m)',
    shortName: 'Kilimanjaro',
    lat: -3.0674,
    lng: 37.3556,
    region: 'Northern Circuit',
    type: 'mountain',
    description: 'Roof of Africa and the highest free-standing volcanic mountain on Earth.'
  },
  tarangire: {
    id: 'tarangire',
    name: 'Tarangire National Park',
    shortName: 'Tarangire',
    lat: -3.8333,
    lng: 36.0000,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Ancient baobab trees and the largest concentration of elephant herds in East Africa.'
  },
  manyara: {
    id: 'manyara',
    name: 'Lake Manyara National Park',
    shortName: 'Lake Manyara',
    lat: -3.5000,
    lng: 35.8000,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Great Rift Valley lake known for tree-climbing lions, pink flamingos, and groundwater forests.'
  },
  ngorongoro: {
    id: 'ngorongoro',
    name: 'Ngorongoro Crater Caldera',
    shortName: 'Ngorongoro',
    lat: -3.1667,
    lng: 35.5833,
    region: 'Northern Circuit',
    type: 'park',
    description: 'UNESCO World Heritage 600m unbroken caldera sheltering 25,000 large mammals and black rhinos.'
  },
  serengeti: {
    id: 'serengeti',
    name: 'Serengeti National Park (Central / Seronera)',
    shortName: 'Central Serengeti',
    lat: -2.4333,
    lng: 34.8333,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Endless golden savannah plains, Great Migration resident predator territories, and granite kopjes.'
  },
  north_serengeti: {
    id: 'north_serengeti',
    name: 'North Serengeti (Mara River Crossing)',
    shortName: 'North Serengeti',
    lat: -1.5667,
    lng: 34.8833,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Dramatic Mara River crossing corridor where wildebeest brave giant Nile crocodiles.'
  },
  karatu: {
    id: 'karatu',
    name: 'Karatu Highlands & Coffee Country',
    shortName: 'Karatu',
    lat: -3.3333,
    lng: 35.6667,
    region: 'Northern Circuit',
    type: 'park',
    description: 'Lush agricultural highlands between Lake Manyara and Ngorongoro crater rim.'
  },
  zanzibar: {
    id: 'zanzibar',
    name: 'Zanzibar Island (Stone Town & Reefs)',
    shortName: 'Zanzibar',
    lat: -6.1659,
    lng: 39.2026,
    region: 'Zanzibar & Coast',
    type: 'island',
    description: 'Exotic Spice Island with UNESCO Stone Town, white sand beaches, and turquoise Indian Ocean reefs.'
  },
  dar: {
    id: 'dar',
    name: 'Dar es Salaam (Gateway)',
    shortName: 'Dar es Salaam',
    lat: -6.7924,
    lng: 39.2083,
    region: 'Coast & Southern',
    type: 'gateway',
    description: 'Coastal commercial capital and air departure hub for Southern Circuit safaris.'
  },
  mikumi: {
    id: 'mikumi',
    name: 'Mikumi National Park',
    shortName: 'Mikumi',
    lat: -7.3833,
    lng: 37.0000,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Open Mkata floodplains often compared to Serengeti for easy predator and buffalo viewing.'
  },
  ruaha: {
    id: 'ruaha',
    name: 'Ruaha National Park',
    shortName: 'Ruaha',
    lat: -7.7000,
    lng: 34.9000,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Rugged, pristine wilderness with massive elephant populations and iconic greater kudu.'
  },
  selous: {
    id: 'selous',
    name: 'Nyerere National Park (Selous)',
    shortName: 'Nyerere (Selous)',
    lat: -8.5000,
    lng: 37.3333,
    region: 'Southern Circuit',
    type: 'park',
    description: 'Africa’s largest wildlife refuge; famed for Rufiji River boat safaris and rare African wild dogs.'
  }
} satisfies Record<string, WaypointDef>;

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

  // OpenStreetMap base tile layer
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
          background-color: rgba(26,50,44,0.88);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 4px;
          white-space: nowrap;
          text-align: center;
          margin-top: 3px;
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
      <div style="font-family: sans-serif; min-width: 210px;">
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
      <div class="text-muted small">
        <i class="bi bi-geo-alt-fill text-sc-gold me-1"></i> {{ circuit }}
      </div>
    </div>

    <!-- Live Interactive Leaflet Terrain Map with Real Coordinates & All Points -->
    <div class="position-relative">
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
  </div>
</template>

<style scoped lang="scss">
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

:deep(.leaflet-custom-safari-pin) {
  background: transparent;
  border: none;
}
</style>
