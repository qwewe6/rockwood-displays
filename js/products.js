/* =========================================================================
   Rockwood Displays — product data
   -------------------------------------------------------------------------
   This file is the entire "catalog." The homepage shop grid and the
   product detail page both read from the PRODUCTS array below — you do
   not need to touch any HTML to add, edit, or remove a listing.

   TO ADD A NEW DISPLAY:
     1. Make a new folder:  images/products/<your-id>/
        Put its photos in there. Keep the same naming pattern as
        "the-aaron" (a full-size version of each photo, plus a "-sm"
        version for faster-loading thumbnails). Any image editor or
        online compressor can make the "-sm" copies for you — they
        just need to be smaller, e.g. ~1000px on the long edge.
     2. Copy one of the blocks below (the { ... } between the square
        brackets), paste it in as a new entry, and change the values.
     3. Give it a unique "id" (no spaces — use dashes, e.g. "the-summit").
        That id becomes the URL: product.html?id=the-summit
     4. Save the file. That's it — no build step, just refresh the page.

   Every field is plain text or a list of plain text, so this is safe to
   edit by hand. Keep the commas between entries and the quote marks
   around text.
   ========================================================================= */

var PRODUCTS = [
  {
    id: "the-aaron",
    name: "The Aaron",
    tagline: "The piece that started it all.",
    price: "Inquire for pricing",
    badges: ["One of a kind", "Handmade"],

    description: [
      "This is the display that started Rockwood: a hand-chosen piece of natural granite set inside a wood scaffold built entirely by hand, its joinery echoing the timber of old mineshafts while it traces the natural contour of the stone.",
      "Integrated lighting brings it to life after dark, and a non-scratch wooden base keeps it safe on any surface — shelf, desk, or display case. Drive your rig onto it for fun, or just leave it there for show."
    ],

    specs: [
      ["Stone", "Natural granite, hand-selected"],
      ["Scaffold", "Solid wood, built entirely by hand"],
      ["Lighting", "Integrated, built for low-light display"],
      ["Base", "Non-scratch wood — safe on any surface"],
      ["Fits", "SCX24, FCX24m, FCX24 and comparable 24th scale crawlers"],
      ["Care", "A clean terry cloth (or old, cut up, t-shirt piece)"],
      ["Battery", "Coin, CR 2032"]
    ],

    // First image is used as the homepage thumbnail.
    images: [
      "images/products/the-aaron/the-aaron-01.jpg",
      "images/products/the-aaron/the-aaron-02.jpg",
      "images/products/the-aaron/the-aaron-03.jpg",
      "images/products/the-aaron/the-aaron-04.jpg",
      "images/products/the-aaron/the-aaron-05.jpg",
      "images/products/the-aaron/the-aaron-06.jpg"
    ],
    thumb: "images/products/the-aaron/the-aaron-01-sm.jpg"
  }

  /* Example of a second listing — duplicate this shape when you're ready:

  ,{
    id: "the-summit",
    name: "The Summit",
    tagline: "A steeper climb, built for showing off.",
    price: "Inquire for pricing",
    badges: ["One of a kind", "Handmade"],
    description: [
      "Describe this piece here — a sentence or two on the stone, the build, what makes it different from the others."
    ],
    specs: [
      ["Stone", "..."],
      ["Scaffold", "..."],
      ["Lighting", "..."],
      ["Base", "..."],
      ["Fits", "..."]
    ],
    images: [
      "images/products/the-summit/the-summit-01.jpg",
      "images/products/the-summit/the-summit-02.jpg"
    ],
    thumb: "images/products/the-summit/the-summit-01-sm.jpg"
  }
  */
];
