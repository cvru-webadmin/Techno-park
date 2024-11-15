import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAqf_zQY3JJu6IMgUDyHwyD82MrxLShiGE",
    authDomain: "techno-park-website.firebaseapp.com",
    projectId: "techno-park-website",
    storageBucket: "techno-park-website.firebasestorage.app",
    messagingSenderId: "397220797528",
    appId: "1:397220797528:web:e39f1eea81fa16d9067e2d",
    databaseURL:"https://techno-park-website-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);