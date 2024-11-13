// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWIssO8qhX-NpDdMiUzjHt6hJ_l9sfoGc",
  authDomain: "vue-firebase-45a7a.firebaseapp.com",
  projectId: "vue-firebase-45a7a",
  storageBucket: "vue-firebase-45a7a.firebasestorage.app",
  messagingSenderId: "165152231903",
  appId: "1:165152231903:web:c3624efc6724e65e9eb46a",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };