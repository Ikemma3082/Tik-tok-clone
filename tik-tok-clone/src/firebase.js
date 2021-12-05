import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC9sQqgog6utiP7GWMw2Ut1jbn0ePA0y6Y",
    authDomain: "tik-tok-clone-ee3dc.firebaseapp.com",
    projectId: "tik-tok-clone-ee3dc",
    storageBucket: "tik-tok-clone-ee3dc.appspot.com",
    messagingSenderId: "820223146567",
    appId: "1:820223146567:web:4daf8e0118d94b5e5f0f62",
    measurementId: "G-8X53LL49W7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db