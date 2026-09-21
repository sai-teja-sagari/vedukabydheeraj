import Link from 'next/link';
import ServicePage from '../../../Components/ServicePage';
import { buildMetadata } from '../../../lib/seoConfig';
import danceDip from '../../../Images/highlights/03_dance_dip.jpg';
import engagementCafeHearts from '../../../Images/highlights/20_engagement_cafe_hearts.jpg';

export const metadata = buildMetadata({
  title: 'Event Photography Services',
  description:
    'Event photography and videography across weddings, pre-weddings, engagements, and birthdays — one studio covering every occasion, with instant online estimates.',
  path: '/event-photography',
  image: danceDip.src,
});

const SECTIONS = [
  {
    heading: 'One studio, every occasion',
    body: 'Veduka by Dheeraj covers wedding photography, pre-wedding shoots, wedding cinematography, birthday and milestone events, and maternity photography — traditional and candid styles, with photo, video, and drone coverage available depending on the event.',
    image: engagementCafeHearts,
    imageAlt: 'Collage of a couple’s cafe date with latte-art hearts and candid laughs',
    focalPoint: 'center 42%',
  },
  {
    heading: 'Engagement, Haldi, Sangeeth, and Reception photography',
    body: 'Every function within a wedding — Engagement, Haldi, Sangeeth, the wedding day, and Reception — can be booked individually with the coverage style that fits it, rather than one fixed package for the whole event.',
  },
];

const FAQS = [
  {
    q: 'What kinds of events do you photograph?',
    a: 'Weddings and every wedding-adjacent ceremony (Engagement, Haldi, Sangeeth, Reception), pre-wedding shoots, birthdays and milestone events, and maternity photography.',
  },
  {
    q: 'Can I book photography for just one function, not a full wedding?',
    a: 'Yes — each ceremony can be booked on its own. Use the Package Estimator to select just the function you need.',
  },
  {
    q: 'How do I get pricing for my event?',
    a: 'The Package Estimator gives an instant, itemized quote based on the event type and coverage you choose. For anything more specific, reach out through the Contact page.',
  },
];

const RELATED = [
  { href: '/wedding-photography', label: 'Wedding Photography', description: 'Coverage for Engagement, Haldi, Sangeeth, and the wedding day.' },
  { href: '/pre-wedding-photography', label: 'Pre-Wedding Photography', description: 'Location shoots and couple portraits.' },
  { href: '/wedding-cinematography', label: 'Wedding Cinematography', description: 'Cinematic wedding films and highlight edits.' },
  { href: '/birthday-photography', label: 'Birthday Photography', description: 'Birthday and milestone event coverage.' },
];

export default function EventPhotographyPage() {
  return (
    <ServicePage
      eyebrow="Event Photography"
      h1="Event Photography & Videography by Veduka by Dheeraj"
      intro="From weddings to birthdays, we cover every celebration with traditional and candid photography, cinematic video, and drone coverage — pick the occasion below to see exactly what’s included."
      heroImage={danceDip}
      heroAlt="Groom in a turban dipping his bride mid-dance in front of a floral wall"
      heroFocalPoint="35% 25%"
      sections={SECTIONS}
      faqs={FAQS}
      relatedServices={RELATED}
      ctaHeading="Not sure which service fits your event?"
      ctaBody="Tell us what you’re celebrating and we’ll point you to the right coverage — or browse our maternity photography in the portfolio."
    >
      <p className="mt-3 text-center text-[12.5px] text-[#6B5A42]">
        We also shoot{' '}
        <Link href="/portfolio?category=maternity" className="font-semibold text-[#9C7620] underline">
          maternity photography
        </Link>{' '}
        — see examples in the portfolio.
      </p>
    </ServicePage>
  );
}
