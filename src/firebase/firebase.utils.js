import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZi7eaCA0zxd9LJsICCAOt021OVyEByLo",
    authDomain: "crown-db-1cdd4.firebaseapp.com",
    databaseURL: "https://crown-db-1cdd4.firebaseio.com",
    projectId: "crown-db-1cdd4",
    storageBucket: "crown-db-1cdd4.appspot.com",
    messagingSenderId: "953321096455",
    appId: "1:953321096455:web:ccbcbc5736659dfbcbf1a2",
    measurementId: "G-7TXG8K72DV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // GOOGLE AUTHENTICATION
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  
