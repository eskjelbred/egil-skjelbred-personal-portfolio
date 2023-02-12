import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAIIC81svNRw52CSQs7x7_-GcqhdsCR0rM",
    authDomain: "skjelbred-dev-4580b.firebaseapp.com",
    databaseURL: "https://skjelbred-dev-4580b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skjelbred-dev-4580b",
    storageBucket: "skjelbred-dev-4580b.appspot.com",
    messagingSenderId: "544001314926",
    appId: "1:544001314926:web:ee318f1821055079c6967f",
    measurementId: "G-N4WL34P608",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const analytics = getAnalytics(firebaseApp);

export { auth, db, analytics };
