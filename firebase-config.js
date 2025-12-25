// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIg6O2QhRT_9f_izoMfuoHEMOrxSThOjk",
    authDomain: "printing-admin-4fd08.firebaseapp.com",
    projectId: "printing-admin-4fd08",
    storageBucket: "printing-admin-4fd08.firebasestorage.app",
    messagingSenderId: "1076859337902",
    appId: "1:1076859337902:web:911c780fc4e6139519013f",
    measurementId: "G-Q50KVZX7RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
