# Brochure Calculation Logic (Брошур тооцоолох дүрэм)

Энэ файл нь Брошур хэвлэх үеийн цаасны тооцоолол болон үнэ бодох нарийвчилсан алгоритмыг агуулна.
**Анхаар:** Хэвлэлд өгөх формат болон тоо ширхгийг доорх "Imposition Table"-ээс шууд авна.

## 1. Constants (Тогтмол утгууд)
- **Waste (Запас цаас):** 100 ширхэг (Тогтмол нэмэгдэнэ).

## 2. Imposition Table (Өрөлтийн стандарт хүснэгт) 
*Excel-ийн D болон E баганын хатуу утгууд.*

| Product Size (Format) | Press Sheet Size (Хэвлэлд өгөх мм) | Parent Yield (C) <br> (А0-оос гарах) | Press Yield (D) <br> (Хэвлэлд өрөгдөх) |
| :--- | :--- | :--- | :--- |
| **A7** (74x105) | 440x287 | **8** | **16** |
| **A6** (105x148) | 440x287 | **8** | **8** |
| **A5** (148x210) | 440x287 | **8** | **4** |
| **A4** (210x297) | 440x287 | **8** | **2** |
| **A3** (420x297) | 440x287 | **8** | **1** |
| **B7** (88x125) | 520x360 | **5** | **16** |
| **B6** (125x176) | 520x360 | **5** | **8** |
| **B5** (176x250) | 520x360 | **5** | **4** |
| **B4** (250x353) | 520x360 | **5** | **2** |
| **B3** (353x500) | 520x360 | **5** | **1** |

## 3. Variables from Table (Хүснэгтээс авах хувьсагчид)
- **Order_Qty (G):** Захиалгын тоо ширхэг.
- **Press_Yield (D):** Дээрх хүснэгтийн "Press Yield" баганаас авна.
- **Parent_Yield (C):** Дээрх хүснэгтийн "Parent Yield" баганаас авна.
- **Unit_Price:** Сонгогдсон цаасны нэгж үнэ (`MATERIALS_DATA.md`-аас).

## 4. Calculation Steps (Тооцоолох дараалал)

### Step 1: Calculate Net Press Sheets (Цэвэр хэвлэх тоо)
> Formula: `Net_Sheets = Order_Qty / Press_Yield`

### Step 2: Calculate Total Press Sheets (Нийт машины гүйлт)
> Formula: `Total_Press_Sheets = Net_Sheets + Waste`

### Step 3: Calculate Parent Sheets to Buy (Худалдаж авах том цаас)
> Formula: `Buy_Sheets = Math.ceil(Total_Press_Sheets / Parent_Yield)`
*Анхаар: `Math.ceil` буюу дээшээ бүхэлчлэх функцийг заавал ашиглана.*

### Step 4: Calculate Material Cost (Цаасны нийт үнэ)
> Formula: `Total_Paper_Cost = Buy_Sheets * Unit_Price`

---

## Technical Instruction for AI:
1. When user selects a format (e.g., "A5"), Look up the **Parent Yield (C)** and **Press Yield (D)** directly from the "Imposition Table" above. Do NOT calculate them dynamically.
2. Example: If user selects "B5", use C=5 and D=4.
