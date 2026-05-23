// Product data (mandatory list)
const products = [
  {
    id: 1,
    name: "Classic Vanilla Wafers",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "200g",
    price: 45,
    originalPrice: 55,
    discount: 18,
    rating: 4.4,
    reviews: "1.1k",
  },
  {
    id: 2,
    name: "Chocolate Cream Wafers",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "200g",
    price: 55,
    originalPrice: 65,
    discount: 15,
    rating: 4.5,
    reviews: "2.3k",
  },
  {
    id: 3,
    name: "Strawberry Wafer Rolls",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "150g",
    price: 60,
    originalPrice: 75,
    discount: 20,
    rating: 4.3,
    reviews: "940",
  },
  {
    id: 4,
    name: "Hazelnut Wafer Bites",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "180g",
    price: 85,
    originalPrice: 99,
    discount: 14,
    rating: 4.6,
    reviews: "1.5k",
  },
  {
    id: 5,
    name: "Dark Choco Wafer Sticks",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "120g",
    price: 65,
    originalPrice: 79,
    discount: 18,
    rating: 4.4,
    reviews: "1.2k",
  },
  {
    id: 6,
    name: "Caramel Wafer Bars",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "6 pack",
    price: 70,
    originalPrice: 85,
    discount: 18,
    rating: 4.2,
    reviews: "860",
  },
  {
    id: 7,
    name: "Coconut Wafer Cookies",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "160g",
    price: 58,
    originalPrice: 70,
    discount: 17,
    rating: 4.1,
    reviews: "720",
  },
  {
    id: 8,
    name: "Almond Crunch Wafers",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&auto=format",
    category: "Wafers",
    weight: "180g",
    price: 92,
    originalPrice: 110,
    discount: 16,
    rating: 4.7,
    reviews: "1.9k",
  },
  {
    id: 9,
    name: "Lay's Classic Salted",
    category: "Snacks",
    weight: "78g",
    price: 20,
    originalPrice: 20,
    discount: 0,
    rating: 4.3,
    reviews: "12k",
  },
  {
    id: 10,
    name: "Haldiram's Bhujia",
    category: "Snacks",
    weight: "400g",
    price: 149,
    originalPrice: 180,
    discount: 17,
    rating: 4.6,
    reviews: "7.3k",
  },
  {
    id: 11,
    name: "Oreo Biscuits",
    imageUrl: "https://images.openfoodfacts.org/images/products/762/220/175/6697/front_en.3.400.jpg",
    category: "Snacks",
    weight: "300g",
    price: 85,
    originalPrice: 99,
    discount: 14,
    rating: 4.5,
    reviews: "9.1k",
  },
  {
    id: 12,
    name: "Too Yumm Multigrain",
    category: "Snacks",
    weight: "150g",
    price: 55,
    originalPrice: 70,
    discount: 21,
    rating: 4.2,
    reviews: "2.4k",
  },
  {
    id: 13,
    name: "Tropicana Orange Juice",
    category: "Beverages",
    weight: "1L",
    price: 99,
    originalPrice: 120,
    discount: 18,
    rating: 4.4,
    reviews: "3.8k",
  },
  {
    id: 14,
    name: "Red Bull Energy Drink",
    imageUrl: "https://images.openfoodfacts.org/images/products/900/249/010/0759/front_en.18.400.jpg",
    category: "Beverages",
    weight: "250ml",
    price: 115,
    originalPrice: 125,
    discount: 8,
    rating: 4.6,
    reviews: "5.2k",
  },
  {
    id: 15,
    name: "Bisleri Water",
    category: "Beverages",
    weight: "1L",
    price: 20,
    originalPrice: 20,
    discount: 0,
    rating: 4.8,
    reviews: "15k",
  },
  {
    id: 16,
    name: "Nescafé Classic Coffee",
    category: "Beverages",
    weight: "200g",
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 4.7,
    reviews: "11k",
  },
  {
    id: 17,
    name: "Dove Soap",
    imageUrl: "https://placehold.co/300x300/f0f4ff/555?text=Dove+Soap",
    category: "Beauty & Cosmetics",
    weight: "100g",
    price: 55,
    originalPrice: 65,
    discount: 15,
    rating: 4.6,
    reviews: "6.3k",
  },
  {
    id: 18,
    name: "Head & Shoulders",
    imageUrl: "https://placehold.co/300x300/e8f0fe/555?text=Head+%26+Shoulders",
    category: "Beauty & Cosmetics",
    weight: "340ml",
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 4.5,
    reviews: "4.8k",
  },
  {
    id: 19,
    name: "Colgate MaxFresh",
    imageUrl: "https://placehold.co/300x300/e8fff4/555?text=Colgate+MaxFresh",
    category: "Beauty & Cosmetics",
    weight: "150g",
    price: 89,
    originalPrice: 105,
    discount: 15,
    rating: 4.4,
    reviews: "7.1k",
  },
  {
    id: 20,
    name: "Vaseline Body Lotion",
    imageUrl: "https://placehold.co/300x300/fff8e8/555?text=Vaseline+Lotion",
    category: "Beauty & Cosmetics",
    weight: "300ml",
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.5,
    reviews: "3.2k",
  },
  {
    id: 21,
    name: "Fortune Basmati Rice",
    imageUrl: "https://loremflickr.com/300/300/basmati,rice",
    category: "Staples",
    weight: "5kg",
    price: 399,
    originalPrice: 450,
    discount: 11,
    rating: 4.6,
    reviews: "9.8k",
  },
  {
    id: 22,
    name: "Tata Salt",
    category: "Staples",
    weight: "1kg",
    price: 24,
    originalPrice: 28,
    discount: 14,
    rating: 4.8,
    reviews: "22k",
  },
  {
    id: 23,
    name: "Aashirvaad Atta",
    imageUrl: "https://loremflickr.com/300/300/wheat,flour,atta",
    category: "Staples",
    weight: "5kg",
    price: 249,
    originalPrice: 285,
    discount: 13,
    rating: 4.7,
    reviews: "18k",
  },
  {
    id: 24,
    name: "Saffola Gold Oil",
    imageUrl: "https://loremflickr.com/300/300/sunflower,oil,bottle",
    category: "Staples",
    weight: "1L",
    price: 189,
    originalPrice: 220,
    discount: 14,
    rating: 4.5,
    reviews: "5.6k",
  },
  {
    id: 25,
    name: "Cadbury Silk",
    category: "Chocolates",
    weight: "110g",
    price: 80,
    originalPrice: 95,
    discount: 16,
    rating: 4.7,
    reviews: "12k",
  },
  {
    id: 26,
    name: "KitKat Classic",
    category: "Chocolates",
    weight: "45g",
    price: 25,
    originalPrice: 30,
    discount: 17,
    rating: 4.6,
    reviews: "9.4k",
  },
  {
    id: 27,
    name: "Ferrero Rocher",
    category: "Chocolates",
    weight: "200g",
    price: 450,
    originalPrice: 499,
    discount: 10,
    rating: 4.8,
    reviews: "3.1k",
  },
  {
    id: 28,
    name: "MDH Garam Masala",
    imageUrl: "https://images.openfoodfacts.org/images/products/629/110/375/0167/front_en.5.400.jpg",
    category: "Spices",
    weight: "100g",
    price: 65,
    originalPrice: 75,
    discount: 13,
    rating: 4.6,
    reviews: "6.9k",
  },
  {
    id: 29,
    name: "Everest Chilli Powder",
    imageUrl: "https://images.openfoodfacts.org/images/products/890/178/639/0151/front_en.4.400.jpg",
    category: "Spices",
    weight: "100g",
    price: 58,
    originalPrice: 70,
    discount: 17,
    rating: 4.5,
    reviews: "5.4k",
  },
  {
    id: 30,
    name: "Tata Sampann Turmeric",
    category: "Spices",
    weight: "200g",
    price: 72,
    originalPrice: 85,
    discount: 15,
    rating: 4.6,
    reviews: "4.2k",
  },
  {
    id: 31,
    name: "Surf Excel Detergent",
    imageUrl: "https://placehold.co/300x300/e8f4ff/555?text=Surf+Excel",
    category: "Household Essentials",
    weight: "2kg",
    price: 299,
    originalPrice: 340,
    discount: 12,
    rating: 4.4,
    reviews: "7.8k",
  },
  {
    id: 32,
    name: "Vim Dishwash Gel",
    imageUrl: "https://placehold.co/300x300/f0ffe8/555?text=Vim+Dishwash",
    category: "Household Essentials",
    weight: "500ml",
    price: 109,
    originalPrice: 125,
    discount: 13,
    rating: 4.5,
    reviews: "3.9k",
  },
  {
    id: 33,
    name: "Harpic Toilet Cleaner",
    imageUrl: "https://placehold.co/300x300/fff0f0/555?text=Harpic",
    category: "Household Essentials",
    weight: "1L",
    price: 189,
    originalPrice: 215,
    discount: 12,
    rating: 4.6,
    reviews: "4.1k",
  },
  {
    id: 34,
    name: "LEGO Classic Bricks",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxtDSDoA8Zs6mz2RnS76yAJDHuV1lfAbLPOpsr7w4uYonti3MPg9YeZEBtOd6yxi5kEhoBUKOOdL4kXUNC3OlsvY8g8ueSCw",
    category: "Kids Toys",
    weight: "1 set",
    price: 799,
    originalPrice: 899,
    discount: 11,
    rating: 4.8,
    reviews: "2.6k",
  },
  {
    id: 35,
    name: "Hot Wheels Racer Car",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDEYXTOidJQlbuEFOyH69EbYDhr-uQy68RaIS9F_yYwisOOqpJwd5WZEHPm_eB1gVrSoeqzSIojOA2e-VpLTqxGTM0J4LtulmgyHcetkvB1_fm_FQFkgM_7K0",
    category: "Kids Toys",
    weight: "1 pc",
    price: 149,
    originalPrice: 179,
    discount: 17,
    rating: 4.7,
    reviews: "5.5k",
  },
  {
    id: 36,
    name: "Barbie Fashion Doll",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQn2D8wL8tulwx1AGGSVqGpu7T_2u4jA_ZjC_chl_SlzAjxRZnaH9h0aOLNO3QuTeVhHYT0ADl2-zSe9UEz2uxChuqj55ZZ7sRoun4YrBnMpvO2RP8oKAodhA",
    category: "Kids Toys",
    weight: "1 pc",
    price: 999,
    originalPrice: 1199,
    discount: 17,
    rating: 4.6,
    reviews: "1.8k",
  },
];

