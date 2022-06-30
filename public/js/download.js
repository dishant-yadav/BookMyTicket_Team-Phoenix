// logic to print the ticket
const name = document.getElementById("name").value;
const btn = document.getElementById("btn");
const form = document.getElementById("form");

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

// let firestore = firebase.firestore();

const { PDFDocument, rgb, degrees } = PDFLib;

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

btn.addEventListener("click", () => {
  const val = capitalize(name.value);

  //check if the text is empty or not
  if (val.trim() !== "" && name.checkValidity()) {
    // console.log(val);
    generatePDF(val);
  } else {
    name.reportValidity();
  }
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("./../resources/ticket.pdf").then(
    (res) => res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./../resources/fonts/Poppins-Medium.otf").then(
    (res) => res.arrayBuffer()
  );

  // Embed our custom font in the document
  const poppinsFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  firstPage.drawText(name, {
    x: 135,
    y: 470,
    size: 24,
    font: poppinsFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  firstPage.drawText("Hello", {
    x: 135,
    y: 435,
    size: 24,
    font: poppinsFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  const pdfBytes = await pdfDoc.save();
  const fileName = name + ".pdf";
  const file = new File([pdfBytes], fileName, {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file);
  clearForm();
};

function clearForm() {
  form.reset();
}

function fetchAllData() {
  let firebaseRef = firebase.database().ref("visitors");
  let dbName;
  firebaseRef.once("value", function (snapshot) {
    let visitorsData = snapshot.val();
    dbName = visitorsData[name].name;
    // console.log(visitorsData[name].name);
    // console.log(visitorsData[name].age);
  });
  return dbName;
}
fetchAllData();
