// Product data (mandatory list)
const products = [
  {
    id: 1,
    name: "Classic Vanilla Wafers",
    imageUrl: "https://m.media-amazon.com/images/I/51wwmHvS7+L._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/710s+hyguhL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/51tUI0hUdrL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/71Ts3zLD7+L._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/41muoUYCsnL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/71r7NSzJvSL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/61G+MZnvtbL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/71EsKPwvIEL._AC_UL320_.jpg",
    category: "Snacks",
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
    imageUrl: "https://m.media-amazon.com/images/I/81rrNUIq9FL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71ErNqU8prL._AC_UL320_.jpg",
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
    name: "Orea biscuits",
    imageUrl: "https://m.media-amazon.com/images/I/61hEMqqoGxL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61k5oVIwLML._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71GKSeI9+HL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71H2iEdBRfL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61AeDsKQjmL._AC_UL320_.jpg",
    category: "Water",
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
    imageUrl: "https://m.media-amazon.com/images/I/71WjTHrTwJL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/51Xjh93u1jL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71YqOlldxRL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71nFBscCkvL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/51VUOVQHL5L._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/718jTNHNlCL._AC_UL320_.jpg",
    category: "Basics",
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
    imageUrl: "https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UL320_.jpg",
    category: "Basics",
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
    imageUrl: "https://m.media-amazon.com/images/I/91Lj2AJXfOL._AC_UL320_.jpg",
    category: "Basics",
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
    imageUrl: "https://m.media-amazon.com/images/I/71qTlx+7CzL._AC_UL320_.jpg",
    category: "Basics",
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
    imageUrl: "https://m.media-amazon.com/images/I/71+dc4WOlEL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/71BdjHFKjTL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/617c5JwVjQL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61MyqJ4PkEL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/81HPTcGyDdL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61c+jv2PrNL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61akecKSiLL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/51A8+b9ZgHL._AC_UL320_.jpg",
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
    imageUrl: "https://m.media-amazon.com/images/I/61j+zu68oTL._AC_UL320_.jpg",
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
    name: "Vimal Classic Gutkha",
    imageUrl: "https://storage.googleapis.com/shy-pub/309224/images-1722344344632.jpeg",
    category: "Gutkha",
    weight: "10 sachets",
    price: 45,
    originalPrice: 55,
    discount: 18,
    rating: 4.2,
    reviews: "1.2k",
  },
  {
    id: 35,
    name: "Rajnigandha Pearls",
    imageUrl: "https://m.media-amazon.com/images/I/61dQgILttqL._AC_UL320_.jpg",
    category: "Gutkha",
    weight: "6 sachets",
    price: 60,
    originalPrice: 72,
    discount: 17,
    rating: 4.4,
    reviews: "980",
  },
  {
    id: 37,
    name: "Baba Elaichi Mix",
    imageUrl: "https://m.media-amazon.com/images/I/71-Q3JmTexL._AC_UL320_.jpg",
    category: "Gutkha",
    weight: "8 sachets",
    price: 40,
    originalPrice: 50,
    discount: 20,
    rating: 4.0,
    reviews: "720",
  },
  {
    id: 38,
    name: "Aquafina Water",
    imageUrl: "https://m.media-amazon.com/images/I/81Th2waxaCL._AC_UL320_.jpg",
    category: "Water",
    weight: "1L",
    price: 22,
    originalPrice: 25,
    discount: 12,
    rating: 4.6,
    reviews: "6.9k",
  },
  {
    id: 39,
    name: "Kinley Water",
    imageUrl: "https://m.media-amazon.com/images/I/51IzSgO0vJL._AC_UL320_.jpg",
    category: "Water",
    weight: "1L",
    price: 20,
    originalPrice: 20,
    discount: 0,
    rating: 4.7,
    reviews: "9.4k",
  },
  {
    id: 40,
    name: "Himalayan Natural Water",
    imageUrl: "https://m.media-amazon.com/images/I/51nBbDPmSuL._AC_UL320_.jpg",
    category: "Water",
    weight: "1L",
    price: 70,
    originalPrice: 80,
    discount: 12,
    rating: 4.5,
    reviews: "1.8k",
  },
  {
    id: 43,
    name: "Vedica Himalayan Water",
    imageUrl: "https://m.media-amazon.com/images/I/51uy1OK1vpL._AC_UL320_.jpg",
    category: "Water",
    weight: "1L",
    price: 65,
    originalPrice: 75,
    discount: 13,
    rating: 4.5,
    reviews: "1.1k",
  },
  {
    id: 44,
    name: "Bisleri Water Jar",
    imageUrl: "https://m.media-amazon.com/images/I/51SZnVrmKQL._AC_UL320_.jpg",
    category: "Water",
    weight: "20L",
    price: 90,
    originalPrice: 100,
    discount: 10,
    rating: 4.6,
    reviews: "2.9k",
  },
];

