import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC75VQWx-CQUmEcaJxQtKQ_Ndpzxy4AR8E",
  authDomain: "bb-movie-app-2c59d.firebaseapp.com",
  projectId: "bb-movie-app-2c59d",
  storageBucket: "bb-movie-app-2c59d.appspot.com",
  messagingSenderId: "505910254191",
  appId: "1:505910254191:web:d47e561a1eb54ee6bfcb9a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
