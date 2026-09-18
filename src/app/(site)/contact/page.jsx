import Contact from '../../../Components/Contact';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Veduka by Dheeraj to enquire about wedding photography, pre-wedding shoots, birthdays, or event coverage. We reply to most enquiries within a few hours.',
  path: '/contact',
});

export default function ContactRoute() {
  return <Contact standalone />;
}
