const firebaseConfig = {
  apiKey: "AIzaSyCR7v0ja5djl4_S0XI3tn9orW5ywPx1HmM",

  authDomain: "project-firebase-55730.firebaseapp.com",

  databaseURL: "https://project-firebase-55730-default-rtdb.firebaseio.com",

  projectId: "project-firebase-55730",

  storageBucket: "project-firebase-55730.appspot.com",

  messagingSenderId: "151394577105",

  appId: "1:151394577105:web:b44f08f1d48ff1899173f0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function save() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let age = document.getElementById("age");

  database.ref("users/" + username).set({
    email: email,
    password: password,
    username: username,
    say_something: say_something,
    favourite_food: favourite_food,
  });

  alert("Saved");
}

function get() {
  // var username = document.getElementById("username").value;

  var user_ref = database.ref("users/" + "ABCD");
  user_ref.on("value", function (snapshot) {
    var data = snapshot.val();

    alert(data.email);
    console.log(data.email);
  });
}
