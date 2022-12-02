const readFileSync = require("fs").readFileSync;
var input = readFileSync("01/input.txt", {
  encoding: "utf8",
  flag: "r",
}).trim();

let individualElf = input.split("\n\n");
const highestCaloriesSum = individualElf
  .map((individualElfSum) =>
    individualElfSum
      .split("\n")
      .reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        0
      )
  )
  .sort((a, b) => b - a);

console.log(highestCaloriesSum[0]);
console.log(
  highestCaloriesSum
    .slice(0, 3)
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    )
);
