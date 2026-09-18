import { EVENT_TYPES, PRESETS } from '../../../lib/estimator/data';
import { EVENT_TYPE_ICONS, CrownIcon } from '../icons';

// Radio-style selection indicator reused for both preset and event-type
// cards — a plain circle, filled gold when selected.
const RadioDot = ({ selected }) => (
  <span
    aria-hidden="true"
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
      selected ? 'border-[#C9A227] bg-[#C9A227]' : 'border-[#DCC98F]'
    }`}
  >
    {selected && <span className="h-2 w-2 rounded-full bg-white" />}
  </span>
);

function CategoryStep({ headingRef, selectedPresetId, selectedEventTypeId, onSelectPreset, onSelectEventType }) {
  const comingSoonEventType =
    selectedEventTypeId &&
    EVENT_TYPES[selectedEventTypeId].ceremonySteps.length === 0 &&
    !selectedPresetId;

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        <span aria-hidden="true">✦</span> Step 1 of 3
      </p>
      <h2 ref={headingRef} tabIndex={-1} className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        Select Event Category
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        Pick a curated bundle or build from scratch.
      </p>

      {/* ===== CURATED FLOW CARD ===== */}
      <div className="mt-8 rounded-2xl border border-[#EEE6D2] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
              ▤ Start with a curated flow
            </p>
            <h3 className="veduka-portfolio__heading mt-2 text-lg text-[#241C12]">Choose A Curated Package Preset</h3>
            <p className="mt-1.5 max-w-[440px] text-[12.5px] leading-[1.6] text-[#6B5A42]">
              Pick a ready-made package baseline designed for South Indian celebrations, or build your own from
              scratch.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-lg border border-[#E9DCBB] bg-[#F5EDDC] px-3.5 py-2 text-center">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#9C7620]">Instant</p>
              <p className="text-[12px] font-semibold text-[#241C12]">PDF breakdown</p>
            </div>
            <div className="rounded-lg border border-[#E9DCBB] bg-[#F5EDDC] px-3.5 py-2 text-center">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#9C7620]">WhatsApp</p>
              <p className="text-[12px] font-semibold text-[#241C12]">Direct booking</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EEE6D2] pt-5">
          <div className="flex items-center gap-3">
            <CrownIcon className="h-5 w-5 text-[#C9A227]" />
            <p className="text-[12.5px] text-[#4A3B2A]">
              <span className="font-semibold text-[#241C12]">Need a recommendation?</span> Most couples select{' '}
              <span className="font-semibold text-[#9C7620]">Royal Wedding</span> for complete peace of mind.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectPreset('royalWedding')}
            className="rounded-full border border-[#DCC98F] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3B2A] hover:border-[#9C7620]"
          >
            Most popular bundle <span className="text-[#9C7620]">Royal Wedding</span>
          </button>
        </div>
      </div>

      {/* ===== PRESET CARDS ===== */}
      <div className="mt-10">
        <h3 className="veduka-portfolio__heading text-lg text-[#241C12]">🏆 Instant Package Presets</h3>
        <p className="mt-1 text-[12.5px] text-[#6B5A42]">Choose a polished starting point and move directly into details.</p>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Object.values(PRESETS).map((preset) => {
            const isSelected = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectPreset(preset.id)}
                className={`rounded-2xl border bg-white p-6 text-left transition-colors duration-150 ${
                  isSelected ? 'border-[#C9A227]' : 'border-[#EEE6D2] hover:border-[#DCC98F]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[#C9A227] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    {preset.tag}
                  </span>
                  <span aria-hidden="true">🏆</span>
                </div>
                <h4 className="veduka-portfolio__heading mt-4 text-lg text-[#241C12]">{preset.label}</h4>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6B5A42]">{preset.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#EEE6D2] pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7A6A4A]">
                    Configure package
                  </span>
                  <RadioDot selected={isSelected} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== EVENT TYPE GRID ===== */}
      <div className="mt-10">
        <h3 className="veduka-portfolio__heading text-lg text-[#241C12]">▤ Or Choose Event Type &amp; Ceremonies</h3>
        <p className="mt-1 text-[12.5px] text-[#6B5A42]">Select your event type to reveal available service choices.</p>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Object.values(EVENT_TYPES).map((eventType) => {
            const Icon = EVENT_TYPE_ICONS[eventType.icon];
            const isSelected = selectedEventTypeId === eventType.id;
            return (
              <button
                key={eventType.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectEventType(eventType.id)}
                className={`rounded-2xl border bg-white p-6 text-left transition-colors duration-150 ${
                  isSelected ? 'border-[#C9A227]' : 'border-[#EEE6D2] hover:border-[#DCC98F]'
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EDDC] text-[#9C7620]">
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="mt-4 text-base font-semibold text-[#241C12]">{eventType.label}</h4>
                <p className="mt-1 text-[12.5px] leading-[1.6] text-[#6B5A42]">{eventType.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[#EEE6D2] pt-4">
                  <RadioDot selected={isSelected} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7A6A4A]">
                    Choose this style
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {comingSoonEventType && (
          <p className="mt-4 rounded-lg border border-[#DCC98F] bg-[#F5EEDD] px-4 py-3 text-[13px] text-[#7A5A18]">
            Custom pricing — our team will follow up after you submit your details.
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryStep;
