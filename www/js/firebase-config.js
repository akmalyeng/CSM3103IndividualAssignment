// firebase-config.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlO5nJz7IWrV2PhsGIMeeo4GeZMiuvvIo",
    authDomain: "inspiraapp-a69d6.firebaseapp.com",
    projectId: "inspiraapp-a69d6",
    storageBucket: "inspiraapp-a69d6.appspot.com",
    messagingSenderId: "618976070346",
    appId: "1:618976070346:web:ecec9ef9ddd57014700233",
    measurementId: "G-TG0EEXJ5ZE"
};

const db = firebase.firestore();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

