'use client';

import { useState } from 'react';
import BookingCTA from './BookingCTA';
import BackButton from './BackButton';
import { sanitizeByField, validateField, inputClass, labelClass } from '../lib/formValidation';
import { STUDIO_EMAIL } from '../lib/contactConfig';

const WHATSAPP_LINK = 'https://wa.me/919133002002';

// NOTE: studio address below is a placeholder value — replace with the
// real business details before shipping.
const CONTACT_METHODS_SOURCE = {
  phone: '+91 91330 02002',
  email: STUDIO_EMAIL,
  address: 'Tandur, TS',
};

const HOURS = [
  { label: 'Monday – Saturday', value: '10:00 AM – 7:00 PM' },
  { label: 'Sunday', value: 'By appointment' },
  { label: 'WhatsApp replies', value: 'Within 2–4 hours' },
];

const OCCASIONS = ['Wedding', 'Engagement', 'Maternity', 'Birthday', 'Other'];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.5 4.5c.6 0 1.1.4 1.3 1l1 2.6c.2.5 0 1.1-.4 1.5l-1.1 1a11 11 0 0 0 5.1 5.1l1-1.1c.4-.4 1-.6 1.5-.4l2.6 1c.6.2 1 .7 1 1.3v2.1c0 .9-.8 1.6-1.7 1.4-8-1.4-13.9-7.3-15.3-15.3C2.3 5.3 3 4.5 3.9 4.5h3.6Z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const DirectionsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l5.11-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.68 14.24c-.24.68-1.4 1.32-1.92 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.75 1.24 1.61 2 1.11 1 2.05 1.3 2.34 1.45.29.14.46.12.63-.05.18-.18.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 2 .95.29.14.48.21.55.33.07.14.07.72-.17 1.4Z" />
  </svg>
);

const CONTACT_METHODS = [
  { Icon: PhoneIcon, label: 'Phone / WhatsApp', value: CONTACT_METHODS_SOURCE.phone },
  { Icon: EnvelopeIcon, label: 'Email', value: CONTACT_METHODS_SOURCE.email },
  { Icon: PinIcon, label: 'Studio', value: CONTACT_METHODS_SOURCE.address },
];

const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  location: '',
  message: '',
  occasionType: 'Wedding',
};

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'eventDate', 'location', 'message'];

