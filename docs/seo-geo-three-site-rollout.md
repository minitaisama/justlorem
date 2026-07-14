# SEO/GEO three-site rollout manifest

Snapshot date: 2026-07-14

## Independent entity policy

- `justlorem.com`, `vietlicense.org` and `xaykenhtiktok.com` remain independent public entities.
- Do not add cross-domain `sameAs`, `parentOrganization`, shared ownership claims or sitewide network links.
- Cross-domain links must be visible editorial references that complete a concrete reader task.
- Do not add a direct VietLicense-to-XayKenhTikTok link in this rollout.

## Baseline

| Domain | Sitemap URLs | Content baseline | Cross-domain editorial links |
| --- | ---: | --- | ---: |
| justlorem.com | 35 | 15 knowledge articles | 0 |
| vietlicense.org | 78 | 49 guides | 0 |
| xaykenhtiktok.com | 51 | 26 blog posts, 19 resource URLs | 0 |

At snapshot time, the XayKenhTikTok resource detail URLs were indexable but `/resources` returned 404. All three homepages returned HTTP 200 to Googlebot, Bingbot and OAI-SearchBot.

## Public URL manifest

LOREM:

- `https://justlorem.com/kien-thuc/bo-cong-cu-so-cho-team-marketing-windows-microsoft-365-adobe-tiktok`
- `https://justlorem.com/tai-nguyen/mau-kiem-ke-license-doanh-nghiep`
- `https://justlorem.com/downloads/mau-kiem-ke-license-doanh-nghiep.csv`
- `https://justlorem.com/resources.json`

VietLicense:

- `https://vietlicense.org/huong-dan/microsoft-365-cho-team-marketing-content`
- `https://vietlicense.org/tai-nguyen/mau-yeu-cau-bao-gia-ban-quyen-microsoft`
- `https://vietlicense.org/downloads/mau-yeu-cau-bao-gia-ban-quyen-microsoft.csv`
- `https://vietlicense.org/data/resources.json`

XayKenhTikTok:

- `https://xaykenhtiktok.com/resources`
- `https://xaykenhtiktok.com/resources/he-thong-tai-khoan-va-ban-giao-tai-san-so-team-tiktok`
- `https://xaykenhtiktok.com/resources/gui-brief-xay-kenh-tiktok`
- `https://xaykenhtiktok.com/downloads/mau-brief-xay-kenh-tiktok.docx`
- `https://xaykenhtiktok.com/resources.json`

## Link graph

- LOREM stack article → VietLicense Microsoft 365 product and plan comparison.
- LOREM stack article → XayKenhTikTok brief template.
- VietLicense marketing-team guide → LOREM license inventory template.
- XayKenhTikTok account-handover resource → LOREM stack article.

## Measurement contract

Event: `related_site_click`

Required parameters:

- `target_domain`
- `target_path`
- `source_path`
- `content_slug`
- `link_context`

No UTM parameters or personal data are added. The event only records a click when the site's existing analytics consent/loading policy permits it.

## Release record

Release date: 2026-07-14

| Repository | Pull requests | Production workflow | Result |
| --- | --- | --- | --- |
| LOREM | [#11](https://github.com/minitaisama/justlorem/pull/11) | [29310576323](https://github.com/minitaisama/justlorem/actions/runs/29310576323) | Merged, deployed |
| XayKenhTikTok | [#40](https://github.com/thanh20002105/xaykenhtiktok/pull/40), [#41](https://github.com/thanh20002105/xaykenhtiktok/pull/41) | [29313637127](https://github.com/thanh20002105/xaykenhtiktok/actions/runs/29313637127) | Merged, deployed |
| VietLicense | [#229](https://github.com/SwiftForge-Tevel/vietlicense/pull/229), [#232](https://github.com/SwiftForge-Tevel/vietlicense/pull/232), [#235](https://github.com/SwiftForge-Tevel/vietlicense/pull/235) | [29316999529](https://github.com/SwiftForge-Tevel/vietlicense/actions/runs/29316999529) | Merged, deployed, IndexNow notified |

The XayKenhTikTok dependency-policy hotfix is isolated in PR #41. It moves pnpm overrides to `pnpm-workspace.yaml` for pnpm 11 compatibility and keeps the content packet in PR #40 independently revertible.

## Post-deploy verification

| Domain | Sitemap before | Sitemap after | New editorial links out | New editorial links in |
| --- | ---: | ---: | ---: | ---: |
| justlorem.com | 35 | 37 | 3 | 2 |
| vietlicense.org | 78 | 81 | 1 | 2 |
| xaykenhtiktok.com | 51 | 53 | 1 | 1 |

Production crawl result:

- All 13 HTML, download and JSON surfaces in the manifest return HTTP 200 without a redirect chain.
- All seven new or upgraded HTML pages use a self-referencing canonical.
- Every JSON-LD block inspected on the new HTML pages parses as valid JSON and matches the visible page type.
- All new page URLs are present in the correct sitemap and `llms.txt`.
- Every cross-domain editorial anchor resolves directly to HTTP 200 and does not use `nofollow` or `sponsored`.
- There is no direct VietLicense-to-XayKenhTikTok link and no cross-domain `sameAs` or `parentOrganization` relation.
- Mobile 390 px and tablet layouts were checked from each static production build before merge; no horizontal overflow was found and download/CTA controls remain at least 44 px high.
- Vietnamese diacritics, source dates, review dates and download labels are visible in rendered content.

## Measurement baseline

- `related_site_click` is implemented on all five editorial links with `target_domain`, `target_path`, `source_path`, `content_slug` and `link_context`.
- No cross-site UTM or personal data is sent.
- Technical baseline at release: five tracked editorial links, 37/81/53 sitemap URLs and zero pre-release cross-domain editorial links.
- Search impressions, organic sessions and assisted contact conversions are intentionally left unset until Search Console and analytics accumulate post-release data.
- First comparison window: 30 days after release. Compare indexed URLs, query impressions, editorial-link clicks and assisted conversions by source path; do not infer ranking impact from the release-day crawl.
