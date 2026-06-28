# PPM — PWA + Аппликейшн (iOS / Android)

Энэ баримт нь `ppm32.mn` вебсайтыг **PWA** болон **App Store / Play Store** апп болгох тохиргоог тайлбарлана.
Апп нь Capacitor ашиглан амьд сайт (`https://ppm32.mn`)-ыг ачаалдаг тул **веб ба апп яг ижил** ажиллана.

---

## 1. PWA (веб дээр)

Сайт одоо суулгаж болдог PWA боллоо:

| Файл | Үүрэг |
| --- | --- |
| `manifest.json` | Аппын нэр, өнгө, icon-ууд |
| `sw.js` | Service worker — кэш / офлайн |
| `pwa.js` | Service worker-ийг бүртгэдэг (бүх хуудсанд орсон) |
| `offline.html` | Офлайн үед харагдах хуудас |
| `assets/icons/*` | Аппын icon-ууд (`npm run icons`-оор үүснэ) |

Шинэ icon үүсгэх / HTML-д PWA таг нэмэх:

```bash
npm install          # хэрэгслүүд (sharp, capacitor)
npm run pwa          # icon үүсгэх + бүх .html-д таг шигтгэх
firebase deploy      # ppm32.mn руу нийтлэх
```

Дараа нь утаснаас сайтыг нээгээд "Нүүр дэлгэцэд нэмэх" (Add to Home Screen) боломжтой.

---

## 2. Аппликейшн (Capacitor)

`capacitor.config.json` дотор `server.url = https://ppm32.mn` гэж тохируулсан тул
апп нь **амьд сайтыг ачаалдаг** → вебээ шинэчлэхэд апп **шууд** шинэчлэгдэнэ, дахин нийтлэх шаардлагагүй.

### Анхны тохиргоо

```bash
npm install
npx cap add ios
npx cap add android
npx cap sync
```

### Нээх / билдлэх

```bash
npm run open:ios       # Xcode нээгдэнэ → Run / Archive
npm run open:android   # Android Studio нээгдэнэ → Run / Build
```

### Native icon / splash (заавал биш)

```bash
npm run icons                       # эх icon-1024 үүсгэнэ
npx @capacitor/assets generate      # iOS+Android icon/splash бөглөнө
```

---

## 3. ⚠️ Чухал: App Store-ийн журам 4.2

Apple бол "зүгээр л вебсайт боосон" аппыг **татгалздаг**. Дайрахын тулд **native үнэ цэнэ** нэмэх ёстой.
Хэвлэлийн бизнест хамгийн тохирох нь:

- **Push notification** — захиалгын статус (`@capacitor/push-notifications`)
- Камераар файл/зураг хавсаргах (`@capacitor/camera`)
- Native share (`@capacitor/share`)

Google Play бол PWA/TWA-г албан ёсоор дэмждэг тул **амархан** батлагдана.

---

## 4. Store бүртгэл

| | Apple App Store | Google Play |
| --- | --- | --- |
| Данс | $99 / жил | $25 (нэг удаа) |
| Шалгалт | Хатуу (4.2) | Уян хатан |
| Шаардлага | privacy policy, screenshot, icon, тайлбар | мөн адил |

---

## 5. Бүрэн офлайн (bundle) хувилбар руу шилжих бол

`capacitor.config.json`-оос `server.url`-ийг хасаад, сайтын статик файлуудыг `www/`
фолдер руу хуулна. Дараа нь `npx cap sync`. (Энэ тохиолдолд агуулга өөрчлөх бүрд
дахин билдэж, store-д дахин илгээх шаардлагатай.)

---

## 6. Push notification 🔔

Push болон local notification апп-д бүрэн холбогдсон.

| Хэсэг | Файл / байршил |
| --- | --- |
| Веб талын логик | `native-app.js` (бүх хуудсанд орсон) |
| iOS APNs callback | `ios/App/App/AppDelegate.swift` |
| iOS capability | `ios/App/App/App.entitlements`, Info.plist (`remote-notification`) |
| Плагинууд | `@capacitor/push-notifications`, `@capacitor/local-notifications` |

**Хэрхэн ажилладаг:** `native-app.js` апп дотор ажиллахдаа зөвшөөрөл асууж,
төхөөрөмжийн токеныг авч **Firestore → `push_tokens`** коллекцид хадгална.
Ирсэн мэдэгдлийг foreground үед харуулж, дарвал `data.url` руу шилжүүлнэ.

> ⚠️ Энэ код апп дотор ажиллахын тулд `native-app.js`-ийг `ppm32.mn` руу
> **deploy хийх** ёстой (`firebase deploy`) — апп нь амьд сайтыг ачаалдаг.

### Бодит push идэвхжүүлэхэд

**iOS (APNs):** Apple Developer данс → Xcode → Signing & Capabilities →
**+ Push Notifications** → APNs Auth Key (.p8)-г Firebase → Cloud Messaging-д оруулна.

**Android (FCM):** Firebase Console → төсөлд **Android апп** нэмэх (package `mn.ppm32.app`)
→ `google-services.json`-г `android/app/`-д тавих.

**Илгээх тал:** `orders` коллекцийн `status` өөрчлөгдөхөд тухайн хэрэглэгчийн
`push_tokens` руу мэдэгдэл илгээдэг **Firebase Cloud Function** бичих (эсвэл админаас гараар FCM).

### Тест (Apple данс шаардлагагүй)

```bash
xcrun simctl push booted mn.ppm32.app payload.apns   # зөвшөөрөл авсан апп-д
```

### Android FCM — тохируулсан ✓

- Firebase-д **Android апп** (`mn.ppm32.app`) бүртгэгдсэн.
- `android/app/google-services.json` нэмэгдсэн (Capacitor 8 plugin-ийг автоматаар идэвхжүүлнэ).
- Android Studio дээр build хийхэд Java 21 (бундл JDK) ашиглана.

---

## 7. Cloud Function — мэдэгдэл илгээгч ☁️

`functions/index.js` нь Firestore-ийн `orders` коллекцийг сонсож push илгээнэ:

| Триггер | Үйлдэл |
| --- | --- |
| `onNewOrder` | Шинэ захиалга үүсэхэд → "Шинэ захиалга ирлээ" |
| `onOrderStatusChange` | `status` өөрчлөгдөхөд → шинэ төлөвийг мэдэгдэнэ |

Мэдэгдэл нь `push_tokens` коллекцийн бүх төхөөрөмж рүү очно (ажилтны загвар; тодорхой
хэрэглэгч рүү чиглүүлэхийн тулд токеныг захиалгад холбоно).

### Deploy хийх (Blaze төлөвлөгөө хэрэгтэй)

```bash
cd functions && npm install && cd ..
firebase deploy --only functions
```

> ⚠️ Төсөл одоо **Spark (үнэгүй)** төлөвлөгөөнд байна. Cloud Functions-д **Blaze** хэрэгтэй
> (Firebase Console → Upgrade — push квот үнэгүй хэвээр). iOS-д хүрэхийн тулд APNs
> түлхүүрийг Firebase → Cloud Messaging-д оруулсан байх ёстой.
