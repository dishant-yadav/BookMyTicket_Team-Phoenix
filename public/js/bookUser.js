//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyA1auz8DprtLHdUUK4slrw9BHBpLeg-Xis",

  authDomain: "project-33df7.firebaseapp.com",

  projectId: "project-33df7",

  storageBucket: "project-33df7.appspot.com",

  messagingSenderId: "597512362086",

  appId: "1:597512362086:web:753017a65c25220e8975a7",

  measurementId: "G-SVPN15G6Z4",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("vistors");

//Get Submit Form
let btn = document.getElementById("btn");

//Create Event Listener To Allow Form Submission
btn.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value + "";

  if (name.strip() == "") {
    alert("Name cannot be blank");
  }

  if (!email.includes("@") && !email.includes(".com")) {
    alert("Name cannot be blank");
  }
  firestore
    .collection("visitors")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {});
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      name: name,
      gender: gender,
      age: age,
      email: email,
      date: date,
      ticketCode: ticketCode(),
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  clearForm();

  window.location.href = "/success";
});

function clearForm() {
  document.getElementById("form").reset();
}

function ticketCode() {
  const text = "ZTZV";
  const number = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);
  const ticketCode = text + number;
  // console.log(ticketCode);
  return ticketCode;
}
