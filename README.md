# LOREM Technology

Vietnamese-first static Next.js site for enterprise software licensing advisory, reference pricing and procurement content.

## Scripts

- `pnpm dev` — local Next dev server
- `pnpm lint` — ESLint quality gate
- `pnpm typecheck` — TypeScript quality gate
- `pnpm contentcheck` — wording, contact and claim guardrail scan
- `pnpm build` — production static export into `out/`
- `pnpm preview` — serve the generated `out/` directory locally on port 3000

## Optional analytics

Copy `.env.example` to `.env.local` and set only the public identifiers that are available. Google Analytics loads after visitor consent. Cloudflare Web Analytics and Google Search Console verification are omitted when their values are empty.

## Static export notes

This repo is configured with `output: 'export'` in `next.config.mjs`.

All category, product and knowledge routes use `generateStaticParams`. The `company.json` and `catalog.json` route handlers are forced static and exported at build time.

If you later add App Router features that rely on request-time behavior (for example API routes, middleware, cookies/headers access, or dynamic server rendering), `next build` for static export will fail until those are removed or replaced.
