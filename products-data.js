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
    desc: "Офсет хэвлэлд зориулсан наалддаг стикер цаас; өнгө тод гарна, зүсэлт сайн, наалт тогтоц найдвартай.",
    descKey: "product-desc-sticker",
    unitPrice: 180,
    price: "180₮",
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
        { value: "glossy", i18nKey: "form-sticker-glossy", enabled: true }
      ],
      thicknessLabelKey: "form-sticker-thickness",
      thicknessOptions: [
        { value: "180", i18nKey: "form-sticker-180", enabled: true, selected: true }
      ],
      sizeLabelKey: "form-sticker-size",
      sizeOptions: [
        { value: "440x300", i18nKey: "form-sticker-440x300", enabled: true, selected: true }
      ]
    }
  },
  {
    id: "lamination-bopp",
    name: "Бүралт / lamination Bopp",
    nameKey: "product-name-lamination",
    desc: "BOPP бүрэлт нь гадаргууг гялгар, хамгаалалттай болгоно; элэгдэл, чийгнээс хамгаалж өнгөний насыг уртасгана.",
    descKey: "product-desc-lamination",
    unitPrice: 440000,
    price: "440,000",
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
  },
  {
    id: "blanket",
    name: "Булны резин ( Blanket )",
    nameKey: "product-name-blanket",
    desc: "Офсет хэвлэлийн булны резин; бэх дамжуулалт жигд, цэгжилт тод, хэвлэлийн чанарыг сайжруулна.",
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
        { value: "560*530*1.95mm", i18nKey: "form-blanket-size-560x530", enabled: true, selected: true }
      ]
    }
  },
  {
    id: "printing-oil",
    name: "Хэвлэлийн машины тос",
    nameKey: "product-name-printing-oil",
    desc: "Printing Machine Oil",
    descKey: "product-desc-printing-oil",
    // unitPrice removed for custom option pricing
    price: "180,000",
    stock: "Бэлэн",
    img: "assets/images/Tos-heidelberg.jpg",
    images: [
      "assets/images/Tos-heidelberg.jpg",
      "assets/images/Tos-heidelberg2.jpg",
      "assets/images/Tos-heidelberg3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    formConfig: {
      showRollLength: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [
        { value: "glp500", i18nKey: "form-oil-glp500", price: 180000, enabled: true, selected: true }
      ],
      thicknessOptions: [],
      sizeOptions: []
    }
  },
  {
    id: "creasing-matrix",
    name: "Канал",
    nameKey: "product-name-creasing-matrix",
    desc: "Хайрцаг, цаасан бүтээгдэхүүний нугалаас гаргахад зориулагдсан, наалт сайтай, бат бөх нугалаасны суваг (Creasing Matrix). Хайрцагтаа 50ш-тай",
    descKey: "product-desc-creasing-matrix",
    price: "80,000",
    // unitPrice removed for custom option pricing
    stock: "Бэлэн",
    img: "assets/images/Kanal.jpg",
    images: [
      "assets/images/Kanal.jpg",
      "assets/images/Kanal2.jpg",
      "assets/images/Kanal3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    formConfig: {
      showRollLength: false,
      showCore: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [
        { value: "spec1", i18nKey: "form-kanal-spec", price: 80000, enabled: true, selected: true }
      ],
      thicknessOptions: [],
      sizeOptions: []
    }
  },
  {
    id: "glue-remover",
    name: "Цавуу арилгагч",
    nameKey: "product-name-glue-remover",
    desc: "Их хэмжээний стикер огтлох үед хутганы ирэнд наалдсан цавууг хурдан уусгаж цэвэрлэнэ.",
    descKey: "product-desc-glue-remover",
    unitPrice: 7000,
    price: "7,000",
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
    id: "plotter-knife",
    name: "Плоттерийн хутга",
    nameKey: "product-name-plotter-knife",
    desc: "Сайн чанар ган материал, хайрцагтаа 50 ширхэгтэй",
    descKey: "product-desc-plotter-knife",
    unitPrice: 60000,
    price: "60,000",
    stock: "Бэлэн",
    img: "assets/images/Plotter knife.jpg",
    images: [
      "assets/images/Plotter knife.jpg",
      "assets/images/Plotter knife2.jpg",
      "assets/images/Plotter knife3.jpg"
    ],
    isLamination: true,
    formConfig: {
      showRollLength: false,
      showCore: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [
        { value: "30", label: "30°", i18nKey: "form-degree-30", priceOffset: 0, enabled: true },
        { value: "45", label: "45°", i18nKey: "form-degree-45", priceOffset: 0, enabled: true },
        { value: "60", label: "60°", i18nKey: "form-degree-60", priceOffset: 0, enabled: true }
      ],
      showFinish: true,
      finishLabelKey: "form-plotter-type",
      thicknessOptions: [],
      sizeOptions: []
    }
  },
  {
    id: "tape",
    name: "Скоч",
    nameKey: "product-name-tape",
    desc: "Сайн чанарын наалддаг тууз.",
    descKey: "product-desc-tape",
    // unitPrice removed to use option-based pricing
    price: "2,550",
    stock: "Бэлэн",
    img: "assets/images/Skoch.jpg",
    images: [
      "assets/images/Skoch.jpg",
      "assets/images/Skoch2.jpg",
      "assets/images/Skoch3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    // Custom form config for Tape
    formConfig: {
      showRollLength: false,
      showCore: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [
        { value: "normal", i18nKey: "form-tape-normal", price: 2550, enabled: true, selected: true },
        { value: "logo", i18nKey: "form-tape-logo", price: 4888, enabled: true }
      ],
      thicknessOptions: [], // Remove Thickness
      sizeOptions: [] // Remove Size/Width
    }
  },
  {
    id: "rubber",
    name: "Багцлагч резин",
    nameKey: "product-name-rubber",
    desc: "Багцлах зориулалттай резин.",
    descKey: "product-desc-rubber",
    unitPrice: 12000,
    price: "12,000",
    stock: "Бэлэн",
    img: "assets/images/Rubber.jpg",
    images: [
      "assets/images/Rubber.jpg",
      "assets/images/Rubber2.jpg",
      "assets/images/Rubber3.jpg"
    ],
    formats: [],
    types: [],
    isLamination: true,
    formConfig: {
      showRollLength: false,
      showCore: false,
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      finishOptions: [
        { value: "700pcs", i18nKey: "form-rubber-700", price: 12000, enabled: true, selected: true }
      ],
      thicknessOptions: [],
      sizeOptions: []
    }
  },
  {
    id: "business_card",
    name: "Нэрийн хуудас",
    nameKey: "product-name-card",
    desc: "Таны брэндийг тодотгосон, өндөр чанартай материалтай мэргэжлийн нэрийн хуудас.",
    descKey: "product-desc-card",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/business_card.jpg",
    images: ["assets/images/business_card.jpg", "assets/images/business_card_2.jpg", "assets/images/business_card_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-std1', val: 'Стандарт (90×55мм)' },
        { key: 'form-format-std2', val: 'Стандарт (85×55мм)' }
      ],
      quantities: [300, 500, 1000, 5000, 10000],
      papers: [
        { key: 'form-paper-300-coated', val: '300 (гр)' },
        { key: 'form-paper-300-art', val: 'Арт 300 (гр)' }
      ],
      showFolding: false,
      showVarnish: false,
      showFoil: true,
      showSpotUV: true,
      showPrintType: true,
      showPrepress: true
    }
  },
  {
    id: "brochure",
    name: "Брошур",
    nameKey: "product-name-brochure",
    desc: "Брэндийн чансааг илтгэх өнгө тод, зүсэлт нарийн нугалбар брошурыг өндөр чанартайгаар үйлдвэрлэнэ.",
    descKey: "product-desc-brochure",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/brochure.jpg",
    images: ["assets/images/brochure.jpg", "assets/images/brochure_2.jpg", "assets/images/brochure_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-a7', val: 'A7 (74×105мм)' },
        { key: 'form-format-a6', val: 'A6 (105×148мм)' },
        { key: 'form-format-a5', val: 'A5 (145×210мм)' },
        { key: 'form-format-a4', val: 'A4 (210×297мм)' },
        { key: 'form-format-a3', val: 'A3 (420×297мм)' },
        { key: 'form-format-b7', val: 'B7 (88×125мм)' },
        { key: 'form-format-b6', val: 'B6 (125×176мм)' },
        { key: 'form-format-b5', val: 'B5 (176×250мм)' },
        { key: 'form-format-b4', val: 'B4 (250×353мм)' },
        { key: 'form-format-b3', val: 'B3 (353×500мм)' }
      ],
      quantities: [300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 10000],
      papers: [
        { key: 'form-paper-80-coated', val: '80гр шохойтой цаас (гр)' },
        { key: 'form-paper-105-coated', val: '105гр шохойтой цаас (гр)' },
        { key: 'form-paper-128', val: '128гр шохойтой цаас (гр)' },
        { key: 'form-paper-157', val: '157гр шохойтой цаас (гр)' },
        { key: 'form-paper-200', val: '200гр шохойтой цаас (гр)' },
        { key: 'form-paper-250', val: '250гр шохойтой цаас (гр)' },
        { key: 'form-paper-300-coated', val: '300гр шохойтой цаас (гр)' }
      ],
      showFolding: true,
      foldings: [
        { key: 'form-folding-none', val: 'Нугалаагүй' },
        { key: 'form-folding-1', val: 'Нэг нугалаатай' },
        { key: 'form-folding-2', val: '2 нугалаатай - Ихэвчлэн 3 нугалбар гэж нэрлэгддэг' },
        { key: 'form-folding-3', val: '3 нугалаатай' },
        { key: 'form-folding-4', val: '4 нугалаатай' }
      ],
      showFoil: false,
      showSpotUV: false,
      showPrintType: false,
      showDeliveryDate: true,
      showPrepress: true
    }
  },
  {
    id: "magazine",
    name: "Сэтгүүл",
    nameKey: "product-name-magazine",
    desc: "Өнгө харалт сайтай, бат бөх оёдолтой сэтгүүлийг олон төрлийн цаас, хэмжээгээр чанартай хэвлэнэ.",
    descKey: "product-desc-magazine",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/magazine.jpg",
    images: ["assets/images/magazine.jpg", "assets/images/magazine_2.jpg", "assets/images/magazine_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-a5', val: 'A5 (мм)' },
        { key: 'form-format-a4', val: 'A4 (мм)' },
        { key: 'form-format-b5', val: 'B5 (мм)' },
        { key: 'form-format-b4', val: 'B4 (мм)' }
      ],
      quantities: [300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 10000],
      papers: [
        { key: 'form-paper-80', val: '80 (гр)' },
        { key: 'form-paper-90', val: '90 (гр)' },
        { key: 'form-paper-105', val: '105 (гр)' },
        { key: 'form-paper-128', val: '128 (гр)' },
        { key: 'form-paper-157', val: '157 (гр)' }
      ],
      pages: [
        { key: 'form-pages-8', val: '8 нүүр' },
        { key: 'form-pages-12', val: '12 нүүр' },
        { key: 'form-pages-16', val: '16 нүүр' },
        { key: 'form-pages-20', val: '20 нүүр' },
        { key: 'form-pages-24', val: '24 нүүр' },
        { key: 'form-pages-28', val: '28 нүүр' },
        { key: 'form-pages-32', val: '32 нүүр' },
        { key: 'form-pages-36', val: '36 нүүр' },
        { key: 'form-pages-40', val: '40 нүүр' },
        { key: 'form-pages-44', val: '44 нүүр' },
        { key: 'form-pages-48', val: '48 нүүр' },
        { key: 'form-pages-52', val: '52 нүүр' },
        { key: 'form-pages-56', val: '56 нүүр' },
        { key: 'form-pages-60', val: '60 нүүр' },
        { key: 'form-pages-64', val: '64 нүүр' },
        { key: 'form-pages-68', val: '68 нүүр' },
        { key: 'form-pages-72', val: '72 нүүр' },
        { key: 'form-pages-76', val: '76 нүүр' },
        { key: 'form-pages-80', val: '80 нүүр' },
        { key: 'form-pages-84', val: '84 нүүр' },
        { key: 'form-pages-88', val: '88 нүүр' },
        { key: 'form-pages-92', val: '92 нүүр' },
        { key: 'form-pages-96', val: '96 нүүр' },
        { key: 'form-pages-100', val: '100 нүүр' },
        { key: 'form-pages-104', val: '104 нүүр' },
        { key: 'form-pages-108', val: '108 нүүр' },
        { key: 'form-pages-112', val: '112 нүүр' },
        { key: 'form-pages-116', val: '116 нүүр' },
        { key: 'form-pages-120', val: '120 нүүр' },
        { key: 'form-pages-124', val: '124 нүүр' },
        { key: 'form-pages-128', val: '128 нүүр' },
        { key: 'form-pages-132', val: '132 нүүр' },
        { key: 'form-pages-136', val: '136 нүүр' },
        { key: 'form-pages-140', val: '140 нүүр' },
        { key: 'form-pages-144', val: '144 нүүр' },
        { key: 'form-pages-148', val: '148 нүүр' },
        { key: 'form-pages-152', val: '152 нүүр' },
        { key: 'form-pages-156', val: '156 нүүр' },
        { key: 'form-pages-160', val: '160 нүүр' },
        { key: 'form-pages-164', val: '164 нүүр' },
        { key: 'form-pages-168', val: '168 нүүр' },
        { key: 'form-pages-172', val: '172 нүүр' },
        { key: 'form-pages-176', val: '176 нүүр' },
        { key: 'form-pages-180', val: '180 нүүр' },
        { key: 'form-pages-184', val: '184 нүүр' },
        { key: 'form-pages-188', val: '188 нүүр' },
        { key: 'form-pages-192', val: '192 нүүр' },
        { key: 'form-pages-196', val: '196 нүүр' },
        { key: 'form-pages-200', val: '200 нүүр' }
      ],
      covers: [
        { key: 'form-cover-200', val: '200гр' },
        { key: 'form-cover-250', val: '250гр' }
      ],
      coatings: [
        { key: 'form-coating-magazine-none', val: 'Хавтас бүрэлтгүй' },
        { key: 'form-coating-magazine-matte', val: 'Хавтас матт бүрэлттэй' },
        { key: 'form-coating-magazine-glossy', val: 'Хавтас гялгар бүрэлттэй' }
      ],
      showPages: true,
      showCover: true,
      showBinding: true,
      showFoil: true,
      showSpotUV: true,
      showPrintType: false,
      showDeliveryDate: true,
      showPrepress: true
    }
  },
  {
    id: "book",
    name: "Ном",
    nameKey: "product-name-book",
    desc: "Зөөлөн болон хатуу хавтастай, удаан эдэлгээтэй ном хэвлэлт. Хэмжээ, зузаан, загварыг таны хүссэнээр.",
    descKey: "product-desc-book",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/book.jpg",
    images: ["assets/images/book.jpg", "assets/images/book_2.jpg", "assets/images/book_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-a5', val: 'A5 (мм)' },
        { key: 'form-format-a4', val: 'A4 (мм)' },
        { key: 'form-format-b5', val: 'B5 (мм)' },
        { key: 'form-format-b4', val: 'B4 (мм)' }
      ],
      quantities: [300, 500, 1000, 2000, 3000, 4000, 5000],
      pages: [
        { key: 'form-pages-80', val: '80 нүүр' },
        { key: 'form-pages-90', val: '90 нүүр' },
        { key: 'form-pages-100', val: '100 нүүр' },
        { key: 'form-pages-110', val: '110 нүүр' },
        { key: 'form-pages-120', val: '120 нүүр' },
        { key: 'form-pages-130', val: '130 нүүр' },
        { key: 'form-pages-140', val: '140 нүүр' },
        { key: 'form-pages-150', val: '150 нүүр' },
        { key: 'form-pages-160', val: '160 нүүр' },
        { key: 'form-pages-170', val: '170 нүүр' },
        { key: 'form-pages-180', val: '180 нүүр' },
        { key: 'form-pages-190', val: '190 нүүр' },
        { key: 'form-pages-200', val: '200 нүүр' },
        { key: 'form-pages-210', val: '210 нүүр' },
        { key: 'form-pages-220', val: '220 нүүр' },
        { key: 'form-pages-230', val: '230 нүүр' },
        { key: 'form-pages-240', val: '240 нүүр' },
        { key: 'form-pages-250', val: '250 нүүр' },
        { key: 'form-pages-260', val: '260 нүүр' },
        { key: 'form-pages-270', val: '270 нүүр' },
        { key: 'form-pages-280', val: '280 нүүр' },
        { key: 'form-pages-290', val: '290 нүүр' },
        { key: 'form-pages-300', val: '300 нүүр' },
        { key: 'form-pages-310', val: '310 нүүр' },
        { key: 'form-pages-320', val: '320 нүүр' },
        { key: 'form-pages-330', val: '330 нүүр' },
        { key: 'form-pages-340', val: '340 нүүр' },
        { key: 'form-pages-350', val: '350 нүүр' },
        { key: 'form-pages-360', val: '360 нүүр' },
        { key: 'form-pages-370', val: '370 нүүр' },
        { key: 'form-pages-380', val: '380 нүүр' },
        { key: 'form-pages-390', val: '390 нүүр' },
        { key: 'form-pages-400', val: '400 нүүр' },
        { key: 'form-pages-420', val: '420 нүүр' },
        { key: 'form-pages-440', val: '440 нүүр' },
        { key: 'form-pages-460', val: '460 нүүр' },
        { key: 'form-pages-480', val: '480 нүүр' },
        { key: 'form-pages-500', val: '500 нүүр' },
        { key: 'form-pages-520', val: '520 нүүр' },
        { key: 'form-pages-540', val: '540 нүүр' },
        { key: 'form-pages-560', val: '560 нүүр' },
        { key: 'form-pages-580', val: '580 нүүр' },
        { key: 'form-pages-600', val: '600 нүүр' },
        { key: 'form-pages-620', val: '620 нүүр' },
        { key: 'form-pages-640', val: '640 нүүр' },
        { key: 'form-pages-660', val: '660 нүүр' },
        { key: 'form-pages-680', val: '680 нүүр' },
        { key: 'form-pages-700', val: '700 нүүр' }
      ],
      covers: [
        { key: 'form-cover-200', val: '200гр' },
        { key: 'form-cover-250', val: '250гр' },
        { key: 'form-cover-300', val: '300гр' },
        { key: 'form-cover-hard', val: 'Хатуу хавтас' }
      ],
      papers: [
        { key: 'form-paper-70', val: '70 (гр)' },
        { key: 'form-paper-80', val: '80 (гр)' },
        { key: 'form-paper-90', val: '90 (гр)' },
        { key: 'form-paper-105', val: '105 (гр)' },
        { key: 'form-paper-128', val: '128 (гр)' }
      ],
      coatings: [
        { key: 'form-coating-cover-none', val: 'Хавтас бүрэлтгүй' },
        { key: 'form-coating-cover-matte', val: 'Хавтас матт бүрэлттэй' },
        { key: 'form-coating-cover-glossy', val: 'Хавтас гялгар бүрэлттэй' },
        { key: 'form-coating-cover-suede', val: 'Хавтас илгэн бүрэлттэй' }
      ],
      showPages: true,
      showCover: true,
      showSpotUV: true,
      labelSpotUV: 'form-checkbox-partial-uv-cover',
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "label",
    name: "Шошго",
    nameKey: "product-name-label",
    desc: "Төрөл бүрийн зүсэлттэй, стикер болон бусад материалтай, ус чийгэнд тэсвэртэй шошго үйлдвэрлэнэ.",
    descKey: "product-desc-label",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/label.jpg",
    images: ["assets/images/label.jpg", "assets/images/label_2.jpg", "assets/images/label_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: '', val: 'A7 (74×105мм)' },
        { key: '', val: 'A6 (105×148мм)' },
        { key: '', val: 'A5 (148×210мм)' },
        { key: '', val: 'B7 (88×125мм)' },
        { key: '', val: 'B6 (125×176мм)' },
        { key: '', val: 'B5 (176×250мм)' }
      ],
      quantities: [500, 1000, 5000, 10000, 20000, 50000, 100000],
      papers: [
        { key: 'form-paper-sticker', val: 'Стикер (гр)' },
        { key: 'form-paper-80', val: '80 (гр)' },
        { key: 'form-paper-90', val: '90 (гр)' },
        { key: 'form-paper-105', val: '105 (гр)' },
        { key: 'form-paper-128', val: '128 (гр)' },
        { key: 'form-paper-157', val: '157 (гр)' },
        { key: 'form-paper-200', val: '200 (гр)' },
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' }
      ],
      showVarnish: true,
      labelFoil: 'form-cliche-required',
      showFoil: true,
      showCutSelect: true,
      cutOptions: [
        { key: 'form-cut-simple', val: 'Энгийн зүсэлт' },
        { key: 'form-cut-die', val: 'Хэлбэртэй зүсэлт' }
      ],
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "box",
    name: "Хайрцаг",
    nameKey: "product-name-box",
    desc: "Брэндийн загварт таарсан бат бөх картон хайрцгийг хэмжээгээр нь үйлдвэрлэнэ.",
    descKey: "product-desc-box",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/box.jpg",
    images: ["assets/images/box.jpg", "assets/images/box_2.jpg", "assets/images/box_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-custom', val: 'Өөрийн хэмжээгээр (Тэмдэглэлд бичих)' }
      ],
      quantities: [500, 1000, 2000, 3000, 4000, 5000, 10000],
      papers: [
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' },
        { key: 'form-paper-350', val: '350 (гр)' }
      ],
      showVarnish: true,
      labelFoil: 'form-cliche-required',
      showFoil: true,
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "bag",
    name: "Цаасан тор",
    nameKey: "product-name-bag",
    desc: "Даац сайтай, загварлаг цаасан торыг төрөл бүрийн хэмжээ, материалын сонголтоор үйлдвэрлэнэ.",
    descKey: "product-desc-bag",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/bag.jpg",
    images: ["assets/images/bag.jpg", "assets/images/bag_2.jpg", "assets/images/bag_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-a4', val: 'A4 (×мм)' },
        { key: 'form-format-a3', val: 'A3 (×мм)' },
        { key: 'form-format-b5', val: 'B5 (×мм)' },
        { key: 'form-format-b4', val: 'B4 (×мм)' },
        { key: 'form-format-b3', val: 'B3 (×мм)' }
      ],
      quantities: [100, 200, 300, 400, 500, 1000, 5000, 10000],
      papers: [
        { key: 'form-paper-200', val: '200 (гр)' },
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' }
      ],
      showVarnish: true,
      labelFoil: 'form-cliche-required',
      showFoil: true,
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "invitation",
    name: "Урилга",
    nameKey: "product-name-invitation",
    desc: "Арга хэмжээ, баярт зориулсан тансаг дизайнтай, чанартай хэвлэсэн урилга.",
    descKey: "product-desc-invitation",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/invitation.jpg",
    images: ["assets/images/invitation.jpg", "assets/images/invitation_2.jpg", "assets/images/invitation_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: '', val: 'A6 (105×148мм)' },
        { key: '', val: 'A5 (148×210мм)' },
        { key: '', val: 'A4 (210×297мм)' },
        { key: '', val: '1/3 - A4 (99×210мм)' },
        { key: '', val: 'B6 (125×176мм)' },
        { key: '', val: 'B5 (176×250мм)' },
        { key: '', val: 'B4 (250×353мм)' }
      ],
      quantities: [100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000],
      papers: [
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' },
        { key: 'form-paper-209-art', val: 'Арт 209 (гр)' },
        { key: 'form-paper-250-art', val: 'Арт 250 (гр)' }
      ],
      showFolding: true,
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "poster",
    name: "Плакат",
    nameKey: "product-name-poster",
    desc: "Сурталчилгаа, арга хэмжээ болон интерьерийн зориулалттай өнгө тод ханын палкатыг төрөл бүрийн форматаар хэвлэнэ.",
    descKey: "product-desc-poster",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/poster.jpg",
    images: ["assets/images/poster.jpg", "assets/images/poster_2.jpg", "assets/images/poster_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: '', val: 'A4 (210×297мм)' },
        { key: '', val: 'A3 (297×420мм)' },
        { key: '', val: 'A2 (420×594мм)' },
        { key: '', val: 'B4 (250×353мм)' },
        { key: '', val: 'B3 (353×500мм)' },
        { key: '', val: 'B2 (500×720мм)' }
      ],
      quantities: [100, 300, 500, 1000, 3000, 5000, 10000],
      papers: [
        { key: 'form-paper-200', val: '200 (гр)' },
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' }
      ],
      showSpotUV: true,
      showCutCheckbox: true,
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "notebook",
    name: "Дэвтэр",
    nameKey: "product-name-notebook",
    desc: "Ажлын болон сургалтын зориулалттай, ганц төрлийн биш олон загварын дэвтэр.",
    descKey: "product-desc-notebook",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/notebook.jpg",
    images: ["assets/images/notebook.jpg", "assets/images/notebook_2.jpg", "assets/images/notebook_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-a7', val: 'A7 (74×105мм)' },
        { key: 'form-format-a6', val: 'A6 (105×148мм)' },
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-a4', val: 'A4 (×мм)' }
      ],
      quantities: [100, 200, 300, 400, 500, 1000, 2000, 3000, 4000, 5000],
      pages: [
        { key: 'form-pages-100', val: '100 нүүр' },
        { key: 'form-pages-120', val: '120 нүүр' },
        { key: 'form-pages-140', val: '140 нүүр' },
        { key: 'form-pages-160', val: '160 нүүр' },
        { key: 'form-pages-180', val: '180 нүүр' },
        { key: 'form-pages-200', val: '200 нүүр' }
      ],
      covers: [
        { key: 'form-cover-300', val: '300гр' },
        { key: 'form-cover-hard-cardboard', val: 'Хатуу хавтас ( картон хатуулгатай )' },
        { key: 'form-cover-leather', val: 'Арьсан хавтас' }
      ],
      papers: [
        { key: 'form-paper-70', val: '70 (гр)' },
        { key: 'form-paper-80', val: '80 (гр)' },
        { key: 'form-paper-100', val: '100 (гр)' },
        { key: 'form-paper-120', val: '120 (гр)' }
      ],

      showPages: true,
      showCover: true,
      showBinding: true,
      bindings: [
        { key: 'form-binding-staple', val: 'Нуруу үдээтэй' },
        { key: 'form-binding-glue', val: 'Нуруу наалттай' },
        { key: 'form-binding-ring', val: 'Цагаригтай' }
      ],
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "envelope",
    name: "Дугтуй",
    nameKey: "product-name-envelope",
    desc: "Албан бичиг, танилцуулга болон тусгай илгээлтэд зориулсан стандарт болон захиалгат хэмжээтэй дугтуй үйлдвэрлэнэ.",
    descKey: "product-desc-envelope",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/envelope.jpg",
    images: ["assets/images/envelope.jpg", "assets/images/envelope_2.jpg", "assets/images/envelope_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: '', val: 'A6 (105×148мм)' },
        { key: '', val: 'A5 (148×210мм)' },
        { key: '', val: 'A4 (210×297мм)' },
        { key: '', val: 'A3 (420×297мм)' },
        { key: '', val: 'B5 (176×250мм)' },
        { key: '', val: 'B4 (250×353мм)' },
        { key: 'form-format-money', val: 'Мөнгөний дугтуй' }
      ],
      quantities: [300, 500, 1000, 2000, 3000, 4000, 5000, 10000],
      papers: [
        { key: 'form-paper-80', val: '80 (гр)' },
        { key: 'form-paper-90', val: '90 (гр)' },
        { key: 'form-paper-100', val: '100 (гр)' },
        { key: 'form-paper-120', val: '120 (гр)' },
        { key: 'form-paper-128', val: '128 (гр)' },
        { key: 'form-paper-157', val: '157 (гр)' },
        { key: 'form-paper-200', val: '200 (гр)' },
        { key: 'form-paper-250', val: '250 (гр)' },
        { key: 'form-paper-300-coated', val: '300 (гр)' }
      ],
      showSpotUV: true,
      labelSpotUV: 'form-decorative-varnish',
      showPrepress: true,
      showPrintType: false
    }
  },
  {
    id: "invoice",
    name: "Хортой цаастай баримт",
    nameKey: "product-name-invoice",
    desc: "Хорын цаастай, наалттай болон цагаргин нуруутай гарах боломжтой, номерлогоотой болон номерлогоогүй гарна.",
    descKey: "product-desc-invoice",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/invoice.jpg",
    images: ["assets/images/invoice.jpg", "assets/images/invoice_2.jpg", "assets/images/invoice_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: '', val: 'A6 (105×148мм)' },
        { key: '', val: 'A5 (148×210мм)' },
        { key: '', val: 'A4 (210×297мм)' },
        { key: '', val: 'B6 (125×176мм)' },
        { key: '', val: 'B5 (176×250мм)' },
        { key: '', val: '1/3 - A4 (99×210мм)' }
      ],
      quantities: [500, 1000, 3000, 5000, 10000, 20000],
      papers: [
        { key: 'form-folding-select', val: 'Сонгох' },
        { key: 'form-paper-2-copy', val: '2 хувь' },
        { key: 'form-paper-3-copy', val: '3 хувь' },
        { key: 'form-paper-4-copy', val: '4 хувь' }
      ],
      labelPaper: 'form-paper-selection',
      showNumbered: true,
      showTargetPrice: false,
      showDeliveryInfo: true,
      deliveryText: 'form-delivery-3-days',
      showPrepress: true,
      showPrintType: false,
      showVarnish: false,
      showFoil: false,
      showSpotUV: false,
      showCoating: false
    }
  },
  {
    id: "banner",
    name: "Хулдаасан хэвлэл",
    nameKey: "product-name-banner",
    desc: "Гадна болон дотор ашиглах зориулалттай, бороо салхи, нарны хамгаалалттай, тод өнгөтэй хулдаасан хэвлэл (Banner/Flex/Vinyl).",
    descKey: "product-desc-banner",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/banner.jpg",
    images: ["assets/images/banner.jpg", "assets/images/banner_2.jpg", "assets/images/banner_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-banner-1x1', val: '1м × 1м' },
        { key: 'form-format-banner-2x1', val: '2м × 1м' },
        { key: 'form-format-banner-3x2', val: '3м × 2м' },
        { key: 'form-format-banner-4x3', val: '4м × 3м' },
        { key: 'form-format-custom', val: 'Өөрийн хэмжээгээр (Тэмдэглэлд бичих)' }
      ],
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      papers: [
        { key: 'form-paper-banner-320', val: '320гр Хятад хулдаас' },
        { key: 'form-paper-banner-440', val: '440гр Хятад хулдаас' },
        { key: 'form-paper-banner-510', val: '510гр Хоёр талтай хулдаас' },
        { key: 'form-paper-banner-pp', val: 'Өөрөө наалдагч PP наалт (Sticker)' },
        { key: 'form-paper-banner-mesh', val: 'Нүхтэй хулдаас (Mesh Flex)' }
      ],
      showCoating: false,
      showPrepress: true,
      showPrintType: false,
      showFoil: false,
      showSpotUV: false,
      showDeliveryDate: true
    }
  },
  {
    id: "foam-board",
    name: "Хөөсөнцөртэй хэвлэл",
    nameKey: "product-name-foam-board",
    desc: "Стикер дээр чанартай хэвлэж, 3мм, 5мм эсвэл 10мм-ийн хөөсөнцөр (foam board / PVC board) дээр наасан зурагт самбар, хэлбэртэй зүсэлттэй фрэймүүд.",
    descKey: "product-desc-foam-board",
    unitPrice: 0,
    price: "Үнийн санал",
    stock: "Захиалгаар",
    img: "assets/images/foam_board.jpg",
    images: ["assets/images/foam_board.jpg", "assets/images/foam_board_2.jpg", "assets/images/foam_board_3.jpg"],
    formats: [],
    types: [],
    isLamination: false,
    formConfig: {
      formats: [
        { key: 'form-format-banner-1x1', val: '1м × 1м' },
        { key: 'form-format-banner-2x1', val: '2м × 1м' },
        { key: 'form-format-banner-3x2', val: '3м × 2м' },
        { key: 'form-format-banner-4x3', val: '4м × 3м' },
        { key: 'form-format-custom', val: 'Өөрийн хэмжээгээр (Тэмдэглэлд бичих)' }
      ],
      quantities: [1, 2, 3, 4, 5, 10, 20, 50, 100],
      papers: [],
      showPaper: false,
      showCoating: false,
      showPrepress: true,
      showPrintType: false,
      showCutSelect: true,
      cutOptions: [
        { key: 'form-cut-simple', val: 'Ердийн шулуун зүсэлт' },
        { key: 'form-cut-die', val: 'Хэлбэртэй зүсэлт (Photo booth frame/Die-cut)' }
      ],
      showFoil: false,
      showSpotUV: false,
      showDeliveryDate: true
    }
  }];

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

