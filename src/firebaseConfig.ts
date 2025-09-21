// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBMDi8173fx1dFUThiSh7ijs52KEEw0nI4",
  authDomain: "marketplace-4072a.firebaseapp.com",
  projectId: "marketplace-4072a",
  storageBucket: "marketplace-4072a.firebasestorage.app",
  messagingSenderId: "645440227057",
  appId: "1:645440227057:web:9fb526222b41294ae20b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;