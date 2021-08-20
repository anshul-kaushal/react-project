import firebase from 'firebase/app'
import 'firebase/firestore'
 
var firebaseConfig = {
    apiKey: "AIzaSyCNUaFBckMF-OL_DpoQuPPGZ6nKgeRqNmQ",
    authDomain: "react-project-ak2021.firebaseapp.com",
    projectId: "react-project-ak2021",
    storageBucket: "react-project-ak2021.appspot.com",
    messagingSenderId: "886328876504",
    appId: "1:886328876504:web:53d512effa3d04471026ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase