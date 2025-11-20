// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDnS64Pt7WFtU5YoZngax_sPddnO-E6hCA",
//   authDomain: "movie-master-pro-65ec0.firebaseapp.com",
//   projectId: "movie-master-pro-65ec0",
//   storageBucket: "movie-master-pro-65ec0.firebasestorage.app",
//   messagingSenderId: "1022634932130",
//   appId: "1:1022634932130:web:bd96d36a9559f1bb8764fb"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);