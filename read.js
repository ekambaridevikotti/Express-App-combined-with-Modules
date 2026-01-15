import fs from "fs";

export function readFileData() {
  return new Promise((resolve, reject) => {
    fs.readFile("Data.txt", "utf-8", (err, data) => {
      if (err) {
        reject("Unable to read file");
      } else {
        resolve(data);
      }
    });
  });
}
