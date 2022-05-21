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


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_API_KEY,
//   authDomain:process.env.REACT_APP_AUTH_DOMAIN,
//   projectId:process.env.REACT_APP_APP_ID,
//   storageBucket:process.env.REACT_APP_PROJECT_ID,
//   messagingSenderId:process.env.REACT_APP_STORAGE_BUCKET,
//   appId:process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app)
// export default auth