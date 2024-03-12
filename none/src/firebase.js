// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyClRe8N9PzwIVQVFAvjoR8hfmvD3ZJBEtE",
  authDomain: "exchange-4e3f1.firebaseapp.com",
  projectId: "exchange-4e3f1",
  storageBucket: "exchange-4e3f1.appspot.com",
  messagingSenderId: "960778304323",
  appId: "1:960778304323:web:a621ee117e22a34a900df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };