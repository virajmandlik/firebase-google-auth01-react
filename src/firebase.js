// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDUNNsCr5ZGY8Xq20_WXCaxz3LptY9e8",
  authDomain: "elevated-web-395908.firebaseapp.com",
  projectId: "elevated-web-395908",
  storageBucket: "elevated-web-395908.firebasestorage.app",
  messagingSenderId: "992768799961",
  appId: "1:992768799961:web:c2c87d7c7fb3392426fac8",
  measurementId: "G-C6VQ198CQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()

export default app