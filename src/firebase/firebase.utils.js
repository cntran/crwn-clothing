import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbivVB63tQ4q0KYGpdof27ThyKwZFnyxI",
  authDomain: "crwn-clothing-48d0b.firebaseapp.com",
  projectId: "crwn-clothing-48d0b",
  storageBucket: "crwn-clothing-48d0b.appspot.com",
  messagingSenderId: "710077863138",
  appId: "1:710077863138:web:8b58b217f570fb5813babb",
  measurementId: "G-R1QT2D140M"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;