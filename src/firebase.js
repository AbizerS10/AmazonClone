import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTnmjQA98hzxebgL4VRHXQZ5VB4NEVIZg",
  authDomain: "clone-def31.firebaseapp.com",
  projectId: "clone-def31",
  storageBucket: "clone-def31.appspot.com",
  messagingSenderId: "421608658299",
  appId: "1:421608658299:web:a2007e396c76ec426159de",
  measurementId: "G-GWXYP68N3K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
