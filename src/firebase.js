// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt60WT0nXJ4iR1ZLLt0NlB06ch0XZwYGo",
  authDomain: "angermanage-472e7.firebaseapp.com",
  projectId: "angermanage-472e7",
  storageBucket: "angermanage-472e7.firebasestorage.app",
  messagingSenderId: "909627609659",
  appId: "1:909627609659:web:7e524477192bec4acf021e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); //creates a connection between your frontend code and your Firebase backend — it sets up the app so you can call Firebase services.

