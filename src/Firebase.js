import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyAW-HXvRPAlPfxiYnDb_VayD9IaAF0xumM",
  authDomain: "claytonfarmhack.firebaseapp.com",
  projectId: "claytonfarmhack",
  storageBucket: "claytonfarmhack.appspot.com",
  messagingSenderId: "495717288869",
  appId: "1:495717288869:web:d03e9494e2ef868175b64c",
  measurementId: "G-2139EGS49V"
});

// Initialize Firebase
// export const analytics = getAnalytics(app);
export const auth = app.auth();
export const firestore = app.firestore();


