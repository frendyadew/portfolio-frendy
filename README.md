# Frendy Ade Wicaksono — Portfolio

A static, dependency-free portfolio built with HTML, CSS and vanilla JavaScript. No build step.

## Deploy to Vercel

1. **Push to GitHub** — create a repository and commit these files to it.
2. **Import in Vercel** — in the Vercel dashboard, choose *Add New → Project* and import the repository.
3. **Deploy** — keep the framework preset on **Other**, leave the build command empty, and click **Deploy**.

## Before publishing

- The production URL is set to `https://portfolio-frendy.vercel.app/` in `index.html`, `robots.txt` and `sitemap.xml`. If you connect a custom domain, update those three files.
- Add the TELUS Digital dates and the missing project links in the `CONTENT` object at the top of `script.js`.
- Replace `assets/profile.jpg` and `assets/profile.webp` (both square) and `assets/og-image.jpg` (1200 × 630) if the photo or sharing card changes.
- Update `lastmod` in `sitemap.xml` when content changes.

## Editing content

All section copy lives in the `CONTENT` object at the top of `script.js`; header, footer and fallback text live in `index.html`. The site uses one accent color and a light/dark theme; colors are CSS custom properties at the top of `styles.css`.

## Local preview

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.
