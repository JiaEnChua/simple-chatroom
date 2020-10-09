import React from "react";
import firebase, { auth, db } from "./firebase";

function SignIn() {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="signin">
      <h2>You gotta login first 😎 </h2>
      <br />
      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