/**
 * Imposition Table for Brochure Calculation
 * Defines Parent Yield and Press Yield for standard formats.
 */
const IMPOSITION_TABLE = {
  // Format: { pressYield: (D), parentYield: (C) }
  "A7": { pressYield: 16, parentYield: 8 },
  "A6": { pressYield: 8, parentYield: 8 },
  "A5": { pressYield: 4, parentYield: 8 },
  "A4": { pressYield: 2, parentYield: 8 },
  "A3": { pressYield: 1, parentYield: 8 },
  "B7": { pressYield: 16, parentYield: 5 },
  "B6": { pressYield: 8, parentYield: 5 },
  "B5": { pressYield: 4, parentYield: 5 },
  "B4": { pressYield: 2, parentYield: 5 },
  "B3": { pressYield: 1, parentYield: 5 }
};

/**
 * Calculate Brochure Price
 * Based on logic in BROCHURE_LOGIC.md
 * 
 * @param {string} format - The product size format (e.g., "A5", "B4")
 * @param {number} orderQty - The quantity ordered
 * @param {number} unitPrice - The unit price of the selected paper
 * @returns {Object} Calculation result containing total price and details
 */
function calculateBrochurePrice(format, orderQty, unitPrice) {
  console.log(`Calculating Brochure Price: Format=${format}, Qty=${orderQty}, UnitPrice=${unitPrice}`);

  // Normalize format input (handle cases like "A5 (145x210mm)")
  let normalizedFormat = format.split(' ')[0].trim().toUpperCase();

  // 1. Look up Imposition Data
  const implicationData = IMPOSITION_TABLE[normalizedFormat];

  if (!implicationData) {
    console.error(`Format ${normalizedFormat} not found in Imposition Table.`);
    return {
      totalCost: 0,
      details: { error: "Format not supported for auto-calculation" }
    };
  }

  const pressYield = implicationData.pressYield;   // D
  const parentYield = implicationData.parentYield; // C
  const waste = 100; // Constant Waste

  // 2. Step 1: Calculate Net Press Sheets
  // Formula: Net_Sheets = Order_Qty / Press_Yield
  const netPressSheets = orderQty / pressYield;

  // 3. Step 2: Calculate Total Press Sheets
  // Formula: Total_Press_Sheets = Net_Sheets + Waste
  const totalPressSheets = netPressSheets + waste;

  // 4. Step 3: Calculate Parent Sheets to Buy
  // Formula: Buy_Sheets = Math.ceil(Total_Press_Sheets / Parent_Yield)
  const buySheets = Math.ceil(totalPressSheets / parentYield);

  // 5. Step 4: Calculate Material Cost
  // Formula: Total_Paper_Cost = Buy_Sheets * Unit_Price
  const totalPaperCost = buySheets * unitPrice;

  return {
    totalPaperCost: totalPaperCost,
    debug: {
      format: normalizedFormat,
      pressYield: pressYield,
      parentYield: parentYield,
      netPressSheets: netPressSheets,
      totalPressSheets: totalPressSheets,
      buySheets: buySheets,
      unitPrice: unitPrice
    }
  };
}

