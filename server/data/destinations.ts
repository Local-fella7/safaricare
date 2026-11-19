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
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baobab%20Tree%20in%20Tarangire%20National%20Park%20with%20blue%20sky.jpg?width=1600',
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
  },
  {
    slug: 'arusha-national-park',
    name: 'Arusha National Park',
    region: 'Northern Tanzania',
    tagline: 'Forested Slopes, Ngurdoto Crater & the Majestic Mount Meru',
    summary: 'The closest national park to Arusha town, Arusha National Park is a multi-faceted jewel where montane forest, alkaline lakes, and the Ngurdoto Crater reveal a rich diversity of habitats beneath the shadow of Mount Meru.',
    heroImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Spot acrobatic black-and-white colobus monkeys in lush montane forest',
      'Explore the spectacular Ngurdoto Crater with buffalo and warthog on its marshy floor',
      'Enjoy sweeping views of Mount Meru and distant snow-capped Kilimanjaro',
      'Combine lakes, forest, and crater landscapes on an easy half-day excursion from Arusha'
    ],
    wildlife: ['Black-and-white Colobus Monkey', 'Buffalo', 'Warthog', 'Giraffe', 'Leopard', 'Spotted Hyena', 'Waterbird Species'],
    bestTimeToVisit: 'June to October for clear views and dry trails, with rewarding wildlife viewing year-round',
    featured: false,
    seoTitle: 'Arusha National Park Safaris | Safari Care',
    seoDescription: 'Discover Arusha National Park with Safari Care. Explore Ngurdoto Crater, spot black-and-white colobus monkeys, and enjoy views of Mount Meru near Arusha.'
  },
  {
    slug: 'lake-manyara-national-park',
    name: 'Lake Manyara National Park',
    region: 'Northern Tanzania',
    tagline: 'Flamingo Shores, Lush Groundwater Forests & Compact Game Viewing',
    summary: 'Set beneath the Great Rift Valley escarpment, Lake Manyara National Park offers a compact yet diverse safari experience, from groundwater forest to open floodplains alive with prolific birdlife.',
    heroImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lakeshore%20and%20wildlife%2C%20Lake%20Manyara%20National%20Park%20(2015).jpg?width=1000'
    ],
    highlights: [
      'Witness thousands of pink-hued flamingos and abundant waterbirds along the lakeshore',
      'Explore one of Tanzania’s most rewarding birding parks with over 400 recorded species',
      'Enjoy varied activities from game drives to canoeing and cultural visits when conditions allow',
      'Experience a rich diversity of habitats in a compact and easily accessible park'
    ],
    wildlife: ['Flamingo', 'Pelican', 'Cormorant', 'Stork', 'Elephant', 'Hippo', 'Giraffe', 'Baboon'],
    bestTimeToVisit: 'July to October for large mammals and the dry season, with November to June ideal for birdwatching',
    featured: false,
    seoTitle: 'Lake Manyara National Park Safaris | Safari Care',
    seoDescription: 'Visit Lake Manyara National Park with Safari Care for flamingo-filled shores, rich birdlife, and diverse habitats on Tanzania’s northern safari circuit.'
  },
  {
    slug: 'selous-game-reserve',
    name: 'Selous Game Reserve / Nyerere National Park',
    region: 'Southern Tanzania',
    tagline: 'Vast River Wilderness & Africa’s Great Untamed Reserve',
    summary: 'One of Africa’s largest protected wilderness areas, Selous Game Reserve, now also known as Nyerere National Park, is defined by the Rufiji River, remote woodlands, and exceptional populations of elephants and wild dogs.',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Cruise the Rufiji River for boat safaris among hippos, crocodiles, and riverine wildlife',
      'Track one of the world’s most significant populations of endangered African wild dogs',
      'Explore a vast, uncrowded landscape of lakes, channels, plains, and miombo woodland',
      'Combine classic game drives with walking safaris in a true wilderness setting'
    ],
    wildlife: ['African Wild Dog', 'Elephant', 'Lion', 'Hippo', 'Crocodile', 'Sable Antelope', 'Greater Kudu'],
    bestTimeToVisit: 'June to October for prime game viewing along the rivers during the dry season',
    featured: false,
    seoTitle: 'Selous Game Reserve & Nyerere National Park Safaris | Safari Care',
    seoDescription: 'Experience Selous Game Reserve and Nyerere National Park with Safari Care. Enjoy Rufiji River boat safaris, wild dogs, and remote southern Tanzania wilderness.'
  },
  {
    slug: 'mikumi-national-park',
    name: 'Mikumi National Park',
    region: 'Southern Tanzania',
    tagline: 'Open Floodplains, Accessible Wildlife & Gateway to the South',
    summary: 'Easily reached from Dar es Salaam, Mikumi National Park forms part of the greater Selous ecosystem, offering broad Mkata floodplains, reliable game viewing, and a rewarding introduction to southern Tanzania.',
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Watch lions, zebra, wildebeest, and buffalo across the open Mkata floodplain',
      'Visit hippo pools near the park entrance for close-up wildlife encounters',
      'Enjoy one of Tanzania’s most accessible safari parks on the route from Dar es Salaam',
      'Discover over 400 recorded bird species in varied savannah and woodland habitats'
    ],
    wildlife: ['Lion', 'Elephant', 'Giraffe', 'Zebra', 'Wildebeest', 'Impala', 'Hippo'],
    bestTimeToVisit: 'Accessible year-round, with June to October offering the best dry-season game viewing',
    featured: false,
    seoTitle: 'Mikumi National Park Safaris | Safari Care',
    seoDescription: 'Explore Mikumi National Park with Safari Care. Enjoy accessible game drives, abundant wildlife on the Mkata floodplain, and classic southern Tanzania scenery.'
  },
  {
    slug: 'ruaha-national-park',
    name: 'Ruaha National Park',
    region: 'Southern Tanzania',
    tagline: 'Elephant Stronghold of the Great Ruaha River',
    summary: 'Tanzania’s largest national park and a bastion of raw wilderness, Ruaha is famed for its immense elephant herds, dramatic river landscapes, and a rich blend of eastern and southern African wildlife.',
    heroImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Encounter one of East Africa’s largest elephant populations along the Great Ruaha River',
      'Seek out greater kudu, sable, and roan antelope in rugged, uncrowded landscapes',
      'Experience exceptional predator sightings in a remote and lightly visited park',
      'Enjoy birdwatching among more than 450 recorded species across diverse habitats'
    ],
    wildlife: ['Elephant', 'Lion', 'Leopard', 'Greater Kudu', 'Sable Antelope', 'Roan Antelope', 'Crocodile'],
    bestTimeToVisit: 'May to December for predator and large mammal viewing, with January to April lush and excellent for birds',
    featured: false,
    seoTitle: 'Ruaha National Park Safaris | Safari Care',
    seoDescription: 'Journey to Ruaha National Park with Safari Care for huge elephant herds, rare antelope, and remote game viewing along Tanzania’s Great Ruaha River.'
  },
  {
    slug: 'gombe-stream-national-park',
    name: 'Gombe Stream National Park',
    region: 'Western Tanzania',
    tagline: 'Chimpanzee Treks on the Shores of Lake Tanganyika',
    summary: 'Tucked along the forested slopes of Lake Tanganyika, Gombe Stream National Park is Tanzania’s smallest national park and one of Africa’s most remarkable places to encounter wild chimpanzees up close.',
    heroImage: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Trek through steep forest valleys to observe habituated chimpanzee families in the wild',
      'Experience intimate primate encounters in a remote and deeply atmospheric setting',
      'Combine forest hikes with swimming or snorkeling in the clear waters of Lake Tanganyika',
      'Visit one of Africa’s most storied chimpanzee research landscapes'
    ],
    wildlife: ['Chimpanzee', 'Olive Baboon', 'Red-tailed Monkey', 'Vervet Monkey', 'Bushpig', 'Tropical Bird Species'],
    bestTimeToVisit: 'July to October and late December for easier trekking, with February to June offering lush forest scenery',
    featured: false,
    seoTitle: 'Gombe Stream National Park Safaris | Safari Care',
    seoDescription: 'Track wild chimpanzees in Gombe Stream National Park with Safari Care. Discover forest treks, Lake Tanganyika scenery, and western Tanzania’s primate haven.'
  },
  {
    slug: 'udzungwa-mountains-national-park',
    name: 'Udzungwa Mountains National Park',
    region: 'Southern Tanzania',
    tagline: 'Rainforest Trails, Sanje Waterfalls & Pristine Mountain Wilderness',
    summary: 'A lush mountain sanctuary in southern Tanzania, Udzungwa Mountains National Park is renowned for its forested slopes, rich biodiversity, and the spectacular hike to the Sanje Waterfalls.',
    heroImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Hike through tropical rainforest to the towering Sanje Waterfalls',
      'Take in sweeping views toward the Kilombero Valley from scenic mountain trails',
      'Discover one of Tanzania’s most biodiverse forest ecosystems on guided walks',
      'Enjoy refreshing natural pools and a rewarding trek in an unspoiled setting'
    ],
    wildlife: ['Primates', 'Forest Birds', 'Butterflies', 'Duiker', 'Sanje Mangabey', 'Chameleon Species'],
    bestTimeToVisit: 'June to October for easier hiking conditions, with the green season offering lush scenery and vibrant forest life',
    featured: false,
    seoTitle: 'Udzungwa Mountains National Park Safaris | Safari Care',
    seoDescription: 'Explore Udzungwa Mountains National Park with Safari Care. Hike to Sanje Waterfalls, trek rainforest trails, and experience southern Tanzania’s mountain wilderness.'
  }
];
