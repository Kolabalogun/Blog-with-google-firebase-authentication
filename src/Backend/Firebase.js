import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwTS_jD0sQjer0HdFPmlavEJBh2rYECEY",
  authDomain: "ibrahim-blogg.firebaseapp.com",
  projectId: "ibrahim-blogg",
  storageBucket: "ibrahim-blogg.appspot.com",
  messagingSenderId: "999896072499",
  appId: "1:999896072499:web:8d681f1b9f815858a77e46",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
