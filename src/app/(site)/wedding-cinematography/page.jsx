import ServicePage from '../../../Components/ServicePage';
import { buildMetadata } from '../../../lib/seoConfig';
import weddingMomentsRiceToss from '../../../Images/highlights/35_wedding_moments_rice_toss.png';
import ringMomentCloseup from '../../../Images/highlights/39_ring_moment_closeup.png';
import blackSuitCouple from '../../../Images/highlights/08_black_suit_couple.png';
import veilCheekKiss from '../../../Images/highlights/13_veil_cheek_kiss.jpg';

export const metadata = buildMetadata({
  title: 'Wedding Cinematography & Videography',
  description:
    'Cinematic wedding films and teaser videos alongside our photography coverage — capturing motion, sound, and moments a photo alone can’t.',
  path: '/wedding-cinematography',
  image: blackSuitCouple.src,
});

const SECTIONS = [
  {
    heading: 'Cinematic wedding films, shot alongside photography',
    body: [
      'Our wedding cinematography runs as part of the same ceremony coverage as our photography — Engagement, Haldi, Sangeeth, the wedding day, and Reception can each be booked with cinematic video, either alongside traditional/candid photography or on its own.',
      'The goal isn’t just recorded footage — it’s an edited, cinematic wedding film that captures the sound and motion a photograph can’t: vows, laughter, music, the noise of the room.',
    ],
    image: weddingMomentsRiceToss,
    imageAlt: 'Groom and bride exchanging rice grains over a ceremonial vessel during their traditional wedding rites',
    focalPoint: 'center 47%',
  },
  {
    heading: 'Wedding videography for every scale of function',
    body: 'Whether it’s an intimate Haldi at home or a large Reception, cinematic video coverage is available per ceremony — so you can add video where it matters most (a Sangeeth performance, for example) without committing to full-day coverage across every function.',
    image: veilCheekKiss,
    imageAlt: 'Bride in a lace veil kissing the groom on the cheek, surrounded by soft greenery',
    imagePosition: 'right',
    focalPoint: '65% 40%',
  },
  {
    heading: 'Highlight reels and teaser edits',
    body: 'Alongside full ceremony coverage, we edit shorter highlight reels — useful for sharing on WhatsApp or social media soon after the event, ahead of the full edit.',
    image: ringMomentCloseup,
    imageAlt: 'Groom in a lavender turban and his bride sharing a quiet, close look at night, showing off their rings',
    focalPoint: 'center 40%',
  },
];

const FAQS = [
  {
    q: 'Is cinematography available for every wedding ceremony?',
    a: 'Yes — Engagement, Pelli Koduku & Haldi, Pelli Kuthuru & Haldi, Sangeeth, the Grand Wedding, and Reception can each include cinematic video coverage, bookable individually or together.',
  },
  {
    q: 'Do you offer drone videography?',
    a: 'Drone coverage is available as an add-on for select ceremonies, useful for venue and large-gathering shots alongside ground-level cinematography.',
  },
  {
    q: 'Can we book video without photography?',
    a: 'Yes, cinematic video can be booked on its own per ceremony — build your combination on the Package Estimator or tell us directly through the Contact page.',
  },
  {
    q: 'How soon after the wedding do we get the edited film?',
    a: 'Turnaround depends on how many ceremonies were filmed — reach out through the Contact page with your event details and we’ll confirm a timeline.',
  },
];

const RELATED = [
  { href: '/wedding-photography', label: 'Wedding Photography', description: 'Traditional and candid photography for every ceremony.' },
  { href: '/pre-wedding-photography', label: 'Pre-Wedding Photography', description: 'Location shoots and a cinematic pre-wedding teaser.' },
  { href: '/event-photography', label: 'Event Photography', description: 'Overview of every occasion we cover.' },
  { href: '/portfolio', label: 'Portfolio', description: 'Browse real wedding coverage from past celebrations.' },
];

export default function WeddingCinematographyPage() {
  return (
    <ServicePage
      eyebrow="Wedding Cinematography"
      h1="Wedding Cinematography & Videography"
      intro="Cinematic wedding films and highlight edits shot alongside our photography coverage — capturing the motion, sound, and energy of your ceremonies, not just still frames."
      heroImage={blackSuitCouple}
      heroAlt="Couple in elegant black formalwear sharing a quiet look beneath the palms at their reception"
      heroFocalPoint="center 28%"
      sections={SECTIONS}
      faqs={FAQS}
      relatedServices={RELATED}
      ctaHeading="Want a cinematic film of your wedding?"
      ctaBody="Get an instant estimate for video coverage across your ceremonies, or reach out directly to discuss your wedding film."
    />
  );
}
