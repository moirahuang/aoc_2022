// used https://github.com/tpatel/advent-of-code-2022/blob/main/day02.mjs

const readFileSync = require("fs").readFileSync;
const lines = readFileSync("02/input.txt", {
  encoding: "utf8",
  flag: "r",
}).trim();

const individualPlays = lines.split("\n").map((line) => line.split(" "));

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};

function score(opponentMove, ourMove) {
  if (opponentMove === ourMove) {
    return ourMove + 3;
  } else if (
    (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)
  ) {
    return ourMove + 6;
  }
  return ourMove;
}

const roundScore = individualPlays.map((line) => {
  const opponentMove = mapInput[line[0]];
  const ourMove = mapInput[line[1]];
  return score(opponentMove, ourMove);
});

console.log(roundScore.reduce((a, b) => a + b, 0));

const solution = {
  A: {
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

const round2Score = individualPlays.map((line) => {
  const opponentMove = mapInput[line[0]];
  const ourMove = solution[line[0]][line[1]];
  return score(opponentMove, ourMove);
});

console.log(round2Score.reduce((a, b) => a + b, 0));
