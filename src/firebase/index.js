import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDrkvQPwhiFOzoXRt9MssYs3QCcLEEotNY",
  authDomain: "jira-test-4446d.firebaseapp.com",
  databaseURL: "https://jira-test-4446d.firebaseio.com",
  projectId: "jira-test-4446d",
  storageBucket: "jira-test-4446d.appspot.com",
  messagingSenderId: "1048023791137"
};
firebase.initializeApp(config);

export default firebase;
