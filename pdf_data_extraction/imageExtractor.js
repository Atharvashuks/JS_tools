// const Tesseract = require("tesseract.js");
// const sharp = require("sharp");

// async function extractTextFromImage(imagePath) {
//   try {
//     const preprocessedImage = await sharp(imagePath)
//       .resize(4000)
//       .grayscale()
//       .toBuffer();

//     const {
//       data: { text },
//     } = await Tesseract.recognize(preprocessedImage);
//     return text;
//   } catch (error) {
//     throw error;
//   }
// }

// const imagePath = "atharva shukla2.png";

// extractTextFromImage(imagePath)
//   .then((extractedText) => {
//     console.log("Extracted text:");
//     console.log(extractedText);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const Tesseract = require("tesseract.js");
const sharp = require("sharp");

async function extractSpecificInfoFromImage(imagePath, roi) {
  try {
    // Load the image
    const imageBuffer = await sharp(imagePath).toBuffer();

    // Crop the image to the Region of Interest (ROI)
    const roiBuffer = await sharp(imageBuffer).extract(roi).toBuffer();

    // Perform OCR on the cropped ROI
    const {
      data: { text },
    } = await Tesseract.recognize(roiBuffer);

    return text.trim(); // Remove leading/trailing white spaces
  } catch (error) {
    throw error;
  }
}

const imagePath = "atharva shukla2.png"; // Replace with the path to your image file
const roi = { left: 500, top: 500, width: 500, height: 500 }; // Adjust ROI coordinates

extractSpecificInfoFromImage(imagePath, roi)
  .then((extractedText) => {
    console.log("Extracted text from the specified region:");
    console.log(extractedText);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
