// const fetch = require("node-fetch");
import fetch from 'node-fetch';
// const fs = require("fs");
import fs from 'fs';
// const FileType =  require("file-type");
import { fileTypeFromBuffer } from "file-type";// const FileType = (...args) =>
//   require("file-type").then(({ default: FileType }) => FileType(...args));
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON data in the request body

app.post('/generate-image', async (req, res) => {
  const text = req.body.text; // Retrieve text from the request body
  const imageData = generateImageFromText(text); // Generate image data from text

  // Set the Content-Type header to indicate an image response
  res.setHeader('Content-Type', 'image/png');

  // Send the image data as a response
  res.send(imageData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function query(data) {
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        Accept: "image/png",
        Authorization:
          "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

function generateImageFromText(text) {
  // Implement logic to generate image data from text
  // ...
  query({ inputs: text }).then(async (response) => {
    // Use image
    console.log(response);
  //   var file = new Blob([response], {type:'image/png'});
  //         saveAs(file, 'image.png');
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileType = await fileTypeFromBuffer(buffer);
    if (fileType.ext) {
      const outputFileName = `yourfilenamehere.${fileType.ext}`;
      fs.createWriteStream(outputFileName).write(buffer);
    } else {
      console.log(
        "File type could not be reliably determined! The binary data may be malformed! No file saved!"
      );
    }
  }
  );

  return imageData;
}