// Category metadata for the grid and tabs
const categoryMeta = [
  { label: "Beauty & Cosmetics", emoji: "💄" },
  { label: "Chocolates", emoji: "🍫" },
  { label: "Snacks", emoji: "🍿" },
  { label: "Gutkha", emoji: "🌿" },
  { label: "Beverages", emoji: "🥤" },
  { label: "Water", emoji: "💧" },
  { label: "Spices", emoji: "🌶️" },
  { label: "Household Essentials", emoji: "🏠" },
  { label: "Cleaning", emoji: "🧹" },
  { label: "Basics", emoji: "🍚" },
  { label: "Cooking Essentials", emoji: "🍳" },
];

const DELIVERY_THRESHOLD = 499;
const DELIVERY_FEE = 40;
const STORAGE_KEYS = {
  cart: "shopmart_cart",
  wishlist: "shopmart_wishlist",
  theme: "shopmart_theme",
};
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// UI state (in-memory for session persistence)
const state = {
  activeCategory: "All",
  searchTerm: "",
  cart: new Map(),
  wishlist: new Set(),
  theme: "light",
};

const elements = {
  categoryGrid: document.getElementById("categoryGrid"),
  categoryTabs: document.getElementById("categoryTabs"),
  productGrid: document.getElementById("productGrid"),
  productCount: document.getElementById("productCount"),
  cartCount: document.getElementById("cartCount"),
  wishlistCount: document.getElementById("wishlistCount"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDelivery: document.getElementById("cartDelivery"),
  cartButton: document.getElementById("cartButton"),
  wishlistButton: document.getElementById("wishlistButton"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistItems: document.getElementById("wishlistItems"),
  closeWishlist: document.getElementById("closeWishlist"),
  loginButton: document.getElementById("loginButton"),
  closeCart: document.getElementById("closeCart"),
  overlay: document.getElementById("overlay"),
  searchInput: document.getElementById("searchInput"),
  backToTop: document.getElementById("backToTop"),
  toast: document.getElementById("toast"),
  checkoutButton: document.getElementById("checkoutButton"),
  header: document.getElementById("siteHeader"),
  carousel: document.getElementById("heroCarousel"),
  carouselDots: document.getElementById("carouselDots"),
  prevSlide: document.getElementById("prevSlide"),
  nextSlide: document.getElementById("nextSlide"),
  slides: document.querySelectorAll(".slide"),
  accountModal: document.getElementById("accountModal"),
  closeAccountModal: document.getElementById("closeAccountModal"),
  accountSubmit: document.getElementById("accountSubmit"),
  quickViewModal: document.getElementById("quickViewModal"),
  closeQuickView: document.getElementById("closeQuickView"),
  quickViewImage: document.getElementById("quickViewImage"),
  quickViewTitle: document.getElementById("quickViewTitle"),
  quickViewWeight: document.getElementById("quickViewWeight"),
  quickViewPrice: document.getElementById("quickViewPrice"),
  quickViewMrp: document.getElementById("quickViewMrp"),
  quickViewRating: document.getElementById("quickViewRating"),
  quickViewQty: document.getElementById("quickViewQty"),
  quickViewAdd: document.getElementById("quickViewAdd"),
  themeToggle: document.getElementById("themeToggle"),
};

let toastTimer;
let carouselTimer;
let activeSlideIndex = 0;
let activeDialog = null;
let activeDialogTrigger = null;
let releaseFocusTrap = null;

const formatPrice = (value) => `₹${value}`;

const getScrollBehavior = () => (motionQuery.matches ? "auto" : "smooth");

const getProductImage = (name) =>
  `https://placehold.co/300x300/f5f5f5/555?text=${encodeURIComponent(name)}`;

const canPersist = () =>
  typeof window !== "undefined" && Object.prototype.hasOwnProperty.call(window, "localStorage");

const safeGetItem = (key) => {
  if (!canPersist()) return null;
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Unable to read ${key} from storage.`, error);
    return null;
  }
};

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

const debounce = (callback, delay = 200) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

const trapFocus = (container) => {
  const handleKeydown = (event) => {
    if (event.key !== "Tab") return;
    const focusables = Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  container.addEventListener("keydown", handleKeydown);
  const focusTarget =
    container.querySelector("[data-autofocus]") ||
    container.querySelector(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) ||
    container;
  focusTarget.focus();

  return () => {
    container.removeEventListener("keydown", handleKeydown);
  };
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

const setTheme = (theme) => {
  state.theme = theme === "dark" ? "dark" : "light";
  document.body.classList.toggle("theme-dark", state.theme === "dark");
  if (canPersist()) {
    try {
      localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    } catch (error) {
      console.warn("Unable to persist theme preference.", error);
    }
  }
  if (elements.themeToggle) {
    elements.themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
    const icon = elements.themeToggle.querySelector(".icon");
    if (icon) {
      icon.textContent = state.theme === "dark" ? "☀️" : "🌙";
    }
  }
};

const hydrateTheme = () => {
  const savedTheme = safeGetItem(STORAGE_KEYS.theme);
  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
    return;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
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

const updateWishlistBadge = () => {
  if (!elements.wishlistCount) return;
  elements.wishlistCount.textContent = state.wishlist.size;
};

const showToast = (message) => {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2000);
};

const openDialog = (dialog, trigger) => {
  if (!dialog) return;
  if (activeDialog && activeDialog !== dialog) {
    closeActiveDialog();
  }
  activeDialog = dialog;
  activeDialogTrigger = trigger || null;
  dialog.classList.add("open");
  dialog.setAttribute("aria-hidden", "false");
  elements.overlay.classList.add("show");
  elements.overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  if (releaseFocusTrap) releaseFocusTrap();
  releaseFocusTrap = trapFocus(dialog);
};

const closeDialog = (dialog = activeDialog) => {
  if (!dialog) return;
  dialog.classList.remove("open");
  dialog.setAttribute("aria-hidden", "true");
  elements.overlay.classList.remove("show");
  elements.overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (releaseFocusTrap) {
    releaseFocusTrap();
    releaseFocusTrap = null;
  }
  if (activeDialogTrigger) {
    activeDialogTrigger.focus();
  }
  if (activeDialog === dialog) {
    activeDialog = null;
    activeDialogTrigger = null;
  }
};

const openCart = () => {
  elements.cartButton.setAttribute("aria-expanded", "true");
  openDialog(elements.cartDrawer, elements.cartButton);
};

const closeCart = () => {
  elements.cartButton.setAttribute("aria-expanded", "false");
  closeDialog(elements.cartDrawer);
};

const openWishlist = () => {
  elements.wishlistButton.setAttribute("aria-expanded", "true");
  openDialog(elements.wishlistDrawer, elements.wishlistButton);
};

const closeWishlist = () => {
  elements.wishlistButton.setAttribute("aria-expanded", "false");
  closeDialog(elements.wishlistDrawer);
};

const closeActiveDialog = () => {
  if (!activeDialog) return;
  if (activeDialog === elements.cartDrawer) {
    closeCart();
    return;
  }
  if (activeDialog === elements.wishlistDrawer) {
    closeWishlist();
    return;
  }
  closeDialog(activeDialog);
};

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
      const productImage = product.imageUrl || getProductImage(product.name);
      const wishlistLabel = isWishlisted
        ? `Remove ${product.name} from wishlist`
        : `Add ${product.name} to wishlist`;
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
            aria-label="${wishlistLabel}"
            aria-pressed="${isWishlisted}"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button
            class="quick-view-trigger"
            data-id="${product.id}"
            type="button"
            aria-label="Open quick view for ${product.name}"
          >
            <img src="${productImage}" alt="${product.name}" loading="lazy" />
          </button>
          <button
            class="quick-view-trigger"
            data-id="${product.id}"
            type="button"
            aria-label="Open quick view for ${product.name}"
          >
            <h3>${product.name}</h3>
          </button>
          <p class="weight">${product.weight}</p>
          <div class="price-row">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="mrp">${formatPrice(product.originalPrice)}</span>
          </div>
          <div class="rating">⭐ ${product.rating} · ${
        product.reviews
      } reviews</div>
          <div class="product-actions">
            <div class="qty-stepper" data-id="${product.id}">
              <button
                class="qty-btn"
                data-action="decrease"
                data-id="${product.id}"
                type="button"
                aria-label="Decrease ${product.name} quantity"
              >
                −
              </button>
              <input
                class="qty-input"
                data-id="${product.id}"
                type="number"
                min="1"
                value="1"
                aria-label="${product.name} quantity"
              />
              <button
                class="qty-btn"
                data-action="increase"
                data-id="${product.id}"
                type="button"
                aria-label="Increase ${product.name} quantity"
              >
                +
              </button>
            </div>
            <button
              class="btn-primary add-to-cart"
              data-id="${product.id}"
              type="button"
              aria-label="Add ${product.name} to cart"
            >
              Add to Cart
            </button>
          </div>
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
    const cartItems = Array.from(state.cart.entries())
      .map(([id, qty]) => {
        const product = products.find((item) => item.id === id);
        if (!product) return null;
        return { product, qty };
      })
      .filter(Boolean);
    if (cartItems.length === 0) {
      elements.cartItems.innerHTML = `
        <div class="cart-empty">
          <div class="emoji">🛒</div>
          <p>Your cart is empty.</p>
          <p>Add items to see them here.</p>
        </div>
      `;
    } else {
      elements.cartItems.innerHTML = cartItems
        .map(({ product, qty }) => {
          const productImage = product.imageUrl || getProductImage(product.name);
          return `
          <div class="cart-item">
            <img src="${productImage}" alt="${product.name}" loading="lazy" />
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
  }

  const subtotal = getCartTotal();
  const deliveryFee = subtotal === 0 || subtotal >= DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  elements.cartSubtotal.textContent = formatPrice(subtotal);
  elements.cartDelivery.textContent = deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee);
};

