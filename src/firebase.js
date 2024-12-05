// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5cBkQA5SK51f5xWg-fVL8opONtbEMJUw",
  authDomain: "sports-corner-cc0b3.firebaseapp.com",
  projectId: "sports-corner-cc0b3",
  storageBucket: "sports-corner-cc0b3.firebasestorage.app",
  messagingSenderId: "646576982420",
  appId: "1:646576982420:web:d1f88098a51fa873972781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);