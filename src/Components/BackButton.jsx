'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

// Goes back in the browser/app history when there's somewhere to go back to
// (e.g. arrived via the Navbar or an internal link); otherwise this route was
// opened directly (a fresh tab, a shared link), so there's no in-app history
// to return to and we land on the homepage instead of a dead end.
function BackButton({ fallback = '/', className = '' }) {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B5A42] transition-colors duration-150 hover:text-[#9C7620] lg:text-[13px] ${className}`}
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}

export default BackButton;
