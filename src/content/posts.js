
export const posts = [
  {
    slug: 'multi-city-hoarding-launch',
    art: 'hoarding',
    title: 'Launching a Retail Brand Across 14 Cities in 30 Days',
    excerpt:
      'How we secured, printed and mounted 96 hoarding sites in under a month — and kept every municipal permission clean.',
    category: 'Outdoor',
    date: '2026-05-18',
    readTime: '5 min read',
    cover: '',
    linkedin: '',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVbPy22af7B5moi89fqX_1Pf4gbOHrKd8RyUUheHjP66GgGQVmXl5H6g&s=10',
    body: [
      {
        type: 'p',
        text: 'A national retail chain came to us with a hard deadline: 14 cities live on the same morning, tied to a television campaign that had already been booked. Thirty days from brief to first light.',
      },
      { type: 'h2', text: 'The challenge' },
      {
        type: 'p',
        text: 'Multi-city outdoor campaigns fail on paperwork, not on media. Each municipal corporation has its own permission cycle, and a single rejected site can leave a visible gap in an otherwise polished rollout.',
      },
      {
        type: 'ul',
        items: [
          '96 sites across 14 municipal jurisdictions',
          'Simultaneous go-live tied to a TV burst',
          'Printing and logistics compressed into 11 days',
          'Zero tolerance for unlit or damaged panels on day one',
        ],
      },
      { type: 'h2', text: 'What we did' },
      {
        type: 'p',
        text: 'We front-loaded the permissions. Applications went in for 128 sites — a deliberate 33% buffer — so that rejections could be absorbed without re-planning. Printing was split across three regional partners to avoid a single point of failure, and mounting crews were briefed with site-specific photographs rather than address lists.',
      },
      {
        type: 'quote',
        text: 'Not one site slipped past the go-live date.',
        by: 'Head of Marketing, Retail Chain',
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'p',
        text: 'All 96 sites were live by 6 a.m. on launch day. Monitoring photographs were shared with the client the same afternoon, and the buffer sites were repurposed as a second-phase extension at a negotiated rate.',
      },
    ],
  },
  {
    slug: 'mall-activation-footfall',
    art: 'mall',
    title: 'Turning Mall Footfall Into Qualified Leads',
    excerpt:
      'An atrium activation for a consumer durables brand that nearly doubled the footfall-to-lead conversion ratio.',
    category: 'Mall Media',
    date: '2026-03-02',
    readTime: '4 min read',
    cover: '',
    linkedin: '',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FhFiqrqbkpsZ6vA1OsiqMURcd1JBOAwuoN50TWOaagq4mO2a2Fck8gk&s=10',
    body: [
      {
        type: 'p',
        text: 'Atrium space is expensive, and most of it is wasted. Brands book the biggest mall they can afford and then wonder why a thousand people walked past the stall without stopping.',
      },
      { type: 'h2', text: 'Location beats size' },
      {
        type: 'p',
        text: 'We moved the activation from the ground-floor atrium — high traffic, low dwell time  to the first-floor node outside the food court. Fewer people pass it, but they pass it slowly, and they are already standing still.',
      },
      {
        type: 'ul',
        items: [
          'Repositioned to a high-dwell-time node',
          'Demo-led stall design instead of a leaflet counter',
          'Promoter script rebuilt around one qualifying question',
          'QR-based lead capture replacing paper forms',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'p',
        text: 'Total footfall past the stall dropped by roughly a third. Captured leads rose by 84%, and the cost per qualified lead fell to less than half of the previous campaign.',
      },
    ],
  },
  {
    slug: 'retail-signage-rollout',
    art: 'retail',
    title: '40 Shopfronts, Six Weeks, Zero Shutdowns',
    excerpt:
      'A standardised signage rollout for a QSR franchise — surveyed, fabricated centrally and installed overnight.',
    category: 'Retail',
    date: '2026-01-14',
    readTime: '4 min read',
    cover: '',
    linkedin: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtkBumj2XQQQw0z9PG16pHYVy0KIqoad_Zh4DKlwoS1OcoXjfisyRf-uZ&s=10',
    body: [
      {
        type: 'p',
        text: 'When a franchise refreshes its identity, the hard part is not the design. It is making forty different shopfronts — each with its own width, wiring and landlord — look like they came out of the same box.',
      },
      { type: 'h2', text: 'Survey first, fabricate once' },
      {
        type: 'p',
        text: 'Every outlet was physically surveyed and photographed before a single panel was cut. That produced a drawing set per store, which meant central fabrication could run in parallel rather than store by store.',
      },
      {
        type: 'ul',
        items: [
          'Individual site survey and drawing per outlet',
          'Centralised ACP and glow-sign fabrication',
          'Overnight installation windows, no trading hours lost',
          'Handover pack with warranty and maintenance schedule',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'p',
        text: 'All forty outlets were switched over within the six-week window. No store closed for a single trading hour, and the rework rate across the rollout was under 3%.',
      },
    ],
  },
]

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}
