// Package Estimator data source.
//
// (a) Every price below is a placeholder carried over from the design
//     spec — replace every number with Veduka's real pricing before this
//     goes live.
// (b) The email provider (Resend) needs real credentials in `.env.local`
//     (RESEND_API_KEY, ADMIN_NOTIFICATION_EMAIL) before quote requests
//     will actually send — see src/app/api/estimator/quote/route.js.

export const EVENT_TYPES = {
  weddingCeremonies: {
    id: 'weddingCeremonies',
    label: 'Wedding Ceremonies',
    description: 'Engagement, Haldi, Sangeeth, Muhurtham and Reception.',
    icon: 'heart',
    ceremonySteps: [
      'engagement',
      'pelliKoduku',
      'pelliKuthuru',
      'sangeeth',
      'grandWedding',
      'reception',
      'luxuryAddons',
    ],
  },
  preWeddingStory: {
    id: 'preWeddingStory',
    label: 'Pre-Wedding Story',
    description: 'Location shoots, portrait sessions and cinematic teasers.',
    icon: 'camera',
    ceremonySteps: ['preWeddingShoot'],
  },
  birthdayEvents: {
    id: 'birthdayEvents',
    label: 'Birthday Events',
    description: 'Milestones, rituals and family celebrations with style.',
    icon: 'gift',
    ceremonySteps: ['birthdayEvent', 'birthdayAddons'],
  },
  vrathamRituals: {
    id: 'vrathamRituals',
    label: 'Vratham & Rituals',
    description: 'Housewarming, religious rituals and intimate family gatherings.',
    icon: 'sparkles',
    ceremonySteps: ['vrathamRitual'],
  },
};

// Curated presets shown as shortcuts on Step 1. Selecting one auto-selects
// the matching eventType AND pre-checks every service with
// `defaultSelected: true` across that event type's ceremonies — every
// pre-checked item must remain fully deselectable by the user afterward.
export const PRESETS = {
  royalWedding: {
    id: 'royalWedding',
    label: 'Royal Wedding',
    tag: 'Most Popular',
    description: 'Complete multi-day coverage with cinematic storytelling and luxury album options.',
    mapsToEventType: 'weddingCeremonies',
  },
  cinematicPreWedding: {
    id: 'cinematicPreWedding',
    label: 'Cinematic Pre-Wedding',
    tag: 'Trending',
    description: 'Location shoots, portrait-led storytelling and a polished teaser-style result.',
    mapsToEventType: 'preWeddingStory',
  },
  // A third "Bespoke Custom" preset was explicitly removed per brand
  // decision — do not re-add it without confirmation.
};

export const CEREMONIES = {
  engagement: {
    id: 'engagement',
    title: 'Engagement',
    subtitle: 'Capture the ring exchange and stage moments.',
    services: [
      { id: 'eng-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 10000, defaultSelected: true },
      { id: 'eng-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 10000, defaultSelected: true },
      { id: 'eng-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'eng-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'eng-drone', name: 'Drone Coverage', description: 'Premium photography and videography service.', price: 12000, defaultSelected: false },
    ],
  },
  pelliKoduku: {
    id: 'pelliKoduku',
    title: 'Pelli Koduku & Haldi',
    subtitle: 'Groom ceremony and haldi coverage.',
    services: [
      { id: 'pk-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'pk-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'pk-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'pk-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
    ],
  },
  pelliKuthuru: {
    id: 'pelliKuthuru',
    title: 'Pelli Kuthuru & Haldi',
    subtitle: 'Bride ceremony and portraits.',
    services: [
      { id: 'pku-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'pku-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'pku-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'pku-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
    ],
  },
  sangeeth: {
    id: 'sangeeth',
    title: 'Sangeeth',
    subtitle: 'Dance, celebration and party edits.',
    services: [
      { id: 'sg-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'sg-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'sg-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'sg-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
    ],
  },
  grandWedding: {
    id: 'grandWedding',
    title: 'Grand Wedding',
    subtitle: 'Your main wedding day and rituals.',
    services: [
      { id: 'gw-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'gw-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'gw-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 20000, defaultSelected: false },
      { id: 'gw-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 20000, defaultSelected: false },
      { id: 'gw-drone', name: 'Drone Coverage', description: 'Premium photography and videography service.', price: 12000, defaultSelected: false },
    ],
  },
  reception: {
    id: 'reception',
    title: 'Reception',
    subtitle: 'Evening reception coverage.',
    services: [
      { id: 'rc-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'rc-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'rc-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'rc-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
    ],
  },
  luxuryAddons: {
    id: 'luxuryAddons',
    title: 'Luxury Add-ons',
    subtitle: 'Optional enhancements.',
    note: 'Working Hours: 8 Hours (1 Session).',
    services: [
      { id: 'add-led', name: 'LED Wall', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'add-livestream', name: 'Live Streaming', description: 'Premium photography and videography service.', price: 8000, defaultSelected: false },
    ],
  },
  preWeddingShoot: {
    id: 'preWeddingShoot',
    title: 'Pre-Wedding Shoot',
    subtitle: 'Location shoot and portrait storytelling.',
    services: [
      { id: 'pw-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: true },
      { id: 'pw-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'pw-drone', name: 'Drone Coverage', description: 'Premium photography and videography service.', price: 12000, defaultSelected: false },
    ],
  },
  birthdayEvent: {
    id: 'birthdayEvent',
    title: 'Birthday Event',
    subtitle: 'Celebration coverage and portraits.',
    services: [
      { id: 'bd-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 8000, defaultSelected: true },
      { id: 'bd-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 8000, defaultSelected: false },
      { id: 'bd-candid-photo', name: 'Candid Photo', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
      { id: 'bd-candid-video', name: 'Cinematic Video', description: 'Premium photography and videography service.', price: 15000, defaultSelected: false },
    ],
  },
  birthdayAddons: {
    id: 'birthdayAddons',
    title: 'Birthday Add-ons',
    subtitle: 'Optional enhancements for your celebration.',
    services: [
      { id: 'bda-led', name: 'LED Wall', description: 'Premium photography and videography service.', price: 10000, defaultSelected: false },
      { id: 'bda-livestream', name: 'Live Streaming', description: 'Premium photography and videography service.', price: 8000, defaultSelected: false },
    ],
  },
  vrathamRitual: {
    id: 'vrathamRitual',
    title: 'Vratham & Rituals',
    subtitle: 'Housewarming and religious ritual coverage.',
    services: [
      { id: 'vr-trad-photo', name: 'Traditional Photo', description: 'Premium photography and videography service.', price: 8000, defaultSelected: true },
      { id: 'vr-trad-video', name: 'Traditional Video', description: 'Premium photography and videography service.', price: 8000, defaultSelected: false },
    ],
  },
};
