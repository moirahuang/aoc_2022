const readFileSync = require("fs").readFileSync;
var input = readFileSync("06/input.txt", {
  encoding: "utf8",
  flag: "r",
}).trim();

function part1(input) {
    let s = new Set();
    for (var i = 0; i < input.length; i++) {
        s = new Set()
        for (let j = 0; j < 14; j++) {
            s.add(input[i+j]);
        }
        if (s.size === 14) {
            break
        }
    }
    return(i+14);
  }
  
  console.log(part1(input));