import React from "react";
import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";

import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
