// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB72ruZ30LiDT0QzP5ji_llpA37KfwRaVA",
  authDomain: "manufacturer-1250a.firebaseapp.com",
  projectId: "manufacturer-1250a",
  storageBucket: "manufacturer-1250a.appspot.com",
  messagingSenderId: "865721964794",
  appId: "1:865721964794:web:1c3abdef07fd4a75615143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth