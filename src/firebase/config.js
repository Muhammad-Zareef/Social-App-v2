
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0-7DLQT1D_zpNdfWvB22k4bBO76ZJRNE",
    authDomain: "social-app-bc115.firebaseapp.com",
    projectId: "social-app-bc115",
    storageBucket: "social-app-bc115.firebasestorage.app",
    messagingSenderId: "153221740069",
    appId: "1:153221740069:web:64d9aba05c7c03786531cc",
    measurementId: "G-LB81M27NGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
