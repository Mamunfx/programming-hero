// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_VImojuJYIRvKuxDWKVZVvgUXQqKXA88",
  authDomain: "practice-b547c.firebaseapp.com",
  projectId: "practice-b547c",
  storageBucket: "practice-b547c.firebasestorage.app",
  messagingSenderId: "593097476679",
  appId: "1:593097476679:web:0293c7c6fec48ef8727f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);