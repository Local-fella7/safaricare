import type { Trek } from '#shared/types';

export const treksData: Trek[] = [
  {
    slug: '7-day-machame-kilimanjaro',
    title: '7-Day Machame Route Kilimanjaro Trek',
    mountain: 'Kilimanjaro',
    routeName: 'Machame Route',
    durationDays: 7,
    difficulty: 'Moderate to High',
    successRate: '92%',
    featured: true,
    summary: 'The classic "Whiskey" route to Uhuru Peak, combining rainforest, Shira plateau, Lava Tower, the Barranco Wall and a strong climb-high, sleep-low acclimatization profile.',
    heroImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'The most popular scenic ascent with a 92% summit success rate',
      'Climb-high, sleep-low acclimatization at Lava Tower (4,630m) and Barranco Camp',
      'Scramble up the iconic Barranco Wall with views over Kibo',
      'Sunrise summit at Uhuru Peak (5,895m), the Roof of Africa'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Machame Gate and Machame Camp',
        description: 'After a morning briefing and transfer from Arusha, registration takes place at Machame Gate (1,800m). The trail climbs steadily through dense montane rainforest, where colobus monkeys and blue monkeys are often heard overhead, before reaching Machame Camp (3,000m) in the late afternoon.',
        accommodation: 'Machame Camp (3,000m) – mountain tent',
        meals: 'Lunch, Dinner',
        activities: ['Park registration', 'Rainforest trek', 'Guide safety briefing'],
        driveTime: '~1.5 hours from Arusha to Machame Gate'
      },
      {
        day: 2,
        title: 'Machame Camp to Shira Plateau',
        description: 'Leave the rainforest behind and climb a steep rocky ridge into open moorland. The path levels out as it crosses the western breaches of the ancient Shira caldera, arriving at Shira Camp (3,840m) with wide views across the plateau towards Kibo.',
        accommodation: 'Shira Camp (3,840m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Moorland trek', 'Shira Plateau traverse', 'Evening health check'],
        driveTime: '5–6 hours trekking'
      },
      {
        day: 3,
        title: 'Shira to Lava Tower and Barranco Camp',
        description: 'A key acclimatization day: ascend from Shira to Lava Tower (4,630m) for lunch, then descend to Barranco Camp (3,950m). This climb-high, sleep-low pattern helps the body adapt while passing the dramatic shark\'s teeth formations of the Barranco Valley.',
        accommodation: 'Barranco Camp (3,950m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Lava Tower ascent', 'Acclimatization hike', 'Barranco Valley arrival'],
        driveTime: '6–7 hours trekking'
      },
      {
        day: 4,
        title: 'Barranco Wall to Karanga Camp',
        description: 'An early start tackles the famous Barranco Wall, a steep but non-technical scramble rewarded with superb views of Kibo. From the wall the trail undulates across scree and valleys before a final climb to Karanga Camp (3,995m), positioned perfectly for the summit push.',
        accommodation: 'Karanga Camp (3,995m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Barranco Wall scramble', 'High-altitude traverse', 'Sunset views of Kibo'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 5,
        title: 'Karanga to Barafu Base Camp',
        description: 'A steep, exposed climb on loose volcanic scree leads to Barafu Camp (4,673m), the base for the midnight summit attempt. The afternoon is spent resting, checking equipment and eating an early dinner before guides conduct the final safety and oxygen briefing.',
        accommodation: 'Barafu Camp (4,673m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Scree ascent', 'Base camp setup', 'Summit briefing'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 6,
        title: 'Summit Day: Uhuru Peak and Descent to Mweka',
        description: 'Depart shortly after midnight and climb by headlamp over scree and snow towards Stella Point (5,756m) on the crater rim. Continue to Uhuru Peak (5,895m) for sunrise on the Roof of Africa, then descend via the crater and Mweka route to Mweka Camp (3,100m) for a well-earned hot meal.',
        accommodation: 'Mweka Camp (3,100m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Midnight summit push', 'Stella Point', 'Uhuru Peak sunrise', 'Rainforest descent'],
        driveTime: '10–14 hours trekking'
      },
      {
        day: 7,
        title: 'Mweka Gate Descent and Return to Arusha',
        description: 'A final three-to-four-hour descent through lush rainforest brings you to Mweka Gate, where summit certificates are presented and the mountain crew is thanked. After lunch, a private transfer returns you to your Arusha hotel or onward to Kilimanjaro Airport.',
        accommodation: 'Arusha hotel or airport departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Forest descent', 'Summit certificates', 'Transfer to Arusha'],
        driveTime: '3–4 hours trekking, then ~1.5 hours by road'
      }
    ],
    inclusions: [
      'Kilimanjaro National Park entrance, gate, rescue and camping/hut fees',
      'Transfers from your Arusha base hotel to the mountain gate and back',
      'Three freshly prepared hot meals each day on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional WFR-certified mountain guides with twice-daily health checks',
      'A full porter team and dedicated mountain cook',
      'Hot water every day for washing',
      'Emergency oxygen, pulse oximeters and all guide, cook and porter salaries'
    ],
    exclusions: [
      'Tips and gratuities for the mountain crew',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear and clothing'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '7-Day Machame Route Kilimanjaro Trek | Safari Care',
    seoDescription: 'Climb Kilimanjaro on the scenic 7-day Machame route with WFR-certified guides, Lava Tower acclimatization and a 92% summit success rate.',
    status: 'published'
  },
  {
    slug: '8-day-lemosho-kilimanjaro',
    title: '8-Day Lemosho Route Kilimanjaro Trek',
    mountain: 'Kilimanjaro',
    routeName: 'Lemosho Route',
    durationDays: 8,
    difficulty: 'Moderate',
    successRate: '95%',
    featured: false,
    summary: 'The pristine western approach to Kilimanjaro: untouched rainforest, a full Shira Plateau crossing and one extra acclimatization day for the highest summit success rate of 95%.',
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Highest summit success rate on the mountain at 95%',
      'Remote western rainforest approach with abundant wildlife',
      'Two nights on the vast Shira Plateau for gentle acclimatization',
      'Lava Tower, Barranco Wall and a sunrise summit from Stella Point'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Lemosho Gate and Mti Mkubwa Camp',
        description: 'Drive west around the mountain to Lemosho Gate and walk through farmland and dense rainforest to Mti Mkubwa Camp (2,780m). The trail is quiet and rich with birdlife, colobus monkeys and towering vines, offering a peaceful start far from the busier southern routes.',
        accommodation: 'Mti Mkubwa Camp (2,780m) – mountain tent',
        meals: 'Lunch, Dinner',
        activities: ['Scenic transfer around Kilimanjaro', 'Rainforest trek', 'Camp briefing'],
        driveTime: '~3 hours from Arusha to Lemosho Gate'
      },
      {
        day: 2,
        title: 'Mti Mkubwa to Shira 1 Camp',
        description: 'Climb out of the rainforest into heath and moorland as the track joins the Shira route high on the western side of the mountain. Camp at Shira 1 (3,500m) on the open plateau with expansive views towards the summit ridges.',
        accommodation: 'Shira 1 Camp (3,500m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Rainforest exit', 'Moorland trek', 'Shira Plateau views'],
        driveTime: '5–6 hours trekking'
      },
      {
        day: 3,
        title: 'Shira 1 to Shira 2 Camp',
        description: 'A relatively gentle day across the Shira Plateau, passing the Shira Cathedral rock formations and ancient volcanic ridges. The extra night at 3,900m is central to the Lemosho acclimatization profile and is why this route has such a strong summit record.',
        accommodation: 'Shira 2 Camp (3,900m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Shira Cathedral viewpoint', 'Plateau trek', 'Acclimatization walk'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 4,
        title: 'Shira 2 to Lava Tower and Barranco Camp',
        description: 'Head east towards the distinctive Lava Tower (4,630m), stopping for lunch and a short acclimatization climb around the formation. Descend into the green Barranco Valley and camp at Barranco (3,950m) beneath the towering wall and Kibo\'s glaciers.',
        accommodation: 'Barranco Camp (3,950m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Lava Tower climb', 'Climb-high, sleep-low acclimatization', 'Barranco Valley camp'],
        driveTime: '6–7 hours trekking'
      },
      {
        day: 5,
        title: 'Barranco Wall to Karanga Camp',
        description: 'Scramble up the Barranco Wall at first light, a steep but straightforward section where porters and guides assist with confidence. Continue across undulating high-altitude terrain to Karanga Camp (3,995m), with excellent views back towards the Shira Plateau.',
        accommodation: 'Karanga Camp (3,995m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Barranco Wall scramble', 'High-altitude trek', 'Kibo panorama'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 6,
        title: 'Karanga to Barafu Base Camp',
        description: 'Climb steeply over scree and rocky ridges to Barafu Camp (4,673m), the exposed final base before the summit cone. Spend the afternoon resting, hydrating and checking headlamps, layers and cameras ahead of the early dinner and midnight departure.',
        accommodation: 'Barafu Camp (4,673m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Scree ascent', 'Barafu base camp', 'Summit preparation briefing'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 7,
        title: 'Summit Day: Uhuru Peak and Descent to Mweka',
        description: 'Start by headlamp around midnight and ascend the scree ridge to Stella Point (5,756m) on the crater rim. Walk the rim to Uhuru Peak (5,895m) for sunrise, then descend across the crater and down the Mweka trail to Mweka Camp (3,100m).',
        accommodation: 'Mweka Camp (3,100m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Midnight summit ascent', 'Stella Point', 'Uhuru Peak sunrise', 'Crater and forest descent'],
        driveTime: '10–14 hours trekking'
      },
      {
        day: 8,
        title: 'Mweka Gate and Return to Arusha',
        description: 'Complete the final forest descent to Mweka Gate, collect summit certificates and celebrate with the porter and cook team. A private vehicle transfers you back to Arusha for a hot shower, lunch and onward travel.',
        accommodation: 'Arusha hotel or airport departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Final forest descent', 'Summit certificates', 'Transfer to Arusha'],
        driveTime: '3–4 hours trekking, then ~1.5 hours by road'
      }
    ],
    inclusions: [
      'Kilimanjaro National Park entrance, gate, rescue and camping/hut fees',
      'Transfers from your Arusha base hotel to the mountain gate and back',
      'Three freshly prepared hot meals each day on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional WFR-certified mountain guides with twice-daily health checks',
      'A full porter team and dedicated mountain cook',
      'Hot water every day for washing',
      'Emergency oxygen, pulse oximeters and all guide, cook and porter salaries'
    ],
    exclusions: [
      'Tips and gratuities for the mountain crew',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear and clothing'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '8-Day Lemosho Route Kilimanjaro Trek | Safari Care',
    seoDescription: 'Take the pristine 8-day Lemosho route up Kilimanjaro with a 95% success rate, a full Shira Plateau crossing and expert mountain guides.',
    status: 'published'
  },
  {
    slug: '6-day-marangu-kilimanjaro',
    title: '6-Day Marangu Route Kilimanjaro Trek',
    mountain: 'Kilimanjaro',
    routeName: 'Marangu Route',
    durationDays: 6,
    difficulty: 'Moderate',
    successRate: '80%',
    featured: false,
    summary: 'The classic "Coca-Cola" route and the only ascent with shared sleeping huts instead of tents, following the historic eastern trail through rainforest, heath and moorland to Gillman\'s Point.',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'The only Kilimanjaro route with comfortable shared wooden huts',
      'A classic 80% summit success rate on the historic eastern approach',
      'Mawenzi Tarn acclimatization hike with views of the jagged peaks',
      'Summit via Gillman\'s Point before crossing to Uhuru Peak'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Marangu Gate and Mandara Hut',
        description: 'Transfer from Arusha to Marangu Gate (1,870m) for registration, then walk through coffee farms and dense rainforest to Mandara Hut (2,700m). A short optional excursion leads to the Maasai Tarn viewpoint in the afternoon.',
        accommodation: 'Mandara Hut (2,700m) – shared wooden hut',
        meals: 'Lunch, Dinner',
        activities: ['Gate registration', 'Rainforest trek', 'Maasai Tarn excursion'],
        driveTime: '~2 hours from Arusha to Marangu Gate'
      },
      {
        day: 2,
        title: 'Mandara Hut to Horombo Hut',
        description: 'Leave the forest canopy and climb through heath and open moorland, with giant heathers and ever-changing views of Kibo and Mawenzi. The trail reaches Horombo Hut (3,720m) in the afternoon, the last substantial water point before the high camp.',
        accommodation: 'Horombo Hut (3,720m) – shared wooden hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Heath and moorland trek', 'Mawenzi views', 'Evening acclimatization check'],
        driveTime: '5–6 hours trekking'
      },
      {
        day: 3,
        title: 'Acclimatization Day at Horombo and Mawenzi Tarn',
        description: 'Spend a slower day climbing towards Mawenzi Tarn (4,330m) before returning to sleep at Horombo Hut. This extra acclimatization day is included on the six-day program to improve comfort and safety above 4,000m.',
        accommodation: 'Horombo Hut (3,720m) – shared wooden hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Mawenzi Tarn acclimatization hike', 'Glacier and jagged peak views', 'Rest at Horombo'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 4,
        title: 'Horombo Hut to Kibo Hut',
        description: 'Cross the high saddle between Mawenzi and Kibo on a broad, exposed track covered in volcanic scree. Arrive at Kibo Hut (4,700m) in the afternoon, eat an early dinner and rest under thick blankets before the midnight summit attempt.',
        accommodation: 'Kibo Hut (4,700m) – shared wooden hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Saddle crossing', 'Kibo Hut arrival', 'Summit gear briefing'],
        driveTime: '5–6 hours trekking'
      },
      {
        day: 5,
        title: 'Summit Day and Descent to Horombo Hut',
        description: 'Begin by headlamp at midnight and climb steep scree to Gillman\'s Point (5,681m) on the crater rim. Walk the rim to Uhuru Peak (5,895m) for sunrise, then retrace the route to Kibo for a short rest before descending all the way to Horombo Hut (3,720m).',
        accommodation: 'Horombo Hut (3,720m) – shared wooden hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Midnight scree climb', 'Gillman\'s Point', 'Uhuru Peak sunrise', 'Descent to Horombo'],
        driveTime: '10–12 hours trekking'
      },
      {
        day: 6,
        title: 'Horombo Hut to Marangu Gate and Arusha',
        description: 'Descend through moorland and rainforest to Marangu Gate, where your guides hand over summit certificates. After lunch, enjoy a private transfer back to your hotel in Arusha or directly to Kilimanjaro Airport.',
        accommodation: 'Arusha hotel or airport departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Forest descent', 'Summit certificates', 'Transfer to Arusha'],
        driveTime: '3–4 hours trekking, then ~2 hours by road'
      }
    ],
    inclusions: [
      'Kilimanjaro National Park entrance, gate, rescue and hut fees',
      'Transfers from your Arusha base hotel to the mountain gate and back',
      'Three freshly prepared hot meals each day on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional WFR-certified mountain guides with twice-daily health checks',
      'A full porter team and dedicated mountain cook',
      'Hot water every day for washing',
      'Emergency oxygen, pulse oximeters and all guide, cook and porter salaries'
    ],
    exclusions: [
      'Tips and gratuities for the mountain crew',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear and clothing'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '6-Day Marangu Route Kilimanjaro Trek | Safari Care',
    seoDescription: 'Climb the classic 6-day Marangu route to Kilimanjaro with shared mountain huts, a Mawenzi acclimatization day and certified guides.',
    status: 'published'
  },
  {
    slug: '7-day-rongai-kilimanjaro',
    title: '7-Day Rongai Route Kilimanjaro Trek',
    mountain: 'Kilimanjaro',
    routeName: 'Rongai Route',
    durationDays: 7,
    difficulty: 'Moderate',
    successRate: '88%',
    featured: false,
    summary: 'A quiet northern approach near the Kenyan border, crossing dry savannah and the Mawenzi saddle before a summit via Gillman\'s Point and an 88% success rate.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Remote and uncrowded northern trail with an 88% summit success rate',
      'Drier conditions make it an excellent shoulder-season choice',
      'Close views of Mawenzi\'s jagged summit from Kikelewa and Mawenzi Tarn',
      'Summit via Gillman\'s Point and descent through the eastern huts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Rongai Gate and Kilelema Camp',
        description: 'Drive north-east towards the Kenyan border to Rongai (Nalemuru) Gate. The first day follows a gentle track through savannah and open woodland, with views of Mount Meru behind you, before camp at Kilelema (2,230m).',
        accommodation: 'Kilelema Camp (2,230m) – mountain tent',
        meals: 'Lunch, Dinner',
        activities: ['Scenic northern transfer', 'Savannah trek', 'First mountain camp'],
        driveTime: '~3.5 hours from Arusha to Rongai Gate'
      },
      {
        day: 2,
        title: 'Kilelema Camp to Second Cave',
        description: 'The trail leaves the sparse farmland and climbs steadily into alpine desert, with the rugged silhouette of Mawenzi growing closer. Camp at Second Cave (3,450m), an exposed but memorable site with wide northern views.',
        accommodation: 'Second Cave Camp (3,450m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Alpine desert trek', 'Mawenzi views', 'Acclimatization check'],
        driveTime: '5–6 hours trekking'
      },
      {
        day: 3,
        title: 'Second Cave to Kikelewa Cave',
        description: 'A shorter ascent climbs a steep ridge and then traverses towards Kikelewa Cave (3,600m). The afternoon allows a gentle acclimatization walk with outstanding views across the north-east face of Mawenzi.',
        accommodation: 'Kikelewa Cave Camp (3,600m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Ridge climb', 'Kikelewa Cave camp', 'Optional acclimatization walk'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 4,
        title: 'Kikelewa Cave to Mawenzi Tarn',
        description: 'Climb steep scree valleys to the dramatic Mawenzi Tarn Camp (4,330m), set beneath sheer cliffs and a small glacial tarn. The afternoon is reserved for acclimatization and exploring the base of Mawenzi before the saddle crossing.',
        accommodation: 'Mawenzi Tarn Camp (4,330m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Steep scree ascent', 'Mawenzi Tarn', 'High-altitude acclimatization'],
        driveTime: '3–4 hours trekking'
      },
      {
        day: 5,
        title: 'Mawenzi Tarn to Kibo Hut',
        description: 'Cross the high, windswept saddle between Mawenzi and Kibo, a unique landscape of volcanic ash and ice towers. Arrive at Kibo Hut (4,700m) early enough to rest, hydrate and receive the final summit briefing.',
        accommodation: 'Kibo Hut (4,700m) – mountain tent',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Mawenzi–Kibo saddle crossing', 'Kibo Hut arrival', 'Summit preparation'],
        driveTime: '4–5 hours trekking'
      },
      {
        day: 6,
        title: 'Summit Day and Descent to Horombo Hut',
        description: 'Leave camp around midnight and climb the steep scree ridge to Gillman\'s Point (5,681m). Follow the crater rim to Uhuru Peak (5,895m) at sunrise, then descend through Kibo to Horombo Hut (3,720m) for the night.',
        accommodation: 'Horombo Hut (3,720m) – shared wooden hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Midnight summit climb', 'Gillman\'s Point', 'Uhuru Peak sunrise', 'Descent to Horombo'],
        driveTime: '10–12 hours trekking'
      },
      {
        day: 7,
        title: 'Horombo Hut to Marangu Gate and Arusha',
        description: 'Walk down through rainforest to Marangu Gate, collect summit certificates and transfer back to Arusha. The eastern descent offers a different perspective of the mountain from the quiet northern ascent.',
        accommodation: 'Arusha hotel or airport departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Rainforest descent', 'Summit certificates', 'Transfer to Arusha'],
        driveTime: '3–4 hours trekking, then ~2 hours by road'
      }
    ],
    inclusions: [
      'Kilimanjaro National Park entrance, gate, rescue and camping/hut fees',
      'Transfers from your Arusha base hotel to the mountain gate and back',
      'Three freshly prepared hot meals each day on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional WFR-certified mountain guides with twice-daily health checks',
      'A full porter team and dedicated mountain cook',
      'Hot water every day for washing',
      'Emergency oxygen, pulse oximeters and all guide, cook and porter salaries'
    ],
    exclusions: [
      'Tips and gratuities for the mountain crew',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear and clothing'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '7-Day Rongai Route Kilimanjaro Trek | Safari Care',
    seoDescription: 'Climb Kilimanjaro on the quiet 7-day Rongai route, a drier northern approach with Mawenzi views, an 88% success rate and expert guides.',
    status: 'published'
  },
  {
    slug: '3-day-mount-meru',
    title: '3-Day Mount Meru Trek',
    mountain: 'Meru',
    routeName: 'Momella Route',
    durationDays: 3,
    difficulty: 'Moderate',
    featured: true,
    summary: 'A compact ascent of Tanzania\'s second-highest mountain through Arusha National Park woodland and moorland, with a pre-dawn summit and a direct descent back to Arusha.',
    heroImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'A gentle three-hour first day through woodland with giraffe sightings',
      'Black-and-white colobus monkeys and Kilimanjaro views from Saddle Hut',
      'Summit push before the afternoon clouds cover the crater rim',
      'An ideal, shorter acclimatization trek before Kilimanjaro'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Momella Gate and Miriakamba Hut',
        description: 'Morning transfer from Arusha to Momella Gate, where a park ranger and porters meet you. A relatively gentle three-hour ascent passes through well-developed woodland with a good chance of seeing giraffe and buffalo. Lunch is taken en route; with an early start there is time to explore the Meru crater in the afternoon. Dinner and overnight at Miriakamba Camp.',
        accommodation: 'Miriakamba Hut (2,514m) – mountain hut',
        meals: 'Lunch, Dinner',
        activities: ['Transfer to Momella Gate', 'Woodland ascent', 'Optional crater exploration', 'Wildlife viewing'],
        driveTime: '~45 minutes from Arusha to Momella Gate'
      },
      {
        day: 2,
        title: 'Miriakamba Hut to Saddle Hut',
        description: 'After breakfast, hike for about three hours up to Saddle Hut at roughly 11,500 ft. The trail initially passes through forest where black-and-white colobus monkeys are frequently seen, then enters moorland similar to Kilimanjaro at around 3,000m. If time permits, climb a little higher for a scenic view of the Roof of Africa; this also provides useful extra acclimatization.',
        accommodation: 'Saddle Hut (3,570m) – mountain hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Forest and moorland trek', 'Colobus monkey viewing', 'Optional Little Meru acclimatization walk'],
        driveTime: '3 hours trekking'
      },
      {
        day: 3,
        title: 'Saddle Hut to Summit and Return to Arusha',
        description: 'Rise early for the four-to-six-hour hike to the summit before afternoon clouds cover the mountain. From the crater rim, enjoy views over the ash cone and towards Kilimanjaro, then descend all the way to Momella Gate. A private transfer returns you to Arusha for the evening.',
        accommodation: 'Arusha hotel or departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Pre-dawn summit climb', 'Crater rim summit viewpoint', 'Descent to Momella Gate', 'Transfer to Arusha'],
        driveTime: '4–6 hours ascent, then ~2–3 hours descent and ~45 minutes by road'
      }
    ],
    inclusions: [
      'Arusha National Park entrance fees and all hut fees',
      'Transfers from your Arusha base hotel to the park gate and back',
      'Three hot meals a day while on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional, experienced WFR-certified mountain guides',
      'A good number of porters, a dedicated cook and hot water for washing each day',
      'Full salaries for the guides, cooks and porters'
    ],
    exclusions: [
      'Tips for guides, cooks and porters',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '3-Day Mount Meru Trek | Safari Care',
    seoDescription: 'Trek Mount Meru in three days through Arusha National Park with WFR-certified guides, hut fees, porters, hot meals and a summit at 4,562m.',
    status: 'published'
  },
  {
    slug: '4-day-mount-meru',
    title: '4-Day Mount Meru Trek',
    mountain: 'Meru',
    routeName: 'Momella Route',
    durationDays: 4,
    difficulty: 'Moderate',
    featured: false,
    summary: 'A relaxed four-day Mount Meru program that breaks the summit descent into two stages, with an extra night at Miriakamba Hut and a leisurely final morning back to Arusha.',
    heroImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'A slower pace with an extra night on the mountain',
      'Woodland wildlife, colobus monkeys and views of Kilimanjaro from Saddle Hut',
      'Summit before the clouds, followed by a staged descent via Saddle Hut',
      'Excellent acclimatization in advance of a Kilimanjaro climb'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Momella Gate and Miriakamba Hut',
        description: 'Transfer from Arusha to Momella Gate, where the game ranger and porters meet you. A relatively gentle three-hour walk through well-developed woodland offers good chances of giraffe sightings. Lunch en route and, with an early departure, time to explore the Meru crater in the afternoon. Dinner and overnight at Miriakamba Camp.',
        accommodation: 'Miriakamba Hut (2,514m) – mountain hut',
        meals: 'Lunch, Dinner',
        activities: ['Transfer to Momella Gate', 'Woodland ascent', 'Optional crater exploration', 'Wildlife viewing'],
        driveTime: '~45 minutes from Arusha to Momella Gate'
      },
      {
        day: 2,
        title: 'Miriakamba Hut to Saddle Hut',
        description: 'After breakfast, hike for about three hours to Saddle Hut at roughly 11,500 ft. The route passes through forest where black-and-white colobus monkeys are common, then enters Kilimanjaro-like moorland around 3,000m. If time permits, continue a little higher for views of Mount Kilimanjaro and extra acclimatization.',
        accommodation: 'Saddle Hut (3,570m) – mountain hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Forest and moorland trek', 'Colobus monkey viewing', 'Optional Little Meru acclimatization walk'],
        driveTime: '3 hours trekking'
      },
      {
        day: 3,
        title: 'Saddle Hut to Summit and back to Miriakamba Hut',
        description: 'Start early for the four-to-six-hour summit climb, reaching the crater rim before afternoon clouds arrive. Descend back to Saddle Hut in time for lunch, then continue down to Miriakamba Hut for dinner and a second night on the mountain, making the day far less rushed than the three-day program.',
        accommodation: 'Miriakamba Hut (2,514m) – mountain hut',
        meals: 'Breakfast, Lunch, Dinner',
        activities: ['Pre-dawn summit climb', 'Crater rim summit viewpoint', 'Staged descent to Miriakamba'],
        driveTime: '4–6 hours ascent, then ~4 hours descent'
      },
      {
        day: 4,
        title: 'Miriakamba Hut to Momella Gate and Arusha',
        description: 'Enjoy breakfast at camp and a leisurely morning before descending to Momella Gate. The ranger and porters bid you farewell at the gate, and a private vehicle transfers you back to Arusha for lunch or onward travel.',
        accommodation: 'Arusha hotel or departure connection',
        meals: 'Breakfast, Lunch',
        activities: ['Leisurely forest descent', 'Gate farewell', 'Transfer to Arusha'],
        driveTime: '2–3 hours trekking, then ~45 minutes by road'
      }
    ],
    inclusions: [
      'Arusha National Park entrance fees and all hut fees',
      'Transfers from your Arusha base hotel to the park gate and back',
      'Three hot meals a day while on the mountain',
      'Four litres of drinking water per person per day while trekking',
      'Professional, experienced WFR-certified mountain guides',
      'A good number of porters, a dedicated cook and hot water for washing each day',
      'Full salaries for the guides, cooks and porters'
    ],
    exclusions: [
      'Tips for guides, cooks and porters',
      'Travel and medical insurance',
      'All items of a personal nature',
      'Personal climbing gear'
    ],
    priceNote: 'Custom quote based on party size & mountain season',
    bestSeason: 'January–March & June–October',
    seoTitle: '4-Day Mount Meru Trek | Safari Care',
    seoDescription: 'A relaxed 4-day Mount Meru ascent with an extra night on the mountain, WFR-certified guides, porters, hot meals and a staged summit descent.',
    status: 'published'
  }
];
