import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import StoryPopup from '../../Components/StoryPopup';

// This layout wraps every page EXCEPT /estimator (which lives outside the
// (site) route group deliberately, so it can render its own minimal
// logo + stepper chrome instead of the full site Navbar/Footer).
export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <StoryPopup />
    </>
  );
}
