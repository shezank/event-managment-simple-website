// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmsjdsbQ5Y_eIftneahb7tiJgBpCyhx9U",
  authDomain: "weding-events-managment.firebaseapp.com",
  projectId: "weding-events-managment",
  storageBucket: "weding-events-managment.appspot.com",
  messagingSenderId: "864629134392",
  appId: "1:864629134392:web:663b29231fea02ed9682cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
