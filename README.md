# Veduka by Dheeraj

Marketing site and booking flow for Veduka by Dheeraj, a wedding photography and cinematography studio. Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment variables

Copy `.env.local` (not committed) and set:

- `RESEND_API_KEY` — API key from your [Resend](https://resend.com) account, used to send enquiry and quote-request emails.
- `ADMIN_NOTIFICATION_EMAIL` — inbox that receives contact form and package estimator submissions.

Add the same two variables in Vercel under Project Settings → Environment Variables before deploying, so they're available in Production (and Preview, if you want submissions to work on preview deployments too).

## Project structure

- `src/app/` — routes (App Router). Marketing pages live under the `(site)` route group and share the `Navbar`/`Footer` layout; `/estimator` renders its own minimal chrome.
- `src/app/api/` — server routes for the contact form (`/api/contact/enquiry`) and package estimator (`/api/estimator/quote`), both sending email via Resend.
- `src/Components/` — page sections and the multi-step estimator wizard.
- `src/lib/` — shared config, form validation, estimator pricing data, and SEO helpers.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
