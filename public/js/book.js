let firestore = firebase.firestore();
// variable to store the event id
let eventID = 1;

//Get Submit Form
let btn = document.getElementById("btn");

//Create Event Listener To Allow Form Submission
btn.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let name = document.getElementById("name").value;
  let sName = document.getElementById("sName").value;
  let sDesc = document.getElementById("sDesc").value;
  let sVenue = document.getElementById("sVenue").value;
  let tickets = document.getElementById("ticketNo").value;
  let sDate = document.getElementById("sDate").value;

  firebase
    .database()
    .ref("visitors/" + eventID)
    .set({
      eventID: eventID,
      name: name,
      sName: sName,
      sDesc: sDesc,
      sVenue: sVenue,
      noOfTickets: tickets,
      sDate: sDate,
    });

  eventID++;
  //alert for form submission
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  clearForm();
});

function clearForm() {
  document.getElementById("form").reset();
}
