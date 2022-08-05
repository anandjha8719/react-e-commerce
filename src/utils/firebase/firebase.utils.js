import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-bQqXRe9t7PFbTnf6fcBjV6ctvM7DhHw",
  authDomain: "shopping-db-88caf.firebaseapp.com",
  projectId: "shopping-db-88caf",
  storageBucket: "shopping-db-88caf.appspot.com",
  messagingSenderId: "110624239150",
  appId: "1:110624239150:web:399eb4812637f5fd7179bf"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
