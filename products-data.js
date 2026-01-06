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
    img: "assets/images/Sticker.jpg",
    images: [
      "assets/images/Sticker.jpg",
      "assets/images/Sticker2.jpg",
      "assets/images/Sticker3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    // Custom form config for Sticker
    formConfig: {
      quantities: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000],
      finishOptions: [
        { value: "glossy", label: "Glossy (Гялгар)", enabled: true },
        { value: "matte", label: "Matte (Матт) - Байхгүй", enabled: false }
      ],
      thicknessLabel: "Зузаан",
      thicknessOptions: [
        { value: "160", label: "160гр", enabled: true },
        { value: "180", label: "180гр (Бэлэн)", enabled: true, selected: true },
        { value: "200", label: "200гр", enabled: true }
      ],
      sizeLabel: "Хэмжээ",
      sizeOptions: [
        { value: "440x300", label: "440x300мм (Бэлэн)", enabled: true, selected: true },
        { value: "440x594", label: "440x594мм", enabled: true }
      ]
    }
  },
  {
    id: "lamination-bopp",
    name: "Бүралт / lamination Bopp",
    desc: "Халуун бүрэлт",
    price: "320,000",
    stock: "15",
    img: "assets/images/Lamination.jpg",
    images: [
      "assets/images/Lamination.jpg",
      "assets/images/Lamination2.jpg",
      "assets/images/Lamination3.jpg"
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
