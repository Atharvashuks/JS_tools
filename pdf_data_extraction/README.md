# PDF Data Extraction Tool

This Node.js tool is designed for extracting data from PDF documents using the `pdf-parse` and `fs-extra` packages.

## Prerequisites

Before you get started, make sure you have the following installed on your system:

1. [Node.js](https://nodejs.org/): You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

Follow these steps to set up the tool:

1. Clone or download this project to your local machine.

2. Open a terminal and navigate to the project's directory.

3. Install the required packages using npm:

   ```bash
   npm install

## Usage

1. Place the PDF documents you want to extract data from in the main project directory or copy the path of the PDF.
2. Open the pdfParser.js file in your code editor.
3. Locate the variable named pdfFilePath in the code.
4. Set the value of pdfFilePath to the file path of your PDF document.
   
   Example:
   ```bash
   const pdfFilePath = "newResume P.pdf";

>Replace '/path/to/your/pdf-file.pdf' with the actual file path of the PDF document you want to parse.

5. Save the changes to the pdfParser.js file.

5. In your terminal, run the tool by executing the following command:

    ```bash
    node pdfParser.js

## Configuration
To customize the tool or specify a different output file, you can modify the `pdfParser.js` file and adjust the settings.

## Dependencies
[pdf-parse](https://www.npmjs.com/package/pdf-parse): A library for extracting text and metadata from PDF files.

[fs-extra](https://www.npmjs.com/package/fs-extra): A package that provides extra file system methods.

## License
This tool is open-source and distributed under the MIT License. You are free to use, modify, and distribute it.

Feel free to explore, use, and contribute to this tool as needed.