# Rockwood Displays — website

A plain HTML/CSS/JS site. No build step, no framework, no server required —
you can open `index.html` directly in a browser, or host the whole folder
anywhere that serves static files.

## Before you launch

Two placeholders need your real info — search for them and replace everywhere they appear:

- **Email:** `hello@rockwooddisplays.com` → appears in `index.html`, `product.html`,
  and as `CONTACT_EMAIL` near the top of `js/main.js`.
- **Instagram:** `@rockwooddisplays` / `instagram.com/rockwooddisplays` in `index.html`
  (or remove the line entirely if you'd rather not link it yet).

Also worth a look:
- The first product is named **"The Aaron"** after the origin story — rename it
  (and adjust the price / specs) in `js/products.js` if you'd like something else.
- There's no price anywhere yet, just "Inquire for pricing," since each piece is
  one of a kind. Add real numbers in `js/products.js` whenever you're ready.

## Adding a new display

Everything about the catalog lives in one file: `js/products.js`. It's a plain
list with comments showing exactly how to add another entry — no HTML editing
required. Drop the new photos in `images/products/<id>/`, duplicate one product
block, fill in the fields, save. Both the homepage grid and its detail page
pick it up automatically.

## Hosting it

Any static host works. Two easy, free options:

- **Netlify Drop** — go to https://app.netlify.com/drop and drag this whole
  folder in. You'll get a live URL in seconds, and can add a custom domain
  from there.
- **GitHub Pages** — push this folder to a GitHub repo and turn on Pages in
  the repo settings.

## A note on "Contact to order"

Right now, buying a piece works through email/Instagram — the "Inquire About
This Piece" button opens a pre-filled email. No cart, no payment processing,
no accounts to set up. If you outgrow that later (e.g. want real checkout via
Stripe), that's a bigger addition — happy to help when you're there.

## File map

```
index.html          Home page (hero, about, shop grid, course, contact)
product.html         Product detail template (reads ?id= from the URL)
css/styles.css        All styling
js/products.js         The catalog — edit this to add/change listings
js/main.js              Page behavior (renders the grid + detail page, nav)
images/                Favicon + product photos
```
