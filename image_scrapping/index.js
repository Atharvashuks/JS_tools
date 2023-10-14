const SerpApi = require("google-search-results-nodejs");
require("dotenv").config();

const fs = require("fs");

const search = new SerpApi.GoogleSearch(process.env.API_KEY);

const searchQuery = "vada pav"; // enter your search query

const params = {
  q: searchQuery,
  engine: "google",
  hl: "en",
  gl: "us",
  tbm: "isch",
};

const getJson = () => {
  return new Promise((resolve) => {
    search.json(params, resolve);
  });
};

const getResults = async () => {
  const imagesResults = [];
  while (true) {
    const json = await getJson();
    if (json.images_results) {
      imagesResults.push(...json.images_results);
      params.ijn ? (params.ijn += 1) : (params.ijn = 1);
    } else break;
  }
  return imagesResults;
};

getResults().then((result) => {
  const finaldata = JSON.stringify(result);
  const filePath = "data.json";

  fs.writeFile(filePath, finaldata, (err) => {
    if (err) {
      console.error("Error writing JSON data to file:", err);
    } else {
      console.log("JSON data has been written to", filePath);
    }
  });

  console.log(result);
});
