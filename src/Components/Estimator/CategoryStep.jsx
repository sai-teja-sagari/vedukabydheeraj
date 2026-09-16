import { CATEGORIES } from '../../Data/estimatorData';
import { EngagementIcon, CameraIcon, WeddingIcon, MaternityIcon, CakeIcon } from '../Services';

const ICONS = {
  engagement: EngagementIcon,
  camera: CameraIcon,
  wedding: WeddingIcon,
  maternity: MaternityIcon,
  cake: CakeIcon,
};

function CategoryStep({ onSelectCategory }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        Step 1 of 4
      </p>
      <h2 className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        What are we celebrating?
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        Choose the kind of shoot you&apos;re planning — we&apos;ll tailor the packages and ceremonies to match.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-[14px] lg:grid-cols-2">
        {CATEGORIES.map(({ id, label, description, iconKey }) => {
          const Icon = ICONS[iconKey];
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectCategory(id)}
              className="flex items-center gap-4 rounded-md border border-[#E9DCBB] bg-[#F5EDDC] p-5 text-left transition-colors duration-150 hover:border-[#C9A227]"
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#EDE1C4] text-[#9C7620]">
                <Icon />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#241C12]">{label}</h3>
                <p className="mt-1 text-[11.5px] leading-[1.6] text-[#6B5A42]">{description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryStep;
