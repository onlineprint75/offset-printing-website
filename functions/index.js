/*
 * PPM Cloud Functions — order push notifications.
 *
 * Triggers:
 *   - onNewOrder:        a document is created in `orders`        → notify staff devices
 *   - onOrderStatusChange: an `orders` doc's `status` changes      → notify
 *
 * Notifications are sent via FCM to every device token stored in the `push_tokens`
 * collection (written by native-app.js when the app is installed). This is the
 * "staff get notified" model. To target a specific customer instead, store that
 * customer's token on the order document at submission time and read it here.
 *
 * Requires the Blaze plan to deploy. iOS delivery additionally needs an APNs key
 * uploaded in Firebase Console → Project Settings → Cloud Messaging.
 */
const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

initializeApp();
const db = getFirestore();

// Human-readable Mongolian labels for order statuses.
const STATUS_LABELS = {
  new: 'Шинэ',
  confirmed: 'Баталгаажсан',
  in_production: 'Хэвлэлд орсон',
  printing: 'Хэвлэгдэж байна',
  ready: 'Бэлэн боллоо',
  delivered: 'Хүргэгдсэн',
  cancelled: 'Цуцлагдсан',
};

async function getAllTokens() {
  const snap = await db.collection('push_tokens').get();
  return snap.docs.map((d) => d.get('token')).filter(Boolean);
}

async function sendToTokens(tokens, title, body, data) {
  if (!tokens.length) {
    console.log('No push tokens registered — nothing to send.');
    return;
  }
  // FCM multicast accepts up to 500 tokens per call.
  for (let i = 0; i < tokens.length; i += 500) {
    const batch = tokens.slice(i, i + 500);
    const res = await getMessaging().sendEachForMulticast({
      tokens: batch,
      notification: { title, body },
      data: Object.fromEntries(
        Object.entries(data || {}).map(([k, v]) => [k, String(v)])
      ),
      apns: { payload: { aps: { sound: 'default', badge: 1 } } },
      android: { priority: 'high', notification: { sound: 'default' } },
    });
    console.log(`Sent: ${res.successCount} ok, ${res.failureCount} failed.`);
  }
}

// New order → notify staff devices.
exports.onNewOrder = onDocumentCreated('orders/{orderId}', async (event) => {
  const order = event.data && event.data.data();
  if (!order) return;
  const product = order.productName || order.product || order.type || 'захиалга';
  await sendToTokens(
    await getAllTokens(),
    'Шинэ захиалга ирлээ 🖨️',
    `${product} — шинэ захиалга бүртгэгдлээ.`,
    { url: 'https://ppm32.mn/admin-dashboard.html', orderId: event.params.orderId }
  );
});

// Order status change → notify.
exports.onOrderStatusChange = onDocumentUpdated('orders/{orderId}', async (event) => {
  const before = event.data && event.data.before.data();
  const after = event.data && event.data.after.data();
  if (!before || !after || before.status === after.status) return;
  const label = STATUS_LABELS[after.status] || after.status;
  await sendToTokens(
    await getAllTokens(),
    'Захиалгын төлөв шинэчлэгдлээ',
    `Захиалгын төлөв: ${label}`,
    {
      url: 'https://ppm32.mn/admin-dashboard.html',
      orderId: event.params.orderId,
      status: after.status,
    }
  );
});
