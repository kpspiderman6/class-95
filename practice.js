
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBmLwMaB1klqrcWe2pcwvrhAmGb8fhuFQ",
    authDomain: "kwitter-930c8.firebaseapp.com",
    projectId: "kwitter-930c8",
    storageBucket: "kwitter-930c8.appspot.com",
    messagingSenderId: "823622710261",
    appId: "1:823622710261:web:2f74ed539bcc17c708a6bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function ADD(){
     input1 = document.getElementById("input1").value;
     firebase.database().ref("/").child(input1).update({ purpose : "adding room name" }); 
  }