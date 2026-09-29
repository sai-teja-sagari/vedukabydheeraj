import Contact from '../../../Components/Contact';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Contact Veduka by Dheeraj',
  description:
    'Contact Veduka by Dheeraj in Tandur, Telangana to enquire about wedding photography, pre-wedding shoots, birthdays, maternity stories, or event coverage.',
  path: '/contact',
});

export default function ContactRoute() {
  return <Contact standalone />;
}
