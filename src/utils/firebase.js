// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Qojd29hwG-x7mURx21wOLH3JFwNktZY",
  authDomain: "anonym-feedback-proj.firebaseapp.com",
  projectId: "anonym-feedback-proj",
  storageBucket: "anonym-feedback-proj.appspot.com",
  messagingSenderId: "1061029933243",
  appId: "1:1061029933243:web:9360afad6a5e111c4fb99e",
  measurementId: "G-EFPZLSF3V2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);