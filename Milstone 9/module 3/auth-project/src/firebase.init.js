// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4WE2DyhoyFIZ02z_V2c4qLL6WpPKC8FM",
  authDomain: "auth-private-cdfb6.firebaseapp.com",
  projectId: "auth-private-cdfb6",
  storageBucket: "auth-private-cdfb6.firebasestorage.app",
  messagingSenderId: "988169226318",
  appId: "1:988169226318:web:d3336b5f7d0c34452e5b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);