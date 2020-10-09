import React from "react";
import { auth, db } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./Messages.css";

function Messages() {
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div className="messages">
      {messages?.map((msg) => (
        <div
          key={msg.id}
          className={`message ${
            msg.uid === auth.currentUser.uid ? "sent" : "received"
          }`}
        >
          <img src={msg.photoURL} className="photo"></img>
          <p className="message__text">{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;
