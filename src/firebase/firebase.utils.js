import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvy7QPRSzAMHeY-MEcwCPkvGnPd-RWGIg',
  authDomain: 'crown-db-dbf36.firebaseapp.com',
  databaseURL: 'https://crown-db-dbf36.firebaseio.com',
  projectId: 'crown-db-dbf36',
  storageBucket: 'crown-db-dbf36.appspot.com',
  messagingSenderId: '82085958684',
  appId: '1:82085958684:web:9017f36788f3e4be167bd9',
  measurementId: 'G-72QBYJ997L'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
