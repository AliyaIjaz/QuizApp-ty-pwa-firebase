importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBVoageyS5zUBlwnrdhnA-BsEttt5CMKoU",
    authDomain: "ty-quizapp-pwa.firebaseapp.com",
    projectId: "ty-quizapp-pwa",
    storageBucket: "ty-quizapp-pwa.appspot.com",
    messagingSenderId: "566010121790",
    appId: "1:566010121790:web:dbed8e85886e621a2e4b6f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();

