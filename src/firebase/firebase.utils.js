import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCz4GF4YyeMFUAXI4QMlQ9jIjkGQx3KY1Y",
    authDomain: "crwn-db-79dc5.firebaseapp.com",
    databaseURL: "https://crwn-db-79dc5.firebaseio.com",
    projectId: "crwn-db-79dc5",
    storageBucket: "crwn-db-79dc5.appspot.com",
    messagingSenderId: "645710241897",
    appId: "1:645710241897:web:ebedb934d1a0c4a22a02f8",
    measurementId: "G-GHNSJ30LQT"
     
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;