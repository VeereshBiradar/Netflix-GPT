// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn--Ulsji-dVTzzkV0_KrDSg9hBtVvX6Q",
  authDomain: "netflix-gpt-b56d5.firebaseapp.com",
  projectId: "netflix-gpt-b56d5",
  storageBucket: "netflix-gpt-b56d5.appspot.com",
  messagingSenderId: "336722998687",
  appId: "1:336722998687:web:6b4ded663c64cd52a2b9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();