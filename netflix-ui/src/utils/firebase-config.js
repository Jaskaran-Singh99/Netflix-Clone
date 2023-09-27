// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCoWwru0JnGBrO_9vsjw-7MA8F7swb4B_U",
  authDomain: "netflix-clone-46221.firebaseapp.com",
  projectId: "netflix-clone-46221",
  storageBucket: "netflix-clone-46221.appspot.com",
  messagingSenderId: "75904900143",
  appId: "1:75904900143:web:68f16756ef194969d93ada",
  measurementId: "G-4NQR530D15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
// const analytics = getAnalytics(app);