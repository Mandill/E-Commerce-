// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKg2Td2wfYrdjDzVmQk155--lm9hbWwuA",
    authDomain: "e-com-6183a.firebaseapp.com",
    projectId: "e-com-6183a",
    storageBucket: "e-com-6183a.appspot.com",
    messagingSenderId: "279115568405",
    appId: "1:279115568405:web:41dcc2f288324699b6c51c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }