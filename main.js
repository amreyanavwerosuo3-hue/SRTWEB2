// ---- CART ----
function getCart() {
  return JSON.parse(localStorage.getItem('tn_cart') || '[]');
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  localStorage.setItem('tn_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-flex' : 'none';
  });
}

// ---- TOAST ----
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- PRODUCT GRID ----
function renderProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding:3rem 0; grid-column:1/-1;">No products found.</p>';
    return;
  }

  container.innerHTML = products.map(p => `
    <div class="product-card">
      <a href="product.html?id=${p.id}" class="product-card-img">${p.emoji}</a>
      <div class="product-card-body">
        <span class="product-category-tag">${p.category}</span>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="stars small">★★★★★</div>
        <div class="product-card-footer">
          <span class="product-price">₦${p.price.toLocaleString()}</span>
          <button class="add-cart-btn" onclick="addToCart(${p.id}); showToast('Added to cart!');">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- NAV MOBILE ----
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
});