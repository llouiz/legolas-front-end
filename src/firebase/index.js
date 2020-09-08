import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "yourkey",
  authDomain: "yourdomain",
  databaseURL: "url",
  projectId: "yourid",
  storageBucket: "bucket",
  messagingSenderId: "493146062166",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
