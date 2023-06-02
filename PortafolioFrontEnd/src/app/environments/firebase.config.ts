// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "crendialapike",
    authDomain: "URL",
    databaseURL: "URL",
    projectId: "URL",
    storageBucket: "URL",
    messagingSenderId: "idMessaging",
    appId: "idApp"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
