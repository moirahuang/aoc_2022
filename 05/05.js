// took from the subredit because i tried to do it myself and hardcode the column that i wanted to get but it ended up taking too long and i got defeated
// https://github.com/FriendlyUser1/adventofcode/blob/main/2022/day5/stacks.js

const input = require("fs").readFileSync("05/input.txt", "utf-8").split("\n");

const parseInput = (input) => {
  let nStacks = 0,
    hStacks = [],
    stacks = ["_"];

  for (let line = 0; !input[line].startsWith(" 1"); line++) {
    let stack = input[line]
      .split("    ")
      .map((s) => (s.length > 3 ? s.split(" ") : s))
      .flat();

    nStacks = stack.length;
    hStacks.push(stack);
  }

  for (let j = 0; j < nStacks; j++) {
    let cStack = "";
    for (let k = 0; k < hStacks.length; k++)
      if (hStacks[k][j] !== "") cStack += hStacks[k][j].replace(/[\[\]]/g, "");
    stacks.push(cStack);
  }

  return stacks;
};

const solvePart1 = (stacks) => {
  for (let instr = 2; instr < input.length; instr++) {
    if (!input[instr].startsWith("move")) continue;

    let direction = input[instr].match(/(\d+)/g).map((n) => parseInt(n)),
      crate = stacks[direction[1]].substring(0, direction[0]);

    crate = crate.split("").reverse().join("");

    stacks[direction[1]] = stacks[direction[1]].slice(direction[0]);
    stacks[direction[2]] = crate + stacks[direction[2]];
  }

  let top = "";
  for (let i = 0; i < stacks.length; i++) {
    top = top + stacks[i][0];
  }
  return top;
};

const solvePart2 = (stacks) => {  
    for (let instr = 2; instr < input.length; instr++) {
      if (!input[instr].startsWith("move")) continue;
  
      let direction = input[instr].match(/(\d+)/g).map((n) => parseInt(n)),
        crate = stacks[direction[1]].substring(0, direction[0]);
    
      stacks[direction[1]] = stacks[direction[1]].slice(direction[0]);
      stacks[direction[2]] = crate + stacks[direction[2]];
    }
  
    let top = "";
    for (let i = 0; i < stacks.length; i++) {
      top = top + stacks[i][0];
    }
    return top;
  };
  
let stacks = parseInput(input);

console.log(solvePart1(stacks));
console.log(solvePart2(stacks));