// Category metadata for the grid and tabs
const categoryMeta = [
  { label: "Wafers", emoji: "🍪" },
  { label: "Beauty & Cosmetics", emoji: "💄" },
  { label: "Chocolates", emoji: "🍫" },
  { label: "Snacks", emoji: "🍿" },
  { label: "Beverages", emoji: "🥤" },
  { label: "Spices", emoji: "🌶️" },
  { label: "Household Essentials", emoji: "🏠" },
  { label: "Kids Toys", emoji: "🧸" },
  { label: "Cleaning", emoji: "🧹" },
  { label: "Staples", emoji: "🍚" },
  { label: "Cooking Essentials", emoji: "🍳" },
  { label: "Health", emoji: "💊" },
];

const DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 40;
const STORAGE_KEYS = {
  cart: "shopmart_cart",
  wishlist: "shopmart_wishlist",
};
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// UI state (in-memory for session persistence)
const state = {
  activeCategory: "All",
  searchTerm: "",
  cart: new Map(),
  wishlist: new Set(),
};

const elements = {
  categoryGrid: document.getElementById("categoryGrid"),
  categoryTabs: document.getElementById("categoryTabs"),
  productGrid: document.getElementById("productGrid"),
  productCount: document.getElementById("productCount"),
  cartCount: document.getElementById("cartCount"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDelivery: document.getElementById("cartDelivery"),
  cartButton: document.getElementById("cartButton"),
  closeCart: document.getElementById("closeCart"),
  overlay: document.getElementById("overlay"),
  searchInput: document.getElementById("searchInput"),
  backToTop: document.getElementById("backToTop"),
  toast: document.getElementById("toast"),
  checkoutButton: document.getElementById("checkoutButton"),
  header: document.getElementById("siteHeader"),
  carousel: document.getElementById("heroCarousel"),
  prevSlide: document.getElementById("prevSlide"),
  nextSlide: document.getElementById("nextSlide"),
  slides: document.querySelectorAll(".slide"),
};

let toastTimer;
let carouselTimer;
let activeSlideIndex = 0;

const formatPrice = (value) => `₹${value}`;

const getScrollBehavior = () => (motionQuery.matches ? "auto" : "smooth");

const PRODUCT_IMAGE_PLACEHOLDER = "https://placehold.co/300x300?text=Loading";

const updateProductImage = (product) => {
  if (!product.imageUrl) return;
  const images = document.querySelectorAll(`img[data-product-id="${product.id}"]`);
  images.forEach((img) => {
    img.src = product.imageUrl;
  });
};

const loadProductImage = async (product) => {
  if (product.imageUrl) return;
  const searchUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
    product.name
  )}&search_simple=1&action=process&json=1&page_size=1&fields=image_url`;
  try {
    const res = await fetch(searchUrl);
    if (!res.ok) {
      console.warn(`Unable to fetch image for ${product.name}.`, res.status);
      return;
    }
    const data = await res.json();
    if (data.products?.[0]?.image_url) {
      product.imageUrl = data.products[0].image_url;
      updateProductImage(product);
    }
  } catch (error) {
    console.warn(`Unable to fetch image for ${product.name}.`, error);
  }
};

const loadMissingProductImages = () => {
  products.forEach((product) => {
    if (!product.imageUrl) {
      void loadProductImage(product);
    }
  });
};

const canPersist = () =>
  typeof window !== "undefined" && Object.prototype.hasOwnProperty.call(window, "localStorage");

const safeParse = (key, fallback) => {
  if (!canPersist()) return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Unable to parse ${key}; resetting saved state.`, error);
    localStorage.removeItem(key);
    return fallback;
  }
};

