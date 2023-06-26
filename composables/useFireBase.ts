// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0hB49mVc6vNZMhE7ByoWEALy8XYzaIu0",
  authDomain: "protect-route.firebaseapp.com",
  projectId: "protect-route",
  storageBucket: "protect-route.appspot.com",
  messagingSenderId: "959170446354",
  appId: "1:959170446354:web:fc2ec7ec3f2a77efa204cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function useFireBase(){
    const auth = getAuth(app);
    return { app, auth }
}