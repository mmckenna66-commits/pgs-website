# SEO WWW → Apex Redirect Verification Report

- **Date of test:** 2026-04-30
- **Branch:** `seo-www-apex-redirect-verification`
- **Repository:** `mmckenna66-commits/pgs-website`

## Scope
Diagnostic verification only for apex canonical domain behavior and redirect consistency.

## Repository Configuration Findings
- **`CNAME`:** Present at repo root.
- **`CNAME` content:** `premiergeneralsurgeon.com` (single line, exact expected value).
- **`.nojekyll`:** Not present.
- **`sitemap.xml`:** Uses apex host `https://premiergeneralsurgeon.com/` for all `<loc>` entries reviewed.
- **`robots.txt`:** `Sitemap: https://premiergeneralsurgeon.com/sitemap.xml` (apex host).
- **GitHub Actions workflows (`.github/workflows/**`):** None present.
- **Redirect config files found:** None (`_redirects`, `netlify.toml`, `vercel.json`, nginx/Cloudflare config not found in repo).

## Live Redirect Tests (`curl -I -L`)

| Initial URL tested | Status chain | Final effective URL | Final host | Path preserved | HTTPS final | Acceptable |
|---|---|---|---|---|---|---|
| `https://premiergeneralsurgeon.com/` | `200` | `https://premiergeneralsurgeon.com/` | apex | Yes | Yes | Yes |
| `https://premiergeneralsurgeon.com/index.html` | `200` | `https://premiergeneralsurgeon.com/index.html` | apex | N/A (no redirect to `/`) | Yes | **No** (does not canonicalize to `/`) |
| `http://premiergeneralsurgeon.com/` | `301 -> 200` | `https://premiergeneralsurgeon.com/` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/` | `301 -> 200` | `https://premiergeneralsurgeon.com/` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/surgeons.html` | `301 -> 200` | `https://premiergeneralsurgeon.com/surgeons.html` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/procedures/gallbladder.html` | `301 -> 200` | `https://premiergeneralsurgeon.com/procedures/gallbladder.html` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/procedures/bariatric.html` | `301 -> 200` | `https://premiergeneralsurgeon.com/procedures/bariatric.html` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/procedures/soft-tissue.html` | `301 -> 200` | `https://premiergeneralsurgeon.com/procedures/soft-tissue.html` | apex | Yes | Yes | Yes |
| `https://www.premiergeneralsurgeon.com/procedures/hernias.html` | `301 -> 200` | `https://premiergeneralsurgeon.com/procedures/hernias.html` | apex | Yes | Yes | Yes |

## First-Hop Checks (`curl -I` without `-L`)

| URL tested | First response | Location header |
|---|---|---|
| `https://www.premiergeneralsurgeon.com/` | `HTTP/2 301` | `https://premiergeneralsurgeon.com/` |
| `https://www.premiergeneralsurgeon.com/surgeons.html` | `HTTP/2 301` | `https://premiergeneralsurgeon.com/surgeons.html` |
| `https://www.premiergeneralsurgeon.com/procedures/gallbladder.html` | `HTTP/2 301` | `https://premiergeneralsurgeon.com/procedures/gallbladder.html` |
| `http://premiergeneralsurgeon.com/` | `HTTP/1.1 301 Moved Permanently` | `https://premiergeneralsurgeon.com/` |
| `http://www.premiergeneralsurgeon.com/` | `HTTP/1.1 301 Moved Permanently` | `https://premiergeneralsurgeon.com/` |

## Requirement-by-Requirement Result
1. **`https://premiergeneralsurgeon.com/` serves site:** Pass.
2. **`/index.html` canonicalizes to `/`:** **Fail** (currently serves `200` at `/index.html` with no redirect).
3. **`http://premiergeneralsurgeon.com/` redirects to HTTPS apex:** Pass (`301`).
4. **`https://www.../` redirects to HTTPS apex:** Pass (`301`).
5. **`https://www.../path` redirects to apex same path:** Pass (`301`, path preserved).
6. **No independent www copy serving pages:** Pass (first hop from www is redirect, not page serve).

## Pass/Fail Conclusion
- **Overall status:** **Passing for primary SEO canonical-host objectives**.
- **`www -> apex` status:** Passing (301 redirects with path preservation; no independent `www` copy served).
- **`/index.html` status:** Minor duplicate-URL behavior (`200` without hard redirect to `/`), not a major canonical-host failure.
- **Why this is minor:** Internal links have been normalized to `/`, the homepage canonical points to `https://premiergeneralsurgeon.com/`, and Google Search Console already classifies `/index.html` as an alternate page with a proper canonical tag.

## Recommended Next Action
Because `www` and HTTP behavior are correct, keep current setup and continue monitoring Google Search Console while legacy `www` URLs are dropped.

- Do **not** add JavaScript redirects, meta refresh redirects, or HTML-only redirects for `/index.html`.
- If a hard `/index.html -> /` redirect is needed later, implement it at an edge/CDN layer (for example, Cloudflare) with `301` or `308`, then re-run this same curl matrix.

## Notes on Repository-Only Corrections
- No safe repo-only corrections were needed for `CNAME`, `robots.txt`, or `sitemap.xml` host values in this pass.
