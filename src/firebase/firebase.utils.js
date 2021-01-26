import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_4EPCEU8Ob5gFgfQGLPssSopE8UHXW04",
  authDomain: "crwn-clothing-186fb.firebaseapp.com",
  projectId: "crwn-clothing-186fb",
  storageBucket: "crwn-clothing-186fb.appspot.com",
  messagingSenderId: "232086993982",
  appId: "1:232086993982:web:a319605f10794f2376e56f",
  measurementId: "G-K79B7CF9DR",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;