import Hero from '../../Components/Hero';
import AboutPhotographer from '../../Components/AboutPhotographer';
import Services from '../../Components/Services';
import FeaturedHighlights from '../../Components/FeaturedHighlights';
import Contact from '../../Components/Contact';
import { buildMetadata } from '../../lib/seoConfig';

export const metadata = buildMetadata({
  title: 'Wedding Photography & Cinematography in Tandur, Telangana',
  description:
    'Veduka by Dheeraj is a wedding photography and cinematography studio in Tandur, Telangana, capturing weddings, pre-weddings, engagements, birthdays, and maternity stories with a candid, storytelling approach.',
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
