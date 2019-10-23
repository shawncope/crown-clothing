import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import api_keys from '../api-keys';

const config = {
  apiKey: api_keys.fireBaseApiKey,
  authDomain: 'crown-db-dbf36.firebaseapp.com',
  databaseURL: 'https://crown-db-dbf36.firebaseio.com',
  projectId: 'crown-db-dbf36',
  storageBucket: 'crown-db-dbf36.appspot.com',
  messagingSenderId: '82085958684',
  appId: '1:82085958684:web:9017f36788f3e4be167bd9',
  measurementId: 'G-72QBYJ997L'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user, error.message');
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
