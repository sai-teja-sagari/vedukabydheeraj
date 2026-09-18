'use client';

import { useEffect, useReducer, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { EVENT_TYPES, PRESETS, CEREMONIES } from '../../lib/estimator/data';
import { calculateTotal, buildSelections } from '../../lib/estimator/pricing';
import Stepper from './Stepper';
import BottomBar from './BottomBar';
import CategoryStep from './steps/CategoryStep';
import CeremonyStep from './steps/CeremonyStep';
import FinalStep, { sanitizeContactField, validateContactField, getRequiredFields } from './steps/FinalStep';

const INITIAL_STATE = {
  currentStepIndex: 0,
  // The furthest step index reached so far — the stepper only allows
  // jumping to steps at or before this, so users can freely move back and
  // forth through what they've already seen without being able to skip
  // ahead into ceremonies they haven't gotten to yet.
  highestStepReached: 0,
  eventTypeId: null,
  presetId: null,
  selectedServiceIds: new Set(),
  contact: { fullName: '', whatsapp: '', email: '', eventDate: '', venueCity: '' },
  formErrors: {},
  isSubmitting: false,
  submitted: false,
  submitError: false,
};

function defaultServiceIdsFor(eventType) {
  const ids = new Set();
  eventType.ceremonySteps.forEach((ceremonyId) => {
    CEREMONIES[ceremonyId].services.forEach((service) => {
      if (service.defaultSelected) ids.add(service.id);
    });
  });
  return ids;
}

// Every action that moves currentStepIndex goes through this so
// highestStepReached always keeps pace — the single source of truth for
// which stepper circles are clickable.
function withStep(state, nextIndex) {
  return { ...state, currentStepIndex: nextIndex, highestStepReached: Math.max(state.highestStepReached, nextIndex) };
}

// Picking a (possibly different) preset/event type restarts progress
// tracking rather than maxing with the old value — otherwise switching
// from a 9-step flow to a 4-step flow after reaching step 5 would leave
// every circle in the new, shorter flow falsely marked as "already
// reached," letting the stepper skip into ceremonies never actually seen.
function resetToStep(state, nextIndex) {
  return { ...state, currentStepIndex: nextIndex, highestStepReached: nextIndex };
}

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_PRESET': {
      const preset = PRESETS[action.presetId];
      const eventType = EVENT_TYPES[preset.mapsToEventType];
      return resetToStep(
        {
          ...state,
          presetId: action.presetId,
          eventTypeId: eventType.id,
          selectedServiceIds: defaultServiceIdsFor(eventType),
        },
        1
      );
    }
    case 'SELECT_EVENT_TYPE':
      return resetToStep(
        { ...state, eventTypeId: action.eventTypeId, presetId: null, selectedServiceIds: new Set() },
        1
      );
    case 'TOGGLE_SERVICE': {
      const next = new Set(state.selectedServiceIds);
      if (next.has(action.serviceId)) next.delete(action.serviceId);
      else next.add(action.serviceId);
      return { ...state, selectedServiceIds: next };
    }
    case 'GO_NEXT':
      return withStep(state, Math.min(action.maxIndex, state.currentStepIndex + 1));
    case 'GO_BACK':
      return withStep(state, Math.max(0, state.currentStepIndex - 1));
    case 'GO_TO_STEP':
      // Only ever invoked (see Stepper.jsx) for indices already reached,
      // but clamp defensively regardless.
      return withStep(state, Math.min(action.index, state.highestStepReached));
    case 'UPDATE_CONTACT_FIELD':
      return {
        ...state,
        contact: { ...state.contact, [action.field]: action.value },
        formErrors: state.formErrors[action.field]
          ? { ...state.formErrors, [action.field]: undefined }
          : state.formErrors,
      };
    case 'SET_FIELD_ERROR':
      return { ...state, formErrors: { ...state.formErrors, [action.field]: action.error || undefined } };
    case 'SET_ALL_ERRORS':
      return { ...state, formErrors: action.errors };
    case 'SUBMIT_START':
      return { ...state, isSubmitting: true, submitError: false };
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmitting: false, submitted: true };
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false, submitError: true };
    default:
      return state;
  }
}

