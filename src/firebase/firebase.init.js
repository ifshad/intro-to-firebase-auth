// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu2NLOGaPDC6UW_QzpWjtYXtATPgg9PKc",
  authDomain: "intro-to-firebase-auth-f85de.firebaseapp.com",
  projectId: "intro-to-firebase-auth-f85de",
  storageBucket: "intro-to-firebase-auth-f85de.appspot.com",
  messagingSenderId: "166081413571",
  appId: "1:166081413571:web:9811e4b0a9103a90a77d76",
  measurementId: "G-Q1LVZKVYYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;