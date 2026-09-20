# Kenna Co-op Work Term Report — Website Shell

A one-page static website template for a **Data Collection & Integration Assistant Co-op** work term at Kenna.

## Files
- `index.html` — report sections and placeholder copy
- `styles.css` — responsive Kenna-inspired visual system
- `script.js` — scroll progress, reveal animation, active nav and mobile menu
- `assets/` — put your safe/original images here

## Fastest way to edit
1. Open `index.html` in VS Code.
2. Search for `[` to find placeholders such as `[YOUR NAME]`.
3. Replace sample skill chips with the technologies you actually used.
4. Replace the image placeholders with your own non-confidential images or diagrams.

Example image replacement:

```html
<figure class="photo-placeholder reveal">
  <img src="assets/office.jpg" alt="My workspace at Kenna" class="real-photo" />
  <figcaption>Figure 1. My workspace during the term.</figcaption>
</figure>
```

Then add:

```css
.real-photo {
  width: 100%;
  display: block;
  border-radius: 24px;
}
```

## Suggested report flow
1. Abstract / Introduction
2. Information about the Employer
3. Goals & Learning Outcomes
4. Job Description
5. One specific challenge / learning moment
6. Reflection
7. Conclusion
8. Acknowledgements

## Important
- Keep confidential client/company information out of the report.
- The template is intentionally one-page and easy to scan.
- Original images or diagrams you create yourself will make the report stronger.
- The template does **not** use Kenna's official logo asset. The text/monogram treatment is a visual placeholder.

## Run locally
Double-click `index.html`, or use VS Code Live Server.

## Deploy
This is plain HTML/CSS/JS, so it can be deployed directly to GitHub Pages, Netlify, Vercel, or any static host.
