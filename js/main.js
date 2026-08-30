/* =========================================================================
   Rockwood Displays — site behavior
   No build step, no framework — plain JS reading from PRODUCTS
   (see js/products.js).
   ========================================================================= */

// Update this once you have a real inbox / handle for the business.
// It's used for every "inquire to purchase" link on product pages.
const CONTACT_EMAIL = "maxbecker1023@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  renderShopGrid();
  renderProductDetail();
});

/* ---------- header shadow on scroll ---------- */

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- mobile nav toggle ---------- */

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );
}

/* ---------- homepage shop grid ---------- */

function renderShopGrid() {
  const grid = document.querySelector("[data-shop-grid]");
  if (!grid) return; // not on this page

  if (!window.PRODUCTS || PRODUCTS.length === 0) {
    grid.innerHTML = `<div class="shop-empty">New displays are on the workbench — check back soon.</div>`;
    return;
  }

  grid.innerHTML = PRODUCTS.map(productCardHTML).join("");
}

function productCardHTML(p) {
  const badge = (p.badges && p.badges[0]) || "One of a kind";
  return `
    <a class="product-card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="thumb">
        <span class="badge">${escapeHTML(badge)}</span>
        <img src="${p.thumb}" alt="${escapeHTML(p.name)}" loading="lazy">
      </div>
      <h3>${escapeHTML(p.name)}</h3>
      <div class="meta">
        <span>${escapeHTML(p.tagline || "")}</span>
        <span class="price">${escapeHTML(p.price)}</span>
      </div>
    </a>
  `;
}

/* ---------- product detail page ---------- */

function renderProductDetail() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return; // not on this page

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = (window.PRODUCTS || []).find((p) => p.id === id);

  if (!product) {
    root.innerHTML = `
      <div class="not-found">
        <p class="eyebrow">Hmm</p>
        <h1>We couldn't find that display</h1>
        <p class="lede" style="margin:0 auto 1.6em;">It may have sold, or the link's out of date.</p>
        <a class="btn btn-primary" href="index.html#shop">Back to the collection</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} — Rockwood Displays`;

  const images = product.images && product.images.length ? product.images : [product.thumb];

  root.innerHTML = `
    <div class="gallery">
      <div class="gallery-main">
        <img data-main-image src="${images[0]}" alt="${escapeHTML(product.name)}">
      </div>
      ${
        images.length > 1
          ? `<div class="gallery-thumbs">
              ${images
                .map(
                  (src, i) => `
                <button type="button" data-thumb-index="${i}" class="${i === 0 ? "is-active" : ""}" aria-label="Show photo ${i + 1}">
                  <img src="${src}" alt="">
                </button>`
                )
                .join("")}
            </div>`
          : ""
      }
    </div>

    <div class="product-info">
      <div class="badge-row">
        ${(product.badges || []).map((b) => `<span class="pill">${escapeHTML(b)}</span>`).join("")}
      </div>
      <h1>${escapeHTML(product.name)}</h1>
      <p class="price">${escapeHTML(product.price)}${
    product.availability ? ` &middot; <span style="color:var(--ink-soft); font-weight:400;">${escapeHTML(product.availability)}</span>` : ""
  }</p>

      <div class="desc">
        ${(product.description || []).map((para) => `<p>${escapeHTML(para)}</p>`).join("")}
      </div>

      ${
        product.specs && product.specs.length
          ? `<dl class="specs">
              ${product.specs
                .map(([k, v]) => `<div class="row"><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`)
                .join("")}
            </dl>`
          : ""
      }

      <div class="product-actions">
        <a class="btn btn-primary" href="mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Inquiry: " + product.name)}">Inquire About This Piece</a>
        <a class="btn btn-outline" href="index.html#shop">Back to the collection</a>
      </div>
    </div>
  `;

  const mainImg = root.querySelector("[data-main-image]");
  root.querySelectorAll("[data-thumb-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-thumb-index"));
      mainImg.src = images[idx];
      root.querySelectorAll("[data-thumb-index]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

/* ---------- tiny helper ---------- */

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
