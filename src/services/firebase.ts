
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBs_xliqO7VlSEdo99o3sXOfqJoABgyqqY",
  authDomain: "cctv--login.firebaseapp.com",
  projectId: "cctv--login",
  storageBucket: "cctv--login.firebasestorage.app",
  messagingSenderId: "346354659702",
  appId: "1:346354659702:web:da0c1fdc5d71506f2a0a57",
  measurementId: "G-YCQQM7QW54"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);