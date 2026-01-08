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
    nameKey: "product-name-sticker",
    desc: "Халуун бүрэлт",
    descKey: "product-desc-sticker",
    unitPrice: 180,
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
      showRollLength: false,
      quantities: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 9000, 10000],
      finishOptions: [
        { value: "glossy", i18nKey: "form-sticker-glossy", enabled: true },
        { value: "matte", i18nKey: "form-sticker-matte-unavail", enabled: false }
      ],
      thicknessLabelKey: "form-sticker-thickness",
      thicknessOptions: [
        { value: "160", i18nKey: "form-sticker-160-unavail", enabled: false },
        { value: "180", i18nKey: "form-sticker-180", enabled: true, selected: true },
        { value: "200", i18nKey: "form-sticker-200-unavail", enabled: false }
      ],
      sizeLabelKey: "form-sticker-size",
      sizeOptions: [
        { value: "440x300", i18nKey: "form-sticker-440x300", enabled: true, selected: true },
        { value: "440x594", i18nKey: "form-sticker-440x594-unavail", enabled: false }
      ]
    }
  },
  {
    id: "glue-remover",
    name: "Цавуу арилгагч",
    nameKey: "product-name-glue-remover",
    desc: "Цавууны үлдэгдэл арилгагч",
    descKey: "product-desc-glue-remover",
    unitPrice: 8500,
    price: "8,500",
    stock: "Бэлэн",
    img: "assets/images/Glue remover.jpg",
    images: [
      "assets/images/Glue remover.jpg",
      "assets/images/Glue remover2.jpg",
      "assets/images/Glue remover3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    // Custom form config for Glue Remover
    formConfig: {
      showRollLength: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [], // Remove Type/Kind
      thicknessOptions: [], // Remove Thickness
      sizeLabelKey: "form-sticker-size", // Reuse Size label
      sizeOptions: [
        { value: "300gr", i18nKey: "form-glue-size-300gr", enabled: true, selected: true }
      ]
    }
  },
  {
    id: "blanket",
    name: "Булны резин ( blanket )",
    nameKey: "product-name-blanket",
    desc: "Офсет хэвлэлийн булны резин",
    descKey: "product-desc-blanket",
    unitPrice: 45000,
    price: "45,000",
    stock: "Бэлэн",
    img: "assets/images/Blanket.jpg",
    images: [
      "assets/images/Blanket.jpg",
      "assets/images/Blanket2.jpg",
      "assets/images/Blanket3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    // Custom form config for Blanket
    formConfig: {
      showRollLength: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [], // Remove Type/Kind
      thicknessOptions: [], // Remove Thickness
      sizeLabelKey: "form-sticker-size", // Reuse Size label
      sizeOptions: [
        { value: "40x60cm", i18nKey: "form-blanket-size-40x60", enabled: true, selected: true }
      ]
    }
  },
  {
    id: "lamination-bopp",
    name: "Бүралт / lamination Bopp",
    nameKey: "product-name-lamination",
    desc: "Халуун бүрэлт",
    descKey: "product-desc-lamination",
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
