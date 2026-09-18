import Link from 'next/link';
import Image from 'next/image';
import EstimatorWizard from '../../Components/Estimator/EstimatorWizard';
import BackButton from '../../Components/BackButton';
import { HomeIcon } from '../../Components/Estimator/icons';
import logo from '../../Images/veduka_by_dheeraj_ultraHD_transparent.png';

// Utility/checkout-style flow, not indexable content — kept out of search
// results and the sitemap (see src/app/sitemap.js, src/app/robots.js).
export const metadata = {
  title: 'Package Estimator',
  robots: { index: false, follow: false },
};

// Deliberately outside the (site) route group — this route renders its
// own minimal top bar instead of the full site Navbar/Footer, matching
// the reference design for a focused, checkout-style flow. Back/Home here
// are page-level exits from the estimator entirely — separate from the
// wizard's own in-page step Back button (EstimatorWizard/FinalStep),
// which only moves between steps and never leaves this route.
export default function EstimatorPage() {
  return (
    <div className="min-h-screen bg-[#FBF6EC]">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-[#DCC98F] px-6 py-5">
        <div className="flex justify-start">
          <BackButton fallback="/" />
        </div>

        <div className="flex items-center justify-center gap-3">
          <Image src={logo} alt="Veduka by Dheeraj" className="h-9 w-auto" />
          <span className="hidden rounded-full border border-[#C9A227] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9C7620] sm:inline-block">
            Package Estimator
          </span>
        </div>

        <div className="flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B5A42] transition-colors duration-150 hover:text-[#9C7620] lg:text-[13px]"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      <EstimatorWizard />
    </div>
  );
}
