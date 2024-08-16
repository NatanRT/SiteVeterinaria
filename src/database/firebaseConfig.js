import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk19wWGvydFegr6dxMdfhYaT2H_QPW8tg",
  authDomain: "veterianriaifpr.firebaseapp.com",
  projectId: "veterianriaifpr",
  storageBucket: "veterianriaifpr.appspot.com",
  messagingSenderId: "492900968164",
  appId: "1:492900968164:web:177b89567e861a143f6ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;