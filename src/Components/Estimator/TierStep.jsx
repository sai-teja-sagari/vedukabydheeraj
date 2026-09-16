import { PACKAGE_TIERS, CATEGORIES } from '../../Data/estimatorData';

function TierStep({ categoryId, tierId, onSelectTier }) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const tiers = PACKAGE_TIERS[categoryId] ?? [];

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        Step 2 of 4
      </p>
      <h2 className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        Choose a package for your {category?.label}
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        Each package pre-selects a set of coverage — you can fine-tune every item on the next step.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-[14px] lg:grid-cols-3">
        {tiers.map(({ id, label, tagline }) => {
          const isActive = tierId === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectTier(id)}
              className={`rounded-md border p-5 text-left transition-colors duration-150 ${
                isActive
                  ? 'border-[#0F2A1E] bg-[#0F2A1E] text-[#FBF6EC]'
                  : 'border-[#E9DCBB] bg-[#F5EDDC] text-[#241C12] hover:border-[#C9A227]'
              }`}
            >
              <h3 className="text-base font-semibold">{label}</h3>
              <p className={`mt-1.5 text-[12px] leading-[1.6] ${isActive ? 'text-[#D8C7A0]' : 'text-[#6B5A42]'}`}>
                {tagline}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TierStep;