const persistCart = () => {
  if (!canPersist()) return;
  const cartObj = Object.fromEntries(state.cart.entries());
  try {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartObj));
  } catch (error) {
    console.warn("Unable to persist cart state.", error);
  }
};

const persistWishlist = () => {
  if (!canPersist()) return;
  try {
    localStorage.setItem(
      STORAGE_KEYS.wishlist,
      JSON.stringify(Array.from(state.wishlist))
    );
  } catch (error) {
    console.warn("Unable to persist wishlist state.", error);
  }
};

const hydrateState = () => {
  const savedCart = safeParse(STORAGE_KEYS.cart, {});
  const savedWishlist = safeParse(STORAGE_KEYS.wishlist, []);
  let cartChanged = false;
  let wishlistChanged = false;

  if (savedCart && typeof savedCart === "object") {
    Object.entries(savedCart).forEach(([id, qty]) => {
      const productId = Number(id);
      const quantity = Math.floor(Number(qty));
      const exists = products.some((item) => item.id === productId);
      if (!exists || !Number.isFinite(quantity) || quantity <= 0) {
        cartChanged = true;
        return;
      }
      state.cart.set(productId, quantity);
    });
  } else if (savedCart) {
    cartChanged = true;
  }

  if (Array.isArray(savedWishlist)) {
    savedWishlist.forEach((id) => {
      const productId = Number(id);
      const exists = products.some((item) => item.id === productId);
      if (!exists) {
        wishlistChanged = true;
        return;
      }
      state.wishlist.add(productId);
    });
  } else if (savedWishlist) {
    wishlistChanged = true;
  }

  if (cartChanged) {
    persistCart();
  }
  if (wishlistChanged) {
    persistWishlist();
  }
};

