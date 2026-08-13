
const CITY_FIELD = {
  name: 'city',
  label: 'City / Location',
  type: 'text',
  placeholder: 'e.g. Mumbai, Pune, Nagpur',
  required: true,
}

const DURATION_FIELD = {
  name: 'duration',
  label: 'Campaign Duration',
  type: 'select',
  options: ['1 month', '3 months', '6 months', '12 months', 'Not sure yet'],
  required: false,
}

const BUDGET_FIELD = {
  name: 'budget',
  label: 'Approximate Budget',
  type: 'select',
  options: [
    'Under ₹1 Lakh',
    '₹1 – 5 Lakh',
    '₹5 – 10 Lakh',
    '₹10 – 25 Lakh',
    '₹25 Lakh+',
    'Prefer to discuss',
  ],
  required: false,
}

export const services = [
  {
    slug: 'malls-and-multiplexes',
    title: 'Malls & Multiplexes',
    short: 'High-footfall branding inside India’s busiest retail and cinema destinations.',
    icon: 'mall',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYpztYjo5b-9jgJp4KLlNQL4dsyz3kTU5tcGZcHXschnAlboFmh861ys&s=10',
    accent: 'from-cyan-400/20 to-teal-500/5',
    description:
      'Reach audiences in a relaxed, high-dwell-time environment. We secure atrium activations, escalator panels, food-court branding, lift wraps, standees and on-screen cinema advertising across leading malls and multiplex chains.',
    highlights: [
      'Atrium & concourse activations',
      'Escalator, lift and pillar branding',
      'Cinema on-screen and lobby media',
      'Food court and washroom panels',
      'Kiosks, standees and product sampling',
    ],
    fields: [
      CITY_FIELD,
      {
        name: 'mallPreference',
        label: 'Preferred Mall / Multiplex',
        type: 'text',
        placeholder: 'e.g. Phoenix Palladium, PVR Lower Parel',
      },
      {
        name: 'format',
        label: 'Format Required',
        type: 'select',
        options: [
          'Atrium activation',
          'Kiosk / Stall',
          'Escalator & lift branding',
          'Cinema on-screen ad',
          'Standees & panels',
          'Multiple formats',
        ],
        required: true,
      },
      DURATION_FIELD,
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'hoardings-and-neon-signs',
    title: 'Hoardings & Neon Signs',
    short: 'Landmark outdoor sites and glowing signage that own the skyline.',
    icon: 'hoarding',
    image: 'https://5.imimg.com/data5/UB/EU/MY-28015878/hoarding-neon-sign-board-1000x1000.jpg',
    accent: 'from-sky-400/20 to-cyan-500/5',
    description:
      'From prime arterial-road hoardings to custom-fabricated neon and LED signage, we handle site selection, municipal permissions, printing, mounting and maintenance end to end.',
    highlights: [
      'Prime arterial and highway hoardings',
      'Unipoles, gantries and billboards',
      'Neon, LED and backlit signage',
      'Fabrication, permissions & mounting',
      'Monthly monitoring photographs',
    ],
    fields: [
      CITY_FIELD,
      {
        name: 'siteType',
        label: 'Site Type',
        type: 'select',
        options: ['Hoarding / Billboard', 'Unipole', 'Gantry', 'Neon sign', 'LED display', 'Not sure'],
        required: true,
      },
      {
        name: 'size',
        label: 'Approximate Size (ft)',
        type: 'text',
        placeholder: 'e.g. 40 x 20',
      },
      {
        name: 'illumination',
        label: 'Illumination',
        type: 'select',
        options: ['Non-lit', 'Front-lit', 'Back-lit', 'Digital LED'],
      },
      DURATION_FIELD,
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'corporate-gifting',
    title: 'Corporate Gifting',
    short: 'Branded merchandise and festive hampers that keep your name on the desk.',
    icon: 'gift',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CF5CrlcCIat5FOZeAA0_i0TSEeQ2tTwC0rRtO7UaQA&s=10',
    accent: 'from-teal-400/20 to-emerald-500/5',
    description:
      'Curated, customised gifting for festivals, employee milestones, dealer meets and client appreciation — sourced, branded, packed and delivered on schedule.',
    highlights: [
      'Diwali & New Year hampers',
      'Employee onboarding & welcome kits',
      'Conference and dealer-meet giveaways',
      'Custom packaging and branding',
      'Pan-India dispatch and tracking',
    ],
    fields: [
      {
        name: 'occasion',
        label: 'Occasion',
        type: 'select',
        options: [
          'Diwali / Festive',
          'New Year',
          'Employee onboarding',
          'Client appreciation',
          'Conference / Event',
          'Other',
        ],
        required: true,
      },
      {
        name: 'quantity',
        label: 'Quantity Required',
        type: 'number',
        placeholder: 'e.g. 250',
        required: true,
      },
      {
        name: 'deliveryDate',
        label: 'Required By',
        type: 'date',
      },
      CITY_FIELD,
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'brochures-banners-catalogues',
    title: 'Brochures, Banners & Catalogues',
    short: 'Design and print collateral that looks as good in hand as it does on screen.',
    icon: 'print',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjDoJkRX2Bo4T-Lmhtr3ALdzZlIGRL2plkiDgmrXzXiffrRNxKviqjiA&s=10',
    accent: 'from-cyan-400/20 to-blue-500/5',
    description:
      'In-house design and trusted print partners for every piece of collateral your brand hands out — from a two-fold leaflet to a 60-page product catalogue.',
    highlights: [
      'Concept, copywriting and design',
      'Brochures, leaflets and flyers',
      'Product catalogues and lookbooks',
      'Flex banners, standees and backdrops',
      'Offset & digital printing at scale',
    ],
    fields: [
      {
        name: 'collateral',
        label: 'What Do You Need?',
        type: 'select',
        options: ['Brochure', 'Catalogue', 'Banner / Standee', 'Flyer / Leaflet', 'Multiple items'],
        required: true,
      },
      {
        name: 'quantity',
        label: 'Print Quantity',
        type: 'number',
        placeholder: 'e.g. 1000',
      },
      {
        name: 'designNeeded',
        label: 'Do You Need Design Support?',
        type: 'select',
        options: ['Yes, design from scratch', 'Partly — we have brand assets', 'No, print-ready files'],
        required: true,
      },
      {
        name: 'deliveryDate',
        label: 'Required By',
        type: 'date',
      },
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'transit-media',
    title: 'Transit Media',
    short: 'Advertising that travels — airports, metros, railways and cabs.',
    icon: 'transit',
    image: 'https://acmeadvertiser.com/wp-content/uploads/2026/03/Metro-advertising-in-Western-Express-Highway-Mumbai-with-Acme-Advertising-Co-delivering-high-visibility-brand-recall-reach-traffic-awareness-impact.jpg',
    accent: 'from-indigo-400/20 to-cyan-500/5',
    description:
      'Put your brand in motion across the transit network: airport terminals, metro stations and train wraps, railway platforms, auto and cab branding.',
    highlights: [
      'Airport terminal and baggage-belt media',
      'Metro station and train-wrap branding',
      'Railway platform and FOB panels',
      'Cab, auto and cycle branding',
      'Multi-city transit packages',
    ],
    fields: [
      CITY_FIELD,
      {
        name: 'medium',
        label: 'Transit Medium',
        type: 'select',
        options: ['Airport', 'Metro', 'Railway', 'Cabs / Autos', 'Multiple'],
        required: true,
      },
      DURATION_FIELD,
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'retail-and-signages',
    title: 'Retail & Signages',
    short: 'Shopfronts, in-store branding and rollouts standardised across every outlet.',
    icon: 'retail',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQGGNQ3wqXKecg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1698998952933?e=2147483647&v=beta&t=WdYW8H-yCE-KfAchqV62FS2VV2AK57eg9ND1fpnNJgc',
    accent: 'from-teal-400/20 to-cyan-500/5',
    description:
      'Consistent retail identity at every touchpoint — glow signs, ACP shopfronts, in-store POS, window graphics and multi-outlet rollout management.',
    highlights: [
      'Glow sign boards & ACP shopfronts',
      'In-store POS and window graphics',
      'Wayfinding and safety signage',
      'Multi-outlet rollout management',
      'Survey, fabrication and installation',
    ],
    fields: [
      CITY_FIELD,
      {
        name: 'outlets',
        label: 'Number of Outlets',
        type: 'number',
        placeholder: 'e.g. 12',
        required: true,
      },
      {
        name: 'signageType',
        label: 'Signage Type',
        type: 'select',
        options: ['Glow sign board', 'ACP shopfront', 'In-store POS', 'Window graphics', 'Full rollout'],
        required: true,
      },
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Performance campaigns, social content and SEO that compound month on month.',
    icon: 'digital',
    image: 'https://digitalpromenade.com/wp-content/uploads/2026/01/best-digital-marketing-agencies-in-mumbai.jpg',
    accent: 'from-blue-400/20 to-cyan-500/5',
    description:
      'The online half of your media plan — paid performance, social media management, SEO, influencer tie-ups and creative production, reported transparently.',
    highlights: [
      'Meta & Google performance campaigns',
      'Social media management and content',
      'SEO and local search optimisation',
      'Influencer and creator partnerships',
      'Monthly analytics and reporting',
    ],
    fields: [
      {
        name: 'website',
        label: 'Website / Instagram Handle',
        type: 'text',
        placeholder: 'https://…',
      },
      {
        name: 'goal',
        label: 'Primary Goal',
        type: 'select',
        options: ['Lead generation', 'Brand awareness', 'E-commerce sales', 'Social media growth', 'SEO / Ranking'],
        required: true,
      },
      {
        name: 'monthlyBudget',
        label: 'Monthly Budget',
        type: 'select',
        options: ['Under ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1 Lakh', '₹1 Lakh+'],
      },
      DURATION_FIELD,
    ],
  },
  {
    slug: 'buses-and-bus-shelters',
    title: 'Buses & Bus Stop Shelters',
    short: 'City-wide reach on moving buses and the shelters commuters wait at.',
    icon: 'bus',
    image: 'https://brandvio.in/public/uploads/service-4.jpeg',
    accent: 'from-cyan-400/20 to-sky-500/5',
    description:
      'Full and partial bus wraps, back panels and bus-queue-shelter panels across municipal and private fleets — the most cost-effective mass reach in any city.',
    highlights: [
      'Full and half bus wraps',
      'Back panel and side panel branding',
      'Bus queue shelter (BQS) panels',
      'Municipal fleet tie-ups',
      'Route-wise planning and reporting',
    ],
    fields: [
      CITY_FIELD,
      {
        name: 'format',
        label: 'Format',
        type: 'select',
        options: ['Full bus wrap', 'Back panel', 'Side panel', 'Bus shelter panel', 'Combination'],
        required: true,
      },
      {
        name: 'units',
        label: 'Number of Buses / Shelters',
        type: 'number',
        placeholder: 'e.g. 25',
      },
      DURATION_FIELD,
      BUDGET_FIELD,
    ],
  },
  {
    slug: 'newspapers-and-magazines',
    title: 'Newspapers & Magazines',
    short: 'Print media buying at agency rates, national and regional.',
    icon: 'press',
    image: 'https://affairscloud.com/assets/uploads/2015/08/Newspapers-and-Magazines.jpg',
    accent: 'from-slate-400/20 to-cyan-500/5',
    description:
      'As an accredited agency we plan and book display advertising, classifieds, supplements and magazine placements across national dailies and regional press.',
    highlights: [
      'National and regional dailies',
      'Display, classified and tender ads',
      'Magazine and supplement placements',
      'Multi-edition release planning',
      'Tear sheets and release orders',
    ],
    fields: [
      {
        name: 'publication',
        label: 'Preferred Publication',
        type: 'text',
        placeholder: 'e.g. Times of India, Lokmat',
      },
      {
        name: 'adType',
        label: 'Advertisement Type',
        type: 'select',
        options: ['Display ad', 'Classified', 'Tender / Public notice', 'Supplement', 'Magazine'],
        required: true,
      },
      {
        name: 'editions',
        label: 'Editions / Cities',
        type: 'text',
        placeholder: 'e.g. Mumbai + Pune',
      },
      {
        name: 'releaseDate',
        label: 'Preferred Release Date',
        type: 'date',
      },
      BUDGET_FIELD,
    ],
  },
]

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
