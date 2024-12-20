// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmPHSpiC6IsaU80EFVJ8g--uEKIAuN8c",
  authDomain: "reactfpr-1750c.firebaseapp.com",
  projectId: "reactfpr-1750c",
  storageBucket: "reactfpr-1750c.firebasestorage.app",
  messagingSenderId: "518847287432",
  appId: "1:518847287432:web:13089db4a350f0f5ab8f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth , db }