const renderWishlist = () => {
  if (state.wishlist.size === 0) {
    elements.wishlistItems.innerHTML = `
      <div class="cart-empty">
        <div class="emoji">💛</div>
        <p>Your wishlist is empty.</p>
        <p>Tap the heart icon to save items.</p>
      </div>
    `;
    updateWishlistBadge();
    return;
  }

  const wishlistProducts = Array.from(state.wishlist.values())
    .map((id) => products.find((item) => item.id === id))
    .filter(Boolean);

  if (wishlistProducts.length === 0) {
    elements.wishlistItems.innerHTML = `
      <div class="cart-empty">
        <div class="emoji">💛</div>
        <p>Your wishlist is empty.</p>
        <p>Tap the heart icon to save items.</p>
      </div>
    `;
    updateWishlistBadge();
    return;
  }

  elements.wishlistItems.innerHTML = wishlistProducts
    .map((product) => {
      const id = product.id;
      const productImage = product.imageUrl || getProductImage(product.name);
      return `
        <div class="cart-item">
          <img src="${productImage}" alt="${product.name}" loading="lazy" />
          <div>
            <h4>${product.name}</h4>
            <p class="weight">${product.weight}</p>
            <div class="wishlist-actions">
              <button
                class="btn-outline"
                data-action="add-to-cart"
                data-id="${id}"
                type="button"
                aria-label="Add ${product.name} to cart"
              >
                Add to Cart
              </button>
              <button
                class="remove-btn"
                data-action="remove-wishlist"
                data-id="${id}"
                type="button"
                aria-label="Remove ${product.name} from wishlist"
              >
                ×
              </button>
            </div>
          </div>
          <div class="cart-item-meta">
            <div>${formatPrice(product.price)}</div>
          </div>
        </div>
      `;
    })
    .join("");
  updateWishlistBadge();
};

// Cart helpers
const parseQuantity = (value, fallback = 1) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const normalizeQuantityInput = (input) => {
  if (!input) return;
  const nextValue = parseQuantity(input.value, 1);
  input.value = String(nextValue);
};

const addToCart = (id, quantity) => {
  const sanitizedQty = parseQuantity(quantity, 0);
  if (sanitizedQty <= 0) return;
  const currentQty = state.cart.get(id) || 0;
  state.cart.set(id, currentQty + sanitizedQty);
  updateCartBadge();
  renderCart();
  persistCart();
  showToast(`✓ Added ${sanitizedQty} to cart!`);
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
  renderWishlist();
  persistWishlist();
};

const openQuickView = (productId, trigger) => {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  elements.quickViewTitle.textContent = product.name;
  elements.quickViewImage.src = product.imageUrl || getProductImage(product.name);
  elements.quickViewImage.alt = product.name;
  elements.quickViewWeight.textContent = product.weight;
  elements.quickViewPrice.textContent = formatPrice(product.price);
  elements.quickViewMrp.textContent = formatPrice(product.originalPrice);
  elements.quickViewRating.textContent = `⭐ ${product.rating} · ${product.reviews} reviews`;
  elements.quickViewQty.value = "1";
  elements.quickViewAdd.dataset.id = String(product.id);
  openDialog(elements.quickViewModal, trigger);
};

