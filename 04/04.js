const readFileSync = require("fs").readFileSync;
var input = readFileSync("04/input.txt", {
  encoding: "utf8",
  flag: "r",
});

let pairs = input.split("\n");

function part1(first, second) {
    let firstSplit = first.split("-").map(Number);
    let secondSplit = second.split("-").map(Number);
    if ((firstSplit[0] <= secondSplit[0]) && (firstSplit[1] >= secondSplit[1])) {
        return 1;
    }
    else if ((secondSplit[0] <= firstSplit[0]) && (secondSplit[1] >= firstSplit[1])) {
        return 1;
    } else {
        return 0;
    }
  }
  
  var pairRepeat = pairs.map((pair) => {
    const splitPair = pair.split(",");
    return part1(splitPair[0], splitPair[1]);
  });
  
  console.log(pairRepeat.reduce((a, b) => a + b));

  function part2(first, second) {
    let firstSplit = first.split("-").map(Number);
    let secondSplit = second.split("-").map(Number);
    if( (firstSplit[0] >= secondSplit[0] && firstSplit[0] <= secondSplit[1]) || (firstSplit[1] >= secondSplit[0] && firstSplit[1] <= secondSplit[1]) ||
        (secondSplit[0] >= firstSplit[0] && secondSplit[0] <= firstSplit[1]) || (secondSplit[1] >= firstSplit[0] && secondSplit[1] <= firstSplit[1]) ){
        return 1;
    }
    else {
        return 0;
    }
  }
  
  var pairRepeat = pairs.map((pair) => {
    const splitPair = pair.split(",");
    return part2(splitPair[0], splitPair[1]);
  });
  
  console.log(pairRepeat.reduce((a, b) => a + b));