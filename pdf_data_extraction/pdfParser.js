const fs = require("fs-extra");
const pdf = require("pdf-parse");

async function extractTextFromPDF(pdfFilePath) {
  const dataBuffer = fs.readFileSync(pdfFilePath);
  const data = await pdf(dataBuffer);

  return data.text;
}

const pdfFilePath = "newResume P.pdf";

extractTextFromPDF(pdfFilePath)
  .then((data) => {
    // console.log(data);
    const filePath = "PDF_DATA.txt";

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error("Error writing JSON data to file:", err);
      } else {
        console.log("JSON data has been written to", filePath);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
