import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2eWF_FLK9HL02yTZbiv8UZ1MRS_5wA5w",
  authDomain: "react-comments-b4711.firebaseapp.com",
  databaseURL: "https://react-comments-b4711-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-comments-b4711",
  storageBucket: "react-comments-b4711.appspot.com",
  messagingSenderId: "305784813199",
  appId: "1:305784813199:web:c73474f7f302b8b123a2fa",
  measurementId: "G-H87E3V46WL",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