function Contact({ onSubmit, standalone = false }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  // Used both as the eventDate <input min> (blocks picking a past date in the
  // calendar widget) and to validate it on blur/submit.
  const todayIso = new Date().toISOString().slice(0, 10);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = sanitizeByField(name, value);
    setValues((prev) => ({ ...prev, [name]: sanitized }));
    // Clear a shown error as soon as the user edits the field again — it'll
    // be re-validated on blur or submit rather than staying stale.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!REQUIRED_FIELDS.includes(name)) return;
    const error = validateField(name, value, todayIso);
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleOccasionSelect = (occasion) => {
    setValues((prev) => ({ ...prev, occasionType: occasion }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Every field is required and format-checked — an incomplete or
    // malformed enquiry isn't actionable, so none of these are optional.
    const nextErrors = {};
    REQUIRED_FIELDS.forEach((field) => {
      const error = validateField(field, values[field], todayIso);
      if (error) nextErrors[field] = error;
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSendError(false);
    setIsSending(true);

    try {
      const res = await fetch('/api/contact/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          eventDate: values.eventDate,
          location: values.location,
          occasionType: values.occasionType,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      onSubmit?.(values);
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="veduka-contact bg-[#FBF6EC] px-6 py-14 lg:px-16 lg:py-16"
    >
      {standalone && <BackButton />}

      <div className={`grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-10 ${standalone ? 'mt-6' : ''}`}>
        {/* ===== LEFT COLUMN ===== */}
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#9C7620] lg:text-[12.5px]">
            Let&apos;s talk
          </p>

          {standalone ? (
            <h1
              id="contact-heading"
              className="veduka-contact__heading mt-3 text-[22px] text-[#241C12] lg:text-[40px]"
            >
              Tell us about the day you&apos;re planning
            </h1>
          ) : (
            <h2
              id="contact-heading"
              className="veduka-contact__heading mt-3 text-[22px] text-[#241C12] lg:text-[40px]"
            >
              Tell us about the day you&apos;re planning
            </h2>
          )}

          <p className="mt-4 max-w-[440px] text-[13px] leading-[1.7] text-[#6B5A42] lg:text-sm">
            No call centers, no templates. A real message goes straight to our studio — most enquiries get a
            reply within a few hours.
          </p>

          {/* Contact list */}
          <div className="mt-8 flex flex-col gap-5">
            {CONTACT_METHODS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E9DCBB] bg-[#F5EDDC] text-[#9C7620]">
                  <Icon />
                </span>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A6A4A]">{label}</p>
                  <p className="mt-0.5 text-[15px] font-medium text-[#241C12]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map card — placeholder scaffolding; replace with a real Google Maps
              <iframe> (with the studio's actual coordinates and a descriptive
              title attribute) or JS maps library without restructuring this card. */}
          <div className="relative mt-8 h-[170px] overflow-hidden rounded-xl border border-[#E9DCBB] bg-[#EDEAE3] lg:h-[230px]">
            <div className="absolute left-[14px] right-[14px] top-[14px] flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-[#241C12]">Veduka Studio</p>
                <p className="text-xs text-[#7A6A4A]">{CONTACT_METHODS_SOURCE.address}</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Veduka Studio"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E9DCBB] text-[#9C7620]"
              >
                <DirectionsIcon />
              </a>
            </div>
            <span className="absolute bottom-3 left-3 text-[10px] text-[#7A6A4A]">
              Map preview · replace with live Google Maps embed
            </span>
          </div>

          {/* Hours card */}
          <div className="mt-8 rounded-xl border border-[#E9DCBB] bg-[#F5EDDC] p-[22px_24px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9C7620]">Studio hours</p>
            <div className="mt-4 flex flex-col">
              {HOURS.map(({ label, value }, index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between py-2.5 text-sm ${
                    index < HOURS.length - 1 ? 'border-b border-[#E9DCBB]' : ''
                  }`}
                >
                  <span className="text-[#6B5A42]">{label}</span>
                  <span className="font-medium text-[#241C12]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN: FORM PANEL ===== */}
        <div className="rounded-2xl border border-[#EEE6D2] bg-white p-[22px_18px] lg:p-10">
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <h3 className="veduka-contact__heading text-2xl text-[#241C12]">Thank you!</h3>
              <p className="mt-3 max-w-[320px] text-sm text-[#6B5A42]">
                Thanks — we&apos;ll be in touch within a few hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="veduka-contact__heading text-[22px] text-[#241C12] lg:text-[26px]">
                Send an enquiry
              </h3>
              <p className="mt-2 text-sm text-[#6B5A42]">
                Fill this out and we&apos;ll follow up to lock in a date.
              </p>

              {/* Occasion chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {OCCASIONS.map((occasion) => {
                  const isActive = values.occasionType === occasion;
                  return (
                    <button
                      key={occasion}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => handleOccasionSelect(occasion)}
                      className={`veduka-contact__chip rounded-full border px-4 py-1.5 text-[12px] font-medium ${
                        isActive
                          ? 'border-[#C9A227] bg-[#C9A227] text-[#FBF6EC]'
                          : 'border-[#E9DCBB] bg-transparent text-[#6B5A42]'
                      }`}
                    >
                      {occasion}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Your name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Ramya & Karthik"
                      className={inputClass}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. ramya@example.com"
                      className={inputClass}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventDate" className={labelClass}>
                      Event date <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      min={todayIso}
                      value={values.eventDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass}
                      aria-invalid={Boolean(errors.eventDate)}
                      aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                    />
                    {errors.eventDate && (
                      <p id="eventDate-error" className="mt-1 text-xs text-red-600">
                        {errors.eventDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>
                    Location / city <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Hyderabad"
                    className={inputClass}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                  />
                  {errors.location && (
                    <p id="location-error" className="mt-1 text-xs text-red-600">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell us about your celebration <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Venue, guest count, style you're imagining..."
                    className={inputClass}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {sendError && (
                  <p className="text-xs text-red-600">
                    Something went wrong sending your enquiry — please try again, or use WhatsApp below.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2A1E] py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#FBF6EC] hover:opacity-90 disabled:opacity-60"
                >
                  {isSending ? 'Sending…' : 'Send Enquiry'}
                  <ArrowIcon />
                </button>
              </form>

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#E9DCBB]" />
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#7A6A4A]">or reach us faster</span>
                <span className="h-px flex-1 bg-[#E9DCBB]" />
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Veduka by Dheeraj on WhatsApp"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#DCC98F] bg-[#FBF6EC] py-3.5 text-sm font-semibold text-[#241C12]"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </section>
    <BookingCTA />
    </>
  );
}

export default Contact;
