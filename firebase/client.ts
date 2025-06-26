import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDICyxGOTRhgcyvN9refUS4IlpmrkrjnU4",
  authDomain: "prepwise-ed405.firebaseapp.com",
  projectId: "prepwise-ed405",
  storageBucket: "prepwise-ed405.firebasestorage.app",
  messagingSenderId: "140935427006",
  appId: "1:140935427006:web:f5ea1781d4db6360e2ffef",
  measurementId: "G-YEGQN4E697",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
