import React from "react";
import { auth } from "./firebase";

function SignOut() {
  return (
    auth.currentUser && (
      <div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    )
  );
}

export default SignOut;
