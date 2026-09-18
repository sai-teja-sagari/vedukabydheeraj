import { inputClass, labelClass, sanitizeByField, validateField } from '../../../lib/formValidation';
import { PersonIcon, PhoneIcon, MailIcon, CalendarIcon, PinIcon, ArrowLeftIcon } from '../icons';

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Final Step's fields map onto formValidation.js's existing name/phone/
// location rules by aliasing field names when calling into it, rather
// than duplicating those regexes here — fullName -> 'name', whatsapp ->
// 'phone', venueCity -> 'location'. Email is optional here (unlike
// Contact's form), so it's only format-checked when non-empty.
const FIELD_RULES = {
  fullName: 'name',
  whatsapp: 'phone',
  email: 'email',
  eventDate: 'eventDate',
  venueCity: 'location',
};

const REQUIRED_FIELDS = ['fullName', 'whatsapp', 'eventDate', 'venueCity'];

export function sanitizeContactField(field, value) {
  return sanitizeByField(FIELD_RULES[field], value);
}

export function validateContactField(field, value, todayIso) {
  if (field === 'email' && !value.trim()) return '';
  if (!REQUIRED_FIELDS.includes(field) && field !== 'email') return '';
  return validateField(FIELD_RULES[field], value, todayIso);
}

export function getRequiredFields() {
  return REQUIRED_FIELDS;
}

function FinalStep({
  headingRef,
  onBack,
  contact,
  formErrors,
  onFieldChange,
  onFieldBlur,
  onSubmit,
  todayIso,
  itemCount,
  total,
  isSubmitting,
  submitted,
  submitError,
}) {
  if (submitted) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-[#EEE6D2] bg-white p-10 text-center">
        <h2 className="veduka-portfolio__heading text-2xl text-[#241C12]">Thank you!</h2>
        <p className="mt-3 max-w-[380px] text-sm text-[#6B5A42]">
          We&apos;ve received your details and estimate of {formatRupees(total)} — we&apos;ll follow up on WhatsApp
          within a few hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B5A42] transition-colors duration-150 hover:text-[#9C7620]"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </button>

      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        <span aria-hidden="true">✦</span> Final Step
      </p>
      <h2 ref={headingRef} tabIndex={-1} className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        Final Step
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        Share a few details to finalize your quote.
      </p>

      <form id="estimator-final-form" onSubmit={onSubmit} noValidate className="mt-8 rounded-2xl border border-[#EEE6D2] bg-white p-6 lg:p-10">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-600">*</span>
          </label>
          <div className="relative mt-1.5">
            <PersonIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7620]" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={contact.fullName}
              onChange={onFieldChange}
              onBlur={onFieldBlur}
              placeholder="e.g. Rahul Sharma"
              className={`${inputClass} pl-10`}
              aria-invalid={Boolean(formErrors.fullName)}
              aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
            />
          </div>
          {formErrors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs text-red-600">
              {formErrors.fullName}
            </p>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp Number <span className="text-red-600">*</span>
            </label>
            <div className="relative mt-1.5">
              <PhoneIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7620]" />
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={contact.whatsapp}
                onChange={onFieldChange}
                onBlur={onFieldBlur}
                placeholder="e.g. 9876543210"
                className={`${inputClass} pl-10`}
                aria-invalid={Boolean(formErrors.whatsapp)}
                aria-describedby={formErrors.whatsapp ? 'whatsapp-error' : undefined}
              />
            </div>
            {formErrors.whatsapp && (
              <p id="whatsapp-error" className="mt-1 text-xs text-red-600">
                {formErrors.whatsapp}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <div className="relative mt-1.5">
              <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7620]" />
              <input
                id="email"
                name="email"
                type="email"
                value={contact.email}
                onChange={onFieldChange}
                onBlur={onFieldBlur}
                placeholder="e.g. info@veduka.com"
                className={`${inputClass} pl-10`}
                aria-invalid={Boolean(formErrors.email)}
                aria-describedby={formErrors.email ? 'email-error' : undefined}
              />
            </div>
            {formErrors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600">
                {formErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label htmlFor="eventDate" className={labelClass}>
              Event Date <span className="text-red-600">*</span>
            </label>
            <div className="relative mt-1.5">
              <CalendarIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7620]" />
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                min={todayIso}
                value={contact.eventDate}
                onChange={onFieldChange}
                onBlur={onFieldBlur}
                className={`${inputClass} pl-10`}
                aria-invalid={Boolean(formErrors.eventDate)}
                aria-describedby={formErrors.eventDate ? 'eventDate-error' : undefined}
              />
            </div>
            {formErrors.eventDate && (
              <p id="eventDate-error" className="mt-1 text-xs text-red-600">
                {formErrors.eventDate}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="venueCity" className={labelClass}>
              Venue / City <span className="text-red-600">*</span>
            </label>
            <div className="relative mt-1.5">
              <PinIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7620]" />
              <input
                id="venueCity"
                name="venueCity"
                type="text"
                required
                value={contact.venueCity}
                onChange={onFieldChange}
                onBlur={onFieldBlur}
                placeholder="e.g. Adoni / Hyderabad"
                className={`${inputClass} pl-10`}
                aria-invalid={Boolean(formErrors.venueCity)}
                aria-describedby={formErrors.venueCity ? 'venueCity-error' : undefined}
              />
            </div>
            {formErrors.venueCity && (
              <p id="venueCity-error" className="mt-1 text-xs text-red-600">
                {formErrors.venueCity}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 border-t border-[#EEE6D2] pt-5">
          <div className="flex items-center justify-between text-sm text-[#4A3B2A]">
            <span>Selected Services Count</span>
            <span className="font-semibold text-[#241C12]">{itemCount} items</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-semibold text-[#241C12]">Estimated Investment:</span>
            <span className="veduka-portfolio__heading text-xl font-bold text-[#9C7620]">{formatRupees(total)}</span>
          </div>
        </div>

        {submitError && (
          <p className="mt-4 text-xs text-red-600">
            Something went wrong sending your request — please try again, or reach us on WhatsApp instead. Your
            selections are safe.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2A1E] py-4 text-sm font-semibold text-[#FBF6EC] hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : <>🎂 Request Quotation</>}
        </button>
      </form>
    </div>
  );
}

export default FinalStep;
