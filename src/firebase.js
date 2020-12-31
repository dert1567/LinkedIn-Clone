
import firebase from 'firebase'


const firebaseConfig = {
   //put your config please
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
