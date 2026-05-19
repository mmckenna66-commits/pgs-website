# SEO GSC Cleanup Monitoring Report

## Purpose
This branch documents monitoring readiness after recent technical and content SEO improvements. The goal is to prevent regressions, classify expected lagging signals in Google Search Console (GSC), and define what to monitor before opening another technical cleanup branch.

## Recent SEO Changes Completed
- Canonical cleanup aligned to apex host (`https://premiergeneralsurgeon.com/`).
- `www` to apex redirects verified.
- Internal `index.html` href variants normalized to root/fragment canonical paths.
- Internal linking strengthened for priority procedure pages.
- Procedure content differentiation completed on target surgical pages.
- Bariatric cluster alignment completed.
- Current surgeon/team cleanup completed.
- Stale provider/staff references removed from public-facing pages.
- Homepage, surgeons page, and staff page current-team accuracy updates completed.

## What Should Improve Naturally Over Time
- Legacy `www` URLs should decline in GSC as Google recrawls and consolidates to apex.
- `/index.html` should remain classified as an alternate URL with proper canonical while signals consolidate to `/`.
- Removed-provider query artifacts (e.g., historical name queries) should fade after recrawl and reindexing cycles.
- Discovered/Crawled-not-indexed statuses for improved procedure pages may trend better after crawl budget catches up with updated links/content.
- Redirect/canonical historical artifacts should shrink as old crawl data expires.

## What Requires Manual GSC Indexing Requests
Prioritize URL inspection + request indexing for:
- `https://premiergeneralsurgeon.com/procedures/gallbladder.html`
- `https://premiergeneralsurgeon.com/procedures/bariatric.html`
- `https://premiergeneralsurgeon.com/procedures/soft-tissue.html`
- `https://premiergeneralsurgeon.com/procedures/colon.html`
- `https://premiergeneralsurgeon.com/procedures/reflux-hiatal-hernia.html`
- `https://premiergeneralsurgeon.com/procedures/sbo.html`
- `https://premiergeneralsurgeon.com/procedures/trauma.html`
- `https://premiergeneralsurgeon.com/staff.html`

Second-tier (cluster support / entity reinforcement):
- `https://premiergeneralsurgeon.com/`
- `https://premiergeneralsurgeon.com/surgeons.html`
- `https://premiergeneralsurgeon.com/weight-loss.html`
- `https://premiergeneralsurgeon.com/gastric-sleeve.html`
- `https://premiergeneralsurgeon.com/gastric-bypass.html`
- `https://premiergeneralsurgeon.com/medical-weight-loss.html`
- `https://premiergeneralsurgeon.com/am-i-a-candidate-for-bariatric-surgery.html`

## What Should Not Be Fixed with Content Changes Yet
- Do **not** chase stale GSC artifacts (legacy `www`, old provider queries, `/index.html` alternate canonical) with broad content rewrites.
- Do **not** add JS redirects, meta refreshes, or noncanonical duplicate content patches.
- Do **not** rewrite metadata/site copy solely to force short-term indexing changes.
- Do **not** modify sitemap host/robots/canonical unless a concrete technical inconsistency appears.

## What to Check in 2 to 4 Weeks
- Whether priority procedure pages move from Discovered/Crawled-not-indexed into indexed status.
- Whether removed-provider query impressions/clicks trend down.
- Whether any `www` URL impressions persist abnormally after repeated recrawl.
- Whether `/index.html` alternate canonical reporting remains stable (not escalating into errors).
- Whether bariatric cluster pages gain impressions/clicks for target local-intent queries.

## Query/Page Watchlist

### Bariatric Queries
- gastric sleeve surgery brownsville tx
- bariatric sleeve surgery brownsville tx
- bariatric procedures brownsville tx
- bariatric surgeons brownsville tx
- metabolic weight loss surgery in brownsville tx
- bariatric stomach surgery brownsville tx
- bariatric surgery brownsville tx
- bariatric physicians brownsville tx
- bariatric specialist brownsville tx
- gastric bypass surgeons brownsville tx

