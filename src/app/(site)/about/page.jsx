import AboutPhotographer from '../../../Components/AboutPhotographer';
import { buildMetadata } from '../../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'About Veduka by Dheeraj',
  description:
    'Meet Dheeraj, founder and lead photographer of Veduka by Dheeraj, a wedding and lifestyle photography studio based in Tandur, Telangana.',
  path: '/about',
});

export default function About() {
  return <AboutPhotographer headingLevel="h1" />;
}
