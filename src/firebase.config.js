import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83vKsaOn6NyUIoh7EVaVggY2QCXVAGdU",
  authDomain: "dream-house-27967.firebaseapp.com",
  projectId: "dream-house-27967",
  storageBucket: "dream-house-27967.appspot.com",
  messagingSenderId: "770148202880",
  appId: "1:770148202880:web:b8c4bc8f2023a6e7782965",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
