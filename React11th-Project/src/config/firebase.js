// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6jp9dXGBUwYJ8xfN5Gl1CYMaRBCSGA8",
  authDomain: "recipe-book-d37f7.firebaseapp.com",
  projectId: "recipe-book-d37f7",
  storageBucket: "recipe-book-d37f7.firebasestorage.app",
  messagingSenderId: "772988754037",
  appId: "1:772988754037:web:aab5031fdb69ad8055003c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);