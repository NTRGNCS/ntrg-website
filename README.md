# NTRG, Preview Website

A custom marketing site for **National Tax Resource Group**, built with **Vite + React**. Redesigned in the WigleyHub design language (deep red / near-black / clean white) to distinguish NTRG from the navy-and-gold look of competitors.

This is a **preview build** for leadership review, polished, complete, and deployable, with no backend or analytics wired up yet.

## Stack

- **Vite + React 18**, same React you'd write in Create React App, just a faster, current build tool. Deploys to Vercel from GitHub identically (push → auto-deploy).
- **react-router-dom**, client-side routing for Home / Expertise / Services / About / Insights / Contact.
- **No backend.** The contact form is a working UI with no submission endpoint. See "Wiring the form" below to connect Supabase later.
- Lint-clean, so it builds under Vercel's `CI=true`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deploy to Vercel (same flow as your other project)

1. Create a **new GitHub repo** (keep this separate from your app repo).
2. Push this folder to it.
3. In Vercel: **New Project → import the repo**. Framework preset auto-detects **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You'll get an auto-generated `*.vercel.app` preview URL to share with Josh and Debbie. No custom domain needed.

`vercel.json` is included so client-side routes (e.g. `/about`) resolve correctly on refresh/direct-link.

## Editing content

Almost all copy lives in **`src/data/content.js`**, services, differentiators, the comparison table, leadership bios, client list, testimonials, and posts. Change wording there without touching layout. You mentioned some wording will change; that's the file to edit.

## Imagery

The site uses **real photography only**, no generic stock:

- **Hero:** Bent Tree Tower (NTRG's office building), `public/images/bent-tree-tower.png`. NOTE: the current file is a watermarked commercial-listing photo used as a preview placeholder. **Replace with NTRG's own or a licensed photo before launch** (swap the file, keep the name, or edit the `HERO_IMAGE` line at the top of `src/pages/Home.jsx`).
- **Team headshots + Clayton's memorial:** `public/team/`, already wired in, shown in full color.
- **Section slots** that would otherwise use generic stock are filled with **designed brand panels** (`src/components/BrandPanel.jsx`), key stats, the NTRG mark, and pull quotes, so every section looks intentional and premium without stock-photo filler.

To add a real photo to any section later, use the `<Duo src="...">` component (it applies the site's duotone treatment automatically).

## Wiring the form (later, if approved)

`src/components/ContactForm.jsx` currently shows a success state on submit with no network call. To store submissions in Supabase, add your project URL + anon key as environment variables in Vercel and replace the `submit` handler with a Supabase insert. Kept out of the preview so there are no secrets or backend to secure.
