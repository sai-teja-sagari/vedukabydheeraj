import { inputClass, labelClass } from '../../Utils/formValidation';
import { getSelectedBreakdown } from '../../Data/estimatorData';

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function FinalStep({
  categoryLabel,
  tierLabel,
  itemGroups,
  selectedItemIds,
  total,
  todayIso,
  formData,
  formErrors,
  onFieldChange,
  onFieldBlur,
  onSubmit,
  submitted,
  sendError,
}) {
  const breakdown = getSelectedBreakdown(selectedItemIds, itemGroups);

  if (submitted) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
        <h2 className="veduka-portfolio__heading text-2xl text-[#241C12]">Thank you!</h2>
        <p className="mt-3 max-w-[360px] text-sm text-[#6B5A42]">
          Your estimate for {formatRupees(total)} is on its way to our studio — we&apos;ll follow up within a few
          hours to lock in the details.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-xs">
        Step 4 of 4
      </p>
      <h2 className="veduka-portfolio__heading mt-2 text-[22px] text-[#241C12] lg:text-[32px]">
        Almost there — tell us about you
      </h2>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
        We&apos;ll send this exact estimate to our studio and follow up to confirm your date.
      </p>

      {/* Selection summary */}
      <div className="mt-6 rounded-xl border border-[#E9DCBB] bg-[#F5EDDC] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">
          {categoryLabel} · {tierLabel} package
        </p>
        <div className="mt-3 flex flex-col gap-3">
          {breakdown.map((group) => (
            <div key={group.groupLabel}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7A6A4A]">
                {group.groupLabel}
              </p>
              <ul className="mt-1 flex flex-col gap-0.5">
                {group.items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between text-[13px] text-[#241C12]">
                    <span>{item.label}</span>
                    <span className="text-[#6B5A42]">{formatRupees(item.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#DCC98F] pt-3">
          <span className="text-sm font-semibold text-[#241C12]">Estimated total</span>
          <span className="text-lg font-bold text-[#9C7620]">{formatRupees(total)}</span>
        </div>
      </div>

      <form id="estimator-contact-form" onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label htmlFor="estimator-name" className={labelClass}>
              Your name <span className="text-red-600">*</span>
            </label>
            <input
              id="estimator-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={onFieldChange}
              onBlur={onFieldBlur}
              placeholder="e.g. Ramya & Karthik"
              className={inputClass}
              aria-invalid={Boolean(formErrors.name)}
              aria-describedby={formErrors.name ? 'estimator-name-error' : undefined}
            />
            {formErrors.name && (
              <p id="estimator-name-error" className="mt-1 text-xs text-red-600">
                {formErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estimator-email" className={labelClass}>
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              id="estimator-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={onFieldChange}
              onBlur={onFieldBlur}
              placeholder="e.g. ramya@example.com"
              className={inputClass}
              aria-invalid={Boolean(formErrors.email)}
              aria-describedby={formErrors.email ? 'estimator-email-error' : undefined}
            />
            {formErrors.email && (
              <p id="estimator-email-error" className="mt-1 text-xs text-red-600">
                {formErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label htmlFor="estimator-phone" className={labelClass}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              id="estimator-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={onFieldChange}
              onBlur={onFieldBlur}
              placeholder="+91 98765 43210"
              className={inputClass}
              aria-invalid={Boolean(formErrors.phone)}
              aria-describedby={formErrors.phone ? 'estimator-phone-error' : undefined}
            />
            {formErrors.phone && (
              <p id="estimator-phone-error" className="mt-1 text-xs text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estimator-eventDate" className={labelClass}>
              Event date <span className="text-red-600">*</span>
            </label>
            <input
              id="estimator-eventDate"
              name="eventDate"
              type="date"
              required
              min={todayIso}
              value={formData.eventDate}
              onChange={onFieldChange}
              onBlur={onFieldBlur}
              className={inputClass}
              aria-invalid={Boolean(formErrors.eventDate)}
              aria-describedby={formErrors.eventDate ? 'estimator-eventDate-error' : undefined}
            />
            {formErrors.eventDate && (
              <p id="estimator-eventDate-error" className="mt-1 text-xs text-red-600">
                {formErrors.eventDate}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="estimator-location" className={labelClass}>
            Location / venue <span className="text-red-600">*</span>
          </label>
          <input
            id="estimator-location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={onFieldChange}
            onBlur={onFieldBlur}
            placeholder="e.g. Hyderabad"
            className={inputClass}
            aria-invalid={Boolean(formErrors.location)}
            aria-describedby={formErrors.location ? 'estimator-location-error' : undefined}
          />
          {formErrors.location && (
            <p id="estimator-location-error" className="mt-1 text-xs text-red-600">
              {formErrors.location}
            </p>
          )}
        </div>

        {sendError && (
          <p className="text-xs text-red-600">
            Something went wrong sending your estimate — please try again, or reach us on WhatsApp instead.
          </p>
        )}
      </form>
    </div>
  );
}

export default FinalStep;
