import ServicePage from '../../../Components/ServicePage';
import { buildMetadata } from '../../../lib/seoConfig';
import bridalPortraitMakeupCollage from '../../../Images/highlights/bridal_portrait_makeup_collage.jpg';
import engagementTempleSteps from '../../../Images/highlights/21_engagement_temple_steps.jpg';
import mehndiBridePortrait from '../../../Images/highlights/37_mehndi_bride_portrait.jpg';
import danceDip from '../../../Images/highlights/03_dance_dip.jpg';
import receptionCheekKiss from '../../../Images/highlights/40_reception_cheek_kiss.jpg';

export const metadata = buildMetadata({
  title: 'Wedding Photography & Videography',
  description:
    'Traditional and candid wedding photography across Engagement, Haldi, Sangeeth, the wedding day, and Reception. Real coverage, real ceremonies, transparent packages.',
  path: '/wedding-photography',
  image: bridalPortraitMakeupCollage.src,
});

const SECTIONS = [
  {
    heading: 'Wedding photography that covers every ceremony',
    body: [
      'A South Indian wedding isn’t one event — it’s a sequence of them. Our wedding photographer and cinematography coverage is built around that reality, with dedicated coverage for Engagement, Pelli Koduku & Haldi, Pelli Kuthuru & Haldi, Sangeeth, the Grand Wedding day, and Reception.',
      'Each ceremony can be booked with traditional photography, candid photography, cinematic video, or drone coverage — independently, so you’re not paying for coverage you don’t need on a smaller function.',
    ],
    image: engagementTempleSteps,
    imageAlt: 'Couple sitting together on ancient stone steps during their engagement ceremony',
    focalPoint: '78% 60%',
  },
  {
    heading: 'Candid wedding photography, alongside traditional coverage',
    body: 'We shoot both styles side by side: traditional wedding photography for the formal rituals your family will want documented cleanly, and candid wedding photography for the in-between moments — a shared laugh, a nervous glance, a grandmother’s tears — that traditional coverage alone tends to miss.',
    image: mehndiBridePortrait,
    imageAlt: 'Close-up of a smiling bride with intricate mehndi on her hands and jasmine garlands around her neck',
    imagePosition: 'right',
    focalPoint: 'center 25%',
  },
  {
    heading: 'Sangeeth and reception coverage built for movement',
    body: 'Sangeeth and Reception are the two functions where the day moves fastest — dance performances, entrances, surprise moments. Our coverage for these leans on candid photography and cinematic video specifically because static, posed shots miss most of what actually happens on a dance floor.',
    image: danceDip,
    imageAlt: 'Groom in a turban dipping his bride mid-dance in front of a floral wall at the wedding reception',
    focalPoint: '35% 30%',
  },
  {
    heading: 'Wedding photo and video packages, estimated instantly',
    body: 'Instead of a fixed package menu, use our online Package Estimator to build a quote from the ceremonies you’re actually having — pick your functions, choose photo/video/drone per ceremony, and see the running total as you go. No back-and-forth needed just to get a starting number.',
    image: receptionCheekKiss,
    imageAlt: 'Bride in a shimmering lavender gown kissing her groom on the cheek in front of a flower wall at their reception',
    imagePosition: 'right',
    focalPoint: 'center 28%',
  },
];

const FAQS = [
  {
    q: 'Which wedding ceremonies do you cover?',
    a: 'Engagement, Pelli Koduku & Haldi, Pelli Kuthuru & Haldi, Sangeeth, the main Grand Wedding ceremony, and Reception — each can be booked separately or together depending on which functions you’re hosting.',
  },
  {
    q: 'What’s the difference between traditional and candid wedding photography?',
    a: 'Traditional photography covers posed family portraits and ritual documentation in a formal style. Candid photography captures unposed, in-the-moment shots as the day unfolds. Most couples book both for full coverage, but each is available on its own per ceremony.',
  },
  {
    q: 'Do you offer drone coverage for weddings?',
    a: 'Yes, drone coverage is available as an add-on for select ceremonies (including Engagement and the Grand Wedding), useful for venue establishing shots and large gatherings.',
  },
  {
    q: 'How do I get an exact price for my wedding?',
    a: 'Use the Package Estimator to select your ceremonies and coverage type for an instant, itemized estimate, or send us your wedding date and functions through the Contact page for a direct quote.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Popular wedding dates fill up quickly during the wedding season, so we recommend reaching out as early as possible once your date is fixed.',
  },
];

const RELATED = [
  { href: '/pre-wedding-photography', label: 'Pre-Wedding Photography', description: 'Location shoots and couple portraits before the big day.' },
  { href: '/wedding-cinematography', label: 'Wedding Cinematography', description: 'Cinematic wedding films and teaser videos.' },
  { href: '/event-photography', label: 'Event Photography', description: 'Overview of every occasion we cover.' },
  { href: '/portfolio', label: 'Portfolio', description: 'Browse real wedding coverage from past celebrations.' },
];

export default function WeddingPhotographyPage() {
  return (
    <ServicePage
      eyebrow="Wedding Photography"
      h1="Wedding Photography & Videography by Veduka by Dheeraj"
      intro="Traditional and candid wedding photography and videography across every ceremony — Engagement, Haldi, Sangeeth, the wedding day, and Reception — with coverage you can build around the functions you’re actually hosting."
      heroImage={bridalPortraitMakeupCollage}
      heroAlt="Bridal portrait collage: a smiling bride in a red and white saree, the couple's hands during a ritual, bridal makeup and cosmetics, and the bride posing outdoors under foliage"
      sections={SECTIONS}
      faqs={FAQS}
      relatedServices={RELATED}
      ctaHeading="Ready to plan your wedding coverage?"
      ctaBody="Build an instant estimate for your ceremonies, or reach out directly and we’ll help you put together the right coverage."
    />
  );
}
