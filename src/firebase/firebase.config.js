// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFpGvGMZBRKir_mWh2G9m5yHT-ePW0aA0",
  authDomain: "dragon-news-auth-ac151.firebaseapp.com",
  projectId: "dragon-news-auth-ac151",
  storageBucket: "dragon-news-auth-ac151.appspot.com",
  messagingSenderId: "45091064474",
  appId: "1:45091064474:web:134df86251e885b897ed23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;