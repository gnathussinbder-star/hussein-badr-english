# Hussein Badr English — Website (v0.1)

Plain HTML/CSS/JS. No build step, no backend, no accounts. You own every file.

## Structure
- `index.html` – page shell
- `css/style.css` – design (navy #1A237E, gold #FFC107)
- `js/app.js` – pages, Arabic/English switch, library search & filters
- `content/site.json` – ALL text, lessons, plans, FAQ, catalog, social links (Arabic + English)

## Editing content (works on Android, free)
Edit `content/site.json` in your GitHub repository using the GitHub website editor (pencil icon), then "Commit changes". Keep the quotes and commas exactly.
- New lesson: copy one block inside `"resources"`, change values. `status`: `published` | `soon` | `draft`. A download/open button shows ONLY when status is `published` and `url` is filled.
- Remove `"demo": true` once you've reviewed an item.

## Publishing (free, no domain needed)
Recommended: GitHub repo + free static host (e.g. GitHub Pages, Cloudflare Pages or Netlify). Check each service's current free terms before relying on it. Upload all files keeping the folder structure; the host gives you an https address. Every commit republishes the site.

## Backup
Download the repository as a ZIP regularly (GitHub: Code → Download ZIP).

## Status
- Works (code written, syntax-checked): navigation, AR/EN switch with RTL/LTR, mobile menu, library search/filters, FAQ, plans, catalog states.
- NOT tested in a real browser or on devices. NOT deployed. NO CMS dashboard, forms, accounts, payments (future).
- Notes: routes use `#/page`, so a sitemap.xml isn't useful until you pick a domain. Legal pages are drafts. Bio text is a placeholder.
