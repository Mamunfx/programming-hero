// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCjidz2cUgi6uDl1giqGcaJmYehzOJyA4",
  authDomain: "mongodb-auth-f496f.firebaseapp.com",
  projectId: "mongodb-auth-f496f",
  storageBucket: "mongodb-auth-f496f.firebasestorage.app",
  messagingSenderId: "794319826334",
  appId: "1:794319826334:web:186fcd66b95b75b6c1ba8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);