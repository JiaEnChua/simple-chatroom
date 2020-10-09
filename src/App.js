import React from "react";
import "./App.css";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  console.log("The USER >>> ", user);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app_signOut">
          <SignOut />
        </div>
        {user ? <ChatRoom /> : <SignIn />}
      </div>
    </div>
  );
}

export default App;
