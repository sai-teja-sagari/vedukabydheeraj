import AboutPhotographer from '../../../Components/AboutPhotographer';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'Meet Dheeraj, founder and lead photographer of Veduka by Dheeraj — capturing weddings, pre-wedding shoots, engagements, and maternity stories across South India.',
  path: '/about',
});

export default function About() {
  return <AboutPhotographer headingLevel="h1" />;
}
