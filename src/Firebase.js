// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbAIZhKjmwkbJSEWyo20wEMUQbGnJkFfs",
    authDomain: "personal-portfolio-38ba3.firebaseapp.com",
    projectId: "personal-portfolio-38ba3",
    storageBucket: "personal-portfolio-38ba3.appspot.com",
    messagingSenderId: "1023465294311",
    appId: "1:1023465294311:web:0dc8008a56d8e8dbd11542",
    measurementId: "G-TJG60KBD8N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };