import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FBF6EC] px-6 py-20 text-center font-[Poppins]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9C7620]">404 Error</p>
        <h1 className="veduka-hero__headline mt-4 text-[28px] text-[#241C12] lg:text-[42px]">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-[440px] text-sm text-[#6B5A42]">
          The page you&apos;re looking for may have moved or no longer exists. Here are a few places to pick back up.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#0F2A1E] px-8 py-3.5 text-sm font-semibold text-[#FBF6EC] hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A227] px-8 py-3.5 text-sm font-semibold text-[#8A6A1F] hover:bg-[#C9A227]/10"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A227] px-8 py-3.5 text-sm font-semibold text-[#8A6A1F] hover:bg-[#C9A227]/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
