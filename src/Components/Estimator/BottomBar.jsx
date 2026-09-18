import { ArrowLeftIcon, ArrowRightIcon, PaperPlaneIcon } from './icons';

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Persistent across every step, including Step 1 (starts at ₹0 / 0 items).
// Back is omitted entirely on the first step — there's nothing to go back
// to within the wizard yet. On the final step the primary button becomes a
// real form submit (via the form/id attribute pair) instead of a plain
// "advance the step index" click.
function BottomBar({
  total,
  itemCount,
  showBack,
  onBack,
  primaryLabel,
  onPrimaryClick,
  isFinalStep,
  primaryFormId,
  primaryDisabled,
}) {
  return (
    <div className="veduka-estimator__bar fixed inset-x-0 bottom-0 z-30 flex flex-col gap-3 border-t border-[#DCC98F] bg-[#FBF6EC]/95 px-5 py-4 shadow-[0_-4px_14px_rgba(36,28,18,0.08)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between lg:px-16">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
          Estimated total ({itemCount} item{itemCount === 1 ? '' : 's'})
        </p>
        <p className="veduka-portfolio__heading mt-0.5 text-xl font-bold text-[#241C12]">{formatRupees(total)}</p>
      </div>

      <div className="flex items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to previous step"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCC98F] text-[#4A3B2A] hover:border-[#9C7620]"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
        )}
        <button
          type={isFinalStep ? 'submit' : 'button'}
          form={isFinalStep ? primaryFormId : undefined}
          onClick={isFinalStep ? undefined : onPrimaryClick}
          disabled={primaryDisabled}
          className="flex items-center justify-center gap-2 rounded-full bg-[#0F2A1E] px-6 py-3 text-sm font-semibold text-[#FBF6EC] hover:opacity-90 disabled:opacity-50"
        >
          {primaryLabel}
          {isFinalStep ? <PaperPlaneIcon className="h-4 w-4" /> : <ArrowRightIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

export default BottomBar;
