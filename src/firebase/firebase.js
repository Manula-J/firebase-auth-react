import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiGH1ceg85ILrxj5byqOxtUzhYrC7C2MU",
  authDomain: "fir-auth-project-adf21.firebaseapp.com",
  projectId: "fir-auth-project-adf21",
  storageBucket: "fir-auth-project-adf21.appspot.com",
  messagingSenderId: "926137273598",
  appId: "1:926137273598:web:47a923761437801f6429af",
  measurementId: "G-KTHP4JYR0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };