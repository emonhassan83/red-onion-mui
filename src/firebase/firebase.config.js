// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi--9ULd52bhLSQlPYy0h3hSUMgILfF6E",
    authDomain: "red-onion-mui.firebaseapp.com",
    projectId: "red-onion-mui",
    storageBucket: "red-onion-mui.appspot.com",
    messagingSenderId: "684164773559",
    appId: "1:684164773559:web:cf1a6c3609d4b09419bf32"
  };
  
  // Initialize Firebase
  const initializeFirebase = () => initializeApp(firebaseConfig);
  export default initializeFirebase;
