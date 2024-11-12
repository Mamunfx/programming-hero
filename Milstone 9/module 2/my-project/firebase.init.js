// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Gc06TwLkgtaaw-v3xVP3LMmTCEMwRqQ",
  authDomain: "module-2-7c06a.firebaseapp.com",
  projectId: "module-2-7c06a",
  storageBucket: "module-2-7c06a.firebasestorage.app",
  messagingSenderId: "927952017976",
  appId: "1:927952017976:web:2d3564f409bd1b5fa0a4cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;