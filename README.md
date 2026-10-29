# Saanjh House of Care

A responsive, fictional multispecialty clinic portfolio concept for Aslisite Technologies. Every clinician, qualification, facility, article, price, appointment and record is demonstration content. No real healthcare service or booking is provided.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm test
npm run build
```

## Static deployment

Run `npm run build` and publish the generated `dist/` directory. Vercel uses `vercel.json` for SPA route rewrites. Cloudflare Pages uses `public/_redirects` to send client-side routes to the application shell. No deployment hostname is hardcoded; the site can be mounted on a subdomain such as `clinic.demo.aslisite.com`.

## Demo behavior and privacy

Appointment booking, rescheduling and cancellation use browser local storage only. Use fictional details. Do not enter real contact or health information. The portal and admin dashboard are simulations with no authentication, backend or clinical records. Sample forms do not transmit data. Images load from Unsplash and Google Fonts loads Inter-like typography fallback alongside hosted DM Sans and Playfair Display; an internet connection is needed for hosted assets.
