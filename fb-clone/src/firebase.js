import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAgDuoOskzrSAke9Y4Lv9D7_ekNIbiuMcQ",
    authDomain: "facebook-clone-eff68.firebaseapp.com",
    databaseURL: "https://facebook-clone-eff68.firebaseio.com",
    projectId: "facebook-clone-eff68",
    storageBucket: "facebook-clone-eff68.appspot.com",
    messagingSenderId: "4510320330",
    appId: "1:4510320330:web:17ecf35612d4cd23bbd633",
    measurementId: "G-TWM4NR31MC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;