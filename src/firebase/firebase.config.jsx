import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCBd4I6r98MchY9241z-unrfdWVwFaasn8",
    authDomain: "sasta-suvista.firebaseapp.com",
    databaseURL: "https://sasta-suvista.firebaseio.com",
    projectId: "sasta-suvista",
    storageBucket: "sasta-suvista.appspot.com",
    messagingSenderId: "920050810831",
    appId: "1:920050810831:web:3ee65a78af9e2450cd1cba",
    measurementId: "G-H10V2VBBLV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider)
    .catch((e) => {
        console.log(e);
});



export default firebase;