# justlorem

Static-exportable Next.js App Router site.

## Scripts

- `npm run dev` — local Next dev server
- `npm run build` — production static export build into `out/`
- `npm run preview` — serve the generated `out/` directory locally on port 3000

## Static export notes

This repo is configured with `output: 'export'` in `next.config.mjs`.

Current app shape is compatible with static export because it only uses static App Router pages and client components; it does not use API routes, middleware, server-only dynamic request features, or dynamic route params.

If you later add App Router features that rely on request-time behavior (for example API routes, middleware, cookies/headers access, or dynamic server rendering), `next build` for static export will fail until those are removed or replaced.
