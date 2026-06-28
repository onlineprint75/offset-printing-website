/*
 * PPM native-app bridge.
 * Loaded on every page. Does NOTHING in a normal browser — it only activates when
 * the page is running INSIDE the Capacitor app (iOS/Android), reached through the
 * `window.Capacitor` bridge. There it:
 *   1. asks for notification permission,
 *   2. registers for remote push (APNs / FCM) and stores the device token in
 *      Firestore (`push_tokens`) so the admin/order system can target the device,
 *   3. shows incoming pushes while the app is in the foreground,
 *   4. handles notification taps (deep-links via data.url),
 *   5. exposes window.ppmLocalNotify(title, body) for local/test notifications.
 */
(function () {
  const Cap = window.Capacitor;
  const isNative = !!(Cap && typeof Cap.isNativePlatform === 'function' && Cap.isNativePlatform());

  // In a plain browser there is nothing to do — keep the website untouched.
  if (!isNative) return;

  const plugins = Cap.Plugins || {};
  const Push = plugins.PushNotifications;
  const Local = plugins.LocalNotifications;
  const platform = typeof Cap.getPlatform === 'function' ? Cap.getPlatform() : 'unknown';

  // Store the push token in Firestore using the site's existing Firebase app.
  async function saveToken(token) {
    try {
      const { db } = await import('/firebase-config.js');
      const { doc, setDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
      );
      await setDoc(
        doc(db, 'push_tokens', token),
        { token, platform, updatedAt: serverTimestamp() },
        { merge: true }
      );
      console.log('[ppm] push token saved to Firestore');
    } catch (e) {
      console.warn('[ppm] could not save push token:', e);
    }
  }

  // Fire a local notification (works offline, no server / Apple account needed).
  window.ppmLocalNotify = async function (title, body, data) {
    if (!Local) return;
    try {
      await Local.requestPermissions();
      await Local.schedule({
        notifications: [
          {
            id: Math.floor(Date.now() % 100000),
            title: title || 'PPM',
            body: body || '',
            extra: data || {},
            schedule: { at: new Date(Date.now() + 300) }
          }
        ]
      });
    } catch (e) {
      console.warn('[ppm] local notify failed:', e);
    }
  };

  async function initPush() {
    if (!Push) return;

    // Foreground delivery → re-show as a local notification so the user sees it.
    Push.addListener('pushNotificationReceived', (notif) => {
      if (Local) {
        Local.schedule({
          notifications: [
            {
              id: Math.floor(Date.now() % 100000),
              title: notif.title || 'PPM',
              body: notif.body || '',
              extra: notif.data || {}
            }
          ]
        }).catch(() => {});
      }
    });

    // Tap on a notification → deep-link if a url was provided in the payload.
    Push.addListener('pushNotificationActionPerformed', (action) => {
      const url = action && action.notification && action.notification.data && action.notification.data.url;
      if (url) {
        try { window.location.href = url; } catch (e) {}
      }
    });

    Push.addListener('registration', (token) => {
      console.log('[ppm] push registration token received');
      saveToken(token.value);
    });

    Push.addListener('registrationError', (err) => {
      // Expected on iOS until a real Apple Developer account + APNs key is configured.
      console.warn('[ppm] push registration error:', err && err.error);
    });

    try {
      let perm = await Push.checkPermissions();
      if (perm.receive === 'prompt' || perm.receive === 'prompt-with-rationale') {
        perm = await Push.requestPermissions();
      }
      if (perm.receive === 'granted') {
        await Push.register();
      } else {
        console.warn('[ppm] push permission not granted:', perm.receive);
      }
    } catch (e) {
      console.warn('[ppm] push init error:', e);
    }
  }

  // Also make sure local-notification permission is requested up front.
  if (Local) {
    Local.requestPermissions().catch(() => {});
  }

  initPush();
})();
