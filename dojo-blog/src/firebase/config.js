import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOQmcL5ZStLRzymW3A0SzDw_rb4deNzjo",
    authDomain: "vue-firebase-e8e8e.firebaseapp.com",
    projectId: "vue-firebase-e8e8e",
    storageBucket: "vue-firebase-e8e8e.appspot.com",
    messagingSenderId: "650920250919",
    appId: "1:650920250919:web:dd759ce125f1bed9228802"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const firestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, timeStamp };