import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXLBBzb-sje-rySf9PUh6JE6C5nHMBV1c",
    authDomain: "whatsapp-2-edde2.firebaseapp.com",
    projectId: "whatsapp-2-edde2",
    storageBucket: "whatsapp-2-edde2.appspot.com",
    messagingSenderId: "1045303375069",
    appId: "1:1045303375069:web:970d23d91b4d26bad39734",
    measurementId: "G-E0R2VD1Y41"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();    
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };