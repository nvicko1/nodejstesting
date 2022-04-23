//  2  ways
// const fs = require("fs");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

console.log("start");

writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this");
console.log("start with the next one");