const getCartTotal = () =>
  Array.from(state.cart.entries()).reduce((total, [id, qty]) => {
    const product = products.find((item) => item.id === id);
    if (!product) return total;
    return total + product.price * qty;
  }, 0);

const updateCartBadge = () => {
  const totalQty = Array.from(state.cart.values()).reduce(
    (sum, qty) => sum + qty,
    0
  );
  elements.cartCount.textContent = totalQty;
};

const showToast = (message) => {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2000);
};

const setCartOpen = (isOpen) => {
  elements.cartDrawer.classList.toggle("open", isOpen);
  elements.overlay.classList.toggle("show", isOpen);
  elements.cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  elements.cartButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("no-scroll", isOpen);
  if (isOpen) {
    elements.closeCart.focus();
  } else {
    elements.cartButton.focus();
  }
};

const openCart = () => setCartOpen(true);
const closeCart = () => setCartOpen(false);

const setActiveCategory = (category) => {
  state.activeCategory = category;
  renderCategoryGrid();
  renderCategoryTabs();
  renderProducts();
  document
    .getElementById("productsSection")
    .scrollIntoView({ behavior: getScrollBehavior() });
};

// Renderers
const renderCategoryGrid = () => {
  elements.categoryGrid.innerHTML = categoryMeta
    .map(
      (item) => {
        const isActive = state.activeCategory === item.label;
        return `
        <button class="category-card ${isActive ? "active" : ""}" data-category="${
          item.label
        }" aria-pressed="${isActive}">
          <span class="emoji">${item.emoji}</span>
          <span>${item.label}</span>
        </button>
      `;
      }
    )
    .join("");
};

