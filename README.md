# UI/UX Portfolio (Static Site)

Curated UI/UX case studies presented as a lightweight static website (HTML/CSS/JS).

## Live Demo

- Live: https://mutlukurt.github.io/ui-ux-portfolio/
- Repo: https://github.com/mutlukurt/ui-ux-portfolio

## Features

- Modern, minimal light theme
- Sticky header with mobile drawer navigation
- Visual cards for selected works
- Contact form (Formspree integration)

## Performance Improvements (2025)

- Header: removed `backdrop-filter: blur()`; added `transform: translateZ(0)` to leverage GPU compositing.
- Background effects: reduced blur intensity; disabled background blobs below 900px for smoother scrolling.
- Images: added `aspect-ratio: 16/9` and `object-fit: cover` for cards; used `fetchpriority="low"`, `loading="lazy"`, and `decoding="async"` on list/case images.
- JavaScript: consolidated drawer open/close into a single, idempotent controller; added Escape-to-close and auto-close on bfcache restore.
- Mobile shadows: lowered box-shadow to reduce paint cost.
- Motion/accessibility: expanded `prefers-reduced-motion` support to disable background effects.

These changes reduce scroll jank on mobile and lower-end CPUs by cutting main-thread work and expensive paints/blurs.

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- External service: Formspree (contact form)

## Local Development

Option 1: Open the file directly

1. Open `index.html` in your browser.

Option 2: Run a simple static server

```bash
npx serve .
# or
python3 -m http.server 5173
```

Then visit `http://localhost:5173` (port may vary).

## Deployment (GitHub Pages)

This repository is a static site; no build step is required.

1. In the repository, go to Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` and folder: `/ (root)`
4. Save — your site will be live at: `https://<username>.github.io/<repository>/`

Note: The Live Demo link above works after GitHub Pages is enabled. For a custom domain, set it in Settings → Pages and enforce HTTPS.

## License

MIT — see `LICENSE`
