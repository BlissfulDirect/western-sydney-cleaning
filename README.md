# Western Sydney Cleaning

Commercial cleaning website for **Western Sydney Cleaning** (`westernsydneycleaning.com.au`).

Call **0426 703 030** or email **hello@westernsydneycleaning.com.au**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish on the web (recommended: Vercel)

This is a Next.js site. The simplest way to put it on the internet is [Vercel](https://vercel.com) (the company behind Next.js). It is free for a business site like this.

### 1. Put the code on GitHub

1. Create a free account at [github.com](https://github.com).
2. Click **New repository**, name it `western-sydney-cleaning`, leave it empty, and create it.
3. In a terminal, from this project folder:

```bash
git remote add github https://github.com/YOUR-USERNAME/western-sydney-cleaning.git
git branch -M main
git push -u github main
```

(If this project already has a Git remote, you can import that repository into Vercel instead.)

### 2. Deploy on Vercel

1. Go to [vercel.com/signup](https://vercel.com/signup) and sign in with GitHub.
2. Click **Add New… → Project**.
3. Import the `western-sydney-cleaning` repository.
4. Leave the defaults (Framework: Next.js, Build command: `next build`, Output: default).
5. Click **Deploy**.

After a minute you will get a live URL such as:

`https://western-sydney-cleaning.vercel.app`

Share that link immediately. It is a real website.

### 3. Connect westernsydneycleaning.com.au

Buy the domain from a registrar (for example [Crazy Domains](https://www.crazydomains.com.au), [Google Domains / Squarespace](https://domains.squarespace.com), or [Cloudflare](https://www.cloudflare.com/products/registrar/)).

Then in Vercel:

1. Open the project → **Settings → Domains**.
2. Add `westernsydneycleaning.com.au` and `www.westernsydneycleaning.com.au`.
3. Vercel will show the DNS records to add at your registrar, usually:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS can take up to 24 hours. HTTPS (the padlock) is turned on automatically.

### 4. Before customers use it

In `src/lib/site.ts` confirm:

- Phone: **0426 703 030** (already set)
- Email (change if you use a different inbox)
- ABN, once you have one
- Operating hours

Quote forms currently **validate and confirm on the site**. They do not yet email you. To receive enquiries:

- Create a free [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) inbox and point `/api/quote` at it, or
- Check Vercel **Project → Logs** until email is connected.

## Other hosts

You can also run `npm run build` then `npm start` on any Node.js host (Railway, Render, a VPS). You need Node 20+ and a process that runs `next start` on port 3000 (or the port the host provides).

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
