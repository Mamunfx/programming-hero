// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZaMKJ0L24JznjoBJQ0bLctoVR7RH9Cc",
  authDomain: "dragon-auth-56cd5.firebaseapp.com",
  projectId: "dragon-auth-56cd5",
  storageBucket: "dragon-auth-56cd5.firebasestorage.app",
  messagingSenderId: "102004241811",
  appId: "1:102004241811:web:2ed07b93544ea7f9eee466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;