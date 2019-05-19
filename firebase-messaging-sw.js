importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '287084076042'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = JSON.parse(payload.data.notification).title ;
  const notificationOptions = {
    body: JSON.parse(payload.data.notification).body,
    icon: JSON.parse(payload.data.notification).icon
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

