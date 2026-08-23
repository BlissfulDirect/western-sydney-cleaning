# Western Sydney Cleaning

Commercial cleaning website for **Western Sydney Cleaning**.

Call **0426 703 030** or email **admin@westernsydneycleaning.com.au**.

Live site: [western-sydney-cleaning.vercel.app](https://western-sydney-cleaning.vercel.app)

## Start for the least money

If the goal is **first paid work**, stay in Australia. Do not open Dubai yet. A Dubai mainland company plus visas is roughly **AUD 15,000–30,000** before wages. Western Sydney can start for about **AUD 1,000–2,000**.

### Spend this, in this order

| Step | What | Typical cost |
| --- | --- | --- |
| 1 | [ABN](https://abr.gov.au) as a **sole trader** | Free |
| 2 | ASIC business name *Western Sydney Cleaning* | ~$42 / 1 year |
| 3 | Everyday bank account in that name | Free if you already bank in Australia |
| 4 | **$20 million public liability** (cleaning / commercial contractors) | ~$700–$1,500 / year |
| 5 | Starter kit: vacuum, mop, bucket, microfibre, bin bags, gloves, disinfectant, glass cleaner, spray bottles | ~$250–$400 |
| 6 | This website on Vercel | Free |

**Do not buy yet:** a Pty Ltd company, a van, employees, workers compensation, bulk uniforms, Certificate III, Google Ads, or a Dubai licence. Use your car and a caddy. Add workers comp only when you employ someone (including a cousin).

Put the ABN on invoices. Register for GST only if turnover is heading toward $75,000.

### Insurance is the one bill you cannot skip

A small office will often ask for a certificate of currency before you get keys. Quote **$20 million public liability**. Use a broker or a cleaning specialist (BizCover, Coverforce, and similar). Do not start a site without it.

### First dollar of revenue

1. Confirm FormSubmit (see below) so quote emails actually arrive.
2. Walk **five small offices** near you (Penrith, St Marys, Mount Druitt, Parramatta). Ask reception for the office manager. Leave the phone number and the live website.
3. Quote **after-hours weekly** first. Walk the kitchens, bathrooms, floors and desks. Price your time at about **$45–$65/hour** as owner-operator. Do not go so low that you cannot restock supplies.
4. Invoice with Wave, Invoice2go, or a simple PDF. Payment terms: 7 days. Weekly work is the goal — one-off cleans are extra cash, not the business.

A cousin as supervisor is for later, when there is a second site and you can pay wages plus workers compensation. It is not a day-one cost.

### Dubai later

Same idea, separate company. Do not use this Australian ABN in the UAE. Do not clean in Dubai on a visit visa. Revisit Dubai only after Australia is paying.

## Quote emails

Quote forms post to `/api/quote` and email **admin@westernsydneycleaning.com.au** through [FormSubmit](https://formsubmit.co) (free, no account).

**The first live submission sends an activation email.** Open that inbox, click the confirm link, then send a test quote from the contact page. Until you click it, new enquiries will not arrive.

For a more reliable inbox later, create a free [Web3Forms](https://web3forms.com) key and add it in Vercel → Project → Settings → Environment Variables:

- `WEB3FORMS_ACCESS_KEY`
- `QUOTE_TO_EMAIL` (optional; defaults to admin@westernsydneycleaning.com.au)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish on the web (Vercel)

The live project is already on Vercel, connected to the GitHub repo [BlissfulDirect/western-sydney-cleaning](https://github.com/BlissfulDirect/western-sydney-cleaning). Pushes to `main` rebuild the site.

To connect **westernsydneycleaning.com.au** later (~$15–$30/year — not required to take the first job):

1. Buy the domain (Crazy Domains, Cloudflare, or similar).
2. Vercel → Project → **Settings → Domains**.
3. Add `westernsydneycleaning.com.au` and `www.westernsydneycleaning.com.au`.
4. Add the DNS records Vercel shows, usually:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Dubai sister site

The Dubai brochure is a second Next.js app in `dubai-office-cleaning/` (brand: **Dubai Office Cleaning**). It is not a licensed UAE company yet — it is the website and quote form only.

```bash
npm run dev:dubai
```

Open [http://localhost:43157](http://localhost:43157). Deploy it as a separate Vercel project with **Root Directory** `dubai-office-cleaning`. Details: `dubai-office-cleaning/README.md`.
