import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBic9pNkiPjOZFCMGeqFqkQN3K1F_HjE48",
  authDomain: "simple-chatroom-c15b4.firebaseapp.com",
  databaseURL: "https://simple-chatroom-c15b4.firebaseio.com",
  projectId: "simple-chatroom-c15b4",
  storageBucket: "simple-chatroom-c15b4.appspot.com",
  messagingSenderId: "560068643583",
  appId: "1:560068643583:web:c7e418fb988f76cd669aca",
  measurementId: "G-FYQG8DVPH9",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
