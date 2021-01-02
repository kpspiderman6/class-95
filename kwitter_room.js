
//ADD YOUR FIREBASE LINKS HERE

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCBmLwMaB1klqrcWe2pcwvrhAmGb8fhuFQ",
      authDomain: "kwitter-930c8.firebaseapp.com",
      databaseURL: "https://kwitter-930c8-default-rtdb.firebaseio.com",
      projectId: "kwitter-930c8",
      storageBucket: "kwitter-930c8.appspot.com",
      messagingSenderId: "823622710261",
      appId: "1:823622710261:web:2f74ed539bcc17c708a6bc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username");
document.getElementById("welcome").innerHTML="Welcome"+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + roomname); 
      row = "<div class='room_name' id="+roomname+" onclick='redirectToRoomName(this.id)' >#"+ roomname +"</div><hr>";
       document.getElementById("trending_rooms").innerHTML += row;
      //End code
      });});}
getData();
function Logout(){
  window.location="index.html";
  localStorage.removeItem("Username");
  localStorage.removeItem("ROOMNAME");
}
function add_room(){
  Room_name = document.getElementById("roomname").value;
  firebase.database().ref("/").child(Room_name).update({ purpose : "adding room name" }); 
  localStorage.setItem("ROOMNAME",Room_name);
  window.location="kwitter_page.html";
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
}