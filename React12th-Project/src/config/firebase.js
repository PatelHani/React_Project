
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCN6jp9dXGBUwYJ8xfN5Gl1CYMaRBCSGA8",
  authDomain: "recipe-book-d37f7.firebaseapp.com",
  projectId: "recipe-book-d37f7",
  storageBucket: "recipe-book-d37f7.firebasestorage.app",
  messagingSenderId: "772988754037",
  appId: "1:772988754037:web:aab5031fdb69ad8055003c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);