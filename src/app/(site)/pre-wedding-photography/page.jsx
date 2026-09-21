import ServicePage from '../../../Components/ServicePage';
import { buildMetadata } from '../../../lib/seoConfig';
import redDressBeach from '../../../Images/highlights/01_red_dress_beach.jpg';
import horseBeach from '../../../Images/highlights/07_horse_beach.jpg';
import preweddingBikeForest from '../../../Images/highlights/19_prewedding_bike_forest.jpg';
import preweddingSareeTwirl from '../../../Images/highlights/33_prewedding_saree_twirl.jpg';

export const metadata = buildMetadata({
  title: 'Pre-Wedding Photography & Photoshoot',
  description:
    'Pre-wedding photography and couple photoshoots with location shoots, candid portraits, and cinematic video — styled around your story, not a fixed template.',
  path: '/pre-wedding-photography',
  image: redDressBeach.src,
});

const SECTIONS = [
  {
    heading: 'Pre-wedding photoshoots, shot on location',
    body: [
      'Our pre-wedding photography is built around real locations rather than a studio backdrop — beaches, forests, heritage architecture, gardens — chosen to match the mood you’re going for, whether that’s playful, cinematic, or quiet and intimate.',
      'Coverage includes candid photography for natural, in-motion shots and a cinematic teaser video for couples who want a short film alongside the photos.',
    ],
    image: horseBeach,
    imageAlt: 'Couple walking a horse along the shoreline on a sunlit beach',
    focalPoint: 'center 42%',
  },
  {
    heading: 'Couple photography that doesn’t feel staged',
    body: 'Rather than a fixed list of poses, we shoot around genuine interaction between the two of you — walking, laughing, riding, twirling — so the results read as a couple’s actual chemistry rather than a rehearsed shoot.',
    image: preweddingBikeForest,
    imageAlt: 'Couple riding a motorcycle through a misty forest, her blue ruffled gown catching the wind',
    imagePosition: 'right',
    focalPoint: '35% 50%',
  },
  {
    heading: 'Pre-wedding videography for a cinematic teaser',
    body: 'Alongside photography, a short cinematic video captures movement and sound a photo can’t — useful as a save-the-date teaser or simply as its own keepsake ahead of the wedding.',
    image: preweddingSareeTwirl,
    imageAlt: 'Bride twirling the pallu of her cream and red silk saree, smiling beneath a canopy of palm trees',
    focalPoint: 'center 35%',
  },
];

const FAQS = [
  {
    q: 'What’s included in a pre-wedding photoshoot?',
    a: 'Candid photography is the core of every pre-wedding shoot, with cinematic video and drone coverage available as add-ons. You can build the exact combination on the Package Estimator.',
  },
  {
    q: 'Can we choose our own shoot location?',
    a: 'Yes — tell us the look you’re going for (beach, forest, heritage, urban) when you enquire, and we’ll help finalize a location that fits.',
  },
  {
    q: 'How long does a pre-wedding shoot take?',
    a: 'Most pre-wedding shoots run as a single session; if you want multiple locations or outfit changes, let us know when you enquire so we can plan the timing accordingly.',
  },
  {
    q: 'Is pre-wedding videography available on its own, without photography?',
    a: 'Pre-wedding videography can be booked alongside photography or discussed separately — reach out through the Contact page with what you have in mind.',
  },
];

const RELATED = [
  { href: '/wedding-photography', label: 'Wedding Photography', description: 'Coverage for Engagement, Haldi, Sangeeth, and the wedding day.' },
  { href: '/wedding-cinematography', label: 'Wedding Cinematography', description: 'Cinematic wedding films and teaser videos.' },
  { href: '/event-photography', label: 'Event Photography', description: 'Overview of every occasion we cover.' },
  { href: '/portfolio', label: 'Portfolio', description: 'Browse real pre-wedding shoots from past couples.' },
];

export default function PreWeddingPhotographyPage() {
  return (
    <ServicePage
      eyebrow="Pre-Wedding Photography"
      h1="Pre-Wedding Photography & Couple Photoshoots"
      intro="Location-based pre-wedding photography and videography — candid couple portraits and a cinematic teaser video, styled around your story rather than a fixed template."
      heroImage={redDressBeach}
      heroAlt="Bride and groom on the beach at dusk, her red gown trailing in the wind"
      heroFocalPoint="25% 55%"
      sections={SECTIONS}
      faqs={FAQS}
      relatedServices={RELATED}
      ctaHeading="Planning a pre-wedding shoot?"
      ctaBody="Get an instant estimate for your pre-wedding coverage, or tell us your vision directly and we’ll help plan the shoot."
    />
  );
}