function EstimatorWizard() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const router = useRouter();
  const headingRef = useRef(null);
  const todayIso = new Date().toISOString().slice(0, 10);

  const eventType = state.eventTypeId ? EVENT_TYPES[state.eventTypeId] : null;
  const ceremonyIds = eventType?.ceremonySteps ?? [];
  // Placeholder "3" before any event type is chosen, matching the generic
  // "1 of 3" the reference shows on a fresh Step 1.
  const totalSteps = eventType ? ceremonyIds.length + 2 : 3;
  const isCategoryStep = state.currentStepIndex === 0;
  const isFinalStep = !isCategoryStep && state.currentStepIndex === totalSteps - 1;
  const currentCeremonyId = !isCategoryStep && !isFinalStep ? ceremonyIds[state.currentStepIndex - 1] : null;

  const { total, count } = calculateTotal(state.selectedServiceIds, CEREMONIES);

  const stepLabels = eventType
    ? [{ label: 'Category' }, ...ceremonyIds.map((id) => ({ label: CEREMONIES[id].title })), { label: 'Final Step' }]
    : [{ label: 'Category' }, { label: 'Details' }, { label: 'Final Step' }];

  // URL mirroring is cosmetic only (see plan notes) — keeps the address
  // bar honest so the browser back button doesn't land somewhere
  // confusing, but a hard refresh mid-flow can't restore selections
  // since none of this is persisted to storage.
  useEffect(() => {
    router.replace(`/estimator?step=${state.currentStepIndex}`, { scroll: false });
  }, [state.currentStepIndex, router]);

  // Move focus to the new step's heading after every step change so
  // screen reader / keyboard users land in the right place instead of on
  // a button that's now off-screen.
  useEffect(() => {
    headingRef.current?.focus();
  }, [state.currentStepIndex]);

  const handleSelectPreset = (presetId) => dispatch({ type: 'SELECT_PRESET', presetId });
  const handleSelectEventType = (eventTypeId) => dispatch({ type: 'SELECT_EVENT_TYPE', eventTypeId });
  const handleToggleService = (serviceId) => dispatch({ type: 'TOGGLE_SERVICE', serviceId });
  const handleBack = () => dispatch({ type: 'GO_BACK' });
  const handleNext = () => dispatch({ type: 'GO_NEXT', maxIndex: totalSteps - 1 });
  const handleStepClick = (index) => dispatch({ type: 'GO_TO_STEP', index });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_CONTACT_FIELD', field: name, value: sanitizeContactField(name, value) });
  };

  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD_ERROR', field: name, error: validateContactField(name, value, todayIso) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    getRequiredFields().forEach((field) => {
      const error = validateContactField(field, state.contact[field], todayIso);
      if (error) errors[field] = error;
    });
    const emailError = validateContactField('email', state.contact.email, todayIso);
    if (emailError) errors.email = emailError;

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ALL_ERRORS', errors });
      return;
    }

    dispatch({ type: 'SUBMIT_START' });

    try {
      const selections = buildSelections(state.selectedServiceIds, ceremonyIds, CEREMONIES);
      const res = await fetch('/api/estimator/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: state.contact,
          eventType: state.eventTypeId,
          presetUsed: state.presetId,
          selections,
          totalAmount: total,
          itemCount: count,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch {
      dispatch({ type: 'SUBMIT_ERROR' });
    }
  };

  return (
    <div>
      <Stepper
        steps={stepLabels}
        currentStepIndex={state.currentStepIndex}
        highestStepReached={state.highestStepReached}
        onStepClick={handleStepClick}
      />

      <div className={`mx-auto max-w-[1000px] px-6 py-10 lg:px-16 ${isFinalStep ? '' : 'pb-28'}`}>
        {isCategoryStep && (
          <CategoryStep
            headingRef={headingRef}
            selectedPresetId={state.presetId}
            selectedEventTypeId={state.eventTypeId}
            onSelectPreset={handleSelectPreset}
            onSelectEventType={handleSelectEventType}
          />
        )}

        {currentCeremonyId && (
          <CeremonyStep
            headingRef={headingRef}
            ceremony={CEREMONIES[currentCeremonyId]}
            stepLabel={`Step ${state.currentStepIndex + 1} of ${totalSteps}`}
            selectedServiceIds={state.selectedServiceIds}
            onToggleService={handleToggleService}
          />
        )}

        {isFinalStep && (
          <FinalStep
            headingRef={headingRef}
            onBack={handleBack}
            contact={state.contact}
            formErrors={state.formErrors}
            onFieldChange={handleFieldChange}
            onFieldBlur={handleFieldBlur}
            onSubmit={handleSubmit}
            todayIso={todayIso}
            itemCount={count}
            total={total}
            isSubmitting={state.isSubmitting}
            submitted={state.submitted}
            submitError={state.submitError}
          />
        )}
      </div>

      {!isFinalStep && (
        <BottomBar
          total={total}
          itemCount={count}
          showBack={!isCategoryStep}
          onBack={handleBack}
          primaryLabel="Next Step"
          onPrimaryClick={handleNext}
          isFinalStep={false}
          primaryDisabled={isCategoryStep && !state.eventTypeId}
        />
      )}
    </div>
  );
}

export default EstimatorWizard;
