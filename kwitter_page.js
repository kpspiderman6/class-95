//YOUR FIREBASE LINKS
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
Username1 = localStorage.getItem("Username");
Roomname = localStorage.getItem("ROOMNAME");
function logout(){
      window.location="index.html";
      localStorage.removeItem("Username");
      localStorage.removeItem("ROOMNAME");
    }
function Send_message(){
      mess = document.getElementById("message_input").value;
      firebase.database().ref(Roomname).push({ name : Username1,message:mess,like:0
       }); 
       document.getElementById("message_input").value="";
}
function getData() { firebase.database().ref("/"+Roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         like = message_data['like'];
         message = message_data['message'];
         display_name = "<h1>"+name+"<img class='img_1'src='tick.png'></h1>";
         display_message = "<h1>"+message+"</h1>";
         display_like = "<button class='btn btn-primary'type='button'id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
         display_thumbsup = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><br>"
         row = display_name+display_message+display_like+display_thumbsup;
         document.getElementById("output").innerHTML += row;
         
//Start code

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log(message_id);
      button_id = message_id;
      like1 = document.getElementById(button_id).value;
      like2 = Number(like1)+1;
      console.log(like2);
      firebase.database().ref(Roomname).child(message_id).update({ like : like2 });
}