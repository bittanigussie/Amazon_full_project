// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidxQ7bxxGyrqurMIFzfsUgVrOptTczzU",
  authDomain: "clone-c9875.firebaseapp.com",
  projectId: "clone-c9875",
  storageBucket: "clone-c9875.appspot.com",
  messagingSenderId: "501191582151",
  appId: "1:501191582151:web:f3fc683707f9e9370939e2"
};

// Initialize Firebase
const app = firebase. initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
