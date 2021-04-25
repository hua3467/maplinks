 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
      apiKey: "AIzaSyD7LNvOL26cGrZKmWJxwlwwdFxRF2hstME",
      authDomain: "time-capsule-43322.firebaseapp.com",
      databaseURL: "https://time-capsule-43322-default-rtdb.firebaseio.com",
      projectId: "time-capsule-43322",
      storageBucket: "time-capsule-43322.appspot.com",
      messagingSenderId: "536145783566",
      appId: "1:536145783566:web:165d6d7dc6e53bc009c55f",
      measurementId: "G-V0N9H5ZW9S"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 const dbName = "boardgamers";

 const db = firebase.database();
 const dbRef = db.ref(dbName);