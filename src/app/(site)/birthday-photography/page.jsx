import ServicePage from '../../../Components/ServicePage';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Birthday Photography & Event Coverage',
  description:
    'Birthday and milestone event photography with traditional and candid coverage, plus LED wall and live streaming add-ons for larger celebrations.',
  path: '/birthday-photography',
});

const SECTIONS = [
  {
    heading: 'Birthday event photography, from intimate to large',
    body: 'Our birthday coverage includes traditional and candid photography, with cinematic video available alongside for milestone celebrations you want fully documented — not just a handful of posed photos.',
  },
  {
    heading: 'Birthday party photography add-ons',
    body: 'For larger birthday events, LED wall displays and live streaming can be added so guests who can’t attend in person can still be part of the celebration in real time.',
  },
  {
    heading: 'Born baby and milestone shoots',
    body: 'Alongside birthday event coverage, we also shoot born baby and early-milestone sessions — smaller, calmer shoots suited to newborns and very young children.',
  },
];

const FAQS = [
  {
    q: 'What’s included in birthday photography coverage?',
    a: 'Traditional photography and candid photography are both available, with candid video and add-ons like LED wall displays and live streaming for bigger events. Build your exact combination on the Package Estimator.',
  },
  {
    q: 'Do you shoot smaller, at-home birthday celebrations?',
    a: 'Yes — coverage scales to the event, from an intimate at-home celebration to a larger hall function.',
  },
  {
    q: 'Can you live-stream a birthday event for guests who can’t attend?',
    a: 'Yes, live streaming is available as an add-on alongside standard photography and video coverage.',
  },
  {
    q: 'Do you do born baby or newborn shoots?',
    a: 'Yes, born baby and early-milestone shoots are part of our birthday and milestone coverage — reach out through the Contact page to plan one.',
  },
];

const RELATED = [
  { href: '/event-photography', label: 'Event Photography', description: 'Overview of every occasion we cover.' },
  { href: '/wedding-photography', label: 'Wedding Photography', description: 'Coverage for Engagement, Haldi, Sangeeth, and the wedding day.' },
  { href: '/pre-wedding-photography', label: 'Pre-Wedding Photography', description: 'Location shoots and couple portraits.' },
  { href: '/contact', label: 'Contact Us', description: 'Tell us about your event and get a direct quote.' },
];

export default function BirthdayPhotographyPage() {
  return (
    <ServicePage
      eyebrow="Birthday Photography"
      h1="Birthday & Milestone Event Photography"
      intro="Traditional and candid birthday photography and videography, with LED wall and live streaming add-ons for larger celebrations — scaled to fit anything from an intimate family gathering to a full hall event."
      sections={SECTIONS}
      faqs={FAQS}
      relatedServices={RELATED}
      ctaHeading="Planning a birthday celebration?"
      ctaBody="Get an instant estimate for your birthday event coverage, or reach out directly to discuss what you need."
    />
  );
}
