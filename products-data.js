/**
 * Static Products Data
 * Firebase-ээс шилжүүлсэн статик өгөгдөл
 * 
 * Шинэ бараа нэмэхийн тулд энэ файлд object нэмнэ үү.
 */

const PRODUCTS_DATA = [
  {
    id: "sticker",
    name: "Стикер",
    desc: "Халуун бүрэлт",
    price: "320,000",
    stock: "15",
    img: "assets/images/sticker.jpg",
    images: [
      "assets/images/sticker.jpg"
    ],
    formats: [],
    types: []
  },
  {
    id: "lamination-bopp",
    name: "Бүралт / lamination Bopp",
    desc: "Халуун бүрэлт",
    price: "320,000",
    stock: "15",
    img: "assets/images/lamination bopp1.jpg",
    images: [
      "assets/images/lamination bopp1.jpg",
      "assets/images/lamination bopp2.jpg",
      "assets/images/lamination bopp3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true  // Special flag for lamination-specific UI
  }
];

/**
 * Get all products
 * @returns {Array} All products
 */
function getAllProducts() {
  return PRODUCTS_DATA;
}

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {Object|null} Product object or null if not found
 */
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || null;
}

/**
 * Search products by name
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.desc.toLowerCase().includes(lowerQuery)
  );
}
