import '../../Styles/PortfolioPage.css';
import BackButton from '../BackButton';
import PackageEstimator from './PackageEstimator';

// ROUTER NOTE: this page is a standalone route, not a homepage section — it
// needs to be registered in the router config (src/App.jsx), e.g.:
//   import EstimatorPage from './Components/Estimator/EstimatorPage.jsx';
//   <Route path="/estimator" element={<EstimatorPage/>} />
// BookingCTA's "Configure Proposal" button links here.

function EstimatorPage() {
  return (
    <section className="veduka-portfolio bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-20">
      <BackButton />

      <div className="mx-auto mt-6 max-w-[800px] text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-[#9C7620] lg:w-10" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
            Package Estimator
          </p>
          <span className="h-px w-8 bg-[#9C7620] lg:w-10" />
        </div>

        <h1 className="veduka-portfolio__heading mt-4 text-[26px] text-[#241C12] lg:text-5xl">
          Build Your Proposal
        </h1>

        <p className="mt-4 text-[12px] leading-[1.7] text-[#6B5A42] lg:text-base">
          A few quick steps and we&apos;ll have a custom estimate in your inbox — no call required.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[860px] rounded-2xl border border-[#EEE6D2] bg-white p-6 lg:mt-14 lg:p-10">
        <PackageEstimator />
      </div>
    </section>
  );
}

export default EstimatorPage;
