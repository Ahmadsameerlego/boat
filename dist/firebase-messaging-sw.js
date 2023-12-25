importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyA5WYrZUxFxMyaivbHTeTxAtIgXWk3UO98",
authDomain: "book-a-boat-ba4c0.firebaseapp.com",
projectId: "book-a-boat-ba4c0",
storageBucket: "book-a-boat-ba4c0.appspot.com",
messagingSenderId: "569365227229",
appId: "1:569365227229:web:b564b0893537aec516dd34",
measurementId: "G-FE2RLQ148Q"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
