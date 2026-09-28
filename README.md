# CyberSafe Brief — security.lassair.me

Astro static site for the CyberSafe Brief: evergreen guides plus a mirrored
newsletter archive. Deploys to Cloudflare Pages.

## Quickstart

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into ./dist
```

## Before you deploy

1. Set your real Substack URL in `src/config.ts` (`SUBSTACK_URL`).
2. Fill in the bio placeholder in `src/pages/about.md`.

## Adding a new guide

Copy an existing guide and edit it — that's the whole workflow:

```bash
cp src/pages/guides/family-safe-word-voice-scams.md src/pages/guides/my-new-guide.md
```

Frontmatter fields:

```yaml
---
layout: ../../layouts/Guide.astro
title: 'My Guide Title'
description: 'One plain-English sentence. Used for SEO and link previews.'
updated: 2026-10-05        # bump this whenever you revise the guide
tldr:
  - First key takeaway.
  - Second key takeaway.
  - Third key takeaway.
---
```

URL-friendly filenames become the URL: `my-new-guide.md` →
`/guides/my-new-guide/`. The guides index, homepage, and sitemap pick it up
automatically. Commit and push — Cloudflare Pages rebuilds on its own.

## Mirroring a newsletter issue

Same pattern, under `src/pages/archive/`:

```bash
cp src/pages/archive/comeback.md src/pages/archive/2026-10-issue-title.md
```

```yaml
---
layout: ../../layouts/Issue.astro
title: 'Issue title'
description: 'One-sentence summary.'
date: 2026-10-11           # the date the email went out
---
```

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20+ (set via `NODE_VERSION` env var if needed)
4. Custom domain: **Pages project → Custom domains → Set up a custom
   domain** → `security.lassair.me`. Cloudflare will show you the DNS record
   to add wherever lassair.me's DNS is hosted (a CNAME to your
   `*.pages.dev` address).

## Notes

- SEO basics are handled: semantic HTML, meta descriptions, Open Graph tags,
  `robots.txt`, and an auto-generated sitemap (`@astrojs/sitemap`).
- The design is intentionally minimal and dependency-free (no CSS framework)
  so there's nothing to maintain.
- PDFs (if you add gated downloads later) can live in `public/pdfs/` and be
  linked from guide pages.
