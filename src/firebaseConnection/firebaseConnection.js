import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCP0UzFhUl6A-sYfA20mFk9ANCex0a6Ges",
    authDomain: "sistemaregistros-ddd71.firebaseapp.com",
    projectId: "sistemaregistros-ddd71",
    storageBucket: "sistemaregistros-ddd71.appspot.com",
    messagingSenderId: "990376470263",
    appId: "1:990376470263:web:bcd378d3f8417a765715f2",
    measurementId: "G-B25TS6WLB6"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}

export default firebase;