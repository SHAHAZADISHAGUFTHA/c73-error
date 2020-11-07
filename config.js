import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD3qP-aXUEaNxdWd4XnfFGSlmklcZYjeFM",
  authDomain: "wily-app-93f87.firebaseapp.com",
  databaseURL: "https://wily-app-93f87.firebaseio.com",
  projectId: "wily-app-93f87",
  storageBucket: "wily-app-93f87.appspot.com",
  messagingSenderId: "848142013018",
  appId: "1:848142013018:web:f65827f77442aee371fe63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
