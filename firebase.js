// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmREqgRUqSgZ0CM-CsI8j5rt58wwj5mPg",
  authDomain: "iskydivemedia.firebaseapp.com",
  projectId: "iskydivemedia",
  storageBucket: "iskydivemedia.firebasestorage.app",
  messagingSenderId: "490381710162",
  appId: "1:490381710162:web:16434c5f60d19d4774e08b",
  measurementId: "G-MPEF0PZ8DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
