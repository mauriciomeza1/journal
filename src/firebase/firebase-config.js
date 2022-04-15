import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmPBUIRIXwvjJ1C6mUrBOdqHojAuTfblY",
    authDomain: "reactredux-journal.firebaseapp.com",
    projectId: "reactredux-journal",
    storageBucket: "reactredux-journal.appspot.com",
    messagingSenderId: "215332319219",
    appId: "1:215332319219:web:379f508b0197229944ac86"
};


 
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}