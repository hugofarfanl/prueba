// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6IMRXxQmykbawdGFnoeRppL_sj0rBeXM",
  authDomain: "prueba-5da28.firebaseapp.com",
  projectId: "prueba-5da28",
  storageBucket: "prueba-5da28.firebasestorage.app",
  messagingSenderId: "1039441804444",
  appId: "1:1039441804444:web:379fac81293758ddd88159",
  measurementId: "G-PHKR0FMNYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);