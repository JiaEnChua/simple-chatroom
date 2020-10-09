import React, { useState, useRef } from "react";
import "./ChatRoom.css";
import Messages from "./Messages";
import firebase, { db, auth } from "./firebase";

function ChatRoom() {
  const [message, setMessage] = useState("");
  const chatBottom = useRef();

  const submitMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessage("");

    chatBottom.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="chatRoom">
        <div className="chatRoom__container">
          <h1>ChatRoom</h1>
          <Messages />
          <div ref={chatBottom}></div>
        </div>
      </div>
      <form onSubmit={submitMessage}>
        <input
          placeholder="Type something here..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></input>
        <button type="submit">🚀</button>
      </form>
    </div>
  );
}

export default ChatRoom;
