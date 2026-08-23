# Western Sydney Cleaning

A commercial cleaning website for **Western Sydney Cleaning** (`westernsydneycleaning.com.au`), modelled on the structure of a typical Western Sydney cleaning company site: services, suburbs, quote forms and a free first-clean offer.

## Pages

- Home — hero, services, 3-step booking, suburbs, quote form
- About
- Services (and a page for each service)
- Locations (and a page for each suburb)
- Contact

Quote forms submit to `/api/quote`. In this demo the API validates the request and logs it; it does not send email. Connect your own inbox or CRM before going live.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Before you launch

Update `src/lib/site.ts` with your real:

- Phone number
- Email address
- ABN
- Operating hours
- Domain / metadata URL

Replace the placeholder phone **0412 889 770** and email **hello@westernsydneycleaning.com.au** so customers reach you.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
