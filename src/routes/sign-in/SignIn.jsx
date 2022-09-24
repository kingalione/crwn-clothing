import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  singInWithGooglePopup,
  singInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import { async } from "@firebase/util";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if(response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    fetchData();
  }, [])


  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={singInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
