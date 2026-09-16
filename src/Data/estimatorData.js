// Package Estimator data source.
//
// NOTE: every package tier, ceremony/add-on item, and price below is
// placeholder business data — replace with Veduka by Dheeraj's real
// packages and pricing before shipping.
//
// calculateTotal() and getSelectedBreakdown() are pure functions (no React,
// no DOM) so they can run identically wherever this data is used — today
// that's just the client-side estimator, but this keeps the door open to
// reusing them server-side later without a rewrite.

export const CATEGORIES = [
  {
    id: 'engagement',
    label: 'Engagement',
    description: 'Candid frames of the moment two families become one.',
    iconKey: 'engagement',
  },
  {
    id: 'pre-post-wedding',
    label: 'Pre & Post Wedding',
    description: 'Dreamy sessions before and after the big celebration.',
    iconKey: 'camera',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    description: 'Every ritual, every tear, every laugh — captured in full.',
    iconKey: 'wedding',
  },
  {
    id: 'maternity',
    label: 'Maternity Shoot',
    description: 'Gentle, glowing portraits of life about to begin.',
    iconKey: 'maternity',
  },
  {
    id: 'birthday-baby',
    label: 'Birthday & Born Baby Shoots',
    description: 'Milestones and tiny toes, celebrated in style.',
    iconKey: 'cake',
  },
];

// Each category maps to an array of item groups (Wedding has one group per
// ceremony day; every other category has a single flat group) — ItemsStep
// and calculateTotal() work off this same shape either way, no branching
// needed per category.
export const ITEM_GROUPS = {
  wedding: [
    {
      id: 'engagement-day',
      label: 'Engagement',
      items: [
        { id: 'eng-candid', label: 'Candid Photography', price: 8000 },
        { id: 'eng-traditional', label: 'Traditional Photography', price: 6000 },
        { id: 'eng-video', label: 'Cinematic Highlight Video', price: 10000 },
      ],
    },
    {
      id: 'haldi-mehendi',
      label: 'Haldi & Mehendi',
      items: [
        { id: 'haldi-candid', label: 'Haldi Candid Coverage', price: 7000 },
        { id: 'mehendi-candid', label: 'Mehendi Candid Coverage', price: 7000 },
        { id: 'haldi-video', label: 'Haldi & Mehendi Video', price: 10000 },
      ],
    },
    {
      id: 'sangeet',
      label: 'Sangeet',
      items: [
        { id: 'sangeet-candid', label: 'Sangeet Candid Coverage', price: 8000 },
        { id: 'sangeet-video', label: 'Sangeet Cinematic Video', price: 12000 },
      ],
    },
    {
      id: 'wedding-day',
      label: 'Wedding Day',
      items: [
        { id: 'wd-candid', label: 'Candid Photography', price: 15000 },
        { id: 'wd-traditional', label: 'Traditional Photography', price: 10000 },
        { id: 'wd-video', label: 'Cinematic Wedding Film', price: 25000 },
        { id: 'wd-drone', label: 'Drone Coverage', price: 10000 },
        { id: 'wd-second-shooter', label: 'Second Photographer', price: 8000 },
        { id: 'wd-live-stream', label: 'Live Streaming', price: 15000 },
      ],
    },
    {
      id: 'reception',
      label: 'Reception',
      items: [
        { id: 'recep-candid', label: 'Candid Photography', price: 9000 },
        { id: 'recep-video', label: 'Cinematic Video', price: 12000 },
        { id: 'recep-drone', label: 'Drone Coverage', price: 6000 },
        { id: 'recep-album', label: 'Premium Photo Album', price: 9000 },
      ],
    },
  ],

  engagement: [
    {
      id: 'engagement-shoot',
      label: 'Engagement Shoot',
      items: [
        { id: 'eng2-candid', label: 'Candid Photography', price: 8000 },
        { id: 'eng2-traditional', label: 'Traditional Photography', price: 6000 },
        { id: 'eng2-video', label: 'Cinematic Highlight Video', price: 10000 },
        { id: 'eng2-drone', label: 'Drone Coverage', price: 5000 },
        { id: 'eng2-second-location', label: 'Second Location / Outfit Change', price: 4000 },
      ],
    },
  ],

  'pre-post-wedding': [
    {
      id: 'pre-post-session',
      label: 'Pre & Post Wedding Session',
      items: [
        { id: 'pre-photo', label: 'Pre-Wedding Photography', price: 10000 },
        { id: 'pre-video', label: 'Pre-Wedding Cinematic Video', price: 15000 },
        { id: 'post-photo', label: 'Post-Wedding Photography', price: 8000 },
        { id: 'pre-outfit-addon', label: 'Extra Outfit / Location Change', price: 3000 },
        { id: 'pre-drone', label: 'Drone Coverage', price: 5000 },
      ],
    },
  ],

  maternity: [
    {
      id: 'maternity-session',
      label: 'Maternity Shoot',
      items: [
        { id: 'mat-studio', label: 'Indoor Studio Session', price: 6000 },
        { id: 'mat-outdoor', label: 'Outdoor Location Shoot', price: 8000 },
        { id: 'mat-video', label: 'Short Video Teaser', price: 5000 },
        { id: 'mat-partner', label: 'Partner / Family Inclusion', price: 2000 },
        { id: 'mat-print', label: 'Framed Print Set', price: 3000 },
      ],
    },
  ],

  'birthday-baby': [
    {
      id: 'birthday-baby-session',
      label: 'Birthday & Baby Shoot',
      items: [
        { id: 'bday-photo', label: 'Birthday Photography', price: 6000 },
        { id: 'bday-video', label: 'Birthday Video Coverage', price: 5000 },
        { id: 'cake-smash', label: 'Cake Smash Session', price: 3000 },
        { id: 'baby-studio', label: 'Born Baby Studio Session', price: 5000 },
        { id: 'baby-props', label: 'Themed Props & Decor', price: 2500 },
      ],
    },
  ],
};

