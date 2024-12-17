// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwI1_GGyqOUzkYMkE0oqOw4lO3xchI3g",
  authDomain: "reactf1-9bdd7.firebaseapp.com",
  projectId: "reactf1-9bdd7",
  storageBucket: "reactf1-9bdd7.firebasestorage.app",
  messagingSenderId: "63456661037",
  appId: "1:63456661037:web:c19b35d5c047f3ceb972a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}




