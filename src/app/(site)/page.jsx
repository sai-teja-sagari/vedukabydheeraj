import Hero from '../../Components/Hero';
import AboutPhotographer from '../../Components/AboutPhotographer';
import Services from '../../Components/Services';
import FeaturedHighlights from '../../Components/FeaturedHighlights';
import Contact from '../../Components/Contact';
import { buildMetadata } from '../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Wedding Photography & Cinematography in South India',
  description:
    'Veduka by Dheeraj captures weddings, pre-wedding shoots, engagements, birthdays, and maternity stories with candid and traditional photography across South India.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedHighlights />
      <Contact />
      <AboutPhotographer />
    </>
  );
}
