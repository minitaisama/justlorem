# LOREM Technology

A bilingual (English/Vietnamese), single-page digital studio website built with Next.js static export. The site is published to Cloudflare Pages as the `justlorem` project.

## Development

- `pnpm dev` — local development
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript
- `pnpm contentcheck` — brand and content guardrails
- `pnpm build` — static export to `out/`
- `pnpm preview` — serve the exported site

The public site has one page with a VI/EN toggle. Previous licensing and knowledge URLs intentionally return 404. `robots.txt` and `sitemap.xml` are generated from the App Router. The existing GitHub Actions workflow builds on pull requests and deploys `out/` to Cloudflare Pages on pushes to `main`.

## Media

The hero scene from the approved reference is stored locally in `public/videos/` as desktop 1080p and mobile 720p WebM/MP4 pairs, with a JPEG poster. The page does not load media from the reference host. It defers autoplay behind the poster, pauses the video when the hero leaves view, and leaves the poster static for reduced-motion or Save-Data visitors. Portfolio and decorative artwork are also local assets.
