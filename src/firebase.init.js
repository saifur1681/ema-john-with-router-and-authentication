// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDitZOlmFPwlm4zZv8j1fUmlTwTuoQCIew",
    authDomain: "ema-john-router-authentication.firebaseapp.com",
    projectId: "ema-john-router-authentication",
    storageBucket: "ema-john-router-authentication.appspot.com",
    messagingSenderId: "642532210539",
    appId: "1:642532210539:web:cee2e4940dbebc53e7be2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;