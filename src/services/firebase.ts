
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrbCAjq3ivXOBibXXBS1gE-P8j9Z6ZU3w",
  authDomain: "cctv-teste.firebaseapp.com",
  projectId: "cctv-teste",
  storageBucket: "cctv-teste.firebasestorage.app",
  messagingSenderId: "646002818651",
  appId: "1:646002818651:web:8fd70686a20bca8dc4c97e",
  measurementId: "G-RZVTMF1JQW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);