// Carousel
const showSlide = (index) => {
  const slides = Array.from(elements.slides);
  activeSlideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === activeSlideIndex);
  });
  if (elements.carouselDots) {
    const dots = elements.carouselDots.querySelectorAll(".carousel-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeSlideIndex);
      dot.setAttribute("aria-selected", String(idx === activeSlideIndex));
    });
  }
};

const renderCarouselDots = () => {
  if (!elements.carouselDots) return;
  elements.carouselDots.innerHTML = Array.from(elements.slides)
    .map((_, idx) => {
      const isActive = idx === activeSlideIndex;
      return `
        <button
          class="carousel-dot ${isActive ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${isActive}"
          aria-label="Go to slide ${idx + 1}"
          data-slide="${idx}"
        ></button>
      `;
    })
    .join("");
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
  const initialSlide = Array.from(elements.slides).findIndex((slide) =>
    slide.classList.contains("active")
  );
  if (initialSlide >= 0) {
    activeSlideIndex = initialSlide;
  }
  hydrateState();
  hydrateTheme();
  renderCategoryGrid();
  renderCategoryTabs();
  renderProducts();
  renderCart();
  renderWishlist();
  updateCartBadge();
  updateWishlistBadge();
  renderCarouselDots();
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
  const qtyButton = event.target.closest(".qty-stepper .qty-btn");
  if (qtyButton) {
    const stepper = qtyButton.closest(".qty-stepper");
    const input = stepper ? stepper.querySelector(".qty-input") : null;
    if (!input) return;
    const delta = qtyButton.dataset.action === "increase" ? 1 : -1;
    const nextValue = Math.max(1, parseQuantity(input.value, 1) + delta);
    input.value = String(nextValue);
    return;
  }

  const quickViewTrigger = event.target.closest(".quick-view-trigger");
  if (quickViewTrigger) {
    openQuickView(Number(quickViewTrigger.dataset.id), quickViewTrigger);
    return;
  }

  const addButton = event.target.closest(".add-to-cart");
  if (addButton) {
    const productId = Number(addButton.dataset.id);
    const card = addButton.closest(".product-card");
    const input = card ? card.querySelector(".qty-input") : null;
    const quantity = parseQuantity(input ? input.value : 1, 1);
    if (input) input.value = String(quantity);
    addToCart(productId, quantity);
    return;
  }

  const wishlistButton = event.target.closest(".wishlist-btn");
  if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.id));
  }
});

elements.productGrid.addEventListener("change", (event) => {
  const input = event.target.closest(".qty-input");
  if (input) {
    normalizeQuantityInput(input);
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

elements.wishlistItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = Number(button.dataset.id);
  const action = button.dataset.action;
  if (action === "add-to-cart") {
    addToCart(id, 1);
    return;
  }
  if (action === "remove-wishlist") {
    state.wishlist.delete(id);
    renderProducts();
    renderWishlist();
    persistWishlist();
  }
});

elements.cartButton.addEventListener("click", openCart);
elements.closeCart.addEventListener("click", closeCart);
elements.wishlistButton.addEventListener("click", openWishlist);
elements.closeWishlist.addEventListener("click", closeWishlist);
elements.overlay.addEventListener("click", closeActiveDialog);

elements.loginButton.addEventListener("click", () => {
  openDialog(elements.accountModal, elements.loginButton);
});
elements.closeAccountModal.addEventListener("click", () => closeDialog(elements.accountModal));
elements.accountSubmit.addEventListener("click", () => {
  showToast("Logged in (demo).");
  closeDialog(elements.accountModal);
});

elements.themeToggle.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

elements.closeQuickView.addEventListener("click", () => closeDialog(elements.quickViewModal));
elements.quickViewAdd.addEventListener("click", () => {
  const productId = Number(elements.quickViewAdd.dataset.id);
  const quantity = parseQuantity(elements.quickViewQty.value, 1);
  elements.quickViewQty.value = String(quantity);
  addToCart(productId, quantity);
  closeDialog(elements.quickViewModal);
});

elements.quickViewModal.addEventListener("click", (event) => {
  const button = event.target.closest(".qty-btn");
  if (!button) return;
  const delta = button.dataset.action === "increase" ? 1 : -1;
  const nextValue = Math.max(1, parseQuantity(elements.quickViewQty.value, 1) + delta);
  elements.quickViewQty.value = String(nextValue);
});

elements.quickViewQty.addEventListener("change", () => {
  normalizeQuantityInput(elements.quickViewQty);
});

const handleSearchInput = debounce((value) => {
  state.searchTerm = value;
  renderProducts();
}, 250);

elements.searchInput.addEventListener("input", (event) => {
  handleSearchInput(event.target.value.trim());
});

elements.checkoutButton.addEventListener("click", () => {
  alert("Checkout is a demo flow. Thanks for shopping!");
});

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  showToast(`✓ Subscribed ${email} to our newsletter!`);
  e.target.reset();
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

if (elements.carouselDots) {
  elements.carouselDots.addEventListener("click", (event) => {
    const dot = event.target.closest(".carousel-dot");
    if (!dot) return;
    const index = Number(dot.dataset.slide);
    if (Number.isNaN(index)) return;
    showSlide(index);
    startCarousel();
  });
}

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
  if (event.key === "Escape" && activeDialog) {
    closeActiveDialog();
  }
});

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", init);