const renderCategoryTabs = () => {
  const tabs = ["All", ...categoryMeta.map((item) => item.label)];
  elements.categoryTabs.innerHTML = tabs
    .map((label) => {
      const isActive = label === state.activeCategory;
      return `
        <button
          class="filter-tab ${isActive ? "active" : ""}"
          data-category="${label}"
          role="tab"
          aria-selected="${isActive}"
        >
          ${label}
        </button>
      `;
    })
    .join("");
};

const getFilteredProducts = () => {
  const searchTerm = state.searchTerm.toLowerCase();
  return products.filter((product) => {
    const matchesCategory =
      state.activeCategory === "All" ||
      product.category === state.activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
};

const renderProducts = () => {
  const filtered = getFilteredProducts();
  elements.productCount.textContent = `(${filtered.length} products)`;

  if (filtered.length === 0) {
    const emptyMessage = state.searchTerm
      ? `No products found for "${state.searchTerm}".`
      : state.activeCategory === "All"
      ? "No products found right now."
      : `No products available in ${state.activeCategory} yet.`;
    elements.productGrid.innerHTML = `
      <div class="empty-state">
        ${emptyMessage} Try another category or search term.
      </div>
    `;
    return;
  }

  elements.productGrid.innerHTML = filtered
    .map((product) => {
      const deliveryEligible = product.price > 99;
      const discountClass = product.discount === 0 ? "neutral" : "";
      const isWishlisted = state.wishlist.has(product.id);
      const productImage = product.imageUrl || PRODUCT_IMAGE_PLACEHOLDER;
      return `
        <div class="product-card">
          <div class="product-badges">
            <span class="discount-badge ${discountClass}">${product.discount}% OFF</span>
            ${
              deliveryEligible
                ? '<span class="delivery-badge">FREE Delivery</span>'
                : ""
            }
          </div>
          <button
            class="wishlist-btn ${isWishlisted ? "active" : ""}"
            data-id="${product.id}"
            aria-label="Toggle wishlist"
            aria-pressed="${isWishlisted}"
          >
            ❤
          </button>
          <img
            src="${productImage}"
            alt="${product.name}"
            data-product-id="${product.id}"
            loading="lazy"
          />
          <h3>${product.name}</h3>
          <p class="weight">${product.weight}</p>
          <div class="price-row">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="mrp">${formatPrice(product.originalPrice)}</span>
          </div>
          <div class="rating">⭐ ${product.rating} · ${
        product.reviews
      } reviews</div>
          <button
            class="btn-primary add-to-cart"
            data-id="${product.id}"
            type="button"
            aria-label="Add ${product.name} to cart"
          >
            Add to Cart
          </button>
        </div>
      `;
    })
    .join("");
};

const renderCart = () => {
  if (state.cart.size === 0) {
    elements.cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="emoji">🛒</div>
        <p>Your cart is empty.</p>
        <p>Add items to see them here.</p>
      </div>
    `;
  } else {
    elements.cartItems.innerHTML = Array.from(state.cart.entries())
      .map(([id, qty]) => {
        const product = products.find((item) => item.id === id);
        const productImage = product.imageUrl || PRODUCT_IMAGE_PLACEHOLDER;
        return `
          <div class="cart-item">
            <img
              src="${productImage}"
              alt="${product.name}"
              data-product-id="${product.id}"
              loading="lazy"
            />
            <div>
              <h4>${product.name}</h4>
              <p class="weight">${product.weight}</p>
              <div class="qty-controls">
                <button
                  class="qty-btn"
                  data-action="decrease"
                  data-id="${id}"
                  aria-label="Decrease ${product.name} quantity"
                >
                  −
                </button>
                <span>${qty}</span>
                <button
                  class="qty-btn"
                  data-action="increase"
                  data-id="${id}"
                  aria-label="Increase ${product.name} quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div class="cart-item-meta">
              <div>${formatPrice(product.price * qty)}</div>
              <button
                class="remove-btn"
                data-action="remove"
                data-id="${id}"
                aria-label="Remove ${product.name}"
              >
                ×
              </button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const subtotal = getCartTotal();
  const deliveryFee = subtotal === 0 || subtotal >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  elements.cartSubtotal.textContent = formatPrice(subtotal);
  elements.cartDelivery.textContent = deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee);
};

// Cart helpers
const addToCart = (id) => {
  const currentQty = state.cart.get(id) || 0;
  state.cart.set(id, currentQty + 1);
  updateCartBadge();
  renderCart();
  persistCart();
  showToast("✓ Added to cart!");
};

const updateCartQty = (id, delta) => {
  const currentQty = state.cart.get(id) || 0;
  const newQty = currentQty + delta;
  if (newQty <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, newQty);
  }
  updateCartBadge();
  renderCart();
  persistCart();
};

const toggleWishlist = (id) => {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
  } else {
    state.wishlist.add(id);
  }
  renderProducts();
  persistWishlist();
};

// Carousel
const showSlide = (index) => {
  const slides = Array.from(elements.slides);
  activeSlideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === activeSlideIndex);
  });
};

const startCarousel = () => {
  clearInterval(carouselTimer);
  if (motionQuery.matches) return;
  carouselTimer = setInterval(() => {
    showSlide(activeSlideIndex + 1);
  }, 3000);
};

const stopCarousel = () => {
  clearInterval(carouselTimer);
};

const handleScroll = () => {
  const isSticky = window.scrollY > 10;
  const showBackToTop = window.scrollY > 300;
  elements.header.classList.toggle("sticky", isSticky);
  elements.backToTop.classList.toggle("show", showBackToTop);
};

const handleMotionPreference = () => {
  if (motionQuery.matches) {
    stopCarousel();
  } else {
    startCarousel();
  }
};

const init = () => {
  hydrateState();
  renderCategoryGrid();
  renderCategoryTabs();
  renderProducts();
  loadMissingProductImages();
  renderCart();
  updateCartBadge();
  handleMotionPreference();
  handleScroll();
};

// Event wiring
elements.categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".category-card");
  if (!card) return;
  setActiveCategory(card.dataset.category);
});

elements.categoryTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".filter-tab");
  if (!tab) return;
  setActiveCategory(tab.dataset.category);
});

elements.productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-to-cart");
  if (addButton) {
    addToCart(Number(addButton.dataset.id));
    return;
  }

  const wishlistButton = event.target.closest(".wishlist-btn");
  if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.id));
  }
});

elements.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  if (action === "increase") updateCartQty(id, 1);
  if (action === "decrease") updateCartQty(id, -1);
  if (action === "remove") {
    state.cart.delete(id);
    updateCartBadge();
    renderCart();
    persistCart();
  }
});

elements.cartButton.addEventListener("click", openCart);
elements.closeCart.addEventListener("click", closeCart);
elements.overlay.addEventListener("click", closeCart);

elements.searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value.trim();
  renderProducts();
});

elements.checkoutButton.addEventListener("click", () => {
  alert("Checkout is a demo flow. Thanks for shopping!");
});

elements.backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
});

elements.prevSlide.addEventListener("click", () => {
  showSlide(activeSlideIndex - 1);
  startCarousel();
});

elements.nextSlide.addEventListener("click", () => {
  showSlide(activeSlideIndex + 1);
  startCarousel();
});

elements.carousel.addEventListener("mouseenter", stopCarousel);
elements.carousel.addEventListener("mouseleave", startCarousel);
elements.carousel.addEventListener("focusin", stopCarousel);
elements.carousel.addEventListener("focusout", startCarousel);

if (typeof motionQuery.addEventListener === "function") {
  motionQuery.addEventListener("change", handleMotionPreference);
} else if (typeof motionQuery.addListener === "function") {
  motionQuery.addListener(handleMotionPreference);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.cartDrawer.classList.contains("open")) {
    closeCart();
  }
});

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", init);
