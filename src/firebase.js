
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCgU0qpTNl6fthpkWKXvJQs4HukuQbfJ-M",
    authDomain: "linked-in-79ced.firebaseapp.com",
    projectId: "linked-in-79ced",
    storageBucket: "linked-in-79ced.appspot.com",
    messagingSenderId: "894456874281",
    appId: "1:894456874281:web:76afed271bc35b09a9e338"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};