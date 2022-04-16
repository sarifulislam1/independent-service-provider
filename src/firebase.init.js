// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu0x6pJd1NRoeZoycr554teVPZ3XXpHUU",
    authDomain: "independent-photographer.firebaseapp.com",
    projectId: "independent-photographer",
    storageBucket: "independent-photographer.appspot.com",
    messagingSenderId: "475237350347",
    appId: "1:475237350347:web:054956f47b1ef4d1e3d44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth