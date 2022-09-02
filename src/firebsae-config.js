// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmU0yECw9lN016rbEEskQmqSLPebsv4fw",
  authDomain: "blogproject-544b5.firebaseapp.com",
  projectId: "blogproject-544b5",
  storageBucket: "blogproject-544b5.appspot.com",
  messagingSenderId: "1042256174833",
  appId: "1:1042256174833:web:f7d540ebc7522f19c6d350",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

