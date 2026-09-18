import { CameraIcon, VideoIcon, CheckIcon } from '../icons';

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function serviceIcon(name) {
  return /video|streaming|teaser/i.test(name) ? VideoIcon : CameraIcon;
}

// One data-driven component reused for every ceremony — CEREMONIES[id]
// supplies the title/subtitle/services, nothing ceremony-specific is
// hardcoded here.
function CeremonyStep({ headingRef, ceremony, stepLabel, selectedServiceIds, onToggleService }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        <span aria-hidden="true">✦</span> {stepLabel}
      </p>
      <h2 ref={headingRef} tabIndex={-1} className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        {ceremony.title}
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">{ceremony.subtitle}</p>
      {ceremony.note && <p className="mt-1 text-[12px] italic text-[#9C7620]">{ceremony.note}</p>}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ceremony.services.map((service) => {
          const Icon = serviceIcon(service.name);
          const isSelected = selectedServiceIds.has(service.id);
          return (
            <button
              key={service.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggleService(service.id)}
              className={`overflow-hidden rounded-2xl border bg-white text-left transition-shadow duration-150 ${
                isSelected ? 'border-[#C9A227] shadow-[0_6px_18px_rgba(201,162,39,0.18)]' : 'border-[#EEE6D2]'
              }`}
            >
              <div className="flex h-28 items-center justify-center bg-[#1A1410] text-[#C9A227]">
                <Icon className="h-9 w-9" />
              </div>
              <div className="p-4">
                <h3 className="text-[13.5px] font-semibold text-[#241C12]">{service.name}</h3>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-[#6B5A42]">{service.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-[#EEE6D2] pt-3">
                  <span className="text-sm font-bold text-[#241C12]">{formatRupees(service.price)}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      isSelected ? 'border-[#0F2A1E] bg-[#0F2A1E] text-white' : 'border-[#DCC98F] text-transparent'
                    }`}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CeremonyStep;
