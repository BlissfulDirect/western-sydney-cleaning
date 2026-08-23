# Dubai Office Cleaning

Sister site to Western Sydney Cleaning, for **Dubai Office Cleaning** (`dubaiofficecleaning.ae`).

Same offer: after-hours office cleaning for small and medium offices. WhatsApp **+61 426 703 030** or email **admin@dubaiofficecleaning.ae**.

This is a brochure and quote site. It does **not** mean the UAE company is licensed yet. Do not send cleaners to a Dubai site until the mainland trade licence, worker visas and insurance are in place. Kamran’s current residence visa is as a driver for another company — he cannot legally run this business on that stamp.

## Run locally

From this folder:

```bash
npm install
npm run dev
```

Dev server: [http://localhost:43157](http://localhost:43157)

Or from the repo root:

```bash
npm run dev:dubai
```

## Publish on Vercel

Add a **second** Vercel project from the same GitHub repo.

1. Vercel → Add New → Project → `BlissfulDirect/western-sydney-cleaning`
2. Set **Root Directory** to `dubai-office-cleaning`
3. Deploy

You will get a URL such as `https://dubai-office-cleaning.vercel.app`.

Connect **dubaiofficecleaning.ae** later in Vercel → Settings → Domains.

## Quote emails

Same as the Australia site: the first live form submit sends a FormSubmit confirmation to **admin@dubaiofficecleaning.ae**. Create that mailbox (or forward it) and click the link. Until then, enquiries will not arrive.

Optional: add `WEB3FORMS_ACCESS_KEY` in Vercel.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui.
