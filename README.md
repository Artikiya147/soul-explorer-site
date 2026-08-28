# Soul Explorer

The soul-explorer.com marketing site and admin/CRM tool — a Next.js rebuild replacing the previous WordPress/Elementor site.

**Live:** https://soul-explorer-site.vercel.app (custom domain cutover not done yet)

## Structure

- Public site: homepage, QHHT, BQH, QMV, Soul Readings, Soul Systems, Studio, and supporting pages.
- `/admin`: the practitioner admin tool — client pipeline, document builder, practices, and settings. Backed by Supabase (real auth, real database — see `supabase/migrations/`), not local storage.

## Local development

```bash
npm install
npm run dev
```

Needs a `.env.local` with the Supabase project keys (see `.env.local` for the current values; never commit this file).

## Deployment

Deploys automatically via Vercel on every push to `main` (GitHub → Vercel connected). To deploy manually:

```bash
npx vercel deploy --prod
```

Environment variables for production/preview are set directly in the Vercel project settings, not read from `.env.local`.
