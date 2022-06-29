const firebaseConfig = {
  apiKey: "AIzaSyA1auz8DprtLHdUUK4slrw9BHBpLeg-Xis",

  authDomain: "project-33df7.firebaseapp.com",

  projectId: "project-33df7",

  storageBucket: "project-33df7.appspot.com",

  messagingSenderId: "597512362086",

  appId: "1:597512362086:web:753017a65c25220e8975a7",

  measurementId: "G-SVPN15G6Z4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();
// variable to store the event id

//Get Submit Form
let btn = document.getElementById("btn");

//Create Event Listener To Allow Form Submission
btn.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let sName = document.getElementById("place").value;
  // let sDesc = document.getElementById("sDesc").value;
  // let sVenue = document.getElementById("sVenue").value;
  let tickets = document.getElementById("ticketNo").value;
  let price = document.getElementById("price").value;
  let sDate = document.getElementById("sDate").value;

  firebase
    .database()
    .ref("monuments/" + sName)
    .set({
      name: name,
      sName: sName,
      // sDesc: sDesc,
      // sVenue: sVenue,
      noOfTickets: tickets,
      price: price,
      sDate: sDate,
    });

  //alert for form submission
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  clearForm();
});

function clearForm() {
  document.getElementById("form").reset();
}
