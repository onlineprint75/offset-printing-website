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
    price: "90,000",
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
    desc: "Их хэмжээний стикер огтлох үед хутганы ирэнд наалдсан цавууг хурдан уусгаж цэвэрлэнэ.",
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
        { value: "40x60cm", i18nKey: "form-blanket-size-40x60", enabled: true, selected: true }
      ]
    }
  },
  {
    id: "lamination-bopp",
    name: "Бүралт / lamination Bopp",
    nameKey: "product-name-lamination",
    desc: "BOPP бүрэлт нь гадаргууг гялгар, хамгаалалттай болгоно; элэгдэл, чийгнээс хамгаалж өнгөний насыг уртасгана.",
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
        { key: 'form-format-a5', val: 'A5 (145×210мм)' },
        { key: 'form-format-a4', val: 'A4 (210×297мм)' },
        { key: 'form-format-a3', val: 'A3 (420×297мм)' },
        { key: 'form-format-b5', val: 'B5 (176×250мм)' },
        { key: 'form-format-b4', val: 'B4 (250×353мм)' },
        { key: 'form-format-b3', val: 'B3 (353×500мм)' }
      ],
      quantities: [300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 10000],
      papers: [
        { key: 'form-paper-80', val: '80гр (гр)' },
        { key: 'form-paper-90', val: '90гр (гр)' },
        { key: 'form-paper-105', val: '105гр (гр)' },
        { key: 'form-paper-128', val: '128гр (гр)' },
        { key: 'form-paper-157', val: '157гр (гр)' },
        { key: 'form-paper-200', val: '200гр (гр)' },
        { key: 'form-paper-250', val: '250гр (гр)' },
        { key: 'form-paper-300-coated', val: '300гр шохойтой цаас (гр)' }
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
        { key: 'form-pages-16', val: '16 нүүр' }
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
        { key: 'form-pages-220', val: '220 нүүр' },
        { key: 'form-pages-240', val: '240 нүүр' },
        { key: 'form-pages-260', val: '260 нүүр' },
        { key: 'form-pages-280', val: '280 нүүр' },
        { key: 'form-pages-300', val: '300 нүүр' },
        { key: 'form-pages-400', val: '400 нүүр' },
        { key: 'form-pages-500', val: '500 нүүр' }
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
        { key: 'form-format-a7', val: 'A7 (×мм)' },
        { key: 'form-format-a6', val: 'A6 (×мм)' },
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-b7', val: 'B7 (×мм)' },
        { key: 'form-format-b6', val: 'B6 (×мм)' },
        { key: 'form-format-b5', val: 'B5 (×мм)' }
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
        { key: 'form-format-a6', val: 'A6 (×мм)' },
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-a4', val: 'A4 (×мм)' },
        { key: 'form-format-1/3-a4', val: '1/3 - A4 (×мм)' },
        { key: 'form-format-b6', val: 'B6 (×мм)' },
        { key: 'form-format-b5', val: 'B5 (×мм)' },
        { key: 'form-format-b4', val: 'B4 (×мм)' }
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
        { key: 'form-format-a4', val: 'A4 (×мм)' },
        { key: 'form-format-a3', val: 'A3 (×мм)' },
        { key: 'form-format-a2', val: 'A2 (×мм)' },
        { key: 'form-format-b4', val: 'B4 (×мм)' },
        { key: 'form-format-b3', val: 'B3 (×мм)' },
        { key: 'form-format-b2', val: 'B2 (×мм)' }
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
        { key: 'form-format-a7', val: 'A7 (×мм)' },
        { key: 'form-format-a6', val: 'A6 (×мм)' },
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
      coatings: [],
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
        { key: 'form-format-a6', val: 'A6 (×мм)' },
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-a4', val: 'A4 (×мм)' },
        { key: 'form-format-a3', val: 'A3 (×мм)' },
        { key: 'form-format-b5', val: 'B5 (×мм)' },
        { key: 'form-format-b4', val: 'B4 (×мм)' },
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
        { key: 'form-format-a6', val: 'A6 (×мм)' },
        { key: 'form-format-a5', val: 'A5 (×мм)' },
        { key: 'form-format-a4', val: 'A4 (×мм)' },
        { key: 'form-format-b6', val: 'B6 (×мм)' },
        { key: 'form-format-b5', val: 'B5 (×мм)' },
        { key: 'form-format-1/3-a4', val: '1/3 - A4 (×мм)' }
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
      showTargetPrice: true,
      showDeliveryInfo: true,
      deliveryText: 'form-delivery-3-days',
      showPrepress: true,
      showPrintType: false,
      showVarnish: false,
      showFoil: false,
      showSpotUV: false,
      showCoating: false
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
