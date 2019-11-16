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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;