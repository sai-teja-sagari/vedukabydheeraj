import { ITEM_GROUPS } from '../../Data/estimatorData';

const CheckIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12.5 9.5 17 19 7" />
  </svg>
);

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function ItemsStep({ categoryId, selectedItemIds, onToggleItem }) {
  const groups = ITEM_GROUPS[categoryId] ?? [];
  const selectedSet = new Set(selectedItemIds);

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        Step 3 of 4
      </p>
      <h2 className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        Customize your coverage
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        Your package pre-selected a starting set — add or remove anything to match what you actually need.
      </p>

      <div className="mt-8 flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.id}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
              {group.label}
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              {group.items.map((item) => {
                const isSelected = selectedSet.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => onToggleItem(item.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-150 ${
                      isSelected
                        ? 'border-[#C9A227] bg-[#FBF6EC]'
                        : 'border-[#E9DCBB] bg-white hover:border-[#C9A227]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? 'border-[#C9A227] bg-[#C9A227] text-[#FBF6EC]' : 'border-[#DCC98F] text-transparent'
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium text-[#241C12]">{item.label}</span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-[#9C7620]">
                      {formatRupees(item.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsStep;
