const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, rgb, degrees } = PDFLib;

submitBtn.addEventListener("click", () => {

  //check if the text is empty or not
  // if (val.trim() !== "" && userName.checkValidity()) {
  //   // console.log(val);
  //   generatePDF(val);
  // } else {
  //   userName.reportValidity();
  // }
  
  generatePDF(userName);
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("./ticket.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  // pdfDoc.registerFontkit(fontkit);

  //get font
  // const fontBytes = await fetch("./Sanchez-Regular.ttf").then((res) =>
  //   res.arrayBuffer()
  // );

  // Embed our custom font in the document
  // const SanChezFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 400,
    y: 270,
    size: 58,
    // font: SanChezFont,
    color: rgb(0.2, 0.84, 0.67),
  });
  const textCode = "SDJSH!1212";
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textCode}`;

  const jpgImageBytes = await fetch(url).then((res) => res.arrayBuffer());
  const jpgImage = await pdfDoc.embedPng(jpgImageBytes);

  const jpgDims = jpgImage.scale(0.9);
  firstPage.drawImage(jpgImage, {
    x: 425,
    y: 380,
    width: jpgDims.width,
    height: jpgDims.height,
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    "Padhega India Subscription Certificate.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
};
// init();
