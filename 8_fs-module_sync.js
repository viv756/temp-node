const { readFileSync, writeFileSync } = require("fs");
console.log('satrt');

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result_sync.txt",
  `Here is the result : ${first}, ${second}`,{ flag: "a" }
)
console.log('Done with this Task');
  console.log('Starting the next one');