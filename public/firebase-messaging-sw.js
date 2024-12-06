import firebase from "firebase/compat/app";

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAqf_zQY3JJu6IMgUDyHwyD82MrxLShiGE",
  authDomain: "techno-park-website.firebaseapp.com",
  databaseURL: "https://techno-park-website-default-rtdb.firebaseio.com",
  projectId: "techno-park-website",
  storageBucket: "techno-park-website.firebasestorage.app",
  messagingSenderId: "397220797528",
  appId: "1:397220797528:web:e39f1eea81fa16d9067e2d",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