### Provider Queries
- dr mckenna
- dr michael mckenna
- dr barba
- dr silhy
- dr raquel silhy
- premier general surgeons
- premier general surgeons brownsville
- dr january hill

### Cleanup Queries
- site:premiergeneralsurgeon.com "January Hill"
- site:premiergeneralsurgeon.com "Edna Castillo"
- site:premiergeneralsurgeon.com "four surgeons"
- site:premiergeneralsurgeon.com "www.premiergeneralsurgeon.com"
- site:premiergeneralsurgeon.com "index.html"

## URL Watchlist

### Pages to Monitor for Indexing
- `https://premiergeneralsurgeon.com/procedures/gallbladder.html`
- `https://premiergeneralsurgeon.com/procedures/bariatric.html`
- `https://premiergeneralsurgeon.com/procedures/soft-tissue.html`
- `https://premiergeneralsurgeon.com/procedures/colon.html`
- `https://premiergeneralsurgeon.com/procedures/reflux-hiatal-hernia.html`
- `https://premiergeneralsurgeon.com/procedures/sbo.html`
- `https://premiergeneralsurgeon.com/procedures/trauma.html`
- `https://premiergeneralsurgeon.com/staff.html`

### Bariatric Performance Watchlist
- `https://premiergeneralsurgeon.com/weight-loss.html`
- `https://premiergeneralsurgeon.com/procedures/bariatric.html`
- `https://premiergeneralsurgeon.com/gastric-sleeve.html`
- `https://premiergeneralsurgeon.com/gastric-bypass.html`
- `https://premiergeneralsurgeon.com/medical-weight-loss.html`
- `https://premiergeneralsurgeon.com/am-i-a-candidate-for-bariatric-surgery.html`

### Provider/Team Watchlist
- `https://premiergeneralsurgeon.com/`
- `https://premiergeneralsurgeon.com/surgeons.html`
- `https://premiergeneralsurgeon.com/staff.html`

## Expected Timeline
- **1 to 7 days:** deployed HTML is live and can be inspected.
- **1 to 3 weeks:** requested URLs may be recrawled.
- **2 to 6 weeks:** GSC performance/indexing trend may begin to show direction.
- **4+ weeks:** stale `www`/provider/`index.html` artifacts should decline if Google has recrawled enough.

## Recommended GSC Exports for Next Review

### Performance > Search results
- `Queries.csv`
- `Pages.csv`
- `Devices.csv`
- `Countries.csv`
- `Search appearance.csv`
- `Chart.csv`
- `Filters.csv`

### Indexing > Pages
- Summary export
- Crawled - currently not indexed drilldown
- Discovered - currently not indexed drilldown
- Page with redirect drilldown
- Alternate page with proper canonical tag drilldown
- Not found (404) drilldown if present
- Redirect error drilldown if present

## Current Repository Audit Snapshot
- Public-facing stale provider/team terms (`January`, `Hill`, `Dr. Hill`, `Edna`, `Edna Castillo`): **none found**.
- Public-facing four-surgeon language (`four surgeons`, `4 surgeons`, `team of four`, etc.): **none found**.
- Live `index.html` href variants in public HTML: **none found**.
- Public-facing `www` links/canonical/schema URLs: **none found**.
- Public-facing old root bariatric URL references (`/bariatric.html`): **none found**.
- Canonical tags: **no issues found in current scan**.
- Robots noindex tags: **none found**.

## Red Flags That Would Require Another Technical Branch
- Any public page reintroduces `www` canonical/link/schema URLs.
- Any public page reintroduces `index.html` href variants.
- Canonical conflicts (missing canonical, multiple canonicals, non-apex canonical).
- New noindex directives on key pages.
- Persistent redirect errors or canonical mismatches in GSC after recrawl windows.
- Reappearance of removed-provider references in live HTML/schema.
- Rising 404/redirect-error trend tied to internal links or sitemap URLs.

## Notes
This branch is intentionally diagnostic and monitoring-focused. No broad content rewrites are recommended at this stage unless a concrete, reproducible technical inconsistency is identified.
