// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjS6YkVYz1EKf4W4Epu1VwY7Bp2Oap7wQ",
  authDomain: "simple-firebase-838c9.firebaseapp.com",
  projectId: "simple-firebase-838c9",
  storageBucket: "simple-firebase-838c9.firebasestorage.app",
  messagingSenderId: "1043949594329",
  appId: "1:1043949594329:web:33c5a9b76be80c991280c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;