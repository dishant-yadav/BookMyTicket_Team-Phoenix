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


// logic to display the monumnet price and name
const price = 45;
const noOfTickets = 50;

//Get Submit Form
let btn = document.getElementById("btn");
let ticketNo = 1;

//Create Event Listener To Allow Form Submission
btn.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let place = document.getElementById("place").value;
  // let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value + "";
  
  if (ticketNo <= noOfTickets) {

    firebase
      .database()
      .ref("visitors/" + ticketNo)
      .set({
        name: name,
        // gender:gender,
        place: place,
        age: age,
        email: email,
        date: date,
        ticketCode: ticketCode(),
        ticketNo: ticketNo,
        price: price,
      });
    
    ticketNo++;
    //alert for form submission
    alert("Your Form Has Been Submitted Successfully");
    window.location.href = "/download";
  }
  else {
    alert("Your are late!!!\nCome back tommorow to book the ticket");
  }

  //clear form after submission
  clearForm();
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

