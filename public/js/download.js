// logic to print the ticket
const name = document.getElementById("name");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

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
  const existingPdfBytes = await fetch("./../resources/ticket.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./../resources/fonts/Poppins-Medium.otf").then(
    (res) => res.arrayBuffer()
  );

  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  firstPage.drawText(name, {
    x: 135,
    y: 470,
    size: 24,
    font: SanChezFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");
  const fileName = name + ".pdf";
  console.log(fileName);
  const file = new File([pdfBytes], fileName, {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file);
  clearForm();
};

function clearForm() {
  form.reset();
}
