import type { Destination } from '#shared/types';

export const destinationsData: Destination[] = [
  {
    slug: 'serengeti-national-park',
    name: 'Serengeti National Park',
    region: 'Northern Tanzania',
    tagline: 'Endless Plains & the Greatest Wildlife Spectacle on Earth',
    summary: 'Spanning nearly 15,000 square kilometers, the Serengeti is the crown jewel of African wildlife reserves, hosting the annual Great Migration of over 1.5 million wildebeest and zebras.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Over 1.5 million wildebeest and zebras on their continuous migration cycle',
      'Highest concentration of large predators in Africa (lions, leopards, cheetahs)',
      'Sunrise hot air balloon safaris over the golden savannah',
      'Remote wilderness in Northern Serengeti along the Mara River'
    ],
    wildlife: ['Lion', 'Leopard', 'Cheetah', 'Wildebeest', 'Zebra', 'Elephant', 'Spotted Hyena', 'Giraffe'],
    bestTimeToVisit: 'Year-round; June-October for Mara river crossings, January-March for Southern calving season',
    featured: true,
    seoTitle: 'Serengeti National Park Safaris | Safari Care',
    seoDescription: 'Explore the legendary Serengeti National Park with Safari Care. Private wildlife safaris, Great Migration tracking, and luxury tented camps.'
  },
  {
    slug: 'ngorongoro-crater',
    name: 'Ngorongoro Conservation Area',
    region: 'Northern Tanzania',
    tagline: 'The World’s Largest Intact Volcanic Caldera & Wildlife Eden',
    summary: 'A breathtaking UNESCO World Heritage site featuring a 600-meter deep unbroken caldera teeming with over 25,000 large mammals, including the rare black rhino and giant bull tuskers.',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'One of the best locations in East Africa to encounter endangered black rhinos',
      'Densely populated crater floor with exceptional lion pride densities',
      'Alkaline Lake Magadi hosting thousands of pink lesser flamingos',
      'Coexistence of wildlife and traditional Maasai pastoralists'
    ],
    wildlife: ['Black Rhino', 'Lion', 'Elephant', 'Hippo', 'Buffalo', 'Flamingo', 'Zebra'],
    bestTimeToVisit: 'Outstanding wildlife viewing year-round due to resident animal populations',
    featured: true,
    seoTitle: 'Ngorongoro Crater Safaris | Safari Care',
    seoDescription: 'Descend 600 meters into the magnificent Ngorongoro Crater floor. Home to the Big Five and extraordinary natural scenery.'
  },
  {
    slug: 'tarangire-national-park',
    name: 'Tarangire National Park',
    region: 'Northern Tanzania',
    tagline: 'Land of Baobabs & Giant Elephant Herds',
    summary: 'Famous for its picturesque landscape studded with ancient baobab trees and the permanent Tarangire River, which attracts massive elephant gatherings during the dry season.',
    heroImage: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Herds of up to 300 elephants congregating along the riverbed',
      'Iconic baobab trees hundreds of years old framing the landscape',
      'More than 550 bird species, making it a birdwatcher paradise',
      'Exceptional dry season game concentrations from July to October'
    ],
    wildlife: ['Elephant', 'Lion', 'Leopard', 'Giraffe', 'Oryx', 'Gerenuk', 'Baobab Birdlife'],
    bestTimeToVisit: 'July to October (dry season) for peak wildlife concentrations',
    featured: true,
    seoTitle: 'Tarangire National Park Safaris | Safari Care',
    seoDescription: 'Discover Tarangire National Park with Safari Care. Unrivaled elephant herds, ancient baobabs, and stunning Rift Valley wilderness.'
  },
  {
    slug: 'zanzibar-archipelago',
    name: 'Zanzibar Archipelago',
    region: 'Spice Islands',
    tagline: 'Turquoise Waters, White Sands & Ancient Swahili History',
    summary: 'The idyllic spice island in the Indian Ocean, blending coral sand beaches and clear warm waters with the evocative labyrinthine alleys of UNESCO-listed Stone Town.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'World-class diving and snorkeling around Mnemba Atoll',
      'Wandering the historic alleys and carved brass doors of Stone Town',
      'Aromatic clove, nutmeg, and vanilla plantation spice tours',
      'Traditional wooden dhow sunset cruises along the turquoise coast'
    ],
    wildlife: ['Dolphins', 'Sea Turtles', 'Red Colobus Monkeys', 'Tropical Coral Reef Fish'],
    bestTimeToVisit: 'June to October and December to February for sunny, calm seas',
    featured: true,
    seoTitle: 'Zanzibar Island Safaris & Beach Holidays | Safari Care',
    seoDescription: 'Unwind on the pristine beaches of Zanzibar after your Tanzanian safari. Tailored beach resorts, Stone Town cultural tours, and sunset dhow cruises.'
  },
  {
    slug: 'mount-kilimanjaro',
    name: 'Mount Kilimanjaro',
    region: 'Northeastern Tanzania',
    tagline: 'The Roof of Africa & Highest Free-Standing Mountain in the World',
    summary: 'Rising 5,895 meters above the East African plains, Mount Kilimanjaro offers an unforgettable mountaineering journey through five distinct climatic ecological zones to Uhuru Peak.',
    heroImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Stand at Uhuru Peak (5,895m), the highest point on the African continent',
      'Pass through rainforest, moorland, alpine desert, and Arctic glacial summit',
      'Experienced licensed guides, safety equipment, and fair porter treatment',
      'Multiple route options: Machame, Lemosho, Marangu, and Rongai'
    ],
    wildlife: ['Colobus Monkeys', 'Blue Monkeys', 'Abbott’s Duiker', 'Alpine Avian Species'],
    bestTimeToVisit: 'January to March and June to October for clear skies and dry trails',
    featured: true,
    seoTitle: 'Mount Kilimanjaro Climbs & Trekking | Safari Care',
    seoDescription: 'Climb Mount Kilimanjaro with Safari Care’s expert mountain crew. Certified safety standards, high success rates, and scenic route options.'
  }
];
