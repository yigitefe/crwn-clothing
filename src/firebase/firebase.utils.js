import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVa9pbpWXjeYrVcQv9ne9084DDygCcwig",
    authDomain: "crwn-db-639fa.firebaseapp.com",
    databaseURL: "https://crwn-db-639fa.firebaseio.com",
    projectId: "crwn-db-639fa",
    storageBucket: "crwn-db-639fa.appspot.com",
    messagingSenderId: "1076033778252",
    appId: "1:1076033778252:web:7c53393e5d87da2482fae9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;