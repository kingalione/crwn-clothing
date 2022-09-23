import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoSrbuWcfQBYz8IsQMLRR-kxYhX7HWO1s",
  authDomain: "crwn-clothing-db-ef84d.firebaseapp.com",
  projectId: "crwn-clothing-db-ef84d",
  storageBucket: "crwn-clothing-db-ef84d.appspot.com",
  messagingSenderId: "1012137897264",
  appId: "1:1012137897264:web:98c0fa5e9513c96f19ecf5",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data not exists
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  //if user data exists return userDocRef
  return userDocRef;
}