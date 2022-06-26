const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const btn = document.getElementById("btn");

const { PDFDocument, rgb, degrees } = PDFLib;

btn.addEventListener("click", () => {
  generatePDF(name);
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("./../resources/ticket.pdf").then(
    (res) => res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  // pdfDoc.registerFontkit(fontkit);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 280,
    y: 270,
    size: 58,
    color: rgb(0.2, 0.84, 0.67),
  });
  const textCode = "SDJSH!1212";
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textCode}`;

  const pngImageBytes = await fetch(url).then((res) => res.arrayBuffer());
  const pngImage = await pdfDoc.embedPng(pngImageBytes);

  const pngDims = pngImage.scale(0.5);
  firstPage.drawImage(pngImage, {
    x: 100,
    y: 100,
    width: pngDims.width,
    height: pngDims.height,
  });

  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  var file = new File([pdfBytes], "Ticket.pdf", {
    type: "application/pdf;charset=utf-8",
  });
  saveAs(file);
};
// init();
