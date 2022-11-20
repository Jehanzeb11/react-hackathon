// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMl8vGMvWs38MZa9z2pxO-wh-vgmJmKT8",
  authDomain: "hackathon-de390.firebaseapp.com",
  projectId: "hackathon-de390",
  storageBucket: "hackathon-de390.appspot.com",
  messagingSenderId: "857277991884",
  appId: "1:857277991884:web:f08f45897d2a073d66ab69"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app)


// // authentication


 const auth = getAuth(app)

export {auth,db}

