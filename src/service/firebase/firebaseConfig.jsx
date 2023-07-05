import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFOypD2_P12SPs6HpXiJ8YaJu8BrnZRmY",
  authDomain: "bordageek-fe42e.firebaseapp.com",
  projectId: "bordageek-fe42e",
  storageBucket: "bordageek-fe42e.appspot.com",
  messagingSenderId: "135253698517",
  appId: "1:135253698517:web:d7d6ede755104c5761ff5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)