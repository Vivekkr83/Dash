// const fetch = require("node-fetch");
import fetch from 'node-fetch';
// const fs = require("fs");
import fs from 'fs';
// const FileType =  require("file-type");
import { fileTypeFromBuffer } from "file-type";// const FileType = (...args) =>
//   require("file-type").then(({ default: FileType }) => FileType(...args));

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
query({ inputs: "Arpit Sureka riding a elephant" }).then(async (response) => {
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
