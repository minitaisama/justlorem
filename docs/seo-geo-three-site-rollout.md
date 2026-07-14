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

XayKenhTikTok:

- `https://xaykenhtiktok.com/resources`
- `https://xaykenhtiktok.com/resources/he-thong-tai-khoan-va-ban-giao-tai-san-so-team-tiktok`
- `https://xaykenhtiktok.com/resources/gui-brief-xay-kenh-tiktok`
- `https://xaykenhtiktok.com/downloads/mau-brief-xay-kenh-tiktok.docx`

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

## Post-deploy verification

For each URL: check HTTP 200, self-canonical, index/follow, visible source/review date, valid JSON-LD, sitemap/LLM discovery and no viewport overflow. For each editorial link: check the final URL returns 200 without a redirect chain and the rendered anchor does not use `nofollow` or `sponsored`.