export const PACKAGE_TIERS = {
  wedding: [
    {
      id: 'essential',
      label: 'Essential',
      tagline: 'Core wedding-day coverage.',
      defaultItemIds: ['wd-candid', 'wd-traditional'],
    },
    {
      id: 'classic',
      label: 'Classic',
      tagline: 'Fuller ceremony and reception coverage.',
      defaultItemIds: [
        'haldi-candid',
        'mehendi-candid',
        'wd-candid',
        'wd-traditional',
        'wd-video',
        'recep-candid',
        'recep-video',
      ],
    },
    {
      id: 'royal',
      label: 'Royal',
      tagline: 'Every ceremony, every angle.',
      defaultItemIds: [
        'eng-candid',
        'eng-video',
        'haldi-candid',
        'mehendi-candid',
        'haldi-video',
        'sangeet-candid',
        'sangeet-video',
        'wd-candid',
        'wd-traditional',
        'wd-video',
        'wd-drone',
        'wd-second-shooter',
        'recep-candid',
        'recep-video',
        'recep-drone',
      ],
    },
  ],

  engagement: [
    { id: 'essential', label: 'Essential', tagline: 'Candid coverage of the day.', defaultItemIds: ['eng2-candid'] },
    {
      id: 'classic',
      label: 'Classic',
      tagline: 'Photography plus a highlight film.',
      defaultItemIds: ['eng2-candid', 'eng2-traditional', 'eng2-video'],
    },
    {
      id: 'royal',
      label: 'Royal',
      tagline: 'The full engagement experience.',
      defaultItemIds: ['eng2-candid', 'eng2-traditional', 'eng2-video', 'eng2-drone', 'eng2-second-location'],
    },
  ],

  'pre-post-wedding': [
    { id: 'essential', label: 'Essential', tagline: 'Pre-wedding photography.', defaultItemIds: ['pre-photo'] },
    {
      id: 'classic',
      label: 'Classic',
      tagline: 'Pre-wedding photography and film.',
      defaultItemIds: ['pre-photo', 'pre-video'],
    },
    {
      id: 'royal',
      label: 'Royal',
      tagline: 'Pre and post-wedding, fully covered.',
      defaultItemIds: ['pre-photo', 'pre-video', 'post-photo', 'pre-outfit-addon', 'pre-drone'],
    },
  ],

  maternity: [
    { id: 'essential', label: 'Essential', tagline: 'An indoor studio session.', defaultItemIds: ['mat-studio'] },
    {
      id: 'classic',
      label: 'Classic',
      tagline: 'Studio and an outdoor location.',
      defaultItemIds: ['mat-studio', 'mat-outdoor'],
    },
    {
      id: 'royal',
      label: 'Royal',
      tagline: 'The complete maternity experience.',
      defaultItemIds: ['mat-studio', 'mat-outdoor', 'mat-video', 'mat-partner', 'mat-print'],
    },
  ],

  'birthday-baby': [
    { id: 'essential', label: 'Essential', tagline: 'Birthday photography.', defaultItemIds: ['bday-photo'] },
    {
      id: 'classic',
      label: 'Classic',
      tagline: 'Photography, video, and cake smash.',
      defaultItemIds: ['bday-photo', 'bday-video', 'cake-smash'],
    },
    {
      id: 'royal',
      label: 'Royal',
      tagline: 'The full celebration, styled and captured.',
      defaultItemIds: ['bday-photo', 'bday-video', 'cake-smash', 'baby-studio', 'baby-props'],
    },
  ],
};

export function calculateTotal(selectedItemIds, itemGroups) {
  const selected = new Set(selectedItemIds);
  let total = 0;
  itemGroups.forEach((group) => {
    group.items.forEach((item) => {
      if (selected.has(item.id)) total += item.price;
    });
  });
  return total;
}

// Groups only the selected items under their ceremony/category heading, in
// the same order as itemGroups — used to build a readable enquiry email
// instead of a flat list.
export function getSelectedBreakdown(selectedItemIds, itemGroups) {
  const selected = new Set(selectedItemIds);
  return itemGroups
    .map((group) => ({
      groupLabel: group.label,
      items: group.items.filter((item) => selected.has(item.id)),
    }))
    .filter((group) => group.items.length > 0);
}
