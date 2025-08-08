# Avery Stone — UI/UX Portfolio

Self‑contained, theme: violet/indigo/cyan. Topic‑specific mock UI images.
## Changelog

### UI/UX & Functional Updates
- Converted design to **React** implementation with responsive layout (mobile, tablet, desktop).
- Set up modern UI/UX designer portfolio for fictional character (7+ years experience).
- Added MIT License under **Mutlu Kurt**.
- Fixed layout so it no longer horizontally scrolls unnecessarily.
- Implemented **side navigation drawer** with modern styling.
- Added free copyright-safe project preview images.
- Styled "Selected Projects" with relevant visual assets.
- Improved "Let's Talk" call-to-action button to a flat, modern look (no gradients).
- Removed dark mode entirely; unified to light theme.
- Redesigned drawer with **oval corners**, minimal look, emojis removed from menu icons.
- Adjusted drawer backdrop opacity for better focus.
- Added UI polish to "Let's Talk" section (centered text, modern button).
- Fixed drawer toggle logic so it opens only on button click.
- Applied **performance optimizations**:
  - Lazy-loaded all images (`loading="lazy"`, `decoding="async"`).
  - Added `content-visibility:auto` to sections for progressive rendering.
  - Reduced heavy blur filters on background elements.
  - Added momentum scrolling and reduced motion support.
- General UI consistency fixes for form and navigation spacing.

### Deployment
- Tested on **Netlify** for live preview.
- Ready for **GitHub Pages** deployment — see below.

## Deployment Instructions (GitHub Pages)

1. Push this repository to GitHub.
2. In your React project, run:
   ```bash
   npm run build
   ```
   This will create a `build/` folder with optimized static files.
3. Deploy to GitHub Pages using one of these methods:
   - **gh-pages package**:
     ```bash
     npm install gh-pages --save-dev
     npm run deploy
     ```
   - Or manually upload `build/` folder contents to your `gh-pages` branch.
4. In your repository **Settings → Pages**, select branch `gh-pages` as source.
5. Your site will be live at:
   ```
   https://<username>.github.io/<repository-name>/
   ```

### Custom Domain (CNAME)
To use a custom domain:
1. Add a `CNAME` file in the `public/` folder containing your domain (e.g. `portfolio.com`).
2. On GitHub, go to **Settings → Pages**, set the custom domain, and enforce HTTPS.
