
var firebaseConfig = {
      apiKey: "AIzaSyDbLDwzovhRZclrBT0YqXHKq08S-GU51PY",
      authDomain: "kwitter-f96c8.firebaseapp.com",
      databaseURL: "https://kwitter-f96c8-default-rtdb.firebaseio.com",
      projectId: "kwitter-f96c8",
      storageBucket: "kwitter-f96c8.appspot.com",
      messagingSenderId: "567912710374",
      appId: "1:567912710374:web:0a18abf27c8cac61fc3b27"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot){
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
