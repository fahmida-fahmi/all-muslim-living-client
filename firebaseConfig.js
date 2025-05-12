// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULMh9XB5ymOMDgddf_LguAtNB-YIUzks",
  authDomain: "ail-muslim-living.firebaseapp.com",
  projectId: "ail-muslim-living",
  storageBucket: "ail-muslim-living.firebasestorage.app",
  messagingSenderId: "82942506862",
  appId: "1:82942506862:web:637b13362eb04e7b4ff37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app