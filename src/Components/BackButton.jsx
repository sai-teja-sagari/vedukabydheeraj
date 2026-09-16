import { useNavigate } from 'react-router-dom';

const ArrowLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

// Goes back in the browser/app history when there's somewhere to go back to
// (e.g. arrived via the Navbar or an internal link); otherwise this route was
// opened directly (a fresh tab, a shared link), so there's no in-app history
// to return to and we land on the homepage instead of a dead end.
function BackButton({ fallback = '/', className = '' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B5A42] transition-colors duration-150 hover:text-[#9C7620] lg:text-[13px] ${className}`}
    >
      <ArrowLeftIcon />
      Back
    </button>
  );
}

export default BackButton;
