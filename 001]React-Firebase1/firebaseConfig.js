// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcA_e3LoC2Oqb7NPHOp6qc-lNG5F7pwSE",
  authDomain: "react1-dd32f.firebaseapp.com",
  projectId: "react1-dd32f",
  storageBucket: "react1-dd32f.firebasestorage.app",
  messagingSenderId: "467398607239",
  appId: "1:467398607239:web:26672c5760306c2bdad322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
