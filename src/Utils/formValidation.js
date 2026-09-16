// Shared field validation/sanitization for every form on this site
// (Contact enquiry form, Package Estimator final step) — one source of
// truth so the rules never drift between forms.

export const inputClass =
  'veduka-contact__input mt-1.5 w-full rounded-lg border border-[#E9DCBB] bg-[#FBF6EC] px-3.5 py-2.5 text-sm text-[#241C12] placeholder:text-[#B0A489] focus:outline-none focus:ring-2 focus:ring-[#C9A227]';

export const labelClass = 'block text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A6A4A]';

// Names/locations allow letters, spaces, and the punctuation real names/places
// actually use ("Ramya & Karthik", "Mary-Jane O'Brien", "Hyderabad, TS") —
// anything else (digits, other symbols) is stripped as the user types rather
// than only flagged after submit.
const NAME_ALLOWED_CHARS = /[^A-Za-z\s.'&-]/g;
const LOCATION_ALLOWED_CHARS = /[^A-Za-z\s,.'-]/g;
const PHONE_ALLOWED_CHARS = /[^\d+\s-]/g;

const NAME_PATTERN = /^[A-Za-z][A-Za-z\s.'&-]{1,59}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOCATION_PATTERN = /^[A-Za-z][A-Za-z\s,.'-]{1,79}$/;

// Fields the user can only type valid characters into — invalid keystrokes
// are silently dropped rather than typed and then rejected.
export function sanitizeByField(name, value) {
  if (name === 'name') return value.replace(NAME_ALLOWED_CHARS, '');
  if (name === 'location') return value.replace(LOCATION_ALLOWED_CHARS, '');
  if (name === 'phone') return value.replace(PHONE_ALLOWED_CHARS, '');
  return value;
}

export function validateField(name, rawValue, todayIso) {
  const value = rawValue.trim();

  switch (name) {
    case 'name':
      if (!value) return 'Please enter your name.';
      if (!NAME_PATTERN.test(value)) return 'Name can only contain letters, spaces, and \' & -';
      return '';
    case 'email':
      if (!value) return 'Please enter your email address.';
      if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email address.';
      return '';
    case 'phone': {
      if (!value) return 'Please enter a phone number.';
      const digitCount = (value.match(/\d/g) || []).length;
      if (digitCount < 7 || digitCount > 15) return 'Please enter a valid phone number.';
      return '';
    }
    case 'eventDate':
      if (!value) return 'Please share the event date.';
      if (value < todayIso) return "Event date can't be in the past.";
      return '';
    case 'location':
      if (!value) return 'Please share your location.';
      if (!LOCATION_PATTERN.test(value)) return 'Location can only contain letters, spaces, and basic punctuation.';
      return '';
    case 'message':
      if (!value) return 'Please tell us about your celebration.';
      if (value.length < 10) return 'Please add a little more detail (at least 10 characters).';
      return '';
    default:
      return '';
  }
}