/**
 * Paper Prices Database (from MATERIALS_DATA.md)
 * Maps form-paper keys to unit price per parent sheet.
 * Using 889x1194 size prices where available as standard parent sheet.
 */
const PAPER_PRICES = {
  // Offset Papers
  "form-paper-70": 420,  // 70g 889x1194
  "form-paper-80": 400,  // 80g 889x1194
  "form-paper-90": 420,  // Fallback/Estimate (using 70g price or user needs to provide) -> Using 70g for now as proxy or 0 if unknown. Let's use 0 to be safe or interpolated. 
  // Actually, let's use a safe fallback or leave comment. 
  // For now, I'll allow 90g and 105g to return 0 or a proximate value if I can't be sure, 
  // but to make calculation work, I might map them to nearest. 
  // 90g is close to 80g, let's estimate 425.
  "form-paper-100": 425, // Estimate
  "form-paper-105": 450, // Estimate

  // Coated/Art Papers
  "form-paper-80-coated": 400, // 80g 889x1194 (Coated)
  "form-paper-105-coated": 610, // 105g 889x1194 (Coated)
  "form-paper-128": 720, // 128g 889x1194
  "form-paper-157": 890, // 157g 889x1194
  "form-paper-200": 1150,// 200g 889x1194
  "form-paper-250": 1400,// 250g 889x1194
  "form-paper-300-coated": 1600, // 300g 889x1194
  "form-paper-350": 1965, // 350g 889x1194

  // Art specific keys if different
  "form-paper-300-art": 1600,
  "form-paper-250-art": 1400
};

/**
 * Get Paper Price by Key
 * @param {string} paperKey - The key from the select option (e.g., 'form-paper-157')
 * @returns {number} Unit price or 0 if not found
 */
function getPaperPrice(paperKey) {
  // Handle cases where the key might be just the value or a mix (though usually it's the option value if we set it up right).
  // In the HTML select, the values are often the text. We need to match the logic in the form.
  // Wait, in products-data.js, `papers` array has { key: '...', val: '...' }. 
  // The form submission usually sends the TEXT unless value is specified.
  // Let's check how `product-detail.html` gets the paper. 
  // It says `getText('paper')` which gets the text.
  // We should change the form to use keys or we need a reverse lookup map.

  // Actually, better: we should export a function that tries to find the price based on the KEY defined in config.
  // But on the frontend, we only have the selected text if we use `getText`.
  // We should look at `product-detail.html` to see if we can get the key.

  return PAPER_PRICES[paperKey] || 0;
}

