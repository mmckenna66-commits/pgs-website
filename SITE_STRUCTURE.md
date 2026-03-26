# SITE_STRUCTURE

This document defines the intended final website structure for this SEO branch before merge/deployment.

## 1) Core top-level public pages

Primary public pages at repo root:

- `index.html` — Homepage
- `general-surgery.html` — General surgery hub
- `weight-loss.html` — Weight loss & metabolic care hub
- `surgeons.html` — Surgeon profiles
- `staff.html` — Staff profiles
- `resources.html` — Patient resources/forms

Platform/public support files to keep:

- `robots.txt`
- `sitemap.xml`
- `CNAME`

Global site assets/scripts/styles to keep:

- `style.css`
- `main.js`

## 2) Weight loss cluster pages

Cluster hub + subpages currently present at repo root:

- `weight-loss.html` (cluster hub)
- `medical-weight-loss.html`
- `am-i-a-candidate-for-bariatric-surgery.html`
- `gastric-sleeve.html`

Surgical branch hub inside procedures:

- `procedures/bariatric.html` (parent surgical overview page for bariatric topics)

## 3) Procedure pages

All procedure pages under `procedures/`:

- `appendicitis.html`
- `bariatric.html`
- `colon.html`
- `gallbladder.html`
- `hernias.html`
- `reflux-hiatal-hernia.html`
- `sbo.html`
- `soft-tissue.html`
- `trauma.html`
- `wound-care.html`

## 4) Assets

Asset root:

- `assets/pgs-logo.png`
- `assets/pgs-logo.webp`
- `assets/brownsville-hero.jpg`
- `assets/brownsville-hero.webp`

Asset directories:

- `assets/favicons/` — favicon set + `manifest.json`
- `assets/providers/` — provider/surgeon image assets
- `assets/staff/` — staff image assets
- `assets/pdfs/` — patient PDFs/forms
- `assets/icons/` — currently empty (retain only if planned)

## 5) Files that may be removed before merge

Likely cleanup candidates (non-public, backup, or dev-only artifacts):

- Backup files:
  - `index.html.bak`
  - `weight-loss.html.bak2`
- OS/temp artifacts:
  - `.DS_Store` (root and under `assets/` / `assets/favicons/` / `assets/providers/`)
  - `.tmp_header.txt`
- Potentially obsolete script:
  - `script.js` (currently unreferenced by HTML pages)

Optional (keep if still used by workflow; remove if not needed in deploy branch):

- `optimize-images.py`
- `IMAGE-OPTIMIZATION.md`
- `FORMSPREE_UPDATE_INSTRUCTIONS.md`

## 6) Notes on naming conventions and internal link consistency

### Naming conventions

- Use lowercase, kebab-case filenames (already consistent):
  - Examples: `medical-weight-loss.html`, `reflux-hiatal-hernia.html`
- Keep procedure pages under `procedures/`.
- Keep cluster/support pages at repo root.

### Internal link consistency

- Use root-relative links (`/page.html`) or correct relative links consistently by location.
- Procedure pages should use `../` when linking to root pages/assets.
- Keep breadcrumb paths aligned with page cluster hierarchy (e.g., bariatric procedure pages under weight-loss pathway).
- Ensure all links in “Related Services” and cluster navigation resolve to existing files before merge.

### Pre-merge link QA note

- `procedures/bariatric.html` currently links to `../gastric-bypass.html` in related pathways.
- `gastric-bypass.html` is not currently present in repo root.
- Before merge, either:
  1. Add `gastric-bypass.html`, or
  2. Remove/replace that link to prevent a broken internal path.
