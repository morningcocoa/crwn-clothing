import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCoTsfTEb_GqGkNPWZ8bixbZ1cOnVWgjAE",
  authDomain: "crwn-db-9d863.firebaseapp.com",
  projectId: "crwn-db-9d863",
  storageBucket: "crwn-db-9d863.appspot.com",
  messagingSenderId: "397545084747",
  appId: "1:397545084747:web:b80d903927f4779b313ace",
  measurementId: "G-V3B5J32V5R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;