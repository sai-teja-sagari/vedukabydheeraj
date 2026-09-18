import { CheckIcon } from './icons';

// `steps` is an array of { label } — index within the array is the step
// number. Horizontally scrollable with a hidden scrollbar on mobile so a
// 9-step flow never wraps to multiple rows (see .veduka-estimator__stepper
// in globals.css), keeping the "current position" mental model intact.
//
// Circles for steps already reached (index <= highestStepReached) are
// real buttons that jump straight there, so the user can move back and
// forth freely — steps beyond that are shown but not yet clickable, since
// jumping ahead into a ceremony never actually visited doesn't make sense.
function Stepper({ steps, currentStepIndex, highestStepReached, onStepClick }) {
  return (
    <div
      role="group"
      aria-label="Estimator progress"
      className="veduka-estimator__stepper flex items-center gap-2 overflow-x-auto bg-[#F5EEDD] px-6 py-4 lg:justify-center lg:px-16"
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStepIndex;
        const isActive = index === currentStepIndex;
        const isReachable = index <= highestStepReached && index !== currentStepIndex;
        return (
          <div key={step.label} className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              disabled={!isReachable}
              onClick={() => onStepClick(index)}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Step ${index + 1} of ${steps.length}: ${step.label}`}
              className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold transition-transform duration-150 ${
                isReachable ? 'cursor-pointer hover:scale-110' : 'cursor-default'
              } ${
                isCompleted
                  ? 'border-[#0F2A1E] bg-[#0F2A1E] text-[#FBF6EC]'
                  : isActive
                  ? 'border-[#C9A227] bg-[#C9A227] text-white'
                  : 'border-[#DCC98F] bg-transparent text-[#9C7620]'
              }`}
            >
              {isCompleted ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
            </button>
            {index < steps.length - 1 && <span className="h-px w-6 shrink-0 bg-[#DCC98F] lg:w-10" />}
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
