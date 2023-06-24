import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsry3siLq_ty07pI3ZjqiATZgpre9R0jM",
  authDomain: "chat-app-vorozhbyt.firebaseapp.com",
  projectId: "chat-app-vorozhbyt",
  storageBucket: "chat-app-vorozhbyt.appspot.com",
  messagingSenderId: "727689489869",
  appId: "1:727689489869:web:3bcea871ea2b3ffa9fa884"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);