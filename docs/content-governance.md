# LOREM content and pricing review

Run this checklist before publishing a product, price or knowledge update.

## Product facts

- Confirm the product name, licensing model and source document.
- Link to a current Microsoft or Adobe page when describing product features.
- Do not infer partnership, reseller, customer, rating or availability claims.
- Keep Office and Microsoft 365 as separate categories.

## Pricing

- Record the source owner and `priceCheckedAt` date.
- Confirm SKU, language, delivery method, unit and quantity.
- Do not state VAT inclusion unless the quotation confirms it.
- After 30 days without review, allow the website to display `Liên hệ nhận giá mới`.

## Supply and documentation claims

- Generic channel wording is the default.
- A named distributor may be mentioned only as a possible source for a specific transaction or with supporting evidence.
- Do not turn a named source into an official partnership claim.
- Never publish customer invoices, license keys or personal information.

## Release checks

- Run `pnpm contentcheck`.
- Run lint, typecheck, audit and build.
- Check visible content, metadata, JSON-LD, `company.json`, `catalog.json` and `llms.txt`.
- Verify the public Zalo URL and hotline before enabling quote or call CTAs.
