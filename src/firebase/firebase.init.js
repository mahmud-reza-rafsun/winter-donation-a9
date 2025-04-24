// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbSl2vg8FchfkU-GonbMmAzb87hy9KMI4",
  authDomain: "winter-clothing-donation-5cb28.firebaseapp.com",
  projectId: "winter-clothing-donation-5cb28",
  storageBucket: "winter-clothing-donation-5cb28.firebasestorage.app",
  messagingSenderId: "431112929622",
  appId: "1:431112929622:web:2125fd7e5b57aa7e2856f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);