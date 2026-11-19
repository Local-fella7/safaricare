import type { Accommodation } from '#shared/types';

export const accommodationsData: Accommodation[] = [
  {
    slug: 'moivaro-coffee-plantation-lodge',
    name: 'Moivaro Coffee Plantation & Lodge',
    location: 'Arusha Town',
    region: 'Northern Tanzania',
    category: 'Luxury Lodge',
    tagline: 'Coffee Plantation Charm Just Beyond Arusha',
    summary: 'Set in beautiful natural scenery just 7 km from Arusha, Moivaro Lodge offers a charming, friendly and peaceful retreat with every comfort. Relax on the veranda overlooking Mount Meru or laze by the pool nestled among tropical trees and coffee plants, whether you are preparing for your safari or cosseting yourself on your return.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Swimming pool surrounded by tropical trees and coffee plants',
      'Veranda with views of Mount Meru',
      'Comfortable en-suite accommodation',
      'Beautifully kept natural gardens',
      'Warm, personal hospitality and safari briefing service'
    ],
    highlights: [
      'Only 7 km from the town of Arusha',
      'A tranquil base at the start and finish of your safari',
      'Impressive East African flora and fauna right on the doorstep',
      'Relaxed bush atmosphere with every modern comfort'
    ],
    nearbyDestinations: ['Arusha National Park', 'Tarangire National Park', 'Ngorongoro Crater', 'Lake Manyara'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Moivaro Coffee Plantation & Lodge, Arusha | Safari Care',
    seoDescription: 'Stay at Moivaro Lodge near Arusha: a charming coffee plantation retreat with Mount Meru views, tropical gardens and a pool, perfectly placed for your Northern Circuit safari.'
  },
  {
    slug: 'kirawira-camp',
    name: 'Kirawira Camp',
    location: 'Serengeti',
    region: 'Northern Tanzania',
    category: 'Tented Camp',
    tagline: 'Victorian Elegance on the Western Serengeti Plains',
    summary: 'Perched on a hilltop overlooking the vast Serengeti plains, Kirawira delivers a luxurious safari experience with Victorian-era décor, excellent cuisine and fine wines. Its elegant central meeting tent features chaises-longues, carved rocking chairs and a mahogany Edwardian bar, while the pool, plunge bath and waterfall invite you to soak up the sights and sounds of the bush.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Elegant central meeting tent with mahogany Edwardian bar',
      'Swimming pool with plunge bath, waterfall and timbered viewing deck',
      'Colonial-style furniture and Victorian-era décor',
      'Excellent cuisine and fine wines',
      'Guided walks, game drives and bush lunches'
    ],
    highlights: [
      'Hilltop setting over the western Serengeti plains',
      'Close to the Grumeti River, famed for its giant crocodiles',
      'Big 5 game in the surrounding vegetation',
      'July to October brings the annual wildebeest migration',
      'Fishing and sailing excursions on Lake Victoria'
    ],
    nearbyDestinations: ['Serengeti National Park', 'Ngorongoro Crater', 'Lake Victoria'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: true,
    seoTitle: 'Kirawira Camp, Western Serengeti | Safari Care',
    seoDescription: 'Discover Kirawira Camp in the western Serengeti: hilltop Victorian-style luxury tents, Grumeti River crocodiles and front-row access to the Great Migration.'
  },
  {
    slug: 'tarangire-safari-lodges-camps',
    name: 'Tarangire Safari Lodges & Camps',
    location: 'Tarangire',
    region: 'Northern Tanzania',
    category: 'Luxury Lodge',
    tagline: 'Riverside Lodges in the Land of Baobabs and Elephants',
    summary: 'A curated collection of riverside lodges and tented camps in Tarangire, chosen for their direct access to the permanent Tarangire River. From shady camps beneath ancient baobabs to lodges overlooking the valley, these stays place you in the heart of the park famous for Africa’s greatest concentration of elephants and spectacular dry-season game viewing.',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baobab%20Tree%20in%20Tarangire%20National%20Park%20with%20blue%20sky.jpg?width=1600',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Game-viewing decks overlooking the Tarangire River valley',
      'Spacious rooms and tented suites with private verandas',
      'Full-board dining with bush picnic lunches',
      'Swimming pools and sundowner lounges',
      'Guided day and night game drives'
    ],
    highlights: [
      'Elephant herds gathering along the river in the dry season',
      'Ancient baobab trees framing the wilderness',
      'Over 550 bird species for keen birdwatchers',
      'Walking safaris and night drives with specialist guides',
      'Peerless July to October wildlife concentrations'
    ],
    nearbyDestinations: ['Tarangire National Park', 'Lake Manyara', 'Ngorongoro Crater', 'Arusha Town'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Tarangire Safari Lodges & Camps | Safari Care',
    seoDescription: 'Choose the finest Tarangire lodges and tented camps with Safari Care. Riverside game viewing, ancient baobabs and huge elephant herds in the heart of the park.'
  },
  {
    slug: 'ngorongoro-sopa-lodge',
    name: 'Ngorongoro Sopa Lodge',
    location: 'Ngorongoro',
    region: 'Northern Tanzania',
    category: 'Luxury Lodge',
    tagline: 'Magnificent Crater Rim Views from the Eighth Wonder of the World',
    summary: 'Perched right on the rim of the collapsed volcano often called the eighth wonder of the world, Ngorongoro Sopa Lodge commands magnificent views over a UNESCO World Heritage crater floor. Vast herds of buffalo, wildebeest and zebra share the caldera with the rare black rhino, elephant, cheetah, leopard, lion and gazelle.',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Rooms and public areas facing the crater floor',
      'Restaurant and bar with panoramic caldera views',
      'Swimming pool and sundowner terrace',
      'Full-board safari dining',
      'Easy access for crater floor game drives'
    ],
    highlights: [
      'Spectacular elevated views across the 600-metre-deep caldera',
      'Black rhinos, big cats and giant tuskers on the crater floor',
      'UNESCO World Heritage wilderness at your doorstep',
      'Sunrise mist and dramatic light over the crater',
      'Close to Olduvai Gorge and Maasai cultural visits'
    ],
    nearbyDestinations: ['Ngorongoro Crater', 'Karatu', 'Serengeti National Park', 'Olduvai Gorge'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: true,
    seoTitle: 'Ngorongoro Sopa Lodge, Crater Rim | Safari Care',
    seoDescription: 'Stay at Ngorongoro Sopa Lodge for magnificent views over the crater floor, home to black rhino, lion, elephant and vast herds. Book with Safari Care.'
  },
  {
    slug: 'bougainvillea-safari-lodge',
    name: 'Bougainvillea Safari Lodge',
    location: 'Karatu',
    region: 'Northern Tanzania',
    category: 'Boutique Hotel',
    tagline: 'A Friendly Highlands Base Between Manyara and the Crater',
    summary: 'Bougainvillea Safari Lodge sits on the outskirts of Karatu town, roughly midway between Lake Manyara and the Ngorongoro Crater. Surrounded by cool highland farmland and vibrant gardens, it is a welcoming and great-value base for exploring the famous national parks of northern Tanzania, with comfortable rooms and genuinely warm Karibu hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Comfortable en-suite rooms set in lush gardens',
      'Restaurant serving hearty meals before and after game drives',
      'Bar and lounge with a relaxed, homely atmosphere',
      'Swimming pool for unwinding after a day in the parks',
      'Safari laundry and packed lunch service'
    ],
    highlights: [
      'Midway between Lake Manyara and Ngorongoro Crater',
      'Cool Karatu highland climate and coffee-farming scenery',
      'Excellent base for the Serengeti and Ngorongoro',
      'Personal service and authentic local warmth',
      'Easy access to nearby villages and coffee plantations'
    ],
    nearbyDestinations: ['Ngorongoro Crater', 'Lake Manyara', 'Serengeti National Park', 'Karatu'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Bougainvillea Safari Lodge, Karatu | Safari Care',
    seoDescription: 'Bougainvillea Safari Lodge in Karatu is an welcoming highlands base between Lake Manyara and Ngorongoro Crater, ideal for your private Tanzania safari.'
  },
  {
    slug: 'lake-manyara-hotel',
    name: 'Lake Manyara Hotel',
    location: 'Lake Manyara',
    region: 'Northern Tanzania',
    category: 'Hotel',
    tagline: 'Clifftop Views over a Flamingo-Tinted Rift Valley Lake',
    summary: 'Dramatically positioned on the very edge of the western escarpment of the Great Rift Valley, Lake Manyara Hotel affords magnificent views down across the whole lake. This small but breathtaking park is home to over 380 bird species, thousands of flamingos that tint the soda waters pink, and the famous tree-climbing lions that sleep in the branches of acacia trees.',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Flamingos%20at%20Lake%20Natron%2C%20Tanzania.jpg?width=1000',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Panoramic rooms overlooking Lake Manyara',
      'Swimming pool with a view over the Rift Valley floor',
      'Restaurant and bar with escarpment vistas',
      'Comfortable en-suite rooms and safari-friendly service',
      'Guided park drives and birdwatching excursions'
    ],
    highlights: [
      'Breathtaking views across the alkaline lake from the cliff edge',
      'Thousands of pink flamingos on the soda waters',
      'Famous tree-climbing lions of Lake Manyara',
      'More than 380 recorded bird species',
      'Groundwater forest, hippos and baboon troops close by'
    ],
    nearbyDestinations: ['Lake Manyara', 'Tarangire National Park', 'Ngorongoro Crater', 'Karatu'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Lake Manyara Hotel, Rift Valley Escarpment | Safari Care',
    seoDescription: 'Lake Manyara Hotel sits on the Rift Valley escarpment with sweeping lake views, flamingos and tree-climbing lions. Plan your stay with Safari Care.'
  },
  {
    slug: 'kambi-ya-tembo',
    name: 'Kambi Ya Tembo',
    location: 'Kilimanjaro',
    region: 'Northeastern Tanzania',
    category: 'Tented Camp',
    tagline: 'Elephant Country Beneath the Snows of Kilimanjaro',
    summary: 'In the 600-square-kilometre private Sinya concession bordering Kenya’s Amboseli National Park, Kambi Ya Tembo offers spectacular landscapes and magnificent views of Kilimanjaro, Mount Meru, Oldoinyo Longido and Oldoinyo Orok. It is one of the few places in Africa where huge elephant bulls over 50 years old, carrying impressive tusks, are regularly seen.',
    heroImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Spacious safari tents with en-suite facilities',
      'Mess tent with full-board dining and bar',
      'Guides drawn from the local Maasai community',
      'Open-air sundowner spots facing Kilimanjaro',
      'Private concession game drives with few other vehicles'
    ],
    highlights: [
      'Views of Kilimanjaro, Mount Meru and Ol Donyo Longido',
      'One of Africa’s healthiest populations of old elephant bulls',
      'A unique nature and cultural experience in the Sinya concession',
      'Borders Amboseli National Park in Kenya',
      'Excellent birding and big-game viewing in open country'
    ],
    nearbyDestinations: ['Mount Kilimanjaro', 'Amboseli National Park', 'Moshi', 'Arusha Town'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Kambi Ya Tembo, West Kilimanjaro | Safari Care',
    seoDescription: 'Kambi Ya Tembo in the Sinya concession offers Kilimanjaro views, huge tusker elephants and authentic Maasai culture. Enquire with Safari Care.'
  },
  {
    slug: 'southern-sun-dar-es-salaam',
    name: 'Southern Sun Dar es Salaam',
    location: 'Dar es Salaam',
    region: 'Coastal Tanzania',
    category: 'Hotel',
    tagline: 'City Comfort beside the Botanical Gardens',
    summary: 'The Southern Sun Dar es Salaam offers well-appointed accommodation within walking distance of the central business district, superbly located on the border of the Botanical Gardens and the diplomatic quarter. Its 152 guest rooms include suites, executive rooms and a room equipped for physically challenged guests, with 24-hour room service, laundry, secure parking and complimentary WiFi.',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      '152 well-appointed rooms, including suites and executive rooms',
      '24-hour room service and same-day laundry',
      'Complimentary WiFi and business support services',
      'Conference facilities and secure parking',
      'Accessibly equipped room and mostly non-smoking accommodation'
    ],
    highlights: [
      'Walking distance from Dar es Salaam’s central business district',
      'Bordering the leafy Botanical Gardens and diplomatic offices',
      'Ideal city stopover before a safari or flight to Zanzibar',
      'Reliable business and conference facilities',
      'Comfortable base for exploring Tanzania’s capital'
    ],
    nearbyDestinations: ['Dar es Salaam', 'Zanzibar Archipelago', 'Nyerere National Park (Selous)'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: false,
    seoTitle: 'Southern Sun Dar es Salaam | Safari Care',
    seoDescription: 'Southern Sun Dar es Salaam places you beside the Botanical Gardens near the city centre, with 152 comfortable rooms and full business facilities for your Tanzania stay.'
  },
  {
    slug: 'maruhubi-beach-villas',
    name: 'Maruhubi Beach Villas',
    location: 'Zanzibar',
    region: 'Spice Islands',
    category: 'Boutique Hotel',
    tagline: 'Stone Villas and Sea Views Moments from Stone Town',
    summary: 'Maruhubi Beach Villas sits right on the seafront just five minutes’ drive north of Stone Town, between the famous Maruhubi Palace Grounds and the lush tropical gardens of Mtoni Marine Centre. Six stone-built villas each offer two air-conditioned bedrooms and en-suite bathrooms, with spectacular views west across the sea to Chapwani and Changu Islands and south to historic Stone Town.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Six private stone-built beachfront villas',
      'Two air-conditioned bedrooms and en-suite bathrooms per villa',
      'Restaurant and rooms with panoramic sea views',
      'Tropical gardens near the Maruhubi Palace Grounds',
      'Easy access to Stone Town tours and airport transfers'
    ],
    highlights: [
      'Only five minutes from UNESCO-listed Stone Town',
      'Views to Chapwani and Changu Islands across the sea',
      'A quiet beachfront setting between palace grounds and gardens',
      'Ideal for families and small groups seeking privacy',
      'Perfect bush-to-beach extension after a safari'
    ],
    nearbyDestinations: ['Zanzibar Archipelago', 'Stone Town', 'Chapwani Island', 'Changu Island'],
    priceNote: 'Rates on request — combined with your private safari itinerary',
    featured: true,
    seoTitle: 'Maruhubi Beach Villas, Zanzibar | Safari Care',
    seoDescription: 'Maruhubi Beach Villas offers private stone villas with sea views five minutes from Stone Town. Combine Zanzibar beach relaxation with your Safari Care itinerary.'
  }
];
