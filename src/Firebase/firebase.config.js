// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnXr33_965HevYFmK3pc9YuW7mVnQ9Dug",
  authDomain: "dragon-news-auth-project-58e7a.firebaseapp.com",
  projectId: "dragon-news-auth-project-58e7a",
  storageBucket: "dragon-news-auth-project-58e7a.appspot.com",
  messagingSenderId: "421807583034",
  appId: "1:421807583034:web:063b4510586c007eb36a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;