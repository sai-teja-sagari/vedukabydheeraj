const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Persists across steps 2-4 so the running total is always visible while
// choosing a package/items and while filling in contact details. The
// primary button is either an in-wizard "Continue" (advances currentStepIndex)
// or, on the final step, a real form submit — wired via the HTML form/id
// attribute pair so this bar can trigger FinalStep's <form> without prop
// drilling a ref through PackageEstimator.
function StickyTotalBar({ total, itemCount, onBack, primaryLabel, onPrimaryClick, primaryType = 'button', primaryFormId, primaryDisabled }) {
  return (
    <div className="veduka-estimator__bar fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 border-t border-[#DCC98F] bg-[#FBF6EC]/95 px-5 py-4 shadow-[0_-4px_14px_rgba(36,28,18,0.08)] backdrop-blur-sm lg:px-16">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
          Estimated total
        </p>
        <p className="mt-0.5 text-lg font-bold text-[#241C12]">
          {formatRupees(total)}
          <span className="ml-1.5 text-xs font-normal text-[#6B5A42]">
            · {itemCount} item{itemCount === 1 ? '' : 's'}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-[#DCC98F] px-5 py-2.5 text-sm font-medium text-[#4A3B2A] hover:border-[#9C7620]"
        >
          Back
        </button>
        <button
          type={primaryType}
          form={primaryFormId}
          onClick={primaryType === 'button' ? onPrimaryClick : undefined}
          disabled={primaryDisabled}
          className="flex items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-6 py-2.5 text-sm font-semibold text-[#FBF6EC] hover:opacity-90 disabled:opacity-60"
        >
          {primaryLabel}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default StickyTotalBar;
