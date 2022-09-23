import React from "react";
import { singInWithGooglePopup } from "../../utils/firebase/Firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await singInